'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { VelaShowerEnclosure, Locale, resolveLocalizedText } from '@/lib/vela';

interface Props {
  item: VelaShowerEnclosure;
  locale: Locale;
  onOpenModal: (item: VelaShowerEnclosure) => void;
}

export default function VelaShowerCard({ item, locale, onOpenModal }: Props) {
  const [viewMode, setViewMode] = useState<'ambient' | 'elevation'>('ambient');
  const hasElevation = Boolean(item.images.elevation);

  const currentImage = viewMode === 'elevation' && item.images.elevation ? item.images.elevation : item.images.ambient;
  const name = resolveLocalizedText(item.name, locale);
  const subtitle = resolveLocalizedText(item.subtitle, locale);
  const description = resolveLocalizedText(item.description, locale);
  const treatment = resolveLocalizedText(item.specs.treatment, locale);

  const categoryLabels: Record<string, Record<string, string>> = {
    pivot: { it: 'Bilico Pivot', en: 'Pivot Glass' },
    sliding: { it: 'Scorrevole', en: 'Sliding Glass' },
    'walk-in': { it: 'Walk-In', en: 'Walk-In' },
    folding: { it: 'A Soffietto', en: 'Bi-Fold' },
    niche: { it: 'Nicchia', en: 'Niche' },
    island: { it: 'Isola / Angolare', en: 'Corner / Island' },
  };

  const catLabel = categoryLabels[item.category]
    ? categoryLabels[item.category][locale] || categoryLabels[item.category].en
    : item.category.toUpperCase();

  return (
    <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-lg">
      {/* Top Image Canvas */}
      <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <Image
          src={currentImage}
          alt={`${name} — ${viewMode === 'elevation' ? 'Prospetto Tecnico' : 'Ambientazione'}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
        />

        {/* Code & Category Badges (Top-Left) */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/85 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 border border-white/15 z-10">
          <span className="font-semibold text-amber-400 dark:text-amber-300">{item.code}</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-200">{catLabel}</span>
        </div>

        {/* View Mode Switcher (Top-Right, if elevation exists) */}
        {hasElevation && (
          <div className="absolute top-3 right-3 flex items-center bg-black/80 backdrop-blur-xs p-0.5 rounded-full border border-white/15 z-10">
            <button
              type="button"
              onClick={() => setViewMode('ambient')}
              className={`px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider transition-colors rounded-full ${
                viewMode === 'ambient' ? 'bg-white text-black font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Ambient
            </button>
            <button
              type="button"
              onClick={() => setViewMode('elevation')}
              className={`px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider transition-colors rounded-full ${
                viewMode === 'elevation' ? 'bg-amber-400 text-black font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              2D CAD
            </button>
          </div>
        )}

        {/* Glass Thickness Indicator (Bottom-Right) */}
        <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs text-zinc-200 text-[10px] font-mono px-2 py-0.5 border border-white/10 z-10">
          Cristallo {item.specs.glassThicknessMm.join(' / ')} mm
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="mb-2">
            <h3 className="text-lg font-serif text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {name}
            </h3>
            {subtitle && (
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-3 mb-4">
            {description}
          </p>

          {/* Spec Tags */}
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono border-t border-zinc-100 dark:border-zinc-800/80 pt-3 mb-4">
            <div>
              <span className="text-zinc-400 block text-[10px] uppercase tracking-wider">
                {locale === 'it' ? 'Finiture Profili' : 'Metal Finishes'}
              </span>
              <span className="text-zinc-800 dark:text-zinc-200 truncate block">
                {item.specs.metalFinishes.slice(0, 2).join(', ')}
                {item.specs.metalFinishes.length > 2 && ' +altre'}
              </span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[10px] uppercase tracking-wider">
                {locale === 'it' ? 'Tipologie Vetro' : 'Glass Variants'}
              </span>
              <span className="text-zinc-800 dark:text-zinc-200 truncate block">
                {item.specs.glassFinishes.slice(0, 2).join(', ')}
              </span>
            </div>
          </div>

          {/* Nano-Tech Treatment Badge */}
          {treatment && (
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 px-2 py-1 mb-4 rounded-xs">
              <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="truncate">{treatment}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onOpenModal(item)}
            className="flex-1 text-center py-2 px-3 text-xs font-mono font-medium border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-100 text-zinc-800 dark:text-zinc-200 transition-colors"
          >
            {locale === 'it' ? 'Scheda & Quote CAD' : 'Specs & 2D CAD'}
          </button>
          <Link
            href="/contatti"
            className="text-center py-2 px-3 text-xs font-mono font-medium bg-zinc-900 dark:bg-zinc-100 hover:bg-amber-600 dark:hover:bg-amber-400 text-white dark:text-zinc-900 transition-colors"
          >
            {locale === 'it' ? 'Richiedi Progetto' : 'Inquire'}
          </Link>
        </div>
      </div>
    </div>
  );
}
