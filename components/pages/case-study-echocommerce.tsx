import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/icon';
import { FinalCta } from '@/components/content/final-cta';

/* ────────────────────────────────────────────────────────────────────────────
 *  ZAIK — Product Landing Page
 *
 *  This is the public-facing product page for Zaik, the AI-native social
 *  media marketing operating system built by Zorex AI. It replaces the
 *  generic case-study-echocommerce template with a proper product landing
 *  page featuring real product screenshots.
 *
 *  Route: /case-study-echocommerce
 * ──────────────────────────────────────────────────────────────────────── */

const features = [
  {
    icon: 'Brain' as const,
    title: 'Brand Brain',
    body: 'Every client gets an isolated AI memory — brand voice, visual identity, product catalog, competitor context, and approval history. The AI never cross-contaminates one brand with another.',
  },
  {
    icon: 'Palette' as const,
    title: 'Creative Studios',
    body: 'Content Studio, Ad Studio, Fashion Studio, and Motion Design — specialized AI creation tools that produce campaign-ready assets inside the workflow, not outside it.',
  },
  {
    icon: 'MessagesSquare' as const,
    title: 'Community Agent',
    body: 'AI handles routine DMs and comments with brand-specific tone across Instagram, TikTok, Facebook, and Messenger. Anything sensitive escalates to a human with full context.',
  },
  {
    icon: 'ChartNoAxesCombined' as const,
    title: 'AI Analytics & Reporting',
    body: 'Performance data across content, campaigns, and channels compiles into client-ready reports automatically. No more exporting from four dashboards and pasting into a template.',
  },
  {
    icon: 'Megaphone' as const,
    title: 'Paid Campaign Engine',
    body: 'Turn approved creative into ad structures, A/B variations, and performance tracking — all inside the client workspace with the media buyer in control.',
  },
  {
    icon: 'Shield' as const,
    title: 'Multi-Client Control',
    body: 'Agency-level roles, permissions, approval workflows, and portfolio-wide visibility. One login, every client, complete operational control.',
  },
];

const workflow = [
  { step: '01', title: 'Strategy', desc: 'AI Content Strategist generates campaign plans tied to each client\'s goals, products, seasonal calendar, and audience data.' },
  { step: '02', title: 'Content Production', desc: 'Specialized AI studios produce campaign-ready assets — from fashion lookbooks to product ads to UGC edits — with brand context applied automatically.' },
  { step: '03', title: 'Content Operations', desc: 'Content library, QA workflows, and approval gates keep assets organized, reviewed, and client-approved before anything goes live.' },
  { step: '04', title: 'Publishing', desc: 'Multi-account, multi-channel publishing from one calendar. Instagram, TikTok, LinkedIn, and Facebook — all clients, one view.' },
  { step: '05', title: 'Community', desc: 'Community Agent handles routine engagement with brand-specific tone. Complaints, PR, and influencer outreach escalate to humans.' },
  { step: '06', title: 'Paid Marketing', desc: 'Ad Studio turns approved creative into campaign structures with test variations and performance tracking.' },
  { step: '07', title: 'Analytics', desc: 'AI Insights compile performance data into client-ready reports. Account managers review insights, not spreadsheets.' },
  { step: '08', title: 'Optimization', desc: 'The Optimization Engine learns from what performed and feeds insights back into the next cycle — every iteration is data-informed.' },
];

const screenshots = [
  {
    src: '/zaik/community-inbox.png',
    alt: 'Zaik Community Inbox — AI-powered message triage across Instagram, Messenger, and TikTok DMs',
    title: 'Community Inbox',
    desc: 'AI triages every message across every platform. Warm leads, support requests, and partnership inquiries — classified and routed in real time.',
  },
  {
    src: '/zaik/fashion-studio.png',
    alt: 'Zaik Fashion Studio — AI-powered virtual model styling and product photography',
    title: 'Fashion Studio',
    desc: 'Style virtual models with your product catalog. Choose outfits, accessories, and scenes — then shoot AI-generated editorial content instantly.',
  },
  {
    src: '/zaik/brand-kits.png',
    alt: 'Zaik Brand Kits — brand identity management with logos, colors, fonts, and templates',
    title: 'Brand Kits',
    desc: 'Enter a URL or upload brand files. Zaik extracts logos, colors, fonts, and applies them to every generation — one setup, consistent output.',
  },
  {
    src: '/zaik/motion-design.png',
    alt: 'Zaik Motion Design — product catalog and video content creation',
    title: 'Motion Design',
    desc: 'Your product catalog, organized and ready for motion content. Import from your store or upload manually — then create videos in seconds.',
  },
  {
    src: '/zaik/ad-studio.png',
    alt: 'Zaik Ad Studio — AI video ad creation with templates and inspiration',
    title: 'Ad Studio',
    desc: 'Choose from ad templates — Football TVC, Virtual Try-On, Hyper-Motion — or create from scratch. AI generates video ads from your products and brief.',
  },
];

