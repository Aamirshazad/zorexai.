import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

export function FinalCta({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="py-section-padding px-5 sm:px-8 bg-primary-container relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/50 via-primary-container to-primary-container"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="reveal font-headline-lg text-headline-lg text-on-primary mb-6">{heading}</h2>
        <p className="reveal reveal-delay-1 font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mb-8">{body}</p>
        <div className="reveal reveal-delay-2 pt-2">
          <Link className="btn-lift w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-accent-gold text-primary-container rounded-full font-label-sm uppercase tracking-wider font-bold hover:bg-white shadow-lg hover:shadow-xl" href="/contact">{"Book a Strategy Call"}<Icon name="ArrowRight" className="ml-2 text-sm" /></Link>
        </div>
      </div>
    </section>
  );
}
