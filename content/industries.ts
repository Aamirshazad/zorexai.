/**
 * The nine industry deep-dive pages, in one place.
 *
 * Shared between the industries index, the site footer, and any future cross-
 * links so the set can never drift apart. Titles must match the destination
 * page's H1 (via SubPageHero) a buyer clicks a label and lands on a page
 * that restates it, which is the whole point of routing by industry.
 *
 * `meta` mirrors the SubPageHero meta line (e.g. "Freight • 3PL • Warehousing").
 */

import type { IconName } from '@/components/ui/icon';

export type Industry = {
  href: string;
  name: string;
  /** Matches the destination page's H1. */
  title: string;
  /** Segment descriptor, as on the destination page. */
  meta: string;
  /** One line for index tiles a compression of the page's hero body. */
  oneLine: string;
  icon: IconName;
};

export const industries: Industry[] = [
  {
    href: '/industry-b2b-ecommerce',
    name: 'B2B E-commerce',
    title: 'How AI Is Reshaping B2B E-commerce Operations',
    meta: 'Wholesale • Distribution • B2B Portals',
    oneLine: 'Contract pricing, multi-stage approvals, and bulk-order cycles systems built for wholesale complexity, not consumer chatbots.',
    icon: 'ShoppingCart',
  },
  {
    href: '/industry-b2b-finance',
    name: 'B2B Finance',
    title: 'How AI Is Transforming B2B Finance Operations',
    meta: 'AP/AR • Compliance • Reconciliation',
    oneLine: 'Autonomous processing, validation, and reconciliation of financial data your team keeps the judgment work.',
    icon: 'Landmark',
  },
  {
    href: '/industry-b2b-saas',
    name: 'B2B SaaS',
    title: 'Embedded AI Engineering for B2B SaaS',
    meta: 'Product Integration • Churn Prediction • Customer Success',
    oneLine: 'Agentic features embedded deep in your product a moat, not a bolted-on API wrapper.',
    icon: 'Cloud',
  },
  {
    href: '/industry-commercial-real-estate',
    name: 'Commercial Real Estate',
    title: 'How AI Is Accelerating Deal Velocity in Commercial Real Estate',
    meta: 'Brokerage • Underwriting • Asset Management',
    oneLine: 'Lease abstraction, underwriting extraction, and off-market sourcing analysts analyzing instead of gathering.',
    icon: 'Building2',
  },
  {
    href: '/industry-digital-marketing',
    name: 'Digital Marketing',
    title: 'Programmatic AI for Digital Marketing Operations',
    meta: 'Agencies • In-House Teams • Media Buying',
    oneLine: 'Programmatic content engines, cross-channel reporting, and predictive media analytics output without headcount.',
    icon: 'Megaphone',
  },
  {
    href: '/industry-law-firms',
    name: 'Law Firms',
    title: 'Enterprise AI Engineering for Law Firms',
    meta: 'Litigation • Corporate • Legal Tech',
    oneLine: 'Private, secure AI inside your own infrastructure e-discovery and contract review without privilege concerns.',
    icon: 'Gavel',
  },
  {
    href: '/industry-logistics',
    name: 'Logistics & Supply Chain',
    title: 'Autonomous Operations for Complex Supply Chains',
    meta: 'Freight • 3PL • Warehousing',
    oneLine: 'Unify EDI feeds, parse unstructured freight documents, and resolve routing exceptions autonomously.',
    icon: 'Truck',
  },
  {
    href: '/industry-manufacturing',
    name: 'Manufacturing',
    title: 'Predictive AI for Modern Manufacturing',
    meta: 'Production • Quality Control • Maintenance',
    oneLine: 'Vision-based defect detection and predictive maintenance downtime prevented, not repaired.',
    icon: 'Cog',
  },
  {
    href: '/industry-medical-practices',
    name: 'Medical Practices',
    title: 'How AI Is Reducing Administrative Burnout in Healthcare',
    meta: 'Clinical • Revenue Cycle • Patient Experience',
    oneLine: 'Privacy-first documentation and revenue-cycle systems providers back to patient care.',
    icon: 'Stethoscope',
  },
];
