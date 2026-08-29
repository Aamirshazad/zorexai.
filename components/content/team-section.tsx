import { Icon } from '@/components/ui/icon';
import { company, initials, leadership, teamComposition } from '@/content/company';

/**
 * Named leadership plus a headcount breakdown. Deliberately monogram avatars
 * rather than photography: stock photos of strangers presented as our team
 * would be the exact kind of unearned signal this page exists to avoid.
 */
export function TeamSection() {
  const composedCount = teamComposition.reduce((total, group) => total + group.count, 0) + leadership.length;

  return (
    <section className="py-section-padding px-5 sm:px-8 bg-surface-container-low border-t border-outline-variant/20" id="team">
      <div className="max-w-container-max mx-auto">
        <div className="reveal max-w-3xl mb-14">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"The Team"}</span>
          <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4">{"A team of "}{company.headcount}{". You work with the people who build it."}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{company.structure}{" The people who scope your system are the people who build and support it — there is no handoff to a delivery team you have not met."}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {leadership.map((person, index) => (
            <article
              key={person.name}
              className={`reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ''} card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7 flex flex-col`}
            >
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="w-12 h-12 shrink-0 rounded-xl bg-primary-container text-accent-gold font-headline-md text-base flex items-center justify-center tracking-wide"
                  aria-hidden="true"
                >
                  {initials(person.name)}
                </span>
                <Icon name={person.icon} className="text-secondary text-xl ml-auto" />
              </div>
              <h3 className="font-headline-md text-lg text-primary-container leading-snug">{person.name}</h3>
              <p className="font-label-sm text-xs uppercase tracking-wider text-secondary mt-1 mb-4">{person.role}</p>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-3">{person.focus}</p>
              <p className="font-body-sm text-xs text-outline leading-relaxed mt-auto pt-3 border-t border-outline-variant/30">{person.background}</p>
            </article>
          ))}
        </div>

        <div className="reveal bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-7 sm:p-9">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 pb-6 border-b border-outline-variant/30">
            <div>
              <h3 className="font-headline-md text-xl text-primary-container">{"The other "}{composedCount - leadership.length}{", by discipline"}</h3>
              <p className="font-body-md text-sm text-on-surface-variant mt-1">{"Who is actually available to work on your system, and what each of them does."}</p>
            </div>
            <p className="font-label-sm text-xs uppercase tracking-wider text-outline shrink-0">{composedCount}{" people total"}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {teamComposition.map((group) => (
              <div key={group.discipline} className="flex flex-col">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-headline-md text-3xl text-primary-container">{group.count}</span>
                  <Icon name={group.icon} className="text-secondary text-base mb-1" />
                </div>
                <h4 className="font-headline-md text-base text-primary-container mb-2">{group.discipline}</h4>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{group.detail}</p>
              </div>
            ))}
          </div>
          <p className="font-body-sm text-xs text-outline mt-8 pt-6 border-t border-outline-variant/30 leading-relaxed">{company.coverage}{" Discovery, architecture, and build stay in-house — we do not subcontract delivery."}</p>
        </div>
      </div>
    </section>
  );
}
