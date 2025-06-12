import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = 'your-secret-key-change-in-production';

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files for admin panel
app.use('/admin', express.static(path.join(__dirname, 'admin')));

// Initialize SQLite database
const db = new sqlite3.Database('academy.db');

// Create tables
db.serialize(() => {
  // Contact form submissions table
  db.run(`CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    program TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Admin users table
  db.run(`CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Create default admin user (username: admin, password: admin123)
  const hashedPassword = bcrypt.hashSync('admin123', 10);
  db.run(`INSERT OR IGNORE INTO admin_users (username, password) VALUES (?, ?)`, 
    ['admin', hashedPassword]);
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// API Routes

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, program, message } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Required fields missing' });
  }

  db.run(
    `INSERT INTO contact_submissions (first_name, last_name, email, program, message) 
     VALUES (?, ?, ?, ?, ?)`,
    [firstName, lastName, email, program || '', message || ''],
    function(err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ success: true, id: this.lastID });
    }
  );
});

// Admin login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM admin_users WHERE username = ?', [username], (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, username: user.username });
  });
});

// Get all contact submissions (protected)
app.get('/api/admin/submissions', authenticateToken, (req, res) => {
  db.all(
    'SELECT * FROM contact_submissions ORDER BY created_at DESC',
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(rows);
    }
  );
});

// Delete submission (protected)
app.delete('/api/admin/submissions/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  
  db.run('DELETE FROM contact_submissions WHERE id = ?', [id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ success: true, deleted: this.changes });
  });
});

// Serve admin panel
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Admin panel available at http://localhost:${PORT}/admin`);
  console.log('Default admin credentials: username=admin, password=admin123');
});