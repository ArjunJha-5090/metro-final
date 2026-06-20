import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { ShieldCheck, UtensilsCrossed, Coffee, Users, Tag, MapPin } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'Hygienic Kitchens', desc: 'Lorem ipsum dolor sit amet consectetur.' },
  { icon: UtensilsCrossed, title: 'Multiple Food Options', desc: 'Adipiscing elit sed do eiusmod tempor.' },
  { icon: Coffee, title: 'Comfortable Seating', desc: 'Incididunt ut labore et dolore magna.' },
  { icon: Users, title: 'Family Friendly', desc: 'Aliqua ut enim ad minim veniam.' },
  { icon: Tag, title: 'Affordable Pricing', desc: 'Quis nostrud exercitation ullamco.' },
  { icon: MapPin, title: 'Prime Location', desc: 'Laboris nisi ut aliquip ex ea commodo.' },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-background border-t border-b border-orange-50 relative overflow-hidden">
      {/* Decorative mandalas/shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Why Choose Metro Food Court" 
          subtitle="We pride ourselves on providing an exceptional dining experience that brings people together."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-text/70 text-sm max-w-xs">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
