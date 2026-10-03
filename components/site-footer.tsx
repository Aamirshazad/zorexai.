import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { company } from '@/content/company';

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
      { href: company.linkedin, label: 'LinkedIn' },
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
          <p className="body-ink mt-4 max-w-xl">We take AI from idea to daily use in your business.</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            <a className="footer-link group gap-2 text-sm font-medium text-ink transition-colors hover:text-ink-2" href={`mailto:${company.email}`}>
              <Icon name="Mail" className="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden />
              {company.email}
            </a>
            <a
              className="footer-link group gap-2 text-sm font-medium text-ink transition-colors hover:text-ink-2"
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zorex AI on LinkedIn"
            >
              <svg className="size-4 fill-current transition-transform group-hover:-translate-y-0.5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.3a1.64 1.64 0 0 0-1.66 1.63c0 .91.75 1.63 1.66 1.63 1 0 1.66-.72 1.66-1.63 0-.91-.66-1.63-1.66-1.63Z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <h3 className="eyebrow mb-4">{column.heading}</h3>
                <div className="flex flex-col">
                  {column.links.map((item) =>
                    item.href.startsWith('http') ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link text-sm text-ink-2 transition-colors duration-200 hover:text-ink"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="footer-link text-sm text-ink-2 transition-colors duration-200 hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <Link href="/contact#book" className="nav-cta mt-8">
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
