'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { Icon } from '@/components/ui/icon';

/**
 * In-app Formspree submission.
 *
 * Replaces every native `action="https://formspree.io/f/..."` POST on the
 * site. A native POST navigates the buyer to a Formspree-hosted thank-you
 * page — brand discontinuity and zero funnel visibility at the most fragile
 * moment of the conversion path. This component submits via fetch, keeps the
 * buyer inside the branded experience, and renders explicit success/error
 * states inline (with an accessible live region).
 *
 * Server-component safe: every prop is serializable — children is plain JSX
 * (fields), the submit button is rendered here from labels + classes, and the
 * submitting state disables the whole form via a `display: contents` fieldset.
 * No render props.
 *
 * Failure paths are real: network errors, Formspree downtime, spam rejections.
 * On failure the visitor gets a message and a mailto fallback, never a lost
 * submission screen.
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpwdjqgz';

type FormStatus = 'idle' | 'submitting' | 'succeeded' | 'failed';

type SmartFormProps = {
  /** Hidden _subject value Formspree uses to label the inbound email. */
  subject: string;
  /** Form fields as plain JSX — label + inputs. No functions. */
  children: ReactNode;
  /** Visible submit button label (idle state). */
  submitLabel: string;
  /** Tailwind classes for the submit button — matches the page's button style. */
  submitClassName?: string;
  /** Button label while submitting. */
  submittingLabel?: string;
  className?: string;
  id?: string;
  /** Success panel content — shown in place of the form after submit. */
  successTitle?: string;
  successBody?: string;
};

export function SmartForm({
  subject,
  children,
  submitLabel,
  submitClassName,
  submittingLabel = 'Sending…',
  className,
  id,
  successTitle = 'Thanks — it went through.',
  successBody = 'We read every message ourselves. Expect a reply within one business day.',
}: SmartFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {};
    data.forEach((value, key) => {
      if (typeof value === 'string' && value !== '') payload[key] = value;
    });
    // Honeypot filled → pretend success, tell Formspree nothing.
    if (payload._gotcha) {
      setStatus('succeeded');
      return;
    }
    setStatus('submitting');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: subject, ...payload }),
      });
      setStatus(response.ok ? 'succeeded' : 'failed');
    } catch {
      setStatus('failed');
    }
  }

  if (status === 'succeeded') {
    return (
      <div
        className={`rounded-[16px] border border-[var(--line-strong)] bg-panel p-8 text-center ${className ?? ''}`}
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full border border-[var(--line-strong)]">
          <Icon name="CircleCheck" className="text-xl" aria-hidden />
        </div>
        <h3 className="mc-title text-xl mb-2">{successTitle}</h3>
        <p className="mc-body">{successBody}</p>
      </div>
    );
  }

  return (
    <form id={id} className={className} onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value={subject} />
      <input
        name="_gotcha"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      />
      {status === 'failed' && (
        <p className="mb-4 rounded-[10px] border border-[var(--line-strong)] bg-panel-2 px-4 py-3 text-sm" role="alert">
          That didn&apos;t send — likely a network hiccup on our side, not something you did. Try again, or email us
          directly at{' '}
          <a className="font-medium underline underline-offset-2" href="mailto:hello@zorex.com">
            hello@zorex.com
          </a>
          .
        </p>
      )}
      {/* `display: contents` keeps the layout exactly as authored while
          disabling every field (and the button) during submission. */}
      <fieldset className="contents" disabled={status === 'submitting'}>
        {children}
        <button className={submitClassName} type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? submittingLabel : submitLabel}
        </button>
      </fieldset>
    </form>
  );
}
