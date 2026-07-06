import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';
import { FadeIn } from './animations/FadeIn';

const events = [
  {
    title: 'Holi Food Festival',
    date: 'March 15 - March 17',
    image: '/assets/images/holi.png',
    description: 'Celebrate the festival of colors with our special themed thalis, traditional sweets like Gujiya, and endless joy!'
  },
  {
    title: 'Grand Iftaar Party',
    date: 'Ramadan Month',
    image: '/assets/images/iftaar.png',
    description: 'Break your fast with our lavish Iftaar spread featuring rich Haleem, Kebabs, Biryani, and traditional desserts.'
  },
  {
    title: 'Corporate Conference',
    date: 'Custom Bookings',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Host your corporate meetings and conferences in our fully-equipped halls with premium catering services.'
  }
];

export const Events: React.FC = () => {
  const navigate = useNavigate();
  const previewEvents = events.slice(0, 3);

  return (
    <section id="events" className="py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <SectionHeading 
            title="Events & Celebrations" 
            subtitle="Join us for special occasions and create unforgettable memories with your loved ones."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 mb-10">
          {previewEvents.map((event, index) => (
            <FadeIn key={index} direction="up" delay={index * 150}>
              <div className="premium-card premium-hover flex flex-col group h-full">
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
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={300}>
          <div className="text-center">
          <Button size="lg" onClick={() => navigate('/events')} className="shadow-lg">
            View All Events
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
