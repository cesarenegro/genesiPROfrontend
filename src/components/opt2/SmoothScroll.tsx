'use client';

import { useEffect } from 'react';
import { usePathname } from '@/i18n/routing';

/**
 * Dependency-free smooth wheel scrolling (Lenis-style inertia) for desktop pointers.
 * Touch devices keep native scrolling, which is already fluid and is what makes
 * the sticky "stacked sections" effect feel natural on mobile.
 * Disabled for users who prefer reduced motion.
 */
type Ctl = { stop: () => void; start: () => void; to: (y: number) => void };
declare global {
  interface Window {
    __genesiScroll?: Ctl;
  }
}

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    let target = window.scrollY;
    let current = window.scrollY;
    let raf = 0;
    let running = false;
    let paused = false;
    const ease = 0.09;

    const max = () => document.documentElement.scrollHeight - window.innerHeight;

    const tick = () => {
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.5) {
        current = target;
        running = false;
      }
      window.scrollTo(0, current);
      if (running) raf = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      if (paused || e.ctrlKey) return;
      // Let scrollable inner elements (menus, modals) handle their own wheel.
      let el = e.target as HTMLElement | null;
      while (el && el !== document.body) {
        const s = getComputedStyle(el);
        if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight) return;
        el = el.parentElement;
      }
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY;
      if (!running) current = window.scrollY;
      target = Math.max(0, Math.min(max(), target + delta));
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    // Keep in sync with keyboard, scrollbar drag and in-page navigation.
    const onScroll = () => {
      if (!running) target = current = window.scrollY;
    };

    window.__genesiScroll = {
      stop: () => {
        paused = true;
        running = false;
        cancelAnimationFrame(raf);
      },
      start: () => {
        paused = false;
        target = current = window.scrollY;
      },
      to: (y: number) => {
        cancelAnimationFrame(raf);
        running = false;
        target = current = y;
        window.scrollTo(0, y);
      },
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      delete window.__genesiScroll;
    };
  }, []);

  // New page: start from the top without the inertia carrying over.
  useEffect(() => {
    if (window.location.hash) return;
    if (window.__genesiScroll) window.__genesiScroll.to(0);
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
