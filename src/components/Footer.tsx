import React from 'react';
import { Music, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8 text-orange-400" />
              <span className="text-2xl font-bold">Damon Music Academy</span>
            </div>
            <p className="text-purple-200 mb-6 max-w-md">
              Where Words Fail, Music Speaks. Empowering musicians of all ages to discover their unique voice and achieve their musical dreams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-300 hover:text-orange-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-purple-300 hover:text-orange-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-purple-300 hover:text-orange-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-purple-300 hover:text-orange-400 transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Piano & Keyboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Guitar Lessons</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Voice Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Violin</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Trumpet</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Saxophone & Recorder</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-purple-200">
              <li>0701 195 460</li>
              <li>0735 211 627</li>
              <li>0721 952 647</li>
              <li>damonmusicacademy@gmail.com</li>
              <li>Mon-Fri: 7AM-7PM</li>
              <li>Sun: From Noon</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-300">
          <p>&copy; 2024 Damon Music Academy. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}