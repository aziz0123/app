'use client'

import { Target, Eye, Heart, Leaf, Lightbulb, Shield, Award, Users } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { cn } from '@/lib/utils'

const timeline = [
  {
    year: '2011',
    titleEn: 'Company Founded',
    titleAr: 'تأسيس الشركة',
    descEn: 'Steel Tech Engineers was established in Sharjah, UAE, with a vision to revolutionize waste management.',
    descAr: 'تأسست ستيل تيك في الشارقة، الإمارات، برؤية لإحداث ثورة في إدارة النفايات.',
  },
  {
    year: '2015',
    titleEn: 'Expanded Operations',
    titleAr: 'توسع العمليات',
    descEn: 'Grew our product line to include advanced compactors and expanded to serve hotels and retail sectors.',
    descAr: 'توسعت خطوط منتجاتنا لتشمل مكابس متقدمة وامتدت لخدمة قطاعات الفنادق والتجزئة.',
  },
  {
    year: '2018',
    titleEn: 'Food Waste Solutions',
    titleAr: 'حلول نفايات الطعام',
    descEn: 'Introduced food composters and digesters, pioneering sustainable food waste management in the region.',
    descAr: 'قدمنا محولات الطعام إلى سماد والهاضمات، رائدين في إدارة نفايات الطعام المستدامة في المنطقة.',
  },
  {
    year: '2024',
    titleEn: 'Industry Leadership',
    titleAr: 'قيادة الصناعة',
    descEn: 'Now serving 500+ clients with certified, innovative waste management solutions across the UAE.',
    descAr: 'نخدم الآن أكثر من 500 عميل بحلول إدارة نفايات معتمدة ومبتكرة في جميع أنحاء الإمارات.',
  },
]

const certifications = [
  { name: 'DIN Standard', desc: 'Lifting Equipment' },
  { name: 'EN840', desc: 'Safety Standard' },
  { name: 'RAL-GZ 951/1', desc: 'Compliance Testing' },
  { name: 'TUV Rheinland', desc: 'LGA Products, Germany' },
]

