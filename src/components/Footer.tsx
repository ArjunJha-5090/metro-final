import React from 'react';
import {Camera, Globe, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-12 md:pt-16 pb-8 border-t-[6px] border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/images/logo.png" 
                alt="Metro Food Court Logo" 
                className="h-12 w-12 object-contain rounded-full border border-white/20"
                loading="lazy"
                decoding="async"
              />
              <span className="font-heading font-bold text-xl tracking-wide text-white">
                Metro Food Court
              </span>
            </div>
            <p className="text-white/80 leading-relaxed mb-5 text-sm">
              Authentic flavours, vibrant atmosphere, and memories that last a lifetime — all under one roof at Metro Food Court.
            </p>
            <div className="flex space-x-3">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-secondary transition-all duration-300">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Website" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-secondary transition-all duration-300">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=919711240950" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-secondary transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Menu', href: '/menu' },
                { name: 'Food Stalls', href: '/stalls' },
                { name: 'Banquets & Catering', href: '/banquets' },
                { name: 'Events', href: '/events' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-accent">Contact Details</h3>
            <ul className="space-y-4 text-white/80 text-sm">
              <li>
                <p className="font-medium text-white mb-1">Address</p>
                <p>Gyan Ganga Trade Centre,<br />Chamanchak, Bypass,<br />Patna - 27</p>
              </li>
              <li>
                <p className="font-medium text-white mb-1">Phone</p>
                <a href="tel:+916287601908" className="hover:text-accent transition-colors">6287601908</a>
              </li>
              <li>
                <p className="font-medium text-white mb-1">WhatsApp</p>
                <a href="https://api.whatsapp.com/send/?phone=916287601908" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Chat with us</a>
              </li>
              <li className="pt-2 border-t border-white/10 mt-2">
                <p className="font-medium text-accent mb-1 text-sm uppercase tracking-wide">Outdoor Catering</p>
                <div className="flex flex-col gap-1 mt-1">
                  <a href="https://api.whatsapp.com/send/?phone=916287601908&text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20Outdoor%20Catering%20Services." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-white/80">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" /> 
                    WhatsApp for catering
                  </a>
                  <a href="tel:+916287601908" className="hover:text-white transition-colors text-white/80 mt-1">
                    Or call us at 6287601908
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-accent">Opening Hours</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Mon – Fri</span>
                <span className="font-medium text-white">10am – 10pm</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sat – Sun</span>
                <span className="font-medium text-white">9am – 11pm</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-accent italic">
              * timings may vary on public holidays
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-white/60 text-xs sm:text-sm gap-3">
          <p>&copy; {new Date().getFullYear()} Metro Food Court. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
