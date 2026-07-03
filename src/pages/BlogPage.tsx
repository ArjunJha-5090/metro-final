import React, { useState } from 'react';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';

const categories = ['All', 'Food Stories', 'Recipes', 'Events', 'Behind the Scenes', 'Culture'];

const blogPosts = [
  {
    id: 1,
    title: 'The Art of the Perfect Dum Biryani: A Heritage Recipe',
    excerpt: 'Journey into the royal kitchens of Lucknow and discover the ancient secrets behind the slow-cooked Dum Biryani that has enchanted food lovers for centuries.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=1200',
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
    <div className="pt-24 pb-24 min-h-screen bg-background relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-indian-pattern opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-surface border border-accent/30 text-xs font-bold tracking-[0.25em] text-primary uppercase mb-6 shadow-sm">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Stories & Insights
            <span className="w-1 h-1 rounded-full bg-accent" />
          </span>
          <h1 className="text-5xl md:text-7xl font-heading text-secondary mb-4 tracking-tight">
            The Metro Blog
          </h1>
          <p className="text-text/70 text-lg max-w-2xl mx-auto font-light">
            Recipes, cultural stories, behind-the-scenes journeys, and everything in between.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-primary text-white border-primary shadow-heritage'
                  : 'bg-surface text-text/70 border-accent/20 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featured && (
          <div className="group relative rounded-3xl overflow-hidden shadow-heritage mb-16 cursor-pointer border border-accent/10 bg-surface hover:shadow-xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 lg:h-full min-h-[320px] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                <span className="absolute top-6 left-6 bg-primary text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full">
                  Featured
                </span>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1.5 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  <Tag className="w-3 h-3" /> {featured.category}
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl text-secondary mb-4 leading-tight group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-text/70 leading-relaxed mb-8 font-light">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-text/50 mb-8">
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{featured.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <button className="self-start inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-heritage group/btn">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map(post => (
              <article
                key={post.id}
                className="group bg-surface rounded-2xl overflow-hidden shadow-premium hover:shadow-heritage transition-all duration-300 border border-accent/10 hover:-translate-y-1 cursor-pointer flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading text-xl text-secondary mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text/65 text-sm leading-relaxed mb-5 font-light flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text/45 pt-4 border-t border-accent/10">
                    <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{post.author}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.readTime}</span>
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
