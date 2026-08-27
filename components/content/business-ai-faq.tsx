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
    <section className="py-section-padding px-gutter bg-surface-container-low border-y border-outline-variant/30" aria-labelledby="business-ai-questions">
      <div className="max-w-container-max mx-auto">
        <div className="reveal max-w-3xl mb-card-gap">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-3">Buying guidance</p>
          <h2 id="business-ai-questions" className="font-headline-lg text-headline-lg text-primary-container mb-4">
            Questions to answer before building an AI system
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            The right starting point is the business function, not the model. These are the questions we use to determine whether an AI system is a sensible intervention.
          </p>
        </div>

        <div className="reveal reveal-delay-1 grid gap-4 md:grid-cols-2">
          {questions.map((item) => (
            <details key={item.question} className="group card-lift rounded-xl border border-outline-variant bg-surface p-6">
              <summary className="cursor-pointer list-none pr-8 font-headline-md text-lg text-primary-container focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
                <span className="inline-flex items-start justify-between gap-4 w-full">
                  {item.question}
                  <span aria-hidden="true" className="text-secondary transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="pt-4 font-body-md text-on-surface-variant leading-7">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="reveal reveal-delay-2 mt-10 flex flex-wrap gap-4">
          <Link href="/process" className="text-secondary hover:text-primary underline underline-offset-4">See how we approach implementation</Link>
          <Link href="/contact" className="text-secondary hover:text-primary underline underline-offset-4">Discuss a workflow</Link>
        </div>
      </div>
    </section>
  );
}
