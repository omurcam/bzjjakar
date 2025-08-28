import React, { useEffect, useRef } from 'react';
import { Recycle, Droplets, Leaf, Award } from 'lucide-react';

const SustainabilitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const initiatives = [
    {
      icon: Recycle,
      title: 'Recycled Fibers',
      description: 'Using up to 30% recycled materials in our premium fabric production without compromising quality.'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Advanced water recycling systems reduce consumption by 40% compared to traditional textile manufacturing.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Dyeing',
      description: 'Low-impact dyes and chemical-free processes ensure minimal environmental footprint.'
    },
    {
      icon: Award,
      title: 'Certified Sustainable',
      description: 'OEKO-TEX and GOTS certifications guarantee our commitment to sustainable textile production.'
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
      id="sustainability" 
      className="section-spacing relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/eco_friendly_textile.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-eco/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-ivory mb-6">
            Sustainable Manufacturing
          </h2>
          <p className="font-sans text-lg text-ivory/90 max-w-3xl mx-auto leading-relaxed">
            Our commitment to environmental responsibility drives innovation in every aspect 
            of our textile production process.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {initiatives.map((initiative, index) => {
            const IconComponent = initiative.icon;
            return (
              <div 
                key={initiative.title}
                className="text-center fade-in-up bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-ivory rounded-full mb-6">
                  <IconComponent size={40} className="text-eco" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-ivory mb-4">
                  {initiative.title}
                </h3>
                <p className="font-sans text-ivory/90 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Environmental Impact Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 fade-in-up">
          <h3 className="font-serif font-semibold text-3xl text-ivory text-center mb-12">
            Our Environmental Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-serif font-bold text-4xl text-gold mb-2">40%</div>
              <div className="font-sans text-ivory/90 uppercase tracking-wide text-sm">
                Water Consumption Reduction
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif font-bold text-4xl text-gold mb-2">30%</div>
              <div className="font-sans text-ivory/90 uppercase tracking-wide text-sm">
                Recycled Materials Usage
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif font-bold text-4xl text-gold mb-2">100%</div>
              <div className="font-sans text-ivory/90 uppercase tracking-wide text-sm">
                Renewable Energy Powered
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <p className="font-sans text-lg text-ivory/90 mb-8">
            Partner with us for sustainable luxury textiles that don't compromise on quality.
          </p>
          <a href="#wholesale" className="btn-secondary on-dark">
            Learn More About Our Process
          </a>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;