import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        collections: 'Collections',
        about: 'About Us',
        sustainability: 'Sustainability',
        wholesale: 'Wholesale',
        contact: 'Contact'
      },
      // Hero Section
      hero: {
        title: 'BZJ Jakar',
        subtitle: 'Elegance in Every Thread',
        description: 'Premium jacquard fabrics crafted for discerning B2B wholesale buyers and designers worldwide. Discover luxury textiles that define sophistication.',
        exploreCollections: 'Explore Collections',
        requestQuote: 'Request a Quote'
      },
      // Company Highlights
      highlights: {
        title: 'Why Choose BZJ Jakar',
        subtitle: 'Three decades of textile excellence, serving designers and manufacturers across the globe.',
        clients: '5000+ Clients',
        clientsDesc: 'Trusted by designers worldwide',
        countries: '50+ Countries',
        countriesDesc: 'Global shipping and distribution',
        years: '30+ Years',
        yearsDesc: 'Heritage in textile manufacturing',
        quality: 'Premium Quality',
        qualityDesc: 'Award-winning fabric collections'
      },
      // About Preview
      about: {
        title: 'Our Heritage',
        description1: 'Founded in 1995, BZJ Jakar began as a vision to bridge the gap between traditional textile craftsmanship and modern fashion needs. What started as a small workshop has evolved into a global leader in premium jacquard fabric manufacturing.',
        description2: 'Today, we serve over 5,000 clients across 50+ countries, from emerging designers to established luxury fashion houses. Our commitment to excellence drives every aspect of our business.',
        learnStory: 'Learn Our Story',
        timeline: {
          title: '30 Years of Excellence',
          founded: 'Company Founded',
          export: 'First Export Markets',
          expansion: 'Global Expansion',
          leadership: 'Industry Leadership'
        }
      },
      // Sustainability Preview
      sustainability: {
        title: 'Sustainability Commitment',
        description: 'Leading the textile industry toward a more sustainable future through innovative practices, responsible sourcing, and environmental stewardship.',
        sustainable: '85%',
        sustainableDesc: 'Sustainable materials sourced',
        water: '60%',
        waterDesc: 'Water usage reduction',
        waste: '95%',
        wasteDesc: 'Waste recycled or repurposed',
        discoverImpact: 'Discover Our Impact'
      },
      // Wholesale Preview
      wholesale: {
        title: 'Wholesale Solutions',
        description: 'Partner with BZJ Jakar for premium jacquard fabrics at wholesale prices. Designed for fashion houses, interior designers, and textile manufacturers worldwide.',
        minOrder: '50m+',
        minOrderDesc: 'Minimum Order',
        countriesServed: '50+',
        countriesServedDesc: 'Countries Served',
        clients: '5000+',
        clientsDesc: 'B2B Clients',
        getWholesalePricing: 'Get Wholesale Pricing'
      },
      // Contact Preview
      contact: {
        title: 'Global Support',
        description: 'Connect with our international team across four regional offices. Expert support available 24/7 to assist with your textile needs and business requirements.',
        globalPresence: 'Global Presence',
        globalPresenceDesc: '4 Regional Offices',
        expertTeam: 'Expert Team',
        expertTeamDesc: 'Dedicated Specialists',
        response: '24h Response',
        responseDesc: 'Quick Reply Promise',
        premiumService: 'Premium Service',
        premiumServiceDesc: 'White-glove Support',
        contactTeam: 'Contact Our Team'
      },
      // Collections
      collections: {
        title: 'Featured Collections',
        description: 'Discover our most popular fabric collections, carefully curated for modern designers and manufacturers.',
        viewAll: 'View All Collections',
        floral: {
          name: 'Floral Collection',
          description: 'Elegant botanical patterns for sophisticated designs'
        },
        geometric: {
          name: 'Geometric Collection',
          description: 'Modern geometric patterns for contemporary fashion'
        },
        luxury: {
          name: 'Luxury Collection',
          description: 'Premium materials for exclusive high-end creations'
        },
        silk: {
          name: 'Silk Collection',
          description: 'Finest silk jacquards with lustrous finish'
        }
      },
      // Testimonials
      testimonials: {
        title: 'What Our Clients Say',
        description: 'Trusted by fashion designers, interior decorators, and textile manufacturers worldwide.'
      },
      // Footer
      footer: {
        subtitle: 'Elegance in Every Thread',
        description: 'Premium jacquard fabrics for B2B wholesale buyers and designers worldwide. Crafting luxury textiles with unmatched quality and sophistication.',
        stayUpdated: 'Stay Updated',
        emailPlaceholder: 'Enter your email',
        subscribe: 'Subscribe',
        quickLinks: 'Quick Links',
        contactInfo: 'Contact Info',
        followUs: 'Follow Us',
        privacyPolicy: 'Privacy Policy',
        terms: 'Terms of Service',
        copyright: '© 2025 BZJ Jakar. All rights reserved.'
      },
      // Common
      common: {
        readyToElevate: 'Ready to Elevate Your Designs?',
        readyDescription: 'Join thousands of designers worldwide who trust BZJ Jakar for premium jacquard fabrics. Request a quote today and discover the difference quality makes.',
        language: 'Language'
      },
      // About Page
      aboutPage: {
        hero: {
          title: 'Our Heritage',
          description: 'Three decades of textile excellence, combining traditional craftsmanship with innovative technology to create the world\'s finest jacquard fabrics.'
        },
        story: {
          title: 'The BZJ Jakar Story',
          paragraph1: 'Founded in 1995, BZJ Jakar began as a vision to bridge the gap between traditional textile craftsmanship and modern fashion needs. Our founder recognized the declining art of jacquard weaving and set out to preserve and elevate this magnificent craft.',
          paragraph2: 'What started as a small workshop has evolved into a global leader in premium jacquard fabric manufacturing. Today, we serve over 5,000 clients across 50+ countries, from emerging designers to established luxury fashion houses.',
          paragraph3: 'Our commitment to excellence drives every aspect of our business, from the selection of finest raw materials to the final quality inspection. We believe that every thread tells a story, and we\'re honored to be part of that narrative.'
        },
        timeline: {
          title: 'Our Journey',
          description: 'Key milestones in our evolution from a small textile workshop to a global industry leader.',
          events: {
            1995: {
              title: 'Company Founded',
              description: 'BZJ Jakar established with a vision to create premium jacquard fabrics for the global market.'
            },
            2000: {
              title: 'First Export Markets',
              description: 'Expanded to European markets, establishing partnerships with leading fashion houses.'
            },
            2005: {
              title: 'Technology Innovation',
              description: 'Invested in state-of-the-art jacquard looms and digital design capabilities.'
            },
            2010: {
              title: 'Global Expansion',
              description: 'Opened offices in New York, London, and Milan to serve international clients.'
            },
            2015: {
              title: 'Sustainability Initiative',
              description: 'Launched comprehensive environmental program and obtained eco-certifications.'
            },
            2020: {
              title: 'Digital Transformation',
              description: 'Implemented AI-driven design tools and virtual sampling technologies.'
            },
            2025: {
              title: 'Industry Leadership',
              description: 'Recognized as global leader in premium jacquard fabric manufacturing.'
            }
          }
        },
        manufacturing: {
          title: 'Manufacturing Excellence',
          description: 'Our state-of-the-art facilities combine traditional craftsmanship with cutting-edge technology.',
          production: {
            title: 'Production Capabilities',
            paragraph1: 'Our 50,000 square foot facility houses 120 precision jacquard looms, each capable of producing intricate patterns with up to 10,000 warp threads. This allows us to create designs of unprecedented complexity and beauty.',
            paragraph2: 'Advanced quality control systems monitor every stage of production, from yarn preparation to final inspection. Our commitment to zero-defect manufacturing ensures that every yard meets our exacting standards.',
            paragraph3: 'With a production capacity of 2 million yards annually, we can fulfill large orders while maintaining the flexibility to handle specialized small-batch requests.'
          },
          quality: {
            title: 'Quality Assurance',
            paragraph1: 'Every fabric undergoes rigorous testing including tensile strength, colorfastness, dimensional stability, and pattern accuracy. Our laboratory is equipped with the latest testing equipment to ensure compliance with international standards.',
            paragraph2: 'Our quality assurance team includes textile engineers and experienced craftsmen who inspect each production run. This dual approach combines technical precision with the trained eye of seasoned professionals.'
          }
        },
        capabilities: {
          title: 'Global Capabilities',
          description: 'From design conception to delivery, we provide comprehensive textile solutions worldwide.',
          advanced: {
            title: 'Advanced Manufacturing',
            description: 'State-of-the-art facilities with precision jacquard looms and quality control systems.'
          },
          global: {
            title: 'Global Distribution',
            description: 'Worldwide shipping network serving over 50 countries with reliable delivery.'
          },
          expert: {
            title: 'Expert Team',
            description: 'Skilled artisans, designers, and technical specialists with decades of experience.'
          },
          qualityAssurance: {
            title: 'Quality Assurance',
            description: 'Rigorous testing and quality control ensuring consistent excellence in every yard.'
          }
        },
        team: {
          title: 'Leadership Team',
          description: 'Meet the experts who guide our vision and drive our commitment to excellence.',
          members: {
            ceo: {
              name: 'James Chen',
              position: 'Chief Executive Officer',
              experience: '25+ years in textile manufacturing',
              specialty: 'Strategic leadership and global expansion'
            },
            creative: {
              name: 'Maria Rodriguez',
              position: 'Creative Director',
              experience: '20+ years in fabric design',
              specialty: 'Pattern development and trend forecasting'
            },
            operations: {
              name: 'David Kim',
              position: 'Head of Operations',
              experience: '18+ years in production management',
              specialty: 'Manufacturing efficiency and quality control'
            },
            sustainability: {
              name: 'Sarah Johnson',
              position: 'Sustainability Director',
              experience: '15+ years in eco-textile innovation',
              specialty: 'Environmental compliance and green manufacturing'
            }
          }
        },
        vision: {
          title: 'Our Vision',
          description: 'To be the world\'s most respected creator of premium jacquard fabrics, setting the standard for quality, innovation, and sustainability in the global textile industry.'
        },
        mission: {
          title: 'Our Mission',
          description: 'To empower designers and manufacturers worldwide with exceptional jacquard fabrics that inspire creativity, enhance products, and contribute to a more sustainable textile future.'
        },
        awards: {
          title: 'Awards & Recognition',
          description: 'Our commitment to excellence has been recognized by industry leaders worldwide.',
          list: {
            2024: {
              title: 'Excellence in Textile Innovation',
              organization: 'International Textile Association'
            },
            2023: {
              title: 'Sustainable Manufacturing Award',
              organization: 'Global Fashion Council'
            },
            2022: {
              title: 'Best B2B Textile Supplier',
              organization: 'Fashion Industry Awards'
            },
            2021: {
              title: 'Quality Excellence Certification',
              organization: 'European Textile Standards'
            }
          }
        }
      },
      // Collections Page
      collectionsPage: {
        hero: {
          title: 'Our Collections',
          description: 'Explore our comprehensive catalog of premium jacquard fabrics. Each collection represents the perfect fusion of traditional craftsmanship and contemporary design, created for discerning designers and manufacturers worldwide.'
        },
        search: {
          placeholder: 'Search collections...',
          noResults: 'No collections found',
          noResultsDesc: 'Try adjusting your search criteria or browse all collections.'
        },
        categories: {
          all: 'All Collections',
          floral: 'Floral',
          geometric: 'Geometric',
          modern: 'Modern',
          luxury: 'Luxury',
          silk: 'Silk',
          cotton: 'Cotton'
        },
        collections: {
          floral: {
            name: 'Floral Collection',
            description: 'Exquisite botanical patterns inspired by nature\'s finest designs. Each piece features intricate floral motifs that bring elegance and sophistication to any creation.',
            features: ['Hand-drawn botanical patterns', 'Multiple colorways available', 'Fade-resistant dyes', 'Premium weave construction'],
            applications: ['Evening gowns', 'Luxury blazers', 'Premium curtains', 'Upholstery', 'Bridal wear'],
            composition: '60% Silk, 40% Cotton',
            weight: '280 GSM',
            width: '150cm',
            care: 'Dry clean recommended'
          },
          geometric: {
            name: 'Geometric Collection',
            description: 'Contemporary geometric patterns for modern fashion and interior design. Clean lines and sophisticated shapes create timeless appeal.',
            features: ['Modern geometric designs', 'Precision weaving', 'Customizable patterns', 'Colorfast technology'],
            applications: ['Business suits', 'Modern jackets', 'Contemporary furniture', 'Wall panels', 'Fashion accessories'],
            composition: '70% Wool, 30% Polyester',
            weight: '320 GSM',
            width: '145cm',
            care: 'Professional cleaning'
          },
          modern: {
            name: 'Modern Collection',
            description: 'Fashion-forward designs that capture contemporary trends while maintaining timeless sophistication. Perfect for urban lifestyle brands.',
            features: ['Trend-forward patterns', 'Urban-inspired designs', 'Versatile styling options', 'Durable construction'],
            applications: ['Streetwear', 'Urban fashion', 'Modern interiors', 'Tech wear', 'Contemporary accessories'],
            composition: '55% Cotton, 45% Polyester',
            weight: '260 GSM',
            width: '155cm',
            care: 'Machine washable'
          },
          luxury: {
            name: 'Luxury Collection',
            description: 'The pinnacle of textile excellence. Premium materials and exclusive designs for the most discerning clients seeking ultimate luxury.',
            features: ['Exclusive designs', 'Premium materials', 'Limited editions', 'Bespoke customization'],
            applications: ['Haute couture', 'Luxury interiors', 'Premium upholstery', 'Executive fashion', 'High-end accessories'],
            composition: '80% Silk, 20% Gold thread',
            weight: '350 GSM',
            width: '140cm',
            care: 'Specialist dry clean only'
          },
          silk: {
            name: 'Silk Collection',
            description: 'Pure silk jacquards with lustrous finish and exceptional drape. The finest silk fibers woven into stunning patterns that catch and reflect light beautifully.',
            features: ['100% pure silk', 'Natural luster', 'Exceptional drape', 'Breathable comfort'],
            applications: ['Luxury scarves', 'Evening wear', 'Premium lingerie', 'Fine home textiles', 'Ceremonial garments'],
            composition: '100% Mulberry Silk',
            weight: '240 GSM',
            width: '135cm',
            care: 'Hand wash or dry clean'
          },
          cotton: {
            name: 'Cotton Collection',
            description: 'Sustainable organic cotton jacquards perfect for eco-conscious brands. Combining environmental responsibility with exceptional quality and comfort.',
            features: ['Certified organic cotton', 'Eco-friendly dyes', 'Sustainable production', 'Soft hand feel'],
            applications: ['Casual wear', 'Children\'s clothing', 'Home textiles', 'Sustainable fashion', 'Eco-luxury items'],
            composition: '100% Organic Cotton',
            weight: '220 GSM',
            width: '160cm',
            care: 'Machine washable'
          }
        },
        catalog: {
          title: 'Complete Catalog',
          description: 'Download our comprehensive catalog featuring detailed specifications, pricing, and technical information for all collections.',
          downloadPdf: 'Download PDF Catalog',
          requestSamples: 'Request Physical Samples'
        },
        modal: {
          viewDetails: 'View Details',
          keyFeatures: 'Key Features',
          applications: 'Applications',
          specifications: 'Technical Specifications',
          composition: 'Composition',
          weight: 'Weight',
          width: 'Width',
          care: 'Care',
          inquire: 'Inquire About This Collection',
          requestSamples: 'Request Samples'
        }
      },
      // Sustainability Page
      sustainabilityPage: {
        hero: {
          title: 'Sustainable Manufacturing',
          description: 'Leading the textile industry toward a more sustainable future through innovative practices, responsible sourcing, and environmental stewardship.'
        },
        impact: {
          title: 'Our Environmental Impact',
          description: 'Measurable results from our comprehensive sustainability initiatives demonstrate our commitment to environmental responsibility.',
          metrics: {
            waterSaved: {
              number: '2.5M',
              unit: 'gallons',
              description: 'Water saved annually through conservation programs'
            },
            carbonReduced: {
              number: '450',
              unit: 'tons',
              description: 'CO2 emissions reduced in 2024'
            },
            wasteReduction: {
              number: '95%',
              unit: '',
              description: 'Production waste diverted from landfills'
            },
            sustainableMaterials: {
              number: '85%',
              unit: '',
              description: 'Materials sourced from sustainable suppliers'
            }
          }
        },
        initiatives: {
          title: 'Sustainability Initiatives',
          description: 'Comprehensive programs addressing every aspect of our environmental footprint.',
          ecoMaterials: {
            title: 'Eco-Friendly Materials',
            description: 'Sourcing organic, recycled, and sustainably produced fibers',
            metrics: '85% of materials certified organic or recycled'
          },
          waterConservation: {
            title: 'Water Conservation',
            description: 'Advanced water recycling and conservation systems',
            metrics: '60% reduction in water usage since 2020'
          },
          wasteReduction: {
            title: 'Waste Reduction',
            description: 'Zero-waste manufacturing and textile recycling programs',
            metrics: '95% of production waste recycled or repurposed'
          }
        },
        certifications: {
          title: 'Environmental Certifications',
          description: 'Recognized by leading environmental and sustainability organizations worldwide.',
          oekotex: {
            name: 'OEKO-TEX Standard 100',
            description: 'Ensures fabrics are free from harmful chemicals',
            year: 'Certified since 2018'
          },
          gots: {
            name: 'Global Organic Textile Standard (GOTS)',
            description: 'Certifies organic fiber content and environmental criteria',
            year: 'Certified since 2019'
          },
          c2c: {
            name: 'Cradle to Cradle Certified',
            description: 'Products designed for circular economy',
            year: 'Gold Level since 2021'
          },
          iso14001: {
            name: 'ISO 14001',
            description: 'Environmental management system certification',
            year: 'Certified since 2017'
          },
          bci: {
            name: 'Better Cotton Initiative',
            description: 'Sustainable cotton sourcing partnership',
            year: 'Member since 2020'
          },
          carbonTrust: {
            name: 'Carbon Trust Certification',
            description: 'Carbon footprint measurement and reduction',
            year: 'Certified since 2022'
          }
        },
        goals: {
          title: '2030 Sustainability Goals',
          description: 'Ambitious targets driving our continued environmental progress.',
          carbonNeutral: {
            title: 'Carbon Neutral by 2030',
            description: 'Achieving net-zero carbon emissions across all operations through renewable energy and carbon offset programs.'
          },
          waterReduction: {
            title: '75% Water Reduction',
            description: 'Further reducing water consumption through advanced recycling technologies and process optimization.'
          },
          circularProduction: {
            title: '100% Circular Production',
            description: 'Implementing closed-loop manufacturing where all waste becomes input for new products.'
          },
          supplyChain: {
            title: 'Supply Chain Transparency',
            description: 'Complete traceability of all materials from source to final product with ethical supplier partnerships.'
          }
        }
      },
      // Wholesale Page
      wholesalePage: {
        hero: {
          title: 'Wholesale Solutions',
          description: 'Partner with BZJ Jakar for premium jacquard fabrics at wholesale prices. Designed for fashion houses, interior designers, and textile manufacturers worldwide.',
          stats: {
            minOrder: {
              number: '50m+',
              label: 'Minimum Order'
            },
            countries: {
              number: '50+',
              label: 'Countries Served'
            },
            clients: {
              number: '5000+',
              label: 'B2B Clients'
            }
          }
        },
        pricing: {
          title: 'Wholesale Pricing Tiers',
          description: 'Flexible pricing structures designed to meet diverse business needs and order volumes.',
          tiers: {
            premium: {
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
            standard: {
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
            bulk: {
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
            enterprise: {
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
          }
        }
      },
      // Contact Page
      contactPage: {
        hero: {
          title: 'Get in Touch',
          description: 'Connect with our international team across four regional offices. Expert support available 24/7 to assist with your textile needs and business requirements.'
        }
      }
    }
  },
  tr: {
    translation: {
      // Navigation
      nav: {
        home: 'Ana Sayfa',
        collections: 'Koleksiyonlar',
        about: 'Hakkımızda',
        sustainability: 'Sürdürülebilirlik',
        wholesale: 'Toptan Satış',
        contact: 'İletişim'
      },
      // Hero Section
      hero: {
        title: 'BZJ Jakar',
        subtitle: 'Her İplikte Zarafet',
        description: 'Dünya çapındaki seçkin B2B toptan alıcılar ve tasarımcılar için özenle hazırlanmış premium jakar kumaşlar. Sofistikasyonu tanımlayan lüks tekstilleri keşfedin.',
        exploreCollections: 'Koleksiyonları Keşfet',
        requestQuote: 'Teklif İste'
      },
      // Company Highlights
      highlights: {
        title: 'Neden BZJ Jakar?',
        subtitle: 'Dünya çapında tasarımcı ve üreticilere hizmet veren otuz yıllık tekstil mükemmeliyeti.',
        clients: '5000+ Müşteri',
        clientsDesc: 'Dünya çapında tasarımcıların güveni',
        countries: '50+ Ülke',
        countriesDesc: 'Küresel sevkiyat ve dağıtım',
        years: '30+ Yıl',
        yearsDesc: 'Tekstil üretiminde miras',
        quality: 'Premium Kalite',
        qualityDesc: 'Ödüllü kumaş koleksiyonları'
      },
      // About Preview
      about: {
        title: 'Mirasımız',
        description1: '1995 yılında kurulan BZJ Jakar, geleneksel tekstil işçiliği ile modern moda ihtiyaçları arasında köprü kurma vizyonu ile başladı. Küçük bir atölye olarak başlayan yolculuk, premium jakar kumaş üretiminde küresel bir lider haline geldi.',
        description2: 'Bugün, yeni başlayan tasarımcılardan yerleşik lüks moda evlerine kadar 50+ ülkede 5.000\'den fazla müşteriye hizmet veriyoruz. Mükemmellik taahhüdümüz işimizin her yönünü yönlendiriyor.',
        learnStory: 'Hikayemizi Öğrenin',
        timeline: {
          title: '30 Yıllık Mükemmellik',
          founded: 'Şirket Kuruldu',
          export: 'İlk İhracat Pazarları',
          expansion: 'Küresel Genişleme',
          leadership: 'Sektör Liderliği'
        }
      },
      // Sustainability Preview
      sustainability: {
        title: 'Sürdürülebilirlik Taahhüdü',
        description: 'Yenilikçi uygulamalar, sorumlu kaynak sağlama ve çevresel yöneticilik yoluyla tekstil endüstrisini daha sürdürülebilir bir geleceğe yönlendiriyoruz.',
        sustainable: '%85',
        sustainableDesc: 'Sürdürülebilir malzeme tedariki',
        water: '%60',
        waterDesc: 'Su kullanımında azalma',
        waste: '%95',
        wasteDesc: 'Geri dönüştürülen veya yeniden kullanılan atık',
        discoverImpact: 'Etkimizi Keşfedin'
      },
      // Wholesale Preview
      wholesale: {
        title: 'Toptan Satış Çözümleri',
        description: 'Premium jakar kumaşlar için toptan fiyatlarla BZJ Jakar ile ortaklık kurun. Dünya çapındaki moda evleri, iç mimar ve tekstil üreticileri için tasarlandı.',
        minOrder: '50m+',
        minOrderDesc: 'Minimum Sipariş',
        countriesServed: '50+',
        countriesServedDesc: 'Hizmet Verilen Ülke',
        clients: '5000+',
        clientsDesc: 'B2B Müşteri',
        getWholesalePricing: 'Toptan Fiyat Al'
      },
      // Contact Preview
      contact: {
        title: 'Küresel Destek',
        description: 'Dört bölgesel ofisimizde bulunan uluslararası ekibimizle iletişime geçin. Tekstil ihtiyaçlarınız ve iş gereksinimlerinizde yardımcı olmak için 7/24 uzman desteği mevcuttur.',
        globalPresence: 'Küresel Varlık',
        globalPresenceDesc: '4 Bölgesel Ofis',
        expertTeam: 'Uzman Ekip',
        expertTeamDesc: 'Özel Uzmanlar',
        response: '24s Yanıt',
        responseDesc: 'Hızlı Yanıt Garantisi',
        premiumService: 'Premium Hizmet',
        premiumServiceDesc: 'Üst Düzey Destek',
        contactTeam: 'Ekibimizle İletişime Geçin'
      },
      // Collections
      collections: {
        title: 'Öne Çıkan Koleksiyonlar',
        description: 'Modern tasarımcılar ve üreticiler için özenle seçilmiş en popüler kumaş koleksiyonlarımızı keşfedin.',
        viewAll: 'Tüm Koleksiyonları Gör',
        floral: {
          name: 'Çiçek Koleksiyonu',
          description: 'Sofistike tasarımlar için zarif botanik desenler'
        },
        geometric: {
          name: 'Geometrik Koleksiyonu',
          description: 'Çağdaş moda için modern geometrik desenler'
        },
        luxury: {
          name: 'Lüks Koleksiyon',
          description: 'Özel üst düzey kreasyonlar için premium malzemeler'
        },
        silk: {
          name: 'İpek Koleksiyonu',
          description: 'Parlak bitişli en kaliteli ipek jakarlar'
        }
      },
      // Testimonials
      testimonials: {
        title: 'Müşterilerimizin Görüşleri',
        description: 'Dünya çapındaki moda tasarımcıları, iç mimarlar ve tekstil üreticilerinin güveni.'
      },
      // Footer
      footer: {
        subtitle: 'Her İplikte Zarafet',
        description: 'Dünya çapındaki B2B toptan alıcılar ve tasarımcılar için premium jakar kumaşlar. Eşsiz kalite ve sofistikasyonla lüks tekstiller üretiyoruz.',
        stayUpdated: 'Güncel Kalın',
        emailPlaceholder: 'E-posta adresinizi girin',
        subscribe: 'Abone Ol',
        quickLinks: 'Hızlı Bağlantılar',
        contactInfo: 'İletişim Bilgileri',
        followUs: 'Bizi Takip Edin',
        privacyPolicy: 'Gizlilik Politikası',
        terms: 'Hizmet Şartları',
        copyright: '© 2025 BZJ Jakar. Tüm hakları saklıdır.'
      },
      // Common
      common: {
        readyToElevate: 'Tasarımlarınızı Yükseltmeye Hazır mısınız?',
        readyDescription: 'Premium jakar kumaşlar için BZJ Jakar\'a güvenen dünya çapındaki binlerce tasarımcıya katılın. Bugün teklif isteyin ve kalitenin farkını keşfedin.',
        language: 'Dil'
      },
      // About Page
      aboutPage: {
        hero: {
          title: 'Mirasımız',
          description: 'Geleneksel işçiliği yenilikçi teknoloji ile birleştirerek dünyanın en kaliteli jakar kumaşlarını üreten otuz yıllık tekstil mükemmeliyeti.'
        },
        story: {
          title: 'BZJ Jakar Hikayesi',
          paragraph1: '1995 yılında kurulan BZJ Jakar, geleneksel tekstil işçiliği ile modern moda ihtiyaçları arasında köprü kurma vizyonu ile başladı. Kurucumuz jakar dokuma sanatının azaldığını fark etti ve bu muhteşem sanatı korumak ve yüceltmek için yola çıktı.',
          paragraph2: 'Küçük bir atölye olarak başlayan yolculuk, premium jakar kumaş üretiminde küresel bir lider haline geldi. Bugün, yeni başlayan tasarımcılardan köklü lüks moda evlerine kadar 50+ ülkede 5.000\'den fazla müşteriye hizmet veriyoruz.',
          paragraph3: 'Mükemmellik taahhüdümüz, en kaliteli hammadde seçiminden nihai kalite kontrolüne kadar işimizin her yönünü yönlendiriyor. Her ipliğin bir hikaye anlattığına inanıyoruz ve bu anlatının bir parçası olmaktan onur duyuyoruz.'
        },
        timeline: {
          title: 'Yolculuğumuz',
          description: 'Küçük bir tekstil atölyesinden küresel endüstri liderine evrilimimizdeki önemli dönüm noktaları.',
          events: {
            1995: {
              title: 'Şirket Kuruldu',
              description: 'BZJ Jakar, küresel pazar için premium jakar kumaşlar üretme vizyonu ile kuruldu.'
            },
            2000: {
              title: 'İlk İhracat Pazarları',
              description: 'Avrupa pazarlarına genişleyerek önde gelen moda evleri ile ortaklıklar kurdu.'
            },
            2005: {
              title: 'Teknoloji İnovasyonu',
              description: 'Son teknoloji jakar tezgahları ve dijital tasarım yeteneklerine yatırım yapıldı.'
            },
            2010: {
              title: 'Küresel Genişleme',
              description: 'Uluslararası müşterilere hizmet vermek için New York, Londra ve Milano\'da ofisler açıldı.'
            },
            2015: {
              title: 'Sürdürülebilirlik Girişimi',
              description: 'Kapsamlı çevre programı başlatıldı ve eko-sertifikalar alındı.'
            },
            2020: {
              title: 'Dijital Dönüşüm',
              description: 'AI destekli tasarım araçları ve sanal örnekleme teknolojileri uygulandı.'
            },
            2025: {
              title: 'Endüstri Liderliği',
              description: 'Premium jakar kumaş üretiminde küresel lider olarak tanındı.'
            }
          }
        },
        manufacturing: {
          title: 'Üretim Mükemmeliyeti',
          description: 'Son teknoloji tesislerimiz geleneksel işçiliği en gelişmiş teknoloji ile birleştiriyor.',
          production: {
            title: 'Üretim Kapasitesi',
            paragraph1: '50.000 metrekarelik tesisimizde, her biri 10.000 çözgü ipliği ile karmaşık desenler üretebilen 120 hassas jakar tezgahı bulunuyor. Bu, benzersiz karmaşıklık ve güzellikte tasarımlar yaratmamızı sağlıyor.',
            paragraph2: 'Gelişmiş kalite kontrol sistemleri, iplik hazırlığından nihai kontrole kadar üretimin her aşamasını izliyor. Sıfır hata üretim taahhüdümüz, her metrenin yüksek standartlarımızı karşılamasını sağlıyor.',
            paragraph3: 'Yılda 2 milyon metre üretim kapasitesi ile büyük siparişleri karşılayabilirken, özel küçük parti taleplerini işleme esnekliğini de koruyoruz.'
          },
          quality: {
            title: 'Kalite Güvencesi',
            paragraph1: 'Her kumaş çekme mukavemeti, renk haslığı, boyutsal kararlılık ve desen doğruluğu dahil titiz testlerden geçiyor. Laboratuvarımız uluslararası standartlara uygunluğu sağlamak için en son test ekipmanları ile donatılmış.',
            paragraph2: 'Kalite güvence ekibimiz her üretim serisini inceleyen tekstil mühendisleri ve deneyimli zanaatkarları içeriyor. Bu ikili yaklaşım teknik hassasiyeti deneyimli profesyonellerin eğitimli gözü ile birleştiriyor.'
          }
        },
        capabilities: {
          title: 'Küresel Kapasiteler',
          description: 'Tasarım konseptinden teslimat edilene kadar dünya çapında kapsamlı tekstil çözümleri sağlıyoruz.',
          advanced: {
            title: 'Gelişmiş Üretim',
            description: 'Hassas jakar tezgahları ve kalite kontrol sistemleri ile son teknoloji tesisler.'
          },
          global: {
            title: 'Küresel Dağıtım',
            description: 'Güvenilir teslimat ile 50\'den fazla ülkeye hizmet veren dünya çapında sevkiyat ağı.'
          },
          expert: {
            title: 'Uzman Ekip',
            description: 'Onlarca yıllık deneyime sahip yetenekli zanaatkarlar, tasarımcılar ve teknik uzmanlar.'
          },
          qualityAssurance: {
            title: 'Kalite Güvencesi',
            description: 'Her metrede tutarlı mükemmelliği sağlayan titiz test ve kalite kontrolü.'
          }
        },
        team: {
          title: 'Liderlik Ekibi',
          description: 'Vizyonumuzu yönlendiren ve mükemmellik taahhüdümüzü gerçekleştiren uzmanlarla tanışın.',
          members: {
            ceo: {
              name: 'James Chen',
              position: 'İcra Kurulu Başkanı',
              experience: 'Tekstil üretiminde 25+ yıl',
              specialty: 'Stratejik liderlik ve küresel genişleme'
            },
            creative: {
              name: 'Maria Rodriguez',
              position: 'Yaratıcı Direktör',
              experience: 'Kumaş tasarımında 20+ yıl',
              specialty: 'Desen geliştirme ve trend tahmini'
            },
            operations: {
              name: 'David Kim',
              position: 'Operasyon Müdürü',
              experience: 'Üretim yönetiminde 18+ yıl',
              specialty: 'Üretim verimliliği ve kalite kontrolü'
            },
            sustainability: {
              name: 'Sarah Johnson',
              position: 'Sürdürülebilirlik Direktörü',
              experience: 'Eko-tekstil inovasyonunda 15+ yıl',
              specialty: 'Çevresel uyumluluk ve yeşil üretim'
            }
          }
        },
        vision: {
          title: 'Vizyonumuz',
          description: 'Küresel tekstil endüstrisinde kalite, inovasyon ve sürdürülebilirlik standardını belirleyerek dünyanın en saygın premium jakar kumaş yaratıcısı olmak.'
        },
        mission: {
          title: 'Misyonumuz',
          description: 'Dünya çapındaki tasarımcı ve üreticileri yaratıcılığa ilham veren, ürünleri geliştiren ve daha sürdürülebilir bir tekstil geleceğine katkıda bulunan olağanüstü jakar kumaşlarla güçlendirmek.'
        },
        awards: {
          title: 'Ödüller ve Tanınma',
          description: 'Mükemmellik taahhüdümüz dünya çapında endüstri liderleri tarafından tanınmıştır.',
          list: {
            2024: {
              title: 'Tekstil İnovasyonunda Mükemmellik',
              organization: 'Uluslararası Tekstil Derneği'
            },
            2023: {
              title: 'Sürdürülebilir Üretim Ödülü',
              organization: 'Küresel Moda Konseyi'
            },
            2022: {
              title: 'En İyi B2B Tekstil Tedarikçisi',
              organization: 'Moda Endüstrisi Ödülleri'
            },
            2021: {
              title: 'Kalite Mükemmellik Sertifikası',
              organization: 'Avrupa Tekstil Standartları'
            }
          }
        }
      },
      // Collections Page
      collectionsPage: {
        hero: {
          title: 'Koleksiyonlarımız',
          description: 'Premium jakar kumaş kataloğumuzu keşfedin. Her koleksiyon, dünya çapındaki seçkin tasarımcı ve üreticiler için yaratılmış geleneksel işçilik ile çağdaş tasarımın mükemmel birleşimini temsil ediyor.'
        },
        search: {
          placeholder: 'Koleksiyonları ara...',
          noResults: 'Koleksiyon bulunamadı',
          noResultsDesc: 'Arama kriterlerinizi ayarlamayı deneyin veya tüm koleksiyonlara göz atın.'
        },
        categories: {
          all: 'Tüm Koleksiyonlar',
          floral: 'Çiçek',
          geometric: 'Geometrik',
          modern: 'Modern',
          luxury: 'Lüks',
          silk: 'İpek',
          cotton: 'Pamuk'
        },
        collections: {
          floral: {
            name: 'Çiçek Koleksiyonu',
            description: 'Doğanın en güzel tasarımlarından ilham alan müstesna botanik desenler. Her parça, herhangi bir kreasyona zarafet ve sofistikasyon katan karmaşık çiçek motifleri içeriyor.',
            features: ['Elle çizilmiş botanik desenler', 'Birden fazla renk seçeneği mevcut', 'Solmaya dayanıklı boyalar', 'Premium dokuma yapısı'],
            applications: ['Gece elbiseleri', 'Lüks ceketler', 'Premium perdeler', 'Döşemeler', 'Gelinlik'],
            composition: '%60 İpek, %40 Pamuk',
            weight: '280 GSM',
            width: '150cm',
            care: 'Kuru temizleme öneriliyor'
          },
          geometric: {
            name: 'Geometrik Koleksiyon',
            description: 'Modern moda ve iç mekan tasarımı için çağdaş geometrik desenler. Temiz çizgiler ve sofistike şekiller zamansız çekicilik yaratıyor.',
            features: ['Modern geometrik tasarımlar', 'Hassas dokuma', 'Özelleştirilebilir desenler', 'Renk haslığı teknolojisi'],
            applications: ['İş takumları', 'Modern ceketler', 'Çağdaş mobilya', 'Duvar panelleri', 'Moda aksesuarları'],
            composition: '%70 Yün, %30 Polyester',
            weight: '320 GSM',
            width: '145cm',
            care: 'Profesyonel temizlik'
          },
          modern: {
            name: 'Modern Koleksiyon',
            description: 'Zamansiz sofistikasyonu korurken çağdaş trendleri yakalayan moda odaklı tasarımlar. Şehirli yaşam tarzı markaları için mükemmel.',
            features: ['Trend odaklı desenler', 'Şehir ilhamlı tasarımlar', 'Çok yönlü stil seçenekleri', 'Dayanıklı yapı'],
            applications: ['Sokak modası', 'Şehir modası', 'Modern iç mekanlar', 'Teknoloji giyim', 'Çağdaş aksesuarlar'],
            composition: '%55 Pamuk, %45 Polyester',
            weight: '260 GSM',
            width: '155cm',
            care: 'Makine yıkaması'
          },
          luxury: {
            name: 'Lüks Koleksiyon',
            description: 'Tekstil mükemmelliyetinin zirvesi. Nihai lüksü arayan en seçkin müşteriler için premium malzemeler ve özel tasarımlar.',
            features: ['Özel tasarımlar', 'Premium malzemeler', 'Sınırlı edisyonlar', 'Özel sipariş özelleştirme'],
            applications: ['Haute couture', 'Lüks iç mekanlar', 'Premium döşemeler', 'Yönetici modası', 'Üst düzey aksesuarlar'],
            composition: '%80 İpek, %20 Altın iplik',
            weight: '350 GSM',
            width: '140cm',
            care: 'Yalnızca uzman kuru temizlik'
          },
          silk: {
            name: 'İpek Koleksiyonu',
            description: 'Parlak bitiş ve olağanüstü düşü ile saf ipek jakarlar. Işığı güzelçe yakalayan ve yansıtan çarpıcı desenlerle dokunmuş en kaliteli ipek lifler.',
            features: ['%100 saf ipek', 'Doğal parlatma', 'Olağanüstü düşü', 'Nefes alabilir konfor'],
            applications: ['Lüks eşarplar', 'Gece kıyafetleri', 'Premium iç çamaşırı', 'Kaliteli ev tekstilleri', 'Tören kıyafetleri'],
            composition: '%100 Dut İpeği',
            weight: '240 GSM',
            width: '135cm',
            care: 'Elle yıkama veya kuru temizleme'
          },
          cotton: {
            name: 'Pamuk Koleksiyonu',
            description: 'Çevre bilincine sahip markalar için mükemmel sürdürülebilir organik pamuk jakarlar. Çevresel sorumluluğu olağanüstü kalite ve konfor ile birleştiriyor.',
            features: ['Sertifikalı organik pamuk', 'Çevre dostu boyalar', 'Sürdürülebilir üretim', 'Yumuşak dokunush'],
            applications: ['Günlük giyim', 'Çocuk kıyafetleri', 'Ev tekstilleri', 'Sürdürülebilir moda', 'Eko-lüks ürünler'],
            composition: '%100 Organik Pamuk',
            weight: '220 GSM',
            width: '160cm',
            care: 'Makine yıkaması'
          }
        },
        catalog: {
          title: 'Kapsamlı Katalog',
          description: 'Tüm koleksiyonlar için detaylı özellikleri, fiyatlandırmayı ve teknik bilgileri içeren kapsamlı kataloğumuzu indirin.',
          downloadPdf: 'PDF Katalog İndir',
          requestSamples: 'Fiziksel Örnekler İste'
        },
        modal: {
          viewDetails: 'Detayları Gör',
          keyFeatures: 'Temel Özellikler',
          applications: 'Kullanım Alanları',
          specifications: 'Teknik Özellikler',
          composition: 'Kompozisyon',
          weight: 'Ağırlık',
          width: 'Genişlik',
          care: 'Bakım',
          inquire: 'Bu Koleksiyon Hakkında Bilgi Al',
          requestSamples: 'Örnek İste'
        }
      },
      // Sustainability Page
      sustainabilityPage: {
        hero: {
          title: 'Sürdürülebilir Üretim',
          description: 'Yenilikçi uygulamalar, sorumlu kaynak sağlama ve çevresel yöneticilik yoluyla tekstil endüstrisini daha sürdürülebilir bir geleceğe yönlendiriyoruz.'
        },
        impact: {
          title: 'Çevresel Etkimiz',
          description: 'Kapsamlı sürdürülebilirlik girişimlerimizden ölçülebilir sonuçlar, çevresel sorumluluk taahhüdümüzü gösteriyor.',
          metrics: {
            waterSaved: {
              number: '2.5M',
              unit: 'galon',
              description: 'Koruma programları sayesinde yılda tasarruf edilen su'
            },
            carbonReduced: {
              number: '450',
              unit: 'ton',
              description: '2024\'te azaltılan CO2 emisyonu'
            },
            wasteReduction: {
              number: '%95',
              unit: '',
              description: 'Üretim atığı çöp sahalarından uzaklaştırıldı'
            },
            sustainableMaterials: {
              number: '%85',
              unit: '',
              description: 'Sürdürülebilir tedarikçilerden sağlanan malzemeler'
            }
          }
        },
        initiatives: {
          title: 'Sürdürülebilirlik Girişimleri',
          description: 'Çevresel ayak izimizin her yönünü ele alan kapsamlı programlar.',
          ecoMaterials: {
            title: 'Çevre Dostu Malzemeler',
            description: 'Organik, geri dönüştürülmüş ve sürdürülebilir üretilen liflerin tedarik edilmesi',
            metrics: 'Malzemelerin %85\'i organik veya geri dönüştürülmüş sertifikalı'
          },
          waterConservation: {
            title: 'Su Koruma',
            description: 'Gelişmiş su geri dönüşümü ve koruma sistemleri',
            metrics: '2020\'den beri su kullanımında %60 azalma'
          },
          wasteReduction: {
            title: 'Atık Azaltma',
            description: 'Sıfır atık üretim ve tekstil geri dönüşüm programları',
            metrics: 'Üretim atığının %95\'i geri dönüştürülüyor veya yeniden kullanılıyor'
          }
        },
        certifications: {
          title: 'Çevresel Sertifikalar',
          description: 'Dünya çapında önde gelen çevre ve sürdürülebilirlik kuruluşları tarafından tanınmış.',
          oekotex: {
            name: 'OEKO-TEX Standart 100',
            description: 'Kumaşların zararlı kimyasallardan arındırılmış olduğunu garanti eder',
            year: '2018\'den beri sertifikalı'
          },
          gots: {
            name: 'Küresel Organik Tekstil Standardı (GOTS)',
            description: 'Organik lif içeriği ve çevresel kriterleri sertifikalandırır',
            year: '2019\'dan beri sertifikalı'
          },
          c2c: {
            name: 'Beşikten Beşiğe Sertifikalı',
            description: 'Dairesel ekonomi için tasarlanmış ürünler',
            year: '2021\'den beri Altın Seviye'
          },
          iso14001: {
            name: 'ISO 14001',
            description: 'Çevre yönetim sistemi sertifikası',
            year: '2017\'den beri sertifikalı'
          },
          bci: {
            name: 'Daha İyi Pamuk Girişimi',
            description: 'Sürdürülebilir pamuk tedarik ortaklığı',
            year: '2020\'den beri üye'
          },
          carbonTrust: {
            name: 'Karbon Güven Sertifikası',
            description: 'Karbon ayak izi ölçümü ve azaltma',
            year: '2022\'den beri sertifikalı'
          }
        },
        goals: {
          title: '2030 Sürdürülebilirlik Hedefleri',
          description: 'Devam eden çevresel ilerlememizi yönlendiren iddialı hedefler.',
          carbonNeutral: {
            title: '2030\'a Kadar Karbon Nötr',
            description: 'Yenilenebilir enerji ve karbon dengeleme programları yoluyla tüm operasyonlarda net sıfır karbon emisyonu elde etmek.'
          },
          waterReduction: {
            title: '%75 Su Azaltma',
            description: 'Gelişmiş geri dönüşüm teknolojileri ve süreç optimizasyonu yoluyla su tüketimini daha da azaltmak.'
          },
          circularProduction: {
            title: '%100 Dairesel Üretim',
            description: 'Tüm atıkların yeni ürünler için girdi haline geldiği kapalı döngü üretimin uygulanması.'
          },
          supplyChain: {
            title: 'Tedarik Zinciri Şeffaflığı',
            description: 'Etik tedarikçi ortaklıkları ile kaynaktan nihai ürüne kadar tüm malzemelerin tam izlenebilirliği.'
          }
        }
      },
      // Wholesale Page
      wholesalePage: {
        hero: {
          title: 'Toptan Satış Çözümleri',
          description: 'Premium jakar kumaşlar için toptan fiyatlarla BZJ Jakar ile ortaklık kurun. Dünya çapındaki moda evleri, iç mimarlar ve tekstil üreticileri için tasarlandı.',
          stats: {
            minOrder: {
              number: '50m+',
              label: 'Minimum Sipariş'
            },
            countries: {
              number: '50+',
              label: 'Hizmet Verilen Ülke'
            },
            clients: {
              number: '5000+',
              label: 'B2B Müşteri'
            }
          }
        },
        pricing: {
          title: 'Toptan Satış Fiyat Katmanları',
          description: 'Çeşitli iş ihtiyaçları ve sipariş hacimlerini karşılamak için tasarlanmış esnek fiyatlandırma yapıları.',
          tiers: {
            premium: {
              name: 'Premium Katman',
              minOrder: '50m',
              discount: '%5-10',
              priceRange: '$28-45/yard',
              benefits: [
                'Premium kumaş seçimi',
                'Standart 30 günlük ödeme şartları',
                'Bölgesel kargo dahil',
                'Temel teknik destek',
                'Çeyrek yıllık trend raporları'
              ]
            },
            standard: {
              name: 'Standart Katman',
              minOrder: '100m',
              discount: '%10-15',
              priceRange: '$25-38/yard',
              benefits: [
                'Tam koleksiyon erişimi',
                'Uzatılmış 45 günlük ödeme şartları',
                'Ücretsiz uluslararası kargo',
                'Öncelikli teknik destek',
                'Aylık trend tahminleri',
                'Özel renk eşleme'
              ],
              recommended: true
            },
            bulk: {
              name: 'Toplu Katman',
              minOrder: '200m',
              discount: '%15-25',
              priceRange: '$22-35/yard',
              benefits: [
                'Özel toplu fiyatlandırma',
                'Esnek 60 günlük ödeme şartları',
                'Hızlı kargo seçenekleri',
                'Özel hesap yöneticisi',
                'Haftalık pazar içgörüleri',
                'Özel tasarım hizmetleri',
                'Kalite garanti programı'
              ]
            },
            enterprise: {
              name: 'Kurumsal Katman',
              minOrder: '500m+',
              discount: '%25-35',
              priceRange: '$18-30/yard',
              benefits: [
                'Maksimum hacim indirimleri',
                'Özelleştirilmiş ödeme şartları',
                'Beyaz eldiven lojistik',
                'Kıdemli hesap yöneticisi',
                'Gerçek zamanlı pazar verileri',
                'Özel desen geliştirme',
                'Öncelikli üretim slotları',
                'Yıllık iş incelemeleri'
              ]
            }
          }
        }
      },
      // Contact Page
      contactPage: {
        hero: {
          title: 'İletişime Geçin',
          description: 'Dört bölgesel ofisimizde bulunan uluslararası ekibimizle iletişime geçin. Tekstil ihtiyaçlarınız ve iş gereksinimlerinizde yardımcı olmak için 7/24 uzman desteği mevcuttur.'
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;