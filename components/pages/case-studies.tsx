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
          <Icon name="BadgeCheck" className="text-sm icon-fill" />{"Client Success Stories"}
        </span>
        <h1 className="reveal reveal-delay-1 font-headline-xl text-headline-xl text-primary-container mb-6 leading-[1.15]">{"Real business problems."}<br /><span className="text-secondary">{"Systems built to solve them."}</span></h1>
        <p className="reveal reveal-delay-2 font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed">{"Every engagement starts with a bottleneck and ends with a working system. Below are representative examples of how we approach them — details anonymized to protect client confidentiality."}</p>
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link className="btn-lift w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-container text-on-primary rounded-full font-label-sm uppercase tracking-wider hover:bg-primary shadow-md hover:shadow-lg" href="/contact">{"Book a Strategy Call"}<Icon name="ArrowRight" className="ml-2 text-sm" /></Link>
          <Link className="btn-lift w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-container text-primary-container rounded-full font-label-sm uppercase tracking-wider hover:bg-surface-container" href="/services">{"See What We Build"}</Link>
        </div>
      </div>
    </div>
    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary-fixed/20 rounded-full blur-3xl -z-10"></div>
  </section>

  {/* ── Case studies ─────────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8 bg-background">
    <div className="max-w-container-max mx-auto space-y-12">
      <Link className="reveal group block no-underline bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:flex" href="/case-study-novus">
        <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative flex-shrink-0 bg-surface-container">
          <OptimizedImage src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" alt="Novus Operations dashboard" width={1200} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10"></div>
        </div>
        <div className="p-10 md:p-14 flex flex-col justify-center md:w-3/5">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-primary-fixed text-primary-container font-label-sm text-xs px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5"><Icon name="PlugZap" className="text-xs" />{"AI Integration"}</span>
            <span className="bg-secondary-container text-on-secondary-container font-label-sm text-xs px-3 py-1 rounded-full uppercase tracking-widest">{"Operations"}</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary-container mb-3 leading-tight group-hover:text-secondary transition-colors duration-300">{"Eliminating the Reporting Bottleneck at a Mid-Market Logistics Company"}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">{"Manual reporting replaced with an automated, API-driven engine — turning hours of reconciliation into consistent, always-current insight."}</p>
          <div className="flex items-center justify-between border-t border-outline-variant/30 pt-4">
            <div className="flex items-center gap-3 text-xs font-label-sm text-outline uppercase tracking-widest">
              <span>{"Operations Director"}</span>
              <span className="w-1 h-1 bg-secondary rounded-full"></span>
              <span>{"Novus Operations"}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-secondary font-label-sm text-xs uppercase tracking-wider group-hover:gap-2 transition-all">{"Read Case Study"}<Icon name="ArrowRight" className="text-sm" /></span>
          </div>
        </div>
      </Link>

      <Link className="reveal group block no-underline bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:flex md:flex-row-reverse" href="/case-study-echocommerce">
        <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative flex-shrink-0 bg-surface-container">
          <OptimizedImage src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" alt="EchoCommerce support dashboard" width={1200} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/10"></div>
        </div>
        <div className="p-10 md:p-14 flex flex-col justify-center md:w-3/5">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-primary-fixed text-primary-container font-label-sm text-xs px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5"><Icon name="Bot" className="text-xs" />{"AI Agentic Systems"}</span>
            <span className="bg-secondary-container text-on-secondary-container font-label-sm text-xs px-3 py-1 rounded-full uppercase tracking-widest">{"B2B Commerce"}</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary-container mb-3 leading-tight group-hover:text-secondary transition-colors duration-300">{"Scaling Support Without Scaling the Team"}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">{"Custom-trained LLM agents took over first-line inquiries — cutting response times from hours to minutes and freeing the team for complex cases."}</p>
          <div className="flex items-center justify-between border-t border-outline-variant/30 pt-4">
            <div className="flex items-center gap-3 text-xs font-label-sm text-outline uppercase tracking-widest">
              <span>{"Founder & CEO"}</span>
              <span className="w-1 h-1 bg-secondary rounded-full"></span>
              <span>{"EchoCommerce"}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-secondary font-label-sm text-xs uppercase tracking-wider group-hover:gap-2 transition-all">{"Read Case Study"}<Icon name="ArrowRight" className="text-sm" /></span>
          </div>
        </div>
      </Link>

      <Link className="reveal group block no-underline bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:flex" href="/case-study-viralgrowth">
        <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative flex-shrink-0 bg-surface-container">
          <OptimizedImage src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" alt="ViralGrowth AI dashboard" width={1200} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10"></div>
        </div>
        <div className="p-10 md:p-14 flex flex-col justify-center md:w-3/5">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-primary-fixed text-primary-container font-label-sm text-xs px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5"><Icon name="Layers3" className="text-xs" />{"Vertical AI Systems"}</span>
            <span className="bg-secondary-container text-on-secondary-container font-label-sm text-xs px-3 py-1 rounded-full uppercase tracking-widest">{"Healthcare"}</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary-container mb-3 leading-tight group-hover:text-secondary transition-colors duration-300">{"Automated Patient Communications for a Specialized Medical Group"}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">{"From manual follow-ups to a 24/7 engagement engine. Custom LLMs and predictive analysis kept patient communication moving without adding admin load."}</p>
          <div className="flex items-center justify-between border-t border-outline-variant/30 pt-4">
            <div className="flex items-center gap-3 text-xs font-label-sm text-outline uppercase tracking-widest">
              <span>{"Practice Manager"}</span>
              <span className="w-1 h-1 bg-secondary rounded-full"></span>
              <span>{"ViralGrowth Medical Group"}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-secondary font-label-sm text-xs uppercase tracking-wider group-hover:gap-2 transition-all">{"Read Case Study"}<Icon name="ArrowRight" className="text-sm" /></span>
          </div>
        </div>
      </Link>
    </div>
  </section>

  {/* ── Final CTA ────────────────────────────────────────────────── */}
  <FinalCta heading={"Have an operational problem worth solving?"} body={"Schedule a strategy call and find where an AI system could make the biggest difference in your operations."} />
</main>
  </>;
}
