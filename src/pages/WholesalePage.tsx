import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
      name: t('wholesalePage.pricing.tiers.premium.name'),
      minOrder: t('wholesalePage.pricing.tiers.premium.minOrder'),
      discount: t('wholesalePage.pricing.tiers.premium.discount'),
      priceRange: t('wholesalePage.pricing.tiers.premium.priceRange'),
      benefits: t('wholesalePage.pricing.tiers.premium.benefits', { returnObjects: true }) as string[]
    },
    {
      name: t('wholesalePage.pricing.tiers.standard.name'),
      minOrder: t('wholesalePage.pricing.tiers.standard.minOrder'),
      discount: t('wholesalePage.pricing.tiers.standard.discount'),
      priceRange: t('wholesalePage.pricing.tiers.standard.priceRange'),
      benefits: t('wholesalePage.pricing.tiers.standard.benefits', { returnObjects: true }) as string[],
      recommended: true
    },
    {
      name: t('wholesalePage.pricing.tiers.bulk.name'),
      minOrder: t('wholesalePage.pricing.tiers.bulk.minOrder'),
      discount: t('wholesalePage.pricing.tiers.bulk.discount'),
      priceRange: t('wholesalePage.pricing.tiers.bulk.priceRange'),
      benefits: t('wholesalePage.pricing.tiers.bulk.benefits', { returnObjects: true }) as string[]
    }
  ];

  const processSteps = (t('wholesalePage.process.steps', { returnObjects: true }) as Array<{ step: string; title: string; description: string; timeline: string; }>);

  const testimonials = t('wholesalePage.testimonials.clients', { returnObjects: true }) as Array<{ company: string; contact: string; quote: string; orderSize: string; }>;

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
              {t('wholesalePage.hero.title')}
            </h1>
            <p className="font-sans text-xl text-pure-white/90 leading-relaxed mb-8">
              {t('wholesalePage.hero.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Package className="w-12 h-12 text-soft-gold mx-auto mb-3" />
                <div className="font-serif font-bold text-2xl text-soft-gold">{t('wholesalePage.hero.stats.minOrder.number')}</div>
                <div className="font-sans text-pure-white/80">{t('wholesalePage.hero.stats.minOrder.label')}</div>
              </div>
              <div>
                <Globe className="w-12 h-12 text-soft-gold mx-auto mb-3" />
                <div className="font-serif font-bold text-2xl text-soft-gold">{t('wholesalePage.hero.stats.countries.number')}</div>
                <div className="font-sans text-pure-white/80">{t('wholesalePage.hero.stats.countries.label')}</div>
              </div>
              <div>
                <Users className="w-12 h-12 text-soft-gold mx-auto mb-3" />
                <div className="font-serif font-bold text-2xl text-soft-gold">{t('wholesalePage.hero.stats.clients.number')}</div>
                <div className="font-sans text-pure-white/80">{t('wholesalePage.hero.stats.clients.label')}</div>
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
              {t('wholesalePage.pricing.title')}
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              {t('wholesalePage.pricing.description')}
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
                    {t('wholesalePage.pricing.mostPopular')}
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
                    {t('wholesalePage.pricing.labels.minimumOrder')}: {tier.minOrder}
                  </div>
                  <div className="bg-mint-green/20 rounded-xl p-3 mb-6 border border-mint-green/30">
                    <div className="font-sans font-semibold text-mint-green">
                      {t('wholesalePage.pricing.labels.volumeDiscount')}: {tier.discount}
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
                    {t('wholesalePage.pricing.getQuote')}
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
              {t('wholesalePage.process.title')}
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              {t('wholesalePage.process.description')}
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
                {t('wholesalePage.capabilities.title')}
              </h2>
              <div className="space-y-6 font-sans text-lg text-pure-white/90 leading-relaxed">
                <p>
                  {t('wholesalePage.capabilities.description')}
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
                  <div className="font-sans text-sm text-pure-white/80">{t('wholesalePage.capabilities.stats.shipping.label')}</div>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 text-soft-gold mx-auto mb-2" />
                  <div className="font-serif font-bold text-2xl text-soft-gold">7-14d</div>
                  <div className="font-sans text-sm text-pure-white/80">{t('wholesalePage.capabilities.stats.international.label')}</div>
                </div>
                <div className="text-center">
                  <Package className="w-8 h-8 text-soft-gold mx-auto mb-2" />
                  <div className="font-serif font-bold text-2xl text-soft-gold">99.8%</div>
                  <div className="font-sans text-sm text-pure-white/80">{t('wholesalePage.capabilities.stats.onTime.label')}</div>
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
              {t('wholesalePage.terms.title')}
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              {t('wholesalePage.terms.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft p-8 hover:shadow-pastel transition-shadow duration-300 border border-light-gray/20">
              <CreditCard className="w-12 h-12 text-soft-charcoal mb-4" />
              <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-4">{t('wholesalePage.terms.payment.title')}</h3>
              <ul className="space-y-2 font-sans text-medium-gray">
                {(t('wholesalePage.terms.payment.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft p-8 hover:shadow-pastel transition-shadow duration-300 border border-light-gray/20">
              <FileText className="w-12 h-12 text-soft-charcoal mb-4" />
              <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-4">{t('wholesalePage.terms.policies.title')}</h3>
              <ul className="space-y-2 font-sans text-medium-gray">
                {(t('wholesalePage.terms.policies.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft p-8 hover:shadow-pastel transition-shadow duration-300 border border-light-gray/20">
              <Truck className="w-12 h-12 text-soft-charcoal mb-4" />
              <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-4">{t('wholesalePage.terms.shipping.title')}</h3>
              <ul className="space-y-2 font-sans text-medium-gray">
                {(t('wholesalePage.terms.shipping.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
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
              {t('wholesalePage.testimonials.title')}
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              {t('wholesalePage.testimonials.description')}
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
              <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">{t('wholesalePage.inquiry.title')}</h2>
              <p className="font-sans text-lg text-soft-charcoal/80 leading-relaxed">{t('wholesalePage.inquiry.description')}</p>
            </div>

            <div className="bg-pure-white/90 backdrop-blur-sm rounded-3xl shadow-pastel p-8 border border-light-gray/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">{t('wholesalePage.inquiry.form.companyName')} *</label>
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
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">{t('wholesalePage.inquiry.form.contactName')} *</label>
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
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">{t('wholesalePage.inquiry.form.email')} *</label>
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
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">{t('wholesalePage.inquiry.form.phone')}</label>
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
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">{t('wholesalePage.inquiry.form.country')} *</label>
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
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">{t('wholesalePage.inquiry.form.orderQuantity')} *</label>
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
                  <label className="block font-sans font-medium text-soft-charcoal mb-2">{t('wholesalePage.inquiry.form.timeline')}</label>
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
                  <label className="block font-sans font-medium text-soft-charcoal mb-2">{t('wholesalePage.inquiry.form.additionalInfo')}</label>
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
                    <span>{t('wholesalePage.inquiry.form.submitInquiry')}</span>
                  </button>
                  <button type="button" className="btn-secondary border-2 border-soft-charcoal text-soft-charcoal hover:bg-gradient-soft flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>{t('wholesalePage.inquiry.form.callSalesTeam')}</span>
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