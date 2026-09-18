import { Icon, type IconName } from '@/components/ui/icon';
import { company, yearsOperating } from '@/content/company';

const facts: { label: string; value: string; icon: IconName }[] = [
  { value: company.headcountLabel, label: 'Senior engineers and architects', icon: 'Users' },
  { value: `${yearsOperating} years`, label: `Building AI systems since ${company.foundedYear}`, icon: 'CalendarClock' },
  { value: 'In-house', label: 'Discovery, architecture, and build, with no subcontracting', icon: 'Handshake' },
  { value: 'You own it', label: 'Code, prompts, and documentation handed over', icon: 'KeyRound' },
];

/**
 * The operating facts, as a closing band.
 *
 * Sits directly above the final call to action so a visitor reads who does the
 * work and what they own immediately before being asked to book. It used to run
 * under the hero, where four bare figures had nothing to support and read as a
 * stray strip.
 *
 * Deliberately not client metrics: these are four things about the engagement
 * that are verifiable on day one, written as claim plus support rather than a
 * row of numbers. The facts stay single-sourced from content/company.ts.
 */
export function TrustBar() {
  return (
    <section aria-labelledby="how-we-operate" className="border-t border-[var(--line)] px-5 py-section-padding sm:px-8">
      <div className="mx-auto max-w-container-max">
        <div className="reveal mb-10 max-w-2xl sm:mb-14">
          <span className="eyebrow mb-4 block">How we operate</span>
          <h2 id="how-we-operate" className="section-title text-balance">
            Who you are actually hiring.
          </h2>
        </div>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className={`reveal${index > 0 ? ` reveal-delay-${index}` : ''} flex flex-col rounded-[20px] border border-[var(--line)] bg-panel p-6`}
            >
              <span className="mb-5 flex size-10 items-center justify-center rounded-[12px] border border-[var(--line-strong)] bg-panel-2">
                <Icon name={fact.icon} className="size-[18px] text-ink" aria-hidden />
              </span>
              <dt className="font-ui text-[24px] font-medium leading-tight tracking-[-0.01em] text-ink">{fact.value}</dt>
              <dd className="mc-body mt-2 !text-[13.5px] !leading-[1.55] !text-ink-2">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
