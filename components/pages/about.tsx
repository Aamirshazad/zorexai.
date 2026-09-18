import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { FinalCta } from '@/components/content/final-cta';
import { company } from '@/content/company';

/**
 * /about
 *
 * Rebuilt on the site's single ink/wash token vocabulary. The previous version
 * ran on the retired Material palette (font-ui, bg-panel-2,
 * text-ink-2), which meant the heading weight, heading colour, and
 * card radius all changed the moment a visitor moved from the homepage to this
 * page and back again.
 *
 * The two Unsplash photographs are gone. They were captioned "Zorex strategy
 * session" and "Zorex build team", describing licensed stock as though it
 * depicted this company, which is the fastest way to lose a technical buyer. In
 * their place is a team section that names the people who actually lead the
 * work and describes the rest of the bench by discipline.
 */

const principles: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'BadgeCheck',
    title: 'Judgment before speed',
    body: 'AI that decides badly, fast, is worse than no AI. Every system ships with logic constraints and human escalation paths.',
  },
  {
    icon: 'Database',
    title: 'Built on your data, your context',
    body: 'Generic tools give generic output. Our systems are configured around your specific business, not a one-size-fits-all model.',
  },
  {
    icon: 'FileText',
    title: 'Documentation, not dependency',
    body: 'Every deployment comes with clear documentation, so you understand what we built and can maintain it without us.',
  },
  {
    icon: 'Lock',
    title: 'NDA before any technical discovery',
    body: 'Standard practice. We protect your information the way we would want ours protected.',
  },
];

/**
 * Areas of expertise, for the About page.
 *
 * Written as craft rather than as people: the page describes what the work
 * involves without naming or counting anyone. Every line restates something the
 * services pages already claim, so this section extends the page without making
 * a claim the rest of the site does not carry.
 */
