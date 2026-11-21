'use client';

import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing';

export type MenuCard = { href: string; label: string; image: string };
export type MenuEntry =
  | { kind: 'link'; href: string; label: string }
  | { kind: 'external'; href: string; label: string }
  | { kind: 'group'; label: string; cards: MenuCard[] };

interface Props {
  entries: MenuEntry[];
  labels: { menu: string; close: string };
  locales: ReactNode;
  account: ReactNode;
}

const noop = () => () => {};

/** Minotti-style full-screen menu: charcoal overlay, large uppercase rows, accordions with photo cards. */
export default function FullMenu({ entries, labels, locales, account }: Props) {
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const open = openOn === pathname; // closes automatically after navigation
  // The overlay is portaled to <body> (outside the header's backdrop-filter), so only after hydration.
  const mounted = useSyncExternalStore(noop, () => true, () => false);

  useEffect(() => {
    if (!open) return;
    window.__genesiScroll?.stop();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenOn(null);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.__genesiScroll?.start();
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const toggle = () => {
    setExpanded(null);
    setOpenOn(open ? null : pathname);
  };

  const overlay = (
    <div
      className={`fixed inset-0 z-[90] bg-[#262626] text-white transition-[clip-path,opacity,visibility] motion-reduce:transition-[opacity,visibility] motion-reduce:duration-200 ${
        open
          ? 'visible opacity-100 [clip-path:inset(0_0_0_0)] duration-[450ms] ease-[var(--ease-drawer)]'
          : 'invisible opacity-0 [clip-path:inset(0_0_100%_0)] motion-reduce:[clip-path:none] duration-300 ease-[var(--ease-out)]'
      }`}
      aria-hidden={!open}
    >
      <div className="h-full overflow-y-auto overscroll-contain pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)]">
        {/* Top row mirrors the header so the close button sits where the burger was */}
        <div className="hidden lg:flex items-center px-10 h-[var(--topbar-h)] text-[10.5px] uppercase tracking-[0.22em] text-white/60 bg-black/25">{locales}</div>
        <div className="relative flex items-center px-5 lg:px-10 h-[var(--header-h)]">
          <button
            type="button"
            onClick={toggle}
            aria-label={labels.close}
            className="flex items-center gap-3 min-h-[44px] text-[11px] uppercase tracking-[0.25em] active:scale-[0.97] transition-transform duration-150 ease-[var(--ease-out)]"
          >
            <span className="relative w-10 h-10">
              <span className="absolute left-1/2 top-1/2 w-7 h-px bg-white -translate-x-1/2 rotate-45" />
              <span className="absolute left-1/2 top-1/2 w-7 h-px bg-white -translate-x-1/2 -rotate-45" />
            </span>
            <span className="hidden sm:inline">{labels.close}</span>
          </button>
          <Link href="/" onClick={() => setOpenOn(null)} className="absolute left-1/2 -translate-x-1/2">
            <Image src="/images/logo.png" alt="GENESI" width={120} height={64} className="h-7 sm:h-8 lg:h-10 w-auto brightness-0 invert" />
          </Link>
        </div>

        <div className="lg:hidden px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-white/60 bg-black/25">{locales}</div>

        <nav className="px-5 lg:px-10 pb-16">
          {entries.map((entry, i) => {
            const row =
              'w-full flex items-center justify-between border-b border-white/15 py-4 lg:py-5 text-lg lg:text-2xl uppercase tracking-[0.14em] font-light transition-colors duration-200 ease-[var(--ease-out)]';
            if (entry.kind === 'group') {
              const isOpen = expanded === i;
              return (
                <div key={i}>
                  <button type="button" onClick={() => setExpanded(isOpen ? null : i)} className={`${row} hover:text-white/70 active:scale-[0.99]`} aria-expanded={isOpen}>
                    <span>{entry.label}</span>
                    <span className={`text-2xl font-extralight transition-transform duration-200 ease-[var(--ease-out)] ${isOpen ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-[260ms] ease-[var(--ease-out)] ${isOpen ? '[grid-template-rows:1fr]' : '[grid-template-rows:0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="flex lg:grid lg:grid-cols-4 xl:grid-cols-6 gap-4 py-6 overflow-x-auto snap-x snap-mandatory scroll-px-5 lg:scroll-px-0 -mx-5 px-5 lg:mx-0 lg:px-0">
                        {entry.cards.map((card) => (
                          <Link key={card.href} href={card.href} onClick={() => setOpenOn(null)} className="group snap-start shrink-0 w-[62vw] sm:w-[40vw] lg:w-auto active:scale-[0.98] transition-transform duration-150 ease-[var(--ease-out)]">
                            <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                              <Image src={card.image} alt={card.label} fill sizes="(max-width: 1024px) 62vw, 16vw" className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03]" />
                            </div>
                            <span className="block mt-3 text-[11px] uppercase tracking-[0.18em] text-white/80 group-hover:text-white transition-colors duration-200">{card.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            if (entry.kind === 'external') {
              return (
                <a key={i} href={entry.href} target="_blank" rel="noopener noreferrer" className={`${row} hover:text-white/70`}>
                  <span>{entry.label}</span>
                  <span className="text-base font-extralight">↗</span>
                </a>
              );
            }
            return (
              <Link key={i} href={entry.href} onClick={() => setOpenOn(null)} className={`${row} hover:text-white/70`}>
                <span>{entry.label}</span>
              </Link>
            );
          })}
          <div className="pt-8 text-[11px] uppercase tracking-[0.2em] text-white/70">{account}</div>
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-label={labels.menu}
        aria-expanded={open}
        className="group flex items-center gap-3 min-h-[44px] text-[11px] uppercase tracking-[0.25em] active:scale-[0.97] transition-transform duration-150 ease-[var(--ease-out)]"
      >
        <span className="relative w-10 h-10">
          <span className="absolute left-1.5 top-[14px] w-7 h-px bg-current origin-left transition-transform duration-200 ease-[var(--ease-out)] group-hover:scale-x-[0.72]" />
          <span className="absolute left-1.5 top-[20px] w-7 h-px bg-current" />
          <span className="absolute left-1.5 top-[26px] w-7 h-px bg-current origin-left transition-transform duration-200 ease-[var(--ease-out)] group-hover:scale-x-[0.57]" />
        </span>
        <span className="hidden sm:inline">{labels.menu}</span>
      </button>
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
