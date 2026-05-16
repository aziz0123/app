'use client'

import { Hero } from '@/components/home/hero'
import { ProductsSection } from '@/components/home/products-section'
import { WhyUsSection } from '@/components/home/why-us-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CTASection } from '@/components/home/cta-section'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
