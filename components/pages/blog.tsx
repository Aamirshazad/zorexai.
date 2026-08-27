import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { FinalCta } from '@/components/content/final-cta';
import { OptimizedImage } from '@/components/ui/optimized-image';

export default function PageContent() {
  return <>
<main>
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden bg-surface-bright border-b border-outline-variant/30">
    <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
    <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>
    <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center justify-center text-center pt-4 pb-12">
      <div className="flex flex-col items-center max-w-4xl">
        <span className="reveal inline-flex items-center gap-2 px-6 py-2 bg-secondary-container text-on-secondary-fixed-variant rounded-full font-label-sm mb-8 shadow-sm uppercase tracking-wider">
          <Icon name="Sparkles" className="text-sm icon-fill" />{"Strategic Insights"}
        </span>
        <h1 className="reveal reveal-delay-1 font-headline-xl text-headline-xl text-primary-container mb-6 leading-[1.15]">{"The Zorex Intelligence"}<br /><span className="text-secondary">{"Blog"}</span></h1>
        <p className="reveal reveal-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed">{"Expert analysis on agentic systems, AI integration, and the operational strategies that help businesses scale."}</p>
        <div className="reveal reveal-delay-3 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant/40 rounded-full font-label-sm text-xs uppercase tracking-widest text-on-surface-variant"><Icon name="Bot" className="text-secondary text-xs" />{"Agentic Systems"}</span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant/40 rounded-full font-label-sm text-xs uppercase tracking-widest text-on-surface-variant"><Icon name="PlugZap" className="text-secondary text-xs" />{"AI Integration"}</span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant/40 rounded-full font-label-sm text-xs uppercase tracking-widest text-on-surface-variant"><Icon name="Layers3" className="text-secondary text-xs" />{"Vertical AI"}</span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant/40 rounded-full font-label-sm text-xs uppercase tracking-widest text-on-surface-variant"><Icon name="Workflow" className="text-secondary text-xs" />{"Operations"}</span>
        </div>
      </div>
    </div>
    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary-fixed/20 rounded-full blur-3xl -z-10"></div>
  </section>

  {/* ── Featured articles ────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-background">
    <div className="max-w-container-max mx-auto">
      <Link className="reveal group block mb-12 no-underline bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:flex" href="/blog-agentic-systems">
        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative flex-shrink-0">
          <OptimizedImage src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" alt="Agentic Systems" width={1200} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10"></div>
        </div>
        <div className="p-10 md:p-14 flex flex-col justify-center md:w-1/2">
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-primary-fixed text-primary-container font-label-sm text-xs px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5"><Icon name="Bot" className="text-xs" />{"Agentic Systems"}</span>
            <span className="text-xs font-label-sm text-outline uppercase tracking-wider">{"Featured"}</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary-container mb-4 leading-tight group-hover:text-secondary transition-colors duration-300">{"Agentic Systems: Architecting the Future of Enterprise Intelligence"}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">{"The paradigm is shifting from programmed instructions to autonomous reasoning. Discover how businesses are deploying agentic workflows to scale capacity without adding overhead."}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs font-label-sm text-outline uppercase tracking-widest">
              <span>{"Zorex AI Team"}</span>
              <span className="w-1 h-1 bg-secondary rounded-full"></span>
              <span>{"October 24, 2024"}</span>
              <span className="w-1 h-1 bg-secondary rounded-full"></span>
              <span>{"12 min read"}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-secondary font-label-sm text-xs uppercase tracking-wider group-hover:gap-2 transition-all">{"Read"}<Icon name="ArrowRight" className="text-sm" /></span>
          </div>
        </div>
      </Link>

      <Link className="reveal group block no-underline bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:flex" href="/blog-ai-commerce">
        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative flex-shrink-0">
          <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{"backgroundImage": "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200')"}}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10"></div>
        </div>
        <div className="p-10 md:p-14 flex flex-col justify-center md:w-1/2">
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-primary-fixed text-primary-container font-label-sm text-xs px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5"><Icon name="Bot" className="text-xs" />{"AI Agentic Systems"}</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary-container mb-4 leading-tight group-hover:text-secondary transition-colors duration-300">{"AI-Driven Commerce: Scaling Global Support and Operations"}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">{"Explore how business-specific AI systems can improve customer support workflows by combining context, routing, and controlled execution."}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs font-label-sm text-outline uppercase tracking-widest">
              <span>{"Zorex AI Team"}</span>
              <span className="w-1 h-1 bg-secondary rounded-full"></span>
              <span>{"February 10, 2025"}</span>
              <span className="w-1 h-1 bg-secondary rounded-full"></span>
              <span>{"10 min read"}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-secondary font-label-sm text-xs uppercase tracking-wider group-hover:gap-2 transition-all">{"Read"}<Icon name="ArrowRight" className="text-sm" /></span>
          </div>
        </div>
      </Link>
    </div>
  </section>

  {/* ── More articles ────────────────────────────────────────────── */}
  <section className="py-12 px-5 sm:px-8 bg-surface-bright border-t border-outline-variant/20">
    <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <Link className="reveal group block no-underline bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col" href="/blog-cognitive-infrastructure">
        <div className="h-48 overflow-hidden relative flex-shrink-0">
          <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{"backgroundImage": "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200')"}}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-fixed text-primary-container font-label-sm text-[10px] px-2 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5"><Icon name="PlugZap" className="text-[10px]" />{"AI Integration"}</span>
          </div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3 leading-tight group-hover:text-secondary transition-colors duration-300">{"Beyond RAG: Architecting True Cognitive Infrastructure"}</h3>
          <p className="font-body-md text-sm text-on-surface-variant mb-6 flex-grow">{"Deep technical dive into vector databases, semantic routing, and how Zorex builds multi-agent systems that synthesize context dynamically."}</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2 text-[10px] font-label-sm text-outline uppercase tracking-widest"><span>{"November 05, 2024"}</span></div>
            <span className="inline-flex items-center text-secondary font-label-sm text-[10px] uppercase tracking-wider group-hover:pr-1 transition-all">{"Read"}<Icon name="ArrowRight" className="text-xs ml-1" /></span>
          </div>
        </div>
      </Link>

      <Link className="reveal reveal-delay-1 group block no-underline bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col" href="/blog-llm-security">
        <div className="h-48 overflow-hidden relative flex-shrink-0">
          <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{"backgroundImage": "url('https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1200')"}}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-error-container text-on-error-container font-label-sm text-[10px] px-2 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5"><Icon name="ShieldCheck" className="text-[10px]" />{"Security"}</span>
          </div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3 leading-tight group-hover:text-secondary transition-colors duration-300">{"Zero-Trust AI: Securing Enterprise LLM Deployments"}</h3>
          <p className="font-body-md text-sm text-on-surface-variant mb-6 flex-grow">{"Addressing the biggest enterprise objection: data privacy. Self-hosted models, VPC deployments, and deterministic guardrails."}</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2 text-[10px] font-label-sm text-outline uppercase tracking-widest"><span>{"December 12, 2024"}</span></div>
            <span className="inline-flex items-center text-secondary font-label-sm text-[10px] uppercase tracking-wider group-hover:pr-1 transition-all">{"Read"}<Icon name="ArrowRight" className="text-xs ml-1" /></span>
          </div>
        </div>
      </Link>

      <Link className="reveal reveal-delay-2 group block no-underline bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col" href="/blog-intelligent-process">
        <div className="h-48 overflow-hidden relative flex-shrink-0">
          <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{"backgroundImage": "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200')"}}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] px-2 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5"><Icon name="Workflow" className="text-[10px]" />{"Automation"}</span>
          </div>
          <h3 className="font-headline-md text-xl text-primary-container mb-3 leading-tight group-hover:text-secondary transition-colors duration-300">{"The End of Static Workflows: Intelligent Process Automation"}</h3>
          <p className="font-body-md text-sm text-on-surface-variant mb-6 flex-grow">{"How decision-layer AI replaces brittle logic trees, featuring the mathematics of error reduction and ROI horizons."}</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2 text-[10px] font-label-sm text-outline uppercase tracking-widest"><span>{"January 18, 2025"}</span></div>
            <span className="inline-flex items-center text-secondary font-label-sm text-[10px] uppercase tracking-wider group-hover:pr-1 transition-all">{"Read"}<Icon name="ArrowRight" className="text-xs ml-1" /></span>
          </div>
        </div>
      </Link>
    </div>
  </section>

  {/* ── Newsletter ───────────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-surface-container border-t border-outline-variant/20">
    <div className="reveal max-w-2xl mx-auto text-center">
      <Icon name="Mail" className="text-4xl text-secondary mb-6" />
      <h2 className="font-headline-md text-headline-md text-primary-container mb-4">{"Get AI insights that actually move the needle"}</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">{"One email per month. Just the frameworks, case studies, and technical breakdowns we use with our own clients."}</p>
      <form action="https://formspree.io/f/xpwdjqgz" className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto" id="newsletter-form" method="POST">
        <input name="_subject" type="hidden" value="Newsletter Signup (Blog)" />
        <label htmlFor="newsletter-email" className="sr-only">Business email</label>
        <input id="newsletter-email" className="flex-1 w-full px-5 py-4 rounded-full border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm" name="email" placeholder="your@email.com" autoComplete="email" inputMode="email" required={true} type="email" />
        <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true" />
        <button className="btn-lift w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary rounded-full font-label-sm uppercase tracking-wider hover:bg-primary shadow-md whitespace-nowrap" type="submit">{"Subscribe"}</button>
      </form>
      <p className="text-xs text-on-surface-variant mt-3">{"Practical systems and operations insights, delivered periodically. Unsubscribe anytime."}</p>
    </div>
  </section>

  {/* ── Final CTA ────────────────────────────────────────────────── */}
  <FinalCta heading={"Ready to automate your operations?"} body={"Schedule a strategy call to identify where an AI system could improve your most important business workflow."} />
</main>
  </>;
}
