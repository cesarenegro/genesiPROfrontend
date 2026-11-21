'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { usePathname } from '@/i18n/routing';

/**
 * Fixed header wrapper. Over a full-screen hero ([data-hero] on the page) it starts
 * transparent with a soft gradient, then turns solid charcoal once the page scrolls.
 * On pages without a hero it is solid from the start.
 */
export default function HeaderShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [solid, setSolid] = useState(true);

  useEffect(() => {
    const hasHero = () => !!document.querySelector('[data-hero]');
    const update = () => setSolid(!hasHero() || window.scrollY > 40);
    // The page swaps in after navigation: check now and once more on the next frame.
    update();
    const raf = requestAnimationFrame(update);
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', update);
    };
  }, [pathname]);

  return (
    <header
      data-solid={solid}
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] text-white transition-[background-color,box-shadow] duration-200 ease-[var(--ease-out)] ${
        solid
          ? 'bg-[#1e1e1e]/92 backdrop-blur-md shadow-[0_1px_0_rgb(255_255_255/0.06)]'
          : 'bg-gradient-to-b from-black/55 via-black/20 to-transparent'
      }`}
    >
      {children}
    </header>
  );
}
