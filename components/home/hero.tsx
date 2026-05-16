'use client'

import Link from 'next/link'
import { ArrowRight, Recycle, Leaf, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/locale-context'
import { cn } from '@/lib/utils'

export function Hero() {
  const { t, dir, locale } = useLocale()

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#173042]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23167D88' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#167D88]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E49E01]/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={cn("space-y-8", dir === 'rtl' && 'text-right')}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#167D88]/20 border border-[#167D88]/30 rounded-full px-4 py-2">
              <Recycle className="h-4 w-4 text-[#7DAD3F]" />
              <span className="text-sm font-medium text-[#7DAD3F]">
                {locale === 'ar' ? 'حلول مستدامة منذ 2011' : 'Sustainable Solutions Since 2011'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl text-pretty">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className={cn("flex flex-wrap gap-4", dir === 'rtl' && 'flex-row-reverse')}>
              <Link href="/contact">
                <Button size="lg" className="bg-[#E49E01] text-[#173042] font-semibold hover:bg-[#E49E01]/90 h-14 px-8 text-base">
                  {t.hero.cta}
                  <ArrowRight className={cn("h-5 w-5", dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2')} />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base">
                  {t.hero.secondary}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className={cn("grid grid-cols-3 gap-8 pt-8 border-t border-white/10", dir === 'rtl' && 'text-right')}>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#E49E01]">13+</div>
                <div className="text-sm text-white/60 mt-1">
                  {locale === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#E49E01]">50+</div>
                <div className="text-sm text-white/60 mt-1">
                  {locale === 'ar' ? 'منتج' : 'Products'}
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#E49E01]">500+</div>
                <div className="text-sm text-white/60 mt-1">
                  {locale === 'ar' ? 'عميل سعيد' : 'Happy Clients'}
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Feature Cards */}
                  <div className="bg-[#167D88]/20 rounded-xl p-6 space-y-3">
                    <div className="w-12 h-12 bg-[#167D88] rounded-lg flex items-center justify-center">
                      <Recycle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold">
                      {locale === 'ar' ? 'إعادة التدوير' : 'Recycling'}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {locale === 'ar' ? 'حلول متقدمة لإعادة التدوير' : 'Advanced recycling solutions'}
                    </p>
                  </div>
                  <div className="bg-[#4A6C2F]/20 rounded-xl p-6 space-y-3">
                    <div className="w-12 h-12 bg-[#4A6C2F] rounded-lg flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold">
                      {locale === 'ar' ? 'صديق للبيئة' : 'Eco-Friendly'}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {locale === 'ar' ? 'منتجات صديقة للبيئة' : 'Environmentally conscious'}
                    </p>
                  </div>
                  <div className="bg-[#E49E01]/20 rounded-xl p-6 space-y-3">
                    <div className="w-12 h-12 bg-[#E49E01] rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-[#173042]" />
                    </div>
                    <h3 className="text-white font-semibold">
                      {locale === 'ar' ? 'كفاءة عالية' : 'High Efficiency'}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {locale === 'ar' ? 'معدات عالية الأداء' : 'High-performance equipment'}
                    </p>
                  </div>
                  <div className="bg-[#1768B4]/20 rounded-xl p-6 space-y-3">
                    <div className="w-12 h-12 bg-[#1768B4] rounded-lg flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold">
                      {locale === 'ar' ? 'جودة معتمدة' : 'Certified Quality'}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {locale === 'ar' ? 'معايير عالمية' : 'Global standards'}
                    </p>
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
