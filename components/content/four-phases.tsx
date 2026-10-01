import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';

type PhaseTag = { icon: IconName; label: string };

const phases: Array<{
  number: string;
  icon: IconName;
  title: string;
  copy: string;
  tags: PhaseTag[];
}> = [
  {
    number: '1',
    icon: 'ShieldCheck',
    title: 'Zero-Trust & Data Security',
    copy: 'Client data is never used to train external models. Systems deploy within private VPC boundaries with strict role-based access control, cryptographic isolation, and enterprise compliance.',
    tags: [
      { icon: 'ShieldCheck', label: 'VPC boundary' },
      { icon: 'Lock', label: 'Zero public training' },
      { icon: 'Database', label: 'Role-based access' },
    ],
  },
  {
    number: '2',
    icon: 'Boxes',
    title: 'Deterministic Guardrails',
    copy: 'Zero hallucinations or unchecked agent actions. We enforce structured JSON schemas, programmatic validation rules, and automatic fallback pipelines before any output executes.',
    tags: [
      { icon: 'Boxes', label: 'Structured schemas' },
      { icon: 'FolderCheck', label: 'Deterministic rules' },
      { icon: 'Bug', label: 'Fallback pipelines' },
    ],
  },
  {
    number: '3',
    icon: 'Network',
    title: 'Native System Integration',
    copy: 'Direct bidirectional connectors into your core tools - CRM, ERP, messaging, and internal databases. Intelligence flows where your work already happens, with no rip-and-replace.',
    tags: [
      { icon: 'Network', label: 'CRM & ERP hooks' },
      { icon: 'Database', label: 'Live data flow' },
      { icon: 'Handshake', label: 'No rip-and-replace' },
    ],
  },
  {
    number: '4',
    icon: 'Users',
    title: 'Human-in-the-Loop Governance',
    copy: 'Autonomous speed for routine tasks with explicit human checkpoints for sensitive actions, financial transactions, and edge cases, backed by full tamper-proof audit trails.',
    tags: [
      { icon: 'FileCheck2', label: 'Human approval' },
      { icon: 'TrendingUp', label: 'Audit logging' },
      { icon: 'BookOpen', label: 'Complete oversight' },
    ],
  },
];

export function FourPhases({ showProcessLink = false }: { showProcessLink?: boolean }) {
  return (
    <section className="py-section-padding px-5 sm:px-8 border-y border-[var(--line)]">
      <div className="max-w-container-max mx-auto">
        <div className="reveal mb-12 flex max-w-3xl flex-col gap-4 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4 block">The Four Phases</span>
            <h2 className="section-title">
              A clear path <span className="h-muted">from audit to ownership.</span>
            </h2>
            <p className="lede mt-5">Every deployment is built on four core production principles: zero-trust security, deterministic guardrails, native software integration, and human-in-the-loop governance.</p>
          </div>
        </div>
        <ol className="reveal reveal-delay-1 flex flex-col">
          {phases.map((phase, i) => (
            <li
              key={phase.number}
              className={`group relative grid grid-cols-1 gap-6 py-10 md:grid-cols-[auto_1fr] md:gap-10 lg:gap-12 ${i > 0 ? 'border-t border-[var(--line)]' : ''}`}
            >
              {/* index + icon rail */}
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2 lg:w-32">
                <span className="font-ui text-[clamp(28px,3vw,40px)] font-medium leading-none tracking-[-0.02em] text-ink/25 transition-colors group-hover:text-ink/50">
                  0{phase.number}
                </span>
                <span className="flex items-center gap-1.5 font-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-3">
                  <Icon name={phase.icon} className="size-3.5" aria-hidden />
                  Phase
                </span>
              </div>

              {/* title + copy + tags */}
              <div className="max-w-2xl">
                <h3 className="mc-title text-xl md:text-2xl text-balance">{phase.title}</h3>
                <p className="mc-body mt-2 max-w-xl">{phase.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--line)] pt-5">
                  {phase.tags.map((tag) => (
                    <span key={tag.label} className="chip">
                      <Icon name={tag.icon} className="text-[14px]" aria-hidden />
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
        {showProcessLink && (
          <div className="reveal text-center mt-12">
            <Link className="footer-link gap-2 border-b border-[var(--line-strong)] pb-0.5 font-medium text-ink transition-colors hover:border-ink group" href="/process">See Full Process<Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform size-4" aria-hidden /> </Link>
          </div>
        )}
      </div>
    </section>
  );
}
