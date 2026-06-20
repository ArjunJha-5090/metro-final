import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

const stalls = [
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
  }
];

export const FoodStalls: React.FC = () => {
  const navigate = useNavigate();
  const previewStalls = stalls.slice(0, 3);

  return (
    <section id="stalls" className="py-24 bg-white relative">
      {/* Subtle traditional pattern background overlay could go here */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Our Food Stalls" 
          subtitle="Explore a diverse range of culinary delights brought to you by our premium vendors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewStalls.map((stall, index) => (
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

        <div className="text-center">
          <Button size="lg" onClick={() => navigate('/stalls')} className="shadow-lg">
            View All Stalls
          </Button>
        </div>
      </div>
    </section>
  );
};
