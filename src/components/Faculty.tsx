import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const faculty = [
  {
    name: 'Sarah Kimani',
    role: 'Piano & Music Theory',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
    credentials: 'Master of Music, University of Nairobi',
    experience: '12+ years teaching experience',
    specialties: ['Classical Piano', 'Jazz Theory', 'Music Composition']
  },
  {
    name: 'James Mwangi',
    role: 'Guitar & Contemporary Music',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300',
    credentials: 'Bachelor of Music, Kenyatta University',
    experience: '10+ years professional performer',
    specialties: ['Acoustic Guitar', 'Electric Guitar', 'Songwriting']
  },
  {
    name: 'Grace Wanjiku',
    role: 'Vocal Performance',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
    credentials: 'Diploma in Music, Kenya Conservatoire',
    experience: '8+ years stage experience',
    specialties: ['Gospel Music', 'Contemporary Vocals', 'Choir Direction']
  },
  {
    name: 'Peter Ochieng',
    role: 'Brass & Woodwinds',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300',
    credentials: 'Certificate in Music, Kenya Institute',
    experience: '6+ years teaching experience',
    specialties: ['Trumpet', 'Saxophone', 'Music Theory']
  }
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Meet Our Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced musicians and educators who are passionate about nurturing musical talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((instructor, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-2">{instructor.name}</h3>
                <p className="text-pink-600 font-semibold mb-4">{instructor.role}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{instructor.credentials}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{instructor.experience}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {instructor.specialties.map((specialty, specialtyIndex) => (
                      <span key={specialtyIndex} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}