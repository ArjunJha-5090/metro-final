import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

const galleryImages = [
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000', // Ambience
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=1000', // Indian food close up
  'https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=80&w=1000', // Dessert
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000', // Dining area
  'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=1000', // Snacks
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000', // Restaurant vibe
];

export const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const previewImages = galleryImages.slice(0, 3);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Food Gallery" 
          subtitle="A glimpse into the vibrant atmosphere and delicious offerings at Metro Food Court."
        />

        {/* Masonry-style Grid (CSS Columns approximation) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-12">
          {previewImages.map((src, index) => (
            <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-heading font-semibold text-lg tracking-wide border-b-2 border-accent pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={() => navigate('/gallery')} className="shadow-lg">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};
