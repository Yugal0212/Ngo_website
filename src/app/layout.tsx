import type { Metadata, Viewport } from 'next'
import './globals.css'
import { BRAND } from '@/config/site'
import { LanguageProvider } from '@/context/LanguageContext'
import { LanguageModal } from '@/components/common/LanguageModal'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#fffcf8',
}

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: 'Care, shelter and compassion for cows, and education support for children. Positivity Donation. ગૌમાતાની સેવા, માનવતાની સેવા.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="gu" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700;800&family=Noto+Sans+Gujarati:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-cream-50 font-sans text-ink-700 antialiased selection:bg-rust-600 selection:text-white">
        <LanguageProvider>
          {children}
          <LanguageModal />
        </LanguageProvider>
      </body>
    </html>
  )
}
