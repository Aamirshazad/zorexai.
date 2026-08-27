import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { FinalCta } from '@/components/content/final-cta';
import { BusinessAIFAQ } from '@/components/content/business-ai-faq';

export default function PageContent() {
  return <>
<main>
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden bg-surface-bright border-b border-outline-variant/30">
    <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
    <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>
    <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center justify-center text-center pt-4 pb-12">
      <div className="flex flex-col items-center max-w-4xl">
        <span className="reveal inline-flex items-center gap-2 px-6 py-2 bg-secondary-container text-on-secondary-fixed-variant rounded-full font-label-sm mb-8 shadow-sm uppercase tracking-wider">
          <Icon name="Zap" className="text-sm icon-fill" />{"What We Build"}
        </span>
        <h1 className="reveal reveal-delay-1 font-headline-xl text-headline-xl text-primary-container mb-6 leading-[1.15]">{"Three systems. One goal:"}<br /><span className="text-secondary">{"your business runs itself."}</span></h1>
        <p className="reveal reveal-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed">{"We design, build, deploy, and continuously improve AI agentic systems and AI integrated with your existing tools — around the workflows that consume your team's time."}</p>
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link className="btn-lift w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-container text-on-primary rounded-full font-label-sm uppercase tracking-wider hover:bg-primary shadow-md hover:shadow-lg" href="/contact">{"Book a Strategy Call"}<Icon name="ArrowRight" className="ml-2 text-sm" /></Link>
          <Link className="btn-lift w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-container text-primary-container rounded-full font-label-sm uppercase tracking-wider hover:bg-surface-container" href="/case-studies">{"See Our Work"}</Link>
        </div>
      </div>
    </div>
    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary-fixed/20 rounded-full blur-3xl -z-10"></div>
  </section>

  {/* ── Delivery lifecycle ───────────────────────────────────────── */}
  <section className="relative py-section-padding px-5 sm:px-8 bg-surface-container-low overflow-hidden">
    <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
    <div className="max-w-container-max mx-auto relative z-10">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"The Delivery Lifecycle"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4">{"Four stages. One continuous cycle."}</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{"Every system we deliver moves through the same path — and stays on it. Improvement feeds back into design for as long as the system runs."}</p>
      </div>
      <div className="reveal reveal-delay-1 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-4">
        <div className="card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7 flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 bg-primary-container rounded-xl flex items-center justify-center"><Icon name="Layers3" className="text-accent-gold text-xl" /></div>
            <span className="font-headline-md text-2xl text-outline-variant font-bold">{"01"}</span>
          </div>
          <h3 className="font-headline-md text-lg text-primary-container mb-2">{"Design & Build"}</h3>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{"We map the workflow first, then design and build the system around the steps your team actually takes."}</p>
        </div>
        <div className="hidden lg:flex items-center justify-center" aria-hidden="true"><Icon name="ArrowRight" className="text-secondary text-xl" /></div>
        <div className="card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7 flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 bg-primary-container rounded-xl flex items-center justify-center"><Icon name="PlugZap" className="text-accent-gold text-xl" /></div>
            <span className="font-headline-md text-2xl text-outline-variant font-bold">{"02"}</span>
          </div>
          <h3 className="font-headline-md text-lg text-primary-container mb-2">{"Integrate"}</h3>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{"The system connects to the CRM, ERP, and tools you already run — nothing to rip out, nothing to re-key."}</p>
        </div>
        <div className="hidden lg:flex items-center justify-center" aria-hidden="true"><Icon name="ArrowRight" className="text-secondary text-xl" /></div>
        <div className="card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7 flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 bg-primary-container rounded-xl flex items-center justify-center"><Icon name="Rocket" className="text-accent-gold text-xl" /></div>
            <span className="font-headline-md text-2xl text-outline-variant font-bold">{"03"}</span>
          </div>
          <h3 className="font-headline-md text-lg text-primary-container mb-2">{"Deploy"}</h3>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{"Validated alongside your team, then rolled out in stages with monitoring from day one."}</p>
        </div>
        <div className="hidden lg:flex items-center justify-center" aria-hidden="true"><Icon name="ArrowRight" className="text-secondary text-xl" /></div>
        <div className="card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7 flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 bg-primary-container rounded-xl flex items-center justify-center"><Icon name="RefreshCw" className="text-accent-gold text-xl" /></div>
            <span className="font-headline-md text-2xl text-outline-variant font-bold">{"04"}</span>
          </div>
          <h3 className="font-headline-md text-lg text-primary-container mb-2">{"Improve"}</h3>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{"After go-live, the system is tuned as your workflows, volumes, and models evolve."}</p>
        </div>
      </div>
      <div className="reveal reveal-delay-2 mt-10 flex justify-center">
        <div className="inline-flex items-center gap-3 bg-surface-container-lowest border border-dashed border-secondary/40 rounded-full px-6 py-3">
          <Icon name="Repeat2" className="text-secondary text-lg" />
          <p className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant">{"Improve feeds back into Design — the cycle starts again"}</p>
        </div>
      </div>
    </div>
  </section>

  {/* ── The three core services ──────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-background" id="core-services">
    <div className="max-w-container-max mx-auto">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"Core Services"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container">{"Three ways we put AI to work in your business."}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link className="reveal card-lift group bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 no-underline flex flex-col" href="/service-agentic-ai">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors"><Icon name="Bot" className="text-primary-container group-hover:text-on-secondary-container text-2xl transition-colors" /></div>
          <h3 className="font-headline-md text-2xl text-primary-container mb-3">{"AI Agentic Systems"}</h3>
          <p className="font-body-md text-on-surface-variant mb-6">{"Autonomous agents that understand requests, make judgment calls, and execute multi-step work end to end."}</p>
          <div className="flex flex-wrap gap-2 mb-8"> <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full">{"Customer service agents"}</span> <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full">{"Sales follow-up"}</span> <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full">{"Back-office ops"}</span> </div>
          <span className="mt-auto inline-flex items-center gap-2 font-label-sm uppercase tracking-wider text-primary-container group-hover:gap-3 transition-all">{"Explore Agentic AI"}<Icon name="ArrowRight" className="text-sm" /></span>
        </Link>
        <Link className="reveal reveal-delay-1 card-lift group bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 no-underline flex flex-col" href="/service-ai-integration">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors"><Icon name="PlugZap" className="text-primary-container group-hover:text-on-secondary-container text-2xl transition-colors" /></div>
          <h3 className="font-headline-md text-2xl text-primary-container mb-3">{"AI Integration"}</h3>
          <p className="font-body-md text-on-surface-variant mb-6">{"Connecting AI to the systems you already run — CRM, ERP, support desk, data — without rip-and-replace."}</p>
          <div className="flex flex-wrap gap-2 mb-8"> <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full">{"API integrations"}</span> <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full">{"Data pipelines"}</span> <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full">{"Workflow automation"}</span> </div>
          <span className="mt-auto inline-flex items-center gap-2 font-label-sm uppercase tracking-wider text-primary-container group-hover:gap-3 transition-all">{"Explore Integration"}<Icon name="ArrowRight" className="text-sm" /></span>
        </Link>
        <Link className="reveal reveal-delay-2 card-lift group bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 no-underline flex flex-col" href="/service-vertical-ai">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors"><Icon name="Layers3" className="text-primary-container group-hover:text-on-secondary-container text-2xl transition-colors" /></div>
          <h3 className="font-headline-md text-2xl text-primary-container mb-3">{"Vertical AI Systems"}</h3>
          <p className="font-body-md text-on-surface-variant mb-6">{"Industry-specific platforms built around your domain, compliance rules, and operational workflows."}</p>
          <div className="flex flex-wrap gap-2 mb-8"> <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full">{"Healthcare"}</span> <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full">{"E-commerce"}</span> <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full">{"Finance & more"}</span> </div>
          <span className="mt-auto inline-flex items-center gap-2 font-label-sm uppercase tracking-wider text-primary-container group-hover:gap-3 transition-all">{"Explore Vertical AI"}<Icon name="ArrowRight" className="text-sm" /></span>
        </Link>
      </div>
    </div>
  </section>

  {/* ── Is this you? ─────────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-surface-container border-b border-outline-variant/20">
    <div className="max-w-container-max mx-auto">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"Is This You?"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container">{"Built for businesses that have outgrown manual execution."}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="reveal card-lift bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 p-6 opacity-[0.04] pointer-events-none"><Icon name="Hourglass" className="text-[120px] text-primary" /></div>
          <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-6 relative z-10"><Icon name="Hourglass" className="text-primary-container" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3 relative z-10">{"Skilled people doing repeatable work"}</h3>
          <p className="font-body-md text-on-surface-variant relative z-10">{"Copy-pasting data, chasing approvals, sending the same emails. That's a systems problem, not a people problem."}</p>
        </div>
        <div className="reveal reveal-delay-1 card-lift bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 p-6 opacity-[0.04] pointer-events-none"><Icon name="TrendingUp" className="text-[120px] text-primary" /></div>
          <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-6 relative z-10"><Icon name="TrendingUp" className="text-primary-container" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3 relative z-10">{"Processes break when volume grows"}</h3>
          <p className="font-body-md text-on-surface-variant relative z-10">{"Everything runs fine until the right person is busy or away. Reliable businesses run on systems, not memory."}</p>
        </div>
        <div className="reveal reveal-delay-2 card-lift bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 p-6 opacity-[0.04] pointer-events-none"><Icon name="BadgeDollarSign" className="text-[120px] text-primary" /></div>
          <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-6 relative z-10"><Icon name="BadgeDollarSign" className="text-primary-container" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3 relative z-10">{"Growth is creating overhead"}</h3>
          <p className="font-body-md text-on-surface-variant relative z-10">{"More clients means more hires. Automation breaks that equation: more volume with the same team."}</p>
        </div>
      </div>
    </div>
  </section>

  {/* ── Old way vs Zorex way ─────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-surface-bright border-y border-outline-variant/20">
    <div className="max-w-5xl mx-auto">
      <div className="reveal text-center space-y-stack-md mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"The Difference"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container">{"From fragmented work to connected execution."}</h2>
      </div>
      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-0 border border-outline-variant/30 rounded-3xl overflow-hidden shadow-lg">
        <div className="bg-surface-container-high p-10 md:p-14 border-b md:border-b-0 md:border-r border-outline-variant/30">
          <h3 className="font-headline-md text-2xl text-error mb-8 flex items-center gap-3"><Icon name="X" className="text-2xl" />{"The Old Way"}</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4"><Icon name="X" className="text-error mt-1 shrink-0" /><p className="font-body-md text-on-surface"><strong>{"Slow execution:"}</strong>{" tasks wait in human inboxes and queues for days."}</p></li>
            <li className="flex items-start gap-4"><Icon name="X" className="text-error mt-1 shrink-0" /><p className="font-body-md text-on-surface"><strong>{"High error rate:"}</strong>{" manual data entry across systems leads to costly mistakes."}</p></li>
            <li className="flex items-start gap-4"><Icon name="X" className="text-error mt-1 shrink-0" /><p className="font-body-md text-on-surface"><strong>{"Expensive scaling:"}</strong>{" growing revenue means hiring for the admin load."}</p></li>
            <li className="flex items-start gap-4"><Icon name="X" className="text-error mt-1 shrink-0" /><p className="font-body-md text-on-surface"><strong>{"Data silos:"}</strong>{" systems that don't talk create blind spots for leadership."}</p></li>
          </ul>
        </div>
        <div className="bg-primary-container p-10 md:p-14">
          <h3 className="font-headline-md text-2xl text-accent-gold mb-8 flex items-center gap-3"><Icon name="CircleCheck" className="text-2xl" />{"The Zorex Way"}</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4"><Icon name="Zap" className="text-accent-gold mt-1 shrink-0" /><p className="font-body-md text-on-primary-container"><strong>{"Instant execution:"}</strong>{" workflows process tasks in seconds, 24/7."}</p></li>
            <li className="flex items-start gap-4"><Icon name="BadgeCheck" className="text-accent-gold mt-1 shrink-0" /><p className="font-body-md text-on-primary-container"><strong>{"Clean data transfer:"}</strong>{" API-level integrations keep your systems in sync."}</p></li>
            <li className="flex items-start gap-4"><Icon name="TrendingUp" className="text-accent-gold mt-1 shrink-0" /><p className="font-body-md text-on-primary-container"><strong>{"Scalable capacity:"}</strong>{" more volume without adding proportional cost."}</p></li>
            <li className="flex items-start gap-4"><Icon name="Network" className="text-accent-gold mt-1 shrink-0" /><p className="font-body-md text-on-primary-container"><strong>{"Unified intelligence:"}</strong>{" every platform syncs into one source of truth."}</p></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* ── How we engage ────────────────────────────────────────────── */}
  <section className="bg-surface-container-low py-section-padding px-5 sm:px-8">
    <div className="max-w-container-max mx-auto">
      <div className="reveal text-center max-w-3xl mx-auto space-y-stack-md mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"How We Engage"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container">{"Pick the engagement that fits your problem."}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="reveal card-lift bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 text-center">
          <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6"><Icon name="Rocket" className="text-primary-container" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-2">{"Focused Improvement Sprint"}</h3>
          <p className="text-sm text-on-surface-variant mb-4">{"Single automation or integration"}</p>
          <p className="font-headline-md text-2xl text-primary-container mb-1">{"2-4 Weeks"}</p>
          <p className="text-xs text-on-surface-variant mb-6">{"Scoped after discovery call"}</p>
          <ul className="space-y-2 text-left text-sm text-on-surface-variant">
            <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-secondary text-sm mt-0.5" />{"One core automation"}</li>
            <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-secondary text-sm mt-0.5" />{"Full documentation"}</li>
            <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-secondary text-sm mt-0.5" />{"30-day support"}</li>
          </ul>
        </div>
        <div className="reveal reveal-delay-1 card-lift bg-primary-container p-8 rounded-2xl text-center relative overflow-hidden shadow-lg">
          <div className="absolute top-4 right-4 bg-accent-gold text-primary-container text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{"Most Popular"}</div>
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"><Icon name="Brain" className="text-accent-gold" /></div>
          <h3 className="font-headline-md text-xl text-on-primary mb-2">{"Full System Deployment"}</h3>
          <p className="text-sm text-on-primary-container mb-4">{"End-to-end AI system deployment"}</p>
          <p className="font-headline-md text-2xl text-on-primary mb-1">{"4-8 Weeks"}</p>
          <p className="text-xs text-on-primary-container mb-6">{"Scoped after discovery call"}</p>
          <ul className="space-y-2 text-left text-sm text-on-primary-container">
            <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-accent-gold text-sm mt-0.5" />{"Multi-system integration"}</li>
            <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-accent-gold text-sm mt-0.5" />{"Custom LLM / agentic system"}</li>
            <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-accent-gold text-sm mt-0.5" />{"Training & handoff"}</li>
            <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-accent-gold text-sm mt-0.5" />{"90-day support"}</li>
          </ul>
        </div>
        <div className="reveal reveal-delay-2 card-lift bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 text-center">
          <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6"><Icon name="Network" className="text-secondary" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-2">{"Ongoing Optimization"}</h3>
          <p className="text-sm text-on-surface-variant mb-4">{"Retained AI engineering capacity"}</p>
          <p className="font-headline-md text-2xl text-primary-container mb-1">{"Ongoing"}</p>
          <p className="text-xs text-on-surface-variant mb-6">{"Monthly retainer, scoped to your needs"}</p>
          <ul className="space-y-2 text-left text-sm text-on-surface-variant">
            <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-secondary text-sm mt-0.5" />{"Dedicated AI architect"}</li>
            <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-secondary text-sm mt-0.5" />{"Continuous optimization"}</li>
            <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-secondary text-sm mt-0.5" />{"Priority response"}</li>
          </ul>
        </div>
      </div>
      <p className="reveal text-center text-sm text-on-surface-variant mt-8">{"Every engagement is scoped to your exact needs after a discovery call. "}<Link className="text-secondary font-semibold hover:text-primary transition-colors" href="/contact">{"Book your free strategy call →"}</Link></p>
    </div>
  </section>

  {/* ── Final CTA ────────────────────────────────────────────────── */}
  <FinalCta heading={"Ready to remove the work slowing growth?"} body={"Tell us the bottleneck. We'll tell you which of the three systems fits, what it takes to launch, and whether it's worth building."} />
  <BusinessAIFAQ />
</main>
  </>;
}
