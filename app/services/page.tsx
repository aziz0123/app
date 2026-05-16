'use client'

import Link from 'next/link'
import { Truck, Recycle, Factory, Wrench, Check, ArrowRight, Building2, Hotel, Utensils, Store, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/locale-context'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Truck,
    color: 'bg-[#167D88]',
    titleEn: 'Waste Collection',
    titleAr: 'جمع النفايات',
    descEn: 'Efficient waste collection services tailored to your business needs. Our range of plastic and metal bins meets DIN standards with EN840 and RAL-GZ 951/1 compliance.',
    descAr: 'خدمات جمع النفايات الفعالة المصممة لتلبية احتياجات عملك. مجموعتنا من الحاويات البلاستيكية والمعدنية تلبي معايير DIN مع الامتثال لـ EN840 و RAL-GZ 951/1.',
    features: [
      { en: 'Plastic bins (240L to 1100L)', ar: 'حاويات بلاستيكية (240 إلى 1100 لتر)' },
      { en: 'Metal bins (360L to 1700L)', ar: 'حاويات معدنية (360 إلى 1700 لتر)' },
      { en: 'TUV Rheinland certified', ar: 'معتمدة من TUV Rheinland' },
      { en: 'Multiple wheel configurations', ar: 'تكوينات عجلات متعددة' },
    ],
  },
  {
    icon: Recycle,
    color: 'bg-[#7DAD3F]',
    titleEn: 'Recycling Solutions',
    titleAr: 'حلول إعادة التدوير',
    descEn: 'Advanced recycling solutions to minimize environmental impact. Our vertical bailing presses and roller balers efficiently process cardboard, plastic, and other recyclables.',
    descAr: 'حلول إعادة التدوير المتقدمة لتقليل التأثير البيئي. مكابس الكرتون العمودية ومكابس البالات الدائرية تعالج بكفاءة الكرتون والبلاستيك والمواد القابلة لإعادة التدوير.',
    features: [
      { en: 'Vertical bailing presses (15T - 60T)', ar: 'مكابس الكرتون العمودية (15 - 60 طن)' },
      { en: 'Roller balers with acoustic indication', ar: 'مكابس البالات مع إشارة صوتية' },
      { en: 'Production up to 1 Ton/Hr', ar: 'إنتاجية حتى 1 طن/ساعة' },
      { en: 'Semi-automatic operation', ar: 'تشغيل شبه أوتوماتيكي' },
    ],
  },
  {
    icon: Factory,
    color: 'bg-[#E49E01]',
    titleEn: 'Waste Treatment',
    titleAr: 'معالجة النفايات',
    descEn: 'State-of-the-art waste treatment and processing facilities. Our compactors reduce waste volume significantly, minimizing storage and transportation costs.',
    descAr: 'مرافق معالجة النفايات الحديثة. تقلل مكابسنا من حجم النفايات بشكل كبير، مما يقلل من تكاليف التخزين والنقل.',
    features: [
      { en: 'Bin compactors (1.1 - 2 CBM)', ar: 'مكابس الحاويات (1.1 - 2 م³)' },
      { en: 'Micro compactors (6 CBM)', ar: 'المكابس الصغيرة (6 م³)' },
      { en: 'Touch down compactors (18-24 CBM)', ar: 'مكابس اللمس الأرجوحية (18-24 م³)' },
      { en: 'Horizontal liquid press (20 CBM)', ar: 'المكبس الأفقي للسوائل (20 م³)' },
    ],
  },
  {
    icon: Wrench,
    color: 'bg-[#1768B4]',
    titleEn: 'Custom Solutions',
    titleAr: 'حلول مخصصة',
    descEn: 'Bespoke engineering solutions for unique waste management challenges. Our food composters and digesters convert organic waste into valuable compost.',
    descAr: 'حلول هندسية مخصصة لتحديات إدارة النفايات الفريدة. محولات الطعام إلى سماد والهاضمات تحول النفايات العضوية إلى سماد قيم.',
    features: [
      { en: 'Food composters (50kg - 1000kg/day)', ar: 'محولات الطعام (50 - 1000 كجم/يوم)' },
      { en: 'Food digesters (150kg - 1000kg/day)', ar: 'هاضمات الطعام (150 - 1000 كجم/يوم)' },
      { en: 'Fully automatic PLC control', ar: 'تحكم أوتوماتيكي بالكامل PLC' },
      { en: 'Energy efficient operation', ar: 'تشغيل موفر للطاقة' },
    ],
  },
]

