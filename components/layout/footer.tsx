'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'

export function Footer() {
  const { t, locale } = useLocale()

  const quickLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.products, href: '/products' },
    { name: t.nav.contact, href: '/contact' },
  ]

  return (
    <footer className="bg-[#173042] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Steel%20Tech%20logo%20%281%29-r8FUuC062cjC6rEBxzJBn0Cvf0NGmg.png"
                alt="Steel Tech Logo"
                width={140}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-[#167D88] text-sm font-medium italic">
              {locale === 'ar' ? '"تنظيف العالم وإعادة تدوير الحياة"' : '"Cleaning the World and Recycling Life"'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#E49E01] mb-6">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#E49E01] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#E49E01] mb-6">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#167D88] shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">{t.contact.info.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#167D88] shrink-0" />
                <a href="tel:+97165449361" className="text-white/70 hover:text-[#E49E01] transition-colors text-sm">
                  {t.contact.info.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#167D88] shrink-0" />
                <a href="mailto:Info@steeltechnology.ae" className="text-white/70 hover:text-[#E49E01] transition-colors text-sm">
                  {t.contact.info.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-[#167D88] shrink-0" />
                <a href="https://www.steeltechnology.ae" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#E49E01] transition-colors text-sm">
                  {t.contact.info.website}
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold text-[#E49E01] mb-6">
              {locale === 'ar' ? 'الشهادات' : 'Certifications'}
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <p>DIN Standard Lifting Equipment</p>
              <p>EN840 Safety Standard</p>
              <p>RAL-GZ 951/1 Compliance</p>
              <p>TUV Rheinland LGA Products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Steel Tech. {t.footer.rights}
            </p>
            <div className="flex items-center gap-6">
              <Link href="/products" className="text-white/50 hover:text-[#E49E01] text-sm transition-colors">
                {t.nav.products}
              </Link>
              <Link href="/contact" className="text-white/50 hover:text-[#E49E01] text-sm transition-colors">
                {t.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
