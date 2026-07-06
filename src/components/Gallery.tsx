import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';
import { FadeIn } from './animations/FadeIn';

const galleryImages = [
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1200"
];

export const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const previewImages = galleryImages.slice(0, 3);

  return (
    <section id="gallery" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <SectionHeading 
            title="Food Gallery" 
            subtitle="A glimpse into the vibrant atmosphere and delicious offerings at Metro Food Court."
          />
        </FadeIn>

        {/* Masonry-style Grid (CSS Columns approximation) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6 mb-10">
          {previewImages.map((src, index) => (
            <FadeIn key={index} direction="up" delay={index * 150} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-heading font-semibold text-lg tracking-wide border-b-2 border-accent pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Image
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={300}>
          <div className="text-center">
            <Button size="lg" onClick={() => navigate('/gallery')} className="shadow-lg">
              View Full Gallery
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
