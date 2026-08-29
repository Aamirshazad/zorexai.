import { Icon, type IconName } from '@/components/ui/icon';
import { company, yearsOperating } from '@/content/company';

const facts: { label: string; value: string; icon: IconName }[] = [
  { label: 'Senior engineers and architects', value: company.headcountLabel, icon: 'Users' },
  { label: `Building AI systems since ${company.foundedYear}`, value: `${yearsOperating} years`, icon: 'CalendarClock' },
  { label: 'Discovery, architecture, and build in-house', value: 'No subcontracting', icon: 'Handshake' },
  { label: 'Code, prompts, and documentation are yours', value: 'You own it', icon: 'KeyRound' },
];

/**
 * A thin band of verifiable facts about how we operate — team size, tenure,
 * delivery model, ownership. Deliberately not metrics about client results: we
 * publish what we can stand behind and leave out what we cannot.
 */
export function TrustBar({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark';

  return (
    <section
      className={`px-5 sm:px-8 ${dark ? 'bg-primary-container' : 'bg-surface-container-lowest border-y border-outline-variant/25'}`}
    >
      <dl className="max-w-container-max mx-auto grid grid-cols-2 divide-outline-variant/25 lg:grid-cols-4 lg:divide-x">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1 px-1 py-6 lg:px-7">
            <Icon
              name={fact.icon}
              className={`mb-1.5 size-4 ${dark ? 'text-accent-gold' : 'text-secondary'}`}
            />
            <dt className={`font-headline-md text-base ${dark ? 'text-white' : 'text-primary-container'}`}>
              {fact.value}
            </dt>
            <dd className={`font-body-sm text-xs leading-5 ${dark ? 'text-white/55' : 'text-on-surface-variant'}`}>
              {fact.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
