import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Ministry', href: '#ministry' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Handle active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Skip to content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-navy-900 text-white rounded-md font-medium shadow-lg transition-transform"
      >
        Skip to content
      </a>

      <nav 
        className={`sticky top-0 z-50 flex justify-between items-center py-4 md:py-6 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm -mx-6 px-6 md:-mx-16 md:px-16 lg:-mx-20 lg:px-20' : 'bg-transparent mb-8'
        }`}
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <a 
            href="#" 
            className="text-xl font-bold tracking-tight text-navy-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded px-1 transition-colors hover:text-sky-600"
            aria-label="Temitope E. Ajibola Home"
          >
            Temitope E. Ajibola
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2" role="menubar">
          {navItems.map((item) => (
            <li key={item.label} role="none">
              <a
                href={item.href}
                role="menuitem"
                className={`
                  relative px-4 py-2 text-sm uppercase tracking-widest font-medium transition-colors duration-300 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-sky-500
                  ${activeSection === item.href.substring(1) 
                    ? 'text-sky-700' 
                    : 'text-gray-600 hover:text-navy-900 hover:bg-gray-50'}
                `}
                aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-sky-500 rounded-full animate-fade-in" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-navy-900 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 animate-fade-in md:hidden"
          >
            <ul className="flex flex-col p-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`
                      block text-sm uppercase tracking-widest py-4 border-b border-gray-50 last:border-0
                      ${activeSection === item.href.substring(1) ? 'text-sky-700 font-semibold pl-2 border-l-4 border-l-sky-500' : 'text-gray-600 hover:text-sky-500'}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};