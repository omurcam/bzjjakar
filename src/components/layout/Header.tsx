import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.collections'), href: '/collections' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.sustainability'), href: '/sustainability' },
    { name: t('nav.wholesale'), href: '/wholesale' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-pure-white/95 backdrop-blur-lg shadow-soft border-b border-light-gray/20' 
            : 'bg-pure-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="font-serif font-bold text-3xl bg-gradient-to-r from-soft-lavender via-powder-blue to-mint-green bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              >
                BZJ Jakar
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <nav className="flex space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative px-4 py-2 rounded-full font-sans text-base font-medium transition-all duration-300 group ${
                      location.pathname === link.href
                        ? 'bg-gradient-primary text-soft-charcoal shadow-soft'
                        : 'text-soft-charcoal hover:bg-gradient-card hover:text-soft-charcoal'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-accent transition-all duration-300 transform -translate-x-1/2 ${
                      location.pathname === link.href ? 'w-3/4' : 'group-hover:w-3/4'
                    }`}></span>
                  </Link>
                ))}
              </nav>
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full bg-gradient-card text-soft-charcoal hover:bg-gradient-primary transition-all duration-300 hover:scale-105"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-gradient-hero/95 backdrop-blur-lg" 
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
              <div className="bg-pure-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-pastel">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-6 py-4 mb-2 rounded-xl font-sans text-xl font-medium transition-all duration-300 text-center ${
                      location.pathname === link.href
                        ? 'bg-gradient-primary text-soft-charcoal shadow-soft'
                        : 'text-soft-charcoal hover:bg-gradient-secondary hover:shadow-soft'
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex justify-center mt-4 pt-4 border-t border-light-gray/30">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;