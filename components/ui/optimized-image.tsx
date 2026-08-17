import Image, { type ImageProps } from 'next/image';

export function OptimizedImage({ alt, sizes, ...props }: ImageProps) {
  return <Image alt={alt ?? ""} sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"} {...props} />;
}
