import React, { useState } from 'react';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';

const categories = ['All', 'Food Stories', 'Recipes', 'Events', 'Behind the Scenes', 'Culture'];

const blogPosts = [
  {
    id: 1,
    title: 'The Art of the Perfect Dum Biryani: A Heritage Recipe',
    excerpt: 'Journey into the royal kitchens of Lucknow and discover the ancient secrets behind the slow-cooked Dum Biryani that has enchanted food lovers for centuries.',
    image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Food Stories',
    author: 'Chef Rajeev Sharma',
    date: 'June 28, 2026',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'How We Source Our Spices: A Journey Across India',
    excerpt: 'From the pepper farms of Kerala to the saffron fields of Kashmir — we take you on a road trip to find the purest spices for Metro Food Court.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Behind the Scenes',
    author: 'Priya Mehta',
    date: 'June 20, 2026',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Celebrating Holi at Metro Food Court: An Event to Remember',
    excerpt: 'Colours, music, and the finest street food. Read about how we brought the festival of Holi alive inside our food court this spring.',
    image: 'https://images.pexels.com/photos/8891515/pexels-photo-8891515.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Events',
    author: 'Events Team',
    date: 'June 12, 2026',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 4,
    title: '5 South Indian Dishes You Must Try Before You Die',
    excerpt: 'Idli, Dosa, Sambar, Rasam, and Chettinad Curry — a definitive guide to the most iconic dishes from the southern tip of India.',
    image: 'https://loremflickr.com/1200/800/dosa,food?lock=112',
    category: 'Culture',
    author: 'Ananya Rao',
    date: 'June 5, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Recipe: Authentic Chaat in 20 Minutes',
    excerpt: 'Our head chaat-wala shares his foolproof recipe for pani puri, sev puri, and papdi chaat — the perfect snack for any occasion.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Recipes',
    author: 'Chef Ramesh',
    date: 'May 29, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Meet Our Chai Master: The Story Behind Every Cup',
    excerpt: 'Suresh ji has been brewing masala chai for over 30 years. We sit down with him to learn the magic behind the perfect cup that keeps customers coming back.',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Behind the Scenes',
    author: 'Deepa Nair',
    date: 'May 18, 2026',
    readTime: '5 min read',
    featured: false,
  },
];

export const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const featured = filtered.find(p => p.featured) || filtered[0];
  const rest = filtered.filter(p => p.id !== featured?.id);

  return (
    <div className="pb-24 min-h-screen bg-background relative selection:bg-accent selection:text-white">
      {/* Subtle background */}
      <div className="fixed inset-0 bg-indian-pattern opacity-[0.03] pointer-events-none z-0" />

      {/* Hero Banner */}
      <div className="w-full h-[35vh] md:h-[45vh] relative mb-12 md:mb-16 shadow-xl z-10">
        <img 
          src="https://loremflickr.com/1974/800/spices,ingredients?lock=115" 
          alt="Spices and Cooking" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/70 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-4">
          <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-[0.25em] text-white uppercase mb-4 md:mb-6 shadow-sm">
            <span className="w-1 h-1 rounded-full bg-primary" />
            Stories & Insights
            <span className="w-1 h-1 rounded-full bg-primary" />
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white mb-4 drop-shadow-lg leading-tight">
            The Metro Blog
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light drop-shadow-md">
            Recipes, cultural stories, behind-the-scenes journeys, and everything in between.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Category Filter */}
        <div className="w-full overflow-x-auto scrollbar-none mb-12 pb-4 px-4 sm:px-0 -mx-4 sm:mx-0" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-2.5 lg:justify-center w-max min-w-full">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full font-sans text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                  activeCategory === cat
                    ? 'bg-primary text-white border-primary shadow-[0_8px_20px_rgba(138,46,40,0.3)] transform scale-105'
                    : 'bg-white text-secondary/70 border-accent/20 hover:border-primary/50 hover:text-primary hover:bg-[#FFF9F9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featured && (
          <div className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-16 cursor-pointer border-2 border-accent/20 bg-[#FDFBF7] hover:shadow-[0_30px_60px_rgba(138,46,40,0.15)] transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 lg:h-full min-h-[320px] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-primary text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full shadow-sm">
                  Featured
                </span>
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                <div className="absolute inset-0 bg-henna-pattern opacity-[0.03] pointer-events-none mix-blend-multiply"></div>
                <span className="inline-flex items-center gap-1.5 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 relative z-10">
                  <Tag className="w-3 h-3" /> {featured.category}
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl text-secondary mb-4 leading-tight group-hover:text-primary transition-colors relative z-10">
                  {featured.title}
                </h2>
                <p className="text-text/70 leading-relaxed mb-8 font-medium relative z-10">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-text/50 mb-8 font-semibold relative z-10">
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-accent" />{featured.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-accent" />{featured.readTime}</span>
                </div>
                <button className="self-start inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-[0_8px_20px_rgba(138,46,40,0.3)] hover:-translate-y-1 group/btn relative z-10">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {rest.map(post => (
              <article
                key={post.id}
                className="group bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(138,46,40,0.2)] transition-all duration-300 border-2 border-accent/10 hover:border-primary/30 hover:-translate-y-2 cursor-pointer flex flex-col relative"
              >
                <div className="absolute inset-0 bg-indian-pattern opacity-[0.02] pointer-events-none mix-blend-multiply"></div>
                
                <div className="relative h-60 overflow-hidden m-2 rounded-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                  <h3 className="font-heading text-xl md:text-2xl text-secondary mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text/70 text-sm leading-relaxed mb-6 font-medium flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text/50 pt-5 border-t-2 border-accent/10 font-semibold">
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-accent" />{post.author}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-accent" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24 text-text/40">
            <p className="text-2xl font-heading">No posts in this category yet.</p>
          </div>
        )}

      </div>
    </div>
  );
};
