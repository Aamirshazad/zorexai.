import { Icon, type IconName } from '@/components/ui/icon';
import { SectionHeading, SectionShell } from '@/components/ui/section';

export type RiskAnswer = {
  risk: string;
  question: string;
  answer: string;
  icon: IconName;
};

/**
 * The questions a buyer asks internally before signing, answered in the open.
 *
 * Laid out as a definition list — question on the left rail, answer on the
 * right, separated by hairlines — rather than as an accordion (the FAQ block
 * already owns that shape) or as cards (three pages already do). Nothing is
 * hidden behind a click here on purpose: these are the answers that reduce
 * perceived risk, so they should be readable in one scroll.
 */
export function RiskAnswers({
  eyebrow = 'Before You Commit',
  title,
  intro,
  items,
  footnote,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: RiskAnswer[];
  footnote?: string;
}) {
  return (
    <SectionShell tone="low" bordered>
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} align="left" className="mb-12 sm:mb-14" />

      <dl className="border-t border-outline-variant/40">
        {items.map((item) => (
          <div
            key={item.question}
            className="grid gap-3 border-b border-outline-variant/40 py-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14"
          >
            <div>
              <span className="font-label-sm mb-2 flex items-center gap-2 text-[10px] uppercase tracking-widest text-outline">
                <Icon name={item.icon} className="size-3.5 text-secondary" />
                {item.risk}
              </span>
              <dt className="font-headline-md text-lg text-primary-container text-balance sm:text-xl">{item.question}</dt>
            </div>
            <dd className="font-body-md leading-relaxed text-on-surface-variant">{item.answer}</dd>
          </div>
        ))}
      </dl>

      {footnote ? (
        <p className="font-body-sm mt-8 max-w-3xl text-sm leading-relaxed text-outline">{footnote}</p>
      ) : null}
    </SectionShell>
  );
}
