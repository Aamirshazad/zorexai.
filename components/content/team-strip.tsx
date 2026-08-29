import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { SectionHeading, SectionShell } from '@/components/ui/section';
import { company, initials, leadership, teamComposition } from '@/content/company';

/**
 * "Who will actually work on this" — placed immediately before the closing CTA,
 * because it is the last question a buyer asks themselves before making contact.
 *
 * The homepage previously asserted a headcount in the hero and then never showed
 * a single person, which is the weakest form of the claim. Initials rather than
 * photography: no stock imagery, and no pretence of a bigger bench than exists.
 */
export function TeamStrip() {
  return (
    <SectionShell tone="container" bordered>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--hdr-h)+3rem)] lg:self-start">
          <SectionHeading
            eyebrow="Who You Work With"
            title="A senior team of twelve, and you meet the people building it."
            intro={company.structure}
            align="left"
          />
          <p className="font-body-md mt-5 leading-relaxed text-on-surface-variant">
            {`The engineer who runs your audit stays on the engagement through deployment. ${company.coverage}`}
          </p>
          <Link
            href="/about"
            className="font-label-sm group mt-7 inline-flex items-center gap-2 uppercase tracking-wider text-primary-container transition-colors hover:text-secondary"
          >
            {'Meet the Team'}
            <Icon name="ArrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-outline-variant/40 bg-outline-variant/25 sm:grid-cols-2">
            {leadership.map((person) => (
              <li key={person.name} className="flex gap-4 bg-surface-container-lowest p-5 sm:p-6">
                <span
                  className="font-headline-md flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary-container text-sm text-on-secondary-container"
                  aria-hidden="true"
                >
                  {initials(person.name)}
                </span>
                <span className="min-w-0">
                  <span className="font-headline-md block text-base text-primary-container">{person.name}</span>
                  <span className="font-label-sm mt-0.5 block text-[11px] uppercase tracking-wider text-secondary">
                    {person.role}
                  </span>
                  <span className="font-body-sm mt-2 block text-xs leading-relaxed text-on-surface-variant">
                    {person.focus}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-6 grid gap-x-6 gap-y-3 border-t border-outline-variant/40 pt-6 sm:grid-cols-2">
            {teamComposition.map((group) => (
              <div key={group.discipline} className="flex items-baseline gap-2.5">
                <dt className="font-headline-md shrink-0 text-lg text-secondary">{group.count}</dt>
                <dd className="font-body-sm text-sm leading-snug text-on-surface-variant">{group.discipline}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionShell>
  );
}
