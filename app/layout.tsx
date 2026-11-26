import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic, Inter } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import { FloatingChat, SiteFooter, SiteHeader } from '@/components/site'
import './globals.css'

const arabicFont = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-arabic' })
const englishFont = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-english' })

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://yseercpa.sa/#organization',
      name: 'يسير للاستشارات المهنية',
      alternateName: 'Yseer Professional Consulting',
      url: 'https://yseercpa.sa/',
      logo: 'https://yseercpa.sa/yseer-logo.png',
      email: 'info@yseercpa.sa',
      telephone: ['+966920031899', '+966537177706'],
      areaServed: [
        { '@type': 'City', name: 'Buraydah' },
        { '@type': 'AdministrativeArea', name: 'Al Qassim' },
        { '@type': 'Country', name: 'Saudi Arabia' },
      ],
      knowsAbout: ['Audit and assurance', 'Accounting', 'Financial consulting', 'Zakat', 'Tax compliance', 'Bookkeeping', 'Governance'],
      sameAs: [
        'https://www.linkedin.com/company/yseer-cpa/',
        'https://www.instagram.com/yseercpa/',
        'https://x.com/yseercpa',
      ],
      contactPoint: [{ '@type': 'ContactPoint', telephone: '+966920031899', email: 'info@yseercpa.sa', contactType: 'customer service', areaServed: 'SA', availableLanguage: ['Arabic', 'English'] }],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://yseercpa.sa/#website',
      url: 'https://yseercpa.sa/',
      name: 'يسير للاستشارات المهنية | Yseer Professional Consulting',
      inLanguage: ['ar-SA', 'en'],
      publisher: { '@id': 'https://yseercpa.sa/#organization' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'يسير للاستشارات المهنية | مراجعة ومحاسبة وزكاة وضريبة',
  description: 'خدمات مراجعة وتدقيق، استشارات مالية، زكاة وضريبة ومسك دفاتر للمنشآت في بريدة والقصيم. تواصل مع يسير للاستشارات المهنية.',
  applicationName: 'يسير للاستشارات المهنية',
  metadataBase: new URL('https://yseercpa.sa'),
  alternates: {
    canonical: '/',
    languages: { ar: '/', en: '/en', 'x-default': '/' },
  },
  openGraph: {
    title: 'يسير للاستشارات المهنية | مراجعة ومحاسبة وزكاة وضريبة',
    description: 'خدمات مهنية مستقلة في المراجعة والمحاسبة والاستشارات المالية والزكوية والضريبية في بريدة والقصيم.',
    siteName: 'يسير للاستشارات المهنية | Yseer Professional Consulting',
    locale: 'ar_SA',
    alternateLocale: ['en_US'],
    url: '/',
    type: 'website',
    images: [{ url: '/og-preview', width: 1200, height: 630, alt: 'يسير للاستشارات المهنية | Yseer Professional Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'يسير للاستشارات المهنية | مراجعة ومحاسبة وزكاة وضريبة',
    description: 'مراجعة ومحاسبة واستشارات مالية وزكوية وضريبية للمنشآت في بريدة والقصيم.',
    images: ['/og-preview'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/yseer-mark.png',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: '#023632',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${arabicFont.variable} ${englishFont.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c') }} />
        <LanguageProvider>
          <SiteHeader />
          <div className="site-content-wrapper">
            {children}
          </div>
          <FloatingChat />
          <SiteFooter />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
