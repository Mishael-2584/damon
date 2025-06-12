import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mary Njeri',
    role: 'Piano Student Parent',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'My daughter started piano lessons at Damon Music Academy when she was 4 years old. The patience and skill of the instructors is remarkable. She now plays beautifully and loves music!'
  },
  {
    name: 'David Kariuki',
    role: 'Guitar Student',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'I joined as a complete beginner and within 6 months I was playing my favorite songs. The guitar program here is exceptional and the teachers really care about your progress.'
  },
  {
    name: 'Ruth Wambui',
    role: 'Voice Training Student',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'The vocal training program helped me discover my voice and build confidence. I now sing in my church choir and have even performed solo. Thank you Damon Music Academy!'
  },
  {
    name: 'Samuel Omondi',
    role: 'Trumpet Student',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Learning trumpet here has been an amazing journey. The instructors are professional and the learning environment is very supportive. I highly recommend this academy.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students and parents about their musical journey at Damon Music Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <Quote className="h-8 w-8 text-purple-500 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}