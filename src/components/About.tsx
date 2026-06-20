import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Users, Sparkles, MapPin, Utensils } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
    },
    {
      icon: Sparkles,
      title: 'Hygienic Environment',
      description: 'Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Ut enim ad minim veniam quis nostrud exercitation.',
    },
    {
      icon: Utensils,
      title: 'Diverse Cuisine',
      description: 'Duis aute irure dolor in reprehenderit in voluptate.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1974" 
                alt="Metro Food Court Ambience" 
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
              title="About Metro Food Court" 
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              centered={false}
            />
            
            <p className="text-text/80 text-lg mb-10 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
            
            {/* Signature or extra Indian design element could go here */}
          </div>

        </div>
      </div>
    </section>
  );
};
