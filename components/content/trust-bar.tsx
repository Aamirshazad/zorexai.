import { Icon, type IconName } from '@/components/ui/icon';
import { company, yearsOperating } from '@/content/company';

const facts: { label: string; value: string; icon: IconName }[] = [
  { label: 'Senior engineers and architects', value: company.headcountLabel, icon: 'Users' },
  { label: `Building AI systems since ${company.foundedYear}`, value: `${yearsOperating} years`, icon: 'CalendarClock' },
  { label: 'Discovery, architecture, and build in-house', value: 'No subcontracting', icon: 'Handshake' },
  { label: 'Code, prompts, and documentation are yours', value: 'You own it', icon: 'KeyRound' },
];

/**
 * A thin band of verifiable facts about how we operate team size, tenure,
 * delivery model, ownership. Deliberately not metrics about client results: we
 * publish what we can stand behind and leave out what we cannot.
 *
 * Restyled onto the ink/wash token layer for the current design system.
 */
export function TrustBar() {
  return (
    <section className="border-y border-[var(--line)] px-5 sm:px-8">
      <dl className="mx-auto grid max-w-container-max grid-cols-2 divide-[var(--line)] font-ui lg:grid-cols-4 lg:divide-x">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1 px-1 py-6 lg:px-7">
            <Icon name={fact.icon} className="mb-1.5 size-4 text-ink-3" aria-hidden />
            <dt className="text-base font-medium text-ink">{fact.value}</dt>
            <dd className="text-xs leading-5 text-ink-2">{fact.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
