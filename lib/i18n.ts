export const locales = ['en', 'ar'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      products: 'Products',
      contact: 'Contact',
      requestQuote: 'Request Quote',
    },
    // Hero
    hero: {
      title: 'A Better Waste Management Solutions',
      subtitle: 'Leading the industry in sustainable waste management, offering innovative products and services that contribute to a cleaner, greener, and more sustainable future.',
      cta: 'Request a Quote',
      secondary: 'Explore Products',
    },
    // About
    about: {
      title: 'About Steel Tech',
      subtitle: 'Engineering Excellence Since 2011',
      description: 'Steel Tech Engineers harnesses its extensive operational experience and specialized engineering skills to supply meticulously crafted waste management equipment.',
      vision: {
        title: 'Vision',
        text: 'To be the leader in sustainable waste management, driving innovation for a greener future.',
      },
      mission: {
        title: 'Mission',
        text: 'To lead the industry in sustainable waste management, offering innovative products and services that contribute to a cleaner, greener, and more sustainable future.',
      },
      values: {
        title: 'Our Values',
        sustainability: {
          title: 'Sustainability',
          text: 'Committed to eco-friendly practices that reduce environmental impact.',
        },
        innovation: {
          title: 'Innovation',
          text: 'Continuously developing cutting-edge waste management solutions.',
        },
        integrity: {
          title: 'Integrity',
          text: 'Operating with honesty, transparency, and respect for all stakeholders.',
        },
      },
    },
    // Services
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive Waste Management Solutions',
      collection: {
        title: 'Waste Collection',
        description: 'Efficient waste collection services tailored to your business needs.',
      },
      recycling: {
        title: 'Recycling',
        description: 'Advanced recycling solutions to minimize environmental impact.',
      },
      treatment: {
        title: 'Waste Treatment',
        description: 'State-of-the-art waste treatment and processing facilities.',
      },
      custom: {
        title: 'Custom Solutions',
        description: 'Bespoke engineering solutions for unique waste management challenges.',
      },
    },
    // Products
    products: {
      title: 'Our Products',
      subtitle: 'Quality Equipment for Efficient Waste Management',
      viewDetails: 'View Details',
      requestQuote: 'Request Quote',
      specifications: 'Specifications',
      sectors: 'Sectors',
      saleRental: 'Available for Sale & Rental',
    },
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        company: 'Company Name',
        message: 'Your Message',
        submit: 'Send Message',
      },
      info: {
        address: 'United Arab Emirates, Sharjah',
        phone: '+971 6 544 9361',
        email: 'Info@steeltechnology.ae',
        website: 'www.steeltechnology.ae',
      },
    },
    // Footer
    footer: {
      tagline: 'Cleaning the World and Recycling Life',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },
    // Common
    common: {
      learnMore: 'Learn More',
      readMore: 'Read More',
      viewAll: 'View All',
      back: 'Back',
    },
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      products: 'المنتجات',
      contact: 'اتصل بنا',
      requestQuote: 'طلب عرض سعر',
    },
    // Hero
    hero: {
      title: 'حلول إدارة نفايات أفضل',
      subtitle: 'قيادة الصناعة في الإدارة المستدامة للنفايات، وتقديم منتجات وخدمات مبتكرة تساهم في مستقبل أنظف وأكثر اخضراراً واستدامة.',
      cta: 'طلب عرض سعر',
      secondary: 'استكشف المنتجات',
    },
    // About
    about: {
      title: 'عن ستيل تيك',
      subtitle: 'التميز الهندسي منذ 2011',
      description: 'تسخر شركة ستيل تيك خبرتها التشغيلية الواسعة ومهاراتها الهندسية المتخصصة لتوفير معدات إدارة النفايات المصممة بدقة.',
      vision: {
        title: 'رؤيتنا',
        text: 'أن نكون الشركة الرائدة في مجال إدارة النفايات، ودفع الابتكار من أجل المستقبل.',
      },
      mission: {
        title: 'رسالتنا',
        text: 'قيادة الصناعة في الإدارة المستدامة للنفايات، وتقديم منتجات وخدمات مبتكرة تساهم في مستقبل أنظف وأكثر اخضراراً واستدامة.',
      },
      values: {
        title: 'قيمنا',
        sustainability: {
          title: 'الاستدامة',
          text: 'الالتزام بالممارسات الصديقة للبيئة التي تقلل من التأثير البيئي.',
        },
        innovation: {
          title: 'الابتكار',
          text: 'التطوير المستمر لحلول إدارة النفايات المتطورة.',
        },
        integrity: {
          title: 'النزاهة',
          text: 'العمل بأمانة وشفافية واحترام لجميع أصحاب المصلحة.',
        },
      },
    },
    // Services
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول شاملة لإدارة النفايات',
      collection: {
        title: 'جمع النفايات',
        description: 'خدمات جمع النفايات الفعالة المصممة لتلبية احتياجات عملك.',
      },
      recycling: {
        title: 'إعادة التدوير',
        description: 'حلول إعادة التدوير المتقدمة لتقليل التأثير البيئي.',
      },
      treatment: {
        title: 'معالجة النفايات',
        description: 'مرافق معالجة النفايات الحديثة.',
      },
      custom: {
        title: 'حلول مخصصة',
        description: 'حلول هندسية مخصصة لتحديات إدارة النفايات الفريدة.',
      },
    },
    // Products
    products: {
      title: 'منتجاتنا',
      subtitle: 'معدات عالية الجودة لإدارة النفايات بكفاءة',
      viewDetails: 'عرض التفاصيل',
      requestQuote: 'طلب عرض سعر',
      specifications: 'المواصفات',
      sectors: 'القطاعات',
      saleRental: 'متوفر للبيع والإيجار',
    },
    // Contact
    contact: {
      title: 'اتصل بنا',
      subtitle: 'تواصل مع فريقنا',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        company: 'اسم الشركة',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
      },
      info: {
        address: 'الإمارات العربية المتحدة، الشارقة',
        phone: '+971 6 544 9361',
        email: 'Info@steeltechnology.ae',
        website: 'www.steeltechnology.ae',
      },
    },
    // Footer
    footer: {
      tagline: 'تنظيف العالم وإعادة تدوير الحياة',
      quickLinks: 'روابط سريعة',
      contactInfo: 'معلومات الاتصال',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة.',
    },
    // Common
    common: {
      learnMore: 'اعرف المزيد',
      readMore: 'اقرأ المزيد',
      viewAll: 'عرض الكل',
      back: 'رجوع',
    },
  },
}

export function getTranslations(locale: Locale) {
  return translations[locale]
}
