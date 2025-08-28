import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Users, Globe, Factory, History, Target, Eye, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const timelineEvents = [
    {
      year: '1995',
      title: t('aboutPage.timeline.events.1995.title'),
      description: t('aboutPage.timeline.events.1995.description')
    },
    {
      year: '2000',
      title: t('aboutPage.timeline.events.2000.title'),
      description: t('aboutPage.timeline.events.2000.description')
    },
    {
      year: '2005',
      title: t('aboutPage.timeline.events.2005.title'),
      description: t('aboutPage.timeline.events.2005.description')
    },
    {
      year: '2010',
      title: t('aboutPage.timeline.events.2010.title'),
      description: t('aboutPage.timeline.events.2010.description')
    },
    {
      year: '2015',
      title: t('aboutPage.timeline.events.2015.title'),
      description: t('aboutPage.timeline.events.2015.description')
    },
    {
      year: '2020',
      title: t('aboutPage.timeline.events.2020.title'),
      description: t('aboutPage.timeline.events.2020.description')
    },
    {
      year: '2025',
      title: t('aboutPage.timeline.events.2025.title'),
      description: t('aboutPage.timeline.events.2025.description')
    }
  ];

  const awards = [
    {
      year: '2024',
      title: t('aboutPage.awards.list.2024.title'),
      organization: t('aboutPage.awards.list.2024.organization')
    },
    {
      year: '2023',
      title: t('aboutPage.awards.list.2023.title'),
      organization: t('aboutPage.awards.list.2023.organization')
    },
    {
      year: '2022',
      title: t('aboutPage.awards.list.2022.title'),
      organization: t('aboutPage.awards.list.2022.organization')
    },
    {
      year: '2021',
      title: t('aboutPage.awards.list.2021.title'),
      organization: t('aboutPage.awards.list.2021.organization')
    }
  ];

  const capabilities = [
    {
      icon: <Factory className="w-8 h-8 text-soft-gold" />,
      title: t('aboutPage.capabilities.advanced.title'),
      description: t('aboutPage.capabilities.advanced.description')
    },
    {
      icon: <Globe className="w-8 h-8 text-soft-gold" />,
      title: t('aboutPage.capabilities.global.title'),
      description: t('aboutPage.capabilities.global.description')
    },
    {
      icon: <Users className="w-8 h-8 text-soft-gold" />,
      title: t('aboutPage.capabilities.expert.title'),
      description: t('aboutPage.capabilities.expert.description')
    },
    {
      icon: <Award className="w-8 h-8 text-soft-gold" />,
      title: t('aboutPage.capabilities.qualityAssurance.title'),
      description: t('aboutPage.capabilities.qualityAssurance.description')
    }
  ];

  const teamMembers = [
    {
      name: t('aboutPage.team.members.ceo.name'),
      position: t('aboutPage.team.members.ceo.position'),
      experience: t('aboutPage.team.members.ceo.experience'),
      specialty: t('aboutPage.team.members.ceo.specialty')
    },
    {
      name: t('aboutPage.team.members.creative.name'),
      position: t('aboutPage.team.members.creative.position'),
      experience: t('aboutPage.team.members.creative.experience'),
      specialty: t('aboutPage.team.members.creative.specialty')
    },
    {
      name: t('aboutPage.team.members.operations.name'),
      position: t('aboutPage.team.members.operations.position'),
      experience: t('aboutPage.team.members.operations.experience'),
      specialty: t('aboutPage.team.members.operations.specialty')
    },
    {
      name: t('aboutPage.team.members.sustainability.name'),
      position: t('aboutPage.team.members.sustainability.position'),
      experience: t('aboutPage.team.members.sustainability.experience'),
      specialty: t('aboutPage.team.members.sustainability.specialty')
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
              {t('aboutPage.hero.title')}
            </h1>
            <p className="font-sans text-xl text-medium-gray leading-relaxed">
              {t('aboutPage.hero.description')}
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
                {t('aboutPage.story.title')}
              </h2>
              <div className="space-y-6 font-sans text-lg text-medium-gray leading-relaxed">
                <p>
                  {t('aboutPage.story.paragraph1')}
                </p>
                <p>
                  {t('aboutPage.story.paragraph2')}
                </p>
                <p>
                  {t('aboutPage.story.paragraph3')}
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
              {t('aboutPage.timeline.title')}
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              {t('aboutPage.timeline.description')}
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
              {t('aboutPage.manufacturing.title')}
            </h2>
            <p className="font-sans text-lg text-pure-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('aboutPage.manufacturing.description')}
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
              <h3 className="font-serif font-semibold text-3xl text-soft-gold mb-6">{t('aboutPage.manufacturing.production.title')}</h3>
              <div className="space-y-4 font-sans text-pure-white/90 leading-relaxed">
                <p>
                  {t('aboutPage.manufacturing.production.paragraph1')}
                </p>
                <p>
                  {t('aboutPage.manufacturing.production.paragraph2')}
                </p>
                <p>
                  {t('aboutPage.manufacturing.production.paragraph3')}
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
              <h3 className="font-serif font-semibold text-3xl text-soft-gold mb-6">{t('aboutPage.manufacturing.quality.title')}</h3>
              <div className="space-y-4 font-sans text-pure-white/90 leading-relaxed">
                <p>
                  {t('aboutPage.manufacturing.quality.paragraph1')}
                </p>
                <p>
                  {t('aboutPage.manufacturing.quality.paragraph2')}
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
              {t('aboutPage.capabilities.title')}
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              {t('aboutPage.capabilities.description')}
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
              {t('aboutPage.team.title')}
            </h2>
            <p className="font-sans text-lg text-medium-gray max-w-3xl mx-auto leading-relaxed">
              {t('aboutPage.team.description')}
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
                {t('aboutPage.vision.title')}
              </h2>
              <p className="font-sans text-lg text-soft-charcoal/80 leading-relaxed">
                {t('aboutPage.vision.description')}
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <Target className="w-12 h-12 text-soft-charcoal" />
              </div>
              <h2 className="font-serif font-bold text-4xl text-soft-charcoal mb-6">
                {t('aboutPage.mission.title')}
              </h2>
              <p className="font-sans text-lg text-soft-charcoal/80 leading-relaxed">
                {t('aboutPage.mission.description')}
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
              {t('aboutPage.awards.title')}
            </h2>
            <p className="font-sans text-lg text-pure-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('aboutPage.awards.description')}
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