import { Icon, type IconName } from '@/components/ui/icon';
import { FinalCta } from '@/components/content/final-cta';
import { SubPageHero } from '@/components/content/sub-page-hero';

const build: { icon: IconName; title: string; body: string }[] = [
  { icon: 'Brain', title: 'Industry AI Assistants', body: 'AI designed around the specific information and workflows of your industry.' },
  { icon: 'Bot', title: 'Industry AI Agents', body: 'Agents that perform specialised business tasks rather than simply answer questions.' },
  { icon: 'Workflow', title: 'AI Operations Systems', body: 'Connected AI capabilities designed around complete business workflows.' },
  { icon: 'Database', title: 'Industry Knowledge Systems', body: 'AI that works with specialised organisational and industry knowledge.' },
  { icon: 'ChartNoAxesCombined', title: 'AI Decision Support', body: 'Systems that help teams analyse information and prepare decisions while judgment stays with people.' },
  { icon: 'Layers3', title: 'Vertical AI Platforms', body: 'Larger systems that bring multiple AI capabilities together around one industry or business model.' },
];

const industries: { icon: IconName; title: string; body: string }[] = [
  { icon: 'Landmark', title: 'Financial Services', body: 'Customer operations, research, document-heavy processes, internal knowledge and operational workflows.' },
  { icon: 'Stethoscope', title: 'Healthcare', body: 'Administrative and information-heavy processes, with professional judgment and sensitive decisions kept under human control.' },
  { icon: 'Gavel', title: 'Legal', body: 'Document workflows, research, knowledge management, matter preparation and repetitive operational work.' },
  { icon: 'Building2', title: 'Real Estate', body: 'Property information, lead management, customer communication, document processing and transaction workflows.' },
  { icon: 'Truck', title: 'Logistics', body: 'Order workflows, supplier communication, operational coordination, research and exception handling.' },
  { icon: 'BriefcaseBusiness', title: 'Professional Services', body: 'Research, document workflows, client operations, internal knowledge and repetitive administrative work.' },
];

const stages: { n: string; title: string; body: string }[] = [
  { n: 'Stage 1', title: 'One valuable workflow', body: 'Start with a process where AI can create measurable value.' },
  { n: 'Stage 2', title: 'Expand into related work', body: 'Add further AI capabilities around the same business area.' },
  { n: 'Stage 3', title: 'Connect the workflows', body: 'Let capabilities share appropriate information and coordinate processes.' },
  { n: 'Stage 4', title: 'Build the AI operating layer', body: 'The organisation now has an AI system supporting multiple parts of the operation.' },
];

const outcome: { title: string; body: string }[] = [
  { title: 'Industry-specific AI', body: 'A system designed around your business domain rather than a generic use case.' },
  { title: 'Faster operations', body: 'Reduce unnecessary manual work across specialised workflows.' },
  { title: 'Better access to knowledge', body: 'Make important information easier for employees to use.' },
  { title: 'More consistent processes', body: 'Create repeatable workflows around routine work.' },
  { title: 'Greater operational capacity', body: 'Handle more work without adding administrative effort at the same rate.' },
  { title: 'A scalable foundation', body: 'Start with one process and expand into a larger AI system over time.' },
];

