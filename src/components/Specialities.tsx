import React from 'react';
import { SectionHeading } from './ui/SectionHeading';

const specialities = [
  { name: "North Indian", image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { name: "South Indian", image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { name: "Chinese", image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { name: "Street Food", image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { name: "Beverages", image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { name: "Desserts", image: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1200" },
];

export const Specialities: React.FC = () => {
  return (
    <section id="specialities" className="py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Metro Specialities" 
          subtitle="Discover the most loved and highly recommended dishes across our entire food court."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {specialities.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[4/3]"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.name}
                </h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 hidden sm:block">
                  Lorem ipsum dolor sit amet, consectetur elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
