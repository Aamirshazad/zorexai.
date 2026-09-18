import Link from 'next/link';
import { buyingFaq } from '@/content/faqs';

/**
 * "Buying guidance" on /services.
 *
 * Questions live in content/faqs.ts so components/structured-data.tsx can emit
 * FAQPage schema from the same array. The set deliberately does not overlap the
 * broader questions on /faq: one page owns one answer.
 */
export function BusinessAIFAQ() {
  return (
    <section className="py-section-padding px-5 sm:px-8" aria-labelledby="business-ai-questions">
      <div className="max-w-container-max mx-auto">
        <div className="reveal max-w-3xl mb-10">
          <p className="eyebrow mb-3">Buying guidance</p>
          <h2 id="business-ai-questions" className="section-title mb-4">
            Questions to answer before building an AI system
          </h2>
          <p className="body-ink">
            The right starting point is the business function, not the model. These are the questions we use to determine whether an AI system is a sensible intervention.
          </p>
        </div>

        <div className="reveal reveal-delay-1 grid gap-4 md:grid-cols-2">
          {buyingFaq.map((item) => (
            <details key={item.question} className="group rounded-[20px] border border-[var(--line)] bg-panel p-6 transition-colors hover:border-[var(--line-strong)]">
              <summary className="cursor-pointer list-none pr-8 font-medium text-[15.5px] leading-snug text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                <span className="inline-flex items-start justify-between gap-4 w-full">
                  {item.question}
                  <span aria-hidden="true" className="text-ink-3 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="pt-4 mc-body">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="reveal reveal-delay-2 mt-10 flex flex-wrap gap-4">
          <Link href="/faq" className="footer-link text-sm font-medium text-ink border-b border-[var(--line-strong)] hover:border-ink transition-colors">Read the full FAQ</Link>
          <Link href="/process" className="footer-link text-sm font-medium text-ink border-b border-[var(--line-strong)] hover:border-ink transition-colors">See how we approach implementation</Link>
          <Link href="/contact" className="footer-link text-sm font-medium text-ink border-b border-[var(--line-strong)] hover:border-ink transition-colors">Discuss a workflow</Link>
        </div>
      </div>
    </section>
  );
}
