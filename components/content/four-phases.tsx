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
    icon: 'Search',
    title: 'Workflow Audit',
    copy: 'We map your workflows and pinpoint where AI can add the most value and where it can\'t. Mutual NDAs come first.',
    tags: [
      { icon: 'ChartNoAxesCombined', label: 'Process mapping' },
      { icon: 'Lock', label: 'NDA first' },
      { icon: 'Database', label: 'Data readiness' },
    ],
  },
  {
    number: '2',
    icon: 'Compass',
    title: 'System Design',
    copy: 'A secure, scalable blueprint tailored to your stack: model selection, integrations, and protection of your proprietary knowledge.',
    tags: [
      { icon: 'Boxes', label: 'System blueprint' },
      { icon: 'ShieldCheck', label: 'Security architecture' },
      { icon: 'Network', label: 'Tool integration' },
    ],
  },
  {
    number: '3',
    icon: 'Cog',
    title: 'Build & Test',
    copy: 'The architecture becomes robust code: resilient pipelines, programmatic guardrails, and aggressive testing before anything goes live.',
    tags: [
      { icon: 'Cpu', label: 'Implementation' },
      { icon: 'FolderCheck', label: 'Guardrails' },
      { icon: 'Bug', label: 'Stress testing' },
    ],
  },
  {
    number: '4',
    icon: 'Rocket',
    title: 'Deploy & Measure',
    copy: 'A phased rollout with clear documentation and a clean handoff. Your team is trained, and you fully own the system.',
    tags: [
      { icon: 'FileCheck2', label: 'Supervised launch' },
      { icon: 'BookOpen', label: 'Documentation' },
      { icon: 'TrendingUp', label: 'Clean handoff' },
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
            <p className="lede mt-5">Every engagement moves down the same rail audit first, design around what the audit finds, build and test against real work, then hand you the keys.</p>
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
            <Link className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-[var(--line-strong)] pb-0.5 hover:border-ink transition-colors group" href="/process">See Full Process<Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform size-4" aria-hidden /> </Link>
          </div>
        )}
      </div>
    </section>
  );
}
