'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { VelaShowerEnclosure, Locale, resolveLocalizedText } from '@/lib/vela';

interface Props {
  item: VelaShowerEnclosure | null;
  locale: Locale;
  onClose: () => void;
}

export default function VelaShowerModal({ item, locale, onClose }: Props) {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (item) {
      setActiveImage(item.images.ambient);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }
  }, [item, onClose]);

  if (!item) return null;

  const name = resolveLocalizedText(item.name, locale);
  const subtitle = resolveLocalizedText(item.subtitle, locale);
  const description = resolveLocalizedText(item.description, locale);
  const treatment = resolveLocalizedText(item.specs.treatment, locale);

  const ambientLabel = locale === 'it' ? 'Ambientazione' : locale === 'fr' ? 'Ambiance' : locale === 'de' ? 'Ambiente' : 'Ambient';
  const cadLabel = locale === 'it' ? 'Prospetto 2D CAD' : locale === 'fr' ? 'Plan 2D CAD' : locale === 'de' ? '2D CAD-Plan' : '2D CAD Elevation';
  const glassThicknessLabel = locale === 'it' ? 'Spessore Cristallo' : locale === 'fr' ? 'Épaisseur du Verre' : locale === 'de' ? 'Glasstärke' : 'Glass Thickness';
  const maxHeightLabel = locale === 'it' ? 'Altezza Massima' : locale === 'fr' ? 'Hauteur Maximale' : locale === 'de' ? 'Maximale Höhe' : 'Max Height';
  const adjustmentRangeLabel = locale === 'it' ? 'Compensazione Fuori Squadra' : locale === 'fr' ? 'Plage de Réglage' : locale === 'de' ? 'Verstellbereich' : 'Adjustment Range';
  const installationLabel = locale === 'it' ? 'Installazione' : locale === 'fr' ? 'Installation' : locale === 'de' ? 'Montage' : 'Installation';
  const metalFinishesLabel = locale === 'it' ? 'Finiture Profili Alluminio / Inox' : locale === 'fr' ? 'Finitions Profilés Aluminium / Inox' : locale === 'de' ? 'Profile Aluminium / Edelstahl' : 'Metal Finishes';
  const glassTypesLabel = locale === 'it' ? 'Finiture Cristallo' : locale === 'fr' ? 'Finitions du Verre' : locale === 'de' ? 'Glasoberflächen' : 'Glass Types';
  const requestQuoteLabel = locale === 'it' ? 'Richiedi Preventivo & Capitolato' : locale === 'fr' ? 'Demander Devis & CPT' : locale === 'de' ? 'Ausschreibung / Angebot anfordern' : 'Request Tender Quote';
  const closeLabel = locale === 'it' ? 'Chiudi' : locale === 'fr' ? 'Fermer' : locale === 'de' ? 'Schließen' : 'Close';

  const allImages = [
    { label: ambientLabel, url: item.images.ambient },
    ...(item.images.elevation ? [{ label: cadLabel, url: item.images.elevation }] : []),
    ...(item.images.details ? item.images.details.map((d) => ({ label: resolveLocalizedText(d.label, locale), url: d.url })) : []),
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">{item.code}</span>
              <span className="text-zinc-400">•</span>
              <span className="text-xs font-mono text-zinc-500 uppercase">{item.category}</span>
            </div>
            <h2 className="text-xl font-serif font-medium text-zinc-900 dark:text-zinc-100">{name}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            aria-label={closeLabel}
            title={`${closeLabel} (Esc)`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Image Canvas & Gallery Thumbnails */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 overflow-hidden">
              <Image
                src={activeImage || item.images.ambient}
                alt={name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Thumbnail Strip */}
            {allImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {allImages.map((imgObj, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(imgObj.url)}
                    className={`relative w-20 h-16 shrink-0 border transition-all overflow-hidden ${
                      activeImage === imgObj.url
                        ? 'border-amber-500 dark:border-amber-400 ring-2 ring-amber-500/20'
                        : 'border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={imgObj.url} alt={imgObj.label} fill sizes="80px" className="object-cover" />
                    <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] text-white text-center font-mono py-0.5 truncate px-1">
                      {imgObj.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Detailed Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              {subtitle && <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">{subtitle}</p>}
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">{description}</p>

              {/* Technical Specifications Matrix */}
              <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 p-4 space-y-2.5 text-xs font-mono">
                <div className="flex justify-between border-b border-zinc-200/60 dark:border-zinc-800/60 pb-1.5">
                  <span className="text-zinc-500">{glassThicknessLabel}</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{item.specs.glassThicknessMm.join(' / ')} mm</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200/60 dark:border-zinc-800/60 pb-1.5">
                  <span className="text-zinc-500">{maxHeightLabel}</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{item.specs.maxHeightMm} mm</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200/60 dark:border-zinc-800/60 pb-1.5">
                  <span className="text-zinc-500">{adjustmentRangeLabel}</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{item.specs.adjustmentRangeMm}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200/60 dark:border-zinc-800/60 pb-1.5">
                  <span className="text-zinc-500">{installationLabel}</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase">{item.specs.installationType}</span>
                </div>
                <div className="pt-1">
                  <span className="text-zinc-500 block mb-1">{metalFinishesLabel}</span>
                  <div className="flex flex-wrap gap-1">
                    {item.specs.metalFinishes.map((f, i) => (
                      <span key={i} className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 text-[10px] text-zinc-800 dark:text-zinc-200">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-1">
                  <span className="text-zinc-500 block mb-1">{glassTypesLabel}</span>
                  <div className="flex flex-wrap gap-1">
                    {item.specs.glassFinishes.map((g, i) => (
                      <span key={i} className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 text-[10px] text-zinc-800 dark:text-zinc-200">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nano-Tech Protective Coating */}
              {treatment && (
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 p-3 text-xs font-mono text-emerald-800 dark:text-emerald-300">
                  <div className="font-semibold mb-0.5 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    CleanGlass Nano-Tech Shield
                  </div>
                  <p className="text-[11px] opacity-90 leading-relaxed">{treatment}</p>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="flex-1 text-center py-2.5 px-4 text-xs font-mono font-medium bg-zinc-900 dark:bg-zinc-100 hover:bg-amber-600 dark:hover:bg-amber-400 text-white dark:text-zinc-900 transition-colors"
              >
                {requestQuoteLabel}
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-4 text-xs font-mono font-medium border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-100 text-zinc-800 dark:text-zinc-200 transition-colors"
              >
                {closeLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
