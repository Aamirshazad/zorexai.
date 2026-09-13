'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { Reveal, RevealGroup } from '@/components/ui/reveal';
import { Marquee } from '@/components/ui/marquee';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FourPhases } from '@/components/content/four-phases';
import { TrustBar } from '@/components/content/trust-bar';
import { ProofStrip } from '@/components/content/proof-strip';
import { SecurityPosture } from '@/components/content/security-posture';
import { SmartForm } from '@/components/ui/smart-form';

const marqueeItems = [
  'Agentic AI Systems',
  'AI Integration',
  'Vertical AI Systems',
  'Workflow Automation',
  'System Integration',
  'Decision Support',
];

export default function PageContent() {
  return <>
<main className="font-ui bg-page-wash">
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative px-5 sm:px-8 pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden">
    <div className="hero-media" aria-hidden="true">
      <video autoPlay muted loop playsInline preload="metadata">
        <source src="/videos/hero-waves-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/videos/hero-waves.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="max-w-container-max mx-auto relative z-10">
      <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
        <Reveal delay={0.08}>
          <p className="mb-6 font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
            AI software company for growing operations teams
          </p>
        </Reveal>
        <h1 className="display-type mb-6" id="hero-headline">
          AI systems built around the way your business <span className="opacity-60">actually works.</span>
        </h1>
        <Reveal delay={0.16}>
          <p className="body-ink max-w-2xl mb-10" id="hero-description">Zorex AI designs, builds, deploys, and continuously improves AI-powered systems agentic systems and AI integrated with your existing tools so your team spends its time on the work that needs judgment.</p>
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

  {/* ── Trust bar verifiable facts, not client metrics ───────────── */}
  <TrustBar />

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
        <h2 className="section-title">Your people should be solving problems not carrying the same workload every day.</h2>
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
          <p className="body-ink mt-4">We start with the workflow, the business outcome, and the constraints then design the system around your existing operation.</p>
        </div>
        <Link className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-[var(--line-strong)] pb-0.5 hover:border-ink transition-colors" href="/services">See All Services<Icon name="ArrowRight" className="size-4" aria-hidden /> </Link>
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

  {/* ── How We Think About AI light grain trio ─────────────────── */}
  <section className="py-section-padding px-5 sm:px-8" id="company-positioning">
    <div className="max-w-container-max mx-auto">
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="eyebrow mb-4 block justify-center">How We Think About AI</span>
        <h2 className="section-title">The business function comes first. The technology follows.</h2>
      </ScrollReveal>
      <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.1}>
        <div className="grain grain-mineral">
          <span className="mc-label">Principle 01</span>
          <h3 className="mc-title text-xl mb-3">Start with the work</h3>
          <p className="mc-body">Not a model or a tool the work that consumes people, creates delays, and limits scale.</p>
        </div>
        <div className="grain grain-sand">
          <span className="mc-label">Principle 02</span>
          <h3 className="mc-title text-xl mb-3">Design the system around it</h3>
          <p className="mc-body">Coordinating context, actions, tools, and controls so the business executes with less friction.</p>
        </div>
        <div className="grain grain-charcoal">
          <span className="mc-label">Principle 03</span>
          <h3 className="mc-title text-xl mb-3">Aim for better execution</h3>
          <p className="mc-body">The goal is not more AI. The goal is better business execution.</p>
        </div>
      </RevealGroup>
    </div>
  </section>

  {/* ── Why Zorex AI white panels + hairlines ───────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]">
    <div className="max-w-container-max mx-auto">
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="eyebrow mb-4 block justify-center">Why Zorex AI</span>
        <h2 className="section-title">Why Companies Bring In Zorex</h2>
        <p className="body-ink mt-4">Businesses can add headcount, stitch together tools, or build internally. We focus on the gap between those approaches.</p>
      </ScrollReveal>
      <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.1}>
        <div className="card-lift bg-panel border border-[var(--line)] rounded-[20px] p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-6"> <div className="size-10 border border-[var(--line-strong)] rounded-full flex items-center justify-center"> <Icon name="UserPlus" className="text-ink-2 text-sm" aria-hidden /> </div> <h3 className="mc-title text-lg">Add More Headcount</h3> </div>
          <p className="mc-body mb-6">Every hire adds salary, ramp-up time, and management overhead and capacity only grows one person at a time.</p>
          <div className="mt-auto border-t border-[var(--line)] pt-4"> <p className="text-[13.5px] leading-[1.55] text-ink flex items-start gap-2"><Icon name="ArrowRight" className="mt-0.5 shrink-0 size-4" aria-hidden />Zorex builds the system once, then scales it across workflows as you grow.</p> </div>
        </div>
        <div className="card-lift bg-panel border border-[var(--line)] rounded-[20px] p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-6"> <div className="size-10 border border-[var(--line-strong)] rounded-full flex items-center justify-center"> <Icon name="PanelsTopLeft" className="text-ink-2 text-sm" aria-hidden /> </div> <h3 className="mc-title text-lg">Stack More Software</h3> </div>
          <p className="mc-body mb-6">Zapier and generic chatbots handle simple if-then rules not judgment, context, or your specific workflows.</p>
          <div className="mt-auto border-t border-[var(--line)] pt-4"> <p className="text-[13.5px] leading-[1.55] text-ink flex items-start gap-2"><Icon name="ArrowRight" className="mt-0.5 shrink-0 size-4" aria-hidden />Zorex builds AI that handles context and judgment, not just fixed rules.</p> </div>
        </div>
        <div className="card-lift bg-panel border border-[var(--line)] rounded-[20px] p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-6"> <div className="size-10 border border-[var(--line-strong)] rounded-full flex items-center justify-center"> <Icon name="Bot" className="text-ink-2 text-sm" aria-hidden /> </div> <h3 className="mc-title text-lg">Hire a Generic AI Vendor</h3> </div>
          <p className="mc-body mb-6">They build what you describe without understanding your operations deeply enough to know what to build.</p>
          <div className="mt-auto border-t border-[var(--line)] pt-4"> <p className="text-[13.5px] leading-[1.55] text-ink flex items-start gap-2"><Icon name="ArrowRight" className="mt-0.5 shrink-0 size-4" aria-hidden />Zorex audits your operations first, then builds what you need.</p> </div>
        </div>
      </RevealGroup>
    </div>
  </section>

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
          <p className="mc-body mb-10 max-w-xl mx-auto">Use our AI Readiness Scorecard to find where repetitive work, disconnected systems, or slow decisions are costing you the most.</p>
          <SmartForm
            id="lead-magnet-form"
            subject="AI Readiness Scorecard Request"
            className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
            submitLabel="Send Me the Scorecard"
            submitClassName="btn-ink w-full sm:w-auto !bg-white !text-ink hover:!bg-white/90"
            successTitle="Scorecard on its way."
            successBody="Check your inbox in the next few minutes. If it helps, bring it to a strategy call it gives us a head start on your workflows."
          >
            <label htmlFor="lead-magnet-email" className="sr-only">Business email</label>
            <input
              id="lead-magnet-email"
              className="flex-1 w-full px-5 h-12 rounded-[10px] border border-[var(--grain-chip-bd)] bg-[var(--grain-chip)] text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/60 focus:border-transparent outline-none text-sm"
              name="email" placeholder="your@email.com" autoComplete="email" inputMode="email" required={true} type="email"
            />
          </SmartForm>
          <p className="mc-body opacity-60 text-xs mt-4">No spam. Unsubscribe anytime. We respect your inbox.</p>
        </div>
      </Reveal>
    </div>
  </section>

  {/* ── Final CTA full-bleed grain-teal + security posture ─────── */}
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
    <SecurityPosture inverse />
  </section>
</main>
  </>;
}
