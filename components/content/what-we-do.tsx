'use client';

import { useEffect, useRef } from 'react';
import './what-we-do.css';
import { whatWeDoMarkup } from './what-we-do-markup';

/**
 * "What we do" — three ways to work with us.
 *
 * A deliberate 1:1 port of the same band on the sister site
 * (https://hitl.es/advisory): the sticky offer index with its scroll-driven
 * progress bars, the AI Training track grid, the CLIMB list, the stat row, and
 * the animated ascent chart. The donor's markup lives verbatim in
 * `what-we-do-markup.ts` and its page CSS is scoped under `.wwd-scope` in
 * `what-we-do.css`, so none of its tokens or element rules reach the rest of
 * the site. This file only re-attaches the two behaviours the donor ran as
 * inline scripts.
 */
export function WhatWeDo() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // 1) Draw the ascent chart once it is a third of the way into view.
    const chart = root.querySelector<HTMLElement>('#saChart');
    let observer: IntersectionObserver | undefined;
    if (chart) {
      if (
        !('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        chart.classList.add('sa-play');
      } else {
        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                chart.classList.add('sa-play');
                observer?.disconnect();
              }
            }
          },
          { threshold: 0.35 },
        );
        observer.observe(chart);
      }
    }

    // 2) Keep the sticky index in step with whichever offer is on screen.
    const items = Array.from(root.querySelectorAll<HTMLElement>('.wwd-item'));
    const offers = items.map((item) => {
      const target = item.dataset.target;
      return target ? root.querySelector<HTMLElement>(`#${target}`) : null;
    });

    let onScroll: (() => void) | undefined;
    if (items.length && offers.some(Boolean)) {
      onScroll = () => {
        const mid = window.innerHeight * 0.45;
        let active = 0;
        offers.forEach((offer, index) => {
          if (offer && offer.getBoundingClientRect().top <= mid) active = index;
        });
        items.forEach((item, index) => {
          item.classList.toggle('is-active', index === active);
          if (index === active) {
            const offer = offers[index];
            if (offer) {
              const rect = offer.getBoundingClientRect();
              const progress = Math.min(1, Math.max(0, (mid - rect.top) / rect.height));
              item.style.setProperty('--p', progress.toFixed(3));
            }
          } else {
            item.style.setProperty('--p', index < active ? '1' : '0');
          }
        });
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
    }

    return () => {
      observer?.disconnect();
      if (onScroll) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="what-we-do"
      className="wwd-scope"
      dangerouslySetInnerHTML={{ __html: whatWeDoMarkup }}
    />
  );
}
