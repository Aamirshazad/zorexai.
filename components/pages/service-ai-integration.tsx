import { Icon, type IconName } from '@/components/ui/icon';
import { FinalCta } from '@/components/content/final-cta';
import { SubPageHero } from '@/components/content/sub-page-hero';

const build: { icon: IconName; title: string; body: string; tags: string[] }[] = [
  {
    icon: 'Headphones',
    title: 'Customer Operations',
    body: 'Connect AI with the systems your customer teams already use. It can read customer history, process requests, prepare responses, and keep customer workflows moving.',
    tags: ['Faster service', 'Less admin'],
  },
  {
    icon: 'TrendingUp',
    title: 'Sales Operations',
    body: 'Bring AI into the sales workflow: organise prospect information, prepare research, support qualification, and keep follow-up processes moving.',
    tags: ['More time selling'],
  },
  {
    icon: 'Workflow',
    title: 'Internal Operations',
    body: 'Connect AI to everyday business processes such as requests, approvals, reporting, administrative tasks and internal coordination.',
    tags: ['Fewer handoffs'],
  },
  {
    icon: 'BookOpen',
    title: 'Business Knowledge',
    body: 'Connect AI with your organisation&apos;s information so employees can reach relevant knowledge through a simpler workflow than searching several locations.',
    tags: ['Faster access'],
  },
  {
    icon: 'FileText',
    title: 'Documents & Information',
    body: 'Review documents, extract information, categorise requests, prepare summaries and create structured records so information moves into the next stage of the workflow.',
    tags: ['Less manual handling'],
  },
];

const steps: { n: string; title: string; body: string }[] = [
  { n: '01', title: 'Understand your systems', body: 'We map the tools, information and workflows involved.' },
  { n: '02', title: 'Identify the friction', body: 'We find the unnecessary manual steps and repeated work.' },
  { n: '03', title: 'Design the AI workflow', body: 'We decide where AI should understand, prepare, recommend or act.' },
  { n: '04', title: 'Connect the systems', body: 'We make the required information and actions available to the workflow.' },
  { n: '05', title: 'Introduce controls', body: 'Important actions can require human review or approval.' },
  { n: '06', title: 'Measure business impact', body: 'We focus on whether the process is actually getting faster and simpler.' },
];

const outcome: { title: string; body: string }[] = [
  { title: 'Less manual coordination', body: 'Reduce the work people do simply to move information between systems.' },
  { title: 'Faster access to information', body: 'Give employees the relevant information when they need it.' },
  { title: 'Better use of existing software', body: 'Add AI capability without automatically replacing the systems you run.' },
  { title: 'Faster customer operations', body: 'Help teams process requests more efficiently.' },
  { title: 'Reduced administrative work', body: 'Automate repetitive information handling.' },
  { title: 'A connected AI environment', body: 'Create a foundation that allows further AI capability to be added over time.' },
];

