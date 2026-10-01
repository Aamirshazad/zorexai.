'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/icon';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { FinalCta } from '@/components/content/final-cta';
import { engagements, type Engagement } from '@/content/engagements';

/**
 * /case-studies
 *
 * The central case studies and systems showcase page.
 * Highlights:
 * 1. Fashion Studio E-commerce Integration (Shopify + drops + wholesale automation)
 * 2. ZAIK: AI-Native Social Media Marketing Operating System for Agencies (Flagship system with real interactive UI screenshots)
 * 3. Clinical Healthcare Patient Follow-up & Intake System
 */

function InteractiveGallery({ gallery, defaultSrc, defaultAlt }: { gallery: NonNullable<Engagement['gallery']>; defaultSrc: string; defaultAlt: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = gallery[activeIdx] ?? { src: defaultSrc, alt: defaultAlt, label: 'Preview' };

  return (
    <div className="mb-8 overflow-hidden rounded-[20px] border border-[var(--line-strong)] bg-ink/5 p-3 sm:p-4">
      {/* Top browser/app bar */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-red-400/80 inline-block" />
            <span className="size-2.5 rounded-full bg-amber-400/80 inline-block" />
            <span className="size-2.5 rounded-full bg-emerald-400/80 inline-block" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-ink-3">zaik-os.zorex.ai/{activeItem.label.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>
        <span className="font-ui text-[11px] font-medium text-ink-2 bg-panel px-2.5 py-1 rounded-md border border-[var(--line)]">
          Live Product UI Screenshot
        </span>
      </div>

      {/* Main active image */}
      <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-[14px] border border-[var(--line)] bg-ink shadow-md">
        <Image
          src={activeItem.src}
          alt={activeItem.alt}
          fill
          sizes="(max-width: 768px) 100vw, 1100px"
          className="object-cover object-top transition-all duration-300"
          priority
        />
        <div className="absolute bottom-3 left-3 rounded-lg bg-ink/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md border border-white/10">
          {activeItem.label}: {activeItem.alt}
        </div>
      </div>

      {/* Screenshot Switcher Tabs */}
      <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
        <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-ink-3 pl-1 pr-2">
          Switch View:
        </span>
        {gallery.map((item, idx) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`flex shrink-0 items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
              activeIdx === idx
                ? 'border-ink bg-ink text-white shadow-sm'
                : 'border-[var(--line)] bg-panel text-ink-2 hover:border-[var(--line-strong)] hover:text-ink'
            }`}
          >
            <span className={`size-1.5 rounded-full ${activeIdx === idx ? 'bg-emerald-400' : 'bg-ink-3'}`} />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PageContent() {
  return (
    <>
      <main className="font-ui bg-page-wash">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
          <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-[420px] section-glow pointer-events-none" aria-hidden="true" />

          <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
            <Breadcrumbs route="case-studies" className="mb-8" />
            <div className="flex flex-col items-center max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-panel px-3.5 py-1 text-xs font-medium text-ink">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                Production Case Studies & Operating Systems
              </div>
              <h1 className="display-type mb-6">
                Three bottlenecks, <span className="opacity-60">and what changed about the work.</span>
              </h1>
              <p className="body-ink max-w-2xl mb-6">
                From our flagship <strong>Zaik</strong> social media marketing operating system for ecommerce agencies to multi-channel fashion brand automation and clinical healthcare systems. These are real architectures solving real operational constraints.
              </p>
              <p className="text-sm text-ink-3 max-w-xl">
                Every breakdown details the exact operational problem, the system architecture we built, and the measurable shift in everyday team capacity.
              </p>
            </div>
          </div>
        </section>

        {/* ── The engagements, in full ────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8">
          <div className="max-w-container-max mx-auto flex flex-col gap-8">
            {engagements.map((item, index) => {
              const isZaik = item.href.includes('echocommerce');

              return (
                <article
                  key={item.href}
                  className={`reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ''} rounded-[28px] border ${
                    isZaik
                      ? 'border-ink/20 bg-panel shadow-lg ring-1 ring-ink/5'
                      : 'border-[var(--line)] bg-panel'
                  } p-8 md:p-12 transition-all`}
                >
                  {/* Top Meta */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-ink-3">
                      Case Study {item.number}
                    </span>
                  </div>

                  {/* Header */}
                  <h2 className="mc-title mb-3 text-2xl text-ink md:text-3xl lg:text-4xl font-semibold">
                    {item.title}
                  </h2>
                  {item.tagline && (
                    <p className="text-base text-ink-2 font-medium mb-3">
                      {item.tagline}
                    </p>
                  )}
                  <p className="mc-body mb-8 max-w-3xl text-ink-3">
                    <strong className="text-ink font-medium">Client Profile: </strong>
                    {item.who}
                  </p>

                  {/* Media: If gallery exists (Zaik), render InteractiveGallery with real UI screenshots */}
                  {item.gallery && item.image ? (
                    <InteractiveGallery
                      gallery={item.gallery}
                      defaultSrc={item.image.src}
                      defaultAlt={item.image.alt}
                    />
                  ) : item.image ? (
                    <div className="group relative mb-8 h-56 overflow-hidden rounded-[20px] border border-[var(--line)] sm:h-72">
                      <OptimizedImage
                        src={item.image.src}
                        alt={item.image.alt}
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 100vw, 900px"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : null}

                  {/* Before / After & Action Footer */}
                  <div className="mt-8 flex flex-col gap-6 border-t border-[var(--line)] pt-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 flex-1">
                      <div className="border-l-2 border-red-400/40 pl-4">
                        <span className="eyebrow mb-1 block text-ink-3">Before</span>
                        <p className="text-[13.5px] leading-[1.55] text-ink-3">{item.shift.from}</p>
                      </div>
                      <div className="border-l-2 border-emerald-400/60 pl-4">
                        <span className="eyebrow mb-1 block text-emerald-600 dark:text-emerald-400">After</span>
                        <p className="text-[13.5px] leading-[1.55] text-ink-2 font-medium">{item.shift.to}</p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3 pt-2 lg:pt-0">
                      <Link
                        href={item.href}
                        className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-ui text-sm font-semibold transition-all ${
                          isZaik
                            ? 'bg-ink text-white hover:bg-ink-2 shadow-sm'
                            : 'border border-[var(--line-strong)] bg-panel text-ink hover:border-ink hover:bg-[var(--panel-2)]'
                        }`}
                      >
                        {item.ctaLabel ?? 'Read the write-up'}
                        <Icon name="ArrowRight" className="size-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <FinalCta
          heading="Have an operational problem worth solving?"
          body="Schedule a strategy call and find where an AI system could make the biggest difference in your operations."
          secondaryLabel="See what we build"
          secondaryHref="/services"
        />
      </main>
    </>
  );
}