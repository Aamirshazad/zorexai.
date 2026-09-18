import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { FinalCta } from '@/components/content/final-cta';
import { SmartForm } from '@/components/ui/smart-form';
import { getPageKind, pages } from '@/lib/site-data';

/**
 * /blog
 *
 * Two things were wrong here beyond the retired token set.
 *
 * 1. The topic chips did not match the articles. The chips read "Agentic
 *    Systems / AI Integration / Vertical AI / Operations" while the posts were
 *    labelled "AI Agentic Systems / AI Integration / Security / Automation" — two
 *    chips led nowhere and two posts belonged to no chip. Categories are now
 *    derived from the posts themselves, so a chip exists only if a post uses it.
 *
 * 2. Titles, descriptions and dates were hand-typed here as well as being held
 *    in content/manifest.json, so the two could drift. Everything below is read
 *    from the manifest, which is already the metadata source of truth.
 *
 * There is no hero image and no per-card thumbnail. The posts have no real
 * artwork, and the previous version filled the gap with Unsplash photography
 * presented as article imagery. A typographic list is the honest option.
 */

/** Category per article, and the read-time shown on the card. */
const ARTICLE_META: Record<string, { category: string; readTime: string }> = {
  'blog-agentic-systems': { category: 'Agentic Systems', readTime: '12 min read' },
  'blog-ai-commerce': { category: 'AI Integration', readTime: '10 min read' },
  'blog-cognitive-infrastructure': { category: 'AI Integration', readTime: '11 min read' },
  'blog-intelligent-process': { category: 'Automation', readTime: '9 min read' },
  'blog-llm-security': { category: 'Security', readTime: '10 min read' },
};

const CATEGORY_ICON: Record<string, IconName> = {
  'Agentic Systems': 'Bot',
  'AI Integration': 'PlugZap',
  Automation: 'Workflow',
  Security: 'ShieldCheck',
};

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

const articles = pages
  .filter((page) => getPageKind(page.route) === 'article')
  .map((page) => ({
    route: page.route,
    href: `/${page.route}`,
    title: page.title.split(' | ')[0],
    description: page.description,
    publishedAt: page.publishedAt,
    category: ARTICLE_META[page.route]?.category ?? 'Insights',
    readTime: ARTICLE_META[page.route]?.readTime,
  }))
  // Newest first, so the list stays correct when a post is added.
  .sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''));

const categories = Array.from(new Set(articles.map((article) => article.category)));
const [featured, ...rest] = articles;

function formatDate(value?: string) {
  if (!value) return null;
  return dateFormatter.format(new Date(value));
}

