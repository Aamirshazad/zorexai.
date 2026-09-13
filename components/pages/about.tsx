import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';
import { FinalCta } from '@/components/content/final-cta';
import { OptimizedImage } from '@/components/ui/optimized-image';

export default function PageContent() {
  return <>
<main className="font-ui bg-page-wash">
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
    <div className="max-w-container-max mx-auto relative z-10">
      <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
        <Reveal delay={0.08}>
          <h1 className="display-type mb-6">We build the systems <span className="opacity-60">your growth depends on.</span></h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="body-ink max-w-2xl mb-10">Zorex AI is an AI software company. We design, build, deploy, and continuously improve AI-powered systems agentic systems and AI integrated with existing systems for real business functions.</p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link className="btn-ink w-full sm:w-auto" href="/contact">Book a Strategy Call<Icon name="ArrowRight" className="ml-1 size-4" aria-hidden /> </Link>
            <Link className="btn-ghost w-full sm:w-auto" href="/process">See How We Work</Link>
          </div>
        </Reveal>
      </div>
    </div>
  </section>

  {/* ── Why we exist ─────────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-surface">
    <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-card-gap items-center">
      <div>
        <span className="reveal font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"Why Zorex Exists"}</span>
        <h2 className="reveal reveal-delay-1 font-headline-lg text-headline-lg text-primary-container mb-6">{"Every growing business hits the same wall."}</h2>
        <p className="reveal reveal-delay-2 font-body-lg text-body-lg text-on-surface-variant mb-6">{"The work that got you here starts costing more than it's worth. Your best people are doing work a system should be doing."}</p>
        <p className="reveal reveal-delay-3 font-body-lg text-body-lg text-on-surface-variant">{"We built Zorex for that moment: to study how your business actually runs, then build the system that fixes what's slowing it down."}</p>
      </div>
      <div className="reveal reveal-delay-2 relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[380px]">
        <OptimizedImage src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Zorex strategy session in a modern boardroom" width={1200} height={800} className="w-full h-full object-cover absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/40 to-transparent"></div>
      </div>
    </div>
  </section>

  {/* ── What we build ────────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-surface-container border-y border-outline-variant/20">
    <div className="max-w-container-max mx-auto">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"What We Build"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container">{"Three systems. One operating model."}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link className="reveal card-lift group bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 no-underline flex flex-col" href="/service-agentic-ai">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors"><Icon name="Bot" className="text-primary-container group-hover:text-on-secondary-container text-2xl transition-colors" /></div>
          <h3 className="font-headline-md text-2xl text-primary-container mb-3">{"AI Agentic Systems"}</h3>
          <p className="font-body-md text-on-surface-variant mb-6">{"Autonomous agents that understand requests, make judgment calls, and execute multi-step work end to end."}</p>
          <span className="mt-auto inline-flex items-center gap-2 font-label-sm uppercase tracking-wider text-primary-container group-hover:gap-3 transition-all">{"Explore Agentic AI"}<Icon name="ArrowRight" className="text-sm" /></span>
        </Link>
        <Link className="reveal reveal-delay-1 card-lift group bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 no-underline flex flex-col" href="/service-ai-integration">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors"><Icon name="PlugZap" className="text-primary-container group-hover:text-on-secondary-container text-2xl transition-colors" /></div>
          <h3 className="font-headline-md text-2xl text-primary-container mb-3">{"AI Integration"}</h3>
          <p className="font-body-md text-on-surface-variant mb-6">{"Connecting AI to the systems you already run CRM, ERP, support desk, data without rip-and-replace."}</p>
          <span className="mt-auto inline-flex items-center gap-2 font-label-sm uppercase tracking-wider text-primary-container group-hover:gap-3 transition-all">{"Explore Integration"}<Icon name="ArrowRight" className="text-sm" /></span>
        </Link>
        <Link className="reveal reveal-delay-2 card-lift group bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 no-underline flex flex-col" href="/service-vertical-ai">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors"><Icon name="Layers3" className="text-primary-container group-hover:text-on-secondary-container text-2xl transition-colors" /></div>
          <h3 className="font-headline-md text-2xl text-primary-container mb-3">{"Vertical AI Systems"}</h3>
          <p className="font-body-md text-on-surface-variant mb-6">{"Industry-specific platforms built around your domain, compliance rules, and operational workflows."}</p>
          <span className="mt-auto inline-flex items-center gap-2 font-label-sm uppercase tracking-wider text-primary-container group-hover:gap-3 transition-all">{"Explore Vertical AI"}<Icon name="ArrowRight" className="text-sm" /></span>
        </Link>
      </div>
    </div>
  </section>

  {/* ── How we build ─────────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-surface">
    <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="reveal order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[380px]">
        <OptimizedImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="Zorex build team collaborating on a system design" width={1200} height={800} className="w-full h-full object-cover absolute inset-0" />
      </div>
      <div className="reveal order-1 lg:order-2">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"How We Build"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container mb-10">{"Principles we don't bend."}</h2>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="w-11 h-11 bg-primary-fixed rounded-xl flex items-center justify-center shrink-0"><Icon name="BadgeCheck" className="text-primary-container" /></div>
            <div><h4 className="font-headline-md text-lg text-primary-container">{"Judgment before speed"}</h4><p className="text-on-surface-variant text-sm mt-1">{"AI that decides badly, fast, is worse than no AI. Every system ships with logic constraints and human escalation paths."}</p></div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-11 h-11 bg-primary-fixed rounded-xl flex items-center justify-center shrink-0"><Icon name="Database" className="text-primary-container" /></div>
            <div><h4 className="font-headline-md text-lg text-primary-container">{"Built on your data, your context"}</h4><p className="text-on-surface-variant text-sm mt-1">{"Generic tools give generic output. Our systems are configured around your specific business, not a one-size-fits-all model."}</p></div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-11 h-11 bg-primary-fixed rounded-xl flex items-center justify-center shrink-0"><Icon name="FileText" className="text-primary-container" /></div>
            <div><h4 className="font-headline-md text-lg text-primary-container">{"Documentation, not dependency"}</h4><p className="text-on-surface-variant text-sm mt-1">{"Every deployment comes with clear documentation. You understand what we built and can maintain it."}</p></div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-11 h-11 bg-primary-fixed rounded-xl flex items-center justify-center shrink-0"><Icon name="Lock" className="text-primary-container" /></div>
            <div><h4 className="font-headline-md text-lg text-primary-container">{"NDA before any technical discovery"}</h4><p className="text-on-surface-variant text-sm mt-1">{"Standard practice. We protect your information the way we'd want ours protected."}</p></div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  {/* ── The team ─────────────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-surface-container-low border-t border-outline-variant/20">
    <div className="max-w-container-max mx-auto">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"The Team"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container">{"A small, senior team. You work with the builders."}</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">{"Zorex is a focused team of AI engineers and systems architects. We don't outsource or offshore your core build, and we don't hand you off to a bench the people who design your system are the people who build and support it."}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="reveal card-lift bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 text-center">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mx-auto mb-6"><Icon name="Brain" className="text-primary-container text-2xl" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3">{"AI Engineering"}</h3>
          <p className="font-body-md text-on-surface-variant">{"Model selection, evaluation, and the disciplined application of AI where it actually pays off."}</p>
        </div>
        <div className="reveal reveal-delay-1 card-lift bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 text-center">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mx-auto mb-6"><Icon name="Network" className="text-primary-container text-2xl" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3">{"Systems Architecture"}</h3>
          <p className="font-body-md text-on-surface-variant">{"Secure, scalable designs that connect agents, integrations, and your existing stack."}</p>
        </div>
        <div className="reveal reveal-delay-2 card-lift bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 text-center">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mx-auto mb-6"><Icon name="Search" className="text-primary-container text-2xl" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3">{"Operations Analysis"}</h3>
          <p className="font-body-md text-on-surface-variant">{"Workflow mapping and clear success criteria, so we build what actually moves the business."}</p>
        </div>
      </div>
    </div>
  </section>

  {/* ── Final CTA ────────────────────────────────────────────────── */}
  <FinalCta heading={"Ready to remove the operational bottleneck?"} body={"Partner with Zorex to build AI systems that remove operational drag and create room for growth."} />
</main>
  </>;
}
