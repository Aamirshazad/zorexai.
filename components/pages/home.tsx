'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { Reveal, RevealGroup } from '@/components/ui/reveal';
import { Marquee } from '@/components/ui/marquee';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FourPhases } from '@/components/content/four-phases';

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
<main>
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden bg-surface-bright border-b border-outline-variant/30">
    <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
    <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>
    <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center justify-center text-center pt-4 pb-12">
      <div className="flex flex-col items-center max-w-4xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-secondary-container text-on-secondary-fixed-variant rounded-full font-label-sm mb-8 shadow-sm">
            <span className="relative flex size-2">
              <span className="animate-ping-soft absolute inline-flex size-full rounded-full bg-secondary"></span>
              <span className="relative inline-flex size-2 rounded-full bg-secondary"></span>
            </span>
            <Icon name="Zap" className="text-sm icon-fill" />{"AI Software Company"}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-headline-xl text-headline-xl text-primary-container mb-6 leading-[1.15]" id="hero-headline">{"AI systems built around the way"}<br />{"your business"}<span className="text-secondary">{" actually works."}</span></h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed" id="hero-description">{"Zorex AI designs, builds, deploys, and continuously improves AI-powered systems — agentic systems and AI integrated with your existing tools — for real business functions."}</p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link className="btn-lift w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-container text-on-primary rounded-full font-label-sm uppercase tracking-wider hover:bg-primary shadow-md hover:shadow-lg" href="/contact">{"Book a Strategy Call"}<Icon name="ArrowRight" className="ml-2 text-sm" /> </Link>
            <Link className="btn-lift w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-container text-primary-container rounded-full font-label-sm uppercase tracking-wider hover:bg-surface-container" href="/case-studies">{"See Our Work"}</Link>
          </div>
        </Reveal>
      </div>
    </div>
    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary-fixed/20 rounded-full blur-3xl -z-10"></div>
  </section>

  {/* ── Capability marquee ───────────────────────────────────────── */}
  <section className="py-6 px-5 sm:px-8 bg-surface border-y border-outline-variant/20 overflow-hidden">
    <Marquee className="max-w-container-max mx-auto" trackClassName="gap-10">
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center gap-10 pr-10 font-label-sm uppercase tracking-widest text-on-surface-variant/70">
          {item}
          <Icon name="Sparkles" className="text-secondary text-sm" aria-hidden />
        </span>
      ))}
    </Marquee>
  </section>

  {/* ── The Operational Bottleneck ───────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-surface-container border-b border-outline-variant/20">
    <div className="max-w-container-max mx-auto">
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"The Operational Bottleneck"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container">{"Your people should be solving problems — not carrying the same workload every day."}</h2>
      </ScrollReveal>
      <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 group/grid" stagger={0.1}>
        <div className="card-lift bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/30 relative hover:border-error/50 group/card cursor-default overflow-hidden">
          <div className="absolute -top-4 -right-4 p-6 opacity-[0.03] group-hover/card:opacity-10 group-hover/card:scale-110 transition-all duration-500 pointer-events-none"> <Icon name="CircleHelp" className="text-[120px] text-error" /> </div>
          <div className="inline-flex items-center gap-2 bg-error-container/40 text-error px-3 py-1.5 rounded-full font-label-sm text-[10px] uppercase tracking-wider border border-error/20 mb-6 relative z-10 backdrop-blur-sm"> <div className="w-1.5 h-1.5 rounded-full bg-error animate-pulse shadow-[0_0_8px_rgba(186,26,26,0.8)]"></div>{"Friction Point 01"}</div>
          <h4 className="font-headline-md text-2xl text-primary-container mb-4 relative z-10">{"The Data Is \"Somewhere\""}</h4>
          <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">{"Your CRM says one thing, your billing software says another, and your team spends hours cross-referencing spreadsheets just to send an invoice."}</p>
        </div>
        <div className="card-lift bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/30 relative hover:border-error/50 group/card cursor-default overflow-hidden">
          <div className="absolute -top-4 -right-4 p-6 opacity-[0.03] group-hover/card:opacity-10 group-hover/card:scale-110 transition-all duration-500 pointer-events-none"> <Icon name="ListTodo" className="text-[120px] text-error" /> </div>
          <div className="inline-flex items-center gap-2 bg-error-container/40 text-error px-3 py-1.5 rounded-full font-label-sm text-[10px] uppercase tracking-wider border border-error/20 mb-6 relative z-10 backdrop-blur-sm"> <div className="w-1.5 h-1.5 rounded-full bg-error animate-pulse shadow-[0_0_8px_rgba(186,26,26,0.8)]"></div>{"Friction Point 02"}</div>
          <h4 className="font-headline-md text-2xl text-primary-container mb-4 relative z-10">{"The \"I'll Do It Later\" Trap"}</h4>
          <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">{"Critical follow-ups, contract generations, and client onboarding tasks get delayed because \"busy work\" takes precedence over revenue-generating work."}</p>
        </div>
        <div className="card-lift bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/30 relative hover:border-error/50 group/card cursor-default overflow-hidden">
          <div className="absolute -top-4 -right-4 p-6 opacity-[0.03] group-hover/card:opacity-10 group-hover/card:scale-110 transition-all duration-500 pointer-events-none"> <Icon name="BadgeDollarSign" className="text-[120px] text-error" /> </div>
          <div className="inline-flex items-center gap-2 bg-error-container/40 text-error px-3 py-1.5 rounded-full font-label-sm text-[10px] uppercase tracking-wider border border-error/20 mb-6 relative z-10 backdrop-blur-sm"> <div className="w-1.5 h-1.5 rounded-full bg-error animate-pulse shadow-[0_0_8px_rgba(186,26,26,0.8)]"></div>{"Friction Point 03"}</div>
          <h4 className="font-headline-md text-2xl text-primary-container mb-4 relative z-10">{"Expert Time on Administrative Work"}</h4>
          <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">{"Your most experienced people spend part of every day clicking buttons, copy-pasting data, and manually updating task boards."}</p>
        </div>
      </RevealGroup>
    </div>
  </section>

  {/* ── What We Automate ─────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-background" id="services">
    <div className="max-w-container-max mx-auto">
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"What We Automate"}</span>
          <h2 className="font-headline-lg text-headline-lg text-primary-container">{"We build systems around the work that matters most."}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">{"We start with the workflow, the business outcome, and the constraints — then design the system around your existing operation."}</p>
        </div>
        <Link className="inline-flex items-center gap-2 font-label-sm uppercase tracking-wider text-primary-container hover:text-secondary transition-colors group" href="/services">{"See All Services"}<Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" /> </Link>
      </ScrollReveal>
      <RevealGroup className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]" stagger={0.1}>
        <Link className="card-lift md:col-span-6 bg-primary-container rounded-2xl p-6 sm:p-10 text-on-primary relative overflow-hidden flex flex-col justify-between group no-underline hover:bg-primary" href="/service-llm-applications">
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700"> <Icon name="Network" className="text-[300px]" /> </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-6"> <Icon name="GitBranch" className="text-accent-gold" /> </div>
            <h3 className="font-headline-md text-2xl sm:text-3xl mb-4">{"Customer & Service Operations"}</h3>
            <p className="font-body-lg text-on-primary-container max-w-md">{"Systems that reduce repetitive customer and service work, route requests intelligently, and keep responses moving without increasing headcount."}</p>
          </div>
          <div className="relative z-10 mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-4">
            <span className="text-sm font-label-sm uppercase tracking-wider text-accent-gold flex items-center gap-1"><Icon name="CircleCheck" className="text-xs" />{"Answers from your own knowledge base"}</span>
            <span className="text-sm font-label-sm uppercase tracking-wider text-accent-gold flex items-center gap-1"><Icon name="CircleCheck" className="text-xs" />{"Routes requests intelligently"}</span>
            <span className="text-sm font-label-sm uppercase tracking-wider text-accent-gold flex items-center gap-1"><Icon name="CircleCheck" className="text-xs" />{"Escalates edge cases to your team"}</span>
            <div className="w-full flex justify-end mt-6 pt-4 border-t border-white/10"> <span className="inline-flex items-center gap-2 font-headline-md text-base text-accent-gold font-bold group-hover:gap-3 transition-all">{"Explore in Detail"}<Icon name="ArrowRight" className="text-base" /></span> </div>
          </div>
        </Link>
        <Link className="card-lift md:col-span-6 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 hover:bg-surface-container flex flex-col group relative overflow-hidden no-underline" href="/service-agentic-ai">
          <div className="absolute right-4 bottom-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none"> <Icon name="Bot" className="text-[150px] text-primary" /> </div>
          <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6 relative z-10"> <Icon name="Brain" className="text-secondary" /> </div>
          <h3 className="font-headline-md text-2xl text-primary-container mb-4 relative z-10">{"Revenue & Marketing Operations"}</h3>
          <p className="font-body-md text-on-surface-variant flex-grow relative z-10">{"Systems that accelerate qualification, follow-up, research, and execution across revenue and marketing workflows."}</p>
          <div className="relative z-10 mt-8 pt-6 border-t border-outline-variant/20 flex flex-wrap gap-4">
            <span className="text-sm font-label-sm uppercase tracking-wider text-primary flex items-center gap-1"><Icon name="CircleCheck" className="text-xs" />{"Automated follow-ups"}</span>
            <span className="text-sm font-label-sm uppercase tracking-wider text-primary flex items-center gap-1"><Icon name="CircleCheck" className="text-xs" />{"Lead scoring & routing"}</span>
            <div className="w-full flex justify-end mt-6 pt-4 border-t border-outline-variant/20"> <span className="inline-flex items-center gap-2 font-headline-md text-base text-secondary font-bold group-hover:gap-3 transition-all">{"Explore in Detail"}<Icon name="ArrowRight" className="text-base" /></span> </div>
          </div>
        </Link>
        <Link className="card-lift md:col-span-6 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 hover:bg-surface-container no-underline group" href="/service-ai-integration">
          <div className="flex items-center gap-4 mb-6"> <div className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center"> <Icon name="Server" className="text-primary-container text-sm" /> </div> <h3 className="font-headline-md text-xl text-primary-container">{"Intelligent System Integration"}</h3> </div>
          <p className="font-body-md text-on-surface-variant mb-4">{"Connect intelligence to the systems you already depend on — without forcing a costly rip-and-replace."}</p>
          <div className="flex flex-wrap gap-4">
            <span className="text-sm font-label-sm uppercase tracking-wider text-primary flex items-center gap-1"><Icon name="CircleCheck" className="text-xs" />{"CRM, ERP, support, and data tools"}</span>
            <span className="text-sm font-label-sm uppercase tracking-wider text-primary flex items-center gap-1"><Icon name="CircleCheck" className="text-xs" />{"No rip-and-replace required"}</span>
            <div className="w-full flex justify-end mt-6 pt-4 border-t border-outline-variant/20"> <span className="inline-flex items-center gap-2 font-headline-md text-base text-secondary font-bold group-hover:gap-3 transition-all">{"Explore in Detail"}<Icon name="ArrowRight" className="text-base" /></span> </div>
          </div>
        </Link>
        <Link className="card-lift md:col-span-6 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-8 hover:bg-surface-container no-underline group" href="/service-ai-automations">
          <div className="flex items-center gap-4 mb-6"> <div className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center"> <Icon name="Route" className="text-primary-container text-sm" /> </div> <h3 className="font-headline-md text-xl text-primary-container">{"Intelligent Workflow Automation"}</h3> </div>
          <p className="font-body-md text-on-surface-variant mb-4">{"Automate repetitive workflows that require data movement, judgment, routing, or consistent follow-through."}</p>
          <div className="flex flex-wrap gap-4">
            <span className="text-sm font-label-sm uppercase tracking-wider text-primary flex items-center gap-1"><Icon name="CircleCheck" className="text-xs" />{"End-to-end orchestration"}</span>
            <span className="text-sm font-label-sm uppercase tracking-wider text-primary flex items-center gap-1"><Icon name="CircleCheck" className="text-xs" />{"Built for judgment calls, not just rules"}</span>
            <div className="w-full flex justify-end mt-6 pt-4 border-t border-outline-variant/20"> <span className="inline-flex items-center gap-2 font-headline-md text-base text-secondary font-bold group-hover:gap-3 transition-all">{"Explore in Detail"}<Icon name="ArrowRight" className="text-base" /></span> </div>
          </div>
        </Link>
      </RevealGroup>
    </div>
  </section>

  {/* ── The four phases ──────────────────────────────────────────── */}
  <FourPhases showProcessLink />

  {/* ── How We Think About AI ────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-surface-bright" id="company-positioning">
    <div className="max-w-container-max mx-auto">
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"How We Think About AI"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container">{"The business function comes first. The technology follows."}</h2>
      </ScrollReveal>
      <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.1}>
        <div className="card-lift bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/30 text-center">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mx-auto mb-6"><Icon name="Search" className="text-primary-container text-2xl" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3">{"Start with the work"}</h3>
          <p className="font-body-md text-on-surface-variant">{"Not a model or a tool — the work that consumes people, creates delays, and limits scale."}</p>
        </div>
        <div className="card-lift bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/30 text-center">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mx-auto mb-6"><Icon name="Layers3" className="text-primary-container text-2xl" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3">{"Design the system around it"}</h3>
          <p className="font-body-md text-on-surface-variant">{"Coordinating context, actions, tools, and controls so the business executes with less friction."}</p>
        </div>
        <div className="card-lift bg-primary-container rounded-2xl p-8 border border-secondary/30 text-center">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6"><Icon name="Rocket" className="text-accent-gold text-2xl" /></div>
          <h3 className="font-headline-md text-xl text-on-primary mb-3">{"Aim for better execution"}</h3>
          <p className="font-body-md text-on-primary-container">{"The goal is not more AI. The goal is better business execution."}</p>
        </div>
      </RevealGroup>
    </div>
  </section>

  {/* ── Why Zorex AI ─────────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-background border-t border-outline-variant/20">
    <div className="max-w-container-max mx-auto">
      <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"Why Zorex AI"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container">{"Why Companies Bring In Zorex"}</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">{"Businesses can add headcount, stitch together tools, or build internally. We focus on the gap between those approaches."}</p>
      </ScrollReveal>
      <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.1}>
        <div className="card-lift bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-6"> <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center"> <Icon name="UserPlus" className="text-error text-sm" /> </div> <h3 className="font-headline-md text-lg text-primary-container">{"Add More Headcount"}</h3> </div>
          <p className="font-body-md text-on-surface-variant mb-6">{"Every hire adds salary, ramp-up time, and management overhead — and capacity only grows one person at a time."}</p>
          <div className="mt-auto border-t border-outline-variant/20 pt-4"> <p className="font-label-sm text-sm text-secondary font-semibold flex items-start gap-2"><Icon name="CircleCheck" className="text-secondary mt-0.5 shrink-0" />{"Zorex builds the system once, then scales it across workflows as you grow."}</p> </div>
        </div>
        <div className="card-lift bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-6"> <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center"> <Icon name="PanelsTopLeft" className="text-error text-sm" /> </div> <h3 className="font-headline-md text-lg text-primary-container">{"Stack More Software"}</h3> </div>
          <p className="font-body-md text-on-surface-variant mb-6">{"Zapier and generic chatbots handle simple if-then rules — not judgment, context, or your specific workflows."}</p>
          <div className="mt-auto border-t border-outline-variant/20 pt-4"> <p className="font-label-sm text-sm text-secondary font-semibold flex items-start gap-2"><Icon name="CircleCheck" className="text-secondary mt-0.5 shrink-0" />{"Zorex builds AI that handles context and judgment, not just fixed rules."}</p> </div>
        </div>
        <div className="card-lift bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-6"> <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center"> <Icon name="Bot" className="text-error text-sm" /> </div> <h3 className="font-headline-md text-lg text-primary-container">{"Hire a Generic AI Vendor"}</h3> </div>
          <p className="font-body-md text-on-surface-variant mb-6">{"They build what you describe — without understanding your operations deeply enough to know what to build."}</p>
          <div className="mt-auto border-t border-outline-variant/20 pt-4"> <p className="font-label-sm text-sm text-secondary font-semibold flex items-start gap-2"><Icon name="CircleCheck" className="text-secondary mt-0.5 shrink-0" />{"Zorex audits your operations first, then builds what you need."}</p> </div>
        </div>
      </RevealGroup>
    </div>
  </section>

  {/* ── Lead magnet — dark box ───────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-surface-container-low border-t border-outline-variant/20">
    <div className="max-w-3xl mx-auto">
      <Reveal>
        <div className="dark-box px-6 py-12 sm:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.06] border border-white/10 rounded-full font-label-sm mb-8">
            <Icon name="CircleHelp" className="text-accent-gold text-sm icon-fill" />
            <span className="text-white/80">{"FREE RESOURCE"}</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-white mb-6">{"Not Ready for a Strategy Call? Start With the Problem."}</h2>
          <p className="font-body-lg text-body-lg text-white/60 mb-10 max-w-xl mx-auto">{"Use our AI Readiness Scorecard to find where repetitive work, disconnected systems, or slow decisions are costing you the most."}</p>
          <form action="https://formspree.io/f/xpwdjqgz" className="flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto" id="lead-magnet-form" method="POST">
            <input name="_subject" type="hidden" value="AI Readiness Scorecard Request" />
            <label htmlFor="lead-magnet-email" className="sr-only">Business email</label>
            <input id="lead-magnet-email" className="flex-1 w-full px-5 py-4 rounded-full border border-white/15 bg-white/[0.06] text-white placeholder:text-white/35 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none text-sm" name="email" placeholder="your@email.com" autoComplete="email" inputMode="email" required={true} type="email" />
            <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true" />
            <button className="btn-lift w-full sm:w-auto px-8 py-4 bg-accent-gold text-primary-container rounded-full font-label-sm uppercase tracking-wider font-bold hover:bg-secondary-container whitespace-nowrap" type="submit">{"Send Me the Scorecard"}</button>
          </form>
          <p className="text-xs text-white/40 mt-4">{"No spam. Unsubscribe anytime. We respect your inbox."}</p>
        </div>
      </Reveal>
    </div>
  </section>

  {/* ── Final CTA ────────────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-primary-container relative overflow-hidden" id="book">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/50 via-primary-container to-primary-container"></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <Reveal>
        <h2 className="font-headline-xl text-4xl sm:text-5xl md:text-6xl text-on-primary mb-8 leading-tight">{"Know where your operations slow down? Let's find the right place to start."}</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="font-body-lg text-on-primary-container mb-6 max-w-2xl mx-auto">{"We'll review your workflow, identify 2–3 opportunities worth automating, and give you a clear recommendation on what to build — and what not to."}</p>
      </Reveal>
      <Reveal delay={0.18}>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12 text-sm text-on-primary-container/80">
          <span className="flex items-center gap-2"><Icon name="CircleCheck" className="text-accent-gold text-base icon-fill" />{"Free"}</span>
          <span className="flex items-center gap-2"><Icon name="CircleCheck" className="text-accent-gold text-base icon-fill" />{"45 minutes"}</span>
          <span className="flex items-center gap-2"><Icon name="CircleCheck" className="text-accent-gold text-base icon-fill" />{"No obligation"}</span>
        </div>
      </Reveal>
      <Reveal delay={0.26}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link className="btn-lift w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-accent-gold text-primary-container rounded-full font-label-sm uppercase tracking-wider font-bold hover:bg-white shadow-lg hover:shadow-xl" href="/contact">{"Book a Strategy Call"}<Icon name="ArrowRight" className="ml-2 text-sm" /> </Link>
          <Link className="btn-lift w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white/30 text-on-primary rounded-full font-label-sm uppercase tracking-wider hover:bg-white/10" href="/case-studies">{"See Client Results"}</Link>
        </div>
      </Reveal>
    </div>
  </section>
</main>
  </>;
}
