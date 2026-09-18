import type { ReactNode } from 'react';

/**
 * Section layout vocabulary.
 *
 * Before this existed every section on every page opened the same way a
 * centred eyebrow, an h2, then a three-column card grid which made a long
 * page read as one repeated block. `SectionShell` fixes the outer geometry so
 * spacing stays consistent, and `SectionHeading` offers deliberately different
 * *rhythms* (centred / left / split / stacked-rail) so consecutive sections can
 * look structurally distinct without inventing new spacing each time.
 */

type Tone = 'surface' | 'bright' | 'container' | 'low' | 'dark' | 'none';

/**
 * Tone → ink-palette surface.
 *
 * These were Material-era names (bg-surface / bg-surface-container). They are
 * now mapped onto the site's single ink/wash vocabulary so every page built on
 * SectionShell inherits the same backdrop rhythm as the homepage, instead of
 * running a second parallel palette. Keys are unchanged so no call site breaks.
 */
const toneClass: Record<Tone, string> = {
  surface: 'bg-page-wash',
  bright: 'bg-panel',
  container: 'bg-panel-2',
  low: 'bg-page-wash',
  dark: 'bg-ink text-white',
  none: '',
};

export function SectionShell({
  children,
  id,
  tone = 'none',
  bordered = false,
  className = '',
  innerClassName = '',
}: {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  bordered?: boolean;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={`py-section-padding px-5 sm:px-8 ${toneClass[tone]}${bordered ? ' border-t border-[var(--line)]' : ''} ${className}`}
    >
      <div className={`max-w-container-max mx-auto ${innerClassName}`}>{children}</div>
    </section>
  );
}

/* The eyebrow is the site's section label: an uppercase Instrument Sans line at
   0.16em tracking. It previously referenced `.docket-bar` / `.docket-rule`,
   which were never defined in globals.css — so the "DocketBar device" described
   here rendered as an unstyled span on every page that used SectionHeading.
   It now uses the same `.eyebrow` class as the rest of the site. */
export function Eyebrow({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return <span className={`eyebrow mb-4 block${inverse ? ' !text-white/60' : ''}`}>{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  action,
  align = 'left',
  inverse = false,
  className = '',
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Trailing link or button, only rendered by the `split` rhythm. */
  action?: ReactNode;
  align?: 'center' | 'left' | 'split';
  inverse?: boolean;
  className?: string;
}) {
  const titleClass = `section-title ${inverse ? '!text-white' : ''} text-balance`;
  const introClass = `lede ${inverse ? '!text-white/70' : ''}`;

  if (align === 'split') {
    return (
      <div className={`flex flex-col gap-8 md:flex-row md:items-end md:justify-between ${className}`}>
        <div className="max-w-2xl">
          {eyebrow ? <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow> : null}
          <h2 className={titleClass}>{title}</h2>
          {intro ? <p className={`${introClass} mt-4`}>{intro}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    );
  }

  return (
    <div className={`${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {eyebrow ? <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow> : null}
      <h2 className={titleClass}>{title}</h2>
      {intro ? <p className={`${introClass} mt-4`}>{intro}</p> : null}
    </div>
  );
}
