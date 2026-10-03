/**
 * The three representative engagements, in one place.
 *
 * Shared between the case-studies index and the homepage evidence band so the
 * two can never drift apart. Client names and figures are withheld deliberately:
 * we do not publish a metric we cannot evidence, and we do not attribute a quote
 * to a person who has not approved it. What is left is still specific: the
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
  badge?: string;
  ctaLabel?: string;
  tagline?: string;
  /** Role and company type only never a name. */
  who: string;
  image?: { src: string; alt: string };
  gallery?: Array<{ src: string; alt: string; label: string }>;
  problem: string;
  built: string;
  changed: string;
  shift: { from: string; to: string };
};

export const engagements: Engagement[] = [
  {
    href: '/case-study-novus',
    number: '01',
    title: 'A fashion studio selling online but running everything by hand',
    service: 'AI Agentic System Engineering',
    serviceIcon: 'Bot',
    industry: 'Fashion E-commerce',
    badge: 'E-commerce Automation',
    ctaLabel: 'Read Fashion Studio Case Study',
    tagline: 'Multi-channel order fulfillment & automated inventory sync',
    who: 'Founder, independent fashion label with a small 3-person studio team',
    image: {
      src: '/case-studies/fashion-studio.jpg',
      alt: 'Studio Élevé fashion studio and automated e-commerce order fulfillment pipeline',
    },
    problem:
      'The founder and two staff managed inventory across Shopify, Instagram Shop drops, and a wholesale spreadsheet. Every sale triggered hours of manual updates: stock counts, shipping labels in carrier portals, and manual tracking emails. Returns were tracked in a notebook. During a 200-unit seasonal drop, three orders shipped to the wrong address because of copy-paste errors.',
    built:
      'A unified system that connects Shopify, shipping carriers, and wholesale trackers into one pipeline. Orders flow through automatically with address verification: stock adjusts in real time, shipping labels generate instantly, and customers receive branded tracking updates without staff touching a template. Returns feed back into inventory the moment the carrier scans the package.',
    changed:
      'Order processing went from a 4-hour daily manual chore to background automation. Zero shipping errors during peak drop weekends, 100% accurate multi-channel stock sync, and the founder regained 18+ hours a week to focus on designing new collections.',
    shift: {
      from: 'Manual order processing across three portals, spreadsheet stock counts, and untracked returns in a notebook',
      to: 'Orders, shipping, and returns flow end-to-end automatically — team focuses on design, not admin',
    },
  },
  {
    href: '/case-study-echocommerce',
    number: '02',
    title: 'ZAIK: AI-Native Social Media Marketing Operating System for Ecommerce Agencies',
    service: 'Agentic AI Systems',
    serviceIcon: 'Bot',
    industry: 'Social Media Marketing / Agencies',
    badge: 'Flagship Platform Showcase',
    ctaLabel: 'Explore Zaik Platform Landing Page',
    tagline: 'Run multiple ecommerce clients through one unified AI marketing OS',
    who: 'Boutique Ecommerce Marketing Agencies & Founders managing 8–15 client brand accounts',
    image: {
      src: '/case-studies/agency-marketing.jpg',
      alt: 'Digital marketing agency operating system and multi-client command center',
    },
    gallery: [
      { src: '/case-studies/agency-marketing.jpg', alt: 'Agency Workspace — Multi-client command center & analytics', label: 'Agency Workspace' },
      { src: '/zaik/ad-studio.png', alt: 'Zaik Ad Studio — AI video ad generation and templates', label: 'Ad Studio' },
      { src: '/zaik/community-inbox.png', alt: 'Zaik Community Inbox — AI message triage and multi-channel engagement', label: 'Community Inbox' },
      { src: '/zaik/fashion-studio.png', alt: 'Zaik Fashion Studio — Virtual model styling & catalog shoots', label: 'Fashion Studio' },
      { src: '/zaik/brand-kits.png', alt: 'Zaik Brand Kits — Isolated brand memory & design assets', label: 'Brand Kits' },
      { src: '/zaik/motion-design.png', alt: 'Zaik Motion Design — Product catalog & automated video creation', label: 'Motion Design' },
    ],
    problem:
      'Every new ecommerce client meant another brand voice to memorize, separate Google Drive folders, fragmented Canva links, approval emails, and manual reporting spreadsheets. Account managers juggled 6+ disconnected tools per client. Growth created coordination friction, ballooning freelancer costs, and compressed agency margins.',
    built:
      'Zaik — an AI-native social media marketing operating system built by Zorex AI. Gives agencies one unified command center with isolated client Brand Brains, specialized AI Creative Studios (Ad Studio, Fashion Studio, Motion Design, UGC), Community Agent message triage, multi-channel publishing, and automated client-ready analytics.',
    changed:
      'Eliminated multi-tool chaos. Creative production dropped from 3 days to minutes with human approval. Client onboarding compressed by 4x. Account managers scale from 3 to 8 clients each without quality loss, while the agency reuses proven workflows across its entire portfolio.',
    shift: {
      from: '6 disconnected tools per client, manual copywriting & design handoffs, multi-tab coordination bottleneck',
      to: 'One AI-native OS: Brand Brains, automated Creative Studios, multi-channel calendar, and one-click reporting',
    },
  },
  {
    href: '/case-study-viralgrowth',
    number: '03',
    title: 'Patient Follow-Up & Intake Workflow for a Multi-Provider Healthcare Practice',
    service: 'Vertical AI Systems',
    serviceIcon: 'Layers3',
    industry: 'Healthcare & Clinical Practice',
    badge: 'Clinical Workflow System',
    ctaLabel: 'Read Medical Practice Case Study',
    tagline: 'Zero-data-leakage patient communication & recall system',
    who: 'Practice Manager, Specialist Medical Group (8 providers, 2 clinics)',
    image: {
      src: '/case-studies/healthcare-clinic.jpg',
      alt: 'Aspen Medical Group practice management and automated patient communication system',
    },
    problem:
      'Recalls, pre-appointment preparation, and post-visit follow-up were all manual, so they slipped whenever the front desk got busy, which was most days. High-friction phone tags led to missed appointments, and privacy regulations ruled out generic off-the-shelf automation tools.',
    built:
      'A system inside the practice\'s own secure environment that prepares and sends routine communications, holds anything clinical for staff approval, and writes every action back to the EHR. Nothing leaves the boundary the practice already operates under.',
    changed:
      'Follow-up stopped depending on how busy the front desk was. Staff review and approve rather than compose, response times dropped from days to minutes, and the exceptions surface as a prioritized list instead of being discovered later.',
    shift: {
      from: 'Recalls and follow-up slipping whenever the front desk got busy; phone tag backlogs',
      to: 'Routine communication runs on schedule; staff approve rather than compose with full EHR audit trail',
    },
  },
];
