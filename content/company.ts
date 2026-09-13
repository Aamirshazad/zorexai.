/**
 * Single source of truth for company, team, and engagement facts.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * REPLACE BEFORE LAUNCH everything marked `PLACEHOLDER` below is written to
 * be accurate for a 10–13 person senior firm, but the specifics are not yet
 * confirmed. Update them here once and every page follows.
 *
 *   1. `company.foundedYear`            confirm the real founding year
 *   2. `company.responseCommitment`     a promise the team must actually keep
 *   3. every `PLACEHOLDER` team member  real name, role, background line
 *   4. `teamComposition` counts         must add up to the real headcount
 *
 * Deliberately NOT in this file, because inventing it would be dishonest:
 * client names, client metrics, testimonials, award claims, and audit
 * attestations (SOC 2 / HIPAA / ISO). Security items below are written as
 * practices we follow, never as certifications we hold.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { IconName } from '@/components/ui/icon';

export const company = {
  name: 'Zorex AI',
  legalName: 'Zorex AI',
  /** PLACEHOLDER confirm. Used for "operating since" framing, not a claim of scale. */
  foundedYear: 2022,
  headcount: 12,
  headcountLabel: '12 people',
  /** How the team is structured. Buyers ask this before they ask anything else. */
  structure: 'Remote-first, senior-only. No junior bench, no subcontracted delivery.',
  coverage: 'Working hours overlap US Eastern and Central European time.',
  email: 'hello@zorex.com',
  linkedin: 'https://linkedin.com/company/zorex-ai',
  calendly: 'https://calendly.com/amiralicomsats3/30min',
  callLength: '30 minutes',
  /** CTA chips everywhere must use THIS the homepage once said 45 while the
      contact page said 30; buyers noticed. Any new duration copy reads this. */
  /** PLACEHOLDER this is a commitment the team must keep. Remove if it cannot be. */
  responseCommitment: 'Every enquiry gets a reply within one business day.',
} as const;

export const yearsOperating = new Date().getFullYear() - company.foundedYear;

/** Monogram for avatar tiles we use initials rather than stock photography. */
export function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

export type TeamMember = {
  name: string;
  role: string;
  /** What this person is accountable for, in a client's language. */
  focus: string;
  /** Background line. Keep it specific and verifiable no invented employers. */
  background: string;
  icon: IconName;
  /** true = name and background still need replacing with the real person. */
  placeholder?: boolean;
};

/**
 * Named leadership. These are the people a client actually deals with.
 * Aamir Shahzad is real and leads discovery calls; the other three are
 * PLACEHOLDER slots replace the name and background, keep the role shape.
 */
export const leadership: TeamMember[] = [
  {
    name: 'Aamir Shahzad',
    role: 'Founder & Principal Architect',
    focus: 'Leads every discovery call and owns the system design before anyone writes code.',
    background: 'Computer science background; a decade building integration-heavy software before moving full-time into applied AI.',
    icon: 'Compass',
  },
  {
    name: 'Hira Qureshi',
    role: 'Head of AI Engineering',
    focus: 'Model selection, evaluation harnesses, and the accuracy bar a system has to clear before it ships.',
    background: 'Machine learning engineering; built retrieval and evaluation pipelines for production LLM systems.',
    icon: 'Brain',
    placeholder: true,
  },
  {
    name: 'Daniel Okafor',
    role: 'Head of Delivery',
    focus: 'Scope, timelines, and the weekly rhythm the person who tells you early if something is slipping.',
    background: 'Delivery management for enterprise software integrations across finance and logistics operations.',
    icon: 'ClipboardCheck',
    placeholder: true,
  },
  {
    name: 'Sana Iqbal',
    role: 'Head of Platform & Security',
    focus: 'Deployment topology, access control, audit logging, and how your data is handled end to end.',
    background: 'Platform and infrastructure engineering; cloud architecture and secure multi-tenant deployments.',
    icon: 'ShieldCheck',
    placeholder: true,
  },
];

