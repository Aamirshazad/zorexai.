'use client';

import { useEffect } from 'react';

/**
 * Site-wide scroll-reveal driver. Adds `.js-reveal` to <html> (which arms the
 * CSS `.reveal` hidden state) and observes every `.reveal` element — including
 * ones added later by client-side navigations — adding `.revealed` when each
 * scrolls into view.
 */
export function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add('js-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    const observeAll = () => {
      document
        .querySelectorAll('.reveal:not(.revealed)')
        .forEach((el) => observer.observe(el));
    };

    observeAll();

    // Re-scan when the DOM changes (client-side route changes, lazy content).
    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
