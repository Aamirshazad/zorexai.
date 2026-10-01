import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { FinalCta } from '@/components/content/final-cta';
import { BusinessAIFAQ } from '@/components/content/business-ai-faq';
import { SecurityPosture } from '@/components/content/security-posture';
import { services } from '@/content/services';

const grains = ['grain-olive', 'grain-teal', 'grain-steel', 'grain-mineral', 'grain-sand', 'grain-charcoal'];

const fitCards: Array<{ icon: IconName; title: string; copy: string }> = [
  { icon: 'Hourglass', title: 'Skilled people doing repeatable work', copy: 'Copy-pasting data, chasing approvals, sending the same emails. That’s a systems problem, not a people problem.' },
  { icon: 'TrendingUp', title: 'Processes break when volume grows', copy: 'Everything runs fine until the right person is busy or away. Reliable businesses run on systems, not memory.' },
  { icon: 'BadgeDollarSign', title: 'Growth is creating overhead', copy: 'More clients means more hires. Automation breaks that equation: more volume with the same team.' },
];

const oldWay = [
  { label: 'Slow execution:', copy: 'tasks wait in human inboxes and queues for days.' },
  { label: 'High error rate:', copy: 'manual data entry across systems leads to costly mistakes.' },
  { label: 'Expensive scaling:', copy: 'growing revenue means hiring for the admin load.' },
  { label: 'Data silos:', copy: 'systems that don’t talk create blind spots for leadership.' },
];

const zorexWay = [
  { icon: 'Zap' as IconName, label: 'Instant execution:', copy: 'workflows process tasks in seconds, 24/7.' },
  { icon: 'BadgeCheck' as IconName, label: 'Clean data transfer:', copy: 'API-level integrations keep your systems in sync.' },
  { icon: 'TrendingUp' as IconName, label: 'Scalable capacity:', copy: 'more volume without adding proportional cost.' },
  { icon: 'Network' as IconName, label: 'Unified intelligence:', copy: 'every platform syncs into one source of truth.' },
];

export default function PageContent() {
  return <>
<main className="font-ui bg-page-wash">
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden bg-page-wash border-b border-[var(--line)]">
    <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
    <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>
    <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center justify-center text-center pt-4 pb-12">
      <Breadcrumbs route="services" className="justify-center mb-6" />
      <div className="flex flex-col items-center max-w-4xl">
        <h1 className="display-type mb-6">AI systems, engineered <span className="opacity-60">for the work you actually run.</span></h1>
        <p className="reveal reveal-delay-2 body-ink max-w-2xl mb-12">Four services, one operating model. We map the workflow that consumes your team&apos;s time, then design, build, deploy, and keep improving the system that runs it.</p>
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link className="btn-ink w-full sm:w-auto" href="/contact">Book a Strategy Call<Icon name="ArrowRight" className="ml-1 size-4" aria-hidden /></Link>
          <Link className="btn-ghost w-full sm:w-auto" href="/case-studies">See Our Work</Link>
        </div>
      </div>
    </div>
  </section>

  {/* ── The four services driven by content/services.ts ────────── */}
  <section className="py-section-padding px-5 sm:px-8" id="core-services">
    <div className="max-w-container-max mx-auto">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow mb-4 block justify-center">All Services</span>
        <h2 className="section-title">Four ways we put AI to work in your business.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service, i) => (
          <Link key={service.href} className={`reveal ${i % 3 === 1 ? 'reveal-delay-1' : i % 3 === 2 ? 'reveal-delay-2' : ''} grain ${grains[i % grains.length]} mc-card no-underline flex flex-col`} href={service.href}>
            <span className="mc-arrow" aria-hidden="true"><Icon name="ArrowRight" className="size-4" /></span>
            <div className="flex flex-col h-full">
              <span className="mc-label">0{i + 1} Service</span>
              <h3 className="mc-title text-2xl mb-3">{service.name}</h3>
              <p className="mc-body mb-8">{service.oneLine}</p>
              <div className="mt-auto flex flex-col gap-2.5">
                {service.includes.slice(0, 3).map((tag) => (
                  <span key={tag} className="chip chip-grain w-fit">{tag}</span>
                ))}
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">Explore<Icon name="ArrowRight" className="size-4" aria-hidden /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>

  {/* ── Is this you? ─────────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8">
    <div className="max-w-container-max mx-auto">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow mb-4 block justify-center">Is This You?</span>
        <h2 className="section-title">Built for businesses that have outgrown manual execution.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="reveal grain grain-mineral">
          <span className="mc-label">Signal 01</span>
          <h3 className="mc-title text-xl mb-3">{fitCards[0].title}</h3>
          <p className="mc-body">{fitCards[0].copy}</p>
        </div>
        <div className="reveal reveal-delay-1 grain grain-sand">
          <span className="mc-label">Signal 02</span>
          <h3 className="mc-title text-xl mb-3">{fitCards[1].title}</h3>
          <p className="mc-body">{fitCards[1].copy}</p>
        </div>
        <div className="reveal reveal-delay-2 grain grain-mineral">
          <span className="mc-label">Signal 03</span>
          <h3 className="mc-title text-xl mb-3">{fitCards[2].title}</h3>
          <p className="mc-body">{fitCards[2].copy}</p>
        </div>
      </div>
    </div>
  </section>

  {/* ── Old way vs Zorex way ─────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8">
    <div className="max-w-5xl mx-auto">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow mb-4 block justify-center">The Difference</span>
        <h2 className="section-title">From fragmented work to connected execution.</h2>
      </div>
      <div className="reveal grid grid-cols-1 md:grid-cols-2 rounded-[26px] overflow-hidden border border-[var(--line)] bg-panel">
        <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-[var(--line)]">
          <h3 className="text-lg font-medium text-ink-2 mb-8 flex items-center gap-3"><Icon name="X" className="size-5" aria-hidden />The Old Way</h3>
          <ul className="space-y-6">
            {oldWay.map((item) => (
              <li key={item.label} className="flex items-start gap-4"><Icon name="X" className="text-ink-3 mt-1 shrink-0 size-4" aria-hidden /><p className="text-[14.5px] leading-[1.6] text-ink-2"><strong className="text-ink font-semibold">{item.label}</strong>{item.copy}</p></li>
            ))}
          </ul>
        </div>
        <div className="p-10 md:p-14 bg-panel-2">
          <h3 className="text-lg font-medium text-ink mb-8 flex items-center gap-3"><Icon name="CircleCheck" className="size-5" aria-hidden />The Zorex Way</h3>
          <ul className="space-y-6">
            {zorexWay.map((item) => (
              <li key={item.label} className="flex items-start gap-4"><Icon name={item.icon} className="text-ink mt-1 shrink-0 size-4" aria-hidden /><p className="text-[14.5px] leading-[1.6] text-ink-2"><strong className="text-ink font-semibold">{item.label}</strong>{item.copy}</p></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* ── Security posture on the conversion path + Final CTA + FAQ ── */}
  <SecurityPosture />
  <FinalCta variant="grain" heading={"Ready to remove the work slowing growth?"} body={"Tell us the bottleneck. We'll tell you which of the systems fits, what it takes to launch, and whether it's worth building."} secondaryLabel="Read what you are signing up for" secondaryHref="/process#commitments" />
  <BusinessAIFAQ />
</main>
  </>;
}
