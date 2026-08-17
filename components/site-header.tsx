'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/icon';

const navigation = [
  { href: '/services', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Examples' },
  { href: '/process', label: 'How We Work' },
  { href: '/about', label: 'About' },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    firstMenuItemRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-200 bg-[#FDFCFB]/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8" aria-label="Primary navigation">
        <Link href="/" className="shrink-0 font-headline-md font-extrabold tracking-tight text-primary" aria-label="Zorex AI home">
          Zorex<span className="text-secondary"> AI</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-sm text-sm font-semibold transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${active ? 'text-primary' : 'text-on-surface-variant'}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-on-primary transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Book Strategy Call
          </Link>
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-outline-variant/50 text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'X' : 'Menu'} aria-hidden size={22} />
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-stone-200 bg-[#FDFCFB] lg:hidden">
        <div className="mx-auto flex max-w-[1280px] flex-col px-5 py-5 sm:px-8">
          {navigation.map((item, index) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                ref={index === 0 ? firstMenuItemRef : undefined}
                href={item.href}
                onClick={closeMenu}
                aria-current={active ? 'page' : undefined}
                className={`border-b border-stone-200 py-4 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${active ? 'text-primary' : 'text-on-surface'}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-on-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
    </header>
  );
}
