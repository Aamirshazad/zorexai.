import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { OptimizedImage } from '@/components/ui/optimized-image';

export function FourPhases({ showProcessLink = false }: { showProcessLink?: boolean }) {
  return (
    <section className="py-section-padding px-5 sm:px-8 bg-surface">
      <div className="max-w-container-max mx-auto">
        <div className="reveal text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">{"The Four Phases"}</span>
          <h2 className="font-headline-lg text-headline-lg text-primary-container">{"A clear path from audit to ownership."}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="reveal card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden flex flex-col">
            <div className="h-52 overflow-hidden relative">
              <OptimizedImage src="/assets/images/process_phase_1_audit.png" alt="Workflow audit session mapping business operations" width={1200} height={800} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/50 to-transparent"></div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-primary-container text-accent-gold rounded-full flex items-center justify-center font-headline-md font-bold border-4 border-white/20 shadow-lg">{"1"}</div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className="font-headline-md text-2xl text-primary-container mb-3">{"Workflow Audit"}</h3>
              <p className="font-body-md text-on-surface-variant mb-6">{"We map your workflows and pinpoint where AI can add the most value — and where it can't. Mutual NDAs come first."}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full flex items-center gap-1.5"><Icon name="ChartNoAxesCombined" className="text-secondary text-xs" />{"Process mapping"}</span>
                <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full flex items-center gap-1.5"><Icon name="Lock" className="text-secondary text-xs" />{"NDA first"}</span>
                <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full flex items-center gap-1.5"><Icon name="Database" className="text-secondary text-xs" />{"Data readiness"}</span>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-1 card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden flex flex-col">
            <div className="h-52 overflow-hidden relative">
              <OptimizedImage src="/assets/images/process_phase_2_design.png" alt="Systems architect designing AI infrastructure" width={1200} height={800} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/50 to-transparent"></div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-primary-container text-accent-gold rounded-full flex items-center justify-center font-headline-md font-bold border-4 border-white/20 shadow-lg">{"2"}</div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className="font-headline-md text-2xl text-primary-container mb-3">{"System Design"}</h3>
              <p className="font-body-md text-on-surface-variant mb-6">{"A secure, scalable blueprint tailored to your stack: model selection, integrations, and protection of your proprietary knowledge."}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full flex items-center gap-1.5"><Icon name="Boxes" className="text-secondary text-xs" />{"System blueprint"}</span>
                <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full flex items-center gap-1.5"><Icon name="ShieldCheck" className="text-secondary text-xs" />{"Security architecture"}</span>
                <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full flex items-center gap-1.5"><Icon name="Network" className="text-secondary text-xs" />{"Tool integration"}</span>
              </div>
            </div>
          </div>
          <div className="reveal card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden flex flex-col">
            <div className="h-52 overflow-hidden relative">
              <OptimizedImage src="/assets/images/process_phase_3_engineering.png" alt="AI engineering team building and testing the system" width={1200} height={800} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/50 to-transparent"></div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-primary-container text-accent-gold rounded-full flex items-center justify-center font-headline-md font-bold border-4 border-white/20 shadow-lg">{"3"}</div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className="font-headline-md text-2xl text-primary-container mb-3">{"Build & Test"}</h3>
              <p className="font-body-md text-on-surface-variant mb-6">{"The architecture becomes robust code: resilient pipelines, programmatic guardrails, and aggressive testing before anything goes live."}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full flex items-center gap-1.5"><Icon name="Cpu" className="text-secondary text-xs" />{"Implementation"}</span>
                <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full flex items-center gap-1.5"><Icon name="FolderCheck" className="text-secondary text-xs" />{"Guardrails"}</span>
                <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full flex items-center gap-1.5"><Icon name="Bug" className="text-secondary text-xs" />{"Stress testing"}</span>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-1 card-lift bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden flex flex-col">
            <div className="h-52 overflow-hidden relative">
              <OptimizedImage src="/assets/images/process_phase_4_handoff.png" alt="Deployment and handoff of the finished AI system" width={1200} height={800} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/50 to-transparent"></div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-primary-container text-accent-gold rounded-full flex items-center justify-center font-headline-md font-bold border-4 border-white/20 shadow-lg">{"4"}</div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className="font-headline-md text-2xl text-primary-container mb-3">{"Deploy & Measure"}</h3>
              <p className="font-body-md text-on-surface-variant mb-6">{"A phased rollout with clear documentation and a clean handoff. Your team is trained, and you fully own the system."}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full flex items-center gap-1.5"><Icon name="FileCheck2" className="text-secondary text-xs" />{"Supervised launch"}</span>
                <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full flex items-center gap-1.5"><Icon name="BookOpen" className="text-secondary text-xs" />{"Documentation"}</span>
                <span className="text-[11px] font-label-sm bg-surface-container-low border border-outline-variant/40 text-on-surface-variant px-2.5 py-1 rounded-full flex items-center gap-1.5"><Icon name="TrendingUp" className="text-secondary text-xs" />{"Clean handoff"}</span>
              </div>
            </div>
          </div>
        </div>
        {showProcessLink && (
          <div className="reveal text-center mt-12">
            <Link className="inline-flex items-center gap-2 font-label-sm uppercase tracking-wider text-primary-container hover:text-secondary transition-colors group" href="/process">{"See Full Process"}<Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" /></Link>
          </div>
        )}
      </div>
    </section>
  );
}
