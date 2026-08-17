import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-8 pt-20">
      <div className="max-w-2xl text-center">
        <div className="mb-8 flex justify-center"><Icon name="Globe2" className="size-24 text-primary-container/20" strokeWidth={1.5} /></div>
        <h1 className="mb-4 text-8xl font-extrabold tracking-tighter text-primary-container">404</h1>
        <h2 className="mb-6 text-2xl font-bold text-on-surface">This page does not exist.</h2>
        <p className="mx-auto mb-10 max-w-md text-lg text-on-surface-variant">The page you requested could not be found. Let&apos;s get you back to the work that matters.</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-primary-container px-8 py-4 text-xs font-semibold uppercase tracking-wider text-on-primary shadow-md hover:bg-primary"><Icon name="ArrowLeft" className="mr-2 size-4" />Back to Home</Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border-2 border-primary-container px-8 py-4 text-xs font-semibold uppercase tracking-wider text-primary-container hover:bg-primary-container hover:text-on-primary">Book a Strategy Call</Link>
        </div>
      </div>
    </main>
  );
}
