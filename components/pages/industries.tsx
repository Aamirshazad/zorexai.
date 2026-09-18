import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { FinalCta } from '@/components/content/final-cta';
import { industries } from '@/content/industries';
import { services } from '@/content/services';

/**
 * /industries
 *
 * The previous version ran a single six-tile grid called "browse by function"
 * whose destinations silently mixed the two taxonomies: four tiles linked to
 * service pages and two linked to industry pages, so a reader had no way to
 * predict where a click would land.
 *
 * The page now presents the two axes separately and labels them, which is what
 * the hero always claimed it did:
 *
 *   by sector      the nine industry pages, from content/industries.ts
 *   by capability  the six services, from content/services.ts
 *
 * It also loses the Unsplash photograph that was captioned "Real-time
 * Intelligence Dashboard" while showing a stock image of a laptop. The
 * photograph is still here, below the hero, but its alt text now describes what
 * is actually in the frame instead of asserting it is a client's dashboard.
 */

const grains = ['grain-olive', 'grain-mineral', 'grain-teal', 'grain-sand', 'grain-steel', 'grain-charcoal'];

/** Where AI reliably changes the economics of an operation. */
const leverage = [
  {
    title: 'Work that repeats',
    body: 'A judgment made the same way hundreds of times a week: triage, routing, qualification, reconciliation. The system handles the pattern and escalates the genuine exceptions.',
    href: '/service-agentic-ai',
    linkLabel: 'Agentic AI systems',
  },
  {
    title: 'Work spread across systems',
    body: 'The same record re-keyed into a CRM, an ERP, and a spreadsheet. The system keeps them in step at API level so nobody is the integration layer.',
    href: '/service-ai-integration',
    linkLabel: 'AI integration',
  },
  {
    title: 'Work where a wrong answer is expensive',
    body: 'Sectors with regulatory constraints, domain vocabulary, and exceptions that are the job rather than the edge case. The system is built around those boundaries.',
    href: '/service-vertical-ai',
    linkLabel: 'Vertical AI systems',
  },
];

export default function PageContent() {
  return (
    <>
      <main className="font-ui bg-page-wash">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
          <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
          <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>

          <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
            <Breadcrumbs route="industries" className="mb-8" />
            <div className="flex flex-col items-center max-w-3xl">
              <h1 className="display-type mb-6">
                Where AI systems create the most <span className="opacity-60">operational leverage.</span>
              </h1>
              <p className="body-ink max-w-2xl mb-10">
                Route by the sector you operate in, or by the function you run. Both paths lead to the same systems,
                scoped to your workflows: nine sectors below, and the six capabilities those engagements draw on.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link className="btn-ink w-full sm:w-auto" href="/contact">
                  Book a Strategy Call
                  <Icon name="ArrowRight" className="ml-1 size-4" aria-hidden />
                </Link>
                <Link className="btn-ghost w-full sm:w-auto" href="#sectors">
                  Browse by sector
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Operations imagery ───────────────────────────────────────── */}
        <section className="px-5 pt-12 sm:px-8 sm:pt-16">
          <div className="reveal mx-auto max-w-container-max">
            <div className="relative h-56 overflow-hidden rounded-[24px] border border-[var(--line)] sm:h-72 lg:h-80">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="Analyst reviewing operational performance data"
                width={1200}
                height={800}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── Axis 1: by sector ────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8" id="sectors">
          <div className="max-w-container-max mx-auto">
            <div className="reveal mb-12 max-w-[640px] sm:mb-16">
              <span className="eyebrow mb-4 block">By Sector</span>
              <h2 className="section-title mb-4">Nine sectors we have built in.</h2>
              <p className="lede mt-5">
                Each page covers the workflows that recur in that sector, the constraints that shape the design, and how
                a system is usually scoped there.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {industries.map((industry, index) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className={`reveal${index % 3 > 0 ? ` reveal-delay-${index % 3}` : ''} tile grain ${grains[index % grains.length]} mc-card no-underline`}
                >
                  <span className="tile-n">{String(index + 1).padStart(2, '0')}</span>
                  <span className="mc-arrow">
                    <Icon name="ArrowRight" className="size-4" aria-hidden />
                  </span>
                  <span className="mt-auto">
                    <span className="flex items-center gap-2">
                      <Icon name={industry.icon} className="text-[15px] opacity-70" aria-hidden />
                      <span className="mc-title text-xl">{industry.name}</span>
                    </span>
                    <span className="mc-label mt-3 block">{industry.meta}</span>
                    <span className="mc-body block">{industry.oneLine}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Axis 2: by capability ────────────────────────────────────── */}
        <section className="px-5 pb-section-padding sm:px-8" id="capabilities">
          <div className="max-w-container-max mx-auto">
            <div className="reveal rounded-[22px] border border-[var(--line)] bg-panel p-8 sm:p-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div>
                  <span className="eyebrow mb-4 block">By Capability</span>
                  <h2 className="section-title mb-4" style={{ fontSize: 'clamp(22px, 2.6vw, 32px)' }}>
                    Not shaped by one sector?
                  </h2>
                  <p className="body-ink">
                    Most engagements are not industry-specific. Route by the capability instead and see how each one is
                    scoped, priced, and delivered.
                  </p>
                  <Link href="/services" className="footer-link mt-6 gap-2 text-sm font-medium text-ink border-b border-[var(--line-strong)] hover:border-ink transition-colors">
                    All six services
                    <Icon name="ArrowRight" className="size-4" aria-hidden />
                  </Link>
                </div>
                <ul className="grid grid-cols-1 gap-x-10 gap-y-1 list-none sm:grid-cols-2">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="group flex min-h-[44px] items-center justify-between gap-3 border-b border-[var(--line)] py-2 text-[14.5px] text-ink-2 transition-colors hover:text-ink"
                      >
                        {service.name}
                        <Icon name="ArrowRight" className="size-4 shrink-0 text-ink-3 group-hover:text-ink transition-colors" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Where AI changes the economics ───────────────────────────── */}
        <section className="cta-bleed grain grain-charcoal">
          <div className="max-w-container-max mx-auto">
            <div className="reveal mb-12 max-w-[640px] sm:mb-16">
              <span className="mc-label">The Leverage</span>
              <h2 className="section-title text-white mt-4">Outcomes start with the workflow.</h2>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
              {leverage.map((item, index) => (
                <div
                  key={item.title}
                  className={`reveal${index > 0 ? ` reveal-delay-${index}` : ''} md:px-8 ${index > 0 ? 'md:border-l md:border-white/15' : ''}`}
                >
                  <h3 className="mc-title mb-3 text-xl">{item.title}</h3>
                  <p className="mc-body mb-6">{item.body}</p>
                  <Link href={item.href} className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                    {item.linkLabel}
                    <Icon name="ArrowRight" className="size-4" aria-hidden />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evidence lives on the homepage and /case-studies. Repeating the same
            three-engagement band here would be the third page carrying it, so
            this page links out instead via the CTA below. */}

        <FinalCta
          heading="See where your operation can improve."
          body="In a 30 minute strategy call we will review your current stack, identify the automation opportunities worth pursuing, and give you an honest read on what is worth building."
          secondaryLabel="Read the case studies"
          secondaryHref="/case-studies"
        />
      </main>
    </>
  );
}