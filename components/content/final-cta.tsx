import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

type FinalCtaProps = {
  heading: string;
  body: string;
  /** Kept for call-site compatibility every page now renders the
      imagine.art-style grain band (home/services signature look). */
  variant?: 'grain';
};

export function FinalCta({ heading, body }: FinalCtaProps) {
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
        <div className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="chip chip-grain">Free</span>
          <span className="chip chip-grain">45 minutes</span>
          <span className="chip chip-grain">No obligation</span>
        </div>
        <div className="reveal reveal-delay-3">
          <Link className="btn-ink !bg-white !text-ink hover:!bg-white/90" href="/contact">Book a Strategy Call<Icon name="ArrowRight" className="ml-1 size-4" aria-hidden /></Link>
        </div>
      </div>
    </section>
  );
}
