'use client'

import { Shield, Award, Clock, Users, Cog, Leaf } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Shield,
    color: 'text-[#167D88]',
    bg: 'bg-[#167D88]/10',
    titleEn: 'Certified Quality',
    titleAr: 'جودة معتمدة',
    descEn: 'DIN Standard, EN840 and RAL-GZ 951/1 certified equipment from TUV Rheinland.',
    descAr: 'معدات معتمدة بمعايير DIN و EN840 و RAL-GZ 951/1 من TUV Rheinland.',
  },
  {
    icon: Award,
    color: 'text-[#E49E01]',
    bg: 'bg-[#E49E01]/10',
    titleEn: 'Industry Leader',
    titleAr: 'رائد الصناعة',
    descEn: 'Over 13 years of experience in sustainable waste management solutions.',
    descAr: 'أكثر من 13 عامًا من الخبرة في حلول إدارة النفايات المستدامة.',
  },
  {
    icon: Clock,
    color: 'text-[#1768B4]',
    bg: 'bg-[#1768B4]/10',
    titleEn: 'Reliable Service',
    titleAr: 'خدمة موثوقة',
    descEn: 'Timely delivery and responsive support for all your waste management needs.',
    descAr: 'تسليم في الوقت المحدد ودعم سريع لجميع احتياجات إدارة النفايات.',
  },
  {
    icon: Users,
    color: 'text-[#4A6C2F]',
    bg: 'bg-[#4A6C2F]/10',
    titleEn: 'Expert Team',
    titleAr: 'فريق خبراء',
    descEn: 'Skilled engineers creating ergonomic-friendly machines with durable components.',
    descAr: 'مهندسون ماهرون يصنعون آلات صديقة للمستخدم مع مكونات متينة.',
  },
  {
    icon: Cog,
    color: 'text-[#384755]',
    bg: 'bg-[#384755]/10',
    titleEn: 'Custom Solutions',
    titleAr: 'حلول مخصصة',
    descEn: 'Bespoke engineering solutions tailored to your unique business requirements.',
    descAr: 'حلول هندسية مخصصة مصممة لتلبية متطلبات عملك الفريدة.',
  },
  {
    icon: Leaf,
    color: 'text-[#7DAD3F]',
    bg: 'bg-[#7DAD3F]/10',
    titleEn: 'Eco-Friendly',
    titleAr: 'صديق للبيئة',
    descEn: 'Committed to practices that reduce environmental impact and promote sustainability.',
    descAr: 'ملتزمون بممارسات تقلل التأثير البيئي وتعزز الاستدامة.',
  },
]

export function WhyUsSection() {
  const { dir, locale } = useLocale()

  return (
    <section className="py-20 lg:py-28 bg-[#173042]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className={cn("text-center max-w-3xl mx-auto mb-16", dir === 'rtl' && 'text-right md:text-center')}>
          <div className="inline-flex items-center gap-2 bg-[#167D88]/20 border border-[#167D88]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-[#7DAD3F]">
              {locale === 'ar' ? 'لماذا نحن' : 'Why Choose Us'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {locale === 'ar' ? 'التميز الهندسي متأصل في روحنا' : 'Engineering Excellence in Our DNA'}
          </h2>
          <p className="text-lg text-white/70 text-pretty">
            {locale === 'ar'
              ? 'نحن ملتزمون بتقديم حلول شاملة لإدارة النفايات من خلال أجهزتنا المصممة بدقة'
              : 'We are committed to delivering comprehensive waste management solutions through our meticulously engineered machines'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", feature.bg)}>
                  <Icon className={cn("h-7 w-7", feature.color)} />
                </div>
                <h3 className={cn("text-xl font-bold text-white mb-3", dir === 'rtl' && 'text-right')}>
                  {locale === 'ar' ? feature.titleAr : feature.titleEn}
                </h3>
                <p className={cn("text-white/60 leading-relaxed", dir === 'rtl' && 'text-right')}>
                  {locale === 'ar' ? feature.descAr : feature.descEn}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
