import Script from 'next/script';
import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { company } from '@/content/company';

/* ── Strategy call topics ─────────────────────────────────────────────── */
const strategyTopics: { icon: IconName; num: string; title: string; body: string }[] = [
  {
    icon: 'Compass',
    num: '01',
    title: 'AI Strategy & Roadmap',
    body: 'We audit your current workflows and identify where AI creates the highest-leverage impact — then map a phased plan to get there.',
  },
  {
    icon: 'Workflow',
    num: '02',
    title: 'Workflow & Process Mapping',
    body: 'Walk us through the bottleneck. We break it into decision points, handoffs, and data flows to find where automation fits.',
  },
  {
    icon: 'Layers3',
    num: '03',
    title: 'Systems Architecture',
    body: 'How should an AI system connect to your CRM, ERP, or support desk? We scope the integration layer before any code is written.',
  },
  {
    icon: 'ChartNoAxesCombined',
    num: '04',
    title: 'ROI & Feasibility Analysis',
    body: 'Not every process should be automated. We give you an honest read on what\'s worth building and what the expected return looks like.',
  },
  {
    icon: 'FileText',
    num: '05',
    title: 'Content & Knowledge Systems',
    body: 'Turn your internal documents, SOPs, and tribal knowledge into structured content that powers AI agents and retrieval systems.',
  },
  {
    icon: 'Shield',
    num: '06',
    title: 'Security & Compliance Planning',
    body: 'Data handling, access controls, and audit logging — scoped to your requirements before we touch a single API credential.',
  },
];


/* ── FAQ items ──────────────────────────────────────────────────────── */
const faqs: { q: string; a: string }[] = [
  {
    q: 'Is this a sales call?',
    a: 'No. Every call is with a senior member of the build team, not a sales rep. The goal is to understand your workflow, assess feasibility, and give you a clear answer — even if that answer is "don\'t build this."',
  },
  {
    q: 'What should I have ready before the call?',
    a: 'A rough description of the workflow or bottleneck you want to address, which systems it touches, and what a good outcome looks like. Rough answers are enough — if you can describe it in a sentence, we can map it.',
  },
  {
    q: 'How quickly will I hear back?',
    a: company.responseCommitment,
  },
  {
    q: 'Do you work with companies of our size?',
    a: 'We work with operations teams that have outgrown manual execution — from 10-person teams to enterprise divisions. The common thread is a real workflow that needs a system, not a headcount threshold.',
  },
  {
    q: 'Will you sign an NDA?',
    a: 'Yes, standard practice. We\'ll sign one before any technical discussion. Just ask during scheduling or at the start of the call.',
  },
  {
    q: 'What happens after the call?',
    a: 'If there\'s a fit, you receive a written scope with deliverables, sequence, timeline, and price — usually within a few business days. You take that to your team and decide. No pressure at any point.',
  },
];

