'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Adds the `revealed` class to its child once it scrolls into view,
 * driving the CSS `.reveal` transition in globals.css. Use this to give
 * server-rendered markup (which can't use motion/react directly) the
 * same scroll-reveal behavior.
 */
export function ScrollReveal({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
