'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { Reveal, RevealGroup } from '@/components/ui/reveal';
import { Marquee } from '@/components/ui/marquee';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FourPhases } from '@/components/content/four-phases';
import { TrustBar } from '@/components/content/trust-bar';
import { ProofStrip } from '@/components/content/proof-strip';
import { AlternativesTable } from '@/components/content/alternatives-table';
import { SystemArchitecture } from '@/components/content/system-architecture';
import { SmartForm } from '@/components/ui/smart-form';

const marqueeItems = [
  'Agentic AI Systems',
  'AI Integration',
  'Vertical AI Systems',
  'Workflow Automation',
  'System Integration',
  'Decision Support',
];

/**
 * The site's point of view, stated once.
 *
 * These were previously three grain cards, directly beneath a three-card
 * friction grid and directly above what became a three-card comparison. Three
 * card grids in a row is the single most common shape on the page, so the
 * principle set is now a definition list inside one panel: same content, a
 * shape the reader has not just seen twice.
 */
const principles = [
  {
    number: '01',
    title: 'Start with the work',
    body: 'Not a model and not a tool. Start with the work that consumes people, creates delays, and caps how far the business can scale.',
  },
  {
    number: '02',
    title: 'Design the system around it',
    body: 'Context, actions, tools, and controls coordinated so the business executes with less friction, rather than more software to manage.',
  },
  {
    number: '03',
    title: 'Aim for better execution',
    body: 'The goal was never more AI. It is a business function that runs reliably without somebody chasing it every week.',
  },
];

