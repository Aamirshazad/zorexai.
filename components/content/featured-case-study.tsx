import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { engagements } from '@/content/engagements';

/**
 * Featured Case Studies section for the homepage.
 * Showcases Case Study 1 (Novus / Fashion Studio) updated to AI Agentic System Engineering
 * and Case Study 3 (Viralgrowth / Healthcare Clinic) with their imagery.
 */
export function FeaturedCaseStudy() {
  // Case Study 1 (index 0) and Case Study 3 (index 2)
  const case1 = {
    ...engagements[0],
    service: 'AI Agentic System Engineering',
    serviceIcon: 'Bot' as const,
  };
  const case3 = engagements[2];
  const featured = [case1, case3];

  return (
    <section className="py-section-padding px-5 sm:px-8" id="case-studies">
      <div className="max-w-container-max mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4 block">Case Studies</span>
            <h2 className="section-title">Real operational bottlenecks, solved in production.</h2>
            <p className="body-ink mt-4">
              Explore how we design and deploy tailored AI systems that integrate directly into existing operations and generate measurable results.
            </p>
          </div>
          <Link
            className="footer-link gap-2 border-b border-[var(--line-strong)] pb-0.5 text-sm font-medium text-ink transition-colors hover:border-ink group"
            href="/case-studies"
          >
            See All Case Studies
            <Icon name="ArrowRight" className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {featured.map((item, index) => {
            if (!item) return null;

            return (
              <article
                key={item.href}
                className={`reveal ${
                  index > 0 ? 'reveal-delay-1' : ''
                } group flex flex-col rounded-[26px] border border-[var(--line)] bg-panel p-6 sm:p-8 transition-all duration-300 hover:border-[var(--line-strong)] hover:shadow-xl relative`}
              >
                {/* Visual Imagery */}
                {item.image && (
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-[18px] border border-[var(--line)] mb-6 bg-ink/5">
                    <OptimizedImage
                      src={item.image.src}
                      alt={item.image.alt}
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-ink/85 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white border border-white/10 shadow-sm">
                        {item.industry}
                      </span>
                    </div>

                    {item.badge && (
                      <div className="absolute bottom-3 left-3.5 right-3.5">
                        <span className="inline-block text-xs font-medium text-white/90 drop-shadow-sm">
                          {item.badge}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="chip chip-grain text-xs flex items-center gap-1.5">
                      <Icon name={item.serviceIcon} className="size-3.5" aria-hidden />
                      {item.service}
                    </span>
                  </div>

                  <h3 className="mc-title text-xl sm:text-2xl font-semibold text-ink leading-snug mb-3">
                    <Link href={item.href} className="hover:text-ink-2 transition-colors">
                      {item.title}
                    </Link>
                  </h3>

                  {item.tagline && (
                    <p className="text-sm font-medium text-ink-2 mb-3">
                      {item.tagline}
                    </p>
                  )}

                  <p className="text-sm text-ink-3 leading-relaxed mb-6">
                    {item.built}
                  </p>

                  {/* Card Action & Client Context */}
                  <div className="mt-auto pt-4 border-t border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-ink-3">
                      <strong className="text-ink-2 font-medium">Client: </strong>
                      {item.who}
                    </p>

                    <Link
                      href={item.href}
                      className="btn-ink !py-2.5 !px-5 text-sm inline-flex items-center gap-2 group/btn shrink-0"
                    >
                      <span>{item.ctaLabel ?? 'Read Case Study'}</span>
                      <Icon
                        name="ArrowRight"
                        className="size-4 transition-transform group-hover/btn:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCaseStudy;
