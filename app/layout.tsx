import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { RevealObserver } from '@/components/ui/reveal-observer';
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
  title: 'Zorex AI | AI Software Company for Business Functions',
  description: 'Zorex AI is an AI software company. We design, build, deploy, and continuously improve AI-powered systems, agentic systems, and AI integrated with existing systems for real business functions.',
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
    title: 'Zorex AI — AI Software Company',
    description: 'AI-powered systems, agentic systems, and AI integrated with your existing systems — designed, built, deployed, and continuously improved for real business functions.',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Zorex AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zorex AI — AI Software Company',
    description: 'AI-powered systems, agentic systems, and AI integrated with your existing systems — designed, built, deployed, and continuously improved for real business functions.',
    images: ['/og-default.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.className}>
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
