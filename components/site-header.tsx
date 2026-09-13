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
    <header className={`site-header font-ui ${scrolled || open ? 'is-scrolled' : ''}`}>
      <nav className="header-inner" aria-label="Primary navigation">
        <Link href="/" className="shrink-0 text-xl font-semibold tracking-tight text-ink" aria-label="Zorex AI home">
          Zorex<span className="text-ink-3"> AI</span>
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
            className="nav-cta ml-3"
          >
            Book Strategy Call
          </Link>
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="menu-toggle inline-flex size-11 items-center justify-center rounded-full border border-[var(--line-strong)] text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="burger" aria-hidden="true" />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="mobile-menu-in font-ui absolute inset-x-4 top-[calc(100%-8px)] z-40 max-h-[calc(100dvh-96px)] overflow-y-auto rounded-3xl border border-[var(--line)] bg-[var(--page-wash)] shadow-[0_24px_60px_-24px_rgba(20,20,20,0.18)] lg:hidden">
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
                  className={`border-b border-[var(--line)] py-4 text-base font-medium transition-colors hover:text-ink ${active ? 'text-ink' : 'text-ink-2'}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="nav-cta mt-4 mb-2"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
