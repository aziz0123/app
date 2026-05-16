'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/locale-context'
import { cn } from '@/lib/utils'

export function CTASection() {
  const { t, dir, locale } = useLocale()

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#167D88] to-[#173042] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={cn("space-y-8", dir === 'rtl' && 'text-right')}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              {locale === 'ar'
                ? 'هل أنت مستعد لتحويل إدارة النفايات لديك؟'
                : 'Ready to Transform Your Waste Management?'}
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-pretty">
              {locale === 'ar'
                ? 'تواصل مع فريقنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكن لحلولنا المبتكرة أن تفيد عملك.'
                : 'Contact our team today for a free consultation and discover how our innovative solutions can benefit your business.'}
            </p>

            <div className={cn("flex flex-wrap gap-4", dir === 'rtl' && 'flex-row-reverse')}>
              <Link href="/contact">
                <Button size="lg" className="bg-[#E49E01] text-[#173042] font-semibold hover:bg-[#E49E01]/90 h-14 px-8 text-base">
                  {t.nav.requestQuote}
                  <ArrowRight className={cn("h-5 w-5", dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2')} />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#173042] h-14 px-8 text-base">
                  {t.hero.secondary}
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-10">
            <h3 className={cn("text-2xl font-bold text-white mb-8", dir === 'rtl' && 'text-right')}>
              {locale === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
            </h3>

            <div className="space-y-6">
              <a
                href="tel:+97165449361"
                className={cn(
                  "flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors",
                  dir === 'rtl' && 'flex-row-reverse'
                )}
              >
                <div className="w-12 h-12 bg-[#E49E01] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-[#173042]" />
                </div>
                <div className={dir === 'rtl' ? 'text-right' : ''}>
                  <div className="text-white/60 text-sm">
                    {locale === 'ar' ? 'اتصل بنا' : 'Call Us'}
                  </div>
                  <div className="text-white font-semibold text-lg">+971 6 544 9361</div>
                </div>
              </a>

              <a
                href="mailto:Info@steeltechnology.ae"
                className={cn(
                  "flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors",
                  dir === 'rtl' && 'flex-row-reverse'
                )}
              >
                <div className="w-12 h-12 bg-[#E49E01] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-[#173042]" />
                </div>
                <div className={dir === 'rtl' ? 'text-right' : ''}>
                  <div className="text-white/60 text-sm">
                    {locale === 'ar' ? 'راسلنا' : 'Email Us'}
                  </div>
                  <div className="text-white font-semibold text-lg">Info@steeltechnology.ae</div>
                </div>
              </a>

              <div className={cn(
                "flex items-center gap-4 p-4 bg-white/5 rounded-xl",
                dir === 'rtl' && 'flex-row-reverse'
              )}>
                <div className="w-12 h-12 bg-[#7DAD3F] rounded-full flex items-center justify-center shrink-0">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className={dir === 'rtl' ? 'text-right' : ''}>
                  <div className="text-white/60 text-sm">
                    {locale === 'ar' ? 'موقعنا' : 'Visit Us'}
                  </div>
                  <div className="text-white font-semibold">
                    {locale === 'ar' ? 'الشارقة، الإمارات' : 'Sharjah, UAE'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