export default function PageContent() {
  // The hero video is the LCP element on this page, so it keeps
  // `preload="auto"` on the <video> element itself.
  //
  // An earlier version asked React to hoist rel="preload" hints for it with
  // `{ as: 'video' }`. `video` is not a valid preload destination, so browsers
  // discarded both tags and logged "unsupported `as` value" twice on every
  // load — the hint never prioritised anything. Removed rather than left in
  // place doing nothing.
  return <>
<main className="font-ui bg-page-wash">
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative px-5 sm:px-8 pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden">
    <div className="hero-media" aria-hidden="true">
      <video autoPlay muted loop playsInline preload="auto" disablePictureInPicture>
        <source src="/videos/hero-waves-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/videos/hero-waves.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="max-w-container-max mx-auto relative z-10">
      <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
        <Reveal delay={0.08}>
          <p className="mb-6 font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
            Agentic AI &middot; AI integration &middot; Vertical AI systems
          </p>
        </Reveal>
        <h1 className="display-type mb-6" id="hero-headline">
          AI systems for operations teams <span className="opacity-60">that have outgrown manual work.</span>
        </h1>
        <Reveal delay={0.16}>
          {/* Definition-first opening paragraph. Answer engines extract passages
              of roughly 40-80 words that answer the query, so the first thing on
              the page is a self-contained answer to "what does Zorex AI do". */}
          <p className="body-ink max-w-2xl mb-10" id="hero-description">
            Zorex AI designs, builds, deploys, and continuously improves AI systems that fit the way your business
            already works. That means agentic systems that carry a whole workflow, AI integrated with the tools you
            already run, and industry-specific systems. Your team keeps the judgment work; the repetition moves to
            software.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link className="btn-ink w-full sm:w-auto" href="/contact">Book a Strategy Call<Icon name="ArrowRight" className="ml-1 size-4" aria-hidden /> </Link>
            <Link className="btn-ghost w-full sm:w-auto" href="/case-studies">See Our Work</Link>
          </div>
        </Reveal>
      </div>
    </div>
  </section>

  {/* ── Capability marquee ───────────────────────────────────────── */}
  <section className="py-6 px-5 sm:px-8 border-y border-[var(--line)] overflow-hidden">
    <Marquee className="max-w-container-max mx-auto" trackClassName="gap-10">
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center gap-10 pr-10 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
          {item}
        </span>
      ))}
    </Marquee>
  </section>

  {/* ── The Operational Bottleneck dark grain cards ───────────── */}
  <section className="py-section-padding px-5 sm:px-8">
    <div className="max-w-container-max mx-auto">
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="eyebrow mb-4 block justify-center">The Operational Bottleneck</span>
        <h2 className="section-title">Your people should be solving problems, not carrying the same workload every day.</h2>
      </ScrollReveal>
      <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.1}>
        <div className="grain grain-charcoal">
          <span className="mc-label">Friction Point 01</span>
          <h4 className="mc-title text-2xl">The Data Is &quot;Somewhere&quot;</h4>
          <p className="mc-body">Your CRM says one thing, your billing software says another, and your team spends hours cross-referencing spreadsheets just to send an invoice.</p>
        </div>
        <div className="grain grain-teal">
          <span className="mc-label">Friction Point 02</span>
          <h4 className="mc-title text-2xl">The &quot;I&apos;ll Do It Later&quot; Trap</h4>
          <p className="mc-body">Critical follow-ups, contract generations, and client onboarding tasks get delayed because &quot;busy work&quot; takes precedence over revenue-generating work.</p>
        </div>
        <div className="grain grain-steel">
          <span className="mc-label">Friction Point 03</span>
          <h4 className="mc-title text-2xl">Expert Time on Administrative Work</h4>
          <p className="mc-body">Your most experienced people spend part of every day clicking buttons, copy-pasting data, and manually updating task boards.</p>
        </div>
      </RevealGroup>
    </div>
  </section>

  {/* ── What We Automate bento (labels match destination H1s) ────── */}
  <section className="py-section-padding px-5 sm:px-8" id="services">
    <div className="max-w-container-max mx-auto">
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="eyebrow mb-4 block">What We Automate</span>
          <h2 className="section-title">We build systems around the work that matters most.</h2>
          <p className="body-ink mt-4">We start with the workflow, the business outcome, and the constraints. Then we design the system around your existing operation.</p>
        </div>
        <Link className="footer-link gap-2 border-b border-[var(--line-strong)] pb-0.5 text-sm font-medium text-ink transition-colors hover:border-ink" href="/services">See All Services<Icon name="ArrowRight" className="size-4" aria-hidden /> </Link>
      </ScrollReveal>
      <RevealGroup className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(280px,auto)]" stagger={0.1}>
        <Link className="grain grain-olive md:col-span-6 flex flex-col justify-between group no-underline" href="/service-llm-applications">
          <div>
            <span className="mc-label">Customer &amp; Service Operations</span>
            <h3 className="mc-title text-2xl sm:text-3xl mb-4">LLM applications for front-line work</h3>
            <p className="mc-body max-w-md">Systems that reduce repetitive customer and service work, route requests intelligently, and keep responses moving without increasing headcount.</p>
          </div>
          <div className="mt-8 pt-6 border-t border-[var(--grain-chip-bd)] flex flex-col gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] opacity-80 flex items-center gap-1.5"><Icon name="CircleCheck" className="text-xs" aria-hidden />Answers from your own knowledge base</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] opacity-80 flex items-center gap-1.5"><Icon name="CircleCheck" className="text-xs" aria-hidden />Routes requests intelligently</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] opacity-80 flex items-center gap-1.5"><Icon name="CircleCheck" className="text-xs" aria-hidden />Escalates edge cases to your team</span>
            <div className="flex justify-end mt-4"> <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">Explore LLM Applications<Icon name="ArrowRight" className="size-4" aria-hidden /></span> </div>
          </div>
        </Link>
        <Link className="card-lift md:col-span-6 bg-panel rounded-[20px] border border-[var(--line)] p-8 hover:bg-panel-2 flex flex-col group no-underline" href="/service-agentic-ai">
          <div className="flex items-center gap-4 mb-6"> <div className="size-10 border border-[var(--line-strong)] rounded-full flex items-center justify-center"> <Icon name="Brain" className="text-ink text-sm" aria-hidden /> </div> <h3 className="mc-title text-xl">Agentic systems for revenue &amp; marketing ops</h3> </div>
          <p className="mc-body mb-6">Systems that accelerate qualification, follow-up, research, and execution across revenue and marketing workflows.</p>
          <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-2 flex items-center gap-1.5"><Icon name="CircleCheck" className="text-xs" aria-hidden />Automated follow-ups</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-2 flex items-center gap-1.5"><Icon name="CircleCheck" className="text-xs" aria-hidden />Lead scoring &amp; routing</span>
            <div className="w-full flex justify-end mt-4 pt-4 border-t border-[var(--line)]"> <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">Explore Agentic AI<Icon name="ArrowRight" className="size-4" aria-hidden /></span> </div>
          </div>
        </Link>
        <Link className="card-lift md:col-span-6 bg-panel rounded-[20px] border border-[var(--line)] p-8 hover:bg-panel-2 no-underline group" href="/service-ai-integration">
          <div className="flex items-center gap-4 mb-6"> <div className="size-10 border border-[var(--line-strong)] rounded-full flex items-center justify-center"> <Icon name="Server" className="text-ink text-sm" aria-hidden /> </div> <h3 className="mc-title text-xl">AI Integration</h3> </div>
          <p className="mc-body mb-4">Connect intelligence to the systems you already depend on without forcing a costly rip-and-replace.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-2 flex items-center gap-1.5"><Icon name="CircleCheck" className="text-xs" aria-hidden />CRM, ERP, support, and data tools</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-2 flex items-center gap-1.5"><Icon name="CircleCheck" className="text-xs" aria-hidden />No rip-and-replace required</span>
            <div className="w-full flex justify-end mt-4 pt-4 border-t border-[var(--line)]"> <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">Explore AI Integration<Icon name="ArrowRight" className="size-4" aria-hidden /></span> </div>
          </div>
        </Link>
        <Link className="card-lift md:col-span-6 bg-panel rounded-[20px] border border-[var(--line)] p-8 hover:bg-panel-2 no-underline group" href="/service-ai-automations">
          <div className="flex items-center gap-4 mb-6"> <div className="size-10 border border-[var(--line-strong)] rounded-full flex items-center justify-center"> <Icon name="Route" className="text-ink text-sm" aria-hidden /> </div> <h3 className="mc-title text-xl">Intelligent Workflow Automation</h3> </div>
          <p className="mc-body mb-4">Automate repetitive workflows that require data movement, judgment, routing, or consistent follow-through.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-2 flex items-center gap-1.5"><Icon name="CircleCheck" className="text-xs" aria-hidden />End-to-end orchestration</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-2 flex items-center gap-1.5"><Icon name="CircleCheck" className="text-xs" aria-hidden />Built for judgment calls, not just rules</span>
            <div className="w-full flex justify-end mt-4 pt-4 border-t border-[var(--line)]"> <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">Explore Workflow Automation<Icon name="ArrowRight" className="size-4" aria-hidden /></span> </div>
          </div>
        </Link>
      </RevealGroup>
    </div>
  </section>

  {/* ── The four phases ──────────────────────────────────────────── */}
  <FourPhases showProcessLink />

  {/* ── Evidence what changed on three real engagements ────────── */}
  <ProofStrip />

  {/* ── Point of view: one statement band, not three more cards ───── */}
  <section className="py-section-padding px-5 sm:px-8" id="company-positioning">
    <div className="max-w-container-max mx-auto">
      <Reveal>
        <div className="grain grain-charcoal grain-roomy">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div>
              <span className="mc-label">How We Think About AI</span>
              <p className="display-type mt-6" style={{ fontSize: 'clamp(26px, 3.2vw, 40px)' }}>
                The business function comes first. <span className="opacity-60">The technology follows.</span>
              </p>
            </div>
            <dl className="flex flex-col divide-y divide-white/15 border-t border-white/15 lg:border-t-0">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="grid gap-3 py-6 first:pt-0 last:pb-0 lg:grid-cols-[auto_1fr] lg:gap-8"
                >
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.16em] opacity-60">
                    {principle.number}
                  </span>
                  <div>
                    <dt className="mc-title mb-2 text-lg">{principle.title}</dt>
                    <dd className="mc-body max-w-xl">{principle.body}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </div>
  </section>

  {/* ── What a delivered system looks like honest diagram, no stock ── */}
  <section className="py-section-padding px-5 sm:px-8" id="what-you-get">
    <div className="max-w-container-max mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
      <ScrollReveal>
        <span className="eyebrow mb-4 block">What You Get</span>
        <h2 className="section-title mb-4">Something running on Monday, not a recommendation deck.</h2>
        <p className="lede mt-5 mb-8">
          Every engagement ends with a system in production, wired into the tools that already hold the data. What we
          hand over is the same shape every time, because the shape is what makes it maintainable.
        </p>
        <ul className="flex flex-col gap-4 border-t border-[var(--line)] pt-8 list-none">
          {[
            'The working system, deployed in your environment or ours.',
            'Integrations into the CRM, ERP, or desk that already holds the records.',
            'A review queue for the exceptions the system should not decide alone.',
            'Code, prompts, and runbooks written so your team can maintain it.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[13.5px] leading-[1.55] text-ink">
              <Icon name="CircleCheck" className="mt-0.5 size-4 shrink-0 text-ink-2" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </ScrollReveal>
      <SystemArchitecture />
    </div>
  </section>

  {/* ── The four alternatives, as a comparison rather than three cards ── */}
  <AlternativesTable
    footnote="If none of these options is right for your workflow, the audit will tell you so. That answer costs you one call and saves you a project."
  />

  {/* ── Lead magnet in-app submission, no off-site redirect ────── */}
  <section className="py-section-padding px-5 sm:px-8">
    <div className="max-w-3xl mx-auto">
      <Reveal>
        <div className="grain grain-charcoal rounded-[22px] text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full font-semibold text-[10px] uppercase tracking-[0.14em] mb-8 border-[var(--grain-chip-bd)] bg-[var(--grain-chip)]">
            <Icon name="CircleHelp" className="text-sm icon-fill opacity-70" aria-hidden />
            <span className="opacity-80">Free Resource</span>
          </div>
          <h2 className="section-title text-white mb-6">Not Ready for a Strategy Call? Start With the Problem.</h2>
          <p className="mc-body mb-10 max-w-xl mx-auto">Use the same readiness checklist we run in an audit to find where repetitive work, disconnected systems, or slow decisions are costing you the most.</p>
          <SmartForm
            id="lead-magnet-form"
            subject="AI Readiness Checklist Request"
            className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
            submitLabel="Send Me the Checklist"
            submitClassName="btn-ink w-full sm:w-auto !bg-white !text-ink hover:!bg-white/90"
            successTitle="On its way."
            /* The previous copy promised the asset "in the next few minutes",
               which was never true: the form posts to Formspree and a person
               sends the next reply. It now describes what actually happens. */
            successBody="We send these ourselves, so expect it within one business day. If it raises a question, reply to that email and you will reach an engineer rather than a queue."
          >
            <label htmlFor="lead-magnet-email" className="sr-only">Business email</label>
            <input
              id="lead-magnet-email"
              className="flex-1 w-full px-5 h-12 rounded-[10px] border border-[var(--grain-chip-bd)] bg-[var(--grain-chip)] text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/60 focus:border-transparent outline-none text-sm"
              name="email" placeholder="your@email.com" autoComplete="email" inputMode="email" required={true} type="email"
            />
          </SmartForm>
          <p className="mc-body opacity-60 text-xs mt-4">One email, sent by a person. No list, no sequence, unsubscribe by replying.</p>
        </div>
      </Reveal>
    </div>
  </section>

  {/* ── How we operate: the practical facts, then the ask ────────── */}
  <TrustBar />

  {/* ── Final CTA full-bleed grain-teal ─────── */}
  <section className="cta-bleed grain grain-teal" id="book">
    <div className="max-w-4xl mx-auto text-center">
      <Reveal>
        <h2 className="display-type text-white mb-8" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>Know where your operations slow down?<br /><span className="opacity-60">Let&apos;s find the right place to start.</span></h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mc-body text-[15px] mb-8 max-w-2xl mx-auto">We&apos;ll review your workflow, identify 2–3 opportunities worth automating, and give you a clear recommendation on what to build and what not to.</p>
      </Reveal>
      <Reveal delay={0.18}>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="chip chip-grain">Free</span>
          <span className="chip chip-grain">30 minutes</span>
          <span className="chip chip-grain">No obligation</span>
        </div>
      </Reveal>
      <Reveal delay={0.26}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link className="btn-ink w-full sm:w-auto !bg-white !text-ink hover:!bg-white/90" href="/contact">Book a Strategy Call<Icon name="ArrowRight" className="ml-1 size-4" aria-hidden /> </Link>
          <Link className="btn-ghost w-full sm:w-auto !border-white/30 !text-white hover:!bg-white/10" href="/case-studies">See Client Results</Link>
        </div>
      </Reveal>
    </div>
  </section>
</main>
  </>;
}
