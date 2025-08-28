import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Droplets, Recycle, Award, Target, TrendingUp, Users, Globe } from 'lucide-react';

const SustainabilityPage: React.FC = () => {
  const { t } = useTranslation();
  const initiatives = [
    {
      icon: <Leaf className="w-12 h-12 text-mint-green" />,
      title: 'Eco-Friendly Materials',
      description: 'Sourcing organic, recycled, and sustainably produced fibers',
      metrics: '85% of materials certified organic or recycled',
      image: '/images/eco_materials.png'
    },
    {
      icon: <Droplets className="w-12 h-12 text-powder-blue" />,
      title: 'Water Conservation',
      description: 'Advanced water recycling and conservation systems',
      metrics: '60% reduction in water usage since 2020',
      image: '/images/water_conservation.png'
    },
    {
      icon: <Recycle className="w-12 h-12 text-soft-gold" />,
      title: 'Waste Reduction',
      description: 'Zero-waste manufacturing and textile recycling programs',
      metrics: '95% of production waste recycled or repurposed',
      image: '/images/eco_friendly_textile.png'
    }
  ];

  const certifications = [
    {
      name: 'OEKO-TEX Standard 100',
      description: 'Ensures fabrics are free from harmful chemicals',
      year: 'Certified since 2018'
    },
    {
      name: 'Global Organic Textile Standard (GOTS)',
      description: 'Certifies organic fiber content and environmental criteria',
      year: 'Certified since 2019'
    },
    {
      name: 'Cradle to Cradle Certified',
      description: 'Products designed for circular economy',
      year: 'Gold Level since 2021'
    },
    {
      name: 'ISO 14001',
      description: 'Environmental management system certification',
      year: 'Certified since 2017'
    },
    {
      name: 'Better Cotton Initiative',
      description: 'Sustainable cotton sourcing partnership',
      year: 'Member since 2020'
    },
    {
      name: 'Carbon Trust Certification',
      description: 'Carbon footprint measurement and reduction',
      year: 'Certified since 2022'
    }
  ];

  const goals = [
    {
      icon: <Target className="w-8 h-8 text-mint-green" />,
      title: 'Carbon Neutral by 2030',
      description: 'Achieving net-zero carbon emissions across all operations through renewable energy and carbon offset programs.'
    },
    {
      icon: <Droplets className="w-8 h-8 text-powder-blue" />,
      title: '75% Water Reduction',
      description: 'Further reducing water consumption through advanced recycling technologies and process optimization.'
    },
    {
      icon: <Recycle className="w-8 h-8 text-soft-gold" />,
      title: '100% Circular Production',
      description: 'Implementing closed-loop manufacturing where all waste becomes input for new products.'
    },
    {
      icon: <Users className="w-8 h-8 text-powder-blue" />,
      title: 'Supply Chain Transparency',
      description: 'Complete traceability of all materials from source to final product with ethical supplier partnerships.'
    }
  ];

  const impactMetrics = [
    {
      number: '2.5M',
      unit: 'gallons',
      description: 'Water saved annually through conservation programs'
    },
    {
      number: '450',
      unit: 'tons',
      description: 'CO2 emissions reduced in 2024'
    },
    {
      number: '95%',
      unit: '',
      description: 'Production waste diverted from landfills'
    },
    {
      number: '85%',
      unit: '',
      description: 'Materials sourced from sustainable suppliers'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif font-bold text-5xl sm:text-6xl text-soft-charcoal mb-6">
              {t('sustainabilityPage.hero.title')}
            </h1>
            <p className="font-sans text-xl text-medium-gray leading-relaxed mb-8">
              {t('sustainabilityPage.hero.description')}
            </p>
            <div className="flex justify-center">
              <Leaf className="w-16 h-16 text-mint-green" />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-powder-blue/20 to-mint-green/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              {t('sustainabilityPage.impact.title')}
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              {t('sustainabilityPage.impact.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactMetrics.map((metric, index) => (
              <div key={metric.description} className="text-center" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="bg-pure-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-pastel transition-all duration-300 border border-light-gray/20">
                  <div className="font-serif font-bold text-4xl text-mint-green mb-2">
                    {metric.number}
                    <span className="text-2xl text-mint-green/80 ml-1">{metric.unit}</span>
                  </div>
                  <p className="font-sans text-medium-gray leading-relaxed">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-light-coral/10 to-lavender-mist/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              {t('sustainabilityPage.initiatives.title')}
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              {t('sustainabilityPage.initiatives.description')}
            </p>
          </div>

          <div className="space-y-16">
            {initiatives.map((initiative, index) => (
              <div key={initiative.title} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    {initiative.icon}
                    <h3 className="font-serif font-bold text-3xl text-soft-charcoal ml-4">
                      {initiative.title}
                    </h3>
                  </div>
                  <p className="font-sans text-lg text-medium-gray leading-relaxed mb-6">
                    {initiative.description}
                  </p>
                  <div className="bg-mint-green/10 rounded-2xl p-4 mb-6 border border-mint-green/20">
                    <div className="font-serif font-semibold text-lg text-mint-green">
                      Impact: {initiative.metrics}
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={initiative.image}
                    alt={`${initiative.title} visual representation`}
                    className="w-full rounded-lg shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-spacing bg-gradient-to-br from-soft-charcoal via-medium-gray to-soft-charcoal text-pure-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl mb-6">
              Certifications & Standards
            </h2>
            <p className="font-sans text-lg text-pure-white/90 max-w-3xl mx-auto leading-relaxed">
              Our commitment to sustainability is validated by leading international certification bodies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="bg-pure-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-pure-white/20 transition-colors duration-300 border border-pure-white/20" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-soft-gold mr-3" />
                  <h3 className="font-serif font-semibold text-xl text-pure-white">
                    {cert.name}
                  </h3>
                </div>
                <p className="font-sans text-pure-white/80 leading-relaxed mb-3">
                  {cert.description}
                </p>
                <div className="text-soft-gold font-sans font-medium">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon Footprint Reduction */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-powder-blue/20 to-mint-green/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
                Carbon Footprint Reduction
              </h2>
              <div className="space-y-6 font-sans text-lg text-medium-gray leading-relaxed">
                <p>
                  Our comprehensive carbon reduction strategy encompasses every aspect of our operations, 
                  from renewable energy adoption to supply chain optimization.
                </p>
                <p>
                  We've invested $2.5 million in solar panel installations across our facilities, 
                  now generating 70% of our energy needs from renewable sources.
                </p>
                <p>
                  Through process optimization and efficiency improvements, we've reduced our 
                  carbon intensity by 45% since 2020, putting us on track to achieve carbon 
                  neutrality by 2030.
                </p>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div className="bg-mint-green/10 rounded-2xl p-4 border border-mint-green/20">
                  <TrendingUp className="w-8 h-8 text-mint-green mb-2" />
                  <div className="font-serif font-bold text-2xl text-mint-green">45%</div>
                  <div className="font-sans text-sm text-mint-green">Carbon reduction since 2020</div>
                </div>
                <div className="bg-powder-blue/10 rounded-2xl p-4 border border-powder-blue/20">
                  <Globe className="w-8 h-8 text-powder-blue mb-2" />
                  <div className="font-serif font-bold text-2xl text-powder-blue">70%</div>
                  <div className="font-sans text-sm text-powder-blue">Renewable energy usage</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-mint-green/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-card rounded-2xl p-8 backdrop-blur-sm border border-light-gray/20">
                <h3 className="font-serif font-semibold text-2xl text-soft-charcoal mb-6">
                  Carbon Neutral Journey
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-mint-green rounded-full mr-4"></div>
                    <span className="font-sans text-medium-gray">2020: Baseline measurement - 2,400 tons CO2</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-mint-green rounded-full mr-4"></div>
                    <span className="font-sans text-medium-gray">2022: 25% reduction achieved</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-mint-green rounded-full mr-4"></div>
                    <span className="font-sans text-medium-gray">2024: 45% reduction achieved</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-mint-green/60 rounded-full mr-4"></div>
                    <span className="font-sans text-medium-gray">2027: 80% reduction target</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-mint-green/40 rounded-full mr-4"></div>
                    <span className="font-sans text-medium-gray">2030: Carbon neutral goal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="section-spacing bg-gradient-accent relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              2030 Sustainability Goals
            </h2>
            <p className="font-sans text-lg text-soft-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Ambitious targets that will position us as a leader in sustainable textile manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <div key={goal.title} className="bg-pure-white/70 backdrop-blur-sm rounded-2xl shadow-soft p-8 hover:shadow-pastel transition-shadow duration-300 border border-light-gray/20" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  {goal.icon}
                  <h3 className="font-serif font-semibold text-2xl text-soft-charcoal ml-4">
                    {goal.title}
                  </h3>
                </div>
                <p className="font-sans text-medium-gray leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership & Collaboration */}
      <section className="section-spacing bg-gradient-to-br from-pure-white via-light-coral/10 to-lavender-mist/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
              Sustainable Partnerships
            </h2>
            <p className="font-sans text-lg text-medium-gray leading-relaxed mb-8">
              Collaboration is key to systemic change. We work with suppliers, customers, and 
              industry organizations to advance sustainability across the entire textile value chain.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Users className="w-12 h-12 text-soft-charcoal mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-3">Supplier Network</h3>
                <p className="font-sans text-medium-gray">Working with 200+ certified sustainable suppliers worldwide</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-mint-green mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-3">Industry Initiatives</h3>
                <p className="font-sans text-medium-gray">Active member of 15+ sustainability organizations</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-soft-gold mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-3">Research Partnerships</h3>
                <p className="font-sans text-medium-gray">Collaborating with 5 universities on textile innovation</p>
              </div>
            </div>
            <div className="text-center">
              <a href="/contact" className="btn-primary">
                Join Our Sustainability Journey
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;