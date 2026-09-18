import { Icon } from '@/components/ui/icon';

/**
 * A diagram of the system shape every engagement converges on.
 *
 * Why this exists: the homepage previously contained zero images. The rest of
 * the site leaned on Unsplash photography captioned as "client dashboard" and
 * "your strategy session", which is the exact pattern technical buyers are
 * trained to distrust. Rather than source more stock, this renders the
 * architecture as inline SVG, so the page finally shows what it sells and every
 * label is something the team can stand behind.
 *
 * Drawn with tokens and currentColor so it inherits the ink/wash palette and
 * needs no raster asset. Accessible: <title> + <desc> give the whole figure a
 * text equivalent, and individual boxes are marked aria-hidden to avoid a
 * noisy screen-reader walk through decorative shapes.
 */

const layers = [
  {
    title: 'Your systems',
    detail: 'CRM, ERP, support desk, warehouse, spreadsheets',
    icon: 'Database' as const,
  },
  {
    title: 'Integration layer',
    detail: 'Scoped API access, data mapping, retries, failure handling',
    icon: 'Cable' as const,
  },
  {
    title: 'The system',
    detail: 'Retrieval over your content, tool calls, decision thresholds',
    icon: 'Bot' as const,
  },
  {
    title: 'Work, actioned',
    detail: 'Completed work, plus a review queue for real exceptions',
    icon: 'ListTodo' as const,
  },
];

export function SystemArchitecture() {
  return (
    <figure className="reveal rounded-[22px] border border-[var(--line)] bg-panel p-6 sm:p-8">
      {/* Decorative flow diagram. The same information is rendered as a real
          list below, so nothing here needs to be read aloud. */}
      <svg
        viewBox="0 0 520 132"
        role="img"
        aria-labelledby="architecture-title architecture-desc"
        className="mb-8 w-full"
      >
        <title id="architecture-title">How a Zorex system is wired into existing business software</title>
        <desc id="architecture-desc">
          Requests and records move from your existing systems through a scoped integration layer into the AI system,
          which reads your content, calls tools, and either completes the work or places an exception in a human review
          queue. Every action is written back to the source system and logged.
        </desc>

        {/* connector rail */}
        <line x1="0" y1="58" x2="520" y2="58" stroke="currentColor" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="4 4" className="text-ink" />

        {[0, 1, 2, 3].map((index) => {
          const x = 8 + index * 128;
          const isCore = index === 2;
          return (
            <g key={index} className="text-ink">
              <rect
                x={x}
                y={26}
                width="112"
                height="64"
                rx="12"
                fill={isCore ? 'currentColor' : 'none'}
                fillOpacity={isCore ? 0.06 : 0}
                stroke="currentColor"
                strokeOpacity={isCore ? 0.4 : 0.18}
              />
              {index < 3 && (
                <path
                  d={`M ${x + 112} 58 L ${x + 122} 58`}
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="1.5"
                />
              )}
              {index < 3 && (
                <path
                  d={`M ${x + 118} 54 L ${x + 122} 58 L ${x + 118} 62`}
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="1.5"
                  fill="none"
                />
              )}
            </g>
          );
        })}
      </svg>

      <figcaption className="sr-only">System architecture diagram</figcaption>

      {/* The readable version of the diagram: a real ordered list, which is also
          what answer engines and crawlers will lift. */}
      <ol className="grid grid-cols-1 gap-4 list-none sm:grid-cols-2 lg:grid-cols-4">
        {layers.map((layer, index) => (
          <li key={layer.title} className="flex flex-col">
            <span className="mb-3 flex items-center gap-2 font-ui text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-3">
              <span className="flex size-5 items-center justify-center rounded-full border border-[var(--line-strong)] text-[10px] leading-none">
                {index + 1}
              </span>
              <Icon name={layer.icon} className="size-3.5" aria-hidden />
            </span>
            <span className="mc-title mb-1.5 text-[15px] text-ink">{layer.title}</span>
            <span className="mc-body text-[12.5px]">{layer.detail}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}