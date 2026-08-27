import Script from 'next/script';
import { Icon } from '@/components/ui/icon';

export default function PageContent() {
  return <>
<main>
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-5 sm:px-8 overflow-hidden bg-surface-bright border-b border-outline-variant/30">
    <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
    <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>
    <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center justify-center text-center pt-4 pb-8">
      <div className="flex flex-col items-center max-w-4xl">
        <span className="reveal inline-flex items-center gap-2 px-6 py-2 bg-secondary-container text-on-secondary-fixed-variant rounded-full font-label-sm mb-8 shadow-sm uppercase tracking-wider">
          <Icon name="Zap" className="text-sm icon-fill" />{"Free Strategy Call"}
        </span>
        <h1 className="reveal reveal-delay-1 font-headline-xl text-headline-xl text-primary-container mb-6 leading-[1.15]">{"Let's find the system"}<br /><span className="text-secondary">{"worth building first."}</span></h1>
        <p className="reveal reveal-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">{"Bring the workflow, bottleneck, or operational problem. We'll determine whether an intelligent system is actually worth building, and where it creates the most leverage."}</p>
        <div className="reveal reveal-delay-3 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant/40 rounded-full font-label-sm text-xs uppercase tracking-widest text-on-surface-variant"><Icon name="Bot" className="text-secondary text-xs" />{"AI Agentic Systems"}</span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant/40 rounded-full font-label-sm text-xs uppercase tracking-widest text-on-surface-variant"><Icon name="PlugZap" className="text-secondary text-xs" />{"AI Integration"}</span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant/40 rounded-full font-label-sm text-xs uppercase tracking-widest text-on-surface-variant"><Icon name="Layers3" className="text-secondary text-xs" />{"Vertical AI Systems"}</span>
        </div>
      </div>
    </div>
    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary-fixed/20 rounded-full blur-3xl -z-10"></div>
  </section>

  {/* ── What the call covers ─────────────────────────────────────── */}
  <section className="py-12 px-5 sm:px-8 bg-surface">
    <div className="max-w-container-max mx-auto">
      <div className="reveal dark-box p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center"><p className="font-headline-md text-headline-md text-accent-gold mb-1">{"30 minutes"}</p><p className="font-label-sm text-[10px] text-white/55 uppercase tracking-wider">{"A focused working session"}</p></div>
          <div className="flex flex-col items-center"><p className="font-headline-md text-headline-md text-white mb-1">{"Your workflow"}</p><p className="font-label-sm text-[10px] text-white/55 uppercase tracking-wider">{"We map where the friction is"}</p></div>
          <div className="flex flex-col items-center"><p className="font-headline-md text-headline-md text-white mb-1">{"Honest assessment"}</p><p className="font-label-sm text-[10px] text-white/55 uppercase tracking-wider">{"Whether AI fits — or doesn't"}</p></div>
          <div className="flex flex-col items-center"><p className="font-headline-md text-headline-md text-white mb-1">{"Clear next steps"}</p><p className="font-label-sm text-[10px] text-white/55 uppercase tracking-wider">{"What we'd build and what it takes"}</p></div>
        </div>
      </div>
    </div>
  </section>

  {/* ── Form + sidebar ───────────────────────────────────────────── */}
  <section className="max-w-container-max mx-auto px-5 sm:px-8 py-section-padding">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-card-gap">
      <div className="lg:col-span-7 space-y-8">
        <div className="reveal bg-surface-container-lowest rounded-2xl p-8 border border-surface-container-highest shadow-sm">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-surface-container-highest">
            <h2 className="font-headline-md text-headline-md text-primary-container">{"Strategy Session"}</h2>
          </div>
          <form action="https://formspree.io/f/xpwdjqgz" className="space-y-10" id="strategy-form" method="POST">
            <div className="space-y-6">
              <h3 className="font-label-sm text-outline uppercase tracking-wider">{"01. Contact Details"}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-label-sm text-on-surface">{"Full Name *"}</label>
                  <input className="w-full px-4 py-3 rounded-lg border border-surface-container-highest bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" id="name" name="name" placeholder="John Doe" autoComplete="name" required={true} type="text" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-label-sm text-on-surface">{"Business Email *"}</label>
                  <input className="w-full px-4 py-3 rounded-lg border border-surface-container-highest bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" id="email" name="email" placeholder="j.doe@company.com" autoComplete="email" inputMode="email" required={true} type="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="block font-label-sm text-on-surface">{"Company Name"}</label>
                  <input className="w-full px-4 py-3 rounded-lg border border-surface-container-highest bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" id="company" name="company" placeholder="Your Company" autoComplete="organization" type="text" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-label-sm text-outline uppercase tracking-wider">{"02. Discovery & Qualification"}</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="bottleneck" className="block font-label-sm text-on-surface">{"What is the primary operational bottleneck you're looking to solve with AI?"}</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-surface-container-highest bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none" id="bottleneck" name="bottleneck" placeholder="Describe your current challenges and goals..." aria-describedby="bottleneck-help" rows={4}></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                  <div className="space-y-2">
                    <label htmlFor="ai_adoption" className="block font-label-sm text-on-surface">{"Current AI adoption"}</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-surface-container-highest bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" id="ai_adoption" name="ai_adoption">
                      <option value="none">{"We haven't used AI yet"}</option>
                      <option value="some">{"We use some AI tools but nothing custom"}</option>
                      <option value="advanced">{"We have AI in place and want to go further"}</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="block font-label-sm text-on-surface">{"When are you looking to move?"}</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-surface-container-highest bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" id="timeline" name="timeline">
                      <option value="immediate">{"As soon as possible"}</option>
                      <option value="1-3">{"Next 1–3 months"}</option>
                      <option value="3-6">{"3–6 months"}</option>
                      <option value="exploring">{"Just exploring for now"}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-surface-container-highest">
              <button className="btn-lift w-full bg-primary-container text-on-primary font-label-sm uppercase py-4 rounded-lg hover:bg-primary-container/90 shadow-md flex items-center justify-center gap-2" id="submit-btn" type="submit">{"Confirm Strategy Call"}<Icon name="ArrowRight" className="text-sm" /></button>
              <p className="text-center text-xs text-outline mt-4">{"By submitting, you agree to our terms. All conversations are confidential."}</p>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-card-gap">
        <div className="reveal reveal-delay-1 card-lift bg-[#FDFBF7] rounded-2xl p-8 border border-[#E5E1D8]">
          <h3 className="font-headline-md text-headline-md text-primary-container mb-6">{"What to Expect"}</h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0"><Icon name="Cpu" className="text-on-secondary-container" /></div>
              <div>
                <h4 className="font-body-md font-bold text-primary-container mb-1">{"An honest assessment of leverage."}</h4>
                <p className="font-body-sm text-on-surface-variant text-sm">{"Where AI creates real leverage in your business to acquire clients and scale, and where it doesn't."}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0"><Icon name="TrendingUp" className="text-on-secondary-container" /></div>
              <div>
                <h4 className="font-body-md font-bold text-primary-container mb-1">{"A plain-English explanation."}</h4>
                <p className="font-body-sm text-on-surface-variant text-sm">{"What we'd build, how it works, and exactly what it connects to in your stack."}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0"><Icon name="Workflow" className="text-on-secondary-container" /></div>
              <div>
                <h4 className="font-body-md font-bold text-primary-container mb-1">{"Realistic timeline and investment."}</h4>
                <p className="font-body-sm text-on-surface-variant text-sm">{"Clear expectations on what it takes to launch, before you commit to anything."}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="reveal reveal-delay-2 card-lift bg-primary-container rounded-2xl p-8 text-on-primary">
          <div className="flex items-start gap-4 mb-4">
            <Icon name="CircleHelp" className="text-[#D4AF37] text-3xl" />
            <h4 className="font-headline-md text-2xl mt-1">{"Who You'll Speak With"}</h4>
          </div>
          <p className="font-body-md text-primary-fixed-dim leading-relaxed mb-6">{"Every discovery call is led by a senior member of the Zorex build team, not a sales rep. You'll speak with someone who has actually designed and deployed the kind of system you're exploring."}</p>
          <div className="pt-6 border-t border-white/10">
            <p className="font-body-sm text-white/80">{"All conversations are confidential. We're happy to sign an NDA before any technical discussion. Just ask."}</p>
          </div>
        </div>

        <div className="reveal bg-surface-container-lowest rounded-2xl p-8 border border-surface-container-highest shadow-sm">
          <h3 className="font-headline-md text-2xl text-primary-container mb-6">{"Direct Contact"}</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Icon name="Mail" className="text-secondary text-2xl" />
              <a className="font-body-md text-on-surface hover:text-primary transition-colors no-underline" href="mailto:hello@zorex.com">{"hello@zorex.com"}</a>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="CalendarCheck2" className="text-secondary text-2xl" />
              <a className="font-body-md text-primary font-semibold hover:text-primary-container transition-colors no-underline" href="https://calendly.com/amiralicomsats3/30min" target="_blank" rel="noopener noreferrer">{"Book a Call on Calendly"}</a>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="BriefcaseBusiness" className="text-secondary text-2xl" />
              <a className="font-body-md text-on-surface hover:text-primary transition-colors no-underline" href="https://linkedin.com/company/zorex-ai" target="_blank" rel="noopener noreferrer">{"Zorex on LinkedIn"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ── Calendly ─────────────────────────────────────────────────── */}
  <section className="max-w-container-max mx-auto px-5 sm:px-8 pb-section-padding">
    <div className="reveal bg-surface-container-lowest rounded-2xl p-8 border border-surface-container-highest shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-6 border-b border-surface-container-highest gap-4">
        <h2 className="font-headline-md text-headline-md text-primary-container">{"Prefer to Book Directly?"}</h2>
        <span className="font-label-sm text-secondary uppercase tracking-wider">{"Skip the form. Pick a time."}</span>
      </div>
      <div className="calendly-inline-widget" data-url="https://calendly.com/amiralicomsats3/30min?hide_gdpr_banner=1&background_color=fcf9f8&text_color=1b1c1c&primary_color=193868" style={{"minWidth": "320px", "height": "700px"}}></div>
      <Script id="calendly-widget" src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  </section>
</main>
  </>;
}
