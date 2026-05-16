'use client'

import { Star, Quote } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    nameEn: 'Mohammed Al-Rashid',
    nameAr: 'محمد الراشد',
    roleEn: 'Operations Manager, Al Habtoor Hotels',
    roleAr: 'مدير العمليات، فنادق الحبتور',
    quoteEn: 'Steel Tech has transformed our waste management operations. Their compactors are incredibly efficient and the support team is always responsive.',
    quoteAr: 'حولت ستيل تيك عمليات إدارة النفايات لدينا. مكابسهم فعالة بشكل لا يصدق وفريق الدعم دائمًا سريع الاستجابة.',
  },
  {
    nameEn: 'Sarah Ahmed',
    nameAr: 'سارة أحمد',
    roleEn: 'Sustainability Director, Emaar Properties',
    roleAr: 'مديرة الاستدامة، إعمار العقارية',
    quoteEn: 'The food composters have significantly reduced our environmental footprint. We are proud to partner with Steel Tech for our green initiatives.',
    quoteAr: 'قللت محولات الطعام إلى سماد بشكل كبير من بصمتنا البيئية. نحن فخورون بالشراكة مع ستيل تيك في مبادراتنا الخضراء.',
  },
  {
    nameEn: 'Khalid Hassan',
    nameAr: 'خالد حسن',
    roleEn: 'Facilities Manager, Dubai Mall',
    roleAr: 'مدير المرافق، دبي مول',
    quoteEn: 'Quality equipment and exceptional service. Steel Tech has been our trusted partner for waste management solutions for over 5 years.',
    quoteAr: 'معدات عالية الجودة وخدمة استثنائية. كانت ستيل تيك شريكنا الموثوق لحلول إدارة النفايات لأكثر من 5 سنوات.',
  },
]

export function TestimonialsSection() {
  const { dir, locale } = useLocale()

  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className={cn("text-center max-w-3xl mx-auto mb-16", dir === 'rtl' && 'text-right md:text-center')}>
          <div className="inline-flex items-center gap-2 bg-[#167D88]/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-[#167D88]">
              {locale === 'ar' ? 'آراء العملاء' : 'Client Testimonials'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#173042] mb-6 text-balance">
            {locale === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
          </h2>
          <p className="text-lg text-[#666666] text-pretty">
            {locale === 'ar'
              ? 'نفخر بخدمة الشركات الرائدة في مختلف القطاعات'
              : 'We are proud to serve leading businesses across various sectors'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#CFE0DA]/50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-[#E49E01] rounded-full flex items-center justify-center">
                  <Quote className="h-5 w-5 text-[#173042]" />
                </div>
              </div>

              {/* Stars */}
              <div className={cn("flex gap-1 mb-6 pt-4", dir === 'rtl' && 'justify-end')}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#E49E01] text-[#E49E01]" />
                ))}
              </div>

              {/* Quote */}
              <p className={cn("text-[#666666] mb-8 leading-relaxed", dir === 'rtl' && 'text-right')}>
                &ldquo;{locale === 'ar' ? testimonial.quoteAr : testimonial.quoteEn}&rdquo;
              </p>

              {/* Author */}
              <div className={cn("flex items-center gap-4", dir === 'rtl' && 'flex-row-reverse')}>
                <div className="w-12 h-12 bg-[#173042] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {(locale === 'ar' ? testimonial.nameAr : testimonial.nameEn).charAt(0)}
                  </span>
                </div>
                <div className={dir === 'rtl' ? 'text-right' : ''}>
                  <div className="font-semibold text-[#173042]">
                    {locale === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                  </div>
                  <div className="text-sm text-[#666666]">
                    {locale === 'ar' ? testimonial.roleAr : testimonial.roleEn}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-20 pt-12 border-t border-[#CFE0DA]">
          <p className="text-center text-[#999999] text-sm mb-8">
            {locale === 'ar' ? 'موثوق به من قبل الشركات الرائدة' : 'Trusted by Leading Companies'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Emaar', 'Majid Al Futtaim', 'Aldar', 'Nakheel', 'ADNOC'].map((company) => (
              <div key={company} className="text-[#384755] font-bold text-xl">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
