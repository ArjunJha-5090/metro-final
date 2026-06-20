import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 md:col-span-2 row-span-2' }, // Ambience large
  { src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-1' }, // Indian food close up
  { src: 'https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-1' }, // Dessert
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 md:col-span-2 row-span-1' }, // Dining area wide
  { src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-2' }, // Snacks tall
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-1' }, // Restaurant vibe
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 md:col-span-3 row-span-2' }, // Grand Hero like
  { src: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 md:col-span-1 row-span-1' }, // Dosa small
];

export const GalleryPage: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Full Gallery" 
          subtitle="Immerse yourself in the Metro Food Court experience through our diverse collection of moments."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] mt-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ${image.span}`}
            >
              <img 
                src={image.src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-heading font-semibold text-lg tracking-wide border-b-2 border-accent pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
