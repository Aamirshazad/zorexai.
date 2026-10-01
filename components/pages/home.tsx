'use client';

import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';
import { Marquee } from '@/components/ui/marquee';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FourPhases } from '@/components/content/four-phases';
import { StartingPoint } from '@/components/content/starting-point';
import { Philosophy } from '@/components/content/philosophy';
import { WhatWeDo } from '@/components/content/what-we-do';
import { SmartForm } from '@/components/ui/smart-form';
import { company } from '@/content/company';
import { services } from '@/content/services';

const marqueeItems = [
  'Agentic AI Systems',
  'AI Integration',
  'Vertical AI Systems',
  'Workflow Automation',
  'System Integration',
  'Decision Support',
];

/** Grain surfaces, cycled across the service cards (mirrors the services page). */
const grains = ['grain-olive', 'grain-teal', 'grain-steel', 'grain-mineral', 'grain-sand', 'grain-charcoal'];

const engagements: Array<{
  icon: IconName;
  title: string;
  sub: string;
  duration: string;
  note: string;
  items: string[];
  featured?: boolean;
}> = [
  {
    icon: 'Rocket',
    title: 'Focused Improvement Sprint',
    sub: 'Single automation or integration',
    duration: '1-2 Weeks',
    note: 'Scoped after discovery call',
    items: ['One core automation', 'Full documentation', '30-day support'],
  },
  {
    icon: 'Brain',
    title: 'Full System Deployment',
    sub: 'End-to-end AI system deployment',
    duration: '2-5 Weeks',
    note: 'Scoped after discovery call',
    items: ['Multi-system integration', 'Custom LLM / agentic system', 'Training & handoff', '90-day support'],
    featured: true,
  },
  {
    icon: 'Network',
    title: 'Ongoing Optimization',
    sub: 'Retained AI engineering capacity',
    duration: 'Ongoing',
    note: 'Monthly retainer, scoped to your needs',
    items: ['Dedicated AI architect', 'Continuous optimization', 'Priority response'],
  },
];

/**
 * The site's point of view, stated once.
 *
 * These were previously three grain cards, directly beneath a three-card
 * friction grid and directly above what became a three-card comparison. Three
 * card grids in a row is the single most common shape on the page, so the
 * principle set is now a definition list inside one panel: same content, a
 * shape the reader has not just seen twice.
 */
const principles = [
  {
    number: '01',
    title: 'Start with the work',
    body: 'Not a model and not a tool. Start with the work that consumes people, creates delays, and caps how far the business can scale.',
  },
  {
    number: '02',
    title: 'Design the system around it',
    body: 'Context, actions, tools, and controls coordinated so the business executes with less friction, rather than more software to manage.',
  },
  {
    number: '03',
    title: 'Aim for better execution',
    body: 'The goal was never more AI. It is a business function that runs reliably without somebody chasing it every week.',
  },
];

