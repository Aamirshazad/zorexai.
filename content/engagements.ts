/**
 * The three representative engagements, in one place.
 *
 * Shared between the case-studies index and the homepage evidence band so the
 * two can never drift apart. Client names and figures are withheld deliberately:
 * we do not publish a metric we cannot evidence, and we do not attribute a quote
 * to a person who has not approved it. What is left is still specific the
 * problem, the system, and the change in how the work moves.
 *
 * `shift` is the compressed before/after used where there is only room for one
 * line; it must always be a restatement of `changed`, never a stronger claim.
 */

import type { IconName } from '@/components/ui/icon';

export type Engagement = {
  href: string;
  number: string;
  title: string;
  service: string;
  serviceIcon: IconName;
  industry: string;
  /** Role and company type only never a name. */
  who: string;
  problem: string;
  built: string;
  changed: string;
  shift: { from: string; to: string };
};

export const engagements: Engagement[] = [
  {
    href: '/case-study-novus',
    number: '01',
    title: 'The weekly reporting pack that took two days to assemble',
    service: 'AI Integration',
    serviceIcon: 'PlugZap',
    industry: 'Logistics',
    who: 'Operations Director, mid-market logistics operator',
    problem:
      'Four systems held the numbers, none agreed, and two analysts spent the first two days of every week reconciling them by hand. By the time the pack landed, the decisions it existed to support had already been made on instinct.',
    built:
      'A pipeline that pulls from the TMS, the ERP, and two spreadsheets, resolves the disagreements against defined rules, and flags the ones no rule covers for a human to settle. The pack builds itself; the exceptions arrive as a short queue.',
    changed:
      'Reporting moved from a two-day assembly job to a review job. The analysts kept the judgment work and stopped doing the copying, and the numbers stopped being contested in the meeting.',
    shift: {
      from: 'Two analysts reconciling four systems by hand every Monday and Tuesday',
      to: 'The pack assembles itself; people review it and settle the flagged exceptions',
    },
  },
  {
    href: '/case-study-echocommerce',
    number: '02',
    title: 'First-line support growing faster than the team could hire',
    service: 'Agentic AI Systems',
    serviceIcon: 'Bot',
    industry: 'B2B Commerce',
    who: 'Founder, B2B commerce platform',
    problem:
      'Most incoming tickets were answerable from the order record and the policy documents, but each one still queued behind a person. Hiring lagged volume by a quarter, and the complex cases waited behind the simple ones.',
    built:
      'An agent with read access to order history and policy, allowed to answer and to act within a defined set of operations, and required to escalate anything outside it with the context already gathered. Every answer is logged with the sources it used.',
    changed:
      'Routine enquiries resolve without a queue, and the team works the cases that actually need them. The escalation path means an unusual request reaches a person faster than it used to, not slower.',
    shift: {
      from: 'Every ticket queued behind a person, simple cases blocking complex ones',
      to: 'Routine enquiries resolve unattended; escalations arrive with context attached',
    },
  },
  {
    href: '/case-study-viralgrowth',
    number: '03',
    title: 'Patient follow-up that only happened when someone had time',
    service: 'Vertical AI Systems',
    serviceIcon: 'Layers3',
    industry: 'Healthcare',
    who: 'Practice Manager, specialist medical group',
    problem:
      'Recalls, pre-appointment preparation, and post-visit follow-up were all manual, so they slipped whenever the front desk got busy which was most days. The privacy constraints ruled out the obvious off-the-shelf tools.',
    built:
      'A system inside the practice’s own environment that prepares and sends the routine communications, holds anything clinical for staff approval, and writes every action back to the record. Nothing leaves the boundary the practice already operates under.',
    changed:
      'Follow-up stopped depending on how busy the front desk was. Staff review and approve rather than compose, and the exceptions surface as a list instead of being discovered later.',
    shift: {
      from: 'Recalls and follow-up slipping whenever the front desk got busy',
      to: 'Routine communication runs on schedule; staff approve rather than compose',
    },
  },
];