export default function AboutPage() {
  const { t, dir, locale } = useLocale()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#173042] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className={cn("max-w-3xl", dir === 'rtl' && 'text-right mr-auto')}>
            <div className="inline-flex items-center gap-2 bg-[#167D88]/20 border border-[#167D88]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-[#7DAD3F]">
                {locale === 'ar' ? 'من نحن' : 'About Us'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {t.about.title}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed text-pretty">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#CFE0DA]/50">
              <div className="w-14 h-14 bg-[#167D88] rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className={cn("text-2xl font-bold text-[#173042] mb-4", dir === 'rtl' && 'text-right')}>
                {t.about.vision.title}
              </h3>
              <p className={cn("text-[#666666] leading-relaxed", dir === 'rtl' && 'text-right')}>
                {t.about.vision.text}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#CFE0DA]/50">
              <div className="w-14 h-14 bg-[#E49E01] rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-[#173042]" />
              </div>
              <h3 className={cn("text-2xl font-bold text-[#173042] mb-4", dir === 'rtl' && 'text-right')}>
                {t.about.mission.title}
              </h3>
              <p className={cn("text-[#666666] leading-relaxed", dir === 'rtl' && 'text-right')}>
                {t.about.mission.text}
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#CFE0DA]/50">
              <div className="w-14 h-14 bg-[#7DAD3F] rounded-xl flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className={cn("text-2xl font-bold text-[#173042] mb-4", dir === 'rtl' && 'text-right')}>
                {t.about.values.title}
              </h3>
              <ul className={cn("space-y-3 text-[#666666]", dir === 'rtl' && 'text-right')}>
                <li className="flex items-start gap-2">
                  <Leaf className={cn("h-5 w-5 text-[#7DAD3F] shrink-0 mt-0.5", dir === 'rtl' && 'order-last')} />
                  <span><strong>{t.about.values.sustainability.title}:</strong> {t.about.values.sustainability.text}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lightbulb className={cn("h-5 w-5 text-[#E49E01] shrink-0 mt-0.5", dir === 'rtl' && 'order-last')} />
                  <span><strong>{t.about.values.innovation.title}:</strong> {t.about.values.innovation.text}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className={cn("h-5 w-5 text-[#167D88] shrink-0 mt-0.5", dir === 'rtl' && 'order-last')} />
                  <span><strong>{t.about.values.integrity.title}:</strong> {t.about.values.integrity.text}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className={cn("text-center max-w-3xl mx-auto mb-16", dir === 'rtl' && 'text-right md:text-center')}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#173042] mb-6 text-balance">
              {locale === 'ar' ? 'رحلتنا' : 'Our Journey'}
            </h2>
            <p className="text-lg text-[#666666] text-pretty">
              {locale === 'ar'
                ? 'من الرؤية إلى الابتكار المستدام - قصة ستيل تيك'
                : 'From vision to sustainable innovation - The Steel Tech story'}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#CFE0DA] hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={cn(
                    "relative grid md:grid-cols-2 gap-8 items-center",
                    index % 2 === 0 ? '' : 'md:direction-rtl'
                  )}
                >
                  {/* Content */}
                  <div className={cn(
                    "bg-[#F5F5F5] rounded-2xl p-8",
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:order-2',
                    dir === 'rtl' && 'text-right'
                  )}>
                    <div className="inline-flex items-center gap-2 bg-[#E49E01]/10 rounded-full px-4 py-2 mb-4">
                      <span className="text-sm font-bold text-[#E49E01]">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#173042] mb-3">
                      {locale === 'ar' ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-[#666666] leading-relaxed">
                      {locale === 'ar' ? item.descAr : item.descEn}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className={cn(
                    "hidden md:flex justify-center",
                    index % 2 === 0 ? '' : 'md:order-1'
                  )}>
                    <div className="w-4 h-4 bg-[#167D88] rounded-full ring-4 ring-white shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-[#173042]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className={cn("text-center max-w-3xl mx-auto mb-16", dir === 'rtl' && 'text-right md:text-center')}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              {locale === 'ar' ? 'الشهادات والمعايير' : 'Certifications & Standards'}
            </h2>
            <p className="text-lg text-white/70 text-pretty">
              {locale === 'ar'
                ? 'منتجاتنا حاصلة على شهادات عالمية لضمان أعلى معايير الجودة والسلامة'
                : 'Our products are certified to meet the highest international quality and safety standards'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 bg-[#E49E01] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-[#173042]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-white/60">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Expertise */}
      <section className="py-20 lg:py-28 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={dir === 'rtl' ? 'text-right lg:order-2' : ''}>
              <div className="inline-flex items-center gap-2 bg-[#167D88]/10 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-[#167D88]">
                  {locale === 'ar' ? 'فريقنا' : 'Our Team'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#173042] mb-6 text-balance">
                {locale === 'ar' ? 'خبراء في الهندسة' : 'Engineering Experts'}
              </h2>
              <p className="text-lg text-[#666666] mb-8 leading-relaxed text-pretty">
                {locale === 'ar'
                  ? 'يضم فريقنا مهندسين ماهرين يتفوقون في حل المشكلات، وإنشاء آلات صديقة للمستخدم مع مكونات متينة مصممة لتحمل البيئات الصعبة.'
                  : 'Our team comprises skilled engineers who excel in problem-solving, creating ergonomic-friendly machines with durable components designed to withstand demanding environments.'}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-[#E49E01] mb-2">50+</div>
                  <div className="text-[#666666]">{locale === 'ar' ? 'منتج' : 'Products'}</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-[#E49E01] mb-2">500+</div>
                  <div className="text-[#666666]">{locale === 'ar' ? 'عميل' : 'Clients'}</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-[#E49E01] mb-2">13+</div>
                  <div className="text-[#666666]">{locale === 'ar' ? 'سنة' : 'Years'}</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-[#E49E01] mb-2">5+</div>
                  <div className="text-[#666666]">{locale === 'ar' ? 'قطاعات' : 'Sectors'}</div>
                </div>
              </div>
            </div>

            <div className={cn("bg-[#173042] rounded-2xl p-10", dir === 'rtl' ? 'lg:order-1' : '')}>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#167D88] rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className={dir === 'rtl' ? 'text-right' : ''}>
                    <h4 className="text-white font-semibold mb-2">
                      {locale === 'ar' ? 'ضمان الجودة' : 'Quality Assurance'}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {locale === 'ar'
                        ? 'عمليات اختبار صارمة تضمن أعلى المواصفات'
                        : 'Rigorous testing processes ensure highest specifications'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E49E01] rounded-xl flex items-center justify-center shrink-0">
                    <Lightbulb className="h-6 w-6 text-[#173042]" />
                  </div>
                  <div className={dir === 'rtl' ? 'text-right' : ''}>
                    <h4 className="text-white font-semibold mb-2">
                      {locale === 'ar' ? 'الابتكار المستمر' : 'Continuous Innovation'}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {locale === 'ar'
                        ? 'تطوير مستمر لحلول إدارة النفايات المتطورة'
                        : 'Continuously developing cutting-edge waste solutions'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7DAD3F] rounded-xl flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className={dir === 'rtl' ? 'text-right' : ''}>
                    <h4 className="text-white font-semibold mb-2">
                      {locale === 'ar' ? 'دعم العملاء' : 'Customer Support'}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {locale === 'ar'
                        ? 'فريق دعم متخصص جاهز لمساعدتك'
                        : 'Dedicated support team ready to assist you'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
