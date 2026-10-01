/**
 * The four services, in one place.
 *
 * Shared between the services page (grid), the header's Services dropdown, the
 * About page index and the sitemap, so they can never drift apart. `oneLine` is
 * a restatement of `summary`, never a stronger claim than it. `menuLine` is a
 * compression of `oneLine` and must stay under about 45 characters so the
 * two-column dropdown keeps an even baseline.
 *
 * These four are the only service offerings. Anything not listed here has no
 * route: the manifest, the page registry and the sitemap all derive from this
 * list, so the dropdown, the services grid and the footer can never advertise a
 * page that does not exist.
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
  /** Short descriptor for the header's dropdown panel. */
  menuLine: string;
  /** Full scope paragraph, for the services page detail rows. */
  summary: string;
  includes: string[];
  bestFor: string;
};

export const services: Service[] = [
  {
    href: '/service-agentic-ai',
    name: 'AI Agent Development',
    icon: 'Bot',
    menuLine: 'Agents that do the work, not just answer',
    oneLine: 'AI agents that carry work through multiple steps and return a completed outcome, not another answer.',
    summary:
      'Agents that understand a business objective, work through the steps required to reach it, use your information and tools, complete routine work, and involve people when judgment or approval is required.',
    includes: ['Multi-step task execution', 'Actions across your business tools', 'Human approval where it matters', 'Evaluation before launch'],
    bestFor: 'Customer operations, sales follow-up, research, and repetitive administrative work.',
  },
  {
    href: '/service-ai-integration',
    name: 'AI Integration',
    icon: 'PlugZap',
    menuLine: 'AI inside the systems you already run',
    oneLine: 'AI connected to the CRM, ERP, support desk, documents, and data you already depend on.',
    summary:
      'AI added to the environment you already run instead of another application nobody opens. The systems stay familiar; the workflow between them becomes simpler.',
    includes: ['Connections to your existing systems', 'Document and information handling', 'Context-aware responses', 'Controls on important actions'],
    bestFor: 'Teams whose work already spans several systems and whose people are the link between them.',
  },
  {
    href: '/service-ai-automations',
    name: 'Forward-Deployed AI',
    icon: 'Handshake',
    menuLine: 'AI built alongside your operation',
    oneLine: 'We work inside your operation to find where AI fits, build it around your real process, and keep improving it.',
    summary:
      'A forward-deployed approach: we work directly with your teams to understand how the work is actually done, build AI around that reality, deploy it into the live workflow, and improve it from real usage.',
    includes: ['Workflow discovery with your team', 'AI built around your actual process', 'Deployment into live workflows', 'Continuous improvement after launch'],
    bestFor: 'Businesses with unique processes and evolving requirements that off-the-shelf AI products do not fit.',
  },
  {
    href: '/service-vertical-ai',
    name: 'AI Vertical System Development',
    icon: 'Layers3',
    menuLine: "Built around your industry's reality",
    oneLine: 'Purpose-built AI systems designed around your industry, its terminology, rules, and workflows.',
    summary:
      'A system shaped around one industry’s vocabulary, processes, regulations and operational patterns instead of a generic assistant added to the business.',
    includes: ['Industry terminology and knowledge', 'Sector-specific workflows', 'Decision support with human judgment', 'A foundation that scales over time'],
    bestFor: 'Financial services, healthcare, legal, real estate, logistics, and professional services.',
  },
];
