import React, { useEffect, useRef } from 'react';
import { Download, MessageSquare, CheckCircle, Package, Globe, Headphones } from 'lucide-react';

const WholesaleSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const pricingTiers = [
    {
      name: 'Premium',
      minOrder: '50m',
      price: 'Contact for pricing',
      features: [
        'Small batch orders',
        'Premium fabric selection',
        'Standard lead time (3-4 weeks)',
        'Email support',
        'Quality guarantee'
      ],
      recommended: false
    },
    {
      name: 'Standard',
      minOrder: '100m',
      price: 'Best Value',
      features: [
        'Competitive bulk pricing',
        'Full collection access',
        'Priority lead time (2-3 weeks)',
        'Dedicated account manager',
        'Quality guarantee',
        'Flexible payment terms'
      ],
      recommended: true
    },
    {
      name: 'Bulk',
      minOrder: '200m+',
      price: 'Maximum Savings',
      features: [
        'Lowest per-meter pricing',
        'Custom design options',
        'Express lead time (1-2 weeks)',
        'Priority customer support',
        'Quality guarantee',
        'Extended payment terms',
        'Free shipping worldwide'
      ],
      recommended: false
    }
  ];

  const benefits = [
    {
      icon: Package,
      title: 'Global Shipping',
      description: 'Worldwide delivery with tracking and insurance included for all wholesale orders.'
    },
    {
      icon: Globe,
      title: 'B2B Network',
      description: 'Join our exclusive network of 1000+ designers and manufacturers worldwide.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: '24/7 customer service with dedicated account managers for bulk orders.'
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

    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="wholesale" 
      className="section-spacing bg-ivory"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-navy mb-6">
            Wholesale Solutions
          </h2>
          <p className="font-sans text-lg text-text max-w-3xl mx-auto leading-relaxed">
            Tailored pricing and services for B2B partners. Choose the plan that best fits 
            your business needs and scale with confidence.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={benefit.title}
                className="text-center fade-in-up"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-navy rounded-full mb-6">
                  <IconComponent size={32} className="text-gold" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-navy mb-4">
                  {benefit.title}
                </h3>
                <p className="font-sans text-text leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pricing Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={`relative bg-white rounded-lg shadow-lg border-2 transition-all duration-300 hover:shadow-xl fade-in-up ${
                tier.recommended ? 'border-gold transform scale-105' : 'border-light-grey hover:border-gold'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-navy px-4 py-2 rounded-full font-sans font-medium text-sm uppercase tracking-wide">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="font-serif font-bold text-2xl text-navy mb-2">
                    {tier.name}
                  </h3>
                  <div className="font-sans text-sm text-text uppercase tracking-wide mb-4">
                    Minimum Order: {tier.minOrder}
                  </div>
                  <div className="font-serif font-bold text-xl text-gold">
                    {tier.price}
                  </div>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-eco flex-shrink-0 mt-1" />
                      <span className="font-sans text-sm text-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <button className={`w-full ${
                  tier.recommended ? 'btn-primary' : 'btn-secondary'
                }`}>
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 fade-in-up">
          <div className="text-center mb-8">
            <h3 className="font-serif font-semibold text-3xl text-navy mb-4">
              Ready to Get Started?
            </h3>
            <p className="font-sans text-lg text-text max-w-2xl mx-auto leading-relaxed">
              Download our complete fabric catalogue or speak with our wholesale team 
              to discuss your specific requirements.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn-primary flex items-center space-x-2">
              <Download size={20} />
              <span>Download Catalogue</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <MessageSquare size={20} />
              <span>Contact Sales Team</span>
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-12 fade-in-up">
          <div className="bg-navy/5 rounded-lg p-8">
            <h4 className="font-serif font-semibold text-xl text-navy mb-4">
              Wholesale Inquiries
            </h4>
            <div className="space-y-2 text-text">
              <p>Email: wholesale@bzjjakar.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Business Hours: Monday - Friday, 9 AM - 6 PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholesaleSection;