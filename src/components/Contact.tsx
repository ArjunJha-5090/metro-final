import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Visit Us" 
          subtitle="We'd love to hear from you. Here's how you can reach us."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Info & Map */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-secondary mb-1">Address</h4>
                  <p className="text-text/70 text-sm">Gyan Ganga Trade Centre,<br/>Kankarbagh, Patna</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-secondary mb-1">Phone</h4>
                  <p className="text-text/70 text-sm">6287601908</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-secondary mb-1">Email</h4>
                  <p className="text-text/70 text-sm">hello@metrofoodcourt.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-secondary mb-1">Hours</h4>
                  <p className="text-text/70 text-sm">Mon-Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-[280px] rounded-3xl overflow-hidden relative shadow-[0_10px_40px_rgba(193,155,94,0.15)] hover:shadow-[0_20px_50px_rgba(193,155,94,0.25)] border-4 border-white transform hover:-translate-y-1 transition-all duration-500 bg-gray-100 mt-6">
               <iframe 
                 src="https://maps.google.com/maps?q=Gyan+Ganga+Trade+Centre,+East+Lakshmi+Nagar,+Patna,+Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{border:0, filter: 'contrast(1.05) saturate(1.1)'}} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Metro Food Court Location"
                 className="absolute inset-0"
               ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#FDFBF7] p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] border-2 border-accent/20 h-fit">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-secondary mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text/80 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-accent/20 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm font-medium"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text/80 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border-2 border-accent/20 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm font-medium"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-text/80 mb-1.5">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border-2 border-accent/20 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm font-medium"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-text/80 mb-1.5">Your Message</label>
                <textarea 
                  id="message" 
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-accent/20 bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none shadow-sm font-medium"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <Button type="button" className="w-full mt-2">
                Send Message
              </Button>
              <a
                href="https://api.whatsapp.com/send/?phone=916287601908"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-3 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-base transition-colors duration-200 shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with us on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
