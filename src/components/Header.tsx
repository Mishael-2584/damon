import React, { useState } from 'react';
import { Menu, X, Music } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-purple-700" />
            <span className="text-2xl font-bold text-purple-900">Damon Music Academy</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-700 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-purple-700 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-800 hover:to-pink-700 transition-all duration-200">
              Enroll Today
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-purple-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-purple-700 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-800 hover:to-pink-700 transition-all duration-200">
                  Enroll Today
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}