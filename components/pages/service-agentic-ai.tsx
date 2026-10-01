import { Icon, type IconName } from '@/components/ui/icon';
import { FinalCta } from '@/components/content/final-cta';
import { SubPageHero } from '@/components/content/sub-page-hero';

const build: { icon: IconName; title: string; body: string; tags: string[] }[] = [
  {
    icon: 'Headphones',
    title: 'Customer Service Agents',
    body: 'Agents that handle a customer request from beginning to end: understand the question, find the information, prepare a response, complete routine requests, and escalate what needs a person.',
    tags: ['Faster response', 'Consistent service', '24/7 availability'],
  },
  {
    icon: 'TrendingUp',
    title: 'Sales Agents',
    body: 'Agents that support the path from incoming lead to qualified opportunity: research the prospect, organise the information, prepare account summaries, and keep follow-up moving.',
    tags: ['Less admin', 'More conversations'],
  },
  {
    icon: 'Search',
    title: 'Research Agents',
    body: 'Agents that investigate a subject instead of answering a question: gather from approved sources, compare findings, and produce structured output your team can use.',
    tags: ['Market research', 'Competitor research', 'Report preparation'],
  },
  {
    icon: 'Workflow',
    title: 'Operations Agents',
    body: 'Agents built around repetitive operational work: process requests, coordinate tasks, prepare information, flag missing details, and move routine workflows forward.',
    tags: ['Less coordination', 'Repeatable execution'],
  },
  {
    icon: 'FileText',
    title: 'Document & Knowledge Agents',
    body: 'Agents that work with the information buried in documents, policies, reports and email so employees can find, understand and use it in the context of the task.',
    tags: ['Context-aware', 'Grounded in your sources'],
  },
  {
    icon: 'Monitor',
    title: 'Computer-Using Agents',
    body: 'Where a process still runs through existing software interfaces, agents can work with those applications directly when a traditional integration is unavailable or impractical.',
    tags: ['Permissions scoped', 'Human approval points'],
  },
];

const steps: { n: string; title: string; body: string }[] = [
  { n: '01', title: 'Identify the work', body: 'We find the processes where AI can create measurable value.' },
  { n: '02', title: 'Design the agent', body: 'We define its responsibilities, its boundaries, and where people hand off.' },
  { n: '03', title: 'Build the workflow', body: 'We connect the agent to the information and business tools it needs.' },
  { n: '04', title: 'Test real scenarios', body: 'We test normal cases, unusual cases, and the situations where the agent should stop.' },
  { n: '05', title: 'Launch', body: 'We introduce the agent into the real workflow with appropriate controls.' },
  { n: '06', title: 'Improve', body: 'We keep improving performance from actual business usage.' },
];

const outcome: { title: string; body: string }[] = [
  { title: 'More work completed', body: 'Increase operational capacity without increasing manual work at the same rate.' },
  { title: 'Faster processes', body: 'Move routine work continuously instead of waiting for every step to be done by hand.' },
  { title: 'Lower repetitive workload', body: 'Reduce the administrative tasks that consume employee time.' },
  { title: 'Consistent execution', body: 'Give routine processes a repeatable way of operating.' },
  { title: '24/7 capability', body: 'Agents can continue processing appropriate work outside normal working hours.' },
  { title: 'A capability that expands', body: 'Start with one valuable workflow and extend into more processes as confidence grows.' },
];

