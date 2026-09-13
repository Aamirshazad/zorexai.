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

const toneClass: Record<Tone, string> = {
  surface: 'bg-surface',
  bright: 'bg-surface-bright',
  container: 'bg-surface-container',
  low: 'bg-surface-container-low',
  dark: 'bg-primary-container text-on-primary',
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
      className={`py-section-padding px-5 sm:px-8 ${toneClass[tone]}${bordered ? ' border-t border-outline-variant/20' : ''} ${className}`}
    >
      <div className={`max-w-container-max mx-auto ${innerClassName}`}>{children}</div>
    </section>
  );
}

/* The eyebrow is the DocketBar the site's signature device. The brand voice
   is a filed record: labelled and ruled. A mono label, then a hairline that
   runs out to the measure's edge, with the gold reserved for accents
   (indexes, icons) rather than the label itself. */
export function Eyebrow({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return (
    <span className={`docket-bar mb-4${inverse ? ' docket-bar-inverse' : ''}`}>
      <span>{children}</span>
      <span className="docket-rule" aria-hidden="true" />
    </span>
  );
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
  const titleClass = `font-headline-lg text-headline-lg ${inverse ? 'text-on-primary' : 'text-primary-container'} text-balance`;
  const introClass = `font-body-lg text-body-lg ${inverse ? 'text-on-primary-container' : 'text-on-surface-variant'} leading-relaxed`;

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
