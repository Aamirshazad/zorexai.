import Link from 'next/link';

const questions = [
  {
    question: 'What business processes are good candidates for an AI system?',
    answer:
      'The strongest candidates are repeatable processes with meaningful manual effort, clear business context, multiple steps, or frequent exceptions. Start with the workflow and its economics rather than the AI technology.',
  },
  {
    question: 'Should every workflow use an AI agent?',
    answer:
      'No. Deterministic automation is often the better choice when the rules are stable and predictable. Agentic systems become useful when the workflow requires interpretation, decisions, tool use, or controlled exception handling.',
  },
  {
    question: 'How does Zorex AI approach implementation?',
    answer:
      'Zorex starts with the business function, maps the current workflow and bottlenecks, identifies the highest-value intervention, then designs and deploys a system around the existing operating environment.',
  },
  {
    question: 'How should an AI system interact with existing business software?',
    answer:
      'The system should work with the business tools that already contain relevant context and records. Integration boundaries, permissions, validation, and human escalation should be defined as part of the design rather than added later.',
  },
  {
    question: 'How do you decide whether an AI system is worth building?',
    answer:
      'Evaluate the process volume, manual effort, error cost, response time, operational bottlenecks, scalability constraints, and the value of the resulting business capacity. The goal is to improve the economics of a business function, not to add AI for its own sake.',
  },
  {
    question: 'What does human oversight look like?',
    answer:
      'Human oversight can be applied at approval points, exceptions, high-risk actions, or uncertain decisions. A mature system defines these boundaries explicitly rather than assuming complete autonomy is always desirable.',
  },
];

export function BusinessAIFAQ() {
  return (
    <section className="py-section-padding px-5 sm:px-8" aria-labelledby="business-ai-questions">
      <div className="max-w-container-max mx-auto">
        <div className="reveal max-w-3xl mb-10">
          <p className="eyebrow mb-3">Buying guidance</p>
          <h2 id="business-ai-questions" className="section-title mb-4">
            Questions to answer before building an AI system
          </h2>
          <p className="body-ink">
            The right starting point is the business function, not the model. These are the questions we use to determine whether an AI system is a sensible intervention.
          </p>
        </div>

        <div className="reveal reveal-delay-1 grid gap-4 md:grid-cols-2">
          {questions.map((item) => (
            <details key={item.question} className="group rounded-[20px] border border-[var(--line)] bg-panel p-6 transition-colors hover:border-[var(--line-strong)]">
              <summary className="cursor-pointer list-none pr-8 font-medium text-[15.5px] leading-snug text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                <span className="inline-flex items-start justify-between gap-4 w-full">
                  {item.question}
                  <span aria-hidden="true" className="text-ink-3 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="pt-4 mc-body">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="reveal reveal-delay-2 mt-10 flex flex-wrap gap-4">
          <Link href="/process" className="text-sm font-medium text-ink border-b border-[var(--line-strong)] pb-0.5 hover:border-ink transition-colors">See how we approach implementation</Link>
          <Link href="/contact" className="text-sm font-medium text-ink border-b border-[var(--line-strong)] pb-0.5 hover:border-ink transition-colors">Discuss a workflow</Link>
        </div>
      </div>
    </section>
  );
}
