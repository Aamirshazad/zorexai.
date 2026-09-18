import { Icon, type IconName } from '@/components/ui/icon';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { FinalCta } from '@/components/content/final-cta';
import { SecurityPosture } from '@/components/content/security-posture';

/**
 * /security
 *
 * Written as engineering practices we follow, never as certifications we hold.
 * content/company.ts states that rule explicitly; this page is where it is
 * enforced in public. Where a claim would need an audit to be true, the page
 * says what we actually do instead, and the closing band names the things we do
 * not claim at all.
 *
 * Shape: a definition list rather than cards, because the /services page already
 * owns the card grid and the point here is to be read, not browsed.
 */

const practices: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'Database',
    title: 'Your data trains nothing',
    body: 'Client data is never used to train external models. Retrieval happens against your own content inside the deployment boundary, and no provider receives your records as training material.',
  },
  {
    icon: 'Lock',
    title: 'Scoped credentials, least privilege',
    body: 'The system gets access to specific fields and specific operations, not an admin token to the whole platform. Every credential is scoped to what the workflow actually needs, and revocable independently.',
  },
  {
    icon: 'GitBranch',
    title: 'Agents operate inside a boundary',
    body: 'Tool access is enumerated and permissioned. The agent can call the operations we gave it and nothing else, and any action outside that boundary escalates to a person rather than being attempted.',
  },
  {
    icon: 'FileCheck2',
    title: 'Validated before it touches production',
    body: 'Every system runs against a held-out set of real cases before launch, and in shadow mode alongside your team after that. Accuracy has to hold its bar across stages before the scope widens.',
  },
  {
    icon: 'ListFilter',
    title: 'Decisions are logged with their sources',
    body: 'Each action is recorded with what it read, what it did, and why. When someone asks how a decision was reached, the answer is a log entry, not a reconstruction.',
  },
  {
    icon: 'Server',
    title: 'Deployed where you need it',
    body: 'Self-hosted, private cloud, or managed environment, chosen with you during design. The deployment target is an engineering decision driven by your constraints, not a default we hand everyone.',
  },
];

const notClaimed = [
  'We do not claim a SOC 2, ISO, or HIPAA certification, because we do not hold one.',
  'We do not claim your compliance obligations are covered by hiring us. They stay yours, and we design to them.',
  'We do not claim a model is safe because it is new. We claim the boundary around it is explicit and testable.',
];

export default function PageContent() {
  return (
    <>
      <main className="font-ui bg-page-wash">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
          <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
          <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>

          <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
            <Breadcrumbs route="security" className="mb-8" />
            <div className="flex flex-col items-center max-w-3xl">
              <h1 className="display-type mb-6">
                How your data is handled, <span className="opacity-60">in writing.</span>
              </h1>
              <p className="body-ink max-w-2xl mb-10">
                Putting a system inside a business function means giving it access to records and the ability to act on
                them. This page sets out how that access is scoped, what is logged, and what we do not claim.
              </p>
            </div>
          </div>
        </section>

        {/* ── Practices ────────────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8" id="practices">
          <div className="max-w-container-max mx-auto">
            <div className="reveal mb-12 max-w-[640px] sm:mb-16">
              <span className="eyebrow mb-4 block">Engineering practices</span>
              <h2 className="section-title mb-4">The boundary is explicit, and testable.</h2>
              <p className="lede mt-5">
                Security in this category is not a document, it is how the system is built. These are the six practices
                that carry the weight on every engagement.
              </p>
            </div>

            <dl className="border-t border-[var(--line)]">
              {practices.map((item, index) => (
                <div
                  key={item.title}
                  className={`reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ''} grid gap-4 border-b border-[var(--line)] py-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14`}
                >
                  <dt className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-[var(--line)] bg-[var(--panel-2)]">
                      <Icon name={item.icon} className="size-4 text-ink-2" aria-hidden />
                    </span>
                    <span className="mc-title text-[17px] leading-snug text-ink">{item.title}</span>
                  </dt>
                  <dd className="mc-body text-[14.5px] text-ink-2">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── What we do not claim ─────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]" id="what-we-do-not-claim">
          <div className="max-w-container-max mx-auto grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="reveal">
              <span className="eyebrow mb-4 block">What we do not claim</span>
              <h2 className="section-title mb-4">Three things we will not tell you.</h2>
              <p className="lede mt-5">
                Most vendors answer the security question with a certification badge. Listing what we do not claim is the
                more useful answer, because it tells you exactly where the responsibility sits.
              </p>
            </div>
            <ul className="reveal reveal-delay-1 flex flex-col divide-y divide-[var(--line)] border-t border-[var(--line)] list-none">
              {notClaimed.map((line) => (
                <li key={line} className="flex items-start gap-3 py-5 text-[14.5px] leading-[1.6] text-ink-2">
                  <Icon name="Minus" className="mt-1 size-4 shrink-0 text-ink-3" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <SecurityPosture />

        <FinalCta
          heading="Want to talk about the boundary before the build?"
          body="Bring the systems and the data involved. We will walk through what access the workflow needs, and what it deliberately does not get."
          secondaryLabel="See how engagements run"
          secondaryHref="/process"
        />
      </main>
    </>
  );
}