import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { ProofStrip } from '@/components/content/proof-strip';

const functions: Array<{
  index: string;
  title: string;
  body: string;
  href: string;
  icon: IconName;
  grain: string;
}> = [
  { index: '01', title: 'Sales', body: 'Qualifying leads, researching accounts, and following up automatically so your reps spend their time closing, not chasing.', href: '/service-vertical-ai', icon: 'TrendingUp', grain: 'grain-mineral' },
  { index: '02', title: 'Marketing', body: 'Running campaigns, segmenting audiences, and reporting on performance across channels without manual handoffs.', href: '/industry-digital-marketing', icon: 'Megaphone', grain: 'grain-charcoal' },
  { index: '03', title: 'E-commerce', body: 'Routing orders, syncing inventory, and scaling storefront support from checkout through fulfillment.', href: '/industry-b2b-ecommerce', icon: 'ShoppingCart', grain: 'grain-sand' },
  { index: '04', title: 'Customer Support', body: 'Resolving tickets instantly with AI agents that know your products, policies, and each customer’s history.', href: '/service-agentic-ai', icon: 'Headphones', grain: 'grain-olive' },
  { index: '05', title: 'Operations', body: 'Connecting your systems and automating the repetitive work that moves data between them with fewer errors.', href: '/service-ai-automations', icon: 'Workflow', grain: 'grain-steel' },
  { index: '06', title: 'Healthcare', body: 'Streamlining patient intake, scheduling, and documentation within strict compliance boundaries.', href: '/industry-medical-practices', icon: 'Hospital', grain: 'grain-teal' },
];

const outcomes = [
  { phrase: 'Time back', label: 'Manual Task Reduction', body: 'Repetitive data entry moves to the system, and your team gets back to work that needs judgment.' },
  { phrase: 'Around the clock', label: 'Autonomous Operations', body: 'Systems keep working across time zones, keeping critical processes consistent.' },
  { phrase: 'Faster responses', label: 'Lead & Customer Response', body: 'Faster response times and personalized, AI-driven first engagements.' },
];

