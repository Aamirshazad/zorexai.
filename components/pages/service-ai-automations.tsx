import { Icon, type IconName } from '@/components/ui/icon';
import { FinalCta } from '@/components/content/final-cta';
import { SubPageHero } from '@/components/content/sub-page-hero';

const examine: { icon: IconName; title: string; body: string }[] = [
  { icon: 'Users', title: 'People', body: 'Who performs the work, who makes the decisions, and who approves actions.' },
  { icon: 'Workflow', title: 'Processes', body: 'What happens from beginning to end, and where the work slows down.' },
  { icon: 'Database', title: 'Information', body: 'What information is needed, and where it actually lives.' },
  { icon: 'TriangleAlert', title: 'Exceptions', body: 'What happens when the normal process breaks.' },
  { icon: 'TrendingUp', title: 'Business outcomes', body: 'What would materially improve if this process worked better.' },
];

const value: { icon: IconName; title: string; body: string }[] = [
  { icon: 'Workflow', title: 'Operations', body: 'We work directly with operational teams to identify repetitive processes that AI can handle.' },
  { icon: 'Headphones', title: 'Customer experience', body: 'We find where AI can reduce response time and improve service workflows.' },
  { icon: 'TrendingUp', title: 'Sales', body: 'We work with revenue teams to remove administrative work around lead management, research and follow-up.' },
  { icon: 'BookOpen', title: 'Knowledge work', body: 'We identify information-heavy tasks where AI can reduce research and preparation time.' },
  { icon: 'ClipboardCheck', title: 'Administration', body: 'We find repetitive workflows that consume employee time and redesign them around AI.' },
  { icon: 'Network', title: 'Complex processes', body: 'When a process crosses multiple teams or systems, we understand the complete workflow rather than optimising one part.' },
];

const loop: { n: string; title: string; body: string }[] = [
  { n: '01', title: 'Understand', body: 'Work alongside the team and map how the work is really done.' },
  { n: '02', title: 'Build', body: 'Build AI around the actual operation, not the written process.' },
  { n: '03', title: 'Deploy', body: 'Put it into the live workflow with appropriate controls.' },
  { n: '04', title: 'Observe', body: 'Watch real usage and learn what planning could not reveal.' },
  { n: '05', title: 'Improve', body: 'Improve performance from the behaviour you actually see.' },
  { n: '06', title: 'Expand', body: 'Extend the capability into related work as confidence grows.' },
];

const outcome: { title: string; body: string }[] = [
  { title: 'AI designed around your operation', body: 'Not a generic solution forced into an existing workflow.' },
  { title: 'Faster implementation', body: 'Move from an AI idea toward a working business process.' },
  { title: 'Less risk', body: 'Learn from real usage instead of deciding everything before deployment.' },
  { title: 'Better employee adoption', body: 'Employees help shape the system around their actual work.' },
  { title: 'Continuous improvement', body: 'The system evolves as your organisation learns.' },
  { title: 'A long-term AI partner', body: 'More than a one-time delivery: an ongoing capability for finding and implementing AI opportunities.' },
];

