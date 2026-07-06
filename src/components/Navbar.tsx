import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Hide navbar on scroll down, show on scroll up (desktop only)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // close menu on scroll
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
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

  const transformClass = isVisible ? 'translate-y-0' : '-translate-y-full';

  return (
    <>
      {/* ── Desktop Navbar (lg and above) ── */}
      <header
        className={`hidden lg:flex fixed w-full top-0 z-50 transition-transform duration-300 bg-[#ffe6e6]/75 backdrop-blur-md border-b border-accent/20 shadow-sm py-2 ${transformClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center h-full py-1">
              <Link to="/" className="flex items-center group h-full">
                <img
                  src="/assets/images/logo-transparent.png"
                  alt="Metro Food Court Logo"
                  className="h-16 lg:h-20 w-auto object-contain filter drop-shadow-sm group-hover:scale-105 transition-all duration-300"
                />
              </Link>
            </div>
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

      {/* ── Mobile Hamburger Button (below lg) ── */}
      <div className="lg:hidden fixed top-4 right-4 z-[100]">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-lg border-2 border-orange-200 text-secondary active:scale-95 transition-all duration-150"
        >
          {isMobileMenuOpen
            ? <X className="w-6 h-6" strokeWidth={2.5} />
            : <Menu className="w-6 h-6" strokeWidth={2.5} />
          }
        </button>
      </div>

      {/* ── Mobile Full-Screen Menu Overlay ── */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[90] bg-white flex flex-col"
          onClick={(e) => { if (e.target === e.currentTarget) setIsMobileMenuOpen(false); }}
        >
          {/* Header in overlay */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-orange-100">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/assets/images/logo-transparent.png"
                alt="Metro Food Court"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-50 border border-orange-200 text-secondary"
            >
              <X className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
                className="block px-5 py-4 rounded-2xl bg-orange-50 border border-orange-100 text-secondary font-heading font-semibold text-xl uppercase tracking-wide text-center hover:bg-accent hover:border-secondary transition-all duration-200 active:scale-95"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Footer in overlay */}
          <div className="px-6 pb-8 text-center text-sm text-gray-400">
            Metro Food Court · Patna
          </div>
        </div>
      )}
    </>
  );
};
