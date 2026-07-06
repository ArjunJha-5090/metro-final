import React from 'react';
import { Button } from './ui/Button';
import { MapPin, Phone } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay — no fixed attachment (iOS Safari fix) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://loremflickr.com/1400/800/feast,food?lock=107")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-secondary/90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
          Visit Metro Food Court Today
        </h2>
        
        <p className="text-base sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          From street food to grand banquets — every visit is an experience worth coming back for. Come hungry, leave happy.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6">
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
