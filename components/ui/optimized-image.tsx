import Image, { type ImageProps } from 'next/image';

/**
 * Site-wide <Image> wrapper. `sizes` defaults to a sensible two-column
 * layout; pages override when the render context differs.
 *
 * LCP contract: any image that is visible on initial scroll (hero panels on
 * service/industry/case-study pages) must pass `priority`. Below-fold images
 * stay lazy (the default), which keeps the homepage hero pure text
 * fast while letting detail pages preload their hero panel.
 */
export function OptimizedImage({ alt, sizes, ...props }: ImageProps) {
  return <Image alt={alt ?? ''} sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'} {...props} />;
}
