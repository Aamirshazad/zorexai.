import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';

/**
 * Security & governance posture on the primary conversion path.
 *
 * The full "Governance, control, and security" section lives on /process
 * but in a complex B2B category the security posture is not a supporting
 * element buyers go looking for; it's part of the decision itself. This band
 * surfaces the four load-bearing facts next to CTAs, and links to the deep
 * dive for whoever wants the architecture-level detail.
 *
 * Rendered as glass chips on grain bands (matching the industries tile
 * graphics) and white hairline panels on light sections, so the same
 * component reads as texture on the teal CTA band and as structure on the
 * process page.
 */

type PostureItem = { icon: IconName; title: string; body: string };

const posture: PostureItem[] = [
  {
    icon: 'Lock',
    title: 'Your data trains nothing',
    body: 'Client data is never used to train external models. Deployment stays inside your boundary: self-hosted, VPC, or air-gapped.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Scoped permissions, audited actions',
    body: 'Agents get least-privilege tool access. Every decision and tool call is logged and auditable.',
  },
  {
    icon: 'GitBranch',
    title: 'Staged rollout, instant rollback',
    body: 'Systems go live behind human review first. Every automated action has a rollback path.',
  },
  {
    icon: 'FileText',
    title: 'NDA before technical discovery',
    body: 'Standard practice on every engagement. Written retention and data-handling decisions, per project.',
  },
];

export function SecurityPosture({ inverse = false, id = 'security' }: { inverse?: boolean; id?: string }) {
  return (
    <section
      id={id}
      className={`px-5 pt-14 sm:px-8 ${inverse ? '' : 'border-t border-[var(--line)]'}`}
      aria-labelledby="security-posture-heading"
    >
      <div className="mx-auto max-w-container-max">
        <div className="reveal mb-8 max-w-[640px]">
          <span className={`eyebrow mb-3 block ${inverse ? '!text-white/60' : ''}`}>
            <Icon name="ShieldCheck" className="size-3.5" aria-hidden />
            Security &amp; governance posture
          </span>
          {/* This heading previously read "How this is engineered" and the link
              below carried the identical label, so the same words appeared twice
              in one block. The heading keeps it; the link now says where it goes. */}
          <h2
            id="security-posture-heading"
            className={`font-ui text-xl font-medium tracking-[-0.01em] text-balance ${inverse ? 'text-white' : 'text-ink-heading'}`}
          >
            How this is engineered
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {posture.map((item, i) => (
            <li
              key={item.title}
              className={`reveal ${i === 1 || i === 2 ? 'reveal-delay-1' : ''} flex flex-col rounded-[20px] p-6 ${
 inverse ? 'glass-chip !rounded-[20px]' : 'border border-[var(--line)] bg-panel'
 }`}
            >
              <div
                className={`mb-4 flex size-10 shrink-0 items-center justify-center rounded-[12px] ${
 inverse ? 'border border-[var(--grain-chip-bd)] bg-[var(--grain-chip)]' : 'border border-[var(--line-strong)] bg-[var(--panel-2)]'
 }`}
              >
                <Icon name={item.icon} className={`size-[18px] ${inverse ? 'text-white' : 'text-ink'}`} aria-hidden />
              </div>
              <p className={`font-ui text-[14.5px] font-medium leading-snug ${inverse ? 'text-white' : 'text-ink'}`}>{item.title}</p>
              <p className={`mc-body mt-2 !text-[12.5px] !leading-[1.55] ${inverse ? '' : '!text-ink-3'}`}>{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="reveal reveal-delay-2 mt-8">
          <Link
            href="/security"
            className={`footer-link gap-2 border-b font-semibold uppercase tracking-[0.14em] font-ui text-xs transition-colors ${
 inverse
 ? 'border-white/30 text-white/80 hover:border-white hover:text-white'
 : 'border-[var(--line-strong)] text-ink-2 hover:border-ink hover:text-ink'
 }`}
          >
            <span className={`pb-0.5 border-b ${inverse ? 'border-white/30 hover:border-white' : 'border-[var(--line-strong)] hover:border-ink'}`}>
              Read the full security practices
            </span>
            <Icon name="ArrowRight" className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