const areas: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'Bot',
    title: 'Agentic systems',
    body: 'Planning, tool use, and orchestration for multi-step work, with human review at the points that carry risk.',
  },
  {
    icon: 'Database',
    title: 'Retrieval and knowledge',
    body: 'Grounding in your own records, so answers come from your content rather than from a generic model.',
  },
  {
    icon: 'PlugZap',
    title: 'Systems integration',
    body: 'APIs, CRM and ERP connectivity, permissions, and data mapping against the tools you already run.',
  },
  {
    icon: 'FileCheck2',
    title: 'Evaluation and quality',
    body: 'Test sets, regression checks, and a measurable accuracy bar agreed before anything reaches production.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Governance and security',
    body: 'Least-privilege access, audit trails, and deployment inside your boundary: self-hosted, VPC, or air-gapped.',
  },
  {
    icon: 'Cog',
    title: 'Reliability engineering',
    body: 'Services, queues, schemas, and observability, so the intelligence stays usable in practice and not only in a demo.',
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
            <Breadcrumbs route="about" className="mb-8" />
            <div className="flex flex-col items-center max-w-3xl">
              <h1 className="display-type mb-6">
                We build the systems <span className="opacity-60">your growth depends on.</span>
              </h1>
              <p className="body-ink max-w-2xl mb-10">
                {company.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link className="btn-ink w-full sm:w-auto" href="/contact">
                  Book a Strategy Call
                  <Icon name="ArrowRight" className="ml-1 size-4" aria-hidden />
                </Link>
                <Link className="btn-ghost w-full sm:w-auto" href="/process">
                  See How We Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why we exist ─────────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8">
          <div className="max-w-container-max mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="reveal">
              <span className="eyebrow mb-4 block">Why Zorex Exists</span>
              <h2 className="section-title mb-4">Every growing business hits the same wall.</h2>
              <p className="lede mt-5 mb-6">
                The work that got you here starts costing more than it is worth. Your best people are doing work a
                system should be doing.
              </p>
              <p className="mc-body max-w-xl">
                We built Zorex for that moment: study how your business actually runs, then build the system that fixes
                what is slowing it down. Not a tool you have to manage, and not a model bolted onto a process that
                needed redesigning first.
              </p>
            </div>

            <div className="reveal reveal-delay-1 relative min-h-[300px] overflow-hidden rounded-[22px] border border-[var(--line)] sm:min-h-[380px]">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Zorex strategy session in a modern boardroom"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Operating facts: these four lines answer the questions a buyer asks
              before they ask about anything else, how big, how long, how
              structured, how reachable. They sit under the image rather than in
              its place, so the section keeps both the photograph and the facts. */}
          <div className="reveal reveal-delay-2 mx-auto mt-10 max-w-container-max">
            <dl className="grid grid-cols-1 gap-5 rounded-[22px] border border-[var(--line)] bg-panel p-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: 'Users' as IconName, label: 'Team', value: company.headcountLabel },
                { icon: 'CalendarClock' as IconName, label: 'Operating since', value: String(company.foundedYear) },
                { icon: 'Handshake' as IconName, label: 'Delivery model', value: 'No subcontracting' },
                { icon: 'Globe2' as IconName, label: 'Coverage', value: company.coverage },
              ].map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1">
                  <Icon name={fact.icon} className="mb-1.5 size-4 text-ink-3" aria-hidden />
                  <dt className="text-[13px] font-medium text-ink-3">{fact.label}</dt>
                  <dd className="text-[15px] font-medium leading-snug text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── What we build ────────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]" id="what-we-build">
          <div className="max-w-container-max mx-auto">
            <div className="reveal mb-12 max-w-[640px] sm:mb-16">
              <span className="eyebrow mb-4 block">What We Build</span>
              <h2 className="section-title mb-4">Three systems. One operating model.</h2>
              <p className="lede mt-5">
                Every engagement is one of these three shapes. The audit decides which, and the delivery model stays the
                same from there.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  href: '/service-agentic-ai',
                  icon: 'Bot' as const,
                  title: 'AI Agentic Systems',
                  body: 'Autonomous agents that understand requests, make judgment calls, and execute multi-step work end to end.',
                  cta: 'Explore Agentic AI',
                },
                {
                  href: '/service-ai-integration',
                  icon: 'PlugZap' as const,
                  title: 'AI Integration',
                  body: 'Connecting AI to the systems you already run: CRM, ERP, support desk, and data, without rip-and-replace.',
                  cta: 'Explore Integration',
                },
                {
                  href: '/service-vertical-ai',
                  icon: 'Layers3' as const,
                  title: 'Vertical AI Systems',
                  body: 'Industry-specific platforms built around your domain, compliance rules, and operational workflows.',
                  cta: 'Explore Vertical AI',
                },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`reveal${index > 0 ? ` reveal-delay-${index}` : ''} card-lift group flex flex-col rounded-[20px] border border-[var(--line)] bg-panel p-8 no-underline`}
                >
                  <span className="mb-6 flex size-10 items-center justify-center rounded-full border border-[var(--line-strong)]">
                    <Icon name={item.icon} className="text-sm text-ink" aria-hidden />
                  </span>
                  <h3 className="mc-title mb-3 text-xl text-ink">{item.title}</h3>
                  <p className="mc-body mb-6">{item.body}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:gap-3 transition-all">
                    {item.cta}
                    <Icon name="ArrowRight" className="size-4" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── How we build ─────────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]" id="how-we-build">
          <div className="max-w-container-max mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            {/* The build-team photograph sits beside the principles, as it did
                before, so the section reads as a working practice rather than a
                bare list of claims. */}
            <div className="reveal order-2 relative min-h-[300px] overflow-hidden rounded-[22px] border border-[var(--line)] sm:min-h-[380px] lg:order-1 lg:min-h-[460px]">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Zorex build team collaborating on a system design"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="reveal mb-10 max-w-[640px]">
                <span className="eyebrow mb-4 block">How We Build</span>
                <h2 className="section-title mb-4">Principles we do not bend.</h2>
              </div>
              <dl className="grid grid-cols-1 gap-y-8">
                {principles.map((item, index) => (
                  <div
                    key={item.title}
                    className={`reveal${index > 0 ? ` reveal-delay-${index}` : ''} flex items-start gap-4 border-b border-[var(--line)] pb-8 last:border-b-0 last:pb-0`}
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)]">
                      <Icon name={item.icon} className="text-sm text-ink" aria-hidden />
                    </span>
                    <div>
                      <dt className="mc-title mb-2 text-[17px] text-ink">{item.title}</dt>
                      <dd className="mc-body">{item.body}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ── Expertise ────────────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]" id="expertise">
          <div className="max-w-container-max mx-auto">
            <div className="reveal mb-12 max-w-[720px] sm:mb-16">
              <span className="eyebrow mb-4 block">Expertise</span>
              <h2 className="section-title mb-4">Depth in the parts of AI that decide whether it works.</h2>
              <p className="lede mt-5">
                The distance between an AI demo and an AI system is mostly not the model. It is the engineering around it:
                what the system reads, what it is allowed to act on, how it is checked before launch, and what happens
                when it is wrong. That surrounding work is the discipline.
              </p>
            </div>

            <dl className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {areas.map((area, index) => (
                <div
                  key={area.title}
                  className={`reveal${index > 0 ? ` reveal-delay-${Math.min(index, 2)}` : ''} flex flex-col rounded-[20px] border border-[var(--line)] bg-panel p-7`}
                >
                  <span className="mb-5 flex size-10 items-center justify-center rounded-[12px] border border-[var(--line-strong)] bg-panel-2">
                    <Icon name={area.icon} className="size-[18px] text-ink" aria-hidden />
                  </span>
                  <dt className="mc-title text-[17px] text-ink">{area.title}</dt>
                  <dd className="mc-body mt-2">{area.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <FinalCta
          heading="Ready to remove the operational bottleneck?"
          body="Partner with Zorex to build AI systems that remove operational drag and create room for growth."
          secondaryLabel="See our case studies"
          secondaryHref="/case-studies"
        />
      </main>
    </>
  );
}