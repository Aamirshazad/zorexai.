import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { RevealObserver } from '@/components/ui/reveal-observer';
import { SITE_URL } from '@/lib/site-data';

/*
 * Google Sans Flex — the single typeface the whole site now runs on, matching
 * the imagine.art business theme 1:1 (their stylesheet declares
 * "Google Sans Flex", weight 1 1000). It is a Google proprietary variable font
 * that is not on the Google Fonts API, so the woff2 is self-hosted here and
 * loaded with next/font/local. The Latin + Latin-ext subsets live in app/fonts.
 */
const googleSansFlex = localFont({
  src: './fonts/google-sans-flex-latin.woff2',
  weight: '100 1000',
  style: 'normal',
  variable: '--font-gsf',
  display: 'swap',
  preload: true,
  fallback: ['Google Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#eef4f4',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Zorex AI | AI Systems for Operations Teams',
  description:
    'Zorex AI designs, builds, deploys, and continuously improves AI systems for operations teams that have outgrown manual work. Agentic systems, AI integration with existing tools, and industry-specific systems.',
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
    // This previously read "Zorex AI AI Software Company": the brand name ends
    // in "AI", so appending another "AI" produced a doubled word.
    title: 'Zorex AI: AI Systems for Operations Teams',
    description:
      'AI systems, agentic systems, and AI integrated with your existing tools, designed, built, deployed, and continuously improved for real business functions.',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Zorex AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zorex AI: AI Systems for Operations Teams',
    description:
      'AI systems, agentic systems, and AI integrated with your existing tools, designed, built, deployed, and continuously improved for real business functions.',
    images: ['/og-default.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${googleSansFlex.className} ${googleSansFlex.variable}`}
    >
      <body>
        <RevealObserver />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
