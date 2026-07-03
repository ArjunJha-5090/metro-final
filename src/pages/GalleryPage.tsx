import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 md:col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 md:col-span-3 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=1000', span: 'col-span-1 md:col-span-1 row-span-1' },
];

// Drop your video files into: public/assets/videos/
const videos = [
  { src: '/assets/videos/video1.mp4', title: 'Grand Opening Night — Metro Food Court' },
  { src: '/assets/videos/video2.mp4', title: 'Behind the Scenes: Making of Our Dum Biryani' },
  { src: '/assets/videos/video3.mp4', title: 'Holi Festival 2026 at Metro Food Court' },
  { src: '/assets/videos/video4.mp4', title: 'A Day in the Life of Our Chai Master' },
  { src: '/assets/videos/video5.mp4', title: 'Customer Testimonials & Food Court Tour' },
];

export const GalleryPage: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-background min-h-screen relative">
      <div className="absolute inset-0 bg-indian-pattern opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Photo Gallery */}
        <SectionHeading
          title="Our Gallery"
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

        {/* Video Section */}
        <div className="mt-24">
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-surface border border-accent/30 text-xs font-bold tracking-[0.25em] text-primary uppercase mb-6 shadow-sm">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Video Gallery
              <span className="w-1 h-1 rounded-full bg-accent" />
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading text-secondary text-center mb-3">
            Our Stories in Motion
          </h2>
          <p className="text-text/60 text-center font-light mb-12 max-w-xl mx-auto">
            Watch our events, behind-the-scenes moments, and customer experiences come to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-premium border border-accent/10 bg-surface flex flex-col ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className={`w-full bg-secondary ${index === 0 ? 'h-72' : 'h-52'}`}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="p-5">
                  <h3 className="font-heading text-secondary text-lg leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-text/50 text-xs mt-1 font-light">Metro Food Court • Official</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
