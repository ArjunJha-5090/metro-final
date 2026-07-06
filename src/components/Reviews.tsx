import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

const reviews = [
  {
    name: 'Rahul Sharma',
    photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Absolutely love the Paneer Tikka Rolls here! The portion sizes are generous and the service is super fast. Perfect spot for a quick bite with friends.'
  },
  {
    name: 'Priya Patel',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Metro Food Court has the best ambiance in Kankarbagh. We hosted my son\'s birthday party at the Banquet hall and the catering was flawless. Highly recommended!'
  },
  {
    name: 'Amit Kumar',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 4,
    text: 'Great variety of options under one roof. The Biryani is authentic and flavorful. It gets a bit crowded on weekends, but the food is definitely worth the wait.'
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-12 md:py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary/5 hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <SectionHeading 
            title="What Our Customers Say" 
            subtitle="Real experiences from our valued guests."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-8 mt-16 lg:mt-20">
          {reviews.map((review, index) => (
            <FadeIn key={index} direction="up" delay={index * 150}>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 relative pt-14 flex flex-col h-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md flex items-center justify-center bg-primary text-white font-heading font-bold text-3xl">
                {review.name.charAt(0)}
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
              
                <div className="text-center mt-auto">
                  <h4 className="font-heading font-semibold text-secondary">{review.name}</h4>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
