import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

const events = [
  {
    title: 'Diwali Special Feast',
    date: 'Oct 24 - Oct 26',
    image: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&q=80&w=1000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Holi Food Festival',
    date: 'March 15 - March 17',
    image: 'https://images.unsplash.com/photo-1533606689650-32df9eb7e974?auto=format&fit=crop&q=80&w=1000',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Weekend Family Nights',
    date: 'Every Sat & Sun',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1000',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];

export const Events: React.FC = () => {
  const navigate = useNavigate();
  const previewEvents = events.slice(0, 3);

  return (
    <section id="events" className="py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Events & Celebrations" 
          subtitle="Join us for special occasions and create unforgettable memories with your loved ones."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 mb-10">
          {previewEvents.map((event, index) => (
            <div key={index} className="premium-card premium-hover flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-text">{event.date}</span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-heading font-bold text-xl text-secondary mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-text/70 text-sm leading-relaxed mb-4 flex-grow">
                  {event.description}
                </p>
                <div className="pt-4 border-t border-orange-100 mt-auto">
                  <button className="text-primary font-medium text-sm hover:text-orange-700 transition-colors uppercase tracking-wider">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={() => navigate('/events')} className="shadow-lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};
