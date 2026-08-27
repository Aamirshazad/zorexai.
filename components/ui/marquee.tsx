'use client';

import type { ReactNode } from 'react';

/**
 * Infinite horizontal marquee — content is duplicated once and translated
 * -50% on a loop (see `.animate-marquee` in globals.css). Pauses on hover.
 */
export function Marquee({
  children,
  className = '',
  trackClassName = '',
}: {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
}) {
  return (
    <div className={`mask-image-fade overflow-hidden ${className}`}>
      <div className={`animate-marquee flex w-max items-center ${trackClassName}`}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
