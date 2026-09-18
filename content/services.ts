/**
 * The six services, in one place.
 *
 * Shared between the services page (full scope rows) and the About page
 * (one-line index) so the two can never drift apart. `oneLine` is a restatement
 * of `summary`, never a stronger claim than it. The same rule governs
 * `shift` versus `changed` in content/engagements.ts.
 *
 * What is deliberately NOT in this file, per the site-wide honesty rule:
 * client names, client metrics, and any claim about outcomes. Scope and fit
 * only.
 */

import type { IconName } from '@/components/ui/icon';

export type Service = {
  href: string;
  name: string;
  icon: IconName;
  /** One line, for index grids. Must restate `summary`, not extend it. */
  oneLine: string;
  /**
   * Short descriptor for the header's dropdown panel. Must stay under about
   * 45 characters so the two-column panel keeps an even baseline; it is a
   * compression of `oneLine`, never a new claim.
   */
  menuLine: string;
  /** Full scope paragraph, for the services page detail rows. */
  summary: string;
  includes: string[];
  bestFor: string;
};

export const services: Service[] = [
  {
    href: '/service-agentic-ai',
    name: 'AI Agentic Systems',
    icon: 'Bot',
    menuLine: 'Agents that carry a whole workflow',
    oneLine: 'Agents that carry a whole workflow: read, decide, act, and escalate the genuine exceptions.',
    summary:
      'Systems that carry a whole workflow rather than answering a single prompt: they read the request, gather the context they need from your systems, take the action, and hand back the genuine exceptions with the reasoning attached.',
    includes: ['Task and tool design', 'Retrieval over your own content', 'Escalation and audit trails', 'Evaluation harness before launch'],
    bestFor: 'Support triage, sales follow-up, back-office processing where the same judgment gets made hundreds of times a week.',
  },
  {
    href: '/service-ai-integration',
    name: 'AI Integration',
    icon: 'PlugZap',
    menuLine: 'Intelligence inside the stack you run',
    oneLine: 'Intelligence wired into the CRM, ERP, and support desk you already run. No rip-and-replace.',
    summary:
      'Intelligence added to the systems you already run instead of a parallel tool nobody opens. We work against your CRM, ERP, support desk, and warehouse as they are, including the parts that are messier than the documentation suggests.',
    includes: ['API and webhook integration', 'Identity and permission scoping', 'Data mapping and reconciliation', 'Failure handling and retries'],
    bestFor: 'Teams whose data already exists in four systems and whose people are the integration layer today.',
  },
  {
    href: '/service-ai-automations',
    name: 'Intelligent Workflow Automation',
    icon: 'Route',
    menuLine: 'Orchestration that handles judgment',
    oneLine: 'Orchestration for processes that need judgment, not just if-then rules.',
    summary:
      'End-to-end orchestration for processes that need context and judgment, not just if-then rules. This is the work a rules engine or no-code builder can start but never finish.',
    includes: ['Process mapping with your operators', 'Decision logic and thresholds', 'Human-in-the-loop checkpoints', 'Monitoring and alerting'],
    bestFor: 'Multi-step processes that stall whenever a case does not match the template.',
  },
  {
    href: '/service-vertical-ai',
    name: 'Vertical AI Systems',
    icon: 'Layers3',
    menuLine: "Built around one industry's exceptions",
    oneLine: 'Systems shaped around one industry’s vocabulary, exceptions, and compliance reality.',
    summary:
      'A system built around one industry’s vocabulary, exceptions, and regulatory reality. Generic assistants fail here for a specific reason: the exceptions are the job, and they are different in every sector.',
    includes: ['Domain terminology and taxonomy', 'Sector-specific exception handling', 'Role-based access and review', 'Documentation your team can extend'],
    bestFor: 'Healthcare, legal, finance, logistics, and other operations where a wrong answer has a compliance cost.',
  },
  {
    href: '/service-llm-applications',
    name: 'LLM Applications',
    icon: 'Network',
    menuLine: 'Retrieval, evaluation, and guardrails',
    oneLine: 'Retrieval, evaluation, and guardrails built as engineering, with a measurable accuracy bar.',
    summary:
      'Retrieval, prompting, and guardrails treated as engineering with a measurable accuracy bar, because the difference between a demo and a system is what happens on the inputs nobody anticipated.',
    includes: ['Retrieval architecture', 'Evaluation sets and regression testing', 'Guardrails and refusal behaviour', 'Cost and latency budgets'],
    bestFor: 'Internal knowledge tools, drafting and review workflows, anything where quality has to hold at volume.',
  },
  {
    href: '/service-api-integrations',
    name: 'API & Systems Engineering',
    icon: 'Cable',
    menuLine: 'The reliability layer underneath',
    oneLine: 'The reliable plumbing underneath the intelligence: services, queues, schemas, observability.',
    summary:
      'The connective work that decides whether any of the above is usable in practice: services, queues, schemas, and the unglamorous reliability layer underneath an AI feature.',
    includes: ['Service and queue design', 'Schema and pipeline work', 'Observability and logging', 'Runbooks and handover docs'],
    bestFor: 'Engagements where the AI part is straightforward and the plumbing is the actual project.',
  },
];
