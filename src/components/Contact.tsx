import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get In Touch" 
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
                  <h4 className="font-heading font-semibold text-secondary mb-1">Location</h4>
                  <p className="text-text/70 text-sm">Gyan Ganga Trade Centre,<br/>Chamanchak, Bypass,<br/>Patna - 27</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-secondary mb-1">Phone</h4>
                  <p className="text-text/70 text-sm">+91 (123) 456-7890</p>
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
                  <p className="text-text/70 text-sm">Mon-Sun: 10am - 10pm</p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
               <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                 [Google Maps Embedded View Placeholder]
               </div>
               {/* Replace src below with actual embed link later */}
               {/* <iframe src="..." width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-2xl shadow-md border border-orange-50">
            <h3 className="font-heading font-bold text-2xl text-secondary mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text/80 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text/80 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text/80 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text/80 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button type="button" className="w-full mt-2">
                Send Message
              </Button>
              <a
                href="https://api.whatsapp.com/send/?phone=919711240950"
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
