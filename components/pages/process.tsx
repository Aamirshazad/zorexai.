import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { FinalCta } from '@/components/content/final-cta';
import { FourPhases } from '@/components/content/four-phases';
import { EngagementAssurances } from '@/components/content/engagement-assurances';
import { SecurityPosture } from '@/components/content/security-posture';

/**
 * /process
 *
 * The page that answers "how does working with you actually go". It was
 * carrying four sections that between them said two of the same things twice:
 *
 *   - a bespoke "Built Into Every Engagement" bento whose six-item equivalent
 *     had been written, reviewed, and left in an unused file
 *     (components/content/engagement-assurances.tsx) — now rendered instead
 *   - a "Traditional Automation vs Intelligent Systems" comparison that
 *     re-stated the "Old Way vs The Zorex Way" comparison on /services
 *
 * Both are resolved: one commitments block, sourced from content/company.ts, and
 * the comparison lives on one page only. The security band links out to /security
 * rather than restating it, and the previous "designed around SOC 2, GDPR, and
 * HIPAA requirements" line is gone: content/company.ts is explicit that security
 * items are written as practices we follow, never as certifications we hold.
 */
export default function PageContent() {
  return (
    <>
      <main className="font-ui bg-page-wash">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
          <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
          <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>

          <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
            <Breadcrumbs route="process" className="mb-8" />
            <div className="flex flex-col items-center max-w-3xl">
              <h1 className="display-type mb-6">
                From business problem <span className="opacity-60">to deployed AI system.</span>
              </h1>
              <p className="body-ink max-w-2xl mb-10">
                We start with the workflow and the outcome, not the technology. Then we scope it, build it, validate it
                against real work, and hand it over with the documentation your team needs to run it.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link className="btn-ink w-full sm:w-auto" href="/contact">
                  Book a Strategy Call
                  <Icon name="ArrowRight" className="ml-1 size-4" aria-hidden />
                </Link>
                <Link className="btn-ghost w-full sm:w-auto" href="/case-studies">
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── The sequence: one shared process model site-wide ─────────── */}
        <FourPhases />

        {/* ── What you are signing up for ──────────────────────────────── */}
        <EngagementAssurances />

        {/* ── Security & governance, linking to the full page ─────────── */}
        <SecurityPosture id="security" />

        <FinalCta
          heading="Ready to solve the operational problem?"
          body="Schedule a strategy call to map your workflows and find the right place to start."
          secondaryLabel="Read the security practices"
          secondaryHref="/security"
        />
      </main>
    </>
  );
}