export default function PageContent() {
  return (
    <>
      <main className="font-ui bg-page-wash">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 px-5 sm:px-8 overflow-hidden border-b border-[var(--line)]">
          <div className="absolute inset-0 section-grid pointer-events-none" aria-hidden="true"></div>
          <div className="absolute inset-x-0 top-0 h-[480px] section-glow pointer-events-none" aria-hidden="true"></div>

          <div className="max-w-container-max mx-auto relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center flex-wrap gap-2 font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-3">
                  <li className="flex items-center gap-2">
                    <Link href="/case-studies" className="inline-flex min-h-6 items-center hover:text-ink transition-colors">Case Studies</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="ChevronRight" className="size-3 opacity-50" aria-hidden />
                    <span className="inline-flex min-h-6 items-center text-ink">Zaik</span>
                  </li>
                </ol>
              </nav>

              <div className="reveal flex flex-wrap items-center justify-center gap-3 mb-6">
                <span className="chip font-ui"><Icon name="Bot" className="text-[14px]" aria-hidden />AI-Native Product</span>
                <span className="chip font-ui"><Icon name="Users" className="text-[14px]" aria-hidden />For Ecommerce Agencies</span>
              </div>

              <h1 className="display-type mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
                One system to run <br />
                <span className="opacity-60">every client&apos;s social media marketing.</span>
              </h1>

              <p className="reveal reveal-delay-1 body-ink !text-[17px] max-w-2xl mb-4">
                Zaik is the AI-native social media marketing operating system for ecommerce agencies.
                Strategy, creative, publishing, community, paid campaigns, reporting, and optimization —
                one system, every client, every channel.
              </p>
              <p className="reveal reveal-delay-1 text-sm text-ink-3 max-w-xl mb-8">
                Built by Zorex AI &middot; Designed for agencies serving ecommerce and consumer brands.
              </p>

              <div className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-3 mb-10">
                <Link className="btn-ink" href="/contact">
                  Request Early Access
                  <Icon name="ArrowRight" className="ml-1 size-4" aria-hidden />
                </Link>
                <Link className="btn-ghost" href="#features">See How It Works</Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="reveal reveal-delay-2 mt-14 relative">
              <div className="rounded-[24px] overflow-hidden border border-[var(--line)] shadow-2xl shadow-black/10">
                <Image
                  src="/case-studies/agency-marketing.jpg"
                  alt="Zaik AI-native social media marketing operating system running in modern ecommerce agency workspace"
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-auto"
                />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-panel rounded-full px-5 py-2.5 border border-[var(--line)] shadow-lg flex items-center gap-2 text-sm font-ui font-medium text-ink">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                AI Operating System Active &middot; Multi-Client Isolation
              </div>
            </div>
          </div>
        </section>

        {/* ── Problem Statement ────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8 border-b border-[var(--line)]">
          <div className="max-w-container-max mx-auto">
            <div className="reveal max-w-3xl mx-auto text-center mb-14">
              <span className="eyebrow mb-4 block">The Agency Problem</span>
              <h2 className="section-title mb-5">
                Every new client adds coordination, <span className="opacity-60">not revenue.</span>
              </h2>
              <p className="lede mt-5">
                Most agencies scale by adding people, freelancers, tools, and coordination. AI changes the
                production economics — but only if the operating model changes with it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: 'Repeat2' as const, title: 'Rebuild context every time', body: 'Onboarding a new client means starting from scratch — brand guidelines, calendars, folders, ad accounts, tone briefings.' },
                { icon: 'Clock' as const, title: 'Creative bottleneck', body: 'Senior creatives spend their time resizing assets and writing caption variants, not on strategy or direction.' },
                { icon: 'Mail' as const, title: 'Approvals scattered everywhere', body: 'Client feedback in email, Slack, Docs, and WhatsApp. Rejection reasons lost in chat history.' },
                { icon: 'FileSpreadsheet' as const, title: 'Reporting as a service task', body: 'Export from four dashboards, paste into a template, write commentary, send. One full day per client, every month.' },
              ].map((item, i) => (
                <div key={item.title} className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''} bg-panel rounded-[20px] border border-[var(--line)] p-7 flex flex-col`}>
                  <span className="mb-5 flex size-10 items-center justify-center rounded-[12px] border border-[var(--line-strong)] bg-[var(--panel-2)]">
                    <Icon name={item.icon} className="size-[18px] text-ink" aria-hidden />
                  </span>
                  <h3 className="mc-title mb-3 text-[17px] text-ink">{item.title}</h3>
                  <p className="mc-body text-[13.5px]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features Grid ───────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8" id="features">
          <div className="max-w-container-max mx-auto">
            <div className="reveal mb-12 sm:mb-16 max-w-[640px]">
              <span className="eyebrow mb-4 block">Core Capabilities</span>
              <h2 className="section-title mb-4">
                Everything an agency needs, <span className="opacity-60">in one system.</span>
              </h2>
              <p className="lede mt-5">
                Zaik covers the entire social media marketing workflow — from strategy to optimization —
                so your team stops switching between seven tools and starts operating from one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div key={f.title} className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''} bg-panel rounded-[20px] border border-[var(--line)] p-7 flex flex-col card-lift`}>
                  <span className="mb-5 flex size-10 items-center justify-center rounded-[12px] border border-[var(--line-strong)] bg-[var(--panel-2)]">
                    <Icon name={f.icon} className="size-[18px] text-ink" aria-hidden />
                  </span>
                  <h3 className="mc-title mb-3 text-[17px] text-ink">{f.title}</h3>
                  <p className="mc-body text-[13.5px]">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Product Screenshots ─────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8 bg-page-wash border-y border-[var(--line)]">
          <div className="max-w-container-max mx-auto">
            <div className="reveal text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow mb-4 block">Inside Zaik</span>
              <h2 className="section-title mb-4">
                Built for the way agencies actually work.
              </h2>
              <p className="lede mt-5">
                Every screen is designed around agency workflows — multi-client, multi-channel,
                multi-format production at scale.
              </p>
            </div>

            <div className="flex flex-col gap-20">
              {screenshots.map((shot, i) => (
                <div
                  key={shot.title}
                  className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${i % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}
                >
                  <div className={`${i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}`}>
                    <span className="eyebrow mb-3 block">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mc-title text-2xl md:text-3xl text-ink mb-4">{shot.title}</h3>
                    <p className="mc-body text-[15px] leading-relaxed">{shot.desc}</p>
                  </div>
                  <div className={`rounded-[20px] overflow-hidden border border-[var(--line)] shadow-xl shadow-black/5 ${i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}`}>
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Workflow: 8-stage pipeline ───────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8">
          <div className="max-w-container-max mx-auto">
            <div className="reveal text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow mb-4 block">How It Works</span>
              <h2 className="section-title mb-4">
                One system, eight stages, <span className="opacity-60">every client.</span>
              </h2>
              <p className="lede mt-5">
                Zaik covers the full agency workflow — from strategy to optimization — so the team
                stops switching between seven tools and starts operating from one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {workflow.map((w, i) => {
                const isLast = i === workflow.length - 1;
                return (
                  <div
                    key={w.step}
                    className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''} ${isLast ? 'bg-ink border-[var(--line-strong)]' : 'bg-panel border-[var(--line)]'} rounded-[20px] border p-6 flex flex-col`}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold mb-4 ${isLast ? 'bg-white/10 text-white border border-white/20' : 'bg-[var(--panel-2)] text-ink'}`}>
                      {w.step}
                    </span>
                    <h4 className={`font-ui text-base mb-2 ${isLast ? 'text-white' : 'text-ink'}`}>{w.title}</h4>
                    <p className={`text-[13px] leading-relaxed ${isLast ? 'text-white/70' : 'text-ink-2'}`}>{w.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Before / After ──────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8 bg-page-wash border-y border-[var(--line)]">
          <div className="max-w-container-max mx-auto">
            <div className="reveal text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow mb-4 block">The Shift</span>
              <h2 className="section-title mb-4">
                From tool-centric to AI-native operations.
              </h2>
              <p className="lede mt-5">
                The change is not adding AI to the old workflow.
                It is operating the agency differently because AI exists.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="reveal bg-panel border border-[var(--line)] rounded-[20px] p-7">
                <span className="eyebrow mb-4 block">Before: Tool-centric agency</span>
                <ul className="space-y-3 text-sm text-ink-2">
                  {[
                    'Onboarding starts from documents, chats, and folders',
                    'Creative briefed to separate production resources',
                    'Client revisions across email, chat, and project tools',
                    'Schedulers and ad accounts operated separately',
                    'Monthly reports as a separate service task',
                    'Best practices lived in senior employees\' heads',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Icon name="X" className="text-ink-3 shrink-0 mt-0.5 size-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal bg-ink border border-[var(--line-strong)] rounded-[20px] p-7">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60 mb-4 block">After: AI-native agency with Zaik</span>
                <ul className="space-y-3 text-sm text-white/80">
                  {[
                    'Client workspace with persistent Brand Brain context',
                    'Specialized AI studios inside the workflow',
                    'Controlled review and approval workflow per client',
                    'Publishing and paid execution in the same system',
                    'Analytics and AI insights continuously connected',
                    'Reusable agency playbooks, templates, and workflows',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Icon name="Check" className="text-white/60 shrink-0 mt-0.5 size-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Outcomes band ────────────────────────────────────────────── */}
        <section className="py-24 bg-ink text-white relative overflow-hidden">
          <div className="absolute inset-0 section-grid-inverse opacity-20 pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-5 sm:px-8 relative z-10">
            <div className="reveal text-center mb-14">
              <h2 className="mc-title text-white mb-4">What agencies get with Zaik</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                The operating model changes — not just the tools.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: 'Users' as const, stat: 'Scale without hiring', body: 'Take on new clients without adding headcount. The system carries the production load.' },
                { icon: 'Zap' as const, stat: '3-day cycle → 1 morning', body: 'Content production that used to take days runs through AI studios. The team reviews and approves.' },
                { icon: 'FileText' as const, stat: 'Reports write themselves', body: 'Monthly client reports compile automatically from live analytics. No more export-paste-format.' },
                { icon: 'Shield' as const, stat: 'Every brand stays distinct', body: 'Brand Brain keeps each client\'s identity, tone, products, and rules isolated — AI never cross-contaminates.' },
              ].map((item, i) => (
                <div key={item.stat} className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''} card-lift bg-ink/80 backdrop-blur-sm p-8 rounded-[20px] border border-[var(--line-strong)]`}>
                  <div className="w-12 h-12 bg-white/10 rounded-[14px] flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-white/60" aria-hidden />
                  </div>
                  <div className="text-white font-semibold mb-2">{item.stat}</div>
                  <p className="text-xs text-white/60">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who it's for ─────────────────────────────────────────────── */}
        <section className="py-section-padding px-5 sm:px-8">
          <div className="max-w-container-max mx-auto">
            <div className="reveal text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow mb-4 block">Built For</span>
              <h2 className="section-title mb-4">
                Agencies that want to grow <span className="opacity-60">without growing the team.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                { title: 'Social Media Agencies', body: 'Running multiple client accounts across Instagram, TikTok, LinkedIn, and Facebook — with a lean team.', icon: 'Globe2' as const },
                { title: 'Performance Marketing Shops', body: 'Managing paid campaigns alongside organic content, with creative production bottlenecks slowing the whole pipeline.', icon: 'ChartGantt' as const },
                { title: 'Ecommerce Brand Studios', body: 'Serving DTC, fashion, and consumer brands that need high-volume content production with brand consistency.', icon: 'Store' as const },
              ].map((item, i) => (
                <div key={item.title} className={`reveal${i > 0 ? ` reveal-delay-${i}` : ''} grain grain-teal p-7 flex flex-col`}>
                  <span className="chip chip-grain w-fit mb-5">
                    <Icon name={item.icon} className="text-[14px]" aria-hidden />
                    {item.title}
                  </span>
                  <p className="text-[14px] leading-relaxed opacity-80">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ───────────────────────────────────────────────── */}
        <FinalCta
          heading="Ready to run your agency on one system? Let's talk about Zaik."
          body="Book a strategy call and we'll walk through how Zaik maps to your agency's workflow — with your clients, your channels, and your team structure."
          secondaryLabel="See All Services"
          secondaryHref="/services"
        />
      </main>
    </>
  );
}