/**
 * The rest of the team, by discipline. Counts below plus leadership must equal
 * `company.headcount`. PLACEHOLDER confirm the real split.
 */
export const teamComposition: { count: number; discipline: string; detail: string; icon: IconName }[] = [
  {
    count: 4,
    discipline: 'AI engineers',
    detail: 'Agent design, retrieval, evaluation, and the prompt-and-tool layer that makes behaviour predictable.',
    icon: 'Bot',
  },
  {
    count: 2,
    discipline: 'Integration engineers',
    detail: 'CRM, ERP, support desk, and data-warehouse work the connective tissue that decides whether a system is usable.',
    icon: 'PlugZap',
  },
  {
    count: 1,
    discipline: 'Data engineer',
    detail: 'Pipelines, schema work, and the data quality problems that surface once a system starts running for real.',
    icon: 'Database',
  },
  {
    count: 1,
    discipline: 'Operations analyst',
    detail: 'Workflow mapping and success criteria, so what gets built matches how the work actually happens.',
    icon: 'Search',
  },
];

/**
 * Section 4 risk reduction. Each item answers a question a buyer is already
 * asking silently. These are policies, not marketing keep them true.
 */
export const engagementAssurances: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Scope is fixed before work starts',
    body: 'Discovery produces a written scope with deliverables and a price. Changes after that are quoted separately and are your call we do not absorb them quietly and bill later.',
    icon: 'FileCheck2',
  },
  {
    title: 'You own everything we build',
    body: 'Code, prompts, configuration, and documentation are yours. No proprietary runtime you have to keep paying us for, and no lock-in that makes leaving expensive.',
    icon: 'KeyRound',
  },
  {
    title: 'Staged rollout, not a switch flip',
    body: 'Systems go live behind human review first, then widen as accuracy holds. If a phase fails its criteria we stop and fix it the failure stays contained to a pilot, not your operation.',
    icon: 'GitBranch',
  },
  {
    title: 'One named contact, weekly',
    body: 'You get a named lead and a standing weekly update covering what shipped, what is blocked, and what we need from you. No status-request black holes.',
    icon: 'Users',
  },
  {
    title: 'Support after go-live is included, not upsold',
    body: 'Every build ships with a defined support window and written runbooks. If you want to maintain it in-house, the documentation is written for that.',
    icon: 'LifeBuoy',
  },
  {
    title: 'Security handled as engineering, not paperwork',
    body: 'Least-privilege access, scoped API credentials, audit logging, and data-retention decisions made explicitly with you. We will sign an NDA before any technical discovery.',
    icon: 'Lock',
  },
];

/** Section 12 what happens after someone submits the form. */
export const whatHappensNext: { step: string; title: string; body: string }[] = [
  {
    step: '01',
    title: 'We reply within one business day',
    body: 'A short note confirming we read it, with either a time to talk or a question if something is unclear.',
  },
  {
    step: '02',
    title: `A ${company.callLength} call with an engineer`,
    body: 'Not a sales qualification call. You describe the workflow; we ask about volumes, systems, and where the judgment calls happen.',
  },
  {
    step: '03',
    title: 'An honest read on whether to build',
    body: 'Sometimes the answer is deterministic automation, a process change, or nothing at all. We say so it costs us a project and saves you a bad one.',
  },
  {
    step: '04',
    title: 'A written scope, if it makes sense',
    body: 'Deliverables, sequence, timeline, and price. You take that to your team and decide. No pressure and no obligation at any point.',
  },
];

/** What to bring, so the first call is useful. Reduces "I am not ready yet" friction. */
export const whatToPrepare: string[] = [
  'The workflow that is costing you the most time even roughly described',
  'Which systems it touches (CRM, ERP, support desk, spreadsheets)',
  'Roughly how often it happens, and who does it today',
  'What a good outcome would look like six months out',
];
