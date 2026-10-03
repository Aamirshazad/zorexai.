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
import { FeaturedCaseStudy } from '@/components/content/featured-case-study';
import { company } from '@/content/company';

const marqueeItems = [
  'Agentic AI Systems',
  'AI Integration',
  'Vertical AI Systems',
  'Workflow Automation',
  'System Integration',
  'Decision Support',
];


const engagements: Array<{
  icon: IconName;
  title: string;
  sub: string;
  duration: string;
  body: string;
  featured?: boolean;
}> = [
  {
    icon: 'Rocket',
    title: 'Starter Sprint',
    sub: 'Solve One Core Bottleneck',
    duration: '2–3 Weeks',
    body: 'We take one painful manual process (invoice processing, lead triage, client onboarding) and deploy a working AI system for it.',
  },
  {
    icon: 'Brain',
    title: 'Full Operational Deployment',
    sub: 'End-to-End System Integration',
    duration: '4–8 Weeks',
    body: 'We automate a complete business workflow across multiple departments with custom controls and team onboarding.',
    featured: true,
  },
  {
    icon: 'Network',
    title: 'Continuous Partnership',
    sub: 'Ongoing Management & Improvement',
    duration: 'Ongoing',
    body: 'We maintain, optimize, and expand your systems as your business grows — acting as your dedicated AI department.',
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
    title: 'Build',
    body: 'Deploy directly with client teams to solve specific, high-impact operational problems in live production environments.',
  },
  {
    number: '02',
    title: 'Prove',
    body: 'Validate system reliability, edge-case handling, and measurable business performance under real-world constraints.',
  },
  {
    number: '03',
    title: 'Generalize',
    body: 'Identify repeatable patterns and evolve them into scalable product capabilities, modular SDKs, and core platform tools.',
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
          We take AI from idea <span className="opacity-60">to daily use in your business.</span>
        </h1>
        <Reveal delay={0.16}>
          <p className="body-ink max-w-2xl mb-10" id="hero-description">
            We partner with organizations to solve high-impact problems using AI—starting from first principles and deploying systems in real-world environments.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-3">
            <Link className="btn-ink w-full sm:w-auto" href="/contact#book">Book a Strategy Call<Icon name="ArrowRight" className="ml-1 size-4" aria-hidden /> </Link>
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

  {/* ── Featured Case Studies (Case Studies 1 & 3) ── */}
  <FeaturedCaseStudy />

  {/* ── Production principles ────────────────────────────────────── */}
  <FourPhases showProcessLink />

  {/* ── Point of view: one statement band, not three more cards ───── */}
  <section className="py-section-padding px-5 sm:px-8" id="company-positioning">
    <div className="max-w-container-max mx-auto">
      <Reveal>
        <div className="grain grain-charcoal grain-roomy">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div>
              <span className="mc-label">How We Think About AI</span>
              <h2 className="display-type mt-6" style={{ fontSize: 'clamp(26px, 3.2vw, 40px)' }}>
                From deployment <span className="opacity-60">to real product solutions</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/80 max-w-xl">
                By solving real customer problems, our forward deployed engineering teams identify repeatable patterns that evolve into product capabilities. This cycle—build, prove, generalize—connects deployment to product development across Agent SDK, AI-assisted authoring systems, model benchmarking and reliability tools, and more.
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
                  <p className="text-3xl font-medium mb-6">{plan.duration}</p>
                  <p className="mc-body text-[13.5px] leading-[1.6] mt-auto">{plan.body}</p>
                </div>
              </div>
            );
          }
          return (
            <div key={plan.title} className={`reveal ${i === 2 ? 'reveal-delay-2' : ''} bg-panel rounded-[26px] border border-[var(--line)] p-8 flex flex-col text-center`}>
              <div className="size-12 rounded-full border border-[var(--line-strong)] flex items-center justify-center mx-auto mb-6"><Icon name={plan.icon} className="text-ink text-lg" aria-hidden /></div>
              <h3 className="mc-title text-xl mb-1">{plan.title}</h3>
              <p className="mc-body text-[13px] mb-4">{plan.sub}</p>
              <p className="text-2xl font-medium text-ink mb-6">{plan.duration}</p>
              <p className="mc-body text-[13.5px] leading-[1.6] mt-auto">{plan.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* ── Final CTA boxed card ─────── */}
  <section className="py-section-padding px-5 sm:px-8" id="book">
    <div className="max-w-4xl mx-auto">
      <Reveal>
        <div className="grain grain-charcoal rounded-[22px] text-center py-12 sm:py-16 px-6 sm:px-12">
          <h2 className="display-type text-white mb-6" style={{ fontSize: 'clamp(28px, 4.4vw, 48px)' }}>
            The demo is easy.<br /><span className="opacity-60">Production is where the truth shows up.</span>
          </h2>
          <p className="mc-body text-[15px] mb-8 max-w-2xl mx-auto">
            Book a strategy call. In {company.callLength} you&apos;ll know where you stand &mdash; and what to do first.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <span className="chip chip-grain">Free</span>
            <span className="chip chip-grain">{company.callLength}</span>
            <span className="chip chip-grain">No obligation</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link className="btn-ink w-full sm:w-auto !bg-white !text-ink hover:!bg-white/90" href="/contact#book">
              Book a Strategy Call<Icon name="ArrowRight" className="ml-1 size-4" aria-hidden />
            </Link>
            <Link className="btn-ghost w-full sm:w-auto !border-white/30 !text-white hover:!bg-white/10" href="/case-studies">
              See Client Results
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
</main>
  </>;
}
