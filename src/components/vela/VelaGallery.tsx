'use client';

import { useState } from 'react';
import Image from 'next/image';
import { VelaImage, Locale } from '@/lib/vela';

interface Props {
  images: VelaImage[];
  locale: Locale;
  productName: string;
}

export default function VelaGallery({ images, locale, productName }: Props) {
  const [activeImage, setActiveImage] = useState<VelaImage>(images[0] || null);

  if (!images.length) {
    return (
      <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-400 text-xs uppercase tracking-widest">
        Nessuna immagine disponibile
      </div>
    );
  }

  const activeLabel = activeImage.label[locale] || activeImage.label.en;
  const isDrawing = activeImage.type === 'drawing';

  return (
    <div className="flex flex-col gap-6">
      {/* Large Featured Canvas */}
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 transition-colors ${
          isDrawing ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-100 dark:bg-zinc-900'
        }`}
      >
        <Image
          key={activeImage.url}
          src={activeImage.url}
          alt={`${productName} — ${activeLabel}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className={`animate-in fade-in duration-500 ${
            isDrawing ? 'object-contain p-2 sm:p-4' : 'object-cover'
          }`}
        />

        {/* Floating View Badge */}
        <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/90 backdrop-blur-md px-3.5 py-1.5 text-[11px] uppercase tracking-widest text-zinc-800 dark:text-zinc-200 font-medium border border-zinc-200/50 dark:border-zinc-800/50 shadow-xs flex items-center gap-2">
          {isDrawing && (
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 inline-block" />
          )}
          <span>{activeLabel}</span>
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {images.map((img, idx) => {
            const isSelected = activeImage.url === img.url;
            const thumbLabel = img.label[locale] || img.label.en;
            const thumbIsDrawing = img.type === 'drawing';

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`group relative aspect-square w-full overflow-hidden border transition-all cursor-pointer ${
                  thumbIsDrawing ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-100 dark:bg-zinc-900'
                } ${
                  isSelected
                    ? 'border-zinc-900 dark:border-zinc-100 ring-1 ring-zinc-900 dark:ring-zinc-100'
                    : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 opacity-75 hover:opacity-100'
                }`}
                title={thumbLabel}
              >
                <Image
                  src={img.url}
                  alt={thumbLabel}
                  fill
                  sizes="120px"
                  className={thumbIsDrawing ? 'object-contain p-1.5' : 'object-cover'}
                />
                <span className="absolute bottom-1 left-1 right-1 text-[9px] uppercase tracking-tighter truncate bg-black/75 text-white px-1 py-0.5 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {thumbLabel}
                </span>
                {thumbIsDrawing && (
                  <span className="absolute top-1 right-1 bg-zinc-900/80 text-white text-[8px] font-mono px-1 py-0.5 tracking-tighter uppercase">
                    QUOTE
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
