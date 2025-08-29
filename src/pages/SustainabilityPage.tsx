import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Droplets, Recycle, Award, Target, TrendingUp, Users, Globe } from 'lucide-react';

const SustainabilityPage: React.FC = () => {
  const { t } = useTranslation();
  const initiatives = (t('sustainabilityPage.initiatives.items', { returnObjects: true }) as Array<{ title: string; description: string; metrics: string; image: string; }>).map((item, idx) => ({
    ...item,
    icon: idx === 0 ? <Leaf className="w-12 h-12 text-mint-green" /> : idx === 1 ? <Droplets className="w-12 h-12 text-powder-blue" /> : <Recycle className="w-12 h-12 text-soft-gold" />
  }));

  const certifications = t('sustainabilityPage.certifications.list', { returnObjects: true }) as Array<{ name: string; description: string; year: string; }>;

  const goals = (t('sustainabilityPage.goals.items', { returnObjects: true }) as Array<{ title: string; description: string; }>).map((item, idx) => ({
    ...item,
    icon: idx === 0 ? <Target className="w-8 h-8 text-mint-green" /> : idx === 1 ? <Droplets className="w-8 h-8 text-powder-blue" /> : idx === 2 ? <Recycle className="w-8 h-8 text-soft-gold" /> : <Users className="w-8 h-8 text-powder-blue" />
  }));

  const impactMetrics = t('sustainabilityPage.impact.metrics', { returnObjects: true }) as Array<{ number: string; unit: string; description: string; }>;

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
              {t('sustainabilityPage.certifications.title')}
            </h2>
            <p className="font-sans text-lg text-pure-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('sustainabilityPage.certifications.description')}
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
                {t('sustainabilityPage.carbon.title')}
              </h2>
              <div className="space-y-6 font-sans text-lg text-medium-gray leading-relaxed">
                <p>{t('sustainabilityPage.carbon.p1')}</p>
                <p>{t('sustainabilityPage.carbon.p2')}</p>
                <p>{t('sustainabilityPage.carbon.p3')}</p>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div className="bg-mint-green/10 rounded-2xl p-4 border border-mint-green/20">
                  <TrendingUp className="w-8 h-8 text-mint-green mb-2" />
                  <div className="font-serif font-bold text-2xl text-mint-green">{t('sustainabilityPage.carbon.cards.reduction.value')}</div>
                  <div className="font-sans text-sm text-mint-green">{t('sustainabilityPage.carbon.cards.reduction.label')}</div>
                </div>
                <div className="bg-powder-blue/10 rounded-2xl p-4 border border-powder-blue/20">
                  <Globe className="w-8 h-8 text-powder-blue mb-2" />
                  <div className="font-serif font-bold text-2xl text-powder-blue">{t('sustainabilityPage.carbon.cards.renewable.value')}</div>
                  <div className="font-sans text-sm text-powder-blue">{t('sustainabilityPage.carbon.cards.renewable.label')}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-mint-green/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-card rounded-2xl p-8 backdrop-blur-sm border border-light-gray/20">
                <h3 className="font-serif font-semibold text-2xl text-soft-charcoal mb-6">
                  {t('sustainabilityPage.carbon.journeyTitle')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-mint-green rounded-full mr-4"></div>
                    <span className="font-sans text-medium-gray">{t('sustainabilityPage.carbon.journey.0')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-mint-green rounded-full mr-4"></div>
                    <span className="font-sans text-medium-gray">{t('sustainabilityPage.carbon.journey.1')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-mint-green rounded-full mr-4"></div>
                    <span className="font-sans text-medium-gray">{t('sustainabilityPage.carbon.journey.2')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-mint-green/60 rounded-full mr-4"></div>
                    <span className="font-sans text-medium-gray">{t('sustainabilityPage.carbon.journey.3')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-mint-green/40 rounded-full mr-4"></div>
                    <span className="font-sans text-medium-gray">{t('sustainabilityPage.carbon.journey.4')}</span>
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
            <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">{t('sustainabilityPage.goals.title')}</h2>
            <p className="font-sans text-lg text-soft-charcoal/80 max-w-3xl mx-auto leading-relaxed">{t('sustainabilityPage.goals.description')}</p>
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
                <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-3">{t('sustainabilityPage.partnerships.cards.0.title')}</h3>
                <p className="font-sans text-medium-gray">{t('sustainabilityPage.partnerships.cards.0.description')}</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-mint-green mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-3">{t('sustainabilityPage.partnerships.cards.1.title')}</h3>
                <p className="font-sans text-medium-gray">{t('sustainabilityPage.partnerships.cards.1.description')}</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-soft-gold mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-soft-charcoal mb-3">{t('sustainabilityPage.partnerships.cards.2.title')}</h3>
                <p className="font-sans text-medium-gray">{t('sustainabilityPage.partnerships.cards.2.description')}</p>
              </div>
            </div>
            <div className="text-center">
              <a href="/contact" className="btn-primary">{t('sustainabilityPage.partnerships.cta')}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;