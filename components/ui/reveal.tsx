'use client';

import { isValidElement, useRef, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'motion/react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Direction the element travels from while hidden. */
  from?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Distance in pixels for the entrance offset. */
  distance?: number;
  as?: 'div' | 'section' | 'span' | 'li' | 'article';
};

const offsets = {
  up: (d: number) => ({ x: 0, y: d }),
  down: (d: number) => ({ x: 0, y: -d }),
  left: (d: number) => ({ x: d, y: 0 }),
  right: (d: number) => ({ x: -d, y: 0 }),
  none: () => ({ x: 0, y: 0 }),
};

export function Reveal({
  children,
  className,
  delay = 0,
  from = 'up',
  distance = 26,
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });
  const reduceMotion = useReducedMotion();

  const variants: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, ...offsets[from](distance) },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
        },
      };

  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </Tag>
  );
}

/** Wraps a row of children and staggers their entrance as the group scrolls into view. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  from = 'up',
  distance = 26,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  from?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : stagger } },
  };

  const item: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, ...offsets[from](distance) },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={container}
    >
      {Array.isArray(children)
        ? children.map((child, index) => {
            // Re-render the child as a motion element built from its OWN type
            // (motion.create(child.type)) instead of wrapping it in a bare div.
            // A wrapper div would become the grid item and swallow the child's
            // col-span placement, and hardcoding motion.div/motion.a would turn
            // Next.js <Link> cards into non-clickable divs. motion.create keeps
            // the real element (Link stays a routed <a>, div stays a div).
            if (isValidElement(child)) {
              const MotionTag = motion.create(child.type as Parameters<typeof motion.create>[0]);
              const { children: childChildren, ...rest } = child.props as {
                children?: ReactNode;
              } & Record<string, unknown>;
              return (
                <MotionTag key={index} variants={item} {...rest}>
                  {childChildren}
                </MotionTag>
              );
            }
            return child;
          })
        : children}
    </motion.div>
  );
}
