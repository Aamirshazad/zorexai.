import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { engagementAssurances } from '@/content/company';

/**
 * Section 4 risk reduction. Answers the questions a buyer is already asking
 * silently scope, ownership, failure, communication, support, security
 * without manufacturing fear about what happens if they do nothing.
 */
export function EngagementAssurances({
  heading = 'What you are actually signing up for',
  intro = 'The questions worth asking any AI vendor before money changes hands. Here are our answers, in writing, before you ask.',
  showProcessLink = true,
}: {
  heading?: string;
  intro?: string;
  showProcessLink?: boolean;
}) {
  return (
    <section className="py-section-padding px-5 sm:px-8 bg-surface border-y border-outline-variant/20">
      <div className="max-w-container-max mx-auto">
        <div className="reveal max-w-3xl mb-14">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"How We Work With You"}</span>
          <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4">{heading}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{intro}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagementAssurances.map((item, index) => (
            <div
              key={item.title}
              className={`reveal${index % 3 > 0 ? ` reveal-delay-${index % 3}` : ''} card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7 flex flex-col`}
            >
              <div className="w-11 h-11 bg-primary-fixed rounded-xl flex items-center justify-center mb-5 shrink-0">
                <Icon name={item.icon} className="text-primary-container text-lg" />
              </div>
              <h3 className="font-headline-md text-lg text-primary-container mb-3 leading-snug">{item.title}</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        {showProcessLink ? (
          <p className="reveal font-body-md text-sm text-on-surface-variant mt-10">
            {"These are commitments, not aspirations. "}
            <Link className="text-secondary font-semibold hover:text-primary transition-colors" href="/process">{"See the phase-by-phase process →"}</Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
