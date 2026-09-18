'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/icon';
import { services } from '@/content/services';
import { industries } from '@/content/industries';

type MenuKey = 'services' | 'industries';

/**
 * Primary navigation.
 *
 * This was previously a flat array of six links, which meant the six service
 * pages and nine industry pages were reachable only from the footer. A buyer
 * who navigates by capability rather than by scrolling could not see the
 * catalogue at all. Services and Industries now open dropdown panels on
 * desktop, and the mobile menu exposes the same groups as disclosures.
 *
 * Item labels read from content/services.ts and content/industries.ts, so a
 * rename propagates to the header, the footer, and the index pages at once.
 */
const menus: {
  key: MenuKey;
  label: string;
  href: string;
  count: string;
  items: { href: string; label: string; desc: string }[];
  footer: { label: string; href: string };
}[] = [
  {
    key: 'services',
    label: 'Services',
    href: '/services',
    count: 'Six capabilities',
    items: services.map((service) => ({ href: service.href, label: service.name, desc: service.menuLine })),
    footer: { label: 'All six services', href: '/services' },
  },
  {
    key: 'industries',
    label: 'Industries',
    href: '/industries',
    count: 'Nine sectors',
    items: industries.map((industry) => ({ href: industry.href, label: industry.name, desc: industry.meta })),
    footer: { label: 'All nine industries', href: '/industries' },
  },
];

const simpleLinks = [
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
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileGroup, setMobileGroup] = useState<MenuKey | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Close everything on navigation.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setOpenMenu(null);
    setMobileGroup(null);
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

  // Escape closes an open dropdown and returns focus to its trigger; a pointer
  // press anywhere outside the nav dismisses the panel.
  useEffect(() => {
    if (!openMenu) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const trigger = navRef.current?.querySelector<HTMLButtonElement>(`[data-menu-trigger="${openMenu}"]`);
      setOpenMenu(null);
      trigger?.focus();
    };

    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [openMenu]);

  const closeMenu = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <header className={`site-header font-ui ${scrolled || open || openMenu ? 'is-scrolled' : ''}`}>
      <nav className="header-inner" aria-label="Primary navigation" ref={navRef}>
        <Link href="/" className="shrink-0 text-xl font-semibold tracking-tight text-ink" aria-label="Zorex AI home">
          Zorex<span className="text-ink-3"> AI</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {menus.map((menu) => {
            const active = isActive(pathname, menu.href) || menu.items.some((item) => isActive(pathname, item.href));
            const expanded = openMenu === menu.key;
            return (
              <div
                key={menu.key}
                className="nav-menu"
                data-open={expanded}
                onMouseEnter={() => setOpenMenu(menu.key)}
                onMouseLeave={() => setOpenMenu((current) => (current === menu.key ? null : current))}
                onFocus={() => setOpenMenu(menu.key)}
                onBlur={(event) => {
                  // Only close when focus actually leaves this group, so tabbing
                  // into the panel keeps it open.
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setOpenMenu((current) => (current === menu.key ? null : current));
                  }
                }}
              >
                <button
                  type="button"
                  className="nav-link nav-menu-trigger"
                  aria-expanded={expanded}
                  aria-controls={`nav-panel-${menu.key}`}
                  aria-current={active ? 'page' : undefined}
                  data-menu-trigger={menu.key}
                  onClick={(event) => {
                    // Keyboard activation has event.detail === 0; a pointer click
                    // has detail >= 1. For a pointer click the panel is already
                    // open (onMouseEnter and onFocus both fired before this
                    // handler), so toggling here would close it again — which is
                    // exactly what happened: click the trigger and the panel
                    // flashed open then shut. Keyboard activation still toggles,
                    // so Escape/Enter remain the keyboard controls.
                    if (event.detail === 0) setOpenMenu(expanded ? null : menu.key);
                  }}
                >
                  {menu.label}
                  <Icon name="ChevronRight" className="nav-menu-caret size-3.5 rotate-90" aria-hidden />
                </button>

                <div className="nav-menu-panel" id={`nav-panel-${menu.key}`}>
                  <div className="nav-menu-grid">
                    {menu.items.map((item) => (
                      <Link key={item.href} href={item.href} className="nav-menu-item">
                        <span className="nav-menu-item-label">{item.label}</span>
                        <span className="nav-menu-item-desc">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="nav-menu-footer">
                    <span>{menu.count}</span>
                    <Link href={menu.footer.href}>
                      {menu.footer.label}
                      <Icon name="ArrowRight" className="ml-1 size-3.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {simpleLinks.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? 'page' : undefined} className="nav-link">
                {item.label}
              </Link>
            );
          })}

          <Link href="/contact" className="nav-cta ml-3">
            Book a Strategy Call
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
        <div
          id="mobile-menu"
          className="mobile-menu-in font-ui absolute inset-x-4 top-[calc(100%-8px)] z-40 max-h-[calc(100dvh-96px)] overflow-y-auto rounded-3xl border border-[var(--line)] bg-[var(--page-wash)] shadow-[0_24px_60px_-24px_rgba(20,20,20,0.18)] lg:hidden"
        >
          <div className="flex flex-col px-5 py-4">
            {menus.map((menu) => {
              const expanded = mobileGroup === menu.key;
              return (
                <div key={menu.key} className="border-b border-[var(--line)]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-base font-medium text-ink"
                    aria-expanded={expanded}
                    aria-controls={`mobile-group-${menu.key}`}
                    onClick={() => setMobileGroup(expanded ? null : menu.key)}
                  >
                    {menu.label}
                    <Icon
                      name="ChevronRight"
                      className={`size-4 text-ink-3 transition-transform ${expanded ? 'rotate-90' : ''}`}
                      aria-hidden
                    />
                  </button>

                  {expanded && (
                    <div id={`mobile-group-${menu.key}`} className="flex flex-col pb-3">
                      {menu.items.map((item, index) => (
                        <Link
                          key={item.href}
                          ref={menu.key === 'services' && index === 0 ? firstMenuItemRef : undefined}
                          href={item.href}
                          onClick={closeMenu}
                          className="flex min-h-[44px] items-center py-2.5 pl-3 text-sm text-ink-2 transition-colors hover:text-ink"
                        >
                          {item.label}
                        </Link>
                      ))}
                      <Link
                        href={menu.footer.href}
                        onClick={closeMenu}
                        className="min-h-[44px] py-2.5 pl-3 text-sm font-medium text-ink"
                      >
                        {menu.footer.label}
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}

            {simpleLinks.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? 'page' : undefined}
                  className={`border-b border-[var(--line)] py-4 text-base font-medium transition-colors hover:text-ink ${active ? 'text-ink' : 'text-ink-2'}`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link href="/contact" onClick={closeMenu} className="nav-cta mt-4 mb-2">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}