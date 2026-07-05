import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Sparkles, Utensils } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

export const About: React.FC = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Sparkles,
      title: 'Hygienic Environment',
      description: 'Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      icon: Utensils,
      title: 'Authentic Flavour',
      description: 'Duis aute irure dolor in reprehenderit in voluptate.',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/assets/images/image.png" 
                alt="Birthday Party Setup at Metro Food Court" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-24 h-48 border-4 border-accent/30 rounded-full hidden lg:block -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <SectionHeading 
              title="Welcome to Metro Food Court" 
              subtitle="Where tradition meets modern culinary excellence in the heart of Lucknow."
              centered={false}
            />
            
            <p className="text-text/80 text-lg mb-8 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary border border-orange-100">
                      <feature.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-secondary mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-text/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button size="lg" variant="outline" onClick={() => navigate('/about')}>
              Read Our Full Story
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
