import React from 'react';
import { Guitar, Piano, Mic, Music, Drum as Trumpet, Music2 } from 'lucide-react';

const programs = [
  {
    icon: Piano,
    title: 'Piano & Keyboard',
    description: 'Master piano and keyboard techniques with comprehensive training for all skill levels.',
    features: ['Classical Piano', 'Contemporary Styles', 'Music Theory', 'Performance Skills'],
    color: 'bg-purple-100 text-purple-700'
  },
  {
    icon: Guitar,
    title: 'Guitar Lessons',
    description: 'Learn acoustic and electric guitar from beginner to advanced levels.',
    features: ['Acoustic Guitar', 'Electric Guitar', 'Chord Progressions', 'Solo Techniques'],
    color: 'bg-pink-100 text-pink-700'
  },
  {
    icon: Mic,
    title: 'Voice Training',
    description: 'Develop your vocal skills with professional coaching and performance techniques.',
    features: ['Vocal Technique', 'Breathing Exercises', 'Performance Skills', 'Stage Presence'],
    color: 'bg-orange-100 text-orange-700'
  },
  {
    icon: Music,
    title: 'Violin',
    description: 'Learn violin with expert instruction in classical and contemporary styles.',
    features: ['Classical Violin', 'Bow Technique', 'Music Reading', 'Ensemble Playing'],
    color: 'bg-purple-100 text-purple-700'
  },
  {
    icon: Trumpet,
    title: 'Trumpet',
    description: 'Master brass techniques with professional trumpet instruction.',
    features: ['Brass Technique', 'Embouchure Training', 'Jazz & Classical', 'Ensemble Work'],
    color: 'bg-pink-100 text-pink-700'
  },
  {
    icon: Music2,
    title: 'Saxophone & Recorder',
    description: 'Learn woodwind instruments with comprehensive instruction programs.',
    features: ['Saxophone Technique', 'Recorder Basics', 'Jazz Improvisation', 'Music Theory'],
    color: 'bg-orange-100 text-orange-700'
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive music education in multiple instruments for students aged 3 years and above.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className={`w-16 h-16 rounded-full ${program.color} flex items-center justify-center mb-6`}>
                  <program.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-purple-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-purple-700 to-pink-600 text-white py-3 rounded-full hover:from-purple-800 hover:to-pink-700 transition-all duration-200 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-700 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Class Schedule</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Weekdays</h4>
              <p className="text-lg">Monday - Friday</p>
              <p className="text-2xl font-bold text-orange-300">7AM - 7PM</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Weekends</h4>
              <p className="text-lg">Sunday</p>
              <p className="text-2xl font-bold text-orange-300">From Noon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}