export default function PageContent() {
  return <>
<main className="font-ui bg-page-wash">
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
    <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
    <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true"></div>
    <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center max-w-4xl">
        <h1 className="display-type mb-6">Where AI systems create the most operational <span className="opacity-60">leverage.</span></h1>
        <p className="reveal reveal-delay-2 body-ink max-w-2xl mb-10">Route by what you run a business function, or the industry you operate in. Both lead to the same systems, scoped to your workflows.</p>
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link className="btn-ink w-full sm:w-auto" href="/contact">Book a Strategy Call<Icon name="ArrowRight" className="ml-1 size-4" aria-hidden /> </Link>
          <a className="btn-ghost w-full sm:w-auto" href="#verticals">Browse by Function</a>
        </div>
      </div>
    </div>
  </section>

  {/* ── The six functions bento tile grid ─────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8" id="verticals">
    <div className="max-w-container-max mx-auto">
      <div className="reveal max-w-[640px] mb-10 sm:mb-14">
        <span className="eyebrow mb-4 block">By Business Function</span>
        <h2 className="section-title mb-4">The functions we automate<span className="h-muted"> one system, six ways it pays back.</span></h2>
        <p className="lede mt-5">Six high-impact functions and the workflows that connect them. Pick the one that consumes your team&apos;s week.</p>
      </div>
      <div className="bento">
        {functions.map((fn, i) => (
          <Link
            key={fn.index}
            href={fn.href}
            className={`reveal ${i % 2 === 1 ? 'reveal-delay-1' : ''} tile grain ${fn.grain} mc-card no-underline`}
          >
            <span className="tile-n">{fn.index}</span>
            <div className="tile-title">{fn.title}</div>
            <p className="tile-body">{fn.body}</p>
            <div className="tile-graphic glass-chip"><Icon name={fn.icon} size={20} /></div>
          </Link>
        ))}
      </div>
    </div>
  </section>

  {/* ── How we approach each business asymmetric bento ──────────── */}
  <section className="py-section-padding px-5 sm:px-8 border-t border-[var(--line)]">
    <div className="max-w-container-max mx-auto">
      <div className="reveal mb-12 sm:mb-16 max-w-[640px]">
        <span className="eyebrow mb-4 block">How We Approach Each Business</span>
        <h2 className="section-title mb-4">One system layer <span className="h-muted">under every function.</span></h2>
        <p className="lede mt-5">The AI systems we deploy for every vertical connecting your tools, automating decisions, and giving you real-time visibility.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="reveal grain grain-teal diag-split lg:col-span-2 flex flex-col justify-end">
          <span className="chip chip-grain w-fit mb-6"><Icon name="Boxes" className="text-[14px]" aria-hidden />Foundation</span>
          <h3 className="mc-title text-2xl md:text-3xl mb-4">Custom LLM Integration</h3>
          <p className="mc-body max-w-lg">Deploying private, fine-tuned language models within your secure infrastructure. We ensure proprietary data remains isolated while leveraging advanced reasoning capabilities for your specific business.</p>
        </div>
        <div className="reveal reveal-delay-1 bg-panel rounded-[26px] border border-[var(--line)] p-8 flex flex-col justify-between">
          <div className="size-12 rounded-full border border-[var(--line-strong)] flex items-center justify-center mb-6"><Icon name="GitBranch" className="text-ink text-lg" aria-hidden /></div>
          <div>
            <h3 className="mc-title text-xl md:text-2xl mb-3">Autonomous Workflow Orchestration</h3>
            <p className="mc-body">Connecting disparate enterprise systems through intelligent APIs, allowing for multi-step tasks to execute without human intervention.</p>
          </div>
        </div>
        <div className="reveal lg:col-span-3 bg-panel rounded-[26px] border border-[var(--line)] p-8 md:p-10 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <span className="chip mb-6"><Icon name="ChartNoAxesCombined" className="text-[14px]" aria-hidden />Visibility</span>
            <h3 className="mc-title text-2xl md:text-3xl mb-4">Real-time Intelligence Dashboards</h3>
            <p className="mc-body mb-6">Transforming raw operational data into actionable strategic insights. Custom interfaces provide executive oversight of AI agent performance, key metrics, and system health.</p>
            <Link className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-[var(--line-strong)] pb-0.5 hover:border-ink transition-colors" href="/services">View Service Details<Icon name="ArrowRight" className="size-4" aria-hidden /> </Link>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="h-64 rounded-[20px] border border-[var(--line)] relative overflow-hidden group">
              <OptimizedImage src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Real-time Intelligence Dashboard" width={1200} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ── Outcomes charcoal grain band ────────────────────────────── */}
  <section className="cta-bleed grain grain-charcoal">
    <div className="max-w-container-max mx-auto">
      <h2 className="reveal section-title text-white mb-12 sm:mb-16" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Outcomes Start With the Workflow</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
        {outcomes.map((o, i) => (
          <div key={o.phrase} className={`reveal ${i === 1 ? 'reveal-delay-1' : i === 2 ? 'reveal-delay-2' : ''} md:px-8 ${i > 0 ? 'md:border-l md:border-white/15' : ''}`}>
            <div className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-2">{o.phrase}</div>
            <div className="mc-label !opacity-80 mb-4">{o.label}</div>
            <p className="mc-body">{o.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <ProofStrip />

  {/* ── Closing CTA card ─────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8">
    <div className="reveal max-w-3xl mx-auto text-center bg-panel rounded-[26px] border border-[var(--line)] p-8 sm:p-16">
      <span className="eyebrow mb-4 block justify-center">Next Step</span>
      <h2 className="section-title mb-6">See Where Your Operation Can Improve</h2>
      <p className="body-ink mb-10 max-w-xl mx-auto">In a 30-minute strategy call, we&apos;ll review your current stack, identify the automation opportunities worth pursuing, and give you an honest assessment of what&apos;s worth building.</p>
      <Link className="btn-ink" href="/contact">Book a Strategy Call<Icon name="ArrowRight" className="ml-1 size-4" aria-hidden /> </Link>
    </div>
  </section>
</main>
  </>;
}
