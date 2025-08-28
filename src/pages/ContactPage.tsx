import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Globe, Send, User, MessageCircle, Building, Briefcase } from 'lucide-react';

interface ContactForm {
  inquiryType: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    inquiryType: 'general',
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    subject: '',
    message: ''
  });

  const offices = [
    {
      region: 'North America',
      city: 'New York',
      address: '245 Fifth Avenue, Suite 1200\nNew York, NY 10016\nUnited States',
      phone: '+1 (212) 555-0123',
      email: 'americas@bzjjakar.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      languages: ['English', 'Spanish']
    },
    {
      region: 'Europe',
      city: 'London',
      address: '15 Regent Street\nLondon SW1Y 4LR\nUnited Kingdom',
      phone: '+44 20 7123 4567',
      email: 'europe@bzjjakar.com',
      hours: 'Mon-Fri: 9:00 AM - 5:30 PM GMT',
      languages: ['English', 'French', 'German']
    },
    {
      region: 'Asia Pacific',
      city: 'Hong Kong',
      address: 'Central Plaza, 18 Harbour Road\nWan Chai, Hong Kong',
      phone: '+852 2123 4567',
      email: 'asia@bzjjakar.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM HKT',
      languages: ['English', 'Mandarin', 'Cantonese']
    },
    {
      region: 'Headquarters',
      city: 'Manufacturing Center',
      address: 'BZJ Jakar Industrial Complex\n1288 Textile Avenue\nShanghai, China',
      phone: '+86 21 5555 0123',
      email: 'headquarters@bzjjakar.com',
      hours: 'Mon-Fri: 8:30 AM - 5:30 PM CST',
      languages: ['Mandarin', 'English']
    }
  ];

  const salesContacts = [
    {
      name: 'Jennifer Walsh',
      position: 'Regional Sales Director - Americas',
      phone: '+1 (212) 555-0124',
      email: 'jennifer.walsh@bzjjakar.com',
      specialties: ['Fashion Houses', 'Interior Design', 'Retail Chains'],
      languages: ['English', 'Spanish']
    },
    {
      name: 'Alessandro Rossi',
      position: 'Regional Sales Director - Europe',
      phone: '+44 20 7123 4568',
      email: 'alessandro.rossi@bzjjakar.com',
      specialties: ['Luxury Brands', 'Haute Couture', 'Custom Manufacturing'],
      languages: ['English', 'Italian', 'French']
    },
    {
      name: 'Yuki Tanaka',
      position: 'Regional Sales Director - Asia Pacific',
      phone: '+852 2123 4568',
      email: 'yuki.tanaka@bzjjakar.com',
      specialties: ['Tech Fashion', 'Sustainable Textiles', 'Volume Orders'],
      languages: ['English', 'Japanese', 'Mandarin']
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: <MessageCircle className="w-5 h-5" /> },
    { value: 'wholesale', label: 'Wholesale Pricing', icon: <Briefcase className="w-5 h-5" /> },
    { value: 'samples', label: 'Sample Request', icon: <Building className="w-5 h-5" /> },
    { value: 'custom', label: 'Custom Design', icon: <User className="w-5 h-5" /> },
    { value: 'technical', label: 'Technical Support', icon: <Phone className="w-5 h-5" /> },
    { value: 'partnership', label: 'Partnership Opportunity', icon: <Globe className="w-5 h-5" /> }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-16 w-32 h-32 bg-gradient-soft rounded-full blur-2xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif font-bold text-6xl sm:text-7xl mb-6 text-soft-charcoal">
              Contact Us
            </h1>
            <p className="font-sans text-xl text-medium-gray leading-relaxed mb-8">
              Connect with our global team to discuss your textile needs. From wholesale inquiries 
              to custom design projects, we're here to support your business.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-pure-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
                <Globe className="w-12 h-12 text-soft-charcoal mx-auto mb-3" />
                <div className="font-serif font-bold text-xl text-soft-charcoal">Global Presence</div>
                <div className="font-sans text-medium-gray">4 Regional Offices</div>
              </div>
              <div className="text-center bg-pure-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
                <Clock className="w-12 h-12 text-soft-charcoal mx-auto mb-3" />
                <div className="font-serif font-bold text-xl text-soft-charcoal">24/7 Support</div>
                <div className="font-sans text-medium-gray">Round-the-clock Service</div>
              </div>
              <div className="text-center bg-pure-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
                <MessageCircle className="w-12 h-12 text-soft-charcoal mx-auto mb-3" />
                <div className="font-serif font-bold text-xl text-soft-charcoal">Quick Response</div>
                <div className="font-sans text-medium-gray">24-hour Reply Promise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-light-coral/10 to-lavender-mist/20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-20 -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-accent rounded-full blur-2xl opacity-30 translate-y-24 -translate-x-24"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
                Send Us a Message
              </h2>
              <p className="font-sans text-lg text-medium-gray leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="bg-pure-white/70 backdrop-blur-sm rounded-3xl shadow-pastel p-8 border border-light-gray/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type Selection */}
                <div>
                  <label className="block font-sans font-medium text-soft-charcoal mb-4">What can we help you with? *</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {inquiryTypes.map((type) => (
                      <label key={type.value} className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl bg-gradient-card hover:shadow-soft transition-all duration-300">
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type.value}
                          checked={contactForm.inquiryType === type.value}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-soft-charcoal focus:ring-soft-gold border-light-gray"
                        />
                        <div className="text-soft-charcoal">{type.icon}</div>
                        <span className="font-sans text-soft-charcoal">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={contactForm.company}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">Country</label>
                    <select
                      name="country"
                      value={contactForm.country}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
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
                      <option value="CN">China</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans font-medium text-soft-charcoal mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your inquiry"
                      className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans font-medium text-soft-charcoal mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Please provide detailed information about your requirements, timeline, quantity, or any other relevant details..."
                    className="w-full p-3 border border-light-gray/30 rounded-xl focus:ring-2 focus:ring-soft-gold focus:border-soft-gold transition-colors duration-300 resize-vertical"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-primary bg-gradient-to-br from-soft-charcoal to-medium-gray text-pure-white hover:from-medium-gray hover:to-soft-charcoal flex items-center space-x-2 mx-auto">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              Our Global Offices
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              With offices strategically located around the world, we provide localized support 
              and personalized service to our international clientele.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div key={office.city} className="bg-gradient-card rounded-2xl shadow-soft p-8 hover:shadow-pastel transition-shadow duration-300 backdrop-blur-sm border border-light-gray/20" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4 mb-6">
                  <MapPin className="w-8 h-8 text-soft-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-soft-charcoal mb-2">
                      {office.region}
                    </h3>
                    <div className="font-sans font-medium text-lg text-medium-gray mb-1">{office.city}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Building className="w-5 h-5 text-soft-charcoal flex-shrink-0 mt-1" />
                    <div className="font-sans text-medium-gray whitespace-pre-line">{office.address}</div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-soft-charcoal flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="font-sans text-soft-charcoal hover:text-soft-gold transition-colors duration-300">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-soft-charcoal flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="font-sans text-soft-charcoal hover:text-soft-gold transition-colors duration-300">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-soft-charcoal flex-shrink-0" />
                    <div className="font-sans text-medium-gray">{office.hours}</div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-soft-charcoal flex-shrink-0" />
                    <div className="font-sans text-medium-gray">
                      Languages: {office.languages.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Building Image */}
      <section className="section-spacing bg-gradient-to-br from-soft-charcoal via-medium-gray to-soft-charcoal text-pure-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl text-pure-white mb-6">
              Visit Our Headquarters
            </h2>
            <p className="font-sans text-lg text-pure-white/90 max-w-3xl mx-auto leading-relaxed">
              Our state-of-the-art headquarters and manufacturing facility showcases our commitment 
              to innovation and quality in textile manufacturing.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <img
              src="/images/office_building.png"
              alt="BZJ Jakar headquarters and manufacturing facility"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Sales Representatives */}
      <section className="section-spacing bg-ivory">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              Sales Representatives
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Connect directly with our experienced sales professionals who understand your region's 
              unique market needs and requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {salesContacts.map((rep, index) => (
              <div key={rep.name} className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft p-8 hover:shadow-pastel transition-shadow duration-300 border border-light-gray/20" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-10 h-10 text-soft-charcoal" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-2">
                    {rep.name}
                  </h3>
                  <p className="font-sans text-soft-gold font-medium mb-4">
                    {rep.position}
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-soft-charcoal flex-shrink-0" />
                    <a href={`tel:${rep.phone}`} className="font-sans text-medium-gray hover:text-soft-charcoal transition-colors duration-300">
                      {rep.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-soft-charcoal flex-shrink-0" />
                    <a href={`mailto:${rep.email}`} className="font-sans text-medium-gray hover:text-soft-charcoal transition-colors duration-300 break-all">
                      {rep.email}
                    </a>
                  </div>
                </div>
                
                <div className="border-t border-light-gray/30 pt-4">
                  <div className="mb-3">
                    <h4 className="font-sans font-semibold text-soft-charcoal mb-2">Specialties:</h4>
                    <ul className="space-y-1">
                      {rep.specialties.map((specialty, i) => (
                        <li key={i} className="font-sans text-sm text-medium-gray flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                          <span>{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-soft-charcoal mb-2">Languages:</h4>
                    <p className="font-sans text-sm text-medium-gray">{rep.languages.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Service */}
      <section className="section-spacing bg-gradient-accent relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              24/7 Customer Support
            </h2>
            <p className="font-sans text-lg text-soft-charcoal/80 leading-relaxed mb-8">
              Our dedicated customer service team is available around the clock to assist with 
              your inquiries, order tracking, and technical support needs.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft p-6 border border-light-gray/20">
                <Phone className="w-12 h-12 text-soft-charcoal mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-3">Phone Support</h3>
                <p className="font-sans text-medium-gray mb-4">Immediate assistance for urgent matters</p>
                <a href="tel:+1-800-BZJ-JAKAR" className="font-sans font-semibold text-soft-charcoal hover:text-soft-gold transition-colors duration-300">
                  +1-800-BZJ-JAKAR
                </a>
              </div>
              <div className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft p-6 border border-light-gray/20">
                <Mail className="w-12 h-12 text-soft-charcoal mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-3">Email Support</h3>
                <p className="font-sans text-medium-gray mb-4">Detailed responses within 24 hours</p>
                <a href="mailto:support@bzjjakar.com" className="font-sans font-semibold text-soft-charcoal hover:text-soft-gold transition-colors duration-300">
                  support@bzjjakar.com
                </a>
              </div>
              <div className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft p-6 border border-light-gray/20">
                <MessageCircle className="w-12 h-12 text-soft-charcoal mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-3">Live Chat</h3>
                <p className="font-sans text-medium-gray mb-4">Real-time support during business hours</p>
                <button className="font-sans font-semibold text-soft-charcoal hover:text-soft-gold transition-colors duration-300">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;