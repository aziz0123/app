'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLocale } from '@/lib/locale-context'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale, setLocale, t, dir } = useLocale()

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.products, href: '/products' },
    { name: t.nav.contact, href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#173042]/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Steel%20Tech%20logo%20%281%29-r8FUuC062cjC6rEBxzJBn0Cvf0NGmg.png"
            alt="Steel Tech Logo"
            width={160}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-[#E49E01]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-[#E49E01]">
                <Globe className="h-4 w-4" />
                <span className={cn("text-sm font-medium", dir === 'rtl' ? 'mr-2' : 'ml-2')}>
                  {locale.toUpperCase()}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem onClick={() => setLocale('en')} className="cursor-pointer">
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocale('ar')} className="cursor-pointer">
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CTA Button - Desktop */}
          <Link href="/contact" className="hidden lg:block">
            <Button className="bg-[#E49E01] text-[#173042] font-semibold hover:bg-[#E49E01]/90">
              {t.nav.requestQuote}
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#173042] border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-base font-medium text-white/90 hover:bg-white/5 hover:text-[#E49E01] rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#E49E01] text-[#173042] font-semibold hover:bg-[#E49E01]/90">
                  {t.nav.requestQuote}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