export default function PageContent() {
  return <>
<main className="font-ui bg-page-wash">
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
    <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
    <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>
    <div className="max-w-container-max mx-auto relative z-10">
      <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
        <h1 className="display-type mb-6">Let&apos;s map the system <span className="opacity-60">worth building first.</span></h1>
        <Reveal delay={0.08}>
          <p className="body-ink max-w-2xl mb-10">Bring the workflow, bottleneck, or growth constraint. In {company.callLength}, we&apos;ll determine whether AI creates real leverage in your operation and where to start.</p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a className="btn-ink w-full sm:w-auto" href="#book"><Icon name="CalendarCheck2" className="mr-1 size-4" aria-hidden />Schedule Your Strategy Call</a>
            <Link className="btn-ghost w-full sm:w-auto" href="/process">See Our Process</Link>
          </div>
        </Reveal>
      </div>
    </div>
  </section>


  {/* ── What We'll Cover ──────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]" id="what-we-cover">
    <div className="max-w-container-max mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
      <div className="reveal order-2 relative min-h-[300px] overflow-hidden rounded-[22px] border border-[var(--line)] sm:min-h-[380px] lg:order-1 lg:min-h-[520px] lg:sticky lg:top-28">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
          alt="Zorex strategy session mapping AI systems"
          width={1200}
          height={800}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="order-1 lg:order-2">
        <div className="reveal mb-10 max-w-[640px]">
          <span className="eyebrow mb-4 block">What We&apos;ll Cover</span>
          <h2 className="section-title mb-4">A strategy session, not a sales pitch.</h2>
          <p className="mc-body text-ink-2 max-w-xl">
            Every call is structured around your specific operation. Here are the areas we typically explore together.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-y-8">
          {strategyTopics.map((topic, index) => (
            <div
              key={topic.title}
              className={`reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ''} flex items-start gap-4 border-b border-[var(--line)] pb-8 last:border-b-0 last:pb-0`}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)]">
                <Icon name={topic.icon} className="text-sm text-ink" aria-hidden />
              </span>
              <div>
                <dt className="mc-title mb-2 text-[17px] text-ink">{topic.title}</dt>
                <dd className="mc-body">{topic.body}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>

  {/* ── Calendly booking + sidebar ───────────────────────────────────────────── */}
  <section id="book" className="max-w-container-max mx-auto px-5 sm:px-8 py-section-padding scroll-mt-24 sm:scroll-mt-32">
    <div className="reveal text-center max-w-3xl mx-auto mb-12">
      <span className="eyebrow mb-4 block justify-center">Book Your Call</span>
      <h2 className="section-title">Pick a time that works for you.</h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7 space-y-8">
        <div className="reveal bg-panel rounded-[22px] p-6 sm:p-8 border border-[var(--line)] shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-5 border-b border-[var(--line)]">
            <div>
              <h3 className="font-ui text-xl font-medium text-ink">Schedule a Strategy Call</h3>
              <p className="font-ui text-xs text-ink-2 mt-1">Select a day and time that works best for you.</p>
            </div>
            <span className="font-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-3 shrink-0 ml-4">{company.callLength} • Free</span>
          </div>
          <div className="overflow-x-auto">
            <div
              className="calendly-inline-widget"
              data-url={`${company.calendly}?hide_gdpr_banner=1&background_color=eef4f4&text_color=141414&primary_color=141414`}
              style={{ minWidth: '320px', height: '650px' }}
            ></div>
            <Script id="calendly-widget" src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-6">
        {/* What to Expect — numbered timeline */}
        <div className="reveal reveal-delay-1 bg-panel rounded-[22px] p-7 sm:p-8 border border-[var(--line)]">
          <h3 className="font-ui text-lg font-medium text-ink mb-7">What to Expect</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-[var(--line)]" aria-hidden="true"></div>
            <ul className="space-y-6">
              {([
                { num: '1', icon: 'Search' as IconName, title: 'Workflow deep-dive', body: 'We map the process that\'s costing you time, identify decision points, and pinpoint where AI creates leverage.' },
                { num: '2', icon: 'Cpu' as IconName, title: 'Honest feasibility assessment', body: 'Whether AI fits, or whether a process change, simpler automation, or nothing at all would serve you better.' },
                { num: '3', icon: 'FileCheck2' as IconName, title: 'Clear next steps & timeline', body: 'What we\'d build, how it connects to your stack, and a realistic timeline and investment before you commit.' },
              ]).map((item) => (
                <li key={item.num} className="flex gap-4 relative">
                  <div className="w-10 h-10 rounded-full bg-panel-2 border border-[var(--line)] flex items-center justify-center shrink-0 z-10 font-ui text-[13px] font-bold text-ink">
                    {item.num}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-ui text-[14px] font-semibold text-ink mb-1">{item.title}</h4>
                    <p className="font-ui text-[13px] text-ink-2 leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Who You'll Speak With — grain card */}
        <div className="reveal reveal-delay-2 grain grain-teal rounded-[22px] p-7 sm:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Icon name="Headphones" className="text-white/80 size-5" />
            </div>
            <h3 className="font-ui text-xl font-medium text-white">Who You&apos;ll Speak With</h3>
          </div>
          <p className="font-ui text-[14px] leading-relaxed text-white/70 mb-6">Every strategy call is led by a senior member of the Zorex build team — not a sales rep. You&apos;ll speak with someone who has designed and deployed the kind of system you&apos;re exploring.</p>
          <div className="pt-5 border-t border-white/10 flex items-start gap-3">
            <Icon name="ShieldCheck" className="text-white/50 size-4 mt-0.5 shrink-0" aria-hidden />
            <p className="font-ui text-[13px] text-white/60">All conversations are confidential. We sign an NDA before any technical discussion — just ask.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* ── Frequently Asked Questions ────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]">
    <div className="max-w-3xl mx-auto">
      <div className="reveal text-center mb-14">
        <span className="eyebrow mb-4 block justify-center">Common Questions</span>
        <h2 className="section-title">Before you book.</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={faq.q}
            className={`reveal ${i % 3 === 1 ? 'reveal-delay-1' : i % 3 === 2 ? 'reveal-delay-2' : ''} group/faq bg-panel rounded-[18px] border border-[var(--line)] transition-colors hover:border-[var(--line-strong)]`}
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 font-ui text-[15px] font-medium text-ink list-none [&::-webkit-details-marker]:hidden select-none">
              {faq.q}
              <Icon name="ChevronRight" className="size-4 shrink-0 text-ink-3 transition-transform duration-300 group-open/faq:rotate-90" aria-hidden />
            </summary>
            <div className="px-6 pb-5 -mt-1">
              <p className="font-ui text-[14px] leading-relaxed text-ink-2">{faq.a}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>

  {/* ── Bottom CTA strip ─────────────────────────────────────────── */}
  <section className="cta-bleed grain grain-teal">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="reveal display-type text-white mb-6" style={{ fontSize: 'clamp(28px, 4.4vw, 48px)' }}>
        Ready to find the leverage?<br /><span className="opacity-60">Start with a {company.callLengthShort} strategy call.</span>
      </h2>
      <p className="reveal reveal-delay-1 mc-body text-[15px] mb-10 max-w-2xl mx-auto">Tell us the bottleneck. We&apos;ll tell you whether it&apos;s worth building, what it takes to launch, and what the system looks like.</p>
      <ul className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-2 mb-10 list-none">
        <li className="chip chip-grain">Free</li>
        <li className="chip chip-grain">{company.callLength}</li>
        <li className="chip chip-grain">No obligation</li>
      </ul>
      <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a className="btn-ink w-full sm:w-auto !bg-white !text-ink hover:!bg-white/90" href="#book">
          Book a Strategy Call
          <Icon name="ArrowRight" className="ml-1 size-4" aria-hidden />
        </a>
        <Link className="btn-ghost w-full sm:w-auto !border-white/30 !text-white hover:!bg-white/10" href="/case-studies">
          See Our Work
        </Link>
      </div>
    </div>
  </section>
</main>
  </>;
}
