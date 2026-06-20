import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Calendar, Search } from 'lucide-react';

const allEvents = [
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
  },
  {
    title: 'Live Music Evenings',
    date: 'Every Friday',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000',
    description: 'Enjoy live performances from local bands while you dine.'
  },
  {
    title: 'Kids Culinary Workshop',
    date: '1st Sunday of Month',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000',
    description: 'Fun cooking and decorating workshops for kids under 12.'
  }
];

export const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = allEvents.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="All Events & Celebrations" 
          subtitle="Explore our calendar of upcoming events and special celebrations."
        />

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search events..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No events found matching "{searchTerm}"
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
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
        )}
      </div>
    </div>
  );
};
