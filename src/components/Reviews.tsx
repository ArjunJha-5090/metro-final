import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul Sharma',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amazing experience overall!'
  },
  {
    name: 'Priya Patel',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Best food court in the city.'
  },
  {
    name: 'Amit Kumar',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 4,
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Great variety of options.'
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary/5 hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="What Our Customers Say" 
          subtitle="Real experiences from our valued guests."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative pt-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-md">
                <img src={review.photo} alt={review.name} className="w-full h-full object-cover" />
              </div>
              
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent mx-0.5" />
                ))}
              </div>
              
              <p className="text-center text-text/80 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              
              <div className="text-center">
                <h4 className="font-heading font-semibold text-secondary">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
