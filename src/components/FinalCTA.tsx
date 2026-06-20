import React from 'react';
import { Button } from './ui/Button';
import { MapPin, Phone } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2070")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed', // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-secondary/90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
          Visit Metro Food Court Today
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Experience culinary excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button 
            size="lg" 
            icon={MapPin} 
            className="w-full sm:w-auto bg-primary text-white border-none hover:bg-orange-50 focus:ring-primary shadow-lg transition-colors duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Directions
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            icon={Phone} 
            className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-accent opacity-50" />
    </section>
  );
};
