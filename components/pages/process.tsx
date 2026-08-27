import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { FinalCta } from '@/components/content/final-cta';
import { FourPhases } from '@/components/content/four-phases';

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
          <Icon name="Workflow" className="text-sm icon-fill" />{"How We Work"}
        </span>
        <h1 className="reveal reveal-delay-1 font-headline-xl text-headline-xl text-primary-container mb-6 leading-[1.15]">{"From business problem"}<br /><span className="text-secondary">{"to deployed AI system."}</span></h1>
        <p className="reveal reveal-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed">{"We start with the workflow and the outcome, not the technology. Then we design, build, validate, and deploy the system around your operation."}</p>
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link className="btn-lift w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-container text-on-primary rounded-full font-label-sm uppercase tracking-wider hover:bg-primary shadow-md hover:shadow-lg" href="/contact">{"Book a Strategy Call"}<Icon name="ArrowRight" className="ml-2 text-sm" /></Link>
          <Link className="btn-lift w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-container text-primary-container rounded-full font-label-sm uppercase tracking-wider hover:bg-surface-container" href="/case-studies">{"See Our Work"}</Link>
        </div>
      </div>
    </div>
    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary-fixed/20 rounded-full blur-3xl -z-10"></div>
  </section>

  {/* ── Engagement commitments ───────────────────────────────────── */}
  <section className="relative py-section-padding px-5 sm:px-8 bg-surface overflow-hidden">
    <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
    <div className="max-w-container-max mx-auto relative z-10">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"Built Into Every Engagement"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4">{"Four things you can count on."}</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{"Whatever the system, the engagement runs on the same commitments — a proven sequence, an audit before any build, validation before launch, and full ownership at the end."}</p>
      </div>
      <div className="reveal reveal-delay-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        <div className="card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7 flex flex-col">
          <div className="w-11 h-11 bg-primary-container rounded-xl flex items-center justify-center mb-5"><Icon name="Workflow" className="text-accent-gold text-xl" /></div>
          <h3 className="font-headline-md text-lg text-primary-container mb-2">{"One Proven Path"}</h3>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{"Audit, design, build, deploy — the same sequence on every engagement, so nothing gets skipped."}</p>
        </div>
        <div className="card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7 flex flex-col">
          <div className="w-11 h-11 bg-primary-container rounded-xl flex items-center justify-center mb-5"><Icon name="Search" className="text-accent-gold text-xl" /></div>
          <h3 className="font-headline-md text-lg text-primary-container mb-2">{"Audit First"}</h3>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{"We map the workflow end to end before anything is built, so the system fits the work — not the other way around."}</p>
        </div>
        <div className="card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7 flex flex-col">
          <div className="w-11 h-11 bg-primary-container rounded-xl flex items-center justify-center mb-5"><Icon name="ShieldCheck" className="text-accent-gold text-xl" /></div>
          <h3 className="font-headline-md text-lg text-primary-container mb-2">{"Tested Before Launch"}</h3>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{"The system runs in shadow mode alongside your team, validated on real work, then rolled out in stages."}</p>
        </div>
        <div className="card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7 flex flex-col">
          <div className="w-11 h-11 bg-primary-container rounded-xl flex items-center justify-center mb-5"><Icon name="FolderCheck" className="text-accent-gold text-xl" /></div>
          <h3 className="font-headline-md text-lg text-primary-container mb-2">{"You Own It"}</h3>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{"Documentation, training, and full handoff included — the system is yours, with no lock-in."}</p>
        </div>
      </div>
    </div>
  </section>

  {/* ── Traditional vs intelligent ───────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-surface-container-low border-y border-outline-variant/20">
    <div className="max-w-container-max mx-auto">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"The Shift"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container">{"From task automation to system-level execution."}</h2>
      </div>
      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="bg-surface p-6 sm:p-10 rounded-2xl border border-outline-variant/30 opacity-80 hover:opacity-100 transition-all duration-500 shadow-sm hover:shadow-md flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-surface-container-highest rounded-lg text-on-surface-variant"><Icon name="Settings" className="text-2xl" /></div>
            <h3 className="font-headline-md text-xl text-on-surface-variant">{"Traditional Automation"}</h3>
          </div>
          <p className="font-body-md text-on-surface-variant mb-6">{"Rules-based scripts and rigid if-then logic. It breaks on exceptions and unstructured data, and needs constant human babysitting."}</p>
          <ul className="space-y-3 font-body-md text-on-surface-variant/80 mt-auto">
            <li className="flex items-start gap-3"><Icon name="X" className="text-outline mt-1 shrink-0" />{"Rigid, deterministic execution paths"}</li>
            <li className="flex items-start gap-3"><Icon name="X" className="text-outline mt-1 shrink-0" />{"Fails on exceptions and edge cases"}</li>
            <li className="flex items-start gap-3"><Icon name="X" className="text-outline mt-1 shrink-0" />{"Limited to structured data inputs"}</li>
          </ul>
        </div>
        <div className="bg-primary p-6 sm:p-10 rounded-2xl border border-primary-container transition-all duration-500 shadow-lg hover:-translate-y-1 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-bl-full transition-transform duration-700 group-hover:scale-150"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-3 bg-primary-container rounded-lg text-secondary-fixed"><Icon name="Brain" className="text-2xl" /></div>
            <h3 className="font-headline-md text-xl text-secondary-fixed">{"Intelligent Systems"}</h3>
          </div>
          <p className="font-body-md text-primary-fixed-dim mb-6 relative z-10">{"Agentic systems that reason, plan, and execute multi-step objectives. They adapt to new information and use your enterprise tools directly."}</p>
          <ul className="space-y-3 font-body-md text-on-primary/90 relative z-10 mt-auto">
            <li className="flex items-start gap-3"><Icon name="CircleCheck" className="text-secondary-fixed mt-1 shrink-0" />{"Dynamic planning and reasoning"}</li>
            <li className="flex items-start gap-3"><Icon name="CircleCheck" className="text-secondary-fixed mt-1 shrink-0" />{"Autonomous tool execution (APIs, DBs, ERPs)"}</li>
            <li className="flex items-start gap-3"><Icon name="CircleCheck" className="text-secondary-fixed mt-1 shrink-0" />{"Handles unstructured data seamlessly"}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <FourPhases />

  {/* ── Governance & security ────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-surface-container border-t border-outline-variant/20">
    <div className="max-w-container-max mx-auto">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"Enterprise Trust"}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary-container">{"Governance, control, and security."}</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">{"Putting AI into core business functions demands rigor. Our systems are built on data sovereignty, deterministic control, and auditable transparency."}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="reveal card-lift bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6"><Icon name="BadgeCheck" className="text-primary-container text-2xl" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3">{"Data Control"}</h3>
          <p className="font-body-md text-on-surface-variant">{"Your data is never used to train external models. Deployment options include self-hosted, VPC, or air-gapped environments, designed around SOC 2, GDPR, and HIPAA requirements."}</p>
        </div>
        <div className="reveal reveal-delay-1 card-lift bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6"><Icon name="ShieldCheck" className="text-primary-container text-2xl" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3">{"Guardrails & Controls"}</h3>
          <p className="font-body-md text-on-surface-variant">{"Agents are constrained to specific domains and tool permissions, preventing hallucinations and keeping actions inside policy."}</p>
        </div>
        <div className="reveal reveal-delay-2 card-lift bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30">
          <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6"><Icon name="ListFilter" className="text-primary-container text-2xl" /></div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3">{"Explainable Decisions"}</h3>
          <p className="font-body-md text-on-surface-variant">{"Every decision and tool call is logged and auditable, with dashboards detailing reasoning chains for full transparency."}</p>
        </div>
      </div>
    </div>
  </section>

  {/* ── Final CTA ────────────────────────────────────────────────── */}
  <FinalCta heading={"Ready to solve the operational problem?"} body={"Schedule a strategy call to map your workflows and find the right place to start."} />
</main>
  </>;
}
