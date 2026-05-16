'use client'

import Link from 'next/link'
import { Truck, Recycle, Factory, Wrench, ArrowRight } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Truck,
    color: 'bg-[#167D88]',
    key: 'collection' as const,
  },
  {
    icon: Recycle,
    color: 'bg-[#7DAD3F]',
    key: 'recycling' as const,
  },
  {
    icon: Factory,
    color: 'bg-[#E49E01]',
    key: 'treatment' as const,
  },
  {
    icon: Wrench,
    color: 'bg-[#1768B4]',
    key: 'custom' as const,
  },
]

export function ServicesSection() {
  const { t, dir, locale } = useLocale()

  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className={cn("text-center max-w-3xl mx-auto mb-16", dir === 'rtl' && 'text-right md:text-center')}>
          <div className="inline-flex items-center gap-2 bg-[#167D88]/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-[#167D88]">
              {locale === 'ar' ? 'ماذا نقدم' : 'What We Offer'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#173042] mb-6 text-balance">
            {t.services.title}
          </h2>
          <p className="text-lg text-[#666666] text-pretty">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const serviceData = t.services[service.key]
            
            return (
              <div
                key={service.key}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#CFE0DA]/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                  service.color
                )}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className={cn("text-xl font-bold text-[#173042] mb-3", dir === 'rtl' && 'text-right')}>
                  {serviceData.title}
                </h3>
                <p className={cn("text-[#666666] mb-6 leading-relaxed", dir === 'rtl' && 'text-right')}>
                  {serviceData.description}
                </p>
                <Link
                  href="/services"
                  className={cn(
                    "inline-flex items-center text-[#167D88] font-medium hover:text-[#173042] transition-colors",
                    dir === 'rtl' && 'flex-row-reverse'
                  )}
                >
                  {t.common.learnMore}
                  <ArrowRight className={cn("h-4 w-4", dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2')} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
