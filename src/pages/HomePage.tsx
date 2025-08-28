import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Star, Users, Globe, Award, History, Leaf, Package, Mail, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredCollections = [
    {
      name: 'Floral Collection',
      image: '/images/floral_jacquard.png',
      description: 'Elegant botanical patterns for sophisticated designs'
    },
    {
      name: 'Geometric Collection',
      image: '/images/geometric_jacquard.png',
      description: 'Modern geometric patterns for contemporary fashion'
    },
    {
      name: 'Luxury Collection',
      image: '/images/luxury_jacquard.png',
      description: 'Premium materials for exclusive high-end creations'
    },
    {
      name: 'Silk Collection',
      image: '/images/silk_jacquard.png',
      description: 'Finest silk jacquards with lustrous finish'
    }
  ];

  const highlights = [
    {
      icon: <Users className="w-8 h-8 text-soft-charcoal" />,
      title: '5000+ Clients',
      description: 'Trusted by designers worldwide'
    },
    {
      icon: <Globe className="w-8 h-8 text-soft-charcoal" />,
      title: '50+ Countries',
      description: 'Global shipping and distribution'
    },
    {
      icon: <Award className="w-8 h-8 text-soft-charcoal" />,
      title: '30+ Years',
      description: 'Heritage in textile manufacturing'
    },
    {
      icon: <Star className="w-8 h-8 text-soft-charcoal" />,
      title: 'Premium Quality',
      description: 'Award-winning fabric collections'
    }
  ];

  const testimonials = [
    {
      quote: "BZJ Jakar's fabrics elevated our entire collection. The quality and attention to detail is unmatched.",
      author: "Sarah Chen",
      position: "Creative Director, Elite Fashion House"
    },
    {
      quote: "Consistent quality, reliable delivery, and exceptional customer service. Our go-to fabric partner.",
      author: "Marco Rodriguez",
      position: "Head Designer, Luxury Couture"
    },
    {
      quote: "The sustainable practices and beautiful designs make BZJ Jakar our preferred textile supplier.",
      author: "Emma Thompson",
      position: "Sustainability Director, Green Fashion Co."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen min-h-[100vh] min-h-[100svh] flex items-center justify-center overflow-hidden bg-fixed-mobile"
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
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10"></div>
        
        {/* Floating decorative elements - hidden on mobile for performance */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-accent rounded-full blur-3xl animate-float opacity-30 hidden sm:block"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-soft rounded-full blur-2xl animate-float opacity-40 hidden sm:block" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8 sm:py-0">
          <h1 className="font-serif font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory mb-4 sm:mb-6 tracking-wide leading-tight">
            BZJ Jakar
          </h1>
          
          <p className="font-serif text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-ivory mb-8 sm:mb-12 opacity-95 tracking-wide">
            Elegance in Every Thread
          </p>
          
          <p className="font-sans text-base sm:text-lg text-ivory/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Premium jacquard fabrics crafted for discerning B2B wholesale buyers and designers worldwide. 
            Discover luxury textiles that define sophistication.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-16 px-4">
            <Link to="/collections" className="btn-primary shadow-pastel hover:shadow-gradient w-full sm:w-auto min-h-[44px] flex items-center justify-center">
              Explore Collections
            </Link>
            <Link to="/wholesale" className="btn-secondary on-dark w-full sm:w-auto min-h-[44px] flex items-center justify-center">
              Request a Quote
            </Link>
          </div>
          
          <div className="flex justify-center animate-bounce pb-4 sm:pb-0">
            <a href="#featured" className="text-ivory/70 hover:text-soft-gold transition-colors duration-300 p-2">
              <ArrowDown size={28} className="sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Collections Preview */}
      <section id="featured" className="section-spacing bg-gradient-to-br from-pure-white via-lavender-mist/30 to-powder-blue/20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-20 -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-accent rounded-full blur-2xl opacity-30 translate-y-24 -translate-x-24"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-5xl sm:text-6xl text-soft-charcoal mb-6">
              Featured Collections
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Discover our most popular fabric collections, carefully curated for modern designers and manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredCollections.map((collection, index) => (
              <div 
                key={collection.name} 
                className="group cursor-pointer" 
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-pastel transition-all duration-500 bg-gradient-card backdrop-blur-sm border border-light-gray/20">
                  <div className="aspect-w-4 aspect-h-5">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-soft-charcoal/80 via-soft-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif font-semibold text-xl text-pure-white mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-pure-white/90 text-sm leading-relaxed">{collection.description}</p>
                  </div>
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/collections" className="btn-primary shadow-pastel hover:shadow-gradient">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="section-spacing bg-gradient-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-5xl sm:text-6xl text-soft-charcoal mb-6">
              Why Choose BZJ Jakar
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Three decades of textile excellence, serving designers and manufacturers across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title} 
                className="text-center bg-pure-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-pastel transition-all duration-500 hover:-translate-y-2 border border-light-gray/20" 
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-accent/20 backdrop-blur-sm">
                    {React.cloneElement(highlight.icon, { className: "w-8 h-8 text-soft-charcoal" })}
                  </div>
                </div>
                <h3 className="font-serif font-semibold text-2xl mb-3">
                  <span className="bg-gradient-to-r from-soft-charcoal to-medium-gray bg-clip-text text-transparent">
                    {highlight.title}
                  </span>
                </h3>
                <p className="font-sans text-medium-gray leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-powder-blue/20 to-mint-green/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-secondary rounded-full blur-3xl opacity-15 animate-float"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <History className="w-10 h-10 text-soft-gold mr-4" />
                <h2 className="font-serif font-bold text-4xl text-soft-charcoal">
                  Our Heritage
                </h2>
              </div>
              <div className="space-y-6 font-sans text-lg text-medium-gray leading-relaxed">
                <p>
                  Founded in 1995, BZJ Jakar began as a vision to bridge the gap between traditional 
                  textile craftsmanship and modern fashion needs. What started as a small workshop has 
                  evolved into a global leader in premium jacquard fabric manufacturing.
                </p>
                <p>
                  Today, we serve over 5,000 clients across 50+ countries, from emerging designers to 
                  established luxury fashion houses. Our commitment to excellence drives every aspect 
                  of our business.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-primary shadow-soft hover:shadow-pastel flex items-center space-x-2 inline-flex">
                  <span>Learn Our Story</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-card rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-card rounded-2xl p-8 shadow-pastel border border-light-gray/20">
                <h3 className="font-serif font-bold text-2xl text-soft-charcoal mb-6">30 Years of Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-soft-gold rounded-full"></div>
                    <span className="font-sans text-medium-gray">1995: Company Founded</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-soft-gold rounded-full"></div>
                    <span className="font-sans text-medium-gray">2000: First Export Markets</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-soft-gold rounded-full"></div>
                    <span className="font-sans text-medium-gray">2010: Global Expansion</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-soft-gold rounded-full"></div>
                    <span className="font-sans text-medium-gray">2025: Industry Leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Preview */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-light-coral/10 to-lavender-mist/20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-56 h-56 bg-gradient-soft rounded-full blur-3xl opacity-20 -translate-y-28 -translate-x-28"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="w-12 h-12 text-mint-green mr-4" />
              <h2 className="font-serif font-bold text-4xl text-soft-charcoal">
                Sustainability Commitment
              </h2>
            </div>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Leading the textile industry toward a more sustainable future through innovative practices, 
              responsible sourcing, and environmental stewardship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-pure-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-light-gray/20">
              <div className="w-16 h-16 bg-mint-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-mint-green" />
              </div>
              <div className="font-serif font-bold text-2xl text-mint-green mb-2">85%</div>
              <p className="font-sans text-medium-gray">Sustainable materials sourced</p>
            </div>
            <div className="text-center bg-pure-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-light-gray/20">
              <div className="w-16 h-16 bg-powder-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-powder-blue" />
              </div>
              <div className="font-serif font-bold text-2xl text-powder-blue mb-2">60%</div>
              <p className="font-sans text-medium-gray">Water usage reduction</p>
            </div>
            <div className="text-center bg-pure-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-light-gray/20">
              <div className="w-16 h-16 bg-soft-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-soft-gold" />
              </div>
              <div className="font-serif font-bold text-2xl text-soft-gold mb-2">95%</div>
              <p className="font-sans text-medium-gray">Waste recycled or repurposed</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/sustainability" className="btn-primary shadow-soft hover:shadow-pastel flex items-center space-x-2 inline-flex">
              <span>Discover Our Impact</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Wholesale Preview */}
      <section className="section-spacing bg-gradient-accent relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-soft rounded-full blur-2xl opacity-30 animate-float"></div>
        <div className="absolute bottom-16 right-24 w-40 h-40 bg-gradient-primary rounded-full blur-3xl opacity-25 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Package className="w-12 h-12 text-soft-charcoal mr-4" />
              <h2 className="font-serif font-bold text-4xl text-soft-charcoal">
                Wholesale Solutions
              </h2>
            </div>
            <p className="font-sans text-lg text-soft-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Partner with BZJ Jakar for premium jacquard fabrics at wholesale prices. 
              Designed for fashion houses, interior designers, and textile manufacturers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-pure-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-light-gray/20">
              <Package className="w-12 h-12 text-soft-charcoal mx-auto mb-4" />
              <div className="font-serif font-bold text-2xl text-soft-charcoal">50m+</div>
              <div className="font-sans text-medium-gray">Minimum Order</div>
            </div>
            <div className="text-center bg-pure-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-light-gray/20">
              <Globe className="w-12 h-12 text-soft-charcoal mx-auto mb-4" />
              <div className="font-serif font-bold text-2xl text-soft-charcoal">50+</div>
              <div className="font-sans text-medium-gray">Countries Served</div>
            </div>
            <div className="text-center bg-pure-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-light-gray/20">
              <Users className="w-12 h-12 text-soft-charcoal mx-auto mb-4" />
              <div className="font-serif font-bold text-2xl text-soft-charcoal">5000+</div>
              <div className="font-sans text-medium-gray">B2B Clients</div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/wholesale" className="btn-primary bg-gradient-to-r from-soft-charcoal to-medium-gray text-pure-white hover:from-medium-gray hover:to-soft-charcoal shadow-gradient flex items-center space-x-2 inline-flex">
              <span>Get Wholesale Pricing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-powder-blue/20 to-mint-green/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-secondary rounded-full blur-3xl opacity-20 translate-y-24 -translate-x-24"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Mail className="w-12 h-12 text-soft-charcoal mr-4" />
              <h2 className="font-serif font-bold text-4xl text-soft-charcoal">
                Global Support
              </h2>
            </div>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Connect with our international team across four regional offices. Expert support 
              available 24/7 to assist with your textile needs and business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-pure-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-light-gray/20">
              <div className="w-16 h-16 bg-soft-charcoal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-soft-charcoal" />
              </div>
              <div className="font-serif font-bold text-xl text-soft-charcoal mb-2">Global Presence</div>
              <p className="font-sans text-medium-gray text-sm">4 Regional Offices</p>
            </div>
            <div className="text-center bg-pure-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-light-gray/20">
              <div className="w-16 h-16 bg-mint-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-mint-green" />
              </div>
              <div className="font-serif font-bold text-xl text-mint-green mb-2">Expert Team</div>
              <p className="font-sans text-medium-gray text-sm">Dedicated Specialists</p>
            </div>
            <div className="text-center bg-pure-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-light-gray/20">
              <div className="w-16 h-16 bg-powder-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-powder-blue" />
              </div>
              <div className="font-serif font-bold text-xl text-powder-blue mb-2">24h Response</div>
              <p className="font-sans text-medium-gray text-sm">Quick Reply Promise</p>
            </div>
            <div className="text-center bg-pure-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-light-gray/20">
              <div className="w-16 h-16 bg-soft-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-soft-gold" />
              </div>
              <div className="font-serif font-bold text-xl text-soft-gold mb-2">Premium Service</div>
              <p className="font-sans text-medium-gray text-sm">White-glove Support</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn-primary shadow-soft hover:shadow-pastel flex items-center space-x-2 inline-flex">
              <span>Contact Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-light-coral/20 to-lavender-mist/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-56 h-56 bg-gradient-soft rounded-full blur-3xl opacity-20 -translate-y-28 -translate-x-28"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-primary rounded-full blur-2xl opacity-25 translate-y-20 translate-x-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-5xl sm:text-6xl text-soft-charcoal mb-6">
              What Our Clients Say
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Trusted by fashion designers, interior decorators, and textile manufacturers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-pastel transition-all duration-500 p-8 hover:-translate-y-2 border border-light-gray/30 group"
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-soft-gold fill-current" />
                  ))}
                </div>
                <blockquote className="font-sans text-soft-charcoal/90 italic mb-6 text-center leading-relaxed relative">
                  <span className="text-6xl text-soft-gold/20 absolute -top-4 -left-2">"</span>
                  <span className="relative z-10">{testimonial.quote}</span>
                  <span className="text-6xl text-soft-gold/20 absolute -bottom-8 -right-2">"</span>
                </blockquote>
                <div className="text-center">
                  <div className="font-serif font-semibold text-soft-charcoal mb-1">{testimonial.author}</div>
                  <div className="font-sans text-sm text-medium-gray">{testimonial.position}</div>
                </div>
                {/* Hover gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-accent relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-soft rounded-full blur-2xl opacity-30 animate-float"></div>
        <div className="absolute bottom-16 right-24 w-40 h-40 bg-gradient-primary rounded-full blur-3xl opacity-25 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif font-bold text-5xl sm:text-6xl text-soft-charcoal mb-6">
            Ready to Elevate Your Designs?
          </h2>
          <p className="font-sans text-lg text-soft-charcoal/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join thousands of designers worldwide who trust BZJ Jakar for premium jacquard fabrics. 
            Request a quote today and discover the difference quality makes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/wholesale" className="btn-primary bg-gradient-to-r from-soft-charcoal to-medium-gray text-pure-white hover:from-medium-gray hover:to-soft-charcoal shadow-gradient">
              Get Wholesale Pricing
            </Link>
            <Link to="/contact" className="btn-secondary on-light border-2 border-soft-charcoal hover:bg-gradient-soft">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;