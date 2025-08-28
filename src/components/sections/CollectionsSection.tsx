import React, { useEffect, useRef } from 'react';

interface Collection {
  name: string;
  image: string;
  usageIdeas: string[];
}

const CollectionsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const collections: Collection[] = [
    {
      name: 'Floral Collection',
      image: '/images/floral_jacquard.png',
      usageIdeas: ['Evening Dresses', 'Elegant Blazers', 'Luxury Curtains']
    },
    {
      name: 'Geometric Collection',
      image: '/images/geometric_jacquard.png',
      usageIdeas: ['Business Suits', 'Modern Jackets', 'Contemporary Decor']
    },
    {
      name: 'Modern Collection',
      image: '/images/modern_jacquard.png',
      usageIdeas: ['Fashion Forward Wear', 'Minimalist Designs', 'Urban Textiles']
    },
    {
      name: 'Luxury Collection',
      image: '/images/luxury_jacquard.png',
      usageIdeas: ['High-End Fashion', 'Premium Upholstery', 'Exclusive Designs']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.collection-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="collections" 
      className="section-spacing bg-ivory"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-navy mb-6">
            Our Collections
          </h2>
          <p className="font-sans text-lg text-text max-w-3xl mx-auto leading-relaxed">
            Discover our premium jacquard fabric collections, each meticulously crafted 
            to bring elegance and sophistication to your creations.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.name}
              className="collection-card fade-in-up group cursor-pointer"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-400">
                {/* Collection Image */}
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src={collection.image}
                    alt={`Close-up of ${collection.name.toLowerCase()} jacquard fabric`}
                    className="w-full h-80 object-cover transition-transform duration-400 group-hover:scale-102"
                  />
                </div>
                
                {/* Default Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                  <div className="text-center px-4">
                    <h4 className="font-sans font-medium text-gold text-sm mb-3 uppercase tracking-wide">
                      Usage Ideas
                    </h4>
                    <ul className="text-ivory text-sm space-y-1">
                      {collection.usageIdeas.map((idea, i) => (
                        <li key={i}>{idea}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Collection Name */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif font-semibold text-2xl text-ivory">
                    {collection.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="font-sans text-lg text-text mb-8">
            Interested in bulk orders or custom designs?
          </p>
          <a href="#wholesale" className="btn-primary">
            View Wholesale Options
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;