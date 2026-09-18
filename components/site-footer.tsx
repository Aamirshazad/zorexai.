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
      { href: '/faq', label: 'FAQ' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Reference',
    links: [
      { href: '/security', label: 'Security & governance' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="font-ui w-full border-t border-[var(--line)] bg-[var(--page-wash)] py-14 text-ink sm:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-semibold tracking-tight text-ink transition-opacity hover:opacity-80">Zorex<span className="text-ink-3"> AI</span></Link>
          <p className="body-ink mt-4 max-w-xl">An AI software company. We design, build, deploy, and continuously improve AI systems for real business functions.</p>
          <a className="footer-link group gap-2 text-sm font-medium text-ink transition-colors hover:text-ink-2" href="mailto:hello@zorex.com">
            <Icon name="Mail" className="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden />
            hello@zorex.com
          </a>
        </div>
        <div className="lg:justify-self-end">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <h3 className="eyebrow mb-4">{column.heading}</h3>
                <div className="flex flex-col">
                  {column.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="footer-link text-sm text-ink-2 transition-colors duration-200 hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link href="/contact" className="nav-cta mt-8">
            <Icon name="CalendarCheck2" className="size-4" aria-hidden />
            Book a Strategy Call
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col gap-2 border-t border-[var(--line)] px-5 pt-6 text-xs text-ink-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© 2026 Zorex AI. All rights reserved.</span>
        <span>Built around meaningful business functions.</span>
      </div>
    </footer>
  );
}
