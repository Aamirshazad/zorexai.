import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { engagements } from '@/content/engagements';

/**
 * The homepage evidence band.
 *
 * Without this the homepage went services → method → comparison → CTA, so a
 * reader was asked to book a call having seen no sign that any of it has been
 * built before. Kept deliberately narrow: three engagements, one before/after
 * line each, and a link to the full write-ups. No figures, because we do not
 * have ones we can evidence in public the constraint is stated rather than
 * papered over.
 *
 * Asymmetric bento matching the "One system layer" section on /industries:
 * a featured grain-teal engagement spanning two columns beside a white panel,
 * then the remaining engagement as a full-width white row split between its
 * Before → After shift.
 */
export function ProofStrip() {
  const [featured, second, third] = engagements;

  return (
    <section className="py-section-padding px-5 sm:px-8" id="evidence">
      <div className="max-w-container-max mx-auto">
        <div className="reveal mb-12 sm:mb-16 max-w-[640px]">
          <span className="eyebrow mb-4 block">Evidence</span>
          <h2 className="section-title mb-4">
            Three engagements, <span className="h-muted">and what changed about the work.</span>
          </h2>
          <p className="lede mt-5">
            Representative examples from our own project records, anonymised at our clients&apos; request. Each one
            is a bottleneck a business had lived with for a while, and a system somebody now uses on a Monday.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* featured engagement — grain-teal foundation panel */}
          <Link
            href={featured.href}
            className="reveal grain grain-teal diag-split lg:col-span-2 flex flex-col justify-end no-underline"
          >
            <span className="chip chip-grain w-fit mb-6">
              <Icon name={featured.serviceIcon} className="text-[14px]" aria-hidden />
              {featured.industry}
            </span>
            <h3 className="mc-title text-2xl md:text-3xl mb-4">{featured.title}</h3>
            <div className="border-t border-white/15 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="mc-label !opacity-80 mb-1.5">Before</div>
                <p className="text-[13.5px] leading-[1.55] opacity-70">{featured.shift.from}</p>
              </div>
              <div>
                <div className="mc-label !opacity-80 mb-1.5">After</div>
                <p className="text-[13.5px] leading-[1.55]">{featured.shift.to}</p>
              </div>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
              The problem and the build
              <Icon name="ArrowRight" className="size-4" aria-hidden />
            </span>
          </Link>

          {/* second engagement — white panel */}
          <Link
            href={second.href}
            className="reveal reveal-delay-1 bg-panel rounded-[26px] border border-[var(--line)] p-8 flex flex-col justify-between no-underline group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="size-12 rounded-full border border-[var(--line-strong)] flex items-center justify-center">
                <Icon name={second.serviceIcon} className="text-ink text-lg" aria-hidden />
              </div>
              <span className="chip">{second.industry}</span>
            </div>
            <div>
              <h3 className="mc-title text-xl md:text-2xl mb-3">{second.title}</h3>
              <div className="border-t border-[var(--line)] pt-4 mt-4">
                <div className="mc-label mb-1.5">After</div>
                <p className="mc-body">{second.shift.to}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:gap-3 transition-all">
                Read the write-up
                <Icon name="ArrowRight" className="size-4" aria-hidden />
              </span>
            </div>
          </Link>

          {/* third engagement — full-width white row, before/after split */}
          <Link
            href={third.href}
            className="reveal lg:col-span-3 bg-panel rounded-[26px] border border-[var(--line)] p-8 md:p-10 flex flex-col md:flex-row items-stretch gap-8 no-underline group"
          >
            <div className="md:w-2/5 flex flex-col justify-center">
              <span className="chip w-fit mb-6">
                <Icon name={third.serviceIcon} className="text-[14px]" aria-hidden />
                {third.industry}
              </span>
              <h3 className="mc-title text-2xl md:text-3xl mb-4">{third.title}</h3>
              <p className="font-ui text-[11px] font-medium uppercase tracking-[0.12em] text-ink-3">{third.who}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:gap-3 transition-all">
                Read the write-up
                <Icon name="ArrowRight" className="size-4" aria-hidden />
              </span>
            </div>
            <div className="md:w-3/5 rounded-[20px] border border-[var(--line)] bg-page-wash p-6 md:p-8 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-5 items-center content-center">
              <div className="flex flex-col justify-center">
                <div className="mc-label mb-1.5">Before</div>
                <p className="text-[13.5px] leading-[1.55] text-ink-3">{third.shift.from}</p>
              </div>
              <Icon name="ArrowRight" className="hidden size-5 text-ink-3 sm:block" aria-hidden />
              <div className="flex flex-col justify-center border-t sm:border-t-0 sm:border-l border-[var(--line)] pt-4 sm:pt-0 sm:pl-5">
                <div className="mc-label mb-1.5">After</div>
                <p className="text-[13.5px] leading-[1.55] text-ink-2">{third.shift.to}</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="reveal reveal-delay-2 mt-10">
          <Link
            className="inline-flex items-center gap-2 border-b border-[var(--line-strong)] pb-0.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            href="/case-studies"
          >
            Read the Write-ups
            <Icon name="ArrowRight" className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
