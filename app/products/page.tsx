'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/locale-context'
import { products, categories } from '@/lib/products'
import { cn } from '@/lib/utils'

export default function ProductsPage() {
  const { t, dir, locale } = useLocale()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category.en === selectedCategory)
    : products

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#173042] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className={cn("max-w-3xl", dir === 'rtl' && 'text-right mr-auto')}>
            <div className="inline-flex items-center gap-2 bg-[#E49E01]/20 border border-[#E49E01]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-[#E49E01]">
                {locale === 'ar' ? 'منتجات للبيع والإيجار' : 'Sale & Rental'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {t.products.title}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed text-pretty">
              {t.products.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Filters */}
          <div className={cn("flex flex-wrap items-center justify-between gap-4 mb-12", dir === 'rtl' && 'flex-row-reverse')}>
            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              {locale === 'ar' ? 'تصفية' : 'Filter'}
            </Button>

            {/* Desktop Categories */}
            <div className={cn("hidden lg:flex flex-wrap gap-2", dir === 'rtl' && 'flex-row-reverse')}>
              <Button
                variant={selectedCategory === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  selectedCategory === null
                    ? 'bg-[#173042] text-white'
                    : 'border-[#CFE0DA] text-[#666666] hover:border-[#173042] hover:text-[#173042]'
                )}
              >
                {locale === 'ar' ? 'جميع المنتجات' : 'All Products'}
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.en}
                  variant={selectedCategory === category.en ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.en)}
                  className={cn(
                    selectedCategory === category.en
                      ? 'bg-[#173042] text-white'
                      : 'border-[#CFE0DA] text-[#666666] hover:border-[#173042] hover:text-[#173042]'
                  )}
                >
                  {locale === 'ar' ? category.ar : category.en}
                </Button>
              ))}
            </div>

            {/* Product Count */}
            <p className="text-[#666666]">
              {filteredProducts.length} {locale === 'ar' ? 'منتج' : 'products'}
            </p>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <div className="lg:hidden bg-white rounded-xl p-6 mb-8 shadow-sm border border-[#CFE0DA]/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[#173042]">
                  {locale === 'ar' ? 'الفئات' : 'Categories'}
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(null)
                    setShowFilters(false)
                  }}
                  className={cn(
                    selectedCategory === null
                      ? 'bg-[#173042] text-white'
                      : 'border-[#CFE0DA] text-[#666666]'
                  )}
                >
                  {locale === 'ar' ? 'الكل' : 'All'}
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.en}
                    variant={selectedCategory === category.en ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setSelectedCategory(category.en)
                      setShowFilters(false)
                    }}
                    className={cn(
                      selectedCategory === category.en
                        ? 'bg-[#173042] text-white'
                        : 'border-[#CFE0DA] text-[#666666]'
                    )}
                  >
                    {locale === 'ar' ? category.ar : category.en}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-[#CFE0DA]/50 hover:border-[#167D88]/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  {/* Product Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={locale === 'ar' ? product.name.ar : product.name.en}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {product.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#E49E01] text-[#173042] text-xs font-bold px-3 py-1.5 rounded-full">
                          {locale === 'ar' ? 'مميز' : 'Featured'}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-[#173042]/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {locale === 'ar' ? product.category.ar : product.category.en}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className={cn("text-lg font-bold text-[#173042] mb-2 group-hover:text-[#167D88] transition-colors", dir === 'rtl' && 'text-right')}>
                      {locale === 'ar' ? product.name.ar : product.name.en}
                    </h3>
                    <p className={cn("text-sm text-[#666666] mb-4 line-clamp-2 flex-1", dir === 'rtl' && 'text-right')}>
                      {locale === 'ar' ? product.description.ar : product.description.en}
                    </p>

                    {/* Specs Preview */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {product.specifications.slice(0, 2).map((spec, index) => (
                        <div key={index} className="bg-[#F5F5F5] rounded-lg p-2 text-center">
                          <div className="text-xs text-[#666666]">
                            {locale === 'ar' ? spec.label.ar : spec.label.en}
                          </div>
                          <div className="text-sm font-semibold text-[#173042]">{spec.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action */}
                    <div className={cn("flex items-center text-[#167D88] font-medium", dir === 'rtl' && 'flex-row-reverse justify-end')}>
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

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#173042] mb-6 text-balance">
            {locale === 'ar'
              ? 'لم تجد ما تبحث عنه؟'
              : "Can't find what you're looking for?"}
          </h2>
          <p className="text-lg text-[#666666] mb-8 text-pretty">
            {locale === 'ar'
              ? 'تواصل معنا للحصول على حلول مخصصة تناسب احتياجاتك'
              : 'Contact us for custom solutions tailored to your needs'}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#E49E01] text-[#173042] font-semibold hover:bg-[#E49E01]/90 h-14 px-8">
              {t.nav.requestQuote}
              <ArrowRight className={cn("h-5 w-5", dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2')} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
