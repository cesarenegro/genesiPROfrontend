'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import type { GalleryCategory, GalleryItem } from '@/lib/projects';

interface Props {
  items: GalleryItem[];
  categories: GalleryCategory[];
  labels: Record<GalleryCategory, string>;
  allLabel: string;
  closeLabel: string;
}

export default function ProjectsGallery({ items, categories, labels, allLabel, closeLabel }: Props) {
  const [filter, setFilter] = useState<GalleryCategory | 'all'>('all');
  const [open, setOpen] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === 'all' ? items : items.filter((i) => i.category === filter)),
    [items, filter]
  );

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((o) => (o === null ? o : (o + d + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  const current = open !== null ? visible[open] : null;

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {(['all', ...categories] as const).map((c) => {
          const active = filter === c;
          const count = c === 'all' ? items.length : items.filter((i) => i.category === c).length;
          if (count === 0) return null;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${
                active
                  ? 'bg-foreground text-background border-foreground'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground'
              }`}
            >
              {c === 'all' ? allLabel : labels[c]} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
        {visible.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpen(idx)}
            className="group relative block w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 break-inside-avoid"
            aria-label={labels[item.category]}
          >
            <Image
              src={item.src}
              alt={`GENESI — ${labels[item.category]}`}
              width={item.w}
              height={item.h}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <span className="absolute bottom-0 left-0 right-0 p-3 text-left text-[10px] uppercase tracking-widest text-white bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              {labels[item.category]}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-xs uppercase tracking-widest px-3 py-2 border border-white/30"
          >
            {closeLabel} ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 md:left-6 text-white/70 hover:text-white text-4xl px-3 py-6"
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="relative w-full h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.src}
              src={current.src}
              alt={`GENESI — ${labels[current.category]}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 md:right-6 text-white/70 hover:text-white text-4xl px-3 py-6"
            aria-label="Next"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-[11px] uppercase tracking-widest text-white/70">
            {labels[current.category]} · {(open ?? 0) + 1} / {visible.length}
          </div>
        </div>
      )}
    </div>
  );
}
