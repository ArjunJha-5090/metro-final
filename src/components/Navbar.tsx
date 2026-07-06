import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

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

  const transformClass = isVisible ? 'translate-y-0' : '-translate-y-full';

  // Only render on desktop (md and above) — completely invisible on mobile
  return (
    <header
      className={`hidden lg:flex fixed w-full top-0 z-50 transition-transform duration-300 bg-[#ffe6e6]/75 backdrop-blur-md border-b border-accent/20 shadow-sm py-2 ${transformClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-full py-1">
            <Link to="/" className="flex items-center group h-full">
              <img
                src="/assets/images/logo-transparent.png"
                alt="Metro Food Court Logo"
                className="h-16 lg:h-20 w-auto object-contain filter drop-shadow-sm group-hover:scale-105 transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-base lg:text-lg font-heading uppercase tracking-wide border-2 border-transparent hover:border-secondary hover:bg-accent hover:text-secondary hover:shadow-brutal-sm transition-all duration-150 text-secondary"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
