import { Icon, type IconName } from '@/components/ui/icon';
import { SectionHeading, SectionShell } from '@/components/ui/section';

export type Alternative = {
  option: string;
  icon: IconName;
  limit: string;
  ours: string;
};

/**
 * Alternatives laid out as a comparison, not as three more cards.
 *
 * The reader is choosing between hiring, stacking tools, building in-house, and
 * hiring us so the honest shape for that content is a side-by-side where each
 * alternative's real limitation sits directly opposite our answer. Renders as a
 * table on desktop and stacked pairs on mobile.
 */
export function AlternativesTable({
  eyebrow = 'The Alternatives',
  title,
  intro,
  items,
  footnote,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: Alternative[];
  footnote?: string;
}) {
  return (
    <SectionShell tone="surface" bordered>
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} align="left" className="mb-12 sm:mb-14" />

      <div className="overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest">
        <div className="hidden grid-cols-[1.1fr_1.3fr_1.3fr] gap-px bg-outline-variant/25 md:grid">
          {['The option', 'Where it runs out', 'What we do instead'].map((label, index) => (
            <div
              key={label}
              className={`font-label-sm px-5 sm:px-8 py-4 text-[11px] uppercase tracking-widest ${index === 2 ? 'bg-primary-container text-accent-gold' : 'bg-surface-container-low text-outline'}`}
            >
              {label}
            </div>
          ))}
        </div>

        <div className="divide-y divide-outline-variant/25">
          {items.map((item) => (
            <div key={item.option} className="grid gap-4 p-6 md:grid-cols-[1.1fr_1.3fr_1.3fr] md:gap-0 md:p-0">
              <div className="flex items-center gap-3 md:px-6 md:py-7">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface-container">
                  <Icon name={item.icon} className="size-4 text-on-surface-variant" />
                </span>
                <h3 className="font-headline-md text-base text-primary-container">{item.option}</h3>
              </div>
              <div className="md:border-l md:border-outline-variant/25 md:px-6 md:py-7">
                <span className="font-label-sm mb-1 block text-[10px] uppercase tracking-widest text-outline md:hidden">
                  Where it runs out
                </span>
                <p className="font-body-md text-sm leading-relaxed text-on-surface-variant">{item.limit}</p>
              </div>
              <div className="rounded-lg bg-secondary-container/25 p-4 md:rounded-none md:border-l md:border-outline-variant/25 md:bg-secondary-container/20 md:px-6 md:py-7">
                <span className="font-label-sm mb-1 block text-[10px] uppercase tracking-widest text-secondary md:hidden">
                  What we do instead
                </span>
                <p className="font-body-md flex gap-2 text-sm font-medium leading-relaxed text-on-secondary-fixed-variant">
                  <Icon name="Check" className="mt-0.5 size-4 shrink-0 text-secondary" />
                  {item.ours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {footnote ? (
        <p className="font-body-sm mt-6 max-w-3xl text-sm leading-relaxed text-outline">{footnote}</p>
      ) : null}
    </SectionShell>
  );
}
