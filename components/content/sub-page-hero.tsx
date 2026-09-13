import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';
import { OptimizedImage } from '@/components/ui/optimized-image';

type Stat = { value: string; label: string };

type SubPageHeroProps = {
  /** e.g. "Service Deep Dive" eyebrow label above the title */
  eyebrow: string;
  /** short descriptor line next to the eyebrow, e.g. "Litigation • Corporate • Legal Tech" */
  meta?: string;
  title: string;
  /** title part rendered muted, on its own line */
  titleMuted?: string;
  body: string;
  /** secondary paragraph (long-form pages) */
  bodySecondary?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  icon: IconName;
  image?: { src: string; alt: string };
  stats?: Stat[];
  crumbs: { label: string; href?: string }[];
};

/**
 * Shared sub-page hero the imagine.art-style pattern used on the
 * upgraded home/services/industries pages: breadcrumb, hairline chips,
 * display-type headline with muted second half, lede body, ink buttons,
 * and a rounded media panel (no glows, no navy, no card shadows).
 */
export function SubPageHero({
  eyebrow,
  meta,
  title,
  titleMuted,
  body,
  bodySecondary,
  ctaLabel = 'Book a Strategy Call',
  ctaHref = '/contact',
  secondaryLabel = 'See Our Work',
  secondaryHref = '/case-studies',
  icon,
  image,
  stats,
  crumbs,
}: SubPageHeroProps) {
  return (
    <div className="bg-page-wash border-b border-[var(--line)]">
      {/* breadcrumb */}
      <div className="py-4 px-5 sm:px-8">
        <div className="max-w-container-max mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-3">
              {crumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {i > 0 && <Icon name="ChevronRight" className="size-3 opacity-50" aria-hidden />}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-ink transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-ink">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-24 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-xl">
              <div className="reveal flex flex-wrap items-center gap-3 mb-6">
                <span className="chip font-ui"><Icon name={icon} className="text-[14px]" aria-hidden />{eyebrow}</span>
                {meta && <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-3">{meta}</span>}
              </div>
              {/* LCP: the H1 paints immediately it simply doesn't carry
                  `.reveal`, so no JS-gated opacity on above-fold text. */}
              <h1 className="display-type" style={{ fontSize: 'clamp(34px, 4.6vw, 58px)' }}>
                {title}{titleMuted && titleMuted.trim() && <><br /><span className="opacity-60">{titleMuted}</span></>}
              </h1>
              <p className="reveal reveal-delay-2 body-ink !text-[16px] mt-6 mb-6">{body}</p>
              {bodySecondary && <p className="reveal reveal-delay-2 body-ink mb-8">{bodySecondary}</p>}
              <div className="reveal reveal-delay-3 flex flex-wrap gap-3">
                <Link className="btn-ink" href={ctaHref}>{ctaLabel}<Icon name="ArrowRight" className="ml-1 size-4" aria-hidden /> </Link>
                {secondaryLabel && (
                  <Link className="btn-ghost" href={secondaryHref}>{secondaryLabel}</Link>
                )}
              </div>
              {stats && stats.length > 0 && (
                <div className="reveal reveal-delay-4 mt-10 flex flex-wrap gap-2 max-w-lg">
                  {stats.map((s) => (
                    <span key={s.label} className="chip font-ui">
                      {s.value !== s.label ? `${s.value} ${s.label}` : s.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {image && (
              <div className="reveal reveal-delay-2 relative h-[300px] sm:h-[380px] lg:h-[440px] rounded-[24px] overflow-hidden border border-[var(--line)]">
                {/* LCP element on every sub-page preloaded, never lazy. */}
                <OptimizedImage src={image.src} alt={image.alt} width={1200} height={800} priority={true} className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
