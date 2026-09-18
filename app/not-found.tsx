import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

/**
 * 404.
 *
 * Migrated to the ink token layer — it was the last screen still running on the
 * retired Material palette, which meant the one page a visitor reaches by
 * accident was also the one that looked least like the rest of the site. The
 * primary action is now the standard ink button and the heading scale matches
 * every other page, rather than a bespoke rounded-full pill design.
 */
export default function NotFound() {
  return (
    <main className="font-ui flex min-h-[70vh] items-center justify-center bg-page-wash px-5 pt-28 pb-16 sm:px-8">
      <div className="max-w-xl text-center">
        <div className="mb-8 flex justify-center">
          <Icon name="Globe2" className="size-20 text-ink-3/40" strokeWidth={1.5} aria-hidden />
        </div>
        <p className="eyebrow mb-4 block justify-center">Error 404</p>
        <h1 className="section-title mb-4">That page does not exist.</h1>
        <p className="body-ink mx-auto mb-10 max-w-md">
          The link may be out of date, or the address may have a typo in it. Either way, here is the way back.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link className="btn-ink w-full sm:w-auto" href="/">
            <Icon name="ArrowLeft" className="mr-1 size-4" aria-hidden />
            Back to Home
          </Link>
          <Link className="btn-ghost w-full sm:w-auto" href="/contact">
            Book a Strategy Call
          </Link>
        </div>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 list-none text-sm">
          {[
            { href: '/services', label: 'Services' },
            { href: '/industries', label: 'Industries' },
            { href: '/case-studies', label: 'Case Studies' },
            { href: '/faq', label: 'FAQ' },
          ].map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="footer-link text-ink-2 transition-colors hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
