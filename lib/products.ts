export interface Product {
  id: string
  slug: string
  name: {
    en: string
    ar: string
  }
  category: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  image: string
  specifications: {
    label: { en: string; ar: string }
    value: string
  }[]
  detailImage?: string
  sectors: string[]
  featured?: boolean
}

export const products: Product[] = [
  // Food Composters
  {
    id: '1',
    slug: 'food-composter-50kg',
    name: {
      en: 'Food Composter MT-CC-50',
      ar: 'محولة الطعام إلى سماد MT-CC-50',
    },
    category: {
      en: 'Food Composters',
      ar: 'محولات الطعام إلى سماد',
    },
    description: {
      en: 'Compact food waste composter with 50 kg daily processing capacity. Features fully automatic PLC control with touch screen interface, deodorization system, and up to 90% waste weight reduction in 24 hours.',
      ar: 'محولة طعام إلى سماد مدمجة بسعة معالجة يومية 50 كجم. تتميز بتحكم PLC أوتوماتيكي بالكامل مع شاشة لمس ونظام إزالة الروائح وتقليل وزن النفايات بنسبة تصل إلى 90% في 24 ساعة.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/food%20composting%2050Kg.PNG-tFYRVgCIg2n0ENQT8qbttY2DndWHzB.png',
    specifications: [
      { label: { en: 'Daily Capacity', ar: 'السعة اليومية' }, value: '50 Kg/Day' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '320 Kg' },
      { label: { en: 'Machine Size', ar: 'حجم الآلة' }, value: '1,200 x 800 x 1,100 mm' },
      { label: { en: 'Power Consumption', ar: 'استهلاك الطاقة' }, value: '12 KWH/Day' },
      { label: { en: 'Control Method', ar: 'طريقة التحكم' }, value: 'Fully Automatic PLC + Touch Screen' },
      { label: { en: 'Voltage', ar: 'الجهد' }, value: '220V, 50/60Hz' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Food Processing Sites', 'Cafeterias'],
    featured: true,
  },
  {
    id: '2',
    slug: 'food-composter-100kg',
    name: {
      en: 'Food Composter MT-CC-100',
      ar: 'محولة الطعام إلى سماد MT-CC-100',
    },
    category: {
      en: 'Food Composters',
      ar: 'محولات الطعام إلى سماد',
    },
    description: {
      en: 'Advanced food waste composter with 100 kg daily processing capacity. Fully automatic PLC + Touch Screen control with microbial decomposition technology and deodorization system.',
      ar: 'محولة طعام إلى سماد متقدمة بسعة معالجة يومية 100 كجم. تحكم أوتوماتيكي بالكامل PLC + شاشة لمس مع تقنية التحلل الميكروبي ونظام إزالة الروائح.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MEDIA_241008_PIC_FoodComposting100_V.1-1twY3EA3a8qAduk51jHD81VMvli9OB.jpg',
    specifications: [
      { label: { en: 'Daily Capacity', ar: 'السعة اليومية' }, value: '100 Kg/Day' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '640 Kg' },
      { label: { en: 'Machine Size', ar: 'حجم الآلة' }, value: '1,660 x 1,300 x 1,340 mm' },
      { label: { en: 'Power Consumption', ar: 'استهلاك الطاقة' }, value: '25 KWH/Day' },
      { label: { en: 'Control Method', ar: 'طريقة التحكم' }, value: 'Fully Automatic PLC + Touch Screen' },
      { label: { en: 'Voltage', ar: 'الجهد' }, value: '380V, 50/60Hz' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Food Processing Sites'],
  },
  {
    id: '3',
    slug: 'food-composter-300kg',
    name: {
      en: 'Food Composter MT-CC-300',
      ar: 'محولة الطعام إلى سماد MT-CC-300',
    },
    category: {
      en: 'Food Composters',
      ar: 'محولات الطعام إلى سماد',
    },
    description: {
      en: 'Medium capacity food waste composter with 300 kg daily processing. Features automatic bin lifter, LCD touch screen control, and innovative HZ bacteria technology for efficient composting.',
      ar: 'محولة طعام إلى سماد متوسطة السعة بمعالجة يومية 300 كجم. تتميز برافعة حاويات أوتوماتيكية وشاشة لمس LCD وتقنية بكتيريا HZ المبتكرة للتحويل الفعال.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MEDIA_241008_PIC_FoodComposting300_V.1-C7CiSGBR1yIK2eRDDaZYMReSRGPD5t.jpg',
    specifications: [
      { label: { en: 'Daily Capacity', ar: 'السعة اليومية' }, value: '300 Kg/Day' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '1,800 Kg' },
      { label: { en: 'Machine Size', ar: 'حجم الآلة' }, value: '2,400 x 1,600 x 1,800 mm' },
      { label: { en: 'Power Consumption', ar: 'استهلاك الطاقة' }, value: '45 KWH/Day' },
      { label: { en: 'Control Method', ar: 'طريقة التحكم' }, value: 'Button + LCD Touch Screen' },
      { label: { en: 'Voltage', ar: 'الجهد' }, value: '380V, 50/60Hz' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Food Processing Sites', 'Shopping Malls'],
    featured: true,
  },
  {
    id: '4',
    slug: 'food-composter-500kg',
    name: {
      en: 'Food Composter MT-CC-500',
      ar: 'محولة الطعام إلى سماد MT-CC-500',
    },
    category: {
      en: 'Food Composters',
      ar: 'محولات الطعام إلى سماد',
    },
    description: {
      en: 'High capacity industrial food composter processing 500 kg daily. Equipped with automatic bin lifter system, advanced deodorization, and long service life with minimal maintenance.',
      ar: 'محولة طعام صناعية عالية السعة تعالج 500 كجم يومياً. مجهزة بنظام رافعة حاويات أوتوماتيكي وإزالة روائح متقدمة وعمر خدمة طويل مع صيانة قليلة.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MEDIA_241008_PIC_FoodComposting500_V.1-nzHtQulNLuuY373n6MFGatv5hZg5nn.jpg',
    specifications: [
      { label: { en: 'Daily Capacity', ar: 'السعة اليومية' }, value: '500 Kg/Day' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '2,400 Kg' },
      { label: { en: 'Machine Size', ar: 'حجم الآلة' }, value: '2,800 x 1,900 x 1,900 mm' },
      { label: { en: 'Power Consumption', ar: 'استهلاك الطاقة' }, value: '60 KWH/Day' },
      { label: { en: 'Control Method', ar: 'طريقة التحكم' }, value: 'Button + LCD Touch Screen' },
      { label: { en: 'Voltage', ar: 'الجهد' }, value: '380V, 50/60Hz' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Food Processing Sites', 'Industrial Facilities'],
  },
  {
    id: '5',
    slug: 'food-composter-1000kg',
    name: {
      en: 'Food Composter MT-CC-1000',
      ar: 'محولة الطعام إلى سماد MT-CC-1000',
    },
    category: {
      en: 'Food Composters',
      ar: 'محولات الطعام إلى سماد',
    },
    description: {
      en: 'Industrial-grade food composter with 1000 kg daily capacity. Features automatic wheelie bin lifter, 90% waste reduction in 24 hours, and advanced microbial decomposition with HZ bacteria technology.',
      ar: 'محولة طعام صناعية بسعة 1000 كجم يومياً. تتميز برافعة حاويات ذات عجلات أوتوماتيكية وتقليل النفايات بنسبة 90% في 24 ساعة وتحلل ميكروبي متقدم بتقنية بكتيريا HZ.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MEDIA_241008_PIC_FoodComposting1000_V.1-h29mYhXtY1HgfORfHmqMAeU782GdsE.jpg',
    specifications: [
      { label: { en: 'Daily Capacity', ar: 'السعة اليومية' }, value: '1,000 Kg/Day' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '3,200 Kg' },
      { label: { en: 'Machine Size', ar: 'حجم الآلة' }, value: '3,400 x 2,300 x 2,230 mm' },
      { label: { en: 'Power Consumption', ar: 'استهلاك الطاقة' }, value: '90 KWH/Day' },
      { label: { en: 'Control Method', ar: 'طريقة التحكم' }, value: 'Button + LCD Touch Screen' },
      { label: { en: 'Voltage', ar: 'الجهد' }, value: '380V, 50/60Hz' },
      { label: { en: 'Noise Level', ar: 'مستوى الضوضاء' }, value: '65 dB' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Food Processing Sites', 'Industrial Facilities', 'Shopping Malls'],
    featured: true,
  },
  // Food Digesters
  {
    id: '6',
    slug: 'food-digester-150kg',
    name: {
      en: 'Food Digester ORCA 150',
      ar: 'هاضمة بقايا الطعام ORCA 150',
    },
    category: {
      en: 'Food Digesters',
      ar: 'هاضمات الطعام',
    },
    description: {
      en: 'Compact ORCA food digester processing up to 150 kg daily. Inspired by nature, fueled by science. Efficiently breaks down food waste into grey water with minimal energy consumption.',
      ar: 'هاضمة طعام ORCA المدمجة تعالج حتى 150 كجم يومياً. مستوحاة من الطبيعة، مدعومة بالعلم. تحلل بقايا الطعام بكفاءة إلى مياه رمادية مع استهلاك طاقة قليل.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/food%20digester%20150Kg.PNG-1vJwBJVr3G6G42mKRkMsj0Ic0HFfAZ.png',
    specifications: [
      { label: { en: 'Daily Capacity', ar: 'السعة اليومية' }, value: '150 Kg/Day' },
      { label: { en: 'Hourly Capacity', ar: 'السعة بالساعة' }, value: '7 Kg/Hr' },
      { label: { en: 'Machine Size', ar: 'حجم الآلة' }, value: '920 x 740 x 1,120 mm' },
      { label: { en: 'Power Consumption', ar: 'استهلاك الطاقة' }, value: '0.45 kWh/Hr' },
      { label: { en: 'Control Method', ar: 'طريقة التحكم' }, value: 'Digital Touch Screen' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Food Processing Sites', 'Cafeterias'],
    featured: true,
  },
  {
    id: '7',
    slug: 'food-digester-250kg',
    name: {
      en: 'Food Digester ORCA 250',
      ar: 'هاضمة بقايا الطعام ORCA 250',
    },
    category: {
      en: 'Food Digesters',
      ar: 'هاضمات الطعام',
    },
    description: {
      en: 'Medium capacity ORCA food digester processing up to 250 kg daily. Features advanced aerobic digestion technology converting food waste to grey water safely discharged to standard drainage.',
      ar: 'هاضمة طعام ORCA متوسطة السعة تعالج حتى 250 كجم يومياً. تتميز بتقنية الهضم الهوائي المتقدمة لتحويل بقايا الطعام إلى مياه رمادية يمكن تصريفها بأمان.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Digester%20250kg.PNG-XdjNeiWEFgZ7Cz3cb5hIc4CNGwcKf7.png',
    specifications: [
      { label: { en: 'Daily Capacity', ar: 'السعة اليومية' }, value: '250 Kg/Day' },
      { label: { en: 'Hourly Capacity', ar: 'السعة بالساعة' }, value: '12 Kg/Hr' },
      { label: { en: 'Machine Size', ar: 'حجم الآلة' }, value: '1,420 x 890 x 1,150 mm' },
      { label: { en: 'Power Consumption', ar: 'استهلاك الطاقة' }, value: '0.55 kWh/Hr' },
      { label: { en: 'Control Method', ar: 'طريقة التحكم' }, value: 'Digital Touch Screen' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Food Processing Sites'],
  },
  {
    id: '8',
    slug: 'food-digester-500kg',
    name: {
      en: 'Food Digester ORCA 500',
      ar: 'هاضمة بقايا الطعام ORCA 500',
    },
    category: {
      en: 'Food Digesters',
      ar: 'هاضمات الطعام',
    },
    description: {
      en: 'High-capacity ORCA food digester processing up to 500 kg daily. Efficiently breaks down food waste with minimal energy consumption using advanced aerobic digestion technology.',
      ar: 'هاضمة طعام ORCA عالية السعة تعالج حتى 500 كجم يومياً. تحلل بقايا الطعام بكفاءة مع استهلاك طاقة قليل باستخدام تقنية الهضم الهوائي المتقدمة.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Digester%20500kg.PNG-hyLmpRDqFuJFBliEyqhG1sWw3YNuPf.png',
    specifications: [
      { label: { en: 'Daily Capacity', ar: 'السعة اليومية' }, value: '500 Kg/Day' },
      { label: { en: 'Hourly Capacity', ar: 'السعة بالساعة' }, value: '23 Kg/Hr' },
      { label: { en: 'Machine Size', ar: 'حجم الآلة' }, value: '1,740 x 890 x 1,250 mm' },
      { label: { en: 'Power Consumption', ar: 'استهلاك الطاقة' }, value: '0.70 kWh/Hr' },
      { label: { en: 'Control Method', ar: 'طريقة التحكم' }, value: 'Digital Touch Screen' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Food Processing Sites', 'Shopping Malls'],
    featured: true,
  },
  {
    id: '9',
    slug: 'food-digester-1000kg',
    name: {
      en: 'Food Digester ORCA 1000',
      ar: 'هاضمة بقايا الطعام ORCA 1000',
    },
    category: {
      en: 'Food Digesters',
      ar: 'هاضمات الطعام',
    },
    description: {
      en: 'Industrial-grade ORCA food digester with 1000 kg daily capacity. The largest in the ORCA series, perfect for large-scale food processing facilities, hospitals, and industrial kitchens.',
      ar: 'هاضمة طعام ORCA صناعية بسعة 1000 كجم يومياً. الأكبر في سلسلة ORCA، مثالية لمرافق معالجة الطعام الكبيرة والمستشفيات والمطابخ الصناعية.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Digester%201000kg.PNG-4Sj8oJ7wuMOsfdfGsEVoIfHNYvaZPf.png',
    specifications: [
      { label: { en: 'Daily Capacity', ar: 'السعة اليومية' }, value: '1,000 Kg/Day' },
      { label: { en: 'Hourly Capacity', ar: 'السعة بالساعة' }, value: '45 Kg/Hr' },
      { label: { en: 'Machine Size', ar: 'حجم الآلة' }, value: '2,740 x 890 x 1,250 mm' },
      { label: { en: 'Power Consumption', ar: 'استهلاك الطاقة' }, value: '1.2 kWh/Hr' },
      { label: { en: 'Control Method', ar: 'طريقة التحكم' }, value: 'Digital Touch Screen' },
    ],
    sectors: ['Hotels', 'Food Processing Sites', 'Industrial Facilities', 'Hospitals', 'Shopping Malls'],
  },
  // Compactors
  {
    id: '10',
    slug: 'micro-compactor-6cbm',
    name: {
      en: 'Micro Compactor 6 CBM',
      ar: 'مكبس ميكرو 6 م³',
    },
    category: {
      en: 'Micro Compactors',
      ar: 'المكابس الصغيرة',
    },
    description: {
      en: 'Compact swing-type micro compactor with 6 CBM capacity. Hard regular steel construction ideal for cardboard, plastic, and mixed waste processing in limited spaces.',
      ar: 'مكبس ميكرو أرجوحي مدمج بسعة 6 م³. تصنيع من الفولاذ الصلب المثالي لمعالجة الكرتون والبلاستيك والنفايات المختلطة في المساحات المحدودة.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Micro%20Compactor.PNG-PbxvZdDLlGDvq1O9dTFdqfRPOiNlUA.png',
    specifications: [
      { label: { en: 'Compactor Capacity', ar: 'سعة المكبس' }, value: '6 CBM' },
      { label: { en: 'Ram Force', ar: 'قوة المكبس' }, value: '3.2 KN' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '1,230 Kg' },
      { label: { en: 'Hooper Capacity', ar: 'سعة الفتحة' }, value: '500 L' },
      { label: { en: 'Hook Height', ar: 'ارتفاع الخطاف' }, value: '930 mm' },
      { label: { en: 'Operation Pressure', ar: 'ضغط التشغيل' }, value: '150 BAR' },
    ],
    sectors: ['Apartments', 'Hotels', 'Restaurants', 'Food Processing Sites', 'Stores'],
    featured: true,
  },
  {
    id: '11',
    slug: 'horizontal-wet-waste-compactor',
    name: {
      en: 'Horizontal Wet Waste Compactor S720',
      ar: 'مكبس النفايات الرطبة الأفقي S720',
    },
    category: {
      en: 'Horizontal Compactors',
      ar: 'المكابس الأفقية',
    },
    description: {
      en: 'Specialized horizontal compactor designed for wet waste processing. Features liquid drainage system, corrosion-resistant construction, and efficient compression for food waste and organic materials.',
      ar: 'مكبس أفقي متخصص مصمم لمعالجة النفايات الرطبة. يتميز بنظام تصريف السوائل وبناء مقاوم للتآكل وضغط فعال للنفايات الغذائية والمواد العضوية.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/S720%20Compactor.PNG-lAobN8yVM7tADL1gCF3g87CQ8tdrGE.png',
    specifications: [
      { label: { en: 'Compactor Capacity', ar: 'سعة المكبس' }, value: '7.2 CBM' },
      { label: { en: 'Ram Force', ar: 'قوة المكبس' }, value: '25 Tons' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '2,800 Kg' },
      { label: { en: 'Hooper Capacity', ar: 'سعة الفتحة' }, value: '1.2 CBM' },
      { label: { en: 'Cycle Time', ar: 'وقت الدورة' }, value: '22 Seconds' },
      { label: { en: 'Power', ar: 'القوة' }, value: '5.5 Kw' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Food Processing Sites', 'Shopping Malls', 'Hospitals'],
  },
  {
    id: '12',
    slug: 'touch-down-compactor-18cbm',
    name: {
      en: 'Touch Down Compactor 18 CBM',
      ar: 'مكبس تا��ش داون 18 م³',
    },
    category: {
      en: 'Touch Down Compactors',
      ar: 'مكابس تاتش داون',
    },
    description: {
      en: 'Heavy-duty touch down compactor with 18 CBM capacity. Features 30 ton ram force, automatic operation with one-key activation, and robust construction for continuous industrial use.',
      ar: 'مكبس تاتش داون للخدمة الشاقة بسعة 18 م³. يتميز بقوة مكبس 30 طن وتشغيل أوتوماتيكي بضغطة زر واحدة وبناء متين للاستخدام الصناعي المستمر.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13612-Hi6HGqRaZ9dUzC8EwA8j5sEJu89sVc.jpg',
    specifications: [
      { label: { en: 'Compactor Capacity', ar: 'سعة المكبس' }, value: '18 CBM' },
      { label: { en: 'Ram Force', ar: 'قوة المكبس' }, value: '30 Tons' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '3,600 Kg' },
      { label: { en: 'Hooper Capacity', ar: 'سعة الفتحة' }, value: '1.8 CBM' },
      { label: { en: 'Hook Height', ar: 'ارتفاع الخطاف' }, value: '1,570 mm' },
      { label: { en: 'Cycle Time', ar: 'وقت الدورة' }, value: '28 Seconds' },
      { label: { en: 'Power', ar: 'القوة' }, value: '7.5 Kw' },
    ],
    sectors: ['Apartments', 'Hotels', 'Restaurants', 'Food Processing Sites', 'Industrial Facilities'],
    featured: true,
  },
  {
    id: '13',
    slug: 'touch-down-compactor-24cbm',
    name: {
      en: 'Touch Down Compactor 24 CBM',
      ar: 'مكبس تاتش داون 24 م³',
    },
    category: {
      en: 'Touch Down Compactors',
      ar: 'مكابس تاتش داون',
    },
    description: {
      en: 'Large capacity touch down compactor with 24 CBM capacity. Designed for high-volume waste processing with powerful 35 ton ram force and efficient cycle times.',
      ar: 'مكبس تاتش داون كبير السعة بسعة 24 م³. مصمم لمعالجة النفايات بكميات كبيرة مع قوة مكبس 35 طن وأوقات دورة فعالة.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13612-Hi6HGqRaZ9dUzC8EwA8j5sEJu89sVc.jpg',
    specifications: [
      { label: { en: 'Compactor Capacity', ar: 'سعة المكبس' }, value: '24 CBM' },
      { label: { en: 'Ram Force', ar: 'قوة المكبس' }, value: '35 Tons' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '4,200 Kg' },
      { label: { en: 'Hooper Capacity', ar: 'سعة الفتحة' }, value: '2.4 CBM' },
      { label: { en: 'Hook Height', ar: 'ارتفاع الخطاف' }, value: '1,570 mm' },
      { label: { en: 'Cycle Time', ar: 'وقت الدورة' }, value: '32 Seconds' },
      { label: { en: 'Power', ar: 'القوة' }, value: '11 Kw' },
    ],
    sectors: ['Industrial Facilities', 'Shopping Malls', 'Distribution Centers', 'Municipalities'],
  },
  // Vertical Bailing Presses
  {
    id: '14',
    slug: 'vertical-bailing-press-15t',
    name: {
      en: 'Vertical Bailing Press VBP 15T',
      ar: 'مكبس الكرتون العمودي VBP 15T',
    },
    category: {
      en: 'Vertical Bailing Press',
      ar: 'مكابس الكرتون العمودية',
    },
    description: {
      en: 'Compact vertical bailing press for cardboard and plastic compaction. 15 ton capacity ideal for small to medium businesses with limited space requirements.',
      ar: 'مكبس عمودي مدمج لضغط الكرتون والبلاستيك. سعة 15 طن مثالية للشركات الصغيرة والمتوسطة مع متطلبات مساحة محدودة.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertical%2015T-jKzdyulmUyF2nOd7GVqxKfLZ2tg4Ny.png',
    specifications: [
      { label: { en: 'Press Force', ar: 'قوة الضغط' }, value: '15 Tons' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '1,200 Kg' },
      { label: { en: 'Bale Weight', ar: 'وزن البالة' }, value: '150-200 Kg' },
      { label: { en: 'Production Capacity', ar: 'الطاقة الإنتاجية' }, value: '400 Kg/Hr' },
      { label: { en: 'Working Pressure', ar: 'ضغط العمل' }, value: '150 BAR' },
      { label: { en: 'Power', ar: 'القوة' }, value: '4 Kw' },
    ],
    sectors: ['Stores', 'Warehouses', 'Distribution Centers', 'Recycling Facilities'],
  },
  {
    id: '15',
    slug: 'vertical-bailing-press-25t',
    name: {
      en: 'Vertical Bailing Press VBP 25T',
      ar: 'مكبس الكرتون العمودي VBP 25T',
    },
    category: {
      en: 'Vertical Bailing Press',
      ar: 'مكابس الكرتون العمودية',
    },
    description: {
      en: 'Efficient vertical bailing press for cardboard compaction. 25 ton capacity with production rate of 600 kg/hr. Ideal for medium to large volume recycling operations.',
      ar: 'مكبس عمودي فعال لضغط الكرتون. سعة 25 طن بمعدل إنتاج 600 كجم/ساعة. مثالي لعمليات إعادة التدوير متوسطة وكبيرة الحجم.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vertical25T%20%281%29-FDJ4vn8f9JAJbEDRkrVKgcJSEjEFA3.png',
    specifications: [
      { label: { en: 'Press Force', ar: 'قوة الضغط' }, value: '25 Tons' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '2,000 Kg' },
      { label: { en: 'Bale Weight', ar: 'وزن البالة' }, value: '250-300 Kg' },
      { label: { en: 'Production Capacity', ar: 'الطاقة الإنتاجية' }, value: '600 Kg/Hr' },
      { label: { en: 'Feed Opening', ar: 'فتحة التعبئة' }, value: '1,105 x 555 mm' },
      { label: { en: 'Working Pressure', ar: 'ضغط العمل' }, value: '150 BAR' },
      { label: { en: 'Power', ar: 'القوة' }, value: '5.5 Kw' },
    ],
    sectors: ['Stores', 'Warehouses', 'Distribution Centers', 'Recycling Facilities'],
    featured: true,
  },
  {
    id: '16',
    slug: 'vertical-bailing-press-60t',
    name: {
      en: 'Vertical Bailing Press VBP 60T',
      ar: 'مكبس الكرتون العمودي VBP 60T',
    },
    category: {
      en: 'Vertical Bailing Press',
      ar: 'مكابس الكرتون العمودية',
    },
    description: {
      en: 'Heavy-duty vertical bailing press with 60 ton capacity. Designed for high-volume industrial recycling operations with maximum efficiency and durability.',
      ar: 'مكبس عمودي للخدمة الشاقة بسعة 60 طن. مصمم لعمليات إعادة التدوير الصناعية ذات الحجم الكبير مع أقصى كفاءة ومتانة.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vertical%2060T-HTpHeo1ugOQas4IPN7Vqs9NTaNrYEV.png',
    specifications: [
      { label: { en: 'Press Force', ar: 'قوة الضغط' }, value: '60 Tons' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '3,500 Kg' },
      { label: { en: 'Bale Weight', ar: 'وزن البالة' }, value: '400-500 Kg' },
      { label: { en: 'Production Capacity', ar: 'الطاقة الإنتاجية' }, value: '1,200 Kg/Hr' },
      { label: { en: 'Feed Opening', ar: 'فتحة التعبئة' }, value: '1,400 x 700 mm' },
      { label: { en: 'Working Pressure', ar: 'ضغط العمل' }, value: '200 BAR' },
      { label: { en: 'Power', ar: 'القوة' }, value: '11 Kw' },
    ],
    sectors: ['Industrial Facilities', 'Distribution Centers', 'Recycling Facilities', 'Municipalities'],
  },
  // Roller Baller
  {
    id: '17',
    slug: 'roller-baller-mt641',
    name: {
      en: 'Roller Baller MT 641',
      ar: 'مكبس البالات الدائرية MT 641',
    },
    category: {
      en: 'Roller Balers',
      ar: 'مكابس البالات الدائرية',
    },
    description: {
      en: 'Compact roller baler with acoustic signal indication. Semi-automatic operation with stretch film binding. Perfect for cardboard, plastic film, and soft materials.',
      ar: 'مكبس بالات دائرية مدمج مع إشارة صوتية. تشغيل شبه أوتوماتيكي مع ربط بفيلم التمدد. مثالي للكرتون والفيلم البلاستيكي والمواد اللينة.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roller%20Baller.PNG-eJFWRG8yxubTvcevEZg6OciWQfRriJ.png',
    specifications: [
      { label: { en: 'Bale Diameter', ar: 'قطر البالة' }, value: 'Up to 400 mm' },
      { label: { en: 'Bale Weight', ar: 'وزن البالة' }, value: 'Up to 30 Kg' },
      { label: { en: 'Throughput', ar: 'الإنتاجية' }, value: 'Up to 300 Kg/h' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '540 Kg' },
      { label: { en: 'Machine Size', ar: 'حجم الآلة' }, value: '1,750 x 900 x 1,490 mm' },
      { label: { en: 'Working Principle', ar: 'آلية العمل' }, value: 'Acoustic' },
    ],
    sectors: ['Stores', 'Warehouses', 'Hotels', 'Shopping Malls'],
  },
  // Glass Crusher
  {
    id: '18',
    slug: 'glass-crushing-machine',
    name: {
      en: 'Glass Crushing Machine',
      ar: 'آلة تكسير الزجاج',
    },
    category: {
      en: 'Glass Crushers',
      ar: 'آلات تكسير الزجاج',
    },
    description: {
      en: 'Industrial glass crushing machine for efficient glass bottle recycling. Reduces glass volume by up to 80%, making storage and transportation more economical. Safety features include interlocked door and emergency stop.',
      ar: 'آلة تكسير زجاج صناعية لإعادة تدوير زجاجات الزجاج بكفاءة. تقلل حجم الزجاج بنسبة تصل إلى 80%، مما يجعل التخزين والنقل أكثر اقتصادية. تشمل ميزات السلامة باب مقفل وإيقاف طوارئ.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13611-xoPgsK3A51sygcihJSgobYZ66dW4IH.jpg',
    specifications: [
      { label: { en: 'Crushing Capacity', ar: 'سعة التكسير' }, value: '2,000 Bottles/Hr' },
      { label: { en: 'Volume Reduction', ar: 'تقليل الحجم' }, value: 'Up to 80%' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '350 Kg' },
      { label: { en: 'Machine Size', ar: 'حجم الآلة' }, value: '800 x 600 x 1,400 mm' },
      { label: { en: 'Power', ar: 'القوة' }, value: '2.2 Kw' },
      { label: { en: 'Safety Features', ar: 'ميزات السلامة' }, value: 'Interlocked Door + E-Stop' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Bars', 'Recycling Facilities', 'Event Venues'],
    featured: true,
  },
  // Screw Compactors
  {
    id: '27',
    slug: 'screw-compactor-x8-22',
    name: {
      en: 'Screw Compactor X8-22',
      ar: 'المكبس اللولبي X8-22',
    },
    category: {
      en: 'Screw Compactors',
      ar: 'المكابس اللولبية',
    },
    description: {
      en: 'Heavy-duty screw compactor model X8-22, made in Europe. Features 5,550 Nm operational torque, 20 CBM compactor capacity, and automatic one-push control. Built with Hardox high-grade steel for maximum durability and equipped with a 700L leachate tank.',
      ar: 'مكبس لولبي للخدمة الشاقة موديل X8-22، مصنوع في أوروبا. يتميز بعزم دوران تشغيلي 5,550 نيوتن متر وسعة مكبس 20 م³ وتحكم أوتوماتيكي بضغطة واحدة. مصنوع من فولاذ هاردوكس عالي الجودة لأقصى متانة ومجهز بخزان سوائل 700 لتر.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13627-Bu8xsHXtmvHYkmGeED1WzMG0PaaIPS.jpg',
    detailImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13623-lQ5x0Im3uZg8P06qHzUxwyQeqtdKRO.jpg',
    specifications: [
      { label: { en: 'Operational Torque', ar: 'عزم الدوران' }, value: '5,550 Nm' },
      { label: { en: 'Leachate Tank', ar: 'خزان السوائل' }, value: '700 L' },
      { label: { en: 'Filling Height', ar: 'ارتفاع التعبئة' }, value: '1,550 mm' },
      { label: { en: 'Screw Speed', ar: 'سرعة الدوران' }, value: '9.2 RPM' },
      { label: { en: 'Feed Opening Area', ar: 'مساحة فتحة التعبئة' }, value: '1,200 x 1,200 mm' },
      { label: { en: 'Overall Size', ar: 'الحجم الاجمالي' }, value: '5,500 x 2,400 x 2,600 mm' },
      { label: { en: 'Control', ar: 'التحكم' }, value: 'Automatic with one push' },
      { label: { en: 'Rated Power', ar: 'القوة المقدرة' }, value: '5.5 Kw' },
      { label: { en: 'Power Specs', ar: 'قوة المواصفات' }, value: '380V, 3 Phase, 50/60Hz' },
      { label: { en: 'Screw Diameter', ar: 'قطر اللولب' }, value: '500 mm' },
      { label: { en: 'Compactor Capacity', ar: 'سعة المكبس' }, value: '20 CBM' },
      { label: { en: 'Hopper Capacity', ar: 'سعة فتحة التعبئة' }, value: '1.7 CBM' },
      { label: { en: 'Machine Weight', ar: 'وزن الآلة' }, value: '1,800 (Head) + 4,100 (Container) Kg' },
    ],
    sectors: ['Hotels', 'Shopping Malls', 'Industrial Facilities', 'Distribution Centers', 'Municipalities'],
    featured: true,
  },
  // Plastic Bins
  {
    id: '19',
    slug: 'plastic-bin-240l',
    name: {
      en: 'Plastic Bin 240L',
      ar: 'حاوية بلاستيكية 240 لتر',
    },
    category: {
      en: 'Plastic Bins',
      ar: 'الحاويات البلاستيكية',
    },
    description: {
      en: 'Durable 240L plastic waste bin with wheels. DIN Standard compliant with EN840 certification. Ideal for residential areas, small businesses, and outdoor use.',
      ar: 'حاوية نفايات بلاستيكية متينة سعة 240 لتر مع عجلات. متوافقة مع معيار DIN وشهادة EN840. مثالية للمناطق السكنية والشركات الصغيرة والاستخدام الخارجي.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Plastic%20Bin%20240L.PNG-YfXRYtf31ZaJYo9MIQhYoRC4bxkgpG.png',
    specifications: [
      { label: { en: 'Capacity', ar: 'السعة' }, value: '240 L' },
      { label: { en: 'Weight', ar: 'الوزن' }, value: '14 Kg' },
      { label: { en: 'Total Width', ar: 'إجمالي العرض' }, value: '580 mm' },
      { label: { en: 'Total Depth', ar: 'إجمالي العمق' }, value: '740 mm' },
      { label: { en: 'Total Height', ar: 'إجمالي الارتفاع' }, value: '1,070 mm' },
      { label: { en: 'Wheel Diameter', ar: 'قطر العجل' }, value: '200 mm' },
    ],
    sectors: ['Apartments', 'Villas', 'Small Businesses', 'Parks'],
    featured: true,
  },
  {
    id: '20',
    slug: 'plastic-bin-360l',
    name: {
      en: 'Plastic Bin 360L',
      ar: 'حاوية بلاستيكية 360 لتر',
    },
    category: {
      en: 'Plastic Bins',
      ar: 'الحاويات البلاستيكية',
    },
    description: {
      en: 'Medium capacity 360L plastic waste bin with robust construction. EN840 compliant with ergonomic handles and smooth-rolling wheels for easy maneuvering.',
      ar: 'حاوية نفايات بلاستيكية متوسطة السعة 360 لتر مع بناء متين. متوافقة مع EN840 مع مقابض مريحة وعجلات سلسة للتنقل السهل.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Plastic%20Bin%20360L.PNG-Re7ODFAPFrEP6isFs1g8tmvGNRgnTg.png',
    specifications: [
      { label: { en: 'Capacity', ar: 'السعة' }, value: '360 L' },
      { label: { en: 'Weight', ar: 'الوزن' }, value: '18 Kg' },
      { label: { en: 'Total Width', ar: 'إجمالي العرض' }, value: '620 mm' },
      { label: { en: 'Total Depth', ar: 'إجمالي العمق' }, value: '850 mm' },
      { label: { en: 'Total Height', ar: 'إجمالي الارتفاع' }, value: '1,100 mm' },
      { label: { en: 'Wheel Diameter', ar: 'قطر العجل' }, value: '200 mm' },
    ],
    sectors: ['Apartments', 'Hotels', 'Restaurants', 'Commercial Buildings'],
  },
  {
    id: '21',
    slug: 'plastic-bin-660l',
    name: {
      en: 'Plastic Bin 660L',
      ar: 'حاوية بلاستيكية 660 لتر',
    },
    category: {
      en: 'Plastic Bins',
      ar: 'الحاويات البلاستيكية',
    },
    description: {
      en: 'Large capacity 660L plastic waste bin for commercial and industrial use. Features four-wheel caster design for stability and ease of movement.',
      ar: 'حاوية نفايات بلاستيك��ة كبيرة السعة 660 لتر للاستخدام التجاري والصناعي. تتميز بتصميم أربع عجلات للثبات وسهولة الحركة.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Plastic%20Bin%20660L.PNG-Otwa7Z3yLpLaQ5OreUThyv9hQparaY.png',
    specifications: [
      { label: { en: 'Capacity', ar: 'السعة' }, value: '660 L' },
      { label: { en: 'Weight', ar: 'الوزن' }, value: '50 Kg' },
      { label: { en: 'Total Width', ar: 'إجمالي العرض' }, value: '1,373 mm' },
      { label: { en: 'Total Depth', ar: 'إجمالي العمق' }, value: '780 mm' },
      { label: { en: 'Total Height', ar: 'إجمالي الارتفاع' }, value: '1,213 mm' },
      { label: { en: 'Max Weight', ar: 'الحد الأقصى للوزن' }, value: '310 Kg' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Shopping Malls', 'Industrial Facilities'],
  },
  {
    id: '22',
    slug: 'plastic-bin-1100l',
    name: {
      en: 'Plastic Bin 1100L',
      ar: 'حاوية بلاستيكية 1100 لتر',
    },
    category: {
      en: 'Plastic Bins',
      ar: 'الحاويات البلاستيكية',
    },
    description: {
      en: 'High-capacity 1100L plastic waste bin, DIN Standard with EN840 and RAL-GZ 951/1 compliance. Perfect for high-volume waste collection in commercial settings.',
      ar: 'حاوية نفايات بلاستيكية عالية السعة 1100 لتر، معيار DIN مع توافق EN840 و RAL-GZ 951/1. مثالية لجمع النفايات بكميات كبيرة في البيئات التجارية.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Plastic%20Bin%201100L.PNG-BlhvOXocxLCVIOu986hEdBwd42pDXC.png',
    specifications: [
      { label: { en: 'Capacity', ar: 'السعة' }, value: '1,100 L' },
      { label: { en: 'Weight', ar: 'الوزن' }, value: '105 Kg' },
      { label: { en: 'Total Width', ar: 'إجمالي العرض' }, value: '1,373 mm' },
      { label: { en: 'Total Depth', ar: 'إجمالي العمق' }, value: '1,260 mm' },
      { label: { en: 'Total Height', ar: 'إجمالي الارتفاع' }, value: '1,057 mm' },
      { label: { en: 'Max Weight', ar: 'الحد الأقصى للوزن' }, value: '510 Kg' },
      { label: { en: 'Wheel Diameter', ar: 'قطر العجل' }, value: '200 mm' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Shopping Malls', 'Industrial Facilities', 'Municipalities'],
    featured: true,
  },
  // Metal Bins
  {
    id: '23',
    slug: 'metal-bin-360l',
    name: {
      en: 'Metal Bin 360L',
      ar: 'حاوية معدنية 360 لتر',
    },
    category: {
      en: 'Metal Bins',
      ar: 'الحاويات المعدنية',
    },
    description: {
      en: 'Durable galvanized steel 360L metal waste bin with plastic lid. Built for heavy-duty outdoor use with excellent corrosion resistance.',
      ar: 'حاوية نفايات معدنية متينة من الفولاذ المجلفن سعة 360 لتر مع غطاء بلاستيكي. مصممة للاستخدام الخارجي الشاق مع مقاومة ممتازة للتآكل.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metal%20bin%20360L.PNG-SkCy8Olu24kFyispeRdYd3TYLYeF9g.png',
    specifications: [
      { label: { en: 'Capacity', ar: 'السعة' }, value: '360 L' },
      { label: { en: 'Weight', ar: 'الوزن' }, value: '45 Kg' },
      { label: { en: 'Total Width', ar: 'إجمالي العرض' }, value: '600 mm' },
      { label: { en: 'Total Depth', ar: 'إجمالي العمق' }, value: '740 mm' },
      { label: { en: 'Total Height', ar: 'إجمالي الارتفاع' }, value: '1,000 mm' },
      { label: { en: 'Material', ar: 'المادة' }, value: 'Galvanized Steel' },
    ],
    sectors: ['Parks', 'Streets', 'Commercial Areas', 'Industrial Sites'],
  },
  {
    id: '24',
    slug: 'metal-bin-660l',
    name: {
      en: 'Metal Bin 660L',
      ar: 'حاوية معدنية 660 لتر',
    },
    category: {
      en: 'Metal Bins',
      ar: 'الحاويات المعدنية',
    },
    description: {
      en: 'Heavy-duty galvanized steel 660L metal waste bin with four casters. Designed for commercial and municipal waste collection with robust construction.',
      ar: 'حاوية نفايات معدنية من الفولاذ المجلفن للخدمة الشاقة سعة 660 لتر مع أربع عجلات. مصممة لجمع النفايات التجارية والبلدية مع بناء متين.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metal%20Bin%20660L.PNG-SI8KDv3TdNrHPJlS3NnmHpclaLQYjP.png',
    specifications: [
      { label: { en: 'Capacity', ar: 'السعة' }, value: '660 L' },
      { label: { en: 'Weight', ar: 'الوزن' }, value: '75 Kg' },
      { label: { en: 'Total Width', ar: 'إجمالي العرض' }, value: '1,360 mm' },
      { label: { en: 'Total Depth', ar: 'إجمالي العمق' }, value: '770 mm' },
      { label: { en: 'Total Height', ar: 'إجمالي الارتفاع' }, value: '1,140 mm' },
      { label: { en: 'Material', ar: 'المادة' }, value: 'Galvanized Steel' },
    ],
    sectors: ['Hotels', 'Commercial Buildings', 'Municipalities', 'Industrial Sites'],
  },
  {
    id: '25',
    slug: 'metal-bin-1100l',
    name: {
      en: 'Metal Bin 1100L',
      ar: 'حاوية معدنية 1100 لتر',
    },
    category: {
      en: 'Metal Bins',
      ar: 'الحاويات المعدنية',
    },
    description: {
      en: 'Industrial-grade galvanized steel 1100L metal waste bin with SteelTech branding. Features embossed panels for added strength and durability.',
      ar: 'حاوية نفايات معدنية صناعية من الفولاذ المجلفن سعة 1100 لتر مع علامة SteelTech. تتميز بألواح منقوشة لقوة ومتانة إضافية.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metal%20bin%201100L-Q2QJm4hgSydoNsP5ZSmZQ62ApozPjo.png',
    specifications: [
      { label: { en: 'Capacity', ar: 'السعة' }, value: '1,100 L' },
      { label: { en: 'Weight', ar: 'الوزن' }, value: '125 Kg' },
      { label: { en: 'Total Width', ar: 'إجمالي العرض' }, value: '1,360 mm' },
      { label: { en: 'Total Depth', ar: 'إجمالي العمق' }, value: '780 mm' },
      { label: { en: 'Total Height', ar: 'إجمالي الارتفاع' }, value: '1,240 mm' },
      { label: { en: 'Max Weight', ar: 'الحد الأقصى للوزن' }, value: '440 Kg' },
      { label: { en: 'Wheel Diameter', ar: 'قطر العجل' }, value: '200 mm' },
    ],
    sectors: ['Hotels', 'Restaurants', 'Shopping Malls', 'Industrial Facilities', 'Municipalities'],
    featured: true,
  },
  {
    id: '26',
    slug: 'metal-bin-1700l',
    name: {
      en: 'Metal Bin 1700L',
      ar: 'حاوية معدنية 1700 لتر',
    },
    category: {
      en: 'Metal Bins',
      ar: 'الحاويات المعدنية',
    },
    description: {
      en: 'Extra-large 1700L galvanized steel metal waste bin for high-volume waste collection. Ideal for municipalities, large commercial facilities, and industrial applications.',
      ar: 'حاوية نفايات معدنية من الفولاذ المجلفن كبيرة جداً سعة 1700 لتر لجمع النفايات بكميات كبيرة. مثالية للبلديات والمرافق التجارية الكبيرة والتطبيقات الصناعية.',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metal%20Bin%201700L.PNG-mW7xMIzXC7kBvQ4FfGlrBaesjIKmMd.png',
    specifications: [
      { label: { en: 'Capacity', ar: 'السعة' }, value: '1,700 L' },
      { label: { en: 'Weight', ar: 'الوزن' }, value: '180 Kg' },
      { label: { en: 'Total Width', ar: 'إجمالي العرض' }, value: '1,900 mm' },
      { label: { en: 'Total Depth', ar: 'إجمالي العمق' }, value: '1,100 mm' },
      { label: { en: 'Total Height', ar: 'إجمالي الارتفاع' }, value: '1,350 mm' },
      { label: { en: 'Max Weight', ar: 'الحد الأقصى للوزن' }, value: '680 Kg' },
      { label: { en: 'Material', ar: 'المادة' }, value: 'Galvanized Steel' },
    ],
    sectors: ['Municipalities', 'Industrial Facilities', 'Construction Sites', 'Distribution Centers'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category.en.toLowerCase() === category.toLowerCase())
}

export const categories = [
  { en: 'Plastic Bins', ar: 'الحاويات البلاستيكية' },
  { en: 'Metal Bins', ar: 'الحاويات المعدنية' },
  { en: 'Food Composters', ar: 'محولات الطعام إلى سماد' },
  { en: 'Food Digesters', ar: 'هاضمات الطعام' },
  { en: 'Micro Compactors', ar: 'المكابس الصغيرة' },
  { en: 'Horizontal Compactors', ar: 'المكابس الأفقية' },
  { en: 'Touch Down Compactors', ar: 'مكابس تاتش داون' },
  { en: 'Vertical Bailing Press', ar: 'مكابس الكرتون العمودية' },
  { en: 'Roller Balers', ar: 'مكابس البالات الدائرية' },
  { en: 'Glass Crushers', ar: 'آلات تكسير الزجاج' },
  { en: 'Screw Compactors', ar: 'المكابس اللولبية' },
]