export default function PageContent() {
  // The hero video is the LCP element on this page, so it keeps
  // `preload="auto"` on the <video> element itself.
  //
  // An earlier version asked React to hoist rel="preload" hints for it with
  // `{ as: 'video' }`. `video` is not a valid preload destination, so browsers
  // discarded both tags and logged "unsupported `as` value" twice on every
  // load — the hint never prioritised anything. Removed rather than left in
  // place doing nothing.
  return <>
<main className="font-ui bg-page-wash">
  {/* ── Hero ─────────────────────────────────────────────────────── */}
  <section className="relative px-5 sm:px-8 pt-32 sm:pt-40 pb-28 sm:pb-36 lg:min-h-[85vh] flex items-center overflow-hidden">
    <div className="hero-media" aria-hidden="true">
      <video autoPlay muted loop playsInline preload="auto" disablePictureInPicture>
        <source src="/videos/hero-waves-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/videos/hero-waves.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="max-w-container-max w-full mx-auto relative z-10">
      <div className="flex flex-col items-start max-w-3xl text-left mr-auto">
        <h1 className="display-type mb-6" id="hero-headline">
          We are building a future where AI <span className="opacity-60">makes humans more capable and impactful.</span>
        </h1>
        <Reveal delay={0.16}>
          <p className="body-ink max-w-2xl mb-10" id="hero-description">
            Zorex works with SMB leaders on AI strategy, enablement, and production systems.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-3">
            <Link className="btn-ink w-full sm:w-auto" href="/contact">Book a Strategy Call<Icon name="ArrowRight" className="ml-1 size-4" aria-hidden /> </Link>
            <Link className="btn-ghost w-full sm:w-auto" href="/case-studies">See Our Work</Link>
          </div>
        </Reveal>
      </div>
    </div>
  </section>

  {/* ── Capability marquee ───────────────────────────────────────── */}
  <section className="py-6 px-5 sm:px-8 border-y border-[var(--line)] overflow-hidden">
    <Marquee className="max-w-container-max mx-auto" trackClassName="gap-10">
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center gap-10 pr-10 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
          {item}
        </span>
      ))}
    </Marquee>
  </section>

  {/* ── The starting point / adoption gap (from the HITL advisory page) ── */}
  <StartingPoint />

  {/* ── Our philosophy (from the HITL advisory page) ── */}
  <Philosophy />

  {/* ── What We Do two ways to work with us (from the HITL advisory page) ── */}
  <WhatWeDo />

  {/* ── What We Automate: the four services, same card UI as /services ── */}
  <section className="py-section-padding px-5 sm:px-8" id="services">
    <div className="max-w-container-max mx-auto">
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="eyebrow mb-4 block">What We Automate</span>
          <h2 className="section-title">We build systems around the work that matters most.</h2>
          <p className="body-ink mt-4">We start with the workflow, the business outcome, and the constraints. Then we design the system around your existing operation.</p>
        </div>
        <Link className="footer-link gap-2 border-b border-[var(--line-strong)] pb-0.5 text-sm font-medium text-ink transition-colors hover:border-ink" href="/services">See All Services<Icon name="ArrowRight" className="size-4" aria-hidden /> </Link>
      </ScrollReveal>
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

  {/* ── The four phases ──────────────────────────────────────────── */}
  <FourPhases showProcessLink />

  {/* ── Point of view: one statement band, not three more cards ───── */}
  <section className="py-section-padding px-5 sm:px-8" id="company-positioning">
    <div className="max-w-container-max mx-auto">
      <Reveal>
        <div className="grain grain-charcoal grain-roomy">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div>
              <span className="mc-label">How We Think About AI</span>
              <p className="display-type mt-6" style={{ fontSize: 'clamp(26px, 3.2vw, 40px)' }}>
                The business function comes first. <span className="opacity-60">The technology follows.</span>
              </p>
            </div>
            <dl className="flex flex-col divide-y divide-white/15 border-t border-white/15 lg:border-t-0">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="grid gap-3 py-6 first:pt-0 last:pb-0 lg:grid-cols-[auto_1fr] lg:gap-8"
                >
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.16em] opacity-60">
                    {principle.number}
                  </span>
                  <div>
                    <dt className="mc-title mb-2 text-lg">{principle.title}</dt>
                    <dd className="mc-body max-w-xl">{principle.body}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </div>
  </section>

  {/* ── How we engage ────────────────────────────────────────────── */}
  <section className="py-section-padding px-5 sm:px-8">
    <div className="max-w-container-max mx-auto">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow mb-4 block justify-center">How We Engage</span>
        <h2 className="section-title">Pick the engagement that fits your problem.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {engagements.map((plan, i) => {
          if (plan.featured) {
            return (
              <div key={plan.title} className="reveal reveal-delay-1 grain grain-charcoal grain-roomy flex flex-col text-center">
                <div className="flex flex-col h-full">
                  <div className="size-12 rounded-full border border-[var(--grain-chip-bd)] bg-[var(--grain-chip)] flex items-center justify-center mx-auto mb-6"><Icon name={plan.icon} className="text-lg" aria-hidden /></div>
                  <h3 className="mc-title text-xl mb-1">{plan.title}</h3>
                  <p className="mc-body text-[13px] mb-4">{plan.sub}</p>
                  <p className="text-3xl font-medium mb-1">{plan.duration}</p>
                  <p className="mc-body text-xs mb-6">{plan.note}</p>
                  <ul className="space-y-2.5 text-left text-[13.5px] leading-[1.55] mt-auto">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-2"><Icon name="CircleCheck" className="size-4 mt-0.5 shrink-0 opacity-90" aria-hidden />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          }
          return (
            <div key={plan.title} className={`reveal ${i === 2 ? 'reveal-delay-2' : ''} bg-panel rounded-[26px] border border-[var(--line)] p-8 flex flex-col text-center`}>
              <div className="size-12 rounded-full border border-[var(--line-strong)] flex items-center justify-center mx-auto mb-6"><Icon name={plan.icon} className="text-ink text-lg" aria-hidden /></div>
              <h3 className="mc-title text-xl mb-1">{plan.title}</h3>
              <p className="mc-body text-[13px] mb-4">{plan.sub}</p>
              <p className="text-2xl font-medium text-ink mb-1">{plan.duration}</p>
              <p className="mc-body text-xs mb-6">{plan.note}</p>
              <ul className="space-y-2.5 text-left text-[13.5px] leading-[1.55] mt-auto">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2"><Icon name="CircleCheck" className="text-ink-2 size-4 mt-0.5 shrink-0" aria-hidden /><span className="text-ink-2">{item}</span></li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* ── Lead magnet in-app submission, no off-site redirect ────── */}
  <section className="py-section-padding px-5 sm:px-8">
    <div className="max-w-3xl mx-auto">
      <Reveal>
        <div className="grain grain-charcoal rounded-[22px] text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full font-semibold text-[10px] uppercase tracking-[0.14em] mb-8 border-[var(--grain-chip-bd)] bg-[var(--grain-chip)]">
            <Icon name="CircleHelp" className="text-sm icon-fill opacity-70" aria-hidden />
            <span className="opacity-80">Free Resource</span>
          </div>
          <h2 className="section-title text-white mb-6">Not Ready for a Strategy Call? Start With the Problem.</h2>
          <p className="mc-body mb-10 max-w-xl mx-auto">Use the same readiness checklist we run in an audit to find where repetitive work, disconnected systems, or slow decisions are costing you the most.</p>
          <SmartForm
            id="lead-magnet-form"
            subject="AI Readiness Checklist Request"
            className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
            submitLabel="Send Me the Checklist"
            submitClassName="btn-ink w-full sm:w-auto !bg-white !text-ink hover:!bg-white/90"
            successTitle="On its way."
            /* The previous copy promised the asset "in the next few minutes",
               which was never true: the form posts to Formspree and a person
               sends the next reply. It now describes what actually happens. */
            successBody="We send these ourselves, so expect it within one business day. If it raises a question, reply to that email and you will reach an engineer rather than a queue."
          >
            <label htmlFor="lead-magnet-email" className="sr-only">Business email</label>
            <input
              id="lead-magnet-email"
              className="flex-1 w-full px-5 h-12 rounded-[10px] border border-[var(--grain-chip-bd)] bg-[var(--grain-chip)] text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/60 focus:border-transparent outline-none text-sm"
              name="email" placeholder="your@email.com" autoComplete="email" inputMode="email" required={true} type="email"
            />
          </SmartForm>
          <p className="mc-body opacity-60 text-xs mt-4">One email, sent by a person. No list, no sequence, unsubscribe by replying.</p>
        </div>
      </Reveal>
    </div>
  </section>

  {/* ── Final CTA full-bleed grain-teal ─────── */}
  <section className="cta-bleed grain grain-teal" id="book">
    <div className="max-w-4xl mx-auto text-center">
      <Reveal>
        <h2 className="display-type text-white mb-8" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          The demo is easy.<br /><span className="opacity-60">Production is where the truth shows up.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mc-body text-[15px] mb-8 max-w-2xl mx-auto">
          Book an executive briefing. In {company.callLength} you&apos;ll know where you stand &mdash; and what to do first.
        </p>
      </Reveal>
      <Reveal delay={0.18}>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="chip chip-grain">Free</span>
          <span className="chip chip-grain">{company.callLength}</span>
          <span className="chip chip-grain">No obligation</span>
        </div>
      </Reveal>
      <Reveal delay={0.26}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link className="btn-ink w-full sm:w-auto !bg-white !text-ink hover:!bg-white/90" href="/contact">Book an Executive Briefing<Icon name="ArrowRight" className="ml-1 size-4" aria-hidden /> </Link>
          <Link className="btn-ghost w-full sm:w-auto !border-white/30 !text-white hover:!bg-white/10" href="/case-studies">See Client Results</Link>
        </div>
      </Reveal>
    </div>
  </section>
</main>
  </>;
}
