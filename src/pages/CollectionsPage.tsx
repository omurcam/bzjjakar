import React, { useState } from 'react';
import { Search, Download, Mail } from 'lucide-react';

interface Collection {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: {
    composition: string;
    weight: string;
    width: string;
    care: string;
  };
  category: 'floral' | 'geometric' | 'modern' | 'luxury' | 'silk' | 'cotton';
}

const CollectionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  const collections: Collection[] = [
    {
      id: 'floral-01',
      name: 'Floral Collection',
      image: '/images/floral_jacquard.png',
      description: 'Exquisite botanical patterns inspired by nature\'s finest designs. Each piece features intricate floral motifs that bring elegance and sophistication to any creation.',
      features: ['Hand-drawn botanical patterns', 'Multiple colorways available', 'Fade-resistant dyes', 'Premium weave construction'],
      applications: ['Evening gowns', 'Luxury blazers', 'Premium curtains', 'Upholstery', 'Bridal wear'],
      specifications: {
        composition: '60% Silk, 40% Cotton',
        weight: '280 GSM',
        width: '150cm',
        care: 'Dry clean recommended'
      },
      category: 'floral'
    },
    {
      id: 'geometric-01',
      name: 'Geometric Collection',
      image: '/images/geometric_jacquard.png',
      description: 'Contemporary geometric patterns for modern fashion and interior design. Clean lines and sophisticated shapes create timeless appeal.',
      features: ['Modern geometric designs', 'Precision weaving', 'Customizable patterns', 'Colorfast technology'],
      applications: ['Business suits', 'Modern jackets', 'Contemporary furniture', 'Wall panels', 'Fashion accessories'],
      specifications: {
        composition: '70% Wool, 30% Polyester',
        weight: '320 GSM',
        width: '145cm',
        care: 'Professional cleaning'
      },
      category: 'geometric'
    },
    {
      id: 'modern-01',
      name: 'Modern Collection',
      image: '/images/modern_jacquard.png',
      description: 'Fashion-forward designs that capture contemporary trends while maintaining timeless sophistication. Perfect for urban lifestyle brands.',
      features: ['Trend-forward patterns', 'Urban-inspired designs', 'Versatile styling options', 'Durable construction'],
      applications: ['Streetwear', 'Urban fashion', 'Modern interiors', 'Tech wear', 'Contemporary accessories'],
      specifications: {
        composition: '55% Cotton, 45% Polyester',
        weight: '260 GSM',
        width: '155cm',
        care: 'Machine washable'
      },
      category: 'modern'
    },
    {
      id: 'luxury-01',
      name: 'Luxury Collection',
      image: '/images/luxury_jacquard.png',
      description: 'The pinnacle of textile excellence. Premium materials and exclusive designs for the most discerning clients seeking ultimate luxury.',
      features: ['Exclusive designs', 'Premium materials', 'Limited editions', 'Bespoke customization'],
      applications: ['Haute couture', 'Luxury interiors', 'Premium upholstery', 'Executive fashion', 'High-end accessories'],
      specifications: {
        composition: '80% Silk, 20% Gold thread',
        weight: '350 GSM',
        width: '140cm',
        care: 'Specialist dry clean only'
      },
      category: 'luxury'
    },
    {
      id: 'silk-01',
      name: 'Silk Collection',
      image: '/images/silk_jacquard.png',
      description: 'Pure silk jacquards with lustrous finish and exceptional drape. The finest silk fibers woven into stunning patterns that catch and reflect light beautifully.',
      features: ['100% pure silk', 'Natural luster', 'Exceptional drape', 'Breathable comfort'],
      applications: ['Luxury scarves', 'Evening wear', 'Premium lingerie', 'Fine home textiles', 'Ceremonial garments'],
      specifications: {
        composition: '100% Mulberry Silk',
        weight: '240 GSM',
        width: '135cm',
        care: 'Hand wash or dry clean'
      },
      category: 'silk'
    },
    {
      id: 'cotton-01',
      name: 'Cotton Collection',
      image: '/images/cotton_jacquard.png',
      description: 'Sustainable organic cotton jacquards perfect for eco-conscious brands. Combining environmental responsibility with exceptional quality and comfort.',
      features: ['Certified organic cotton', 'Eco-friendly dyes', 'Sustainable production', 'Soft hand feel'],
      applications: ['Casual wear', 'Children\'s clothing', 'Home textiles', 'Sustainable fashion', 'Eco-luxury items'],
      specifications: {
        composition: '100% Organic Cotton',
        weight: '220 GSM',
        width: '160cm',
        care: 'Machine washable'
      },
      category: 'cotton'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'floral', name: 'Floral' },
    { id: 'geometric', name: 'Geometric' },
    { id: 'modern', name: 'Modern' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'silk', name: 'Silk' },
    { id: 'cotton', name: 'Cotton' }
  ];

  const filteredCollections = collections.filter(collection => {
    const matchesCategory = selectedCategory === 'all' || collection.category === selectedCategory;
    const matchesSearch = collection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         collection.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-gradient-hero py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-16 w-32 h-32 bg-gradient-soft rounded-full blur-2xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif font-bold text-6xl sm:text-7xl mb-6 text-soft-charcoal">
              Our Collections
            </h1>
            <p className="font-sans text-xl text-medium-gray leading-relaxed">
              Explore our comprehensive catalog of premium jacquard fabrics. Each collection represents 
              the perfect fusion of traditional craftsmanship and contemporary design, created for 
              discerning designers and manufacturers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="bg-gradient-to-br from-pure-white via-powder-blue/20 to-mint-green/20 py-12 border-b border-light-gray/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-medium-gray w-5 h-5" />
              <input
                type="text"
                placeholder="Search collections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-pure-white/70 backdrop-blur-sm border-2 border-light-gray/30 rounded-2xl focus:ring-2 focus:ring-soft-gold/30 focus:border-soft-gold transition-all duration-300 shadow-soft placeholder-medium-gray/60 text-soft-charcoal"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-sans font-medium transition-all duration-300 shadow-soft hover:shadow-pastel ${
                  selectedCategory === category.id
                    ? 'bg-gradient-primary text-soft-charcoal shadow-pastel scale-105'
                    : 'bg-pure-white/70 backdrop-blur-sm text-medium-gray hover:bg-gradient-card hover:text-soft-charcoal hover:scale-105 border border-light-gray/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-light-coral/10 to-lavender-mist/20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-accent rounded-full blur-3xl opacity-15 animate-float"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-secondary rounded-full blur-2xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((collection, index) => (
              <div 
                key={collection.id} 
                className="bg-pure-white/70 backdrop-blur-sm rounded-3xl shadow-soft hover:shadow-pastel transition-all duration-500 overflow-hidden group cursor-pointer hover:-translate-y-2 border border-light-gray/20"
                onClick={() => setSelectedCollection(collection)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-soft-charcoal/70 via-soft-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="bg-gradient-accent/90 backdrop-blur-sm text-soft-charcoal p-3 rounded-full hover:bg-gradient-soft/90 transition-colors duration-300 shadow-soft">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-2xl text-soft-charcoal mb-3 group-hover:text-medium-gray transition-colors duration-300">
                    {collection.name}
                  </h3>
                  <p className="font-sans text-medium-gray mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="font-medium text-soft-charcoal">Composition:</span>
                      <span className="ml-2 text-medium-gray">{collection.specifications.composition}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-soft-charcoal">Weight:</span>
                      <span className="ml-2 text-medium-gray">{collection.specifications.weight}</span>
                    </div>
                  </div>
                  <button className="w-full btn-primary shadow-soft hover:shadow-pastel">
                    View Details
                  </button>
                </div>
                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {filteredCollections.length === 0 && (
            <div className="text-center py-16">
              <h3 className="font-serif text-2xl text-soft-charcoal mb-4">No collections found</h3>
              <p className="font-sans text-medium-gray">Try adjusting your search criteria or browse all collections.</p>
            </div>
          )}
        </div>
      </section>

      {/* Download Catalog Section */}
      <section className="bg-gradient-to-br from-soft-charcoal via-medium-gray to-soft-charcoal text-pure-white py-16 relative overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-soft-lavender/10 via-powder-blue/10 to-mint-green/10"></div>
        <div className="absolute top-16 left-16 w-32 h-32 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-16 right-20 w-24 h-24 bg-gradient-soft rounded-full blur-2xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif font-bold text-4xl mb-6">
            Complete Catalog
          </h2>
          <p className="font-sans text-xl text-pure-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Download our comprehensive catalog featuring detailed specifications, pricing, and technical information for all collections.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn-primary bg-gradient-accent hover:bg-gradient-soft text-soft-charcoal shadow-pastel hover:shadow-gradient flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download PDF Catalog</span>
            </button>
            <button className="btn-secondary bg-pure-white/10 backdrop-blur-sm border-2 border-pure-white/30 text-pure-white hover:bg-gradient-accent hover:text-soft-charcoal hover:border-transparent flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Request Physical Samples</span>
            </button>
          </div>
        </div>
      </section>

      {/* Collection Detail Modal */}
      {selectedCollection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-hero/90 backdrop-blur-lg" onClick={() => setSelectedCollection(null)}>
          <div className="bg-pure-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-gradient border border-light-gray/20" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedCollection(null)}
                className="absolute top-6 right-6 z-10 bg-gradient-accent/90 backdrop-blur-sm text-soft-charcoal p-3 rounded-full hover:bg-gradient-soft/90 transition-all duration-300 shadow-soft hover:scale-110"
              >
                ✕
              </button>
              <img
                src={selectedCollection.image}
                alt={selectedCollection.name}
                className="w-full h-80 object-cover rounded-t-3xl"
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-soft-charcoal/30 via-transparent to-transparent rounded-t-3xl"></div>
            </div>
            <div className="p-8">
              <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-4">
                {selectedCollection.name}
              </h2>
              <p className="font-sans text-lg text-medium-gray mb-6 leading-relaxed">
                {selectedCollection.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {selectedCollection.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-accent rounded-full mt-3 flex-shrink-0"></div>
                        <span className="font-sans text-medium-gray leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-4">Applications</h3>
                  <ul className="space-y-3">
                    {selectedCollection.applications.map((application, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-secondary rounded-full mt-3 flex-shrink-0"></div>
                        <span className="font-sans text-medium-gray leading-relaxed">{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-card rounded-2xl border border-light-gray/20">
                <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-4">Technical Specifications</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-pure-white/50 rounded-xl p-4 backdrop-blur-sm">
                    <span className="font-medium text-soft-charcoal">Composition:</span>
                    <span className="ml-2 text-medium-gray">{selectedCollection.specifications.composition}</span>
                  </div>
                  <div className="bg-pure-white/50 rounded-xl p-4 backdrop-blur-sm">
                    <span className="font-medium text-soft-charcoal">Weight:</span>
                    <span className="ml-2 text-medium-gray">{selectedCollection.specifications.weight}</span>
                  </div>
                  <div className="bg-pure-white/50 rounded-xl p-4 backdrop-blur-sm">
                    <span className="font-medium text-soft-charcoal">Width:</span>
                    <span className="ml-2 text-medium-gray">{selectedCollection.specifications.width}</span>
                  </div>
                  <div className="bg-pure-white/50 rounded-xl p-4 backdrop-blur-sm">
                    <span className="font-medium text-soft-charcoal">Care:</span>
                    <span className="ml-2 text-medium-gray">{selectedCollection.specifications.care}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="flex-1 btn-primary shadow-soft hover:shadow-pastel flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Inquire About This Collection</span>
                </button>
                <button className="flex-1 btn-secondary on-light flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Request Samples</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionsPage;