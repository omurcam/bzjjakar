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
      // Common
      common: {
        readyToElevate: 'Ready to Elevate Your Designs?',
        readyDescription: 'Join thousands of designers worldwide who trust BZJ Jakar for premium jacquard fabrics. Request a quote today and discover the difference quality makes.',
        language: 'Language'
      },
      // Highlights Section (Home)
      highlights: {
        title: 'Why Choose Us',
        subtitle: 'For three decades, we have led luxury textiles with excellence, innovation, and unmatched quality',
        clients: '5000+ Clients',
        clientsDesc: 'Trusted by designers and manufacturers worldwide',
        countries: '50+ Countries',
        countriesDesc: 'Global distribution network across continents',
        years: '30+ Years',
        yearsDesc: 'Of expertise and textile excellence',
        quality: 'Superior Quality',
        qualityDesc: 'Luxury fabrics that meet the highest global standards'
      },
      // About Preview (Home)
      about: {
        title: 'Our Story',
        description1: 'Since 1995, BZJ Jakar has been crafting premium jacquard fabrics, blending traditional craftsmanship with modern technology.',
        description2: 'We partner with luxury brands and manufacturers around the world, delivering consistent quality and service.',
        learnStory: 'Learn Our Story',
        timeline: {
          title: 'Milestones',
          founded: 'Company founded',
          export: 'First export partnerships',
          expansion: 'Manufacturing capacity expansion',
          leadership: 'Global leadership in jacquard fabrics'
        }
      },
      // Sustainability Preview (Home)
      sustainability: {
        title: 'Sustainability',
        description: 'Leading the industry with responsible sourcing, water conservation, and circular production.',
        sustainable: 'Eco-Friendly Materials',
        sustainableDesc: 'Organic, recycled, and responsibly sourced fibers',
        water: 'Water Conservation',
        waterDesc: 'Advanced water recycling and reduced consumption',
        waste: 'Waste Reduction',
        wasteDesc: 'Zero-waste manufacturing and textile recycling programs',
        discoverImpact: 'Discover Our Impact'
      },
      // Wholesale Preview (Home)
      wholesale: {
        title: 'Wholesale Solutions',
        description: 'Partner with us for competitive pricing, reliable logistics, and premium quality.',
        minOrder: 'Minimum Order',
        minOrderDesc: '50m+ starting volume',
        countriesServed: 'Countries Served',
        countriesServedDesc: '50+ global destinations',
        clients: 'Satisfied Clients',
        clientsDesc: '5000+ worldwide',
        getWholesalePricing: 'Get Wholesale Pricing'
      },
      // Contact Preview (Home)
      contact: {
        title: 'Contact Us',
        description: 'Connect with our international team across four regional offices.',
        globalPresence: 'Global Presence',
        globalPresenceDesc: '4 Regional Offices',
        expertTeam: 'Expert Team',
        expertTeamDesc: 'Industry specialists ready to help',
        response: 'Fast Response',
        responseDesc: '24-hour reply promise',
        premiumService: 'Premium Service',
        premiumServiceDesc: 'Dedicated, professional support',
        contactTeam: 'Contact Our Team'
      },
      // Testimonials (Home)
      testimonials: {
        title: 'What Our Clients Say',
        description: 'Hear from partners who trust BZJ Jakar for premium jacquard fabrics.'
      },
      // About Page
      aboutPage: {
        hero: {
          title: 'Our Heritage',
          description: 'Three decades of textile excellence, combining traditional craftsmanship with innovative technology to create the world\'s finest jacquard fabrics.'
        },
        story: {
          title: 'Our Story',
          paragraph1: 'Founded in 1995, BZJ Jakar began with a vision to elevate jacquard weaving through a perfect balance of heritage and innovation.',
          paragraph2: 'Over the years, we have expanded our operations globally, partnering with leading designers and luxury brands.',
          paragraph3: 'Today, our commitment to quality and sustainability continues to define our approach to premium textile manufacturing.'
        },
        timeline: {
          title: 'Our Journey',
          description: 'Key milestones that shaped our company into a global leader in luxury jacquard fabrics.',
          events: {
            '1995': { title: 'Founding Year', description: 'BZJ Jakar was established with a focus on premium jacquard weaving.' },
            '2000': { title: 'First Export Partnerships', description: 'Expanded into international markets with strategic export relationships.' },
            '2005': { title: 'R&D Investments', description: 'Invested in advanced looms and research for material innovation.' },
            '2010': { title: 'Global Expansion', description: 'Scaled manufacturing capacity and opened new production lines.' },
            '2015': { title: 'Sustainability Framework', description: 'Launched comprehensive sustainability and recycling programs.' },
            '2020': { title: 'Digital Transformation', description: 'Implemented end-to-end digital systems for quality and logistics.' },
            '2025': { title: 'Industry Leadership', description: 'Recognized as a global leader in premium jacquard manufacturing.' }
          }
        },
        manufacturing: {
          title: 'Manufacturing Excellence',
          description: 'From fiber selection to final finishing, our production process is designed for precision and consistency.',
          production: {
            title: 'State-of-the-Art Production',
            paragraph1: 'Our modern facilities feature advanced jacquard looms capable of intricate patterns with exceptional efficiency.',
            paragraph2: 'We carefully control every step of the process, from yarn preparation to weaving and finishing.',
            paragraph3: 'Dedicated teams oversee material performance, ensuring lasting quality and comfort.'
          },
          quality: {
            title: 'Quality Assurance',
            paragraph1: 'Each batch undergoes rigorous inspection for weave integrity, color fastness, and hand feel.',
            paragraph2: 'Our lab facilities test for durability, environmental safety, and compliance with international standards.'
          }
        },
        capabilities: {
          title: 'Global Capabilities',
          description: 'Our integrated capabilities cover design, development, production, and logistics.',
          advanced: { title: 'Advanced Machinery', description: 'High-precision jacquard looms and finishing lines.' },
          global: { title: 'Global Reach', description: 'Worldwide distribution network and logistics partners.' },
          expert: { title: 'Expert Team', description: 'Experienced engineers, designers, and quality specialists.' },
          qualityAssurance: { title: 'Certified Quality', description: 'International certifications and continuous improvement.' }
        },
        team: {
          title: 'Leadership Team',
          description: 'Experienced leaders guiding our vision of excellence and innovation.',
          members: {
            ceo: { name: 'Ahmet Yılmaz', position: 'Chief Executive Officer', experience: '30+ years in textile industry leadership', specialty: 'Strategic growth and operational excellence' },
            creative: { name: 'Sarah Chen', position: 'Creative Director', experience: '15+ years in luxury textile design', specialty: 'Collection design and trend research' },
            operations: { name: 'Marco Rossi', position: 'VP of Operations', experience: '20+ years in manufacturing', specialty: 'Lean production and supply chain' },
            sustainability: { name: 'Emma Thompson', position: 'Sustainability Director', experience: '12+ years in ESG programs', specialty: 'Sustainable materials and circularity' }
          }
        },
        vision: {
          title: 'Our Vision',
          description: 'To be the global benchmark for luxury jacquard fabrics through design innovation, quality, and sustainability.'
        },
        mission: {
          title: 'Our Mission',
          description: 'We craft premium jacquard textiles that empower designers and brands to create enduring beauty.'
        },
        awards: {
          title: 'Awards & Recognition',
          description: 'International recognition for design excellence, sustainability, and manufacturing quality.',
          list: {
            '2024': { title: 'Global Textile Innovation Award', organization: 'International Textile Association' },
            '2023': { title: 'Sustainable Manufacturing Excellence', organization: 'EcoTextile Council' },
            '2022': { title: 'Best Luxury Fabric Collection', organization: 'Designers Guild' },
            '2021': { title: 'Quality Leadership Award', organization: 'World Textile Forum' }
          }
        }
      },
      // Sustainability Page
      sustainabilityPage: {
        hero: {
          title: 'Sustainable Future',
          description: 'Leading the textile industry toward a more sustainable future through innovative practices, responsible sourcing, and environmental stewardship.'
        },
        impact: {
          title: 'Environmental Impact',
          description: 'Measurable progress across water, emissions, waste, and responsible sourcing.',
          metrics: [
            { number: '2.5M', unit: 'gallons', description: 'Water saved annually through conservation programs' },
            { number: '450', unit: 'tons', description: 'CO2 emissions reduced in 2024' },
            { number: '95%', unit: '', description: 'Production waste diverted from landfills' },
            { number: '85%', unit: '', description: 'Materials sourced from sustainable suppliers' }
          ]
        },
        initiatives: {
          title: 'Key Initiatives',
          description: 'Focused programs driving long-term environmental and social impact.',
          items: [
            { title: 'Eco-Friendly Materials', description: 'Sourcing organic, recycled, and sustainably produced fibers', metrics: '85% of materials certified organic or recycled', image: '/images/eco_materials.png' },
            { title: 'Water Conservation', description: 'Advanced water recycling and conservation systems', metrics: '60% reduction in water usage since 2020', image: '/images/water_conservation.png' },
            { title: 'Waste Reduction', description: 'Zero-waste manufacturing and textile recycling programs', metrics: '95% of production waste recycled or repurposed', image: '/images/eco_friendly_textile.png' }
          ]
        },
        certifications: {
          title: 'Certifications & Standards',
          description: 'Our commitment to sustainability is validated by leading international certification bodies.',
          list: [
            { name: 'OEKO-TEX Standard 100', description: 'Ensures fabrics are free from harmful chemicals', year: 'Certified since 2018' },
            { name: 'Global Organic Textile Standard (GOTS)', description: 'Certifies organic fiber content and environmental criteria', year: 'Certified since 2019' },
            { name: 'Cradle to Cradle Certified', description: 'Products designed for circular economy', year: 'Gold Level since 2021' },
            { name: 'ISO 14001', description: 'Environmental management system certification', year: 'Certified since 2017' },
            { name: 'Better Cotton Initiative', description: 'Sustainable cotton sourcing partnership', year: 'Member since 2020' },
            { name: 'Carbon Trust Certification', description: 'Carbon footprint measurement and reduction', year: 'Certified since 2022' }
          ]
        },
        carbon: {
          title: 'Carbon Footprint Reduction',
          p1: 'Our comprehensive carbon reduction strategy encompasses every aspect of our operations, from renewable energy adoption to supply chain optimization.',
          p2: "We've invested $2.5 million in solar panel installations across our facilities, now generating 70% of our energy needs from renewable sources.",
          p3: "Through process optimization and efficiency improvements, we've reduced our carbon intensity by 45% since 2020, putting us on track to achieve carbon neutrality by 2030.",
          cards: {
            reduction: { value: '45%', label: 'Carbon reduction since 2020' },
            renewable: { value: '70%', label: 'Renewable energy usage' }
          },
          journeyTitle: 'Carbon Neutral Journey',
          journey: [
            '2020: Baseline measurement - 2,400 tons CO2',
            '2022: 25% reduction achieved',
            '2024: 45% reduction achieved',
            '2027: 80% reduction target',
            '2030: Carbon neutral goal'
          ]
        },
        goals: {
          title: '2030 Sustainability Goals',
          description: 'Ambitious targets that will position us as a leader in sustainable textile manufacturing.',
          items: [
            { title: 'Carbon Neutral by 2030', description: 'Achieving net-zero carbon emissions across all operations through renewable energy and carbon offset programs.' },
            { title: '75% Water Reduction', description: 'Further reducing water consumption through advanced recycling technologies and process optimization.' },
            { title: '100% Circular Production', description: 'Implementing closed-loop manufacturing where all waste becomes input for new products.' },
            { title: 'Supply Chain Transparency', description: 'Complete traceability of all materials from source to final product with ethical supplier partnerships.' }
          ]
        },
        partnerships: {
          title: 'Sustainable Partnerships',
          description: 'Collaboration is key to systemic change. We work with suppliers, customers, and industry organizations to advance sustainability across the entire textile value chain.',
          cards: [
            { title: 'Supplier Network', description: 'Working with 200+ certified sustainable suppliers worldwide' },
            { title: 'Industry Initiatives', description: 'Active member of 15+ sustainability organizations' },
            { title: 'Research Partnerships', description: 'Collaborating with 5 universities on textile innovation' }
          ],
          cta: 'Join Our Sustainability Journey'
        }
      },
      // Wholesale Page
      wholesalePage: {
        hero: {
          title: 'Wholesale Solutions',
          description: 'Partner with BZJ Jakar for premium jacquard fabrics at competitive prices and world-class service.',
          stats: {
            minOrder: {
              number: '50m+',
              label: 'Minimum Order Quantity'
            },
            countries: {
              number: '50+',
              label: 'Countries Served'
            },
            clients: {
              number: '5000+',
              label: 'Satisfied Clients'
            }
          }
        },
        pricing: {
          title: 'Wholesale Pricing Tiers',
          description: 'Choose the plan that fits your business needs and enjoy competitive pricing with tailored services.',
          mostPopular: 'Most Popular',
          labels: {
            minimumOrder: 'Minimum order',
            volumeDiscount: 'Volume Discount'
          },
          tiers: {
            premium: {
              name: 'Premium Tier',
              minOrder: '50m',
              discount: '5-10%',
              priceRange: '$28-45/meter',
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
              priceRange: '$25-38/meter',
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
              priceRange: '$22-35/meter',
              benefits: [
                'Best wholesale pricing',
                'Flexible 60-day payment terms',
                'Dedicated account manager',
                '24/7 advanced support',
                'Custom design services',
                'Co-development services'
              ]
            }
          },
          getQuote: 'Get Quote'
        },
        process: {
          title: 'Order Process & Timeline',
          description: 'Our streamlined wholesale process ensures efficient orders from initial inquiry to delivery.',
          steps: [
            { step: '1', title: 'Initial Inquiry', description: 'Submit your requirements through our wholesale inquiry form', timeline: '24-hour response' },
            { step: '2', title: 'Sample Request', description: 'Receive fabric samples and detailed specifications', timeline: '5-7 business days' },
            { step: '3', title: 'Quote & Negotiation', description: 'Custom pricing based on volume and specifications', timeline: '2-3 business days' },
            { step: '4', title: 'Order Confirmation', description: 'Finalize order details, payment terms, and timeline', timeline: '1 business day' },
            { step: '5', title: 'Production & Quality Control', description: 'Manufacturing with rigorous quality control', timeline: '2-4 weeks' },
            { step: '6', title: 'Shipping & Delivery', description: 'Global logistics and delivery confirmation', timeline: '1-2 weeks' }
          ]
        },
        capabilities: {
          title: 'Global Manufacturing Capabilities',
          description: 'Modern facilities and a global logistics network to serve our customers worldwide.',
          stats: {
            production: { capacity: '100,000+', label: 'meters/month' },
            locations: { count: '4', label: 'production hubs' },
            shipping: { time: '72h', label: 'regional delivery' },
            international: { time: '7-14d', label: 'international' },
            onTime: { rate: '99.8%', label: 'on-time delivery rate' }
          }
        },
        terms: {
          title: 'Wholesale Terms Overview',
          description: 'Transparent, fair terms designed to build lasting business relationships.',
          payment: {
            title: 'Payment Terms',
            items: [
              '30-60 day payment terms',
              'Multiple payment methods',
              'Credit applications available',
              'Early payment discounts'
            ]
          },
          policies: {
            title: 'Order Policies',
            items: [
              'Minimum order quantities apply',
              'Custom orders require 50% deposit',
              'Returns within 30 days',
              'Quality guarantee included'
            ]
          },
          shipping: {
            title: 'Shipping & Delivery',
            items: [
              'Free shipping on qualified orders',
              'Express delivery options',
              'International shipping available',
              'Insurance coverage included'
            ]
          }
        },
        testimonials: {
          title: 'Client Success Stories',
          description: 'Hear from wholesale partners who have grown their businesses with BZJ Jakar.',
          clients: [
            { company: 'Elite Fashion House', contact: 'Sarah Chen, Procurement Director', quote: 'BZJ Jakar has been our primary fabric supplier for three years. Their consistency, quality, and service are unmatched.', orderSize: '2,000+ meters annually' },
            { company: 'Luxury Interiors Ltd', contact: 'Marco Rodriguez, Head Buyer', quote: 'Bulk pricing and custom design services helped us offer premium products while maintaining healthy margins.', orderSize: '500+ meters per project' },
            { company: 'Sustainable Brands Co', contact: 'Emma Thompson, Supply Chain Manager', quote: 'Their commitment to sustainability aligns with our values. The organic collections are exceptional.', orderSize: '1,000+ meters quarterly' }
          ]
        },
        inquiry: {
          title: 'Request Wholesale Quote',
          description: 'Fill out this form to receive a personalized wholesale quote within 24 hours.',
          form: {
            companyName: 'Company Name',
            contactName: 'Contact Name',
            email: 'Email',
            phone: 'Phone Number',
            country: 'Country',
            orderQuantity: 'Estimated Order Quantity',
            collections: 'Interested Collections',
            timeline: 'Project Timeline',
            additionalInfo: 'Additional Information',
            additionalInfoPlaceholder: 'Please share any specific requirements, questions, or additional details about your project...',
            submitInquiry: 'Submit Inquiry',
            callSalesTeam: 'Call Our Sales Team'
          }
        }
      },
      // Contact Page
      contactPage: {
        hero: {
          title: 'Contact Us',
          description: 'Connect with our international team across four regional offices. Expert support available 24/7 to assist with your textile needs.'
        }
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
      // Collections Page
      collectionsPage: {
        hero: {
          title: 'Our Collections',
          description: 'Explore our complete range of premium jacquard fabrics, designed to meet the needs of discerning designers and manufacturers worldwide.'
        },
        search: {
          placeholder: 'Search collections...',
          noResults: 'No results found',
          noResultsDesc: 'Try adjusting your search or filters to find what you are looking for.'
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
            name: 'Botanical Elegance',
            description: 'Sophisticated floral patterns that bring nature\'s beauty to luxury textiles',
            features: ['Intricate botanical motifs', 'Premium fiber blend', 'Fade-resistant colors', 'Soft hand feel'],
            applications: ['Evening wear', 'Luxury home textiles', 'High-end upholstery', 'Designer accessories'],
            composition: '60% Silk, 40% Cotton',
            weight: '320 GSM',
            width: '150 cm',
            care: 'Dry clean only'
          },
          geometric: {
            name: 'Modern Geometry',
            description: 'Contemporary geometric patterns for the modern aesthetic',
            features: ['Clean geometric lines', 'Color-fast technology', 'Wrinkle resistance', 'Durable construction'],
            applications: ['Contemporary fashion', 'Commercial interiors', 'Modern furnishings', 'Architectural textiles'],
            composition: '70% Polyester, 30% Cotton',
            weight: '280 GSM',
            width: '140 cm',
            care: 'Machine washable'
          },
          modern: {
            name: 'Urban Contemporary',
            description: 'Minimalist designs for the contemporary lifestyle',
            features: ['Minimalist aesthetic', 'Sustainable materials', 'Easy maintenance', 'Versatile applications'],
            applications: ['Urban fashion', 'Office interiors', 'Casual wear', 'Contemporary decor'],
            composition: '80% Organic Cotton, 20% Linen',
            weight: '240 GSM',
            width: '145 cm',
            care: 'Machine washable, gentle cycle'
          },
          luxury: {
            name: 'Prestige Collection',
            description: 'The pinnacle of luxury textile craftsmanship',
            features: ['Precious metal threads', 'Hand-finished details', 'Limited edition patterns', 'Museum-quality construction'],
            applications: ['Haute couture', 'Luxury hospitality', 'Presidential suites', 'Collector items'],
            composition: '70% Silk, 20% Gold thread, 10% Cashmere',
            weight: '380 GSM',
            width: '130 cm',
            care: 'Professional cleaning only'
          },
          silk: {
            name: 'Pure Silk Luxury',
            description: 'Finest silk jacquards with lustrous finish and exceptional drape',
            features: ['100% mulberry silk', 'Natural luster', 'Breathable comfort', 'Hypoallergenic properties'],
            applications: ['Bridal wear', 'Evening gowns', 'Luxury bedding', 'Formal accessories'],
            composition: '100% Mulberry Silk',
            weight: '300 GSM',
            width: '140 cm',
            care: 'Dry clean recommended'
          },
          cotton: {
            name: 'Premium Cotton',
            description: 'Superior cotton jacquards combining comfort with durability',
            features: ['Long-staple cotton', 'Pre-shrunk treatment', 'Colorfast guarantee', 'Easy care maintenance'],
            applications: ['Casual fashion', 'Home textiles', 'Children\'s wear', 'Everyday luxury'],
            composition: '100% Pima Cotton',
            weight: '260 GSM',
            width: '150 cm',
            care: 'Machine washable, tumble dry low'
          }
        },
        catalog: {
          title: 'Download Our Catalog',
          description: 'Browse detailed specifications, patterns, and applications for all collections.',
          downloadPdf: 'Download PDF Catalog',
          requestSamples: 'Request Fabric Samples'
        },
        modal: {
          viewDetails: 'View Details',
          keyFeatures: 'Key Features',
          applications: 'Applications',
          specifications: 'Specifications',
          composition: 'Composition',
          weight: 'Weight',
          width: 'Width',
          care: 'Care Instructions',
          inquire: 'Inquire Now',
          requestSamples: 'Request Samples'
        },
        labels: {
          features: 'Key Features',
          applications: 'Applications',
          specifications: 'Specifications',
          composition: 'Composition',
          weight: 'Weight',
          width: 'Width',
          care: 'Care Instructions',
          requestSample: 'Request Sample',
          downloadSpecs: 'Download Specifications',
          contactSales: 'Contact Sales Team'
        }
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
      // Common
      common: {
        readyToElevate: 'Tasarımlarınızı Yükseltmeye Hazır mısınız?',
        readyDescription: 'Premium jakar kumaşlar için BZJ Jakar\'a güvenen dünya çapındaki binlerce tasarımcıya katılın. Bugün teklif isteyin ve kalitenin farkını keşfedin.',
        language: 'Dil'
      },
      // Highlights Section (Home)
      highlights: {
        title: 'Neden Bizi Seçmelisiniz',
        subtitle: 'Otuz yıldır lüks tekstilde mükemmellik, inovasyon ve eşsiz kaliteyle liderlik ediyoruz',
        clients: '5000+ Müşteri',
        clientsDesc: 'Dünya çapında güvenilir tasarımcılar ve üreticiler',
        countries: '50+ Ülke',
        countriesDesc: 'Kıtalar boyunca küresel dağıtım ağı',
        years: '30+ Yıl',
        yearsDesc: 'Deneyim ve tekstil mükemmeliyeti',
        quality: 'Üstün Kalite',
        qualityDesc: 'En yüksek küresel standartları karşılayan lüks kumaşlar'
      },
      // About Preview (Home)
      about: {
        title: 'Hikayemiz',
        description1: 'BZJ Jakar 1995\'ten beri geleneksel işçiliği modern teknolojiyle harmanlayarak premium jakar kumaşlar üretiyor.',
        description2: 'Dünya genelinde lüks markalar ve üreticilerle çalışıyor, tutarlı kalite ve hizmet sunuyoruz.',
        learnStory: 'Hikayemizi Keşfedin',
        timeline: {
          title: 'Dönüm Noktaları',
          founded: 'Şirket kuruldu',
          export: 'İlk ihracat ortaklıkları',
          expansion: 'Üretim kapasitesi genişletildi',
          leadership: 'Jakar kumaşlarda küresel liderlik'
        }
      },
      // Sustainability Preview (Home)
      sustainability: {
        title: 'Sürdürülebilirlik',
        description: 'Sorumlu tedarik, su tasarrufu ve döngüsel üretimle sektöre liderlik.',
        sustainable: 'Çevre Dostu Malzemeler',
        sustainableDesc: 'Organik, geri dönüştürülmüş ve sorumlu şekilde tedarik edilmiş lifler',
        water: 'Su Tasarrufu',
        waterDesc: 'Gelişmiş su geri dönüşümü ve azaltılmış tüketim',
        waste: 'Atık Azaltımı',
        wasteDesc: 'Sıfır atık üretim ve tekstil geri dönüşümü programları',
        discoverImpact: 'Etkimizi Keşfedin'
      },
      // Wholesale Preview (Home)
      wholesale: {
        title: 'Toptan Satış Çözümleri',
        description: 'Rekabetçi fiyatlandırma, güvenilir lojistik ve premium kalite için iş ortağınız.',
        minOrder: 'Minimum Sipariş',
        minOrderDesc: '50m+ başlangıç hacmi',
        countriesServed: 'Hizmet Verilen Ülkeler',
        countriesServedDesc: '50+ küresel destinasyon',
        clients: 'Memnun Müşteri',
        clientsDesc: '5000+ dünya çapında',
        getWholesalePricing: 'Toptan Fiyat Al'
      },
      // Contact Preview (Home)
      contact: {
        title: 'İletişime Geçin',
        description: 'Dört bölgesel ofisimizdeki uluslararası ekibimizle iletişime geçin.',
        globalPresence: 'Küresel Varlık',
        globalPresenceDesc: '4 Bölgesel Ofis',
        expertTeam: 'Uzman Ekip',
        expertTeamDesc: 'Yardım etmeye hazır sektör uzmanları',
        response: 'Hızlı Yanıt',
        responseDesc: '24 saat içinde dönüş garantisi',
        premiumService: 'Premium Hizmet',
        premiumServiceDesc: 'Adanmış ve profesyonel destek',
        contactTeam: 'Ekiple İletişime Geç'
      },
      // Testimonials (Home)
      testimonials: {
        title: 'Müşterilerimiz Ne Diyor',
        description: 'Premium jakar kumaşlar için BZJ Jakar\'a güvenen iş ortaklarımızdan dinleyin.'
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
      // Collections Page
      collectionsPage: {
        hero: {
          title: 'Koleksiyonlarımız',
          description: 'Dünya çapındaki seçkin tasarımcılar ve üreticilerin ihtiyaçlarını karşılamak için tasarlanmış premium jakar kumaş koleksiyonumuzun tamamını keşfedin.'
        },
        search: {
          placeholder: 'Koleksiyonlarda ara...',
          noResults: 'Sonuç bulunamadı',
          noResultsDesc: 'Aramanızı veya filtreleri değiştirerek aradığınız ürünü bulmayı deneyin.'
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
            name: 'Botanik Zarafet',
            description: 'Doğanın güzelliğini lüks tekstillere taşıyan sofistike çiçek desenleri',
            features: ['Karmaşık botanik motifler', 'Premium fiber karışımı', 'Solmaya dayanıklı renkler', 'Yumuşak dokunuş'],
            applications: ['Gece kıyafetleri', 'Lüks ev tekstilleri', 'Üst düzey döşemelik', 'Tasarım aksesuarları'],
            composition: '%60 İpek, %40 Pamuk',
            weight: '320 GSM',
            width: '150 cm',
            care: 'Sadece kuru temizleme'
          },
          geometric: {
            name: 'Modern Geometri',
            description: 'Modern estetik için çağdaş geometrik desenler',
            features: ['Temiz geometrik çizgiler', 'Renk sabitleme teknolojisi', 'Kırışıklık direnci', 'Dayanıklı yapı'],
            applications: ['Çağdaş moda', 'Ticari iç mekanlar', 'Modern mobilya', 'Mimari tekstiller'],
            composition: '%70 Polyester, %30 Pamuk',
            weight: '280 GSM',
            width: '140 cm',
            care: 'Makinede yıkanabilir'
          },
          modern: {
            name: 'Kentsel Çağdaş',
            description: 'Çağdaş yaşam tarzı için minimalist tasarımlar',
            features: ['Minimalist estetik', 'Sürdürülebilir malzemeler', 'Kolay bakım', 'Çok yönlü uygulamalar'],
            applications: ['Kentsel moda', 'Ofis iç mekanları', 'Günlük giyim', 'Çağdaş dekor'],
            composition: '%80 Organik Pamuk, %20 Keten',
            weight: '240 GSM',
            width: '145 cm',
            care: 'Makinede yıkanabilir, nazik program'
          },
          luxury: {
            name: 'Prestij Koleksiyonu',
            description: 'Lüks tekstil işçiliğinin zirvesi',
            features: ['Değerli metal iplikler', 'El işçiliği detaylar', 'Sınırlı sayıda desenler', 'Müze kalitesi yapım'],
            applications: ['Haute couture', 'Lüks otelcilik', 'Cumhurbaşkanlığı süitleri', 'Koleksiyon parçaları'],
            composition: '%70 İpek, %20 Altın iplik, %10 Kaşmir',
            weight: '380 GSM',
            width: '130 cm',
            care: 'Sadece profesyonel temizlik'
          },
          silk: {
            name: 'Saf İpek Lüks',
            description: 'Parlak bitişli ve olağanüstü dökümlü en kaliteli ipek jakarlar',
            features: ['%100 dut ipeği', 'Doğal parlaklık', 'Nefes alabilir konfor', 'Hipoalerjenik özellikler'],
            applications: ['Gelinlik', 'Gece elbiseleri', 'Lüks yatak tekstili', 'Resmi aksesuarlar'],
            composition: '%100 Dut İpeği',
            weight: '300 GSM',
            width: '140 cm',
            care: 'Kuru temizleme önerilir'
          },
          cotton: {
            name: 'Premium Pamuk',
            description: 'Konforu dayanıklılıkla birleştiren üstün pamuk jakarlar',
            features: ['Uzun elyaflı pamuk', 'Ön çekme işlemi', 'Renk sabitliği garantisi', 'Kolay bakım'],
            applications: ['Günlük moda', 'Ev tekstilleri', 'Çocuk giyim', 'Günlük lüks'],
            composition: '%100 Pima Pamuk',
            weight: '260 GSM',
            width: '150 cm',
            care: 'Makinede yıkanabilir, düşük ısıda kurutulabilir'
          }
        },
        catalog: {
          title: 'Kataloğumuzu İndirin',
          description: 'Tüm koleksiyonlara ait detaylı teknik özellikler, desenler ve kullanım alanlarını inceleyin.',
          downloadPdf: 'PDF Katalog İndir',
          requestSamples: 'Kumaş Numunesi İste'
        },
        modal: {
          viewDetails: 'Detayları Gör',
          keyFeatures: 'Temel Özellikler',
          applications: 'Kullanım Alanları',
          specifications: 'Teknik Özellikler',
          composition: 'Bileşim',
          weight: 'Ağırlık',
          width: 'Genişlik',
          care: 'Bakım Talimatları',
          inquire: 'Teklif İste',
          requestSamples: 'Numune Talep Et'
        },
        labels: {
          features: 'Temel Özellikler',
          applications: 'Kullanım Alanları',
          specifications: 'Teknik Özellikler',
          composition: 'Bileşim',
          weight: 'Ağırlık',
          width: 'Genişlik',
          care: 'Bakım Talimatları',
          requestSample: 'Numune İste',
          downloadSpecs: 'Teknik Özellikler İndir',
          contactSales: 'Satış Ekibiyle İletişime Geç'
        }
      },
      // About Page
      aboutPage: {
        hero: {
          title: 'Mirasımız',
          description: 'Geleneksel işçiliği yenilikçi teknoloji ile birleştirerek dünyanın en kaliteli jakar kumaşlarını üreten otuz yıllık tekstil mükemmeliyeti.'
        },
        story: {
          title: 'Hikayemiz',
          paragraph1: '1995 yılında kurulan BZJ Jakar, miras ve inovasyonu mükemmel dengeyle birleştirerek jakar dokumayı yükseltme vizyonuyla yola çıktı.',
          paragraph2: 'Yıllar içinde operasyonlarımızı küresel ölçekte genişlettik ve lider tasarımcılar ile lüks markalarla iş ortaklıkları kurduk.',
          paragraph3: 'Bugün kalite ve sürdürülebilirliğe olan bağlılığımız, premium tekstil üretimindeki yaklaşımımızı tanımlamaya devam ediyor.'
        },
        timeline: {
          title: 'Yolculuğumuz',
          description: 'Bizi lüks jakar kumaşlarda küresel bir lidere dönüştüren önemli dönüm noktaları.',
          events: {
            '1995': { title: 'Kuruluş', description: 'BZJ Jakar, premium jakar dokuma odaklı olarak kuruldu.' },
            '2000': { title: 'İlk İhracat', description: 'Stratejik ihracat ilişkileriyle uluslararası pazarlara açıldık.' },
            '2005': { title: 'Ar-Ge Yatırımları', description: 'İleri seviye tezgahlar ve malzeme inovasyonu için yatırımlar.' },
            '2010': { title: 'Küresel Büyüme', description: 'Üretim kapasitesi ölçeklendi ve yeni hatlar açıldı.' },
            '2015': { title: 'Sürdürülebilirlik Çerçevesi', description: 'Kapsamlı sürdürülebilirlik ve geri dönüşüm programları başlatıldı.' },
            '2020': { title: 'Dijital Dönüşüm', description: 'Kalite ve lojistik için uçtan uca dijital sistemler uygulandı.' },
            '2025': { title: 'Sektör Liderliği', description: 'Premium jakar üretiminde küresel lider olarak tanındı.' }
          }
        },
        manufacturing: {
          title: 'Üretim Mükemmelliği',
          description: 'Lif seçiminden son finisaja kadar süreçlerimiz hassasiyet ve tutarlılık için tasarlandı.',
          production: {
            title: 'Son Teknoloji Üretim',
            paragraph1: 'Modern tesislerimiz, olağanüstü verimlilikle karmaşık desenler üretebilen gelişmiş jakar tezgahlarına sahiptir.',
            paragraph2: 'İplik hazırlıktan dokuma ve finisaja kadar her adımı dikkatle kontrol ediyoruz.',
            paragraph3: 'Adanmış ekipler, uzun ömürlü kalite ve konforu güvence altına almak için malzeme performansını izler.'
          },
          quality: {
            title: 'Kalite Güvencesi',
            paragraph1: 'Her parti; örgü bütünlüğü, renk haslığı ve tutum için sıkı denetimlerden geçer.',
            paragraph2: 'Laboratuvarlarımız dayanıklılık, çevresel güvenlik ve uluslararası standartlara uygunluğu test eder.'
          }
        },
        capabilities: {
          title: 'Küresel Yetenekler',
          description: 'Entegre yeteneklerimiz tasarım, geliştirme, üretim ve lojistiği kapsar.',
          advanced: { title: 'İleri Makine Parkı', description: 'Yüksek hassasiyetli jakar tezgahları ve finisaj hatları.' },
          global: { title: 'Küresel Erişim', description: 'Dünya çapında dağıtım ağı ve lojistik ortakları.' },
          expert: { title: 'Uzman Ekip', description: 'Deneyimli mühendisler, tasarımcılar ve kalite uzmanları.' },
          qualityAssurance: { title: 'Sertifikalı Kalite', description: 'Uluslararası sertifikalar ve sürekli iyileştirme.' }
        },
        team: {
          title: 'Liderlik Ekibi',
          description: 'Mükemmellik ve inovasyon vizyonumuza yön veren deneyimli liderler.',
          members: {
            ceo: { name: 'Ahmet Yılmaz', position: 'Genel Müdür', experience: 'Tekstil sektöründe 30+ yıl liderlik', specialty: 'Stratejik büyüme ve operasyonel mükemmellik' },
            creative: { name: 'Sarah Chen', position: 'Kreatif Direktör', experience: 'Lüks tekstil tasarımında 15+ yıl', specialty: 'Koleksiyon tasarımı ve trend araştırması' },
            operations: { name: 'Marco Rossi', position: 'Operasyonlardan Sorumlu Başkan Yardımcısı', experience: 'Üretimde 20+ yıl', specialty: 'Yalın üretim ve tedarik zinciri' },
            sustainability: { name: 'Emma Thompson', position: 'Sürdürülebilirlik Direktörü', experience: 'ESG programlarında 12+ yıl', specialty: 'Sürdürülebilir malzemeler ve döngüsellik' }
          }
        },
        vision: {
          title: 'Vizyonumuz',
          description: 'Tasarım inovasyonu, kalite ve sürdürülebilirlikle lüks jakar kumaşlarda küresel referans olmak.'
        },
        mission: {
          title: 'Misyonumuz',
          description: 'Tasarımcılar ve markaların kalıcı güzellik yaratmasını sağlayan premium jakar tekstiller üretiyoruz.'
        },
        awards: {
          title: 'Ödüller ve Tanınırlık',
          description: 'Tasarım mükemmelliği, sürdürülebilirlik ve üretim kalitesi için uluslararası takdir.',
          list: {
            '2024': { title: 'Küresel Tekstil İnovasyon Ödülü', organization: 'Uluslararası Tekstil Birliği' },
            '2023': { title: 'Sürdürülebilir Üretimde Mükemmellik', organization: 'EcoTextile Konseyi' },
            '2022': { title: 'En İyi Lüks Kumaş Koleksiyonu', organization: 'Tasarımcılar Birliği' },
            '2021': { title: 'Kalite Liderliği Ödülü', organization: 'Dünya Tekstil Forumu' }
          }
        }
      },
      // Sustainability Page
      sustainabilityPage: {
        hero: {
          title: 'Sürdürülebilir Gelecek',
          description: 'Yenilikçi uygulamalar, sorumlu kaynak sağlama ve çevresel yöneticilik yoluyla tekstil endüstrisini daha sürdürülebilir bir geleceğe yönlendiriyoruz.'
        },
        impact: {
          title: 'Çevresel Etki',
          description: 'Su, emisyon, atık ve sorumlu tedarik başlıklarında ölçülebilir ilerleme.',
          metrics: [
            { number: '2.5M', unit: 'galon', description: 'Koruma programlarıyla yıllık su tasarrufu' },
            { number: '450', unit: 'ton', description: '2024 yılında azaltılan CO2 emisyonu' },
            { number: '95%', unit: '', description: 'Depolama alanlarına yönlendirilmeden geri kazanılan üretim atığı' },
            { number: '85%', unit: '', description: 'Sürdürülebilir tedarikçilerden temin edilen malzemeler' }
          ]
        },
        initiatives: {
          title: 'Ana Girişimler',
          description: 'Uzun vadeli çevresel ve sosyal etki yaratan odaklı programlar.',
          items: [
            { title: 'Çevre Dostu Malzemeler', description: 'Organik, geri dönüştürülmüş ve sürdürülebilir şekilde üretilmiş lifler', metrics: 'Malzemelerin %85\'i organik veya geri dönüştürülmüş sertifikalı', image: '/images/eco_materials.png' },
            { title: 'Su Tasarrufu', description: 'İleri su geri dönüşümü ve tasarruf sistemleri', metrics: '2020\'den beri su kullanımında %60 azalma', image: '/images/water_conservation.png' },
            { title: 'Atık Azaltımı', description: 'Sıfır atık üretim ve tekstil geri dönüşüm programları', metrics: 'Üretim atıklarının %95\'i geri kazanıldı veya yeniden kullanıldı', image: '/images/eco_friendly_textile.png' }
          ]
        },
        certifications: {
          title: 'Sertifikalar ve Standartlar',
          description: 'Sürdürülebilirliğe olan bağlılığımız, önde gelen uluslararası kuruluşlar tarafından doğrulanmaktadır.',
          list: [
            { name: 'OEKO-TEX Standard 100', description: 'Kumaşların zararlı kimyasallardan arınmış olduğunu garanti eder', year: '2018\'den beri sertifikalı' },
            { name: 'Global Organic Textile Standard (GOTS)', description: 'Organik lif içeriği ve çevresel kriterler için sertifikasyon', year: '2019\'dan beri sertifikalı' },
            { name: 'Cradle to Cradle Certified', description: 'Döngüsel ekonomi için tasarlanmış ürünler', year: '2021\'den beri Altın seviye' },
            { name: 'ISO 14001', description: 'Çevre yönetim sistemi sertifikası', year: '2017\'den beri sertifikalı' },
            { name: 'Better Cotton Initiative', description: 'Sürdürülebilir pamuk tedarik ortaklığı', year: '2020\'den beri üye' },
            { name: 'Carbon Trust Certification', description: 'Karbon ayak izi ölçümü ve azaltımı', year: '2022\'den beri sertifikalı' }
          ]
        },
        carbon: {
          title: 'Karbon Ayak İzi Azaltımı',
          p1: 'Kapsamlı karbon azaltım stratejimiz; yenilenebilir enerji kullanımından tedarik zinciri optimizasyonuna kadar tüm operasyonlarımızı kapsar.',
          p2: 'Tesislerimizdeki güneş paneli yatırımlarına $2.5M ayırarak enerji ihtiyacımızın %70\'ini yenilenebilir kaynaklardan karşılıyoruz.',
          p3: 'Süreç optimizasyonu ve verimlilikle 2020\'den beri karbon yoğunluğunu %45 azalttık; 2030 karbon nötr hedefimiz yolunda ilerliyoruz.',
          cards: {
            reduction: { value: '45%', label: '2020\'den beri karbon azaltımı' },
            renewable: { value: '70%', label: 'Yenilenebilir enerji kullanımı' }
          },
          journeyTitle: 'Karbon Nötr Yolculuğu',
          journey: [
            '2020: Baz ölçüm - 2.400 ton CO2',
            '2022: %25 azaltım sağlandı',
            '2024: %45 azaltım sağlandı',
            '2027: %80 azaltım hedefi',
            '2030: Karbon nötr hedefi'
          ]
        },
        goals: {
          title: '2030 Sürdürülebilirlik Hedefleri',
          description: 'Sürdürülebilir tekstil üretiminde liderliğimizi pekiştirecek iddialı hedefler.',
          items: [
            { title: '2030\'da Karbon Nötr', description: 'Yenilenebilir enerji ve karbon dengeleme ile net sıfır emisyon.' },
            { title: '%75 Su Azaltımı', description: 'Gelişmiş geri dönüşüm teknolojileri ve süreç optimizasyonu ile su tüketiminde ek azalma.' },
            { title: '%100 Döngüsel Üretim', description: 'Tüm atıkların yeni ürün girdisine dönüştüğü kapalı döngü üretim.' },
            { title: 'Tedarik Zinciri Şeffaflığı', description: 'Kaynaktan nihai ürüne kadar tam izlenebilirlik ve etik tedarik ortaklıkları.' }
          ]
        },
        partnerships: {
          title: 'Sürdürülebilir Ortaklıklar',
          description: 'Sistemik değişim için iş birliği şart. Tüm değer zincirinde sürdürülebilirliği ilerletmek için tedarikçiler, müşteriler ve sektör kuruluşlarıyla çalışıyoruz.',
          cards: [
            { title: 'Tedarikçi Ağı', description: 'Dünya çapında 200+ sertifikalı sürdürülebilir tedarikçi ile çalışma' },
            { title: 'Sektör Girişimleri', description: '15+ sürdürülebilirlik kuruluşunda aktif üyelik' },
            { title: 'Araştırma Ortaklıkları', description: 'Tekstil inovasyonu için 5 üniversite ile iş birliği' }
          ],
          cta: 'Sürdürülebilirlik Yolculuğumuza Katılın'
        }
      },
      // Wholesale Page
      wholesalePage: {
        hero: {
          title: 'Toptan Satış Çözümleri',
          description: 'Rekabetçi fiyatlarla premium jakar kumaşlar ve dünya standartlarında hizmet için BZJ Jakar ile ortaklık kurun.',
          stats: {
            minOrder: {
              number: '50m+',
              label: 'Minimum Sipariş Miktarı'
            },
            countries: {
              number: '50+',
              label: 'Hizmet Verdiğimiz Ülke'
            },
            clients: {
              number: '5000+',
              label: 'Memnun Müşteri'
            }
          }
        },
        pricing: {
          title: 'Toptan Satış Fiyat Planları',
          description: 'İşletmenizin ihtiyaçlarına uygun planı seçin ve rekabetçi fiyatlarla özel hizmetlerden yararlanın.',
          mostPopular: 'En Popüler',
          labels: {
            minimumOrder: 'Minimum sipariş',
            volumeDiscount: 'Hacim İndirimi'
          },
          tiers: {
            premium: {
              name: 'Premium Kademe',
              minOrder: '50m',
              discount: '%5-10',
              priceRange: '$28-45/metre',
              benefits: [
                'Premium kumaş seçkisi',
                'Standart 30 günlük ödeme koşulları',
                'Bölgesel kargo dahil',
                'Temel teknik destek',
                'Üç aylık trend raporları'
              ]
            },
            standard: {
              name: 'Standart Kademe',
              minOrder: '100m',
              discount: '%10-15',
              priceRange: '$25-38/metre',
              benefits: [
                'Tüm koleksiyonlara erişim',
                'Genişletilmiş 45 günlük ödeme koşulları',
                'Ücretsiz uluslararası kargo',
                'Öncelikli teknik destek',
                'Aylık trend tahminleri',
                'Özel renk eşleştirme'
              ],
              recommended: true
            },
            bulk: {
              name: 'Büyük Hacim Kademesi',
              minOrder: '200m',
              discount: '%15-25',
              priceRange: '$22-35/metre',
              benefits: [
                'En iyi toptan satış fiyatları',
                'Esnek 60 günlük ödeme koşulları',
                'Özel hesap yöneticisi',
                '7/24 gelişmiş destek',
                'Özel tasarım hizmetleri',
                'Ortak geliştirme hizmetleri'
              ]
            }
          },
          getQuote: 'Fiyat Teklifi Al'
        },
        process: {
          title: 'Sipariş Süreci ve Zaman Çizelgesi',
          description: 'Kolaylaştırılmış toptan satış sürecimiz, ilk sorgulamadan teslimat aşamasına kadar verimli siparişleri garanti eder.',
          steps: [
            {
              step: '1',
              title: 'İlk Sorgulama',
              description: 'Gereksinimlerinizi toptan satış sorgulama formu aracılığıyla gönderin',
              timeline: '24 saat içinde yanıt'
            },
            {
              step: '2',
              title: 'Numune Talebi',
              description: 'Kumaş numuneleri ve ayrıntılı özellikleri alın',
              timeline: '5-7 iş günü'
            },
            {
              step: '3',
              title: 'Fiyat Teklifi ve Müzakere',
              description: 'Hacim ve özelliklere dayalı özel fiyatlandırma',
              timeline: '2-3 iş günü'
            },
            {
              step: '4',
              title: 'Sipariş Onayı',
              description: 'Sipariş detayları, ödeme koşulları ve zaman çizelgesini tamamlayın',
              timeline: '1 iş günü'
            },
            {
              step: '5',
              title: 'Üretim ve Kalite Kontrol',
              description: 'Sıkı kalite kontrolü ile üretim',
              timeline: '2-4 hafta'
            },
            {
              step: '6',
              title: 'Kargo ve Teslimat',
              description: 'Küresel lojistik ve teslimat onayı',
              timeline: '1-2 hafta'
            }
          ]
        },
        capabilities: {
          title: 'Küresel Üretim Kapasitesi',
          description: 'Dünya çapındaki müşterilerimize hizmet etmek için modern tesisler ve küresel lojistik ağı.',
          stats: {
            production: {
              capacity: '100,000+',
              label: 'metre/ay'
            },
            locations: {
              count: '4',
              label: 'üretim merkezi'
            },
            shipping: {
              time: '72s',
              label: 'bölgesel teslimat'
            },
            international: {
              time: '7-14g',
              label: 'uluslararası'
            },
            onTime: {
              rate: '%99.8',
              label: 'zamanında teslimat oranı'
            }
          }
        },
        terms: {
          title: 'Toptan Satış Koşulları Genel Bakış',
          description: 'Kalıcı iş ilişkileri kurmak için tasarlanmış şeffaf ve adil koşullar.',
          payment: {
            title: 'Ödeme Koşulları',
            items: [
              '30-60 günlük ödeme koşulları',
              'Çoklu ödeme yöntemleri',
              'Kredi başvuruları mevcut',
              'Erken ödeme indirimleri'
            ]
          },
          policies: {
            title: 'Sipariş Politikaları',
            items: [
              'Minimum sipariş miktarları uygulanır',
              'Özel siparişler %50 depozit gerektirir',
              '30 gün içinde iade',
              'Kalite garantisi dahil'
            ]
          },
          shipping: {
            title: 'Kargo ve Teslimat',
            items: [
              'Nitelikli siparişlerde ücretsiz kargo',
              'Ekspres teslimat seçenekleri',
              'Uluslararası kargo mevcut',
              'Sigorta kapsamı dahil'
            ]
          }
        },
        testimonials: {
          title: 'Müşteri Başarı Hikayeleri',
          description: 'BZJ Jakar ile işlerini büyüten toptan satış ortaklarından dinleyin.',
          clients: [
            {
              company: 'Elite Moda Evi',
              contact: 'Sarah Chen, Satın Alma Müdürü',
              quote: 'BZJ Jakar üç yıldır ana kumaş tedarikçimiz. Tutarlılıkları, kaliteleri ve hizmetleri sektörde eşsiz.',
              orderSize: 'Yılda 2000+ metre'
            },
            {
              company: 'Lüks İç Mekanlar Ltd',
              contact: 'Marco Rodriguez, Baş Alıcı',
              quote: 'Toptan fiyatları ve özel tasarım hizmetleri, sağlıklı karlar korurken premium ürünler sunmamızı sağladı.',
              orderSize: 'Proje başına 500+ metre'
            },
            {
              company: 'Sürdürülebilir Markalar A.Ş.',
              contact: 'Emma Thompson, Tedarik Zinciri Müdürü',
              quote: 'Sürdürülebilirliğe olan bağlılıkları marka değerlerimizle mükemmel uyum sağlıyor. Organik koleksiyonlar olağanüstü.',
              orderSize: 'Üç ayda 1000+ metre'
            }
          ]
        },
        inquiry: {
          title: 'Toptan Satış Fiyat Teklifi Talep Et',
          description: '24 saat içinde kişiselleştirilmiş toptan satış fiyat teklifi almak için bu formu doldurun.',
          form: {
            companyName: 'Şirket Adı',
            contactName: 'İletişim Kişisi Adı',
            email: 'E-posta',
            phone: 'Telefon Numarası',
            country: 'Ülke',
            orderQuantity: 'Beklenen Sipariş Miktarı',
            collections: 'İlgilenilen Koleksiyonlar',
            timeline: 'Proje Zaman Çizelgesi',
            additionalInfo: 'Ek Bilgiler',
            additionalInfoPlaceholder: 'Lütfen projenizle ilgili özel gereksinimler, sorular veya ek detayları paylaşın...',
            submitInquiry: 'Sorgulama Gönder',
            callSalesTeam: 'Satış Ekibini Ara'
          }
        }
      },
      // Contact Page
      contactPage: {
        hero: {
          title: 'İletişime Geçin',
          description: 'Dört bölgesel ofisimizde bulunan uluslararası ekibimizle iletişime geçin. Tekstil ihtiyaçlarınızda yardımcı olmak için 7/24 uzman desteği mevcuttur.'
        }
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
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        home: 'الرئيسية',
        collections: 'المجموعات',
        about: 'من نحن',
        sustainability: 'الاستدامة',
        wholesale: 'الجملة',
        contact: 'اتصل بنا'
      },
      // Hero Section
      hero: {
        title: 'BZJ جاكار',
        subtitle: 'أناقة في كل خيط',
        description: 'أقمشة جاكارد فاخرة مصنوعة بعناية للمشترين بالجملة والمصممين المتميزين حول العالم. اكتشف المنسوجات الفاخرة التي تحدد الرقي.',
        exploreCollections: 'استكشف المجموعات',
        requestQuote: 'اطلب عرض سعر'
      },
      // Common
      common: {
        readyToElevate: 'هل أنت مستعد لرفع مستوى تصاميمك؟',
        readyDescription: 'انضم إلى آلاف المصممين حول العالم الذين يثقون في BZJ جاكار للحصول على أقمشة جاكارد فاخرة. اطلب عرض سعر اليوم واكتشف الفرق الذي تصنعه الجودة.',
        language: 'اللغة'
      },
      // Highlights Section (Home)
      highlights: {
        title: 'لماذا نحن الخيار الأفضل',
        subtitle: 'منذ ثلاثة عقود، نقود صناعة المنسوجات الفاخرة بالتميز والابتكار والجودة التي لا تضاهى',
        clients: 'أكثر من 5000 عميل',
        clientsDesc: 'مصممون ومصنعون موثوقون في جميع أنحاء العالم',
        countries: '50+ دولة',
        countriesDesc: 'شبكة توزيع عالمية تمتد عبر القارات',
        years: '30+ سنة',
        yearsDesc: 'من الخبرة والتميز في صناعة المنسوجات',
        quality: 'جودة فائقة',
        qualityDesc: 'أقمشة فاخرة تلبي أعلى المعايير العالمية'
      },
      // About Preview (Home)
      about: {
        title: 'قصتنا',
        description1: 'منذ عام 1995، تجمع BZJ جاكار بين الحرفية التقليدية والتكنولوجيا الحديثة لإنتاج أقمشة جاكارد فاخرة.',
        description2: 'نتعاون مع العلامات التجارية الفاخرة والمصنعين حول العالم لتقديم جودة وخدمة متسقة.',
        learnStory: 'تعرّف على قصتنا',
        timeline: {
          title: 'محطات بارزة',
          founded: 'تأسيس الشركة',
          export: 'أولى شراكات التصدير',
          expansion: 'توسيع الطاقة الإنتاجية',
          leadership: 'ريادة عالمية في أقمشة الجاكارد'
        }
      },
      // Sustainability Preview (Home)
      sustainability: {
        title: 'الاستدامة',
        description: 'الريادة في القطاع عبر التوريد المسؤول وتوفير المياه والإنتاج الدائري.',
        sustainable: 'مواد صديقة للبيئة',
        sustainableDesc: 'ألياف عضوية ومعاد تدويرها ومورّدة بشكل مسؤول',
        water: 'توفير المياه',
        waterDesc: 'أنظمة متقدمة لإعادة تدوير المياه وتقليل الاستهلاك',
        waste: 'تقليل النفايات',
        wasteDesc: 'تصنيع بلا نفايات وبرامج لإعادة تدوير المنسوجات',
        discoverImpact: 'اكتشف تأثيرنا'
      },
      // Wholesale Preview (Home)
      wholesale: {
        title: 'حلول الجملة',
        description: 'شراكة من أجل أسعار تنافسية ولوجستيات موثوقة وجودة فائقة.',
        minOrder: 'الحد الأدنى للطلب',
        minOrderDesc: '50 مترًا فأكثر',
        countriesServed: 'الدول المخدومة',
        countriesServedDesc: 'أكثر من 50 وجهة عالمية',
        clients: 'عملاء راضون',
        clientsDesc: '5000+ حول العالم',
        getWholesalePricing: 'احصل على أسعار الجملة'
      },
      // Contact Preview (Home)
      contact: {
        title: 'اتصل بنا',
        description: 'تواصل مع فريقنا الدولي عبر مكاتبنا الإقليمية الأربعة.',
        globalPresence: 'تواجد عالمي',
        globalPresenceDesc: '4 مكاتب إقليمية',
        expertTeam: 'فريق خبير',
        expertTeamDesc: 'اختصاصيون في المجال جاهزون للمساعدة',
        response: 'استجابة سريعة',
        responseDesc: 'وعد بالرد خلال 24 ساعة',
        premiumService: 'خدمة متميزة',
        premiumServiceDesc: 'دعم مخصص واحترافي',
        contactTeam: 'تواصل مع فريقنا'
      },
      // Testimonials (Home)
      testimonials: {
        title: 'ماذا يقول عملاؤنا',
        description: 'استمع إلى الشركاء الذين يثقون بـ BZJ جاكار للحصول على أقمشة جاكارد فاخرة.'
      },
      // About Page
      aboutPage: {
        hero: {
          title: 'تراثنا',
          description: 'ثلاثة عقود من التميز في النسيج، نجمع بين الحرفية التقليدية والتكنولوجيا المبتكرة لإنتاج أفضل أقمشة الجاكارد في العالم.'
        },
        story: {
          title: 'قصتنا',
          paragraph1: 'تأسست BZJ جاكار عام 1995 برؤية لرفع مستوى حياكة الجاكارد من خلال توازن مثالي بين الإرث والابتكار.',
          paragraph2: 'على مر السنين، وسّعنا عملياتنا عالميًا وتعاوننا مع أبرز المصممين والعلامات التجارية الفاخرة.',
          paragraph3: 'اليوم يواصل التزامنا بالجودة والاستدامة تعريف نهجنا في تصنيع المنسوجات الفاخرة.'
        },
        timeline: {
          title: 'رحلتنا',
          description: 'محطات أساسية شكّلت شركتنا لتصبح رائدة عالميًا في أقمشة الجاكارد الفاخرة.',
          events: {
            '1995': { title: 'سنة التأسيس', description: 'تأسست BZJ جاكار مع تركيز على حياكة الجاكارد الفاخرة.' },
            '2000': { title: 'أولى الشراكات التصديرية', description: 'التوسع نحو الأسواق الدولية عبر شراكات استراتيجية.' },
            '2005': { title: 'استثمارات البحث والتطوير', description: 'الاستثمار في الأنوال المتقدمة والابتكار في المواد.' },
            '2010': { title: 'التوسع العالمي', description: 'زيادة الطاقة الإنتاجية وافتتاح خطوط إنتاج جديدة.' },
            '2015': { title: 'إطار الاستدامة', description: 'إطلاق برامج شاملة للاستدامة وإعادة التدوير.' },
            '2020': { title: 'التحول الرقمي', description: 'تطبيق أنظمة رقمية شاملة للجودة واللوجستيات.' },
            '2025': { title: 'الريادة الصناعية', description: 'الاعتراف بنا كقادة عالميين في تصنيع الجاكارد الفاخر.' }
          }
        },
        manufacturing: {
          title: 'تميّز التصنيع',
          description: 'من اختيار الألياف إلى اللمسات النهائية، صُممت عملياتنا للدقة والاتساق.',
          production: {
            title: 'إنتاج متطور',
            paragraph1: 'تتميز منشآتنا الحديثة بأنوال جاكار متقدمة قادرة على إنتاج أنماط معقدة بكفاءة عالية.',
            paragraph2: 'نحن نتحكم بعناية في كل خطوة من التحضير للخيوط إلى الحياكة والتشطيب.',
            paragraph3: 'تشرف فرق متخصصة على أداء المواد لضمان جودة متينة وراحة دائمة.'
          },
          quality: {
            title: 'ضمان الجودة',
            paragraph1: 'تخضع كل دفعة لفحوصات صارمة لسلامة النسيج وثبات اللون والملمس.',
            paragraph2: 'تختبر مختبراتنا المتانة والسلامة البيئية والامتثال للمعايير الدولية.'
          }
        },
        capabilities: {
          title: 'القدرات العالمية',
          description: 'تشمل قدراتنا المتكاملة التصميم والتطوير والإنتاج واللوجستيات.',
          advanced: { title: 'آلات متقدمة', description: 'أنوال جاكارد عالية الدقة وخطوط تشطيب.' },
          global: { title: 'انتشار عالمي', description: 'شبكة توزيع عالمية وشركاء لوجستيون.' },
          expert: { title: 'فريق خبير', description: 'مهندسون ومصممون وخبراء جودة ذوو خبرة.' },
          qualityAssurance: { title: 'جودة معتمدة', description: 'شهادات دولية وتحسين مستمر.' }
        },
        team: {
          title: 'فريق القيادة',
          description: 'قادة ذوو خبرة يوجّهون رؤيتنا نحو التميّز والابتكار.',
          members: {
            ceo: { name: 'أحمد يلماز', position: 'المدير التنفيذي', experience: '30+ سنة في قيادة صناعة النسيج', specialty: 'النمو الاستراتيجي والتميّز التشغيلي' },
            creative: { name: 'سارة تشين', position: 'المديرة الإبداعية', experience: '15+ سنة في تصميم المنسوجات الفاخرة', specialty: 'تصميم المجموعات وبحوث الاتجاهات' },
            operations: { name: 'ماركو روسي', position: 'نائب الرئيس للعمليات', experience: '20+ سنة في التصنيع', specialty: 'الإنتاج الرشيق وسلسلة التوريد' },
            sustainability: { name: 'إيما طومسون', position: 'مديرة الاستدامة', experience: '12+ سنة في برامج ESG', specialty: 'المواد المستدامة والاقتصاد الدائري' }
          }
        },
        vision: {
          title: 'رؤيتنا',
          description: 'أن نكون المعيار العالمي لأقمشة الجاكارد الفاخرة من خلال الابتكار والجودة والاستدامة.'
        },
        mission: {
          title: 'مهمتنا',
          description: 'نصنع منسوجات جاكارد فاخرة تمكّن المصممين والعلامات التجارية من ابتكار جمالٍ خالد.'
        },
        awards: {
          title: 'الجوائز والتكريم',
          description: 'اعتراف دولي بالتميّز في التصميم والاستدامة وجودة التصنيع.',
          list: {
            '2024': { title: 'جائزة الابتكار في المنسوجات العالمية', organization: 'الرابطة الدولية للمنسوجات' },
            '2023': { title: 'تميّز التصنيع المستدام', organization: 'مجلس EcoTextile' },
            '2022': { title: 'أفضل مجموعة أقمشة فاخرة', organization: 'نقابة المصممين' },
            '2021': { title: 'جائزة ريادة الجودة', organization: 'منتدى المنسوجات العالمي' }
          }
        }
      },
      // Sustainability Page
      sustainabilityPage: {
        hero: {
          title: 'مستقبل مستدام',
          description: 'قيادة صناعة النسيج نحو مستقبل أكثر استدامة من خلال الممارسات المبتكرة والتوريد المسؤول والإشراف البيئي.'
        },
        impact: {
          title: 'الأثر البيئي',
          description: 'تقدم قابل للقياس في المياه والانبعاثات والنفايات والتوريد المسؤول.',
          metrics: [
            { number: '2.5M', unit: 'غالون', description: 'مياه موفرة سنويًا عبر برامج الحفاظ' },
            { number: '450', unit: 'طن', description: 'انبعاثات CO2 المخفضة في 2024' },
            { number: '95%', unit: '', description: 'نفايات الإنتاج المحولة بعيدًا عن المطامر' },
            { number: '85%', unit: '', description: 'مواد موردة من مزودين مستدامين' }
          ]
        },
        initiatives: {
          title: 'المبادرات الرئيسية',
          description: 'برامج مركزة تقود تأثيرًا بيئيًا واجتماعيًا طويل الأمد.',
          items: [
            { title: 'مواد صديقة للبيئة', description: 'توفير الألياف العضوية والمعاد تدويرها والمستدامة الإنتاج', metrics: '85% من المواد عضوية أو معاد تدويرها', image: '/images/eco_materials.png' },
            { title: 'توفير المياه', description: 'أنظمة متقدمة لإعادة تدوير المياه والحفاظ عليها', metrics: 'خفض استهلاك المياه بنسبة 60% منذ 2020', image: '/images/water_conservation.png' },
            { title: 'تقليل النفايات', description: 'تصنيع بلا نفايات وبرامج لإعادة تدوير المنسوجات', metrics: 'إعادة تدوير أو إعادة استخدام 95% من نفايات الإنتاج', image: '/images/eco_friendly_textile.png' }
          ]
        },
        certifications: {
          title: 'الشهادات والمعايير',
          description: 'التزامنا بالاستدامة تؤكده جهات اعتماد دولية رائدة.',
          list: [
            { name: 'OEKO-TEX Standard 100', description: 'يضمن خلو الأقمشة من المواد الضارة', year: 'معتمد منذ 2018' },
            { name: 'Global Organic Textile Standard (GOTS)', description: 'يوثق محتوى الألياف العضوية والمعايير البيئية', year: 'معتمد منذ 2019' },
            { name: 'Cradle to Cradle Certified', description: 'منتجات مصممة لاقتصاد دائري', year: 'المستوى الذهبي منذ 2021' },
            { name: 'ISO 14001', description: 'شهادة نظام إدارة بيئية', year: 'معتمد منذ 2017' },
            { name: 'Better Cotton Initiative', description: 'شراكة توريد قطن مستدام', year: 'عضو منذ 2020' },
            { name: 'Carbon Trust Certification', description: 'قياس وتقليل البصمة الكربونية', year: 'معتمد منذ 2022' }
          ]
        },
        carbon: {
          title: 'خفض البصمة الكربونية',
          p1: 'تشمل استراتيجيتنا الشاملة لخفض الكربون جميع جوانب عملياتنا، من اعتماد الطاقة المتجددة إلى تحسين سلسلة التوريد.',
          p2: 'استثمرنا 2.5 مليون دولار في الألواح الشمسية عبر منشآتنا، وننتج الآن 70% من احتياجاتنا من الطاقة من مصادر متجددة.',
          p3: 'من خلال تحسين العمليات والكفاءة، خفّضنا كثافة الكربون بنسبة 45% منذ 2020، ونحن على المسار نحو الحياد الكربوني في 2030.',
          cards: {
            reduction: { value: '45%', label: 'خفض الكربون منذ 2020' },
            renewable: { value: '70%', label: 'استخدام الطاقة المتجددة' }
          },
          journeyTitle: 'رحلة الحياد الكربوني',
          journey: [
            '2020: القياس الأساسي - 2,400 طن CO2',
            '2022: تحقيق 25% خفض',
            '2024: تحقيق 45% خفض',
            '2027: هدف 80% خفض',
            '2030: هدف الحياد الكربوني'
          ]
        },
        goals: {
          title: 'أهداف الاستدامة لعام 2030',
          description: 'أهداف طموحة تضعنا في موقع الريادة في تصنيع المنسوجات المستدامة.',
          items: [
            { title: 'حياد كربوني بحلول 2030', description: 'الوصول إلى صافي انبعاثات صفر عبر العمليات باستخدام الطاقة المتجددة وبرامج التعويض الكربوني.' },
            { title: 'خفض 75% من المياه', description: 'مزيد من خفض استهلاك المياه عبر تقنيات إعادة التدوير المتقدمة وتحسين العمليات.' },
            { title: 'إنتاج دائري 100%', description: 'تنفيذ تصنيع مغلق الحلقة حيث تتحول كل النفايات إلى مدخلات لمنتجات جديدة.' },
            { title: 'شفافية سلسلة التوريد', description: 'تتبّع كامل لجميع المواد من المصدر إلى المنتج النهائي مع شراكات توريد أخلاقية.' }
          ]
        },
        partnerships: {
          title: 'شراكات مستدامة',
          description: 'التعاون هو المفتاح للتغيير المنهجي. نعمل مع المورّدين والعملاء والمنظمات الصناعية لتعزيز الاستدامة عبر سلسلة قيمة المنسوجات.',
          cards: [
            { title: 'شبكة المورّدين', description: 'العمل مع أكثر من 200 مورّد مستدام معتمد حول العالم' },
            { title: 'مبادرات الصناعة', description: 'عضوية نشطة في أكثر من 15 منظمة للاستدامة' },
            { title: 'شراكات بحثية', description: 'التعاون مع 5 جامعات في ابتكار المنسوجات' }
          ],
          cta: 'انضم إلى رحلتنا نحو الاستدامة'
        }
      },
      // Wholesale Page
      wholesalePage: {
        hero: {
          title: 'حلول الجملة',
          description: 'شراكة مع BZJ جاكار للحصول على أقمشة جاكارد فاخرة بأسعار تنافسية وخدمة عالمية المستوى.',
          stats: {
            minOrder: {
              number: '50 متر+',
              label: 'الحد الأدنى للطلب'
            },
            countries: {
              number: '50+',
              label: 'دولة نخدمها'
            },
            clients: {
              number: '5000+',
              label: 'عميل راضٍ'
            }
          }
        },
        pricing: {
          title: 'خطط الأسعار بالجملة',
          description: 'اختر الخطة التي تناسب احتياجات عملك مع أسعار تنافسية وخدمات مخصصة.',
          mostPopular: 'الأكثر شيوعًا',
          labels: {
            minimumOrder: 'الحد الأدنى للطلب',
            volumeDiscount: 'خصم الحجم'
          },
          tiers: {
            premium: {
              name: 'الفئة المميزة',
              minOrder: '50 متر',
              discount: '5-10%',
              priceRange: '28-45 دولار/متر',
              benefits: [
                'مجموعة أقمشة مميزة',
                'شروط دفع قياسية 30 يوم',
                'شحن إقليمي مدرج',
                'دعم تقني أساسي',
                'تقارير اتجاهات ربعية'
              ]
            },
            standard: {
              name: 'الفئة القياسية',
              minOrder: '100 متر',
              discount: '10-15%',
              priceRange: '25-38 دولار/متر',
              benefits: [
                'وصول كامل للمجموعة',
                'شروط دفع ممتدة 45 يوم',
                'شحن دولي مجاني',
                'دعم تقني أولوية',
                'توقعات شهرية للاتجاهات',
                'مطابقة ألوان مخصصة'
              ],
              recommended: true
            },
            bulk: {
              name: 'الفئة الكبيرة',
              minOrder: '200 متر',
              discount: '15-25%',
              priceRange: '22-35 دولار/متر',
              benefits: [
                'أفضل أسعار الجملة',
                'شروط دفع مرنة 60 يوم',
                'مدير حساب مخصص',
                'دعم متقدم على مدار الساعة',
                'تصاميم حصرية مخصصة',
                'خدمات التطوير المشترك'
              ]
            }
          },
          getQuote: 'احصل على عرض سعر'
        },
        process: {
          title: 'عملية الطلب والجدول الزمني',
          description: 'عمليتنا المبسطة للجملة تضمن طلبات فعالة من الاستفسار الأولي إلى التسليم.',
          steps: [
            {
              step: '1',
              title: 'الاستفسار الأولي',
              description: 'قدم متطلباتك من خلال نموذج الاستفسار بالجملة',
              timeline: 'استجابة خلال 24 ساعة'
            },
            {
              step: '2',
              title: 'طلب عينات',
              description: 'احصل على عينات أقمشة ومواصفات مفصلة',
              timeline: '5-7 أيام عمل'
            },
            {
              step: '3',
              title: 'عرض السعر والتفاوض',
              description: 'تسعير مخصص بناءً على الكمية والمواصفات',
              timeline: '2-3 أيام عمل'
            },
            {
              step: '4',
              title: 'تأكيد الطلب',
              description: 'إنهاء تفاصيل الطلب وشروط الدفع والجدول الزمني',
              timeline: 'يوم عمل واحد'
            },
            {
              step: '5',
              title: 'الإنتاج ومراقبة الجودة',
              description: 'التصنيع مع مراقبة صارمة للجودة',
              timeline: '2-4 أسابيع'
            },
            {
              step: '6',
              title: 'الشحن والتسليم',
              description: 'لوجستيات عالمية وتأكيد التسليم',
              timeline: '1-2 أسبوع'
            }
          ]
        },
        capabilities: {
          title: 'قدرات الإنتاج العالمية',
          description: 'مرافق حديثة وشبكة لوجستية عالمية لخدمة عملائنا في جميع أنحاء العالم.',
          stats: {
            production: {
              capacity: '100,000+',
              label: 'متر/شهر'
            },
            locations: {
              count: '4',
              label: 'مراكز إنتاج'
            },
            shipping: {
              time: '72س',
              label: 'تسليم إقليمي'
            },
            international: {
              time: '7-14ي',
              label: 'دولي'
            },
            onTime: {
              rate: '99.8%',
              label: 'معدل التسليم في الوقت المحدد'
            }
          }
        },
        terms: {
          title: 'نظرة عامة على شروط الجملة',
          description: 'شروط شفافة وعادلة مصممة لبناء علاقات تجارية دائمة.',
          payment: {
            title: 'شروط الدفع',
            items: [
              'شروط دفع 30-60 يوم',
              'طرق دفع متعددة',
              'طلبات ائتمان متاحة',
              'خصومات للدفع المبكر'
            ]
          },
          policies: {
            title: 'سياسات الطلب',
            items: [
              'تطبق الحد الأدنى لكميات الطلب',
              'الطلبات المخصصة تتطلب وديعة 50%',
              'إرجاع خلال 30 يوم',
              'ضمان الجودة مدرج'
            ]
          },
          shipping: {
            title: 'الشحن والتسليم',
            items: [
              'شحن مجاني على الطلبات المؤهلة',
              'خيارات توصيل سريع',
              'شحن دولي متاح',
              'تغطية تأمينية مدرجة'
            ]
          }
        },
        testimonials: {
          title: 'قصص نجاح العملاء',
          description: 'استمع من شركاء الجملة الذين نموا أعمالهم مع BZJ جاكار.',
          clients: [
            {
              company: 'دار الأزياء النخبة',
              contact: 'سارة تشين، مديرة المشتريات',
              quote: 'كانت BZJ جاكار مورد الأقمشة الأساسي لدينا لثلاث سنوات. اتساقهم وجودتهم وخدمتهم لا مثيل لها في الصناعة.',
              orderSize: '2000+ متر سنوياً'
            },
            {
              company: 'التصميمات الداخلية الفاخرة المحدودة',
              contact: 'ماركو رودريغيز، رئيس المشترين',
              quote: 'أسعار الجملة وخدمات التصميم المخصص مكنتنا من تقديم منتجات مميزة مع الحفاظ على هوامش صحية.',
              orderSize: '500+ متر لكل مشروع'
            },
            {
              company: 'شركة العلامات المستدامة',
              contact: 'إيما طومسون، مديرة سلسلة التوريد',
              quote: 'التزامهم بالاستدامة يتماشى تماماً مع قيم علامتنا التجارية. المجموعات العضوية استثنائية.',
              orderSize: '1000+ متر ربعياً'
            }
          ]
        },
        inquiry: {
          title: 'طلب عرض سعر بالجملة',
          description: 'املأ هذا النموذج لتلقي عرض سعر مخصص بالجملة خلال 24 ساعة.',
          form: {
            companyName: 'اسم الشركة',
            contactName: 'اسم جهة الاتصال',
            email: 'البريد الإلكتروني',
            phone: 'رقم الهاتف',
            country: 'البلد',
            orderQuantity: 'كمية الطلب المتوقعة',
            collections: 'المجموعات المهتم بها',
            timeline: 'الجدول الزمني للمشروع',
            additionalInfo: 'معلومات إضافية',
            additionalInfoPlaceholder: 'يرجى مشاركة أي متطلبات محددة أو أسئلة أو تفاصيل إضافية حول مشروعك...',
            submitInquiry: 'إرسال الاستفسار',
            callSalesTeam: 'اتصل بفريق المبيعات'
          }
        }
      },
      // Contact Page
      contactPage: {
        hero: {
          title: 'تواصل معنا',
          description: 'تواصل مع فريقنا الدولي عبر مكاتبنا الإقليمية الأربعة. دعم متخصص متاح على مدار الساعة لمساعدتك في احتياجاتك من النسيج.'
        }
      },
      // Collections
      collections: {
        title: 'المجموعات المميزة',
        description: 'اكتشف مجموعات الأقمشة الأكثر شعبية، منتقاة بعناية للمصممين والمصنعين العصريين.',
        viewAll: 'عرض جميع المجموعات',
        floral: {
          name: 'مجموعة الزهور',
          description: 'أنماط نباتية أنيقة للتصاميم المتطورة'
        },
        geometric: {
          name: 'المجموعة الهندسية',
          description: 'أنماط هندسية عصرية للموضة المعاصرة'
        },
        luxury: {
          name: 'مجموعة الرفاهية',
          description: 'مواد فاخرة للإبداعات الحصرية رفيعة المستوى'
        },
        silk: {
          name: 'مجموعة الحرير',
          description: 'أفخر جاكارد الحرير بلمعة براقة'
        }
      },
      // Collections Page
      collectionsPage: {
        hero: {
          title: 'مجموعاتنا',
          description: 'استكشف مجموعة أقمشة الجاكارد الفاخرة الكاملة، المصممة لتلبية احتياجات المصممين والمصنعين المتميزين حول العالم.'
        },
        search: {
          placeholder: 'البحث في المجموعات...',
          noResults: 'لم يتم العثور على نتائج',
          noResultsDesc: 'حاول تعديل البحث أو المرشحات للعثور على ما تبحث عنه.'
        },
        categories: {
          all: 'جميع المجموعات',
          floral: 'زهور',
          geometric: 'هندسية',
          modern: 'عصرية',
          luxury: 'فاخرة',
          silk: 'حرير',
          cotton: 'قطن'
        },
        collections: {
          floral: {
            name: 'الأناقة النباتية',
            description: 'أنماط زهرية متطورة تجلب جمال الطبيعة إلى المنسوجات الفاخرة',
            features: ['زخارف نباتية معقدة', 'مزيج ألياف فاخر', 'ألوان مقاومة للبهتان', 'ملمس ناعم'],
            applications: ['الملابس المسائية', 'المنسوجات المنزلية الفاخرة', 'التنجيد عالي الجودة', 'إكسسوارات المصممين'],
            composition: '60% حرير، 40% قطن',
            weight: '320 جرام/متر مربع',
            width: '150 سم',
            care: 'التنظيف الجاف فقط'
          },
          geometric: {
            name: 'الهندسة العصرية',
            description: 'أنماط هندسية معاصرة للجمالية العصرية',
            features: ['خطوط هندسية واضحة', 'تقنية ثبات الألوان', 'مقاومة التجعد', 'بناء متين'],
            applications: ['الموضة المعاصرة', 'التصميم الداخلي التجاري', 'الأثاث العصري', 'المنسوجات المعمارية'],
            composition: '70% بوليستر، 30% قطن',
            weight: '280 جرام/متر مربع',
            width: '140 سم',
            care: 'قابل للغسل في الغسالة'
          },
          modern: {
            name: 'العصرية الحضرية',
            description: 'تصاميم بسيطة لأسلوب الحياة المعاصر',
            features: ['جمالية بسيطة', 'مواد مستدامة', 'صيانة سهلة', 'تطبيقات متنوعة'],
            applications: ['الموضة الحضرية', 'ديكور المكاتب', 'الملابس العادية', 'الديكور المعاصر'],
            composition: '80% قطن عضوي، 20% كتان',
            weight: '240 جرام/متر مربع',
            width: '145 سم',
            care: 'قابل للغسل في الغسالة، دورة لطيفة'
          },
          luxury: {
            name: 'مجموعة البرستيج',
            description: 'قمة الحرفية في المنسوجات الفاخرة',
            features: ['خيوط معدنية ثمينة', 'تفاصيل مصنوعة يدوياً', 'أنماط إصدار محدود', 'بناء بجودة متحف'],
            applications: ['الهوت كوتور', 'الضيافة الفاخرة', 'الأجنحة الرئاسية', 'قطع المجموعات'],
            composition: '70% حرير، 20% خيط ذهبي، 10% كشمير',
            weight: '380 جرام/متر مربع',
            width: '130 سم',
            care: 'التنظيف المهني فقط'
          },
          silk: {
            name: 'الحرير الطبيعي الفاخر',
            description: 'أفخر أقمشة الجاكارد الحريرية بلمعة براقة وتدلي استثنائي',
            features: ['100% حرير التوت', 'لمعة طبيعية', 'راحة قابلة للتنفس', 'خصائص مضادة للحساسية'],
            applications: ['فساتين الزفاف', 'فساتين السهرة', 'أغطية السرير الفاخرة', 'إكسسوارات رسمية'],
            composition: '100% حرير التوت',
            weight: '300 جرام/متر مربع',
            width: '140 سم',
            care: 'التنظيف الجاف مُوصى به'
          },
          cotton: {
            name: 'القطن الفاخر',
            description: 'أقمشة الجاكارد القطنية الفائقة التي تجمع بين الراحة والمتانة',
            features: ['قطن طويل التيلة', 'معالجة مقاومة الانكماش', 'ضمان ثبات الألوان', 'صيانة سهلة'],
            applications: ['الموضة العادية', 'المنسوجات المنزلية', 'ملابس الأطفال', 'الفخامة اليومية'],
            composition: '100% قطن بيما',
            weight: '260 جرام/متر مربع',
            width: '150 سم',
            care: 'قابل للغسل في الغسالة، تجفيف منخفض الحرارة'
          }
        },
        catalog: {
          title: 'حمّل الكتالوج',
          description: 'تصفح المواصفات التفصيلية والأنماط والاستخدامات لجميع المجموعات.',
          downloadPdf: 'تحميل كتالوج PDF',
          requestSamples: 'طلب عينات أقمشة'
        },
        modal: {
          viewDetails: 'عرض التفاصيل',
          keyFeatures: 'الخصائص الرئيسية',
          applications: 'التطبيقات',
          specifications: 'المواصفات',
          composition: 'التركيب',
          weight: 'الوزن',
          width: 'العرض',
          care: 'تعليمات العناية',
          inquire: 'اطلب عرض سعر',
          requestSamples: 'طلب عينات'
        },
        labels: {
          features: 'الخصائص الرئيسية',
          applications: 'التطبيقات',
          specifications: 'المواصفات',
          composition: 'التركيب',
          weight: 'الوزن',
          width: 'العرض',
          care: 'تعليمات العناية',
          requestSample: 'طلب عينة',
          downloadSpecs: 'تحميل المواصفات',
          contactSales: 'اتصل بفريق المبيعات'
        }
      },
      // Footer
      footer: {
        subtitle: 'أناقة في كل خيط',
        description: 'أقمشة جاكارد فاخرة للمشترين بالجملة والمصممين حول العالم. نصنع المنسوجات الفاخرة بجودة ورقي لا مثيل له.',
        stayUpdated: 'ابق على اطلاع',
        emailPlaceholder: 'أدخل بريدك الإلكتروني',
        subscribe: 'اشترك',
        quickLinks: 'روابط سريعة',
        contactInfo: 'معلومات الاتصال',
        followUs: 'تابعنا',
        privacyPolicy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
        copyright: '© 2025 BZJ جاكار. جميع الحقوق محفوظة.'
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

// Set document direction based on language
i18n.on('languageChanged', (lng) => {
  const isRTL = lng === 'ar';
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lng);
});

export default i18n;