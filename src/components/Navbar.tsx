import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Food Stalls', href: '/stalls' },
    { name: 'Menu', href: '/menu' },
    { name: 'Banquets', href: '/banquets' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ];

  const headerBg = 'xl:bg-[#ffe6e6]/75 xl:backdrop-blur-md xl:border-b xl:border-accent/20 xl:shadow-premium bg-transparent transition-all duration-300';
  const transformClass = isVisible ? 'translate-y-0' : '-translate-y-full';

  return (
    <header className={`fixed w-full top-0 z-50 transition-transform duration-300 ${headerBg} ${transformClass} py-2`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-full py-1">
            <Link to="/" className="flex items-center group h-full">
              <img 
                src="/assets/images/logo-transparent.png" 
                alt="Metro Food Court Logo" 
                className="h-14 md:h-20 w-auto object-contain filter drop-shadow-sm group-hover:scale-105 transition-all duration-300" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-lg font-heading uppercase tracking-wide border-2 border-transparent hover:border-secondary hover:bg-accent hover:text-secondary hover:shadow-brutal-sm transition-all duration-150 text-secondary`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 border-2 border-secondary text-secondary bg-white/95 backdrop-blur-md hover:bg-accent focus:outline-none transition-all rounded-xl shadow-sm`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" strokeWidth={3} />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" strokeWidth={3} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col xl:hidden pt-24 px-4 overflow-y-auto">
          <div className="flex flex-col space-y-4 pb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-4 border-2 border-secondary/20 hover:border-secondary text-2xl font-heading uppercase text-secondary bg-white hover:bg-accent rounded-2xl hover:shadow-brutal-sm transition-all text-center shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
