'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/locale-context'
import { getFeaturedProducts } from '@/lib/products'
import { cn } from '@/lib/utils'

export function ProductsSection() {
  const { t, dir, locale } = useLocale()
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className={cn("flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12", dir === 'rtl' && 'md:flex-row-reverse')}>
          <div className={cn(dir === 'rtl' && 'text-right')}>
            <div className="inline-flex items-center gap-2 bg-[#E49E01]/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-[#E49E01]">
                {locale === 'ar' ? 'منتجات مميزة' : 'Featured Products'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#173042] mb-4 text-balance">
              {t.products.title}
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl text-pretty">
              {t.products.subtitle}
            </p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="border-[#173042] text-[#173042] hover:bg-[#173042] hover:text-white">
              {t.common.viewAll}
              <ArrowRight className={cn("h-4 w-4", dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2')} />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.slice(0, 6).map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-[#F5F5F5] rounded-2xl overflow-hidden border border-[#CFE0DA]/50 hover:border-[#167D88]/50 transition-all duration-300 hover:shadow-lg">
                {/* Product Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={locale === 'ar' ? product.name.ar : product.name.en}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#173042]/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {locale === 'ar' ? product.category.ar : product.category.en}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className={cn("text-lg font-bold text-[#173042] mb-2 group-hover:text-[#167D88] transition-colors", dir === 'rtl' && 'text-right')}>
                    {locale === 'ar' ? product.name.ar : product.name.en}
                  </h3>
                  <p className={cn("text-sm text-[#666666] mb-4 line-clamp-2", dir === 'rtl' && 'text-right')}>
                    {locale === 'ar' ? product.description.ar : product.description.en}
                  </p>
                  
                  {/* Specs Preview */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.specifications.slice(0, 2).map((spec, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-2 text-center">
                        <div className="text-xs text-[#666666]">
                          {locale === 'ar' ? spec.label.ar : spec.label.en}
                        </div>
                        <div className="text-sm font-semibold text-[#173042]">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* View Details */}
                  <div className={cn("flex items-center text-[#167D88] font-medium text-sm", dir === 'rtl' && 'flex-row-reverse justify-end')}>
                    {t.products.viewDetails}
                    <ArrowRight className={cn("h-4 w-4", dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2')} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
