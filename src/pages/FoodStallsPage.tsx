import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Star, Search } from 'lucide-react';

// Using the same stalls data (could be moved to a shared data file later)
const allStalls = [
  {
    name: 'Royal Tandoor',
    category: 'North Indian',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=2070',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    rating: '4.8'
  },
  {
    name: 'Chaat Junction',
    category: 'Street Food',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2000',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    rating: '4.9'
  },
  {
    name: 'Dosa Express',
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=2000',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
    rating: '4.7'
  },
  {
    name: 'Biryani House',
    category: 'Mughlai',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=2000',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    rating: '4.9'
  },
  {
    name: 'Sweet Treats',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1585237466854-4775438865f9?auto=format&fit=crop&q=80&w=2000',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    rating: '4.6'
  },
  {
    name: 'Chai Point',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=2000',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
    rating: '4.8'
  },
  // Add a few more for the full page to show search working better
  {
    name: 'Pizza Corner',
    category: 'Italian',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=2000',
    description: 'Delicious wood-fired pizzas with authentic Italian ingredients and flavors.',
    rating: '4.5'
  },
  {
    name: 'Burger Joint',
    category: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=2000',
    description: 'Juicy, gourmet burgers served with crispy fries and special house sauce.',
    rating: '4.7'
  }
];

export const FoodStallsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStalls = allStalls.filter(stall => 
    stall.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    stall.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen relative">
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="All Food Stalls" 
          subtitle="Discover all the amazing culinary options available at Metro Food Court."
        />

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by name or category..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
          </div>
        </div>

        {filteredStalls.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No stalls found matching "{searchTerm}"
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStalls.map((stall, index) => (
              <div key={index} className="premium-card premium-hover group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={stall.image} 
                    alt={stall.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm font-semibold text-secondary">{stall.rating}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="text-white text-sm font-medium tracking-wider uppercase">
                      {stall.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-heading font-bold text-2xl text-secondary mb-3">
                    {stall.name}
                  </h3>
                  <p className="text-text/70 text-sm leading-relaxed mb-4 flex-grow">
                    {stall.description}
                  </p>
                  <div className="pt-4 border-t border-orange-100 mt-auto flex justify-between items-center">
                    <button className="text-primary font-medium text-sm hover:text-orange-700 transition-colors">
                      View Menu &rarr;
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
