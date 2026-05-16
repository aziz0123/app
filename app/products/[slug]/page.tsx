'use client'

import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, Phone, Mail, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/locale-context'
import { getProductBySlug, products } from '@/lib/products'
import { cn } from '@/lib/utils'

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { t, dir, locale } = useLocale()
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category.en === product.category.en && p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-[#173042] py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className={cn("flex items-center gap-2 text-sm", dir === 'rtl' && 'flex-row-reverse')}>
            <Link href="/products" className="text-white/60 hover:text-white transition-colors">
              {t.products.title}
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white/60">
              {locale === 'ar' ? product.category.ar : product.category.en}
            </span>
            <span className="text-white/40">/</span>
            <span className="text-white">
              {locale === 'ar' ? product.name.ar : product.name.en}
            </span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            href="/products"
            className={cn("inline-flex items-center text-[#167D88] font-medium mb-8 hover:text-[#173042] transition-colors", dir === 'rtl' && 'flex-row-reverse')}
          >
            <ArrowLeft className={cn("h-4 w-4", dir === 'rtl' ? 'ml-2 rotate-180' : 'mr-2')} />
            {t.common.back}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-2xl aspect-square relative overflow-hidden mb-4">
                {product.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#E49E01] text-[#173042] text-sm font-bold px-4 py-2 rounded-full">
                      {locale === 'ar' ? 'مميز' : 'Featured'}
                    </span>
                  </div>
                )}
                <Image
                  src={product.image}
                  alt={locale === 'ar' ? product.name.ar : product.name.en}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#173042]/90 text-white text-sm font-medium px-4 py-2 rounded-full">
                    {locale === 'ar' ? product.category.ar : product.category.en}
                  </span>
                </div>
              </div>

              {/* Detail Image (Technical Specs Sheet) */}
              {product.detailImage && (
                <div className="bg-white rounded-2xl overflow-hidden border border-[#CFE0DA]/50 mb-4">
                  <Image
                    src={product.detailImage}
                    alt={`${locale === 'ar' ? product.name.ar : product.name.en} - Technical Details`}
                    width={800}
                    height={1100}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Sectors Tags */}
              <div className={cn("bg-white rounded-xl p-6 border border-[#CFE0DA]/50", dir === 'rtl' && 'text-right')}>
                <h3 className="text-sm font-semibold text-[#666666] uppercase tracking-wide mb-4">
                  {t.products.sectors}
                </h3>
                <div className={cn("flex flex-wrap gap-2", dir === 'rtl' && 'justify-end')}>
                  {product.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="inline-flex items-center gap-2 bg-[#CFE0DA]/50 text-[#384755] px-3 py-2 rounded-full text-sm"
                    >
                      <Building2 className="h-4 w-4" />
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className={dir === 'rtl' ? 'text-right' : ''}>
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-[#167D88]/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium text-[#167D88]">
                  {locale === 'ar' ? product.category.ar : product.category.en}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-[#173042] mb-6">
                {locale === 'ar' ? product.name.ar : product.name.en}
              </h1>

              {/* Description */}
              <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                {locale === 'ar' ? product.description.ar : product.description.en}
              </p>

              {/* Sale & Rental Badge */}
              <div className={cn("flex items-center gap-2 mb-8", dir === 'rtl' && 'flex-row-reverse justify-end')}>
                <Check className="h-5 w-5 text-[#7DAD3F]" />
                <span className="text-[#7DAD3F] font-medium">{t.products.saleRental}</span>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-xl p-6 border border-[#CFE0DA]/50 mb-8">
                <h3 className="text-lg font-bold text-[#173042] mb-4">
                  {t.products.specifications}
                </h3>
                <div className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex justify-between py-3 border-b border-[#CFE0DA]/50 last:border-0",
                        dir === 'rtl' && 'flex-row-reverse'
                      )}
                    >
                      <span className="text-[#666666]">
                        {locale === 'ar' ? spec.label.ar : spec.label.en}
                      </span>
                      <span className="font-semibold text-[#173042]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className={cn("flex flex-wrap gap-4", dir === 'rtl' && 'flex-row-reverse')}>
                <Link href="/contact" className="flex-1 min-w-[200px]">
                  <Button size="lg" className="w-full bg-[#E49E01] text-[#173042] font-semibold hover:bg-[#E49E01]/90 h-14">
                    {t.products.requestQuote}
                    <ArrowRight className={cn("h-5 w-5", dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2')} />
                  </Button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-[#CFE0DA]">
                <p className="text-[#666666] mb-4">
                  {locale === 'ar' ? 'هل لديك أسئلة؟ تواصل معنا:' : 'Have questions? Contact us:'}
                </p>
                <div className="flex flex-wrap gap-6">
                  <a
                    href="tel:+97165449361"
                    className={cn("flex items-center gap-2 text-[#167D88] hover:text-[#173042] transition-colors", dir === 'rtl' && 'flex-row-reverse')}
                  >
                    <Phone className="h-5 w-5" />
                    +971 6 544 9361
                  </a>
                  <a
                    href="mailto:Info@steeltechnology.ae"
                    className={cn("flex items-center gap-2 text-[#167D88] hover:text-[#173042] transition-colors", dir === 'rtl' && 'flex-row-reverse')}
                  >
                    <Mail className="h-5 w-5" />
                    Info@steeltechnology.ae
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className={cn("flex items-center justify-between mb-12", dir === 'rtl' && 'flex-row-reverse')}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#173042]">
                {locale === 'ar' ? 'منتجات ذات صلة' : 'Related Products'}
              </h2>
              <Link href="/products">
                <Button variant="outline" className="border-[#173042] text-[#173042] hover:bg-[#173042] hover:text-white">
                  {t.common.viewAll}
                  <ArrowRight className={cn("h-4 w-4", dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2')} />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="group"
                >
                  <div className="bg-[#F5F5F5] rounded-2xl overflow-hidden border border-[#CFE0DA]/50 hover:border-[#167D88]/50 transition-all duration-300 hover:shadow-lg">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] relative overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={locale === 'ar' ? relatedProduct.name.ar : relatedProduct.name.en}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-[#173042]/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                          {locale === 'ar' ? relatedProduct.category.ar : relatedProduct.category.en}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={cn("text-lg font-bold text-[#173042] mb-2 group-hover:text-[#167D88] transition-colors", dir === 'rtl' && 'text-right')}>
                        {locale === 'ar' ? relatedProduct.name.ar : relatedProduct.name.en}
                      </h3>
                      <p className={cn("text-sm text-[#666666] line-clamp-2", dir === 'rtl' && 'text-right')}>
                        {locale === 'ar' ? relatedProduct.description.ar : relatedProduct.description.en}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
