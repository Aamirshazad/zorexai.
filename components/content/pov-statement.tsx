import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { leadership } from '@/content/company';

/**
 * A point-of-view statement, set as editorial type on a dark surface.
 *
 * This exists as its own rhythm because a genuine methodological opinion loses
 * force when it is chopped into three equal cards next to two other opinions.
 * One claim, stated once, at size — then the reasoning underneath it.
 */
export function PovStatement({
  eyebrow = 'How We Think',
  statement,
  paragraphs,
  attribute = true,
  href,
  linkLabel,
}: {
  eyebrow?: string;
  statement: string;
  paragraphs: string[];
  attribute?: boolean;
  href?: string;
  linkLabel?: string;
}) {
  const author = leadership[0];

  return (
    <section className="px-5 sm:px-8 py-section-padding bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <div className="dark-box relative overflow-hidden p-8 sm:p-12 lg:p-16">
          <Icon
            name="Quote"
            className="absolute -right-6 -top-6 size-[180px] text-white/[0.04] sm:size-[240px]"
            strokeWidth={1}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <span className="font-label-sm text-label-sm mb-6 flex items-center gap-3 uppercase tracking-widest text-accent-gold">
                {eyebrow}
                <span className="h-px w-10 bg-accent-gold/50" aria-hidden />
              </span>
              <p className="font-headline-lg text-3xl leading-[1.2] text-white text-balance sm:text-4xl lg:text-[2.75rem]">
                {statement}
              </p>
              {attribute ? (
                <p className="mt-8 flex items-center gap-3 text-sm text-white/55">
                  <span className="h-px w-8 bg-accent-gold/60" aria-hidden />
                  {author.name}, {author.role}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col justify-center gap-5 border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="font-body-md text-base leading-relaxed text-white/70">
                  {paragraph}
                </p>
              ))}
              {href && linkLabel ? (
                <Link
                  href={href}
                  className="group mt-2 inline-flex w-fit items-center gap-2 font-label-sm text-sm uppercase tracking-wider text-accent-gold no-underline transition-colors hover:text-white"
                >
                  {linkLabel}
                  <Icon name="ArrowRight" className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