export default function PageContent() {
  return (
    <main className="font-ui bg-page-wash">
      <SubPageHero
        eyebrow="Deep Dive"
        icon="Sparkles"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'AI Vertical System Development' }]}
        title="AI Vertical System Development"
        body="Purpose-built AI systems for the way your industry actually works. General-purpose AI can do many things, but businesses don't operate in generalities. We build AI around your industry's processes, terminology, regulations and operational patterns."
        stats={[{ value: 'Industry-specific', label: 'By design' }, { value: 'Purpose-built', label: 'Workflows' }, { value: 'Scalable', label: 'Foundation' }]}
        image={{ src: '/services/vertical-ai.jpg', alt: 'Executive directors reviewing compliance risk engine and sector decision support' }}
      />

      {/* ── Why vertical ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 bg-page-wash border-y border-[var(--line)]">
        <div className="max-w-3xl mx-auto">
          <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">Why Vertical</span>
          <h2 className="mc-title text-ink mb-6">General AI can answer a question. A vertical system understands why it matters.</h2>
          <p className="lede text-ink-2 mb-6">Every industry has its own processes, terminology, knowledge, regulations, decisions, documents, customer expectations and operational patterns.</p>
          <p className="text-ink-2 mb-4">A general AI system can answer a question. A vertical AI system understands why that question matters inside a particular business context, and what to do about it.</p>
          <p className="text-ink-2 mb-6">We develop purpose-built AI systems designed around a particular industry and its workflows, instead of adding a generic assistant to your business.</p>

          <div className="bg-panel border border-[var(--line)] rounded-[20px] p-6 mt-8">
            <p className="text-xs text-ink-2 uppercase tracking-widest mb-5">For example</p>
            <ul className="space-y-3 text-sm text-ink-2">
              {['A real estate business may need AI that understands properties, listings, leads, documents and transactions.', 'A logistics company may need AI that understands orders, suppliers, shipments and operational exceptions.', 'A legal organisation may need AI around documents, research, matters and client workflows.', 'A financial organisation may need AI around customer operations, financial information and business processes.'].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <Icon name="ChevronRight" className="mt-0.5 size-4 shrink-0 text-ink-3" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink-2 mt-5 text-sm italic border-l-4 border-[var(--line-strong)] pl-4">The AI becomes more useful because it is designed around the work of the industry.</p>
          </div>
        </div>
      </section>

      {/* ── What we build ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">What We Build</span>
            <h2 className="mc-title text-ink mb-4">From a single capability to a vertical AI platform.</h2>
            <p className="text-ink-2">Your industry knowledge and your business rules become part of the system, so it operates with the context your work requires.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {build.map((item) => (
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

      {/* ── Examples across industries ────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 bg-page-wash border-y border-[var(--line)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">Examples Across Industries</span>
            <h2 className="mc-title text-ink mb-4">Built around the work, not around the model.</h2>
            <p className="text-ink-2">The principle is the same in every sector: the exceptions are the job, and they differ by industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((item) => (
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

      {/* ── From one use case to a vertical AI system ─────────────────── */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">From One Use Case to a Vertical AI System</span>
            <h2 className="mc-title text-ink mb-4">A progressive path, not a big-bang platform.</h2>
            <p className="text-ink-2">Not every business needs to begin with a large AI platform. Starting small and expanding is usually the better route.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stages.map((stage) => (
              <div key={stage.n} className="reveal bg-panel rounded-[20px] border border-[var(--line)] p-6">
                <span className="text-ink-2 tracking-widest uppercase block mb-3 text-xs">{stage.n}</span>
                <h3 className="font-ui text-lg text-ink mb-2">{stage.title}</h3>
                <p className="text-sm text-ink-2">{stage.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-ink-2 mt-8 text-sm">AI feature &rarr; AI workflow &rarr; AI capability &rarr; AI system &rarr; vertical AI platform</p>
        </div>
      </section>

      {/* ── What your business gets ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-6 bg-ink text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="reveal text-center mb-12">
            <span className="inline-block bg-panel-2 text-ink-2 px-4 py-2 rounded-full uppercase tracking-widest mb-5">What Your Business Gets</span>
            <h2 className="font-ui text-3xl md:text-4xl text-white mb-4">A purpose-built system for your industry</h2>
            <p className="text-white/60 max-w-2xl mx-auto">We combine industry knowledge, business processes and modern AI capability into a system that can become part of how your organisation operates.</p>
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
        heading="Build the AI system your industry needs."
        body="The future of enterprise AI isn't simply about more powerful models. It is about turning those capabilities into systems that understand a business, its industry and its workflows."
      />
    </main>
  );
}
