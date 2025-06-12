import React from 'react';
import { Play, Star, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Damon Music Academy
          <span className="text-orange-400 block text-3xl md:text-4xl mt-4 font-medium">
            Where Words Fail, Music Speaks
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Discover your musical potential with expert instruction in piano, guitar, violin, saxophone, trumpet, recorder, keyboard, and voice training.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-400 transition-all duration-200 transform hover:scale-105">
            Start Your Journey
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-200 flex items-center justify-center gap-2">
            <Play className="h-5 w-5" />
            Watch Demo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <Star className="h-6 w-6 text-orange-400" />
            <span className="text-lg">Expert Instructors</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Users className="h-6 w-6 text-orange-400" />
            <span className="text-lg">Classes for 3yrs+</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Award className="h-6 w-6 text-orange-400" />
            <span className="text-lg">Intake in Progress</span>
          </div>
        </div>
      </div>
    </section>
  );
}