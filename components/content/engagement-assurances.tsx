import { Icon } from '@/components/ui/icon';
import { engagementAssurances } from '@/content/company';

/**
 * Risk reduction on the buying path. Answers the questions a buyer is already
 * asking silently: scope, ownership, failure, communication, support, security.
 *
 * Without this the services page went problem -> capability -> price shape ->
 * CTA, so a buyer was asked to book a call having been told nothing about what
 * happens after they sign. The copy was written, reviewed, and then sat in an
 * unused file. It is now on the conversion path, in the site's ink tokens.
 */
export function EngagementAssurances({
  heading = 'What you are actually signing up for',
  intro = 'The questions worth asking any AI vendor before money changes hands. Here are our answers, in writing, before you ask.',
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="py-section-padding px-5 sm:px-8" id="commitments" aria-labelledby="engagement-assurances">
      <div className="max-w-container-max mx-auto">
        <div className="reveal mb-12 max-w-[640px] sm:mb-16">
          <span className="eyebrow mb-4 block">How We Work With You</span>
          <h2 id="engagement-assurances" className="section-title mb-4">
            {heading}
          </h2>
          <p className="lede mt-5">{intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {engagementAssurances.map((item, index) => (
            <div
              key={item.title}
              className={`reveal${index % 3 > 0 ? ` reveal-delay-${index % 3}` : ''} card-lift flex flex-col rounded-[20px] border border-[var(--line)] bg-panel p-7`}
            >
              <div className="mb-5 flex size-10 shrink-0 items-center justify-center rounded-[12px] border border-[var(--line-strong)] bg-[var(--panel-2)]">
                <Icon name={item.icon} className="size-[18px] text-ink" aria-hidden />
              </div>
              <h3 className="mc-title mb-3 text-[17px] leading-snug text-ink">{item.title}</h3>
              <p className="mc-body text-[13.5px] text-ink-2">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