export default function PageContent() {
  return (
    <main className="font-ui bg-page-wash">
      <SubPageHero
        eyebrow="Deep Dive"
        icon="Sparkles"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Forward-Deployed AI' }]}
        title="Forward-Deployed AI Services"
        body="We bring AI into the real operation of your business. The process written in a document is rarely the process people actually follow. We work alongside your teams to find where AI fits, build it around your real workflows, deploy it, and keep improving it."
        stats={[{ value: 'Forward-deployed', label: 'Delivery model' }, { value: 'Build → Deploy → Learn', label: 'Continuous improvement' }, { value: 'Beyond delivery', label: 'An ongoing capability' }]}
        image={{ src: '/services/forward-deployed.jpg', alt: 'Forward-deployed technical team collaborating inside client operations' }}
      />

      {/* ── Why forward-deployed ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 bg-page-wash border-y border-[var(--line)]">
        <div className="max-w-3xl mx-auto">
          <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">Why Forward-Deployed</span>
          <h2 className="mc-title text-ink mb-6">Every business has its own way of working.</h2>
          <p className="lede text-ink-2 mb-6">The process written in a document is rarely the process people actually follow.</p>
          <p className="text-ink-2 mb-4">There are exceptions, workarounds and undocumented decisions. There are systems that don&apos;t communicate. And there are important details that only become visible when you work alongside the people doing the job.</p>
          <p className="text-ink-2 mb-6">That&apos;s why we take a forward-deployed approach: we work directly with your business to identify opportunities, build AI around your actual operation, deploy it into the workflow, and continuously improve it.</p>

          <div className="bg-panel border border-[var(--line)] rounded-[20px] p-6 mt-8">
            <p className="text-xs text-ink-2 uppercase tracking-widest mb-5">From AI idea to business outcome</p>
            <p className="text-ink-2 text-sm mb-4">Many companies know they want to use AI. The difficult question is where it should actually take responsibility.</p>
            <ul className="space-y-2 text-sm text-ink-2">
              {['What problem are we solving?', 'Where does the process begin?', 'What information is needed?', 'What should AI handle?', 'What should people handle?', 'What happens when something goes wrong?', 'How will we measure success?'].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <Icon name="ChevronRight" className="mt-0.5 size-4 shrink-0 text-ink-3" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink-2 mt-5 text-sm italic border-l-4 border-[var(--line-strong)] pl-4">We answer these questions by working close to the business, not from a distance.</p>
          </div>
        </div>
      </section>

      {/* ── We start inside the workflow ──────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">We Start Inside the Workflow</span>
            <h2 className="mc-title text-ink mb-4">Before building, we understand how the work is actually done.</h2>
            <p className="text-ink-2">That lets us build AI around real business needs rather than assumptions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examine.map((item) => (
              <div key={item.title} className="card-lift bg-panel p-8 rounded-[20px] border border-[var(--line)]">
                <div className="w-10 h-10 bg-panel-2 text-ink rounded-[14px] flex items-center justify-center mb-4">
                  <Icon name={item.icon} className="text-lg" aria-hidden />
                </div>
                <h3 className="font-ui text-lg text-ink mb-3">{item.title}</h3>
                <p className="text-sm text-ink-2">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where forward deployment creates value ────────────────────── */}
      <section className="py-16 sm:py-20 px-6 bg-page-wash border-y border-[var(--line)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">Where Forward Deployment Creates Value</span>
            <h2 className="mc-title text-ink mb-4">Close to the work, so the system fits it.</h2>
            <p className="text-ink-2">We start where the friction is highest and the outcome is clearest.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {value.map((item) => (
              <div key={item.title} className="card-lift bg-panel p-8 rounded-[20px] border border-[var(--line)]">
                <div className="w-10 h-10 bg-panel-2 text-ink rounded-[14px] flex items-center justify-center mb-4">
                  <Icon name={item.icon} className="text-lg" aria-hidden />
                </div>
                <h3 className="font-ui text-lg text-ink mb-3">{item.title}</h3>
                <p className="text-sm text-ink-2">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Build → Deploy → Learn → Improve ──────────────────────────── */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">Build → Deploy → Learn → Improve</span>
            <h2 className="mc-title text-ink mb-4">The first version doesn&apos;t have to be the final version.</h2>
            <p className="text-ink-2">Real usage reveals what planning cannot: employees discover better workflows, customers behave unexpectedly, requirements change, and new opportunities appear.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {loop.map((step) => (
              <div key={step.n} className="reveal bg-panel rounded-[20px] border border-[var(--line)] p-6">
                <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">{step.n}</span>
                <h3 className="font-ui text-lg text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ink-2">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-panel rounded-[20px] border border-[var(--line)] p-6">
              <p className="text-xs text-ink-2 uppercase tracking-widest mb-4">We don&apos;t just deliver software</p>
              <p className="text-sm text-ink-2 mb-3">Traditional projects follow requirements, development and delivery. AI work needs more: the system has to learn how the business actually operates, employees need to adopt it, the workflow may change, and performance needs continuous evaluation.</p>
              <p className="text-sm text-ink-2">Our role extends beyond development, from &ldquo;we built an AI system&rdquo; to &ldquo;AI now helps us operate this part of the business.&rdquo;</p>
            </div>
            <div className="bg-panel rounded-[20px] border border-[var(--line)] p-6">
              <p className="text-xs text-ink-2 uppercase tracking-widest mb-4">Human + AI operations</p>
              <p className="text-sm text-ink-2 mb-3">The goal isn&apos;t to automate everything. It is to assign the right work to the right participant. AI is well suited to:</p>
              <ul className="space-y-2 text-sm text-ink-2">
                {['Gathering information', 'Processing repetitive requests', 'Research', 'Classification', 'Preparation', 'Routine actions', 'Monitoring workflows'].map((item) => (
                  <li key={item} className="flex items-start gap-2"><Icon name="CircleCheck" className="mt-0.5 size-4 shrink-0 text-ink-3" aria-hidden /><span>{item}</span></li>
                ))}
              </ul>
              <p className="text-sm text-ink-2 mt-4">People remain essential for judgment, approvals, exceptions, relationships and strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What your business gets ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 bg-ink text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="reveal text-center mb-12">
            <span className="inline-block bg-panel-2 text-ink-2 px-4 py-2 rounded-full uppercase tracking-widest mb-5">What Your Business Gets</span>
            <h2 className="font-ui text-3xl md:text-4xl text-white mb-4">An AI capability that improves with use</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Forward deployment matters most when your processes are unique, several systems are involved, and requirements are still evolving.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcome.map((item) => (
              <div key={item.title} className="card-lift bg-ink/80 p-7 rounded-[20px] border border-[var(--line-strong)]/20">
                <h3 className="font-ui text-xl text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        heading="From your business to an AI-powered business process."
        body="We work alongside your team to find where AI can take responsibility, where people should stay involved, and how both operate together. We don't just build AI and hand it over, we help make it part of how your business works."
      />
    </main>
  );
}
