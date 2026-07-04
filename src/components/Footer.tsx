import React from 'react';
import {Camera, Globe, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-[6px] border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/assets/images/logo.png" 
                alt="Metro Food Court Logo" 
                className="h-14 w-14 object-contain rounded-full border border-white/20"
              />
              <span className="font-heading font-bold text-2xl tracking-wide text-white">
                Metro Food Court
              </span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-secondary transition-all duration-300">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-secondary transition-all duration-300">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=919711240950" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-secondary transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Food Stalls', href: '/stalls' },
                { name: 'Banquets', href: '/banquets' },
                { name: 'Events', href: '/events' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 text-accent">Contact Details</h3>
            <ul className="space-y-4 text-white/80">
              <li>
                <p className="font-medium text-white mb-1">Address</p>
                <p>Gyan Ganga Trade Centre,<br />Chamanchak, Bypass,<br />Patna - 27</p>
              </li>
              <li>
                <p className="font-medium text-white mb-1">Phone</p>
                <p>+91 (123) 456-7890</p>
              </li>
              <li>
                <p className="font-medium text-white mb-1">Email</p>
                <p>hello@metrofoodcourt.com</p>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 text-accent">Opening Hours</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Friday</span>
                <span className="font-medium text-white">10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday - Sunday</span>
                <span className="font-medium text-white">09:00 AM - 11:00 PM</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-accent italic">
              * timings may vary on public holidays
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Metro Food Court. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
