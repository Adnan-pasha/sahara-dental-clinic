'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { primaryNav, siteConfig } from '@/lib/site';

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="nav-links-shell">
      {primaryNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={pathname === item.href ? 'page' : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        className="mobile-nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className={`hamburger${open ? ' open' : ''}`} />
      </button>

      {open && (
        <div
          className="mobile-nav-backdrop"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      <div className={`mobile-nav-drawer${open ? ' open' : ''}`} aria-label="Navigation menu">
        <nav>
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              aria-current={pathname === item.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="button button-primary mobile-nav-cta"
            onClick={() => setOpen(false)}
          >
            Book Appointment <span className="arrow">→</span>
          </Link>
          <div className="mobile-nav-contact">
            <a href={siteConfig.phoneHref} onClick={() => setOpen(false)}>
              {siteConfig.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
