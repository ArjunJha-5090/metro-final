import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';
import { FadeIn } from './animations/FadeIn';

const stalls = [
  {
    name: "The Rolls Counter",
    category: "Rolls",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: 'Our signature kaathi rolls, paneer rolls, and chicken tikka rolls wrapped to perfection.',
    rating: '4.9'
  },
  {
    name: "North Indian Kitchen",
    category: "North Indian",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: 'Authentic rich gravies, freshly baked breads, and aromatic curries straight from our kitchen.',
    rating: '4.8'
  },
  {
    name: "Chinese Wok",
    category: "Chinese",
    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: 'Sizzling noodles, fried rice, and Manchurian dishes tossed with authentic flavors.',
    rating: '4.7'
  }
];

export const FoodStalls: React.FC = () => {
  const navigate = useNavigate();
  const previewStalls = stalls.slice(0, 3);

  return (
    <section id="stalls" className="py-12 md:py-24 bg-white relative">
      {/* Subtle traditional pattern background overlay could go here */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <SectionHeading 
            title="Our Food Stalls" 
            subtitle="Explore a diverse range of culinary delights brought to you by our premium vendors."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {previewStalls.map((stall, index) => (
            <FadeIn key={index} direction="up" delay={index * 150}>
              <div className="premium-card premium-hover group flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                <img 
                  src={stall.image} 
                  alt={stall.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-sm font-semibold text-secondary">{stall.rating}</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-white text-sm font-medium tracking-wider uppercase">
                    {stall.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-heading font-bold text-2xl text-secondary mb-3">
                  {stall.name}
                </h3>
                <p className="text-text/70 text-sm leading-relaxed mb-4 flex-grow">
                  {stall.description}
                </p>
                <div className="pt-4 border-t border-orange-100 mt-auto flex justify-between items-center">
                  <button className="text-primary font-medium text-sm hover:text-orange-700 transition-colors">
                    View Menu &rarr;
                  </button>
                </div>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={300}>
          <div className="text-center">
            <Button size="lg" onClick={() => navigate('/stalls')} className="shadow-lg">
              View All Stalls
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
