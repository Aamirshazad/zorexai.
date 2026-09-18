import { Icon, type IconName } from '@/components/ui/icon';

export type Alternative = {
  option: string;
  icon: IconName;
  limit: string;
  ours: string;
};

/**
 * The four things a business actually does instead of building a system.
 *
 * Rendered as a comparison, not as three more cards. The reader is genuinely
 * choosing between these four options, so the honest shape for the content is a
 * side-by-side where each alternative's real limitation sits directly opposite
 * our answer. Table on desktop, stacked labelled pairs on mobile.
 *
 * This content previously lived in three separate cards on the homepage
 * ("Why Companies Bring In Zorex"), which repeated the same claim three times
 * in the same shape. One comparison table says it once, better, and the
 * homepage drops a card grid it did not need.
 */
export const defaultAlternatives: Alternative[] = [
  {
    option: 'Add more headcount',
    icon: 'UserPlus',
    limit:
      'Every hire adds salary, ramp-up time, and management overhead. Capacity only grows one person at a time, and it walks out the door at 6pm.',
    ours: 'We build the system once, then extend it across adjacent workflows as volume grows.',
  },
  {
    option: 'Stack more software',
    icon: 'PanelsTopLeft',
    limit:
      'No-code builders and off-the-shelf assistants handle stable if-then rules. They stall the moment a case needs context, judgment, or an exception.',
    ours: 'We build for the cases the rules engine cannot finish, and keep the rules engine where it works.',
  },
  {
    option: 'Build it entirely in-house',
    icon: 'Wrench',
    limit:
      'You end up hiring a capability you do not have yet, on a timeline your operations team is already paying for every week it waits.',
    ours: 'We do the audit and the build, then hand over the code, prompts, and documentation so your team can own it.',
  },
  {
    option: 'Wait for the tools to improve',
    icon: 'Hourglass',
    limit:
      'The models are improving. The workflow you are running manually today is not, and its cost repeats every week you wait.',
    ours: 'We scope to what is buildable now, and design so the model layer can be swapped as it improves.',
  },
];

export function AlternativesTable({
  eyebrow = 'The Alternatives',
  title = 'You have four options. Here is where each one runs out.',
  intro = 'Adding people, stacking tools, building in-house, or waiting. None of these is unreasonable, and each has a specific point at which it stops working.',
  items = defaultAlternatives,
  footnote,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items?: Alternative[];
  footnote?: string;
}) {
  return (
    <section className="py-section-padding px-5 sm:px-8" aria-labelledby="alternatives-heading">
      <div className="max-w-container-max mx-auto">
        <div className="reveal mb-12 max-w-[640px] sm:mb-16">
          <span className="eyebrow mb-4 block">{eyebrow}</span>
          <h2 id="alternatives-heading" className="section-title mb-4">
            {title}
          </h2>
          <p className="lede mt-5">{intro}</p>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-[var(--line)] bg-panel">
          {/* Header row: desktop only. Mobile gets inline column labels per item. */}
          <div className="hidden grid-cols-[1.1fr_1.3fr_1.3fr] gap-px bg-[var(--line)] md:grid">
            {['The option', 'Where it runs out', 'What we do instead'].map((label, index) => (
              <div
                key={label}
                className={`px-6 py-4 font-ui text-[10px] font-semibold uppercase tracking-[0.14em] ${
 index === 2 ? 'bg-ink text-white' : 'bg-panel-2 text-ink-3'
 }`}
              >
                {label}
              </div>
            ))}
          </div>

          <div className="divide-y divide-[var(--line)]">
            {items.map((item) => (
              <div key={item.option} className="grid gap-4 p-6 md:grid-cols-[1.1fr_1.3fr_1.3fr] md:gap-0 md:p-0">
                <div className="flex items-center gap-3 md:px-6 md:py-7">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-[var(--line)] bg-[var(--panel-2)]">
                    <Icon name={item.icon} className="size-4 text-ink-2" aria-hidden />
                  </span>
                  <h3 className="mc-title text-base text-ink">{item.option}</h3>
                </div>

                <div className="md:border-l md:border-[var(--line)] md:px-6 md:py-7">
                  <span className="mb-1 block font-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-3 md:hidden">
                    Where it runs out
                  </span>
                  <p className="mc-body text-[13.5px]">{item.limit}</p>
                </div>

                <div className="rounded-[14px] border border-[var(--line)] bg-[var(--panel-2)] p-4 md:rounded-none md:border-0 md:border-l md:border-[var(--line)] md:bg-[var(--panel-2)] md:px-6 md:py-7">
                  <span className="mb-1 block font-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-3 md:hidden">
                    What we do instead
                  </span>
                  <p className="flex gap-2 text-[13.5px] font-medium leading-[1.55] text-ink">
                    <Icon name="Check" className="mt-0.5 size-4 shrink-0 text-ink" aria-hidden />
                    {item.ours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {footnote ? <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-3">{footnote}</p> : null}
      </div>
    </section>
  );
}
