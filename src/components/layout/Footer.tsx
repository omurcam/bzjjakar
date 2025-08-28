import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'About Us', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-soft-charcoal via-medium-gray to-soft-charcoal text-pure-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-soft-lavender/10 via-powder-blue/10 to-mint-green/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-serif font-bold text-3xl mb-4 bg-gradient-to-r from-soft-gold via-gentle-rose to-lavender-mist bg-clip-text text-transparent">
              BZJ Jakar
            </h3>
            <p className="text-lg mb-6 max-w-md text-pure-white/90">
              Elegance in Every Thread
            </p>
            <p className="text-sm opacity-80 max-w-md leading-relaxed">
              Premium jacquard fabrics for B2B wholesale buyers and designers worldwide. 
              Crafting luxury textiles with unmatched quality and sophistication.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h4 className="font-sans font-medium text-lg mb-4">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-pure-white/10 backdrop-blur-sm text-pure-white border border-pure-white/20 focus:border-soft-gold focus:outline-none focus:ring-2 focus:ring-soft-gold/20 placeholder-pure-white/60 transition-all duration-300"
                />
                <button className="btn-primary bg-gradient-accent hover:bg-gradient-soft">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-medium text-lg mb-6 bg-gradient-to-r from-soft-gold to-gentle-rose bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-pure-white/80 hover:text-soft-gold transition-all duration-300 text-sm hover:translate-x-1 inline-block relative group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-sans font-medium text-lg mb-6 bg-gradient-to-r from-powder-blue to-mint-green bg-clip-text text-transparent">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-gradient-accent/20 group-hover:bg-gradient-accent/30 transition-colors duration-300">
                  <Mail size={16} className="text-soft-gold" />
                </div>
                <span className="text-sm text-pure-white/80 group-hover:text-pure-white transition-colors duration-300">info@bzjjakar.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-gradient-accent/20 group-hover:bg-gradient-accent/30 transition-colors duration-300">
                  <Phone size={16} className="text-soft-gold" />
                </div>
                <span className="text-sm text-pure-white/80 group-hover:text-pure-white transition-colors duration-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-gradient-accent/20 group-hover:bg-gradient-accent/30 transition-colors duration-300">
                  <MapPin size={16} className="text-soft-gold" />
                </div>
                <span className="text-sm text-pure-white/80 group-hover:text-pure-white transition-colors duration-300">New York, NY 10001</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-sans font-medium text-sm mb-3 text-pure-white/90">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 rounded-full bg-gradient-accent/20 hover:bg-gradient-primary transition-all duration-300 hover:scale-110 hover:shadow-soft"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-pure-white hover:text-soft-charcoal transition-colors duration-300" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-gradient-accent/20 hover:bg-gradient-primary transition-all duration-300 hover:scale-110 hover:shadow-soft"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-pure-white hover:text-soft-charcoal transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pure-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-pure-white/60">
            © 2025 BZJ Jakar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-pure-white/60 hover:text-soft-gold transition-colors duration-300 relative group">
              Privacy Policy
              <span className="absolute inset-x-0 bottom-0 h-px bg-soft-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="#" className="text-sm text-pure-white/60 hover:text-soft-gold transition-colors duration-300 relative group">
              Terms of Service
              <span className="absolute inset-x-0 bottom-0 h-px bg-soft-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;