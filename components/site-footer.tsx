import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

const footerColumns = [
  {
    heading: 'Explore',
    links: [
      { href: '/services', label: 'Services' },
      { href: '/industries', label: 'Industries' },
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/blog', label: 'Insights' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/process', label: 'Process' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#193868] py-14 text-white sm:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-extrabold tracking-tight transition-opacity hover:opacity-80">Zorex<span className="text-accent-gold"> AI</span></Link>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">An AI software company. We design, build, deploy, and continuously improve AI systems for real business functions.</p>
          <a className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-accent-gold" href="mailto:hello@zorex.com">
            <Icon name="Mail" className="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden />
            hello@zorex.com
          </a>
        </div>
        <div className="lg:justify-self-end">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-accent-gold">{column.heading}</h3>
                <div className="flex flex-col gap-3">
                  {column.links.map((item) => (
                    <Link key={item.href} href={item.href} className="text-sm text-white/75 transition-all duration-200 hover:translate-x-0.5 hover:text-white">{item.label}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-lift mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gold px-5 py-3 text-sm font-bold text-primary hover:bg-secondary-container">
            <Icon name="CalendarCheck2" className="size-4" aria-hidden />
            Book a Call
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col gap-2 border-t border-white/10 px-5 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© 2026 Zorex AI. All rights reserved.</span>
        <span>Built around meaningful business functions.</span>
      </div>
    </footer>
  );
}