export default function PageContent() {
  return (
    <main className="font-ui bg-page-wash">
      <SubPageHero
        eyebrow="Deep Dive"
        icon="Sparkles"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'AI Integration' }]}
        title="AI Integration Services"
        body="Connect AI to the systems your business already depends on. You already have software, data, documents and workflows. The opportunity is making them work better together, so information moves with less manual intervention."
        stats={[{ value: 'Existing stack', label: 'No rip-and-replace' }, { value: 'Context-aware', label: 'Workflows' }, { value: 'Controlled', label: 'Actions' }]}
        image={{ src: '/services/ai-integration.jpg', alt: 'Business systems architects reviewing enterprise AI integration hub' }}
      />

      {/* ── Why integration ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 bg-page-wash border-y border-[var(--line)]">
        <div className="max-w-3xl mx-auto">
          <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">Why Integration</span>
          <h2 className="mc-title text-ink mb-6">AI should fit into your business, not create another layer of work.</h2>
          <p className="lede text-ink-2 mb-6">You already have the software, the data, the documents and the workflows. The problem isn&apos;t that you need another application.</p>
          <p className="text-ink-2 mb-4">We integrate AI into the environment you already run so information moves more efficiently, employees get answers and actions faster, and repetitive processes happen with less manual intervention.</p>
          <p className="text-ink-2 mb-6">Today the employee is the connection between systems: check one system, then another, copy information, send an email, update a record, check a document, create a report, and repeat. We use AI to reduce that burden.</p>

          <div className="bg-panel border border-[var(--line)] rounded-[20px] p-6 mt-8">
            <p className="text-xs text-ink-2 uppercase tracking-widest mb-5">A connected workflow looks more like this</p>
            <ol className="space-y-2 text-sm text-ink-2">
              {['A request arrives', 'AI understands it', 'Finds the relevant information', 'Checks the appropriate systems', 'Prepares the next action', 'Updates the right place', 'Notifies the right person', 'Records the result'].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <Icon name="ChevronRight" className="mt-0.5 size-4 shrink-0 text-ink-3" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ol>
            <p className="text-ink-2 mt-5 text-sm italic border-l-4 border-[var(--line-strong)] pl-4">The technology stays in the background. The employee sees a simpler workflow.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            <div className="bg-panel rounded-[20px] border border-[var(--line)] p-6">
              <p className="text-xs text-ink-2 uppercase tracking-widest mb-4">Integration without disruption</p>
              <p className="text-sm text-ink-2">In many cases the better approach is an intelligent layer around your existing systems. They keep doing what they are good at; AI connects the information and workflows around them. That lets you introduce AI progressively instead of attempting a complete replacement.</p>
            </div>
            <div className="bg-panel rounded-[20px] border border-[var(--line)] p-6">
              <p className="text-xs text-ink-2 uppercase tracking-widest mb-4">AI that understands context</p>
              <p className="text-sm text-ink-2 mb-3">Connecting AI to a system isn&apos;t enough. A request may look simple, but the right response can depend on:</p>
              <ul className="space-y-2 text-sm text-ink-2">
                {['Customer history', 'Current account status', 'Previous requests', 'Company policy', 'Available products', 'Current business conditions'].map((item) => (
                  <li key={item} className="flex items-start gap-2"><Icon name="CircleCheck" className="mt-0.5 size-4 shrink-0 text-ink-3" aria-hidden /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where we integrate AI ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">Where We Integrate AI</span>
            <h2 className="mc-title text-ink mb-4">Across the operations you already run.</h2>
            <p className="text-ink-2">The next generation of business AI is designed to work across multiple tools rather than operate as an isolated assistant.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {build.map((item) => (
              <div key={item.title} className="card-lift bg-panel p-8 rounded-[20px] border border-[var(--line)] flex flex-col">
                <div className="w-10 h-10 bg-panel-2 text-ink rounded-[14px] flex items-center justify-center mb-4">
                  <Icon name={item.icon} className="text-lg" aria-hidden />
                </div>
                <h3 className="font-ui text-lg text-ink mb-3">{item.title}</h3>
                <p className="text-sm text-ink-2 mb-4">{item.body}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-ink-2 bg-panel-2/30 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process + across systems ──────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 bg-page-wash border-y border-[var(--line)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">Our Integration Process</span>
            <h2 className="mc-title text-ink mb-4">From mapped systems to a measured result.</h2>
            <p className="text-ink-2">Controls are built in, and the question we keep asking is whether the process is genuinely getting faster and simpler.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div key={step.n} className="reveal bg-panel rounded-[20px] border border-[var(--line)] p-6">
                <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">{step.n}</span>
                <h3 className="font-ui text-lg text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ink-2">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {['Less switching', 'Less copying', 'Less manual coordination', 'More work completed automatically'].map((line) => (
              <div key={line} className="bg-panel rounded-[20px] border border-[var(--line)] p-6 text-center">
                <p className="font-ui text-ink">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What your business gets ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 bg-ink text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="reveal text-center mb-12">
            <span className="inline-block bg-panel-2 text-ink-2 px-4 py-2 rounded-full uppercase tracking-widest mb-5">What Your Business Gets</span>
            <h2 className="font-ui text-3xl md:text-4xl text-white mb-4">A connected environment, not another tool</h2>
            <p className="text-white/60 max-w-2xl mx-auto">The technology stays behind the workflow. Your team sees the work getting simpler.</p>
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
        heading="Make your existing business smarter."
        body="You don't necessarily need to replace your business systems to benefit from AI. We connect AI to the environment you already have and turn disconnected processes into more intelligent workflows."
      />
    </main>
  );
}
