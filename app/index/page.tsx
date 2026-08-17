import type { Metadata } from 'next';
import HomePage from '@/components/pages/home';
import { createPageMetadata } from '@/lib/metadata';
import { pageByRoute } from '@/lib/site-data';
import { StructuredData } from '@/components/structured-data';

export const metadata: Metadata = createPageMetadata(pageByRoute.get('index') || pageByRoute.get('')!);

export default function Page() {
  const page = pageByRoute.get('index') || pageByRoute.get('')!;
  return (
    <>
      <StructuredData page={page} />
      <HomePage />
    </>
  );
}
