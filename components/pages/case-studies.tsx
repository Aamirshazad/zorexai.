import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { FinalCta } from '@/components/content/final-cta';
import { engagements } from '@/content/engagements';

/**
 * /case-studies
 *
 * Rebuilt on content/engagements.ts, the single source the homepage evidence
 * band also reads. The previous version hardcoded its own copy and contradicted
 * itself inside one viewport: the hero promised outcomes "anonymized to protect
 * client confidentiality" while the cards beneath it named a client and credited
 * a quote to "Founder & CEO · EchoCommerce". It also ran on the retired Material
 * token set, so typography and card radius changed on arrival.
 *
 * Confidentiality is now stated once, precisely, and applied to every engagement
 * identically: role and company type only, never a name, and never a figure we
 * cannot put in front of the client it came from.
 */

const confidentiality = [
  {
    icon: 'EyeOff' as const,
    title: 'No client names',
    body: 'Every engagement is described by role and company type. An operations director at a mid-market logistics operator is specific enough to be useful and anonymous enough to be safe.',
  },
  {
    icon: 'Gauge' as const,
    title: 'No figures we cannot evidence',
    body: 'We do not publish a percentage we have not measured with the client and been cleared to repeat. Where a number would help you most, we will walk through it on a call instead.',
  },
  {
    icon: 'Quote' as const,
    title: 'No quotes without approval',
    body: 'Attribution requires permission. Until that permission exists in writing, the change is described in our words rather than borrowed ones.',
  },
];

export default function PageContent() {
  return (
    <>
      <main className="font-ui bg-page-wash">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
          <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
          <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>

          <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
            <Breadcrumbs route="case-studies" className="mb-8" />
            <div className="flex flex-col items-center max-w-3xl">
              <h1 className="display-type mb-6">
                Three bottlenecks, <span className="opacity-60">and what changed about the work.</span>
              </h1>
              <p className="body-ink max-w-2xl mb-6">
                These are representative examples from our own project records, anonymised at our clients&apos; request.
                Each one is a bottleneck a business had lived with for a while, and a system somebody now uses on a
                Monday morning.
              </p>
              <p className="text-sm text-ink-3 max-w-xl">
                What we can and cannot publish is set out below, because it explains why these read differently from the
                case studies you may be used to.
              </p>
            </div>
          </div>
        </section>

        {/* ── The engagements, in full ────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8">
          <div className="max-w-container-max mx-auto flex flex-col gap-5">
            {engagements.map((item, index) => (
              <article
                key={item.href}
                className={`reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ''} rounded-[26px] border border-[var(--line)] bg-panel p-8 md:p-10`}
              >
                {item.image && (
                  <div className="group relative mb-8 h-56 overflow-hidden rounded-[18px] border border-[var(--line)] sm:h-72">
                    <OptimizedImage
                      src={item.image.src}
                      alt={item.image.alt}
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="chip">
                    <Icon name={item.serviceIcon} className="text-[14px]" aria-hidden />
                    {item.service}
                  </span>
                  <span className="chip">{item.industry}</span>
                </div>

                <p className="mb-3 font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                  Engagement {item.number}
                </p>
                <h2 className="mc-title mb-3 text-2xl text-ink md:text-3xl">{item.title}</h2>
                <p className="mc-body mb-8 max-w-3xl">{item.who}</p>

                <dl className="grid grid-cols-1 gap-8 border-t border-[var(--line)] pt-8 lg:grid-cols-3">
                  <div>
                    <dt className="eyebrow mb-3 block">The Problem</dt>
                    <dd className="mc-body text-[14px]">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-3 block">What We Built</dt>
                    <dd className="mc-body text-[14px]">{item.built}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-3 block">What Changed</dt>
                    <dd className="mc-body text-[14px]">{item.changed}</dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-col gap-6 border-t border-[var(--line)] pt-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
                    <div>
                      <span className="eyebrow mb-1.5 block">Before</span>
                      <p className="text-[13.5px] leading-[1.55] text-ink-3">{item.shift.from}</p>
                    </div>
                    <div>
                      <span className="eyebrow mb-1.5 block">After</span>
                      <p className="text-[13.5px] leading-[1.55] text-ink-2">{item.shift.to}</p>
                    </div>
                  </div>
                  <Link
                    href={item.href}
                    className="footer-link shrink-0 gap-2 border-b border-[var(--line-strong)] text-sm font-medium text-ink transition-colors hover:border-ink"
                  >
                    Read the write-up
                    <Icon name="ArrowRight" className="size-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─ How we handle confidentiality ────────────────────────────── */}
        <section className="px-5 pb-section-padding sm:px-8" id="confidentiality">
          <div className="max-w-container-max mx-auto">
            <div className="reveal mb-10 max-w-[640px]">
              <span className="eyebrow mb-4 block">On Publishing Proof</span>
              <h2 className="section-title mb-4">What we publish, and what we will not.</h2>
              <p className="lede mt-5">
                Most case studies in this category name a logo and quote a number nobody can check. These three rules are
                why ours look different, and they are applied the same way to every client.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {confidentiality.map((item, index) => (
                <div
                  key={item.title}
                  className={`reveal${index > 0 ? ` reveal-delay-${index}` : ''} flex flex-col rounded-[20px] border border-[var(--line)] bg-panel p-7`}
                >
                  <span className="mb-5 flex size-10 items-center justify-center rounded-[12px] border border-[var(--line-strong)] bg-[var(--panel-2)]">
                    <Icon name={item.icon} className="size-[18px] text-ink" aria-hidden />
                  </span>
                  <dt className="mc-title mb-3 text-[17px] text-ink">{item.title}</dt>
                  <dd className="mc-body text-[13.5px]">{item.body}</dd>
                </div>
              ))}
            </dl>
            <p className="reveal reveal-delay-2 mt-8 text-sm text-ink-3">
              If a reference conversation with a client in your sector would help, ask on the call and we will approach
              them. That is a permission we ask for rather than assume.
            </p>
          </div>
        </section>

        <FinalCta
          heading="Have an operational problem worth solving?"
          body="Schedule a strategy call and find where an AI system could make the biggest difference in your operations."
          secondaryLabel="See what we build"
          secondaryHref="/services"
        />
      </main>
    </>
  );
}