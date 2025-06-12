import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Programs />
      <Faculty />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;