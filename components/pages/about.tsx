import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { FinalCta } from '@/components/content/final-cta';
import { company, teamComposition } from '@/content/company';

/**
 * /about
 *
 * Built on the site's single ink/wash token vocabulary.
 * Presents the company's operating model, the multidisciplinary senior
 * engineering bench, and our client commitments.
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
 * The three core operating pillars of Zorex AI.
 */
const corePillars: { number: string; icon: IconName; title: string; subtitle: string; body: string; href: string; cta: string }[] = [
  {
    number: '01',
    icon: 'Compass',
    title: 'AI Strategy & Roadmapping',
    subtitle: 'From scattered experiments to an adopted roadmap',
    body: 'We audit workflows alongside your people using our CLIMB method. Pinpoint high-impact bottlenecks, evaluate real ROI, and define an actionable implementation roadmap.',
    href: '/contact#book',
    cta: 'Book a Strategy Call',
  },
  {
    number: '02',
    icon: 'Bot',
    title: 'Production Systems & Integration',
    subtitle: 'Custom agentic software built for your stack',
    body: 'We build autonomous agentic workflows and direct CRM/ERP connectors with deterministic guardrails. Working systems engineered for your real operational volume.',
    href: '/services',
    cta: 'Explore services',
  },
  {
    number: '03',
    icon: 'Users',
    title: 'Team & Workforce Enablement',
    subtitle: 'From AI-curious to AI-capable across all levels',
    body: 'Practical, hands-on enablement for business leaders, super-user managers, and frontline employees to safely build, manage, and scale AI workflows.',
    href: '/contact#book',
    cta: 'Book a Strategy Call',
  },
];

/**
 * Client assurances and operating commitments.
 */
const commitments: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'KeyRound',
    title: '100% IP & Code Ownership',
    body: 'Everything we write belongs to you: code, prompts, configurations, and documentation. No proprietary lock-in or recurring runtime licenses.',
  },
  {
    icon: 'FileCheck2',
    title: 'Fixed Scope & Clear Deliverables',
    body: 'We define the deliverables, timeline, and investment upfront. No surprise billing and no runaway hourly meters.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Zero-Trust Data Protection',
    body: 'Mutual NDAs before discovery. Client data is never used to train public models, and systems deploy within private client VPC boundaries.',
  },
  {
    icon: 'LifeBuoy',
    title: 'Included Launch & Handoff Support',
    body: 'Every system includes comprehensive documentation, team training, and post-launch support to ensure your team is confident and self-sufficient.',
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
                <Link className="btn-ink w-full sm:w-auto" href="/contact#book">
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

        {/* ── What We Deliver ─────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]" id="what-we-deliver">
          <div className="max-w-container-max mx-auto">
            <div className="reveal mb-12 max-w-[720px] sm:mb-16">
              <span className="eyebrow mb-4 block">What We Deliver</span>
              <h2 className="section-title mb-4">Three ways we put AI to work across your business.</h2>
              <p className="lede mt-5">
                From finding where AI moves the needle to shipping production systems and upskilling your team — we cover the full journey from strategy to operational independence.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {corePillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`reveal${index > 0 ? ` reveal-delay-${index}` : ''} flex flex-col justify-between rounded-[22px] border border-[var(--line)] bg-panel p-8 transition-colors hover:border-[var(--line-strong)]`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-ink-3">
                        {pillar.number}
                      </span>
                      <span className="flex size-10 items-center justify-center rounded-[12px] border border-[var(--line-strong)] bg-panel-2">
                        <Icon name={pillar.icon} className="size-[18px] text-ink" aria-hidden />
                      </span>
                    </div>
                    <h3 className="mc-title text-xl text-ink mb-2">{pillar.title}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-4">{pillar.subtitle}</p>
                    <p className="mc-body text-sm leading-relaxed">{pillar.body}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-[var(--line)]">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-ink-2"
                    >
                      {pillar.cta}
                      <Icon name="ArrowRight" className="size-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who Builds Your Systems ──────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]" id="team-and-disciplines">
          <div className="max-w-container-max mx-auto">
            <div className="reveal mb-12 max-w-[720px] sm:mb-16">
              <span className="eyebrow mb-4 block">The Team</span>
              <h2 className="section-title mb-4">Senior-only bench. Zero junior handoffs.</h2>
              <p className="lede mt-5">
                {company.structure} You work directly with engineers and architects who have shipped production software for years.
              </p>
            </div>

            {/* Neutral engineering standards banner */}
            <div className="reveal mb-8 rounded-[24px] border border-[var(--line)] bg-panel p-8 sm:p-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col gap-2">
                  <span className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-ink-3">Staffing Model</span>
                  <h3 className="mc-title text-xl text-ink">Senior-only talent</h3>
                  <p className="mc-body text-sm">Every project is architected and built by engineers with over a decade of software experience. No junior bench to absorb costs.</p>
                </div>
                <div className="flex flex-col gap-2 border-t border-[var(--line)] pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                  <span className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-ink-3">Delivery Structure</span>
                  <h3 className="mc-title text-xl text-ink">100% In-house</h3>
                  <p className="mc-body text-sm">No subcontracting or white-label outsourcing. You collaborate directly with the engineers writing your code and pipelines.</p>
                </div>
                <div className="flex flex-col gap-2 border-t border-[var(--line)] pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                  <span className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-ink-3">Collaboration</span>
                  <h3 className="mc-title text-xl text-ink">Direct communication</h3>
                  <p className="mc-body text-sm">{company.coverage} Standing weekly sprints, direct shared channels, and clear progress visibility.</p>
                </div>
              </div>
            </div>

            {/* Multidisciplinary senior bench */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {teamComposition.map((item, index) => (
                <div
                  key={item.discipline}
                  className={`reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ''} flex flex-col rounded-[20px] border border-[var(--line)] bg-panel p-6`}
                >
                  <span className="mb-4 flex size-10 items-center justify-center rounded-[12px] border border-[var(--line-strong)] bg-panel-2">
                    <Icon name={item.icon} className="size-[18px] text-ink" aria-hidden />
                  </span>
                  <h4 className="mc-title text-base text-ink capitalize mb-2">{item.discipline}</h4>
                  <p className="mc-body text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Client Commitments ───────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]" id="commitments">
          <div className="max-w-container-max mx-auto">
            <div className="reveal mb-12 max-w-[720px] sm:mb-16">
              <span className="eyebrow mb-4 block">Our Commitments</span>
              <h2 className="section-title mb-4">Policies we write into every engagement.</h2>
              <p className="lede mt-5">
                Entering an applied AI engagement should not require taking on unquantified risk. We establish clear terms from day one so you always stay in control.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {commitments.map((item, index) => (
                <div
                  key={item.title}
                  className={`reveal${index > 0 ? ` reveal-delay-${Math.min(index, 2)}` : ''} flex items-start gap-4 rounded-[20px] border border-[var(--line)] bg-panel p-7`}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] border border-[var(--line-strong)] bg-panel-2">
                    <Icon name={item.icon} className="size-[18px] text-ink" aria-hidden />
                  </span>
                  <div>
                    <h3 className="mc-title text-lg text-ink mb-2">{item.title}</h3>
                    <p className="mc-body text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
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