import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LocaleProvider } from '@/lib/locale-context'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-aptos',
  display: 'swap',
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Steel Tech | Sustainable Waste Management Solutions',
  description: 'Leading the industry in sustainable waste management. Steel Tech offers innovative products and services for a cleaner, greener future. Based in Sharjah, UAE.',
  keywords: ['waste management', 'recycling', 'sustainability', 'waste bins', 'compactors', 'UAE', 'Sharjah', 'Steel Tech'],
  authors: [{ name: 'Steel Tech Engineers' }],
  creator: 'Steel Tech',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    alternateLocale: 'ar_AE',
    url: 'https://steeltechnology.ae',
    siteName: 'Steel Tech',
    title: 'Steel Tech | Sustainable Waste Management Solutions',
    description: 'Leading the industry in sustainable waste management with innovative products and services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steel Tech | Sustainable Waste Management Solutions',
    description: 'Leading the industry in sustainable waste management.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#173042',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansArabic.variable} bg-[#F5F5F5]`}>
      <body className="font-sans antialiased">
        <LocaleProvider>
          <Header />
          <main className="min-h-screen pt-[72px]">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
