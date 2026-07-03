import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Food Stalls', href: '/stalls' },
    { name: 'Banquets', href: '/banquets' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
  ];

  const isHomePage = location.pathname === '/';
  const headerBg = isScrolled || !isHomePage ? 'bg-background border-b border-accent/20 shadow-premium' : 'bg-transparent border-b border-transparent';
  const textColor = isScrolled || !isHomePage ? 'text-secondary' : 'text-background';

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${headerBg} py-2`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="h-10 w-10 bg-primary border border-accent/50 rounded-full flex items-center justify-center font-heading text-background text-xl shadow-premium group-hover:bg-accent group-hover:text-primary group-hover:-translate-y-1 transition-all">
                MF
              </div>
              <span className={`font-heading uppercase font-normal text-3xl tracking-wider transition-colors duration-300 ${textColor}`}>
                Metro Food
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-lg font-heading uppercase tracking-wide border-2 border-transparent hover:border-secondary hover:bg-accent hover:text-secondary hover:shadow-brutal-sm transition-all duration-150 ${
                  isScrolled || !isHomePage ? 'text-secondary' : 'text-background hover:text-secondary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 border-2 ${isScrolled || !isHomePage ? 'border-secondary text-secondary hover:bg-accent' : 'border-background text-background hover:bg-white/20'} focus:outline-none transition-colors`}
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

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-background border-b-4 border-secondary shadow-brutal absolute top-full left-0 w-full">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 border-2 border-transparent hover:border-secondary text-xl font-heading uppercase text-secondary hover:bg-accent hover:shadow-brutal-sm transition-all"
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
