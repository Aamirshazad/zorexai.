import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { SectionHeading, SectionShell } from '@/components/ui/section';
import { engagements } from '@/content/engagements';

/**
 * The homepage evidence band.
 *
 * Without this the homepage went services → method → comparison → CTA, so a
 * reader was asked to book a call having seen no sign that any of it has been
 * built before. Kept deliberately narrow: three engagements, one before/after
 * line each, and a link to the full write-ups. No figures, because we do not
 * have ones we can evidence in public — the constraint is stated rather than
 * papered over.
 *
 * Laid out as three hairline-divided columns so it does not read as another card
 * grid two sections after the services bento.
 */
export function ProofStrip() {
  return (
    <SectionShell tone="low" bordered id="evidence">
      <SectionHeading
        eyebrow="Evidence"
        title="Three engagements, and what changed about the work."
        intro="Representative examples from our own project records, anonymised at our clients’ request. Each one is a bottleneck a business had lived with for a while, and a system somebody now uses on a Monday."
        align="split"
        className="mb-12 sm:mb-14"
        action={
          <Link
            className="font-label-sm group inline-flex shrink-0 items-center gap-2 uppercase tracking-wider text-primary-container transition-colors hover:text-secondary"
            href="/case-studies"
          >
            {'Read the Write-ups'}
            <Icon name="ArrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        }
      />

      <ol className="grid divide-y divide-outline-variant/40 border-y border-outline-variant/40 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {engagements.map((item, index) => (
          <li
            key={item.href}
            className={`reveal${index > 0 ? ` reveal-delay-${index}` : ''} group flex flex-col py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0`}
          >
            <span className="docket-bar mb-4">
              <span className="docket-index">{item.number}</span>
              <Icon name={item.serviceIcon} className="size-3.5" />
              <span>{item.industry}</span>
              <span className="docket-rule" aria-hidden="true" />
            </span>

            <h3 className="font-headline-md text-lg text-balance text-primary-container">
              <Link href={item.href} className="transition-colors hover:text-secondary">
                {item.title}
              </Link>
            </h3>

            <dl className="mt-5 space-y-3 border-t border-outline-variant/30 pt-5">
              <div>
                <dt className="font-label-sm mb-1 text-[10px] uppercase tracking-widest text-outline">{'Before'}</dt>
                <dd className="font-body-sm text-sm leading-relaxed text-outline">{item.shift.from}</dd>
              </div>
              <div>
                <dt className="font-label-sm mb-1 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-secondary">
                  <Icon name="ArrowRight" className="size-3" />
                  {'After'}
                </dt>
                <dd className="font-body-md text-sm leading-relaxed text-on-surface-variant">{item.shift.to}</dd>
              </div>
            </dl>

            <Link
              href={item.href}
              className="font-label-sm mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary-container transition-colors hover:text-secondary"
            >
              {'The problem and the build'}
              <Icon name="ArrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ol>

      <p className="font-body-sm mt-8 flex max-w-3xl gap-2.5 text-sm leading-relaxed text-outline">
        <Icon name="EyeOff" className="mt-0.5 size-4 shrink-0 text-secondary" />
        {
          'No client logos and no percentages: most of this work sits inside operations our clients would rather not discuss publicly, and a figure without its baseline is not evidence. Under NDA on a call we walk through the architecture, the evaluation results, and the parts that went wrong.'
        }
      </p>
    </SectionShell>
  );
}