const sectors = [
  { icon: Building2, nameEn: 'Apartments', nameAr: 'الشقق', color: 'bg-[#173042]' },
  { icon: Hotel, nameEn: 'Hotels', nameAr: 'الفنادق', color: 'bg-[#167D88]' },
  { icon: Utensils, nameEn: 'Restaurants', nameAr: 'المطاعم', color: 'bg-[#E49E01]' },
  { icon: Store, nameEn: 'Stores', nameAr: 'المتاجر', color: 'bg-[#7DAD3F]' },
  { icon: Package, nameEn: 'Food Processing', nameAr: 'معالجة الطعام', color: 'bg-[#1768B4]' },
]

export default function ServicesPage() {
  const { t, dir, locale } = useLocale()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#173042] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className={cn("max-w-3xl", dir === 'rtl' && 'text-right mr-auto')}>
            <div className="inline-flex items-center gap-2 bg-[#167D88]/20 border border-[#167D88]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-[#7DAD3F]">
                {locale === 'ar' ? 'خدماتنا' : 'Our Services'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {t.services.title}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed text-pretty">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 items-center",
                  !isEven && 'lg:direction-rtl'
                )}
              >
                {/* Content */}
                <div className={cn(
                  !isEven && 'lg:order-2',
                  dir === 'rtl' && 'text-right'
                )}>
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
                    service.color
                  )}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#173042] mb-4">
                    {locale === 'ar' ? service.titleAr : service.titleEn}
                  </h2>
                  <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                    {locale === 'ar' ? service.descAr : service.descEn}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className={cn("flex items-center gap-3", dir === 'rtl' && 'flex-row-reverse')}>
                        <div className={cn("w-6 h-6 rounded-full flex items-center justify-center", service.color)}>
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-[#333333]">
                          {locale === 'ar' ? feature.ar : feature.en}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/products">
                    <Button className={cn("bg-[#173042] text-white hover:bg-[#173042]/90", dir === 'rtl' && 'flex-row-reverse')}>
                      {locale === 'ar' ? 'استعرض المنتجات' : 'Browse Products'}
                      <ArrowRight className={cn("h-4 w-4", dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2')} />
                    </Button>
                  </Link>
                </div>

                {/* Visual */}
                <div className={cn(
                  "bg-white rounded-2xl overflow-hidden shadow-sm border border-[#CFE0DA]/50",
                  !isEven && 'lg:order-1'
                )}>
                  <div className={cn("aspect-[4/3] flex items-center justify-center p-8", service.color, 'bg-opacity-10')}>
                    <div className="text-center">
                      <div className={cn("w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-6", service.color)}>
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#173042]">
                        {locale === 'ar' ? service.titleAr : service.titleEn}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 lg:py-28 bg-[#173042]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className={cn("text-center max-w-3xl mx-auto mb-16", dir === 'rtl' && 'text-right md:text-center')}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              {locale === 'ar' ? 'القطاعات التي نخدمها' : 'Sectors We Serve'}
            </h2>
            <p className="text-lg text-white/70 text-pretty">
              {locale === 'ar'
                ? 'نقدم حلول إدارة نفايات متخصصة لمختلف القطاعات'
                : 'We provide specialized waste management solutions for various sectors'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors"
                >
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4", sector.color)}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {locale === 'ar' ? sector.nameAr : sector.nameEn}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#173042] mb-6 text-balance">
            {locale === 'ar'
              ? 'هل تبحث عن حل مخصص؟'
              : 'Looking for a Custom Solution?'}
          </h2>
          <p className="text-lg text-[#666666] mb-8 text-pretty">
            {locale === 'ar'
              ? 'تواصل مع فريقنا الهندسي لمناقشة متطلباتك الخاصة'
              : 'Contact our engineering team to discuss your specific requirements'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#E49E01] text-[#173042] font-semibold hover:bg-[#E49E01]/90 h-14 px-8">
                {t.nav.requestQuote}
                <ArrowRight className={cn("h-5 w-5", dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2')} />
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-[#173042] text-[#173042] hover:bg-[#173042] hover:text-white h-14 px-8">
                {locale === 'ar' ? 'استعرض المنتجات' : 'Browse Products'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
