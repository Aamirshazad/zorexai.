/**
 * Question-and-answer content, in one place.
 *
 * Two sets, kept separate because they do different jobs:
 *
 *   `generalFaq`     the /faq page. Broad questions a first-time visitor asks
 *                    before contacting anyone. Full answers, 40-80 words, each
 *                    self-contained so an answer engine can lift one in isolation.
 *   `buyingFaq`      the "buying guidance" block on /services. Questions asked
 *                    further down the funnel, after someone has decided the
 *                    category makes sense.
 *
 * The two sets share no questions on purpose. Duplicating a question across
 * pages dilutes it: one page owns one answer.
 *
 * Every answer is written to stand alone, with the subject named in the first
 * sentence. That is what answer engines extract; an answer that begins "We
 * recommend..." cannot be lifted without its question attached.
 */

export type Faq = {
  question: string;
  answer: string;
};

export const generalFaq: Faq[] = [
  {
    question: 'What does Zorex AI build?',
    answer:
      'Zorex AI builds AI systems for business functions, not chat interfaces. A system reads the request, retrieves context from the records that already exist, takes a defined action inside your tools, and hands back anything it should not decide on its own. Typical shapes are agentic systems that carry a whole workflow, AI integrated into a CRM or ERP, and industry-specific systems for healthcare, logistics, or finance.',
  },
  {
    question: 'Do you work with companies outside the industries you list?',
    answer:
      'Yes. The nine industry pages are the sectors where we have already built and where the domain vocabulary and compliance rules are well understood. The process is the same elsewhere: map the workflow, design the system around it, and confirm the constraints before anything is built.',
  },
  {
    question: 'How much does an AI system cost?',
    answer:
      'Pricing is set after a discovery call, because cost follows scope rather than the other way round. Engagements generally run from a two to four week focused improvement sprint to a four to eight week full system deployment, plus an optional ongoing retainer. You receive a written scope with deliverables, sequence, timeline, and price before any build starts.',
  },
  {
    question: 'How long does a build take?',
    answer:
      'A single automation or integration typically takes two to four weeks. A full system deployment across several systems, with training and handoff, typically takes four to eight weeks. Both start with an audit, and the system is validated against real work before it is rolled out to your team.',
  },
  {
    question: 'What happens when the system gets something wrong?',
    answer:
      'The system is designed so that being wrong is cheap. Actions outside a defined boundary are escalated to a person with the context already gathered, high-risk actions require approval, and every decision is logged with the sources it used. Rollout is staged behind human review first, so an error surfaces as a flagged case rather than a broken process.',
  },
  {
    question: 'Can you work with our existing CRM, ERP, and support desk?',
    answer:
      'Yes, and that is the point. We work against your systems as they are, including the parts that are messier than the documentation suggests. Integration boundaries, permissions, validation, and escalation paths are defined during design rather than added after launch, so nothing has to be ripped out or re-keyed.',
  },
  {
    question: 'How do we start working with Zorex AI?',
    answer:
      'Start with a strategy call. You bring the workflow that is costing you the most, roughly how often it happens, and who does it today. We map where the friction is, tell you honestly whether an AI system is the right intervention, and if it is, follow with a written scope you can take to your team.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      'Yes, before any technical discovery, as standard practice. Workflows usually reveal more about a business than a feature list does, so the discovery conversation is treated as confidential and the data-retention and handling decisions are agreed in writing for each project.',
  },
];

export const buyingFaq: Faq[] = [
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