export default function PageContent() {
  return (
    <>
      <main className="font-ui bg-page-wash">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
          <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
          <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>

          <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
            <Breadcrumbs route="blog" className="mb-8" />
            <div className="flex flex-col items-center max-w-3xl">
              <h1 className="display-type mb-6">
                Notes on building AI systems <span className="opacity-60">that survive contact with operations.</span>
              </h1>
              <p className="body-ink max-w-2xl mb-6">
                We publish when there is something specific worth saying, not on a schedule. What follows is how we
                approach agentic systems, integration, and the operational problems that make a build worth doing.
              </p>
              {/* Chips are derived from the articles below, so every category
                  shown here actually has a post behind it. */}
              <ul className="flex flex-wrap items-center justify-center gap-2 list-none">
                {categories.map((category) => (
                  <li key={category} className="chip font-ui">
                    <Icon name={CATEGORY_ICON[category] ?? 'FileText'} className="text-[14px]" aria-hidden />
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─ Featured ─────────────────────────────────────────────────── */}
        {featured && (
          <section className="py-section-padding px-5 sm:px-8">
            <div className="max-w-container-max mx-auto">
              <Link
                href={featured.href}
                className="reveal card-lift group flex flex-col rounded-[26px] border border-[var(--line)] bg-panel p-8 no-underline md:p-12 lg:flex-row lg:items-center lg:gap-16"
              >
                <div className="lg:w-3/5">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="chip">
                      <Icon name={CATEGORY_ICON[featured.category] ?? 'FileText'} className="text-[14px]" aria-hidden />
                      {featured.category}
                    </span>
                    <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                      Most recent
                    </span>
                  </div>
                  <h2 className="section-title mb-4 text-balance">{featured.title}</h2>
                  <p className="lede mb-6 max-w-2xl">{featured.description}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-ink-3">
                    <span>Zorex AI</span>
                    {formatDate(featured.publishedAt) && (
                      <>
                        <span aria-hidden="true">&middot;</span>
                        <span>{formatDate(featured.publishedAt)}</span>
                      </>
                    )}
                    {featured.readTime && (
                      <>
                        <span aria-hidden="true">&middot;</span>
                        <span>{featured.readTime}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-8 shrink-0 lg:mt-0">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:gap-3 transition-all">
                    Read the article
                    <Icon name="ArrowRight" className="size-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ── More articles ────────────────────────────────────────────── */}
        {rest.length > 0 && (
          <section className="pb-section-padding px-5 sm:px-8">
            <div className="max-w-container-max mx-auto">
              <h2 className="eyebrow mb-8">More from the archive</h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
                {rest.map((article, index) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className={`reveal${index > 0 ? ` reveal-delay-${Math.min(index, 2)}` : ''} card-lift group flex flex-col rounded-[22px] border border-[var(--line)] bg-panel p-8 no-underline`}
                  >
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="chip">
                        <Icon name={CATEGORY_ICON[article.category] ?? 'FileText'} className="text-[14px]" aria-hidden />
                        {article.category}
                      </span>
                    </div>
                    <h3 className="mc-title mb-3 text-xl text-ink">{article.title}</h3>
                    <p className="mc-body mb-6 flex-grow text-[13.5px]">{article.description}</p>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-5">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-ink-3">
                        {formatDate(article.publishedAt) && <span>{formatDate(article.publishedAt)}</span>}
                        {article.readTime && (
                          <>
                            <span aria-hidden="true">&middot;</span>
                            <span>{article.readTime}</span>
                          </>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-2 text-[13px] font-medium text-ink group-hover:gap-3 transition-all">
                        Read
                        <Icon name="ArrowRight" className="size-4" aria-hidden />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <p className="reveal mt-10 text-sm text-ink-3">
                Looking for something specific that is not here?{' '}
                <Link href="/contact" className="footer-link font-medium text-ink border-b border-[var(--line-strong)] hover:border-ink transition-colors">
                  Ask us directly
                </Link>{' '}
                and we will point you at the closest thing we have — or write it.
              </p>
            </div>
          </section>
        )}

        {/* ── Newsletter ───────────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]">
          <div className="reveal max-w-2xl mx-auto text-center">
            <Icon name="Mail" className="text-3xl text-ink-2 mb-6" aria-hidden />
            <h2 className="section-title mb-4">One email a month, when there is something to say.</h2>
            <p className="lede mx-auto mb-8">
              The frameworks and technical breakdowns we use on live engagements. No drip sequence, no product
              announcements, and nothing we have not actually built.
            </p>
            <SmartForm
              id="newsletter-form"
              subject="Newsletter Signup"
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
              submitLabel="Subscribe"
              submitClassName="btn-ink w-full sm:w-auto"
              successTitle="You're on the list."
              successBody="One email a month at most, and only when there is something specific to share. Unsubscribe by replying to any of them."
            >
              <label htmlFor="newsletter-email" className="sr-only">Business email</label>
              <input
                id="newsletter-email"
                className="flex-1 w-full px-5 h-12 rounded-[10px] border border-[var(--line-strong)] bg-panel text-ink placeholder:text-ink-3 focus:ring-2 focus:ring-ink/70 focus:border-transparent outline-none text-sm"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                inputMode="email"
                required={true}
                type="email"
              />
            </SmartForm>
            <p className="text-xs text-ink-3 mt-4">
              Your address is used for this list only. See our <Link className="underline underline-offset-2" href="/privacy">privacy policy</Link>.
            </p>
          </div>
        </section>

        <FinalCta
          heading="Ready to remove the work slowing growth?"
          body="Bring one workflow that consumes your team's time. We will tell you whether a system is worth building for it."
          secondaryLabel="See what we build"
          secondaryHref="/services"
        />
      </main>
    </>
  );
}
