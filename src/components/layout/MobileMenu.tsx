'use client';

import { useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';

export type MobileNavItem =
  | { kind: 'link'; href: string; label: string; indent?: boolean }
  | { kind: 'external'; href: string; label: string }
  | { kind: 'heading'; label: string };

export default function MobileMenu({ items, menuLabel }: { items: MobileNavItem[]; menuLabel: string }) {
  const pathname = usePathname();
  // The panel is open only for the path it was opened on, so it closes after every navigation.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (fn: (o: boolean) => boolean) => setOpenOn(fn(open) ? pathname : null);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={menuLabel}
        className="flex flex-col justify-center gap-[5px] w-9 h-9 items-center border border-border"
      >
        <span className={`block h-px w-4 bg-foreground transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
        <span className={`block h-px w-4 bg-foreground transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-px w-4 bg-foreground transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
      </button>

      {open && (
        // Positioned against the sticky header: its backdrop-filter makes it the containing block,
        // so `fixed` would be clipped to the header height.
        <div className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] z-50 bg-background border-t border-border overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col text-sm">
            {items.map((item, i) => {
              if (item.kind === 'heading') {
                return (
                  <span key={i} className="pt-5 pb-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </span>
                );
              }
              if (item.kind === 'external') {
                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 border-b border-border flex justify-between uppercase tracking-widest text-xs"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden>↗</span>
                  </a>
                );
              }
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`py-3 border-b border-border uppercase tracking-widest text-xs ${item.indent ? 'pl-4 text-muted-foreground' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
