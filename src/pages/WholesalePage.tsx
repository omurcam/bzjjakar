import React, { useState } from 'react';
import { Package, Truck, Globe, CreditCard, FileText, Phone, Mail, Check, Star, Users, Award } from 'lucide-react';

interface PricingTier {
  name: string;
  minOrder: string;
  discount: string;
  benefits: string[];
  priceRange: string;
  recommended?: boolean;
}

const WholesalePage: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('standard');
  const [inquiryForm, setInquiryForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    orderQuantity: '',
    collections: [],
    timeline: '',
    additionalInfo: ''
  });

  const pricingTiers: PricingTier[] = [
    {
      name: 'Premium Tier',
      minOrder: '50m',
      discount: '5-10%',
      priceRange: '$28-45/yard',
      benefits: [
        'Premium fabric selection',
        'Standard 30-day payment terms',
        'Regional shipping included',
        'Basic technical support',
        'Quarterly trend reports'
      ]
    },
    {
      name: 'Standard Tier',
      minOrder: '100m',
      discount: '10-15%',
      priceRange: '$25-38/yard',
      benefits: [
        'Full collection access',
        'Extended 45-day payment terms',
        'Free international shipping',
        'Priority technical support',
        'Monthly trend forecasts',
        'Custom color matching'
      ],
      recommended: true
    },
    {
      name: 'Bulk Tier',
      minOrder: '200m',
      discount: '15-25%',
      priceRange: '$22-35/yard',
      benefits: [
        'Exclusive bulk pricing',
        'Flexible 60-day payment terms',
        'Express shipping options',
        'Dedicated account manager',
        'Weekly market insights',
        'Custom design services',
        'Quality guarantee program'
      ]
    },
    {
      name: 'Enterprise Tier',
      minOrder: '500m+',
      discount: '25-35%',
      priceRange: '$18-30/yard',
      benefits: [
        'Maximum volume discounts',
        'Customized payment terms',
        'White-glove logistics',
        'Senior account executive',
        'Real-time market data',
        'Bespoke pattern development',
        'Priority production slots',
        'Annual business reviews'
      ]
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Initial Inquiry',
      description: 'Submit your requirements through our wholesale inquiry form',
      timeline: '24 hours response'
    },
    {
      step: '2',
      title: 'Sample Request',
      description: 'Receive fabric samples and detailed specifications',
      timeline: '5-7 business days'
    },
    {
      step: '3',
      title: 'Quote & Negotiation',
      description: 'Custom pricing based on volume and specifications',
      timeline: '2-3 business days'
    },
    {
      step: '4',
      title: 'Order Confirmation',
      description: 'Finalize order details, payment terms, and timeline',
      timeline: '1 business day'
    },
    {
      step: '5',
      title: 'Production & QC',
      description: 'Manufacturing with rigorous quality control',
      timeline: '2-4 weeks'
    },
    {
      step: '6',
      title: 'Shipping & Delivery',
      description: 'Global logistics and delivery confirmation',
      timeline: '1-2 weeks'
    }
  ];

  const testimonials = [
    {
      company: 'Elite Fashion House',
      contact: 'Sarah Chen, Procurement Director',
      quote: 'BZJ Jakar has been our primary fabric supplier for three years. Their consistency, quality, and service are unmatched in the industry.',
      orderSize: '2,000+ yards annually'
    },
    {
      company: 'Luxury Interiors Ltd',
      contact: 'Marco Rodriguez, Head Buyer',
      quote: 'The bulk pricing and custom design services have enabled us to offer premium products while maintaining healthy margins.',
      orderSize: '500+ yards per project'
    },
    {
      company: 'Sustainable Brands Co',
      contact: 'Emma Thompson, Supply Chain Manager',
      quote: 'Their commitment to sustainability aligns perfectly with our brand values. The organic collections are exceptional.',
      orderSize: '1,000+ yards quarterly'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInquiryForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Wholesale inquiry submitted:', inquiryForm);
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-charcoal via-medium-gray to-soft-charcoal text-pure-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif font-bold text-5xl sm:text-6xl mb-6">
              Wholesale Solutions
            </h1>
            <p className="font-sans text-xl text-pure-white/90 leading-relaxed mb-8">
              Partner with BZJ Jakar for premium jacquard fabrics at wholesale prices. 
              Designed for fashion houses, interior designers, and textile manufacturers worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Package className="w-12 h-12 text-soft-gold mx-auto mb-3" />
                <div className="font-serif font-bold text-2xl text-soft-gold">50m+</div>
                <div className="font-sans text-pure-white/80">Minimum Order</div>
              </div>
              <div>
                <Globe className="w-12 h-12 text-soft-gold mx-auto mb-3" />
                <div className="font-serif font-bold text-2xl text-soft-gold">50+</div>
                <div className="font-sans text-pure-white/80">Countries Served</div>
              </div>
              <div>
                <Users className="w-12 h-12 text-soft-gold mx-auto mb-3" />
                <div className="font-serif font-bold text-2xl text-soft-gold">5000+</div>
                <div className="font-sans text-pure-white/80">B2B Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-powder-blue/20 to-mint-green/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              Wholesale Pricing Tiers
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Flexible pricing structure designed to accommodate businesses of all sizes, 
              from emerging designers to established manufacturers.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={tier.name} 
                className={`relative bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-pastel transition-all duration-300 overflow-hidden border border-light-gray/20 ${
                  tier.recommended ? 'ring-2 ring-soft-gold transform scale-105' : ''
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {tier.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-accent text-soft-charcoal text-center py-2 font-sans font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className={`p-8 ${tier.recommended ? 'pt-12' : ''}`}>
                  <h3 className="font-serif font-bold text-2xl text-soft-charcoal mb-2">
                    {tier.name}
                  </h3>
                  <div className="font-sans text-3xl font-bold text-soft-gold mb-1">
                    {tier.priceRange}
                  </div>
                  <div className="font-sans text-sm text-medium-gray mb-4">
                    Minimum order: {tier.minOrder}
                  </div>
                  <div className="bg-mint-green/20 rounded-xl p-3 mb-6 border border-mint-green/30">
                    <div className="font-sans font-semibold text-mint-green">
                      Volume Discount: {tier.discount}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-medium-gray text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0">
                  <button 
                    className={`w-full btn-primary ${
                      tier.recommended ? 'bg-gradient-accent text-soft-charcoal hover:bg-gradient-soft' : ''
                    }`}
                    onClick={() => setSelectedTier(tier.name.toLowerCase().replace(' ', ''))}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-light-coral/10 to-lavender-mist/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              Order Process & Timeline
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Our streamlined wholesale process ensures efficient ordering from initial inquiry to delivery.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-16 bottom-0 w-1 bg-gradient-accent hidden md:block"></div>
            
            <div className="space-y-12">
              {processSteps.map((process, index) => (
                <div key={process.step} className="flex items-start space-x-8">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-soft-charcoal to-medium-gray rounded-full flex items-center justify-center shadow-soft">
                      <span className="font-serif font-bold text-2xl text-soft-gold">{process.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gradient-card rounded-2xl p-6 shadow-soft hover:shadow-pastel transition-shadow duration-300 border border-light-gray/20" style={{ transitionDelay: `${index * 0.1}s` }}>
                    <h3 className="font-serif font-semibold text-2xl text-soft-charcoal mb-3">
                      {process.title}
                    </h3>
                    <p className="font-sans text-medium-gray leading-relaxed mb-4">
                      {process.description}
                    </p>
                    <div className="inline-flex items-center bg-gradient-accent/50 rounded-full px-4 py-2 backdrop-blur-sm">
                      <span className="font-sans font-medium text-soft-charcoal text-sm">{process.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse & Logistics */}
      <section className="section-spacing bg-gradient-to-br from-soft-charcoal via-medium-gray to-soft-charcoal text-pure-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-4xl mb-6">
                Global Logistics Network
              </h2>
              <div className="space-y-6 font-sans text-lg text-pure-white/90 leading-relaxed">
                <p>
                  Our advanced warehouse facilities and global logistics network ensure reliable, 
                  timely delivery to clients worldwide. With strategic partnerships across major 
                  shipping routes, we guarantee your fabrics arrive on schedule.
                </p>
                <p>
                  Climate-controlled storage facilities protect fabric quality during transit, 
                  while our tracking systems provide real-time visibility into order status 
                  from production through delivery.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Truck className="w-8 h-8 text-soft-gold mx-auto mb-2" />
                  <div className="font-serif font-bold text-2xl text-soft-gold">72h</div>
                  <div className="font-sans text-sm text-pure-white/80">Regional Delivery</div>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 text-soft-gold mx-auto mb-2" />
                  <div className="font-serif font-bold text-2xl text-soft-gold">7-14d</div>
                  <div className="font-sans text-sm text-pure-white/80">International</div>
                </div>
                <div className="text-center">
                  <Package className="w-8 h-8 text-soft-gold mx-auto mb-2" />
                  <div className="font-serif font-bold text-2xl text-soft-gold">99.8%</div>
                  <div className="font-sans text-sm text-pure-white/80">On-Time Rate</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/wholesale_warehouse.png"
                alt="Modern warehouse facility with fabric storage systems"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="mt-6">
                <img
                  src="/images/global_shipping.png"
                  alt="Global shipping and logistics network"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Preview */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-powder-blue/20 to-mint-green/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              Wholesale Terms Overview
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Transparent, fair terms designed to build lasting business relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft p-8 hover:shadow-pastel transition-shadow duration-300 border border-light-gray/20">
              <CreditCard className="w-12 h-12 text-soft-charcoal mb-4" />
              <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-4">Payment Terms</h3>
              <ul className="space-y-2 font-sans text-medium-gray">
                <li>• 30-60 day payment terms</li>
                <li>• Multiple payment methods</li>
                <li>• Credit applications available</li>
                <li>• Early payment discounts</li>
              </ul>
            </div>
            
            <div className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft p-8 hover:shadow-pastel transition-shadow duration-300 border border-light-gray/20">
              <FileText className="w-12 h-12 text-soft-charcoal mb-4" />
              <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-4">Order Policies</h3>
              <ul className="space-y-2 font-sans text-medium-gray">
                <li>• Minimum order quantities apply</li>
                <li>• Custom orders require 50% deposit</li>
                <li>• Returns within 30 days</li>
                <li>• Quality guarantee included</li>
              </ul>
            </div>
            
            <div className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft p-8 hover:shadow-pastel transition-shadow duration-300 border border-light-gray/20">
              <Truck className="w-12 h-12 text-soft-charcoal mb-4" />
              <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-4">Shipping & Delivery</h3>
              <ul className="space-y-2 font-sans text-medium-gray">
                <li>• Free shipping on qualified orders</li>
                <li>• Express delivery options</li>
                <li>• International shipping available</li>
                <li>• Insurance coverage included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-light-coral/10 to-lavender-mist/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              Client Success Stories
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Hear from wholesale partners who have grown their businesses with BZJ Jakar.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.company} className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-pastel transition-shadow duration-300 p-8 border border-light-gray/20" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  <Star className="w-6 h-6 text-soft-gold" />
                  <Star className="w-6 h-6 text-soft-gold" />
                  <Star className="w-6 h-6 text-soft-gold" />
                  <Star className="w-6 h-6 text-soft-gold" />
                  <Star className="w-6 h-6 text-soft-gold" />
                </div>
                <blockquote className="font-sans text-medium-gray italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-light-gray/30 pt-4">
                  <div className="font-serif font-semibold text-soft-charcoal">{testimonial.company}</div>
                  <div className="font-sans text-sm text-medium-gray mb-2">{testimonial.contact}</div>
                  <div className="font-sans text-sm text-soft-gold font-medium">{testimonial.orderSize}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Inquiry Form */}
      <section className="section-spacing bg-gradient-accent relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
                Request Wholesale Quote
              </h2>
              <p className="font-sans text-lg text-soft-charcoal/80 leading-relaxed">
                Fill out this form to receive a personalized wholesale quote within 24 hours.
              </p>
            </div>

            <div className="bg-pure-white/90 backdrop-blur-sm rounded-3xl shadow-pastel p-8 border border-light-gray/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={inquiryForm.companyName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">Contact Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      value={inquiryForm.contactName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={inquiryForm.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={inquiryForm.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">Country *</label>
                    <select
                      name="country"
                      value={inquiryForm.country}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
                      required
                    >
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="IT">Italy</option>
                      <option value="JP">Japan</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">Estimated Order Quantity *</label>
                    <select
                      name="orderQuantity"
                      value={inquiryForm.orderQuantity}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
                      required
                    >
                      <option value="">Select quantity range</option>
                      <option value="50-99m">50-99 meters</option>
                      <option value="100-199m">100-199 meters</option>
                      <option value="200-499m">200-499 meters</option>
                      <option value="500m+">500+ meters</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-sans font-medium text-soft-charcoal mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={inquiryForm.timeline}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
                  >
                    <option value="">When do you need the fabrics?</option>
                    <option value="ASAP">As soon as possible</option>
                    <option value="1-2 weeks">Within 1-2 weeks</option>
                    <option value="1 month">Within 1 month</option>
                    <option value="2-3 months">2-3 months</option>
                    <option value="Flexible">Flexible timeline</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans font-medium text-soft-charcoal mb-2">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={inquiryForm.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Please share any specific requirements, questions, or additional details about your project..."
                    className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300 resize-vertical"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button type="submit" className="btn-primary bg-gradient-to-br from-soft-charcoal to-medium-gray text-pure-white hover:from-medium-gray hover:to-soft-charcoal flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Submit Inquiry</span>
                  </button>
                  <button type="button" className="btn-secondary border-2 border-soft-charcoal text-soft-charcoal hover:bg-gradient-soft flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call Our Sales Team</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WholesalePage;