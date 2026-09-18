import Script from 'next/script';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { SmartForm } from '@/components/ui/smart-form';
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
        <div className="reveal bg-panel rounded-[22px] p-8 border border-[var(--line)]">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-[var(--line)]">
            <h2 className="font-ui text-xl font-medium text-ink">Strategy Session</h2>
            <span className="font-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-3">{company.callLength} • Free • No obligation</span>
          </div>
          <SmartForm
            id="strategy-form"
            subject="Strategy Call Request (Website)"
            className="space-y-10"
            submitLabel="Confirm Strategy Call"
            submitClassName="btn-ink w-full font-ui"
            successTitle="Request received."
            successBody="We read these ourselves, so expect a reply within one business day with a time to talk. If you'd rather pick a time right now, the calendar below is live."
          >
            <div className="space-y-6">
              <h3 className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-3">01. Contact Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-ui text-sm text-ink">Full Name *</label>
                  <input className="w-full px-4 py-3 rounded-[10px] border border-[var(--line-strong)] bg-[var(--page-wash)] focus:ring-2 focus:ring-ink/70 focus:border-transparent transition-all outline-none font-ui text-sm" id="name" name="name" placeholder="John Doe" autoComplete="name" required={true} type="text" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-ui text-sm text-ink">Business Email *</label>
                  <input className="w-full px-4 py-3 rounded-[10px] border border-[var(--line-strong)] bg-[var(--page-wash)] focus:ring-2 focus:ring-ink/70 focus:border-transparent transition-all outline-none font-ui text-sm" id="email" name="email" placeholder="j.doe@company.com" autoComplete="email" inputMode="email" required={true} type="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="block font-ui text-sm text-ink">Company Name</label>
                  <input className="w-full px-4 py-3 rounded-[10px] border border-[var(--line-strong)] bg-[var(--page-wash)] focus:ring-2 focus:ring-ink/70 focus:border-transparent transition-all outline-none font-ui text-sm" id="company" name="company" placeholder="Your Company" autoComplete="organization" type="text" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-3">02. Discovery &amp; Qualification</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="bottleneck" className="block font-ui text-sm text-ink">What is the primary operational bottleneck you&apos;re looking to solve with AI?</label>
                  <textarea className="w-full px-4 py-3 rounded-[10px] border border-[var(--line-strong)] bg-[var(--page-wash)] focus:ring-2 focus:ring-ink/70 focus:border-transparent transition-all outline-none resize-none font-ui text-sm" id="bottleneck" name="bottleneck" placeholder="Describe your current challenges and goals..." rows={4} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                  <div className="space-y-2">
                    <label htmlFor="ai_adoption" className="block font-ui text-sm text-ink">Current AI adoption</label>
                    <select className="w-full px-4 py-3 rounded-[10px] border border-[var(--line-strong)] bg-[var(--page-wash)] focus:ring-2 focus:ring-ink/70 focus:border-transparent transition-all outline-none font-ui text-sm" id="ai_adoption" name="ai_adoption" defaultValue="none">
                      <option value="none">We haven&apos;t used AI yet</option>
                      <option value="some">We use some AI tools but nothing custom</option>
                      <option value="advanced">We have AI in place and want to go further</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="block font-ui text-sm text-ink">When are you looking to move?</label>
                    <select className="w-full px-4 py-3 rounded-[10px] border border-[var(--line-strong)] bg-[var(--page-wash)] focus:ring-2 focus:ring-ink/70 focus:border-transparent transition-all outline-none font-ui text-sm" id="timeline" name="timeline" defaultValue="1-3">
                      <option value="immediate">As soon as possible</option>
                      <option value="1-3">Next 1–3 months</option>
                      <option value="3-6">3–6 months</option>
                      <option value="exploring">Just exploring for now</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center font-ui text-xs text-ink-3 mt-4">
              By submitting, you agree to our <Link className="underline underline-offset-2" href="/terms">terms</Link> and
              acknowledge our <Link className="underline underline-offset-2" href="/privacy">privacy policy</Link>. All
              conversations are confidential, and we will sign an NDA before any technical discussion.
            </p>
          </SmartForm>
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

  {/* ── Calendly direct booking, behind an opt-in disclosure ──────── */}
  {/* The page previously ran a full qualifying form and a 700px embedded
      calendar side by side, which split attention at the highest-intent moment
      and made the primary action ambiguous. The calendar is still here for
      people who already know they want a slot, but it is now a deliberate
      choice: closed by default, one click to open, and the form stays the
      default path. */}
  <section className="max-w-container-max mx-auto px-5 sm:px-8 pb-section-padding">
    <details className="reveal group rounded-[22px] border border-[var(--line)] bg-panel">
      <summary className="flex cursor-pointer list-none flex-col gap-3 p-8 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)]">
            <Icon name="CalendarCheck2" className="size-4 text-ink" aria-hidden />
          </span>
          <span>
            <span className="block font-ui text-lg font-medium text-ink">Prefer to book directly?</span>
            <span className="block font-ui text-sm text-ink-2">Skip the form and pick a time that suits you.</span>
          </span>
        </span>
        <span
          aria-hidden="true"
          className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-3 transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="border-t border-[var(--line)] p-8 pt-6">
        <div
          className="calendly-inline-widget"
          data-url={`${company.calendly}?hide_gdpr_banner=1&background_color=f3f6f1&text_color=141414&primary_color=141414`}
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
        <Script id="calendly-widget" src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </div>
    </details>
  </section>
</main>
  </>;
}
