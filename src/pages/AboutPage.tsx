import React from 'react';
import { Award, Users, Globe, Factory, History, Target, Eye, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const timelineEvents = [
    {
      year: '1995',
      title: 'Company Founded',
      description: 'BZJ Jakar established with a vision to create premium jacquard fabrics for the global market.'
    },
    {
      year: '2000',
      title: 'First Export Markets',
      description: 'Expanded to European markets, establishing partnerships with leading fashion houses.'
    },
    {
      year: '2005',
      title: 'Technology Innovation',
      description: 'Invested in state-of-the-art jacquard looms and digital design capabilities.'
    },
    {
      year: '2010',
      title: 'Global Expansion',
      description: 'Opened offices in New York, London, and Milan to serve international clients.'
    },
    {
      year: '2015',
      title: 'Sustainability Initiative',
      description: 'Launched comprehensive environmental program and obtained eco-certifications.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented AI-driven design tools and virtual sampling technologies.'
    },
    {
      year: '2025',
      title: 'Industry Leadership',
      description: 'Recognized as global leader in premium jacquard fabric manufacturing.'
    }
  ];

  const awards = [
    {
      year: '2024',
      title: 'Excellence in Textile Innovation',
      organization: 'International Textile Association'
    },
    {
      year: '2023',
      title: 'Sustainable Manufacturing Award',
      organization: 'Global Fashion Council'
    },
    {
      year: '2022',
      title: 'Best B2B Textile Supplier',
      organization: 'Fashion Industry Awards'
    },
    {
      year: '2021',
      title: 'Quality Excellence Certification',
      organization: 'European Textile Standards'
    }
  ];

  const capabilities = [
    {
      icon: <Factory className="w-8 h-8 text-soft-gold" />,
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art facilities with precision jacquard looms and quality control systems.'
    },
    {
      icon: <Globe className="w-8 h-8 text-soft-gold" />,
      title: 'Global Distribution',
      description: 'Worldwide shipping network serving over 50 countries with reliable delivery.'
    },
    {
      icon: <Users className="w-8 h-8 text-soft-gold" />,
      title: 'Expert Team',
      description: 'Skilled artisans, designers, and technical specialists with decades of experience.'
    },
    {
      icon: <Award className="w-8 h-8 text-soft-gold" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control ensuring consistent excellence in every yard.'
    }
  ];

  const teamMembers = [
    {
      name: 'James Chen',
      position: 'Chief Executive Officer',
      experience: '25+ years in textile manufacturing',
      specialty: 'Strategic leadership and global expansion'
    },
    {
      name: 'Maria Rodriguez',
      position: 'Creative Director',
      experience: '20+ years in fabric design',
      specialty: 'Pattern development and trend forecasting'
    },
    {
      name: 'David Kim',
      position: 'Head of Operations',
      experience: '18+ years in production management',
      specialty: 'Manufacturing efficiency and quality control'
    },
    {
      name: 'Sarah Johnson',
      position: 'Sustainability Director',
      experience: '15+ years in eco-textile innovation',
      specialty: 'Environmental compliance and green manufacturing'
    }
  ];

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
              Our Heritage
            </h1>
            <p className="font-sans text-xl text-medium-gray leading-relaxed">
              Three decades of textile excellence, combining traditional craftsmanship with innovative technology 
              to create the world's finest jacquard fabrics.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-powder-blue/20 to-mint-green/20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-secondary rounded-full blur-3xl opacity-15 animate-float"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
                The BZJ Jakar Story
              </h2>
              <div className="space-y-6 font-sans text-lg text-medium-gray leading-relaxed">
                <p>
                  Founded in 1995, BZJ Jakar began as a vision to bridge the gap between traditional 
                  textile craftsmanship and modern fashion needs. Our founder recognized the declining 
                  art of jacquard weaving and set out to preserve and elevate this magnificent craft.
                </p>
                <p>
                  What started as a small workshop has evolved into a global leader in premium 
                  jacquard fabric manufacturing. Today, we serve over 5,000 clients across 50+ countries, 
                  from emerging designers to established luxury fashion houses.
                </p>
                <p>
                  Our commitment to excellence drives every aspect of our business, from the selection 
                  of finest raw materials to the final quality inspection. We believe that every thread 
                  tells a story, and we're honored to be part of that narrative.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-card rounded-2xl transform rotate-3"></div>
              <img
                src="/images/business_team.png"
                alt="BZJ Jakar team members discussing fabric designs"
                className="relative w-full rounded-2xl shadow-pastel"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              Our Journey
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Key milestones in our evolution from a small textile workshop to a global industry leader.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-accent hidden lg:block"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-inherit mb-4 lg:mb-0`}>
                    <div className="bg-gradient-card rounded-lg p-6 shadow-soft hover:shadow-pastel transition-shadow duration-300 border border-light-gray/20">
                      <div className="text-soft-gold font-serif font-bold text-xl mb-2">{event.year}</div>
                      <h3 className="font-serif font-semibold text-2xl text-soft-charcoal mb-3">{event.title}</h3>
                      <p className="font-sans text-medium-gray leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-4 h-4 bg-soft-gold rounded-full border-4 border-pure-white shadow-soft"></div>
                  </div>
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="section-spacing bg-gradient-to-br from-soft-charcoal via-medium-gray to-soft-charcoal text-pure-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl mb-6">
              Manufacturing Excellence
            </h2>
            <p className="font-sans text-lg text-pure-white/90 max-w-3xl mx-auto leading-relaxed">
              Our state-of-the-art facilities combine traditional craftsmanship with cutting-edge technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/images/factory_production.png"
                alt="Modern textile manufacturing facility with jacquard looms"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-serif font-semibold text-3xl text-soft-gold mb-6">Production Capabilities</h3>
              <div className="space-y-4 font-sans text-pure-white/90 leading-relaxed">
                <p>
                  Our 50,000 square foot facility houses 120 precision jacquard looms, each capable of 
                  producing intricate patterns with up to 10,000 warp threads. This allows us to create 
                  designs of unprecedented complexity and beauty.
                </p>
                <p>
                  Advanced quality control systems monitor every stage of production, from yarn preparation 
                  to final inspection. Our commitment to zero-defect manufacturing ensures that every yard 
                  meets our exacting standards.
                </p>
                <p>
                  With a production capacity of 2 million yards annually, we can fulfill large orders 
                  while maintaining the flexibility to handle specialized small-batch requests.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <img
                src="/images/manufacturing_process.png"
                alt="Detailed view of jacquard weaving process"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:order-1 space-y-6">
              <h3 className="font-serif font-semibold text-3xl text-soft-gold mb-6">Quality Assurance</h3>
              <div className="space-y-4 font-sans text-pure-white/90 leading-relaxed">
                <p>
                  Every fabric undergoes rigorous testing including tensile strength, colorfastness, 
                  dimensional stability, and pattern accuracy. Our laboratory is equipped with the 
                  latest testing equipment to ensure compliance with international standards.
                </p>
                <p>
                  Our quality assurance team includes textile engineers and experienced craftsmen who 
                  inspect each production run. This dual approach combines technical precision with 
                  the trained eye of seasoned professionals.
                </p>
              </div>
              <img
                src="/images/quality_certification.png"
                alt="Quality certification and testing processes"
                className="w-full rounded-lg shadow-xl mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Capabilities */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-powder-blue/20 to-mint-green/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              Global Capabilities
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              From design conception to delivery, we provide comprehensive textile solutions worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={capability.title} className="text-center" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-pastel transition-all duration-300 p-8 border border-light-gray/20">
                  <div className="flex justify-center mb-6">
                    {capability.icon}
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-4">
                    {capability.title}
                  </h3>
                  <p className="font-sans text-medium-gray leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-light-coral/10 to-lavender-mist/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              Leadership Team
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Meet the experts who guide our vision and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="text-center" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-pastel transition-all duration-300 p-6 border border-light-gray/20">
                  <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-soft-charcoal" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-2">
                    {member.name}
                  </h3>
                  <p className="font-sans font-medium text-soft-gold mb-3">
                    {member.position}
                  </p>
                  <p className="font-sans text-sm text-medium-gray mb-3">
                    {member.experience}
                  </p>
                  <p className="font-sans text-sm text-medium-gray/80">
                    {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-spacing bg-gradient-accent relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <Eye className="w-12 h-12 text-soft-charcoal" />
              </div>
              <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
                Our Vision
              </h2>
              <p className="font-sans text-lg text-soft-charcoal/80 leading-relaxed">
                To be the world's most respected creator of premium jacquard fabrics, 
                setting the standard for quality, innovation, and sustainability in the 
                global textile industry.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <Target className="w-12 h-12 text-soft-charcoal" />
              </div>
              <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
                Our Mission
              </h2>
              <p className="font-sans text-lg text-soft-charcoal/80 leading-relaxed">
                To empower designers and manufacturers worldwide with exceptional jacquard fabrics 
                that inspire creativity, enhance products, and contribute to a more sustainable 
                textile future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-spacing bg-gradient-to-br from-soft-charcoal via-medium-gray to-soft-charcoal text-pure-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl mb-6">
              Awards & Recognition
            </h2>
            <p className="font-sans text-lg text-pure-white/90 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence has been recognized by industry leaders worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={`${award.year}-${award.title}`} className="text-center" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="bg-pure-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-pure-white/20 transition-colors duration-300 border border-pure-white/20">
                  <div className="flex justify-center mb-4">
                    <Award className="w-12 h-12 text-soft-gold" />
                  </div>
                  <div className="text-soft-gold font-serif font-bold text-xl mb-2">{award.year}</div>
                  <h3 className="font-serif font-semibold text-lg text-pure-white mb-3">
                    {award.title}
                  </h3>
                  <p className="font-sans text-sm text-pure-white/80">
                    {award.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;