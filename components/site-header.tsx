'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const navigation = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/process', label: 'Process' },
  { href: '/blog', label: 'Insights' },
  { href: '/about', label: 'About' },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Morph into a floating glass pill once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <nav className="header-inner" aria-label="Primary navigation">
        <Link href="/" className="shrink-0 text-xl font-extrabold tracking-tight text-primary" aria-label="Zorex AI home">
          Zorex<span className="text-secondary"> AI</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className="nav-link"
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn-lift ml-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-on-primary hover:bg-primary-container"
          >
            Book Strategy Call
          </Link>
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="menu-toggle inline-flex size-11 items-center justify-center rounded-full border border-outline-variant/50 text-primary lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="burger" aria-hidden="true" />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="mobile-menu-in absolute inset-x-4 top-[calc(100%-8px)] z-40 max-h-[calc(100dvh-96px)] overflow-y-auto rounded-3xl border border-stone-200 bg-[#FDFCFB] shadow-[0_24px_60px_-24px_rgba(0,34,78,0.35)] lg:hidden">
          <div className="flex flex-col px-5 py-4">
            {navigation.map((item, index) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  ref={index === 0 ? firstMenuItemRef : undefined}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? 'page' : undefined}
                  className={`border-b border-stone-200/80 py-4 text-base font-semibold transition-colors hover:text-primary ${active ? 'text-primary' : 'text-on-surface'}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="btn-lift mt-4 mb-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-on-primary hover:bg-primary-container"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
