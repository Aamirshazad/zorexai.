import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

const footerLinks = [
  { href: '/services', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Examples' },
  { href: '/process', label: 'How We Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#193868] py-14 text-white sm:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-extrabold tracking-tight">Zorex<span className="text-accent-gold"> AI</span></Link>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">Vertical AI systems that remove operational bottlenecks, improve execution, and create capacity for growth.</p>
          <a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-accent-gold" href="mailto:hello@zorex.com">
            <Icon name="Mail" className="size-4" aria-hidden />
            hello@zorex.com
          </a>
        </div>
        <div className="lg:justify-self-end">
          <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/75 transition-colors hover:text-white">{item.label}</Link>
            ))}
          </div>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gold px-5 py-3 text-sm font-bold text-primary hover:bg-secondary-container">
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
