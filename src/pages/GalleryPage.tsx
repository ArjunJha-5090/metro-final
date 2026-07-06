import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';

const galleryImages = [
  { src: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1200", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1200", span: "col-span-1 md:col-span-2 row-span-1" },
  { src: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1200", span: "col-span-1 row-span-2" },
  { src: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1200", span: "col-span-1 row-span-1" },
  { src: "https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=1200", span: "col-span-1 md:col-span-3 row-span-2" },
  { src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200", span: "col-span-1 md:col-span-1 row-span-1" }
];

// Drop your video files into: public/assets/videos/
const videos = [
  { src: '/assets/videos/video-1.mp4', title: 'Special Day Of a Kid' },
  { src: '/assets/videos/video-2.mp4', title: 'A Great Feast' },
  { src: '/assets/videos/video-3.mp4', title: 'A moment to always remember' },
  { src: '/assets/videos/video-4.mp4', title: 'Party Mood' },
  { src: '/assets/videos/video-5.mp4', title: 'The Great Foods' },
];

export const GalleryPage: React.FC = () => {
  return (
    <div className="pt-32 md:pt-40 pb-12 md:pb-24 bg-background min-h-screen relative">
      <div className="absolute inset-0 bg-indian-pattern opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Photo Gallery */}
        <SectionHeading
          title="Our Gallery"
          subtitle="Immerse yourself in the Metro Food Court experience through our diverse collection of moments."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[200px] mt-8 md:mt-12">
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
        <div className="mt-32">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-surface border border-accent/30 text-xs font-bold tracking-[0.25em] text-primary uppercase shadow-sm">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Stories in Motion
              <span className="w-1 h-1 rounded-full bg-accent" />
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading text-secondary text-center mb-4">
            Through the Jharokha
          </h2>
          <p className="text-text/60 text-center font-light mb-16 max-w-xl mx-auto">
            Peer into the vibrant life of Metro Food Court through our beautifully crafted video windows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2 md:px-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`relative group bg-[#FFFDF9] p-3 shadow-heritage border border-accent/20 transition-all duration-500 hover:shadow-premium hover:-translate-y-2 ${index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
                  }`}
                style={{
                  borderTopLeftRadius: '50% 12%',
                  borderTopRightRadius: '50% 12%',
                  borderBottomLeftRadius: '16px',
                  borderBottomRightRadius: '16px'
                }}
              >
                {/* Decorative inner frame */}
                <div
                  className="absolute inset-3 border-2 border-dashed border-accent/40 pointer-events-none z-10 opacity-70"
                  style={{
                    borderTopLeftRadius: '50% 12%',
                    borderTopRightRadius: '50% 12%',
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px'
                  }}
                />

                <div
                  className="relative overflow-hidden bg-secondary flex flex-col h-full"
                  style={{
                    borderTopLeftRadius: '50% 12%',
                    borderTopRightRadius: '50% 12%',
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px'
                  }}
                >
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    className={`w-full object-cover ${index === 0 ? 'h-[300px] md:h-[400px]' : 'h-[250px]'}`}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-6 md:p-8 text-center bg-[#FFFDF9] flex-grow flex flex-col justify-center relative z-20">
                    {/* Decorative motif */}
                    <div className="flex justify-center mb-3 opacity-60">
                      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0L14.5 9.5H9.5L12 0Z" fill="#C19B5E" />
                        <path d="M12 12L13.5 9H10.5L12 12Z" fill="#8A2E28" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-secondary text-lg md:text-xl leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-text/50 text-xs mt-3 font-medium uppercase tracking-[0.2em]">Metro Food Court</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
