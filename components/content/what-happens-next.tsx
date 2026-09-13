import { Icon } from '@/components/ui/icon';
import { company, leadership, whatHappensNext, whatToPrepare } from '@/content/company';

const primaryContact = leadership[0];

/**
 * Section 12 trust at the moment of decision. Every unknown a buyer carries
 * into a contact form: what happens next, how fast, who they will speak with,
 * what it obligates them to, and what to bring.
 */
export function WhatHappensNext({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`${compact ? 'py-14' : 'py-section-padding'} px-5 sm:px-8 bg-surface-container-low border-y border-outline-variant/20`}>
      <div className="max-w-container-max mx-auto">
        <div className="reveal max-w-3xl mb-12">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"After You Get In Touch"}</span>
          <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4">{"Exactly what happens next."}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{"No sequence of automated emails, no discovery call that turns out to be a pitch deck. Four steps, and you can stop after any of them."}</p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 list-none">
          {whatHappensNext.map((item, index) => (
            <li
              key={item.step}
              className={`reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ''} bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7 flex flex-col`}
            >
              <span className="font-headline-md text-2xl text-outline-variant font-bold mb-4">{item.step}</span>
              <h3 className="font-headline-md text-base text-primary-container mb-2 leading-snug">{item.title}</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="reveal bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7">
            <div className="flex items-center gap-3 mb-5">
              <Icon name="ClipboardCheck" className="text-secondary text-xl" />
              <h3 className="font-headline-md text-lg text-primary-container">{"Worth bringing to the call"}</h3>
            </div>
            <ul className="space-y-3">
              {whatToPrepare.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body-md text-sm text-on-surface-variant">
                  <Icon name="Check" className="text-secondary text-sm mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body-sm text-xs text-outline mt-5 pt-4 border-t border-outline-variant/30">{"None of this is a prerequisite. A rough description of the problem is enough to start."}</p>
          </div>

          <div className="reveal reveal-delay-1 bg-primary-container rounded-2xl p-7 text-on-primary">
            <div className="flex items-center gap-3 mb-5">
              <Icon name="Users" className="text-accent-gold text-xl" />
              <h3 className="font-headline-md text-lg">{"Who you will be talking to"}</h3>
            </div>
            <p className="font-body-md text-sm text-primary-fixed-dim leading-relaxed mb-4">
              {"Discovery calls are led by "}<strong className="text-on-primary">{primaryContact.name}</strong>{", "}{primaryContact.role.toLowerCase()}{" not a sales rep working from a script. "}{primaryContact.focus}
            </p>
            <ul className="space-y-2 font-body-sm text-sm text-white/80">
              <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-accent-gold text-sm mt-0.5 shrink-0" /><span>{company.responseCommitment}</span></li>
              <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-accent-gold text-sm mt-0.5 shrink-0" /><span>{company.callLength}{", free, and no obligation to proceed."}</span></li>
              <li className="flex items-start gap-2"><Icon name="CircleCheck" className="text-accent-gold text-sm mt-0.5 shrink-0" /><span>{"Happy to sign an NDA before any technical detail is discussed."}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