export default function PageContent() {
  return (
    <main className="font-ui bg-page-wash">
      <SubPageHero
        eyebrow="Deep Dive"
        icon="Sparkles"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'AI Agent Development' }]}
        title="AI Agent Development Services"
        body="AI agents that move work forward, not just answer questions. We build agents that understand an objective, work through the steps required to reach it, use your information and tools, complete routine tasks, and involve people when judgment is required."
        stats={[{ value: 'Multi-step', label: 'Execution' }, { value: 'Human-in-the-loop', label: 'By design' }, { value: '24/7', label: 'Operation' }]}
        image={{ src: '/services/agentic-ai.jpg', alt: 'Operations team collaborating on multi-step AI agent workflow execution' }}
      />

      {/* ── The shift: why agents ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 bg-page-wash border-y border-[var(--line)]">
        <div className="max-w-3xl mx-auto">
          <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">Why Agents</span>
          <h2 className="mc-title text-ink mb-6">Businesses don&apos;t need more chat windows. They need work completed faster.</h2>
          <p className="lede text-ink-2 mb-6">An agent can take a business objective, work through the steps required to reach it, and return a finished outcome instead of another answer to read.</p>
          <p className="text-ink-2 mb-4">We build AI agents that can understand a business objective, work through multiple steps, use the information and tools available to them, complete routine tasks, and involve people when judgment or approval is required.</p>
          <p className="text-ink-2 mb-6">From customer operations and sales to research, administration and internal workflows, we turn repetitive work into intelligent, continuously running processes.</p>

          <div className="bg-panel border border-[var(--line)] rounded-[20px] p-6 mt-8">
            <p className="text-xs text-ink-2 uppercase tracking-widest mb-5">From AI assistance to AI execution</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-[14px] border border-[var(--line)] bg-panel-2/40 p-5">
                <span className="text-[10px] uppercase tracking-wider text-ink-2 block mb-3">Traditional AI</span>
                <p className="font-ui text-ink">Ask &rarr; Answer</p>
              </div>
              <div className="rounded-[14px] border border-[var(--line-strong)] bg-panel-2/40 p-5">
                <span className="text-[10px] uppercase tracking-wider text-ink-2 block mb-3">Business agents</span>
                <p className="font-ui text-ink">Understand &rarr; Plan &rarr; Act &rarr; Check &rarr; Continue</p>
              </div>
            </div>
            <p className="text-xs text-ink-2 uppercase tracking-widest mt-7 mb-4">For example, instead of manually processing a request</p>
            <ol className="space-y-2 text-sm text-ink-2">
              {['Understand the request', 'Find the customer information', 'Review the relevant business information', 'Determine the appropriate next step', 'Prepare or perform the action', 'Update the relevant record', 'Notify the customer or employee', 'Escalate when human judgment is required'].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <Icon name="ChevronRight" className="mt-0.5 size-4 shrink-0 text-ink-3" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ol>
            <p className="text-ink-2 mt-5 text-sm italic border-l-4 border-[var(--line-strong)] pl-4">The business gets a completed workflow rather than another AI-generated answer.</p>
          </div>
        </div>
      </section>

      {/* ── What we build ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">What We Build</span>
            <h2 className="mc-title text-ink mb-4">Agents for the work that consumes your team.</h2>
            <p className="text-ink-2">Each agent is designed around a real process, with the boundaries, controls and handoffs that process needs.</p>
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

      {/* ── Approach + human control ──────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 bg-page-wash border-y border-[var(--line)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">Our Approach</span>
            <h2 className="mc-title text-ink mb-4">Designed around your business, not around a model.</h2>
            <p className="text-ink-2">We don&apos;t build generic agents and expect your business to adapt to them. We start with the work: what needs to be accomplished, what information is required, which decisions can be automated, and where people stay involved.</p>
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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-panel rounded-[20px] border border-[var(--line)] p-6">
              <p className="text-xs text-ink-2 uppercase tracking-widest mb-4">AI handles</p>
              <ul className="space-y-2 text-sm text-ink-2">
                {['Research', 'Information gathering', 'Routine processing', 'Classification', 'Preparation', 'Standard actions'].map((item) => (
                  <li key={item} className="flex items-start gap-2"><Icon name="CircleCheck" className="mt-0.5 size-4 shrink-0 text-ink-3" aria-hidden /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-panel rounded-[20px] border border-[var(--line)] p-6">
              <p className="text-xs text-ink-2 uppercase tracking-widest mb-4">People handle</p>
              <ul className="space-y-2 text-sm text-ink-2">
                {['Approvals', 'Exceptions', 'Sensitive decisions', 'Relationships', 'Strategic judgment'].map((item) => (
                  <li key={item} className="flex items-start gap-2"><Icon name="CircleCheck" className="mt-0.5 size-4 shrink-0 text-ink-3" aria-hidden /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-ink-2 mt-6 text-sm max-w-2xl mx-auto">Automation doesn&apos;t mean removing people from every decision. The strongest workflows combine AI execution with human judgment.</p>
        </div>
      </section>

      {/* ── What your business gets ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 bg-ink text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="reveal text-center mb-12">
            <span className="inline-block bg-panel-2 text-ink-2 px-4 py-2 rounded-full uppercase tracking-widest mb-5">What Your Business Gets</span>
            <h2 className="font-ui text-3xl md:text-4xl text-white mb-4">A capability, not a one-off answer</h2>
            <p className="text-white/60 max-w-2xl mx-auto">The measures depend on the function being improved, but the direction stays the same.</p>
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
        heading="Build AI that does more than respond."
        body="Your employees shouldn't have to ask AI to do every individual step. We build agents that take responsibility for appropriate parts of the workflow, and move your business from AI assistance to AI execution."
      />
    </main>
  );
}
