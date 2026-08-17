import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SITE_URL } from '@/lib/site-data';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FDFCFB',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Zorex AI | Vertical AI Systems for Business Functions',
  description: 'Zorex AI designs, builds, deploys, and improves intelligent systems around meaningful business functions—reducing repetitive work and creating operational capacity.',
  applicationName: 'Zorex AI',
  authors: [{ name: 'Zorex AI' }],
  publisher: 'Zorex AI',
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/zorex-logo.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/zorex-logo.png', type: 'image/png', sizes: '512x512' }],
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Zorex AI',
    title: 'Zorex AI — Vertical AI Systems for Business Functions',
    description: 'Intelligent systems that remove operational bottlenecks and create capacity for growth.',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Zorex AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zorex AI — Vertical AI Systems for Business Functions',
    description: 'Intelligent systems that remove operational bottlenecks and create capacity for growth.',
    images: ['/og-default.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
