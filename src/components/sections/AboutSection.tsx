import React, { useEffect, useRef } from 'react';
import { Award, Globe, Users, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const milestones = [
    { year: '1995', event: 'Founded as family textile business' },
    { year: '2005', event: 'Expanded to international markets' },
    { year: '2015', event: 'Introduced sustainable production methods' },
    { year: '2020', event: 'Achieved global B2B partnership network' },
    { year: '2025', event: 'Leading premium jacquard fabric manufacturer' }
  ];

  const stats = [
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: Users, value: '1000+', label: 'B2B Partners' },
    { icon: Award, value: '30+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Customer Support' }
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
      id="about" 
      className="section-spacing bg-ivory"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-navy mb-6">
            About BZJ Jakar
          </h2>
          <p className="font-sans text-lg text-text max-w-3xl mx-auto leading-relaxed">
            Three decades of textile excellence, combining traditional craftsmanship 
            with innovative manufacturing techniques.
          </p>
        </div>

        {/* Main Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Factory Image */}
          <div className="fade-in-up">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/images/factory_production.png"
                alt="Modern textile factory showing jacquard weaving machinery and production processes"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
            </div>
          </div>

          {/* Company Story */}
          <div className="fade-in-up">
            <h3 className="font-serif font-semibold text-3xl text-navy mb-6">
              Heritage & Innovation
            </h3>
            <div className="space-y-4 text-text leading-relaxed">
              <p>
                Founded in 1995 as a family-owned textile business, BZJ Jakar has grown 
                into a globally recognized leader in premium jacquard fabric manufacturing. 
                Our commitment to excellence drives every thread we weave.
              </p>
              <p>
                We combine time-honored weaving traditions with cutting-edge technology, 
                ensuring each fabric meets the highest standards of quality, durability, 
                and aesthetic appeal that discerning designers demand.
              </p>
              <p>
                Our state-of-the-art facilities and skilled artisans work in harmony to 
                create textiles that embody sophistication and luxury, serving B2B partners 
                across 50+ countries worldwide.
              </p>
            </div>
            
            {/* CTA */}
            <div className="mt-8">
              <a href="#wholesale" className="btn-primary">
                Partner With Us
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center fade-in-up"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                  <IconComponent size={32} className="text-navy" />
                </div>
                <div className="font-serif font-bold text-3xl text-navy mb-2">
                  {stat.value}
                </div>
                <div className="font-sans text-sm text-text uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="fade-in-up">
          <h3 className="font-serif font-semibold text-3xl text-navy text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gold hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`flex flex-col lg:flex-row items-center lg:items-start ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6 border border-light-grey">
                      <div className="font-serif font-bold text-2xl text-gold mb-2">
                        {milestone.year}
                      </div>
                      <div className="font-sans text-text">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-4 h-4 bg-gold rounded-full border-4 border-ivory z-10 flex-shrink-0 mt-6"></div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;