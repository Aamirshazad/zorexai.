'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { Icon, type IconName } from '@/components/ui/icon';
import { Eyebrow } from '@/components/ui/section';

export type FrictionItem = {
  label: string;
  title: string;
  body: string;
  icon: IconName;
};

/**
 * Numbered editorial rows against a sticky heading rail.
 *
 * Replaces the three-equal-cards treatment this content used to have. Rows read
 * top-to-bottom like a list of findings rather than three interchangeable
 * options, and the sticky rail keeps the framing visible while they scroll
 * so the reader always knows what the list is a list *of*.
 */
export function FrictionList({
  eyebrow,
  title,
  intro,
  items,
  footnote,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: FrictionItem[];
  footnote?: string;
}) {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-section-padding px-5 sm:px-8 bg-surface-container border-y border-outline-variant/20">
      <div className="max-w-container-max mx-auto grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--hdr-h)+3rem)] lg:self-start">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg text-primary-container text-balance">{title}</h2>
          {intro ? (
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-5 leading-relaxed">{intro}</p>
          ) : null}
          {footnote ? (
            <p className="font-body-sm mt-8 border-t border-outline-variant/30 pt-6 text-sm leading-relaxed text-outline">
              {footnote}
            </p>
          ) : null}
        </div>

        <ol ref={ref} className="flex flex-col">
          {items.map((item, index) => (
            <motion.li
              key={item.title}
              className="group flex gap-5 border-b border-outline-variant/30 py-7 first:pt-0 last:border-b-0 last:pb-0 sm:gap-8"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : index * 0.09 }}
            >
              <div className="flex shrink-0 flex-col items-center gap-3">
                <span className="font-headline-md text-2xl leading-none text-outline-variant transition-colors duration-300 group-hover:text-secondary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="w-px flex-1 bg-outline-variant/40" aria-hidden />
              </div>
              <div className="min-w-0">
                <span className="docket-bar mb-2">
                  <Icon name={item.icon} className="size-3.5" />
                  <span>{item.label}</span>
                </span>
                <h3 className="font-headline-md text-xl text-primary-container sm:text-2xl">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant mt-3 leading-relaxed">{item.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
