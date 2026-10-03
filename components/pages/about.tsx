import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Reveal } from '@/components/ui/reveal';
import { FinalCta } from '@/components/content/final-cta';
import { company } from '@/content/company';

/**
 * /about
 *
 * Built on the site's single ink/wash token vocabulary.
 * Structure: Hero → Why We Exist (kept) → Who We Are (embedded partner
 * identity) → What We Do (slim definitions) → Our Belief → CTA.
 */

const capabilities: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'Handshake',
    title: 'Embedded Engineering',
    body: 'Our engineers work directly with your team, codebase, infrastructure, and systems.',
  },
  {
    icon: 'Bot',
    title: 'AI Systems',
    body: 'We design and deploy AI-powered capabilities across critical business workflows.',
  },
  {
    icon: 'RefreshCw',
    title: 'Continuous Deployment',
    body: 'As your needs evolve, we continuously improve existing systems and deploy new capabilities.',
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
                We build systems <span className="opacity-60">inside your business.</span>
              </h1>
              <p className="body-ink max-w-2xl mb-10">
                Zorex is a Vertical AI Systems company that helps businesses turn complex, manual operations into production-ready systems.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link className="btn-ink w-full sm:w-auto" href="/contact#book">
                  Book a Strategy Call
                  <Icon name="ArrowRight" className="ml-1 size-4" aria-hidden />
                </Link>
                <Link className="btn-ghost w-full sm:w-auto" href="/case-studies">
                  See Our Work
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
              <h2 className="section-title mb-4">Bridging the Gap Between AI Capability and Operational Impact</h2>
              <p className="lede mt-5 mb-6">
                AI is becoming capable of doing increasingly meaningful work inside organizations.
              </p>
              <p className="mc-body max-w-xl">
                The challenge now is helping companies integrate these systems into the infrastructure
                and workflows that power their businesses. Zorex is designed to help organizations
                bridge that gap and turn AI capability into real operational impact.
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

        {/* ── Who We Are — Embedded partner identity ────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]" id="who-we-are">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:items-start">
              {/* Left column — narrative */}
              <div className="reveal max-w-xl">
                <span className="eyebrow mb-4 block">Who We Are</span>
                <h2 className="section-title mb-6">An embedded engineering partner.</h2>
                <div className="space-y-5">
                  <p className="mc-body text-[15px] leading-relaxed">
                    We work as an embedded engineering partner&mdash;working alongside your team,
                    understanding your existing technology and workflows, and building directly
                    within your environment.
                  </p>
                  <p className="mc-body text-[15px] leading-relaxed font-medium text-ink">
                    We don&apos;t just deliver prototypes or hand over software.
                  </p>
                  <p className="mc-body text-[15px] leading-relaxed">
                    We take problems from discovery to deployment, adoption, and continuous
                    improvement&mdash;with a focus on measurable business outcomes.
                  </p>
                  <p className="mc-body text-[15px] leading-relaxed">
                    Our approach combines deep engineering with practical business understanding,
                    so what we build fits the way your company actually operates.
                  </p>
                </div>
              </div>

              {/* Right column — operating model chips + method statement */}
              <div className="reveal reveal-delay-1">
                <div className="rounded-[22px] border border-[var(--line)] bg-panel p-7 sm:p-9">
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3 mb-6 block">Operating Model</span>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)]">
                        <Icon name="Users" className="size-4 text-ink" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">{company.headcountLabel}</p>
                        <p className="text-xs text-ink-3">Senior engineers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)]">
                        <Icon name="Globe2" className="size-4 text-ink" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">Remote-first</p>
                        <p className="text-xs text-ink-3">No subcontractors</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)]">
                        <Icon name="KeyRound" className="size-4 text-ink" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">You own everything</p>
                        <p className="text-xs text-ink-3">Code, prompts, docs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)]">
                        <Icon name="ShieldCheck" className="size-4 text-ink" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">NDA first</p>
                        <p className="text-xs text-ink-3">Before any discovery</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-[var(--line)] pt-6">
                    <p className="text-[15px] font-medium text-ink leading-snug">
                      Start with one important problem. Deploy the solution. Prove the impact. Then expand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What We Do — slim definitions, not sales cards ────────────── */}
        <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]" id="what-we-do">
          <div className="max-w-container-max mx-auto">
            <Reveal className="mb-12 max-w-2xl sm:mb-14">
              <span className="eyebrow mb-4 block">What We Do</span>
              <h2 className="section-title">Three capabilities, one embedded team.</h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-px md:grid-cols-3 rounded-[22px] border border-[var(--line)] bg-[var(--line)] overflow-hidden">
              {capabilities.map((cap, index) => (
                <div
                  key={cap.title}
                  className={`reveal${index > 0 ? ` reveal-delay-${index}` : ''} flex flex-col bg-panel p-7 sm:p-8`}
                >
                  <span className="mb-5 flex size-11 items-center justify-center rounded-[14px] border border-[var(--line-strong)] bg-panel-2">
                    <Icon name={cap.icon} className="size-5 text-ink" aria-hidden />
                  </span>
                  <h3 className="mc-title text-lg text-ink mb-2">{cap.title}</h3>
                  <p className="mc-body text-sm leading-relaxed">{cap.body}</p>
                </div>
              ))}
            </div>

            <Reveal className="mt-10 text-center">
              <Link
                className="footer-link gap-2 border-b border-[var(--line-strong)] pb-0.5 font-medium text-ink transition-colors hover:border-ink group"
                href="/services"
              >
                See all services
                <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform size-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Our Belief — editorial closing statement ──────────────────── */}
        <section className="cta-bleed grain grain-charcoal" id="our-belief">
          <div className="max-w-4xl mx-auto text-center">
            <span className="reveal mc-label">Our Belief</span>
            <h2
              className="reveal reveal-delay-1 display-type mt-6"
              style={{ fontSize: 'clamp(28px, 4.2vw, 46px)' }}
            >
              The future of business software isn&apos;t more disconnected tools.{' '}
              <span className="opacity-60">
                It is intelligent systems built around the way each business actually works.
              </span>
            </h2>
          </div>
        </section>

        <FinalCta
          heading="Start with one problem. See it working in production."
          body="Partner with Zorex to build AI systems that remove operational drag and create room for growth."
          secondaryLabel="See our case studies"
          secondaryHref="/case-studies"
        />
      </main>
    </>
  );
}