import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { FinalCta } from '@/components/content/final-cta';
import { generalFaq } from '@/content/faqs';

/**
 * /faq
 *
 * A dedicated FAQ page, not a call-to-action page. Every answer is written to
 * stand alone (subject named in the first sentence, 40-80 words), which is the
 * form answer engines extract. The questions are emitted as FAQPage schema from
 * the same array in content/faqs.ts, so the markup cannot drift from the copy.
 *
 * This page deliberately does not repeat the "buying guidance" set on /services.
 * One question is answered on one page only.
 */
export default function PageContent() {
  return (
    <>
      <main className="font-ui bg-page-wash">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
          <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
          <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>

          <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
            <Breadcrumbs route="faq" className="mb-8" />
            <div className="flex flex-col items-center max-w-3xl">
              <h1 className="display-type mb-6">
                Questions people ask <span className="opacity-60">before they talk to us.</span>
              </h1>
              <p className="body-ink max-w-2xl mb-10">
                Zorex AI is an AI software company for operations teams that have outgrown manual work. These are the
                answers to what we build, what it costs, how long it takes, and what you own at the end.
              </p>
            </div>
          </div>
        </section>

        {/* ── Answers ──────────────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="reveal grid gap-4 md:grid-cols-2">
              {generalFaq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[20px] border border-[var(--line)] bg-panel p-6 transition-colors hover:border-[var(--line-strong)]"
                >
                  <summary className="cursor-pointer list-none pr-8 font-medium text-[15.5px] leading-snug text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                    <span className="inline-flex items-start justify-between gap-4 w-full">
                      {item.question}
                      <span aria-hidden="true" className="text-ink-3 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="pt-4 mc-body text-ink-2">{item.answer}</p>
                </details>
              ))}
            </div>

            <div className="reveal reveal-delay-2 mt-12 rounded-[20px] border border-[var(--line)] bg-panel-2 p-8 text-center">
              <h2 className="section-title mb-4" style={{ fontSize: 'clamp(22px, 2.6vw, 30px)' }}>
                Still have a question?
              </h2>
              <p className="body-ink mb-6 max-w-xl mx-auto">
                Ask it directly. You will reach an engineer who has designed and deployed the kind of system you are
                asking about, not a qualification queue.
              </p>
              <Link
                className="btn-ink"
                href="/contact"
              >
                Ask a question
                <Icon name="ArrowRight" className="ml-1 size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <FinalCta
          heading="Ready to map the workflow that is costing you the most?"
          body="Bring one workflow. We will tell you whether an AI system is worth building, and what it would take."
          secondaryLabel="Read about our process"
          secondaryHref="/process"
        />
      </main>
    </>
  );
}