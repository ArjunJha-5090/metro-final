import React from 'react';
import { Users, Heart, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section of About Page */}
        <div className="text-center mb-16 flex flex-col items-center">
          <img 
            src="/assets/images/logo.png" 
            alt="Metro Food Court Logo" 
            className="w-24 h-24 object-contain rounded-full border-2 border-accent/30 shadow-md mb-6 animate-fade-in"
          />
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium tracking-wider uppercase mb-4">
            Our Heritage
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary mb-6">
            The Story of Metro Food Court
          </h1>
          <div className="indian-divider"></div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-accent/20">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1974" 
                alt="Metro Food Court Ambience" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-secondary mb-6">
              A Journey of Flavours and Tradition
            </h2>
            <div className="space-y-6 text-text/80 text-lg leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="font-medium text-primary">
                "Our mission is to bring the authentic taste of street food into a comfortable, hygienic, and family-friendly environment."
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-accent/10 relative overflow-hidden">
          {/* subtle background pattern in the values box */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none" />
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary">Our Core Values</h2>
            <div className="indian-divider mt-6 mb-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto rounded-full bg-orange-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                  <value.icon className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-bold text-xl text-secondary mb-4">
                  {value.title}
                </h3>
                <p className="text-text/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
