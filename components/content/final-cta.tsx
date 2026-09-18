import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { company } from '@/content/company';

type FinalCtaProps = {
  heading: string;
  body: string;
  /** Optional secondary action. Rendered as a ghost button beside the primary. */
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Kept for call-site compatibility every page now renders the
      imagine.art-style grain band (home/services signature look). */
  variant?: 'grain';
};

export function FinalCta({ heading, body, secondaryLabel, secondaryHref }: FinalCtaProps) {
  // Split a two-sentence heading into a bright first line + muted second
  // line, matching the reference's two-tone display headings. Headings with
  // a single sentence render as-is.
  const split = heading.match(/^(.+?[.?])\s+(.+)$/);
  const h1 = split ? split[1] : heading;
  const h2 = split ? split[2] : null;

  return (
    <section className="cta-bleed grain grain-teal">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="reveal display-type text-white mb-8" style={{ fontSize: 'clamp(28px, 4.4vw, 48px)' }}>
          {h1}
          {h2 && <><br /><span className="opacity-60">{h2}</span></>}
        </h2>
        <p className="reveal reveal-delay-1 mc-body text-[15px] mb-10 max-w-2xl mx-auto">{body}</p>
        {/* Duration reads from content/company.ts so this band can never
            contradict the contact page again (it previously hardcoded 45
            minutes against a 30 minute commitment). */}
        <ul className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-2 mb-10 list-none">
          <li className="chip chip-grain">Free</li>
          <li className="chip chip-grain">{company.callLength}</li>
          <li className="chip chip-grain">No obligation</li>
        </ul>
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link className="btn-ink w-full sm:w-auto !bg-white !text-ink hover:!bg-white/90" href="/contact">
            Book a Strategy Call
            <Icon name="ArrowRight" className="ml-1 size-4" aria-hidden />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link className="btn-ghost w-full sm:w-auto !border-white/30 !text-white hover:!bg-white/10" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
