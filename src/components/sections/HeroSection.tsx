import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen min-h-[100vh] min-h-[100svh] flex items-center justify-center overflow-hidden hero-fabric-texture"
      style={{
        backgroundImage: 'url("/images/hero_fabric_texture.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Mobile-optimized background for iOS Safari */}
      <div 
        className="absolute inset-0 md:hidden z-0"
        style={{
          backgroundImage: 'url("/images/hero_fabric_texture.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          transform: 'translateZ(0)', // Force hardware acceleration
          WebkitTransform: 'translateZ(0)'
        }}
      ></div>
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-8 sm:py-0">
        {/* Brand Logo */}
        <h1 className="font-serif font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl text-pure-white mb-4 sm:mb-6 tracking-wide">
          BZJ Jakar
        </h1>
        
        {/* Slogan */}
        <p className="font-serif text-lg xs:text-xl sm:text-2xl lg:text-3xl text-pure-white mb-8 sm:mb-12 opacity-95 tracking-wide">
          Elegance in Every Thread
        </p>
        
        {/* Description */}
        <p className="font-sans text-base sm:text-lg text-pure-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Premium jacquard fabrics crafted for discerning B2B wholesale buyers and designers worldwide. 
          Discover luxury textiles that define sophistication.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-16 px-4">
          <a href="#collections" className="btn-primary w-full sm:w-auto min-h-[44px] flex items-center justify-center">
            Explore Collections
          </a>
          <a href="#wholesale" className="btn-secondary on-dark w-full sm:w-auto min-h-[44px] flex items-center justify-center">
            Request a Quote
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center pb-4 sm:pb-0">
          <a href="#collections" className="text-pure-white/70 hover:text-soft-gold transition-colors duration-300 p-2">
            <ArrowDown size={28} className="animate-bounce sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;