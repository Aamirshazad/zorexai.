export type AuthorityArticle = {
  route: string;
  takeaway: string;
  questions: string[];
  serviceLinks: { label: string; href: string }[];
  related: { label: string; href: string }[];
};

export const authorityArticles: Record<string, AuthorityArticle> = {
  'blog-agentic-systems': {
    route: 'blog-agentic-systems',
    takeaway:
      'Agentic systems are most useful when a business process contains multiple decisions, tools, exceptions, and a clear business outcome not simply because a workflow can be connected to an LLM.',
    questions: [
      'When is an agentic system more appropriate than rules-based automation?',
      'What should a business automate before introducing autonomous decision-making?',
      'How should human review and escalation fit into an agentic workflow?',
    ],
    serviceLinks: [
      { label: 'Agentic AI Systems', href: '/service-agentic-ai' },
      { label: 'AI Automations', href: '/service-ai-automations' },
    ],
    related: [
      { label: 'Intelligent Process Automation', href: '/blog-intelligent-process' },
      { label: 'Securing Enterprise AI Systems', href: '/blog-llm-security' },
    ],
  },
  'blog-ai-commerce': {
    route: 'blog-ai-commerce',
    takeaway:
      'Commerce automation creates the most value when AI is connected to real operational context orders, policies, inventory, customer history, and escalation rules rather than used as a standalone chat interface.',
    questions: [
      'Which commerce support workflows are good candidates for AI automation?',
      'Where should automated customer decisions stop and human review begin?',
      'What business systems must an AI workflow access to resolve customer requests?',
    ],
    serviceLinks: [
      { label: 'AI Integration', href: '/service-ai-integration' },
      { label: 'AI Automations', href: '/service-ai-automations' },
    ],
    related: [
      { label: 'Agentic Systems', href: '/blog-agentic-systems' },
      { label: 'Intelligent Process Automation', href: '/blog-intelligent-process' },
    ],
  },
  'blog-cognitive-infrastructure': {
    route: 'blog-cognitive-infrastructure',
    takeaway:
      'Reliable business AI depends on the quality of context, routing, system boundaries, and evaluation not simply on adding a retrieval layer to a language model.',
    questions: [
      'Why does basic RAG break down on complex business questions?',
      'How should context be selected when multiple business systems contain relevant information?',
      'What architecture is needed when an AI system must produce an operational outcome?',
    ],
    serviceLinks: [
      { label: 'Custom LLM Applications', href: '/service-llm-applications' },
      { label: 'AI Integration', href: '/service-ai-integration' },
    ],
    related: [
      { label: 'Securing Enterprise AI Systems', href: '/blog-llm-security' },
      { label: 'Agentic Systems', href: '/blog-agentic-systems' },
    ],
  },
  'blog-intelligent-process': {
    route: 'blog-intelligent-process',
    takeaway:
      'Intelligent process automation is most valuable when business workflows contain recurring exceptions that make purely deterministic automation expensive to maintain.',
    questions: [
      'Which processes should remain deterministic rather than agentic?',
      'How can AI handle exceptions without creating uncontrolled automation?',
      'Where should human approval remain part of an automated process?',
    ],
    serviceLinks: [
      { label: 'AI Automations', href: '/service-ai-automations' },
      { label: 'Vertical AI Systems', href: '/service-vertical-ai' },
    ],
    related: [
      { label: 'Agentic Systems', href: '/blog-agentic-systems' },
      { label: 'AI Integration', href: '/service-ai-integration' },
    ],
  },
  'blog-llm-security': {
    route: 'blog-llm-security',
    takeaway:
      'Security for business AI is a systems problem: access control, data boundaries, model behavior, validation, observability, and human escalation all need to be designed together.',
    questions: [
      'What security controls should exist before connecting an AI system to business data?',
      'How should sensitive data be separated from model execution?',
      'Which AI actions require deterministic validation or human approval?',
    ],
    serviceLinks: [
      { label: 'Custom LLM Applications', href: '/service-llm-applications' },
      { label: 'AI Integration', href: '/service-ai-integration' },
    ],
    related: [
      { label: 'Cognitive AI Infrastructure', href: '/blog-cognitive-infrastructure' },
      { label: 'Agentic Systems', href: '/blog-agentic-systems' },
    ],
  },
};
