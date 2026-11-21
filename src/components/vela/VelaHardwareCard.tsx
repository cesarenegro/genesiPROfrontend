'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { VelaHardwareItem, Locale, resolveLocalizedText } from '@/lib/vela';

interface Props {
  item: VelaHardwareItem;
  locale: Locale;
  onOpenModal: (item: VelaHardwareItem) => void;
}

export default function VelaHardwareCard({ item, locale, onOpenModal }: Props) {
  const t = useTranslations('Vela');
  const hasInSitu = Boolean(item.images.inSitu);
  const [viewMode, setViewMode] = useState<'product' | 'inSitu'>('product');

  const currentImage = viewMode === 'inSitu' && item.images.inSitu ? item.images.inSitu : item.images.product;
  const name = resolveLocalizedText(item.name, locale);
  const subtitle = resolveLocalizedText(item.subtitle, locale);
  const description = resolveLocalizedText(item.description, locale);
  const recommendedFor = resolveLocalizedText(item.recommendedFor, locale);

  const categoryLabels: Record<string, string> = {
    magnetic: t('hardwareCatMagnetic'),
    hinges: t('hardwareCatHinges'),
    'smart-residential': t('hardwareCatSmart'),
    hospitality: t('hardwareCatHospitality'),
    handles: t('hardwareCatHandles'),
  };

  const catLabel = categoryLabels[item.category] || item.category;

  return (
    <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-200 ease-[var(--ease-out)] flex flex-col justify-between overflow-hidden">
      {/* Top Image Canvas */}
      <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <Image
          src={currentImage}
          alt={`${name} — ${viewMode === 'inSitu' ? t('hardwareAltInSitu') : t('hardwareAltProduct')}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03]"
        />

        {/* Brand & Country Badge (Top-Left) */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/85 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 border border-white/15 z-10">
          <span className="font-semibold text-zinc-100">{item.brand}</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-300">{item.country}</span>
        </div>

        {/* View Toggle (Top-Right, if inSitu available) */}
        {hasInSitu && (
          <div className="absolute top-3 right-3 flex items-center bg-black/80 backdrop-blur-xs p-0.5 rounded-full border border-white/15 z-10">
            <button
              type="button"
              onClick={() => setViewMode('product')}
              className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-mono transition-colors cursor-pointer ${
                viewMode === 'product'
                  ? 'bg-white text-zinc-950 font-semibold shadow-xs'
                  : 'text-zinc-300 hover:text-white'
              }`}
              title={t('hardwareTitleViewProduct')}
            >
              {t('hardwareViewProduct')}
            </button>
            <button
              type="button"
              onClick={() => setViewMode('inSitu')}
              className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-mono transition-colors flex items-center gap-1 cursor-pointer ${
                viewMode === 'inSitu'
                  ? 'bg-amber-500 text-black font-semibold shadow-xs'
                  : 'text-zinc-300 hover:text-white'
              }`}
              title={t('hardwareTitleViewInSitu')}
            >
              <span>{t('hardwareViewInSitu')}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </button>
          </div>
        )}

        {/* Category Pill (Bottom-Left) */}
        <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/90 backdrop-blur-xs px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-zinc-800 dark:text-zinc-300 font-semibold border border-zinc-200/50 dark:border-zinc-800/50 z-10">
          {catLabel}
        </div>
      </div>

      {/* Editorial Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug">
            {name}
          </h3>
          <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium">
            {subtitle}
          </p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Technical Specs Compact Grid */}
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-2 text-[11px] font-mono">
          {item.specs.loadCapacityKg && (
            <div className="flex justify-between items-baseline text-zinc-600 dark:text-zinc-400">
              <span className="font-sans text-[10px] uppercase tracking-wider text-zinc-400">
                {t('hardwareLoadCapacity')}
              </span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-200 tabular-nums">
                {item.specs.loadCapacityKg} {t('hardwareLoadCapacityUnit')}
              </span>
            </div>
          )}

          {item.specs.backsetMm && (
            <div className="flex justify-between items-baseline text-zinc-600 dark:text-zinc-400">
              <span className="font-sans text-[10px] uppercase tracking-wider text-zinc-400">
                {t('hardwareBackset')}
              </span>
              <span className="text-zinc-900 dark:text-zinc-200 tabular-nums">{item.specs.backsetMm}</span>
            </div>
          )}

          {item.specs.doorThicknessMinMm && (
            <div className="flex justify-between items-baseline text-zinc-600 dark:text-zinc-400">
              <span className="font-sans text-[10px] uppercase tracking-wider text-zinc-400">
                {t('hardwareDoorThicknessMin')}
              </span>
              <span className="text-zinc-900 dark:text-zinc-200 tabular-nums">≥ {item.specs.doorThicknessMinMm} mm</span>
            </div>
          )}

          {item.specs.wirelessProtocols && item.specs.wirelessProtocols.length > 0 && (
            <div className="flex justify-between items-baseline text-zinc-600 dark:text-zinc-400">
              <span className="font-sans text-[10px] uppercase tracking-wider text-zinc-400">
                {t('hardwareProtocols')}
              </span>
              <span className="text-right text-zinc-900 dark:text-zinc-200 font-sans text-[10px]">
                {item.specs.wirelessProtocols.slice(0, 3).join(', ')}
              </span>
            </div>
          )}

          {item.specs.batteryLife && (
            <div className="flex justify-between items-baseline text-zinc-600 dark:text-zinc-400">
              <span className="font-sans text-[10px] uppercase tracking-wider text-zinc-400">
                {t('hardwareBatteryLife')}
              </span>
              <span className="text-zinc-900 dark:text-zinc-200 font-sans text-[10px]">{item.specs.batteryLife}</span>
            </div>
          )}

          {/* Finishes Pills */}
          <div className="pt-2 flex flex-wrap gap-1">
            {item.specs.finishes.slice(0, 4).map((fin, idx) => (
              <span
                key={idx}
                className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-sans"
              >
                {fin}
              </span>
            ))}
            {item.specs.finishes.length > 4 && (
              <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 text-zinc-400 font-sans">
                {t('hardwareMoreFinishes', { count: item.specs.finishes.length - 4 })}
              </span>
            )}
          </div>

          {/* Recommended context note */}
          <div className="pt-2 text-[10px] text-zinc-500 dark:text-zinc-400 font-sans italic border-t border-zinc-100 dark:border-zinc-800/50">
            <strong className="not-italic text-zinc-700 dark:text-zinc-300 font-medium">
              {t('hardwareIdealFor')}{' '}
            </strong>
            {recommendedFor}
          </div>
        </div>

        {/* Action Buttons: PDF Download & Specs Modal */}
        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
          {item.datasheetPdf && (
            <a
              href={item.datasheetPdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-3.5 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white text-[11px] uppercase tracking-wider font-medium transition-colors"
            >
              <span className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7.414A2 2 0 0017.414 6L14 2.586A2 2 0 0012.586 2H4zm8 1.414L15.586 8H12V4.414zM4 5h6v4a1 1 0 001 1h4v6H4V5z" />
                </svg>
                <span>{t('hardwareDatasheetPdf')}</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                {item.datasheetPdf.sizeLabel} ↓
              </span>
            </a>
          )}

          <div className="flex items-center justify-between gap-2 pt-1">
            <button
              type="button"
              onClick={() => onOpenModal(item)}
              className="text-[11px] uppercase tracking-wider font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
            >
              <span>{t('hardwareDetailsTolerances')}</span>
              <span>↗</span>
            </button>

            <Link
              href={`/contact?inquiry=hardware&model=${encodeURIComponent(item.slug)}`}
              className="text-[11px] uppercase tracking-wider font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {t('hardwareRequestQuote')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
