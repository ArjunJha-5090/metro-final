import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
       
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          One Destination.<br />
          <span className="text-primary">Endless Flavours.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Experience the finest culinary journey.
        </p>
    
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            icon={ArrowRight} 
            className="w-full sm:w-auto"
            onClick={() => navigate('/stalls')}
          >
            Explore Food Stalls
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            icon={MapPin} 
            className="w-full sm:w-auto !text-white !border-white hover:!bg-white hover:!text-text"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Visit Us
          </Button>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
