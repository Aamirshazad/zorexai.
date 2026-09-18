import Link from 'next/link';
import { getBreadcrumbTrail } from '@/lib/site-data';

/**
 * Visible breadcrumb trail.
 *
 * Renders the same trail that components/structured-data.tsx publishes as
 * BreadcrumbList JSON-LD, from the same source function, so the markup a
 * crawler reads and the trail a person sees are guaranteed to match.
 *
 * Deliberately not rendered on the homepage: a single "Home" crumb carries no
 * information, and Google's guidance is to omit breadcrumbs where there is no
 * hierarchy to express.
 */
export function Breadcrumbs({ route, className = '' }: { route: string; className?: string }) {
  const trail = getBreadcrumbTrail(route);
  if (trail.length < 2) return null;

  return (
    <nav className={`breadcrumbs ${className}`} aria-label="Breadcrumb">
      <ol>
        {trail.map((crumb, index) => (
          <li key={crumb.href}>
            {index > 0 && (
              <span className="breadcrumbs-sep" aria-hidden="true">
                /
              </span>
            )}
            {crumb.current ? (
              <span aria-current="page">{crumb.name}</span>
            ) : (
              <Link href={crumb.href}>{crumb.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}