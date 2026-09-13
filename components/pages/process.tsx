import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';
import { FinalCta } from '@/components/content/final-cta';
import { FourPhases } from '@/components/content/four-phases';

const commitments: Array<{ icon: IconName; title: string; copy: string }> = [
  { icon: 'Workflow', title: 'One Proven Path', copy: 'Audit, design, build, deploy the same sequence on every engagement, so nothing gets skipped.' },
  { icon: 'Search', title: 'Audit First', copy: 'We map the workflow end to end before anything is built, so the system fits the work not the other way around.' },
  { icon: 'ShieldCheck', title: 'Tested Before Launch', copy: 'The system runs in shadow mode alongside your team, validated on real work, then rolled out in stages.' },
  { icon: 'FolderCheck', title: 'You Own It', copy: 'Documentation, training, and full handoff included the system is yours, with no lock-in.' },
];

export default function PageContent() {
  return <>
<main className="font-ui bg-page-wash">
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
    <div className="max-w-container-max mx-auto relative z-10">
      <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
        <Reveal delay={0.08}>
          <h1 className="display-type mb-6">From business problem <span className="opacity-60">to deployed AI system.</span></h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="body-ink max-w-2xl mb-10">We start with the workflow and the outcome, not the technology. Then we design, build, validate, and deploy the system around your operation.</p>
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

  {/* ── Engagement commitments capabilities bento (imagine.art "Built for success" pattern) ── */}
  <section className="py-section-padding px-5 sm:px-8">
    <div className="max-w-container-max mx-auto">
      <div className="reveal max-w-[640px] mb-14">
        <span className="eyebrow mb-4 block">{"Built Into Every Engagement"}</span>
        <h2 className="section-title mb-4">{"Four things "}{" "}<span className="h-muted">{"you can count on."}</span></h2>
        <p className="lede mt-5">{"Whatever the system, the engagement runs on the same commitments a proven sequence, an audit before any build, validation before launch, and full ownership at the end."}</p>
      </div>
      <div className="bfs-bento">
        {commitments.map((item, i) => (
          <div key={item.title} className={`reveal ${i === 1 || i === 2 ? 'reveal-delay-1' : i === 3 ? 'reveal-delay-2' : ''} bfs-tile bfs-tile-wide`}>
            <span className="bfs-icon"><Icon name={item.icon} size={18} /></span>
            <h3 className="bfs-title">{item.title}</h3>
            <p className="bfs-body">{item.copy}</p>
          </div>
        ))}
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
  <section id="security" className="py-section-padding px-5 sm:px-8 bg-surface-container border-t border-outline-variant/20">
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
