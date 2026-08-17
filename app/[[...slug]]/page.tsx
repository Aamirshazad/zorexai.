import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageComponents } from '@/lib/page-components';
import { createPageMetadata } from '@/lib/metadata';
import { pageByRoute, pages } from '@/lib/site-data';
import { StructuredData } from '@/components/structured-data';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return pages
    .filter((page) => page.route)
    .map((page) => ({ slug: page.route.split('/') }));
}

function routeFromParams(slug?: string[]) {
  return slug?.join('/') ?? '';
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const route = routeFromParams((await params).slug);
  const page = pageByRoute.get(route);
  return page ? createPageMetadata(page) : {};
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const route = routeFromParams((await params).slug);
  const Component = pageComponents[route];
  const page = pageByRoute.get(route);
  if (!Component || !page) return notFound();
  return (
    <>
      <StructuredData page={page} />
      <Component />
    </>
  );
}
