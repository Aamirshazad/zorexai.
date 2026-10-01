import Script from 'next/script';
import { Icon } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { company, whatHappensNext, whatToPrepare } from '@/content/company';

export default function PageContent() {
  return <>
<main className="font-ui bg-page-wash">
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-16 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
    <div className="max-w-container-max mx-auto relative z-10">
      <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
        <Breadcrumbs route="contact" className="justify-center mb-8" />
        <Reveal delay={0.08}>
          <h1 className="display-type mb-6">Let&apos;s find the system <span className="opacity-60">worth building first.</span></h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="body-ink max-w-2xl mb-10">Bring the workflow, bottleneck, or operational problem. We&apos;ll determine whether an intelligent system is actually worth building, and where it creates the most leverage.</p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="chip font-ui"><Icon name="Bot" className="text-[14px]" aria-hidden />AI Agentic Systems</span>
            <span className="chip font-ui"><Icon name="PlugZap" className="text-[14px]" aria-hidden />AI Integration</span>
            <span className="chip font-ui"><Icon name="Layers3" className="text-[14px]" aria-hidden />Vertical AI Systems</span>
          </div>
        </Reveal>
      </div>
    </div>
  </section>

  {/* ── What the call covers ─────────────────────────────────────── */}
  <section className="py-12 px-5 sm:px-8">
    <div className="max-w-container-max mx-auto">
      <div className="reveal dark-box p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center"><p className="mc-title text-white/70 mb-1">{company.callLength}</p><p className="text-[10px] text-white/55 uppercase tracking-wider">A focused working session</p></div>
          <div className="flex flex-col items-center"><p className="mc-title text-white mb-1">Your workflow</p><p className="text-[10px] text-white/55 uppercase tracking-wider">We map where the friction is</p></div>
          <div className="flex flex-col items-center"><p className="mc-title text-white mb-1">Honest assessment</p><p className="text-[10px] text-white/55 uppercase tracking-wider">Whether AI fits or doesn&apos;t</p></div>
          <div className="flex flex-col items-center"><p className="mc-title text-white mb-1">Clear next steps</p><p className="text-[10px] text-white/55 uppercase tracking-wider">What we&apos;d build and what it takes</p></div>
        </div>
      </div>
    </div>
  </section>

  {/* ── What happens after you submit ────────────────────────────── */}
  <section className="pb-4 px-5 sm:px-8">
    <div className="max-w-container-max mx-auto">
      <ol className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none">
        {whatHappensNext.map((item, index) => (
          <li key={item.step} className={`bg-panel rounded-[16px] border border-[var(--line)] p-5 flex flex-col${index > 0 ? '' : ''}`}>
            <span className="font-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-3 mb-3">{item.step}</span>
            <h2 className="font-ui text-[14.5px] font-medium text-ink mb-1.5 leading-snug">{item.title}</h2>
            <p className="font-ui text-xs leading-relaxed text-ink-2">{item.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>

  {/* ── What to bring ────────────────────────────────────────────── */}
  {/* Lifted from content/company.ts, where it had been written and then left
      unreachable inside an orphaned component. It answers the last blocker
      before someone books: "I do not have this scoped well enough yet." */}
  <section className="pb-12 px-5 sm:px-8">
    <div className="max-w-container-max mx-auto">
      <div className="reveal rounded-[22px] border border-[var(--line)] bg-panel p-8">
        <h2 className="eyebrow mb-6">What to bring, so the first call is useful</h2>
        <ul className="grid grid-cols-1 gap-x-10 gap-y-4 list-none sm:grid-cols-2">
          {whatToPrepare.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.6] text-ink-2">
              <Icon name="CircleCheck" className="mt-0.5 size-4 shrink-0 text-ink-2" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-[var(--line)] pt-5 text-sm text-ink-3">
          Rough answers are enough. If you can describe the workflow in a sentence, we can map it.
        </p>
      </div>
    </div>
  </section>

  {/* ── Form + sidebar ───────────────────────────────────────────── */}
  <section className="max-w-container-max mx-auto px-5 sm:px-8 py-section-padding">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7 space-y-8">
        <div className="reveal bg-panel rounded-[22px] p-6 sm:p-8 border border-[var(--line)] shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-5 border-b border-[var(--line)]">
            <div>
              <h2 className="font-ui text-xl font-medium text-ink">Schedule a Strategy Call</h2>
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

      <div className="lg:col-span-5 space-y-8">
        <div className="reveal reveal-delay-1 card-lift bg-panel rounded-[22px] p-8 border border-[var(--line)]">
          <h3 className="font-ui text-lg font-medium text-ink mb-6">What to Expect</h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-[var(--line-strong)] flex items-center justify-center shrink-0"><Icon name="Cpu" className="text-ink-2" /></div>
              <div>
                <h4 className="font-ui text-sm font-bold text-ink mb-1">An honest assessment of leverage.</h4>
                <p className="font-ui text-sm text-ink-2">Where an AI system creates real leverage in your operation, and where a process change or nothing at all would serve you better.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-[var(--line-strong)] flex items-center justify-center shrink-0"><Icon name="TrendingUp" className="text-ink-2" /></div>
              <div>
                <h4 className="font-ui text-sm font-bold text-ink mb-1">A plain-English explanation.</h4>
                <p className="font-ui text-sm text-ink-2">What we&apos;d build, how it works, and exactly what it connects to in your stack.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-[var(--line-strong)] flex items-center justify-center shrink-0"><Icon name="Workflow" className="text-ink-2" /></div>
              <div>
                <h4 className="font-ui text-sm font-bold text-ink mb-1">Realistic timeline and investment.</h4>
                <p className="font-ui text-sm text-ink-2">Clear expectations on what it takes to launch, before you commit to anything.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="reveal reveal-delay-2 card-lift bg-ink rounded-[22px] p-8 text-white">
          <div className="flex items-start gap-4 mb-4">
            <Icon name="CircleHelp" className="text-white/70 text-3xl" />
            <h4 className="font-ui text-2xl font-medium mt-1">Who You&apos;ll Speak With</h4>
          </div>
          <p className="font-ui text-sm leading-relaxed text-white/70 mb-6">Every discovery call is led by a senior member of the Zorex build team, not a sales rep. You&apos;ll speak with someone who has actually designed and deployed the kind of system you&apos;re exploring.</p>
          <div className="pt-6 border-t border-white/10">
            <p className="font-ui text-sm text-white/80">All conversations are confidential. We&apos;re happy to sign an NDA before any technical discussion. Just ask.</p>
          </div>
        </div>

        <div className="reveal bg-panel rounded-[22px] p-8 border border-[var(--line)]">
          <h3 className="font-ui text-lg font-medium text-ink mb-6">Direct Contact</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Icon name="Mail" className="text-ink-2 text-2xl" />
              <a className="font-ui text-sm text-ink hover:text-ink-2 transition-colors no-underline" href={`mailto:${company.email}`}>{company.email}</a>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="CalendarCheck2" className="text-ink-2 text-2xl" />
              <a className="font-ui text-sm font-medium text-ink hover:text-ink-2 transition-colors no-underline" href={`${company.calendly}?hide_gdpr_banner=1`} target="_blank" rel="noopener noreferrer">Book a {company.callLengthShort} call directly</a>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="BriefcaseBusiness" className="text-ink-2 text-2xl" />
              <a className="font-ui text-sm text-ink hover:text-ink-2 transition-colors no-underline" href={company.linkedin} target="_blank" rel="noopener noreferrer">Zorex on LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
  </>;
}
