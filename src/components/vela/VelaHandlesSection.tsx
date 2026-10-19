'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { VelaConceptHandle, Locale } from '@/lib/vela';

interface Props {
  handles: VelaConceptHandle[];
  allHandles?: VelaConceptHandle[];
  locale: Locale;
  productCode: string;
  productName: string;
}

export default function VelaHandlesSection({
  handles,
  allHandles = [],
  locale,
  productCode,
  productName,
}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Store selected finish per handle model: { [handleId]: variantId }
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    const list = handles.length > 0 ? handles : allHandles;
    list.forEach((h) => {
      initial[h.id] = h.defaultVariant || h.variants[0].id;
    });
    return initial;
  });

  // Modal state for active SVG sheet popup
  const [activeSheet, setActiveSheet] = useState<{
    handleName: string;
    finishName: string;
    svgUrl: string;
    svgFilename: string;
    dimensionsSummary: { label: string; value: string }[];
    indicativeDimensions: string;
  } | null>(null);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveSheet(null);
      }
    };
    if (activeSheet) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSheet]);

  const displayList = handles.length > 0 ? handles : allHandles;

  if (displayList.length === 0) {
    return null;
  }

  const handleVariantChange = (handleId: string, variantId: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [handleId]: variantId,
    }));
  };

  const openSheetForHandle = (handle: VelaConceptHandle) => {
    const hName = handle.name[locale] || handle.name.en;
    const currentVariantId = selectedVariants[handle.id] || handle.defaultVariant || handle.variants[0].id;
    const currentVariant = handle.variants.find((v) => v.id === currentVariantId) || handle.variants[0];
    const currentFinishName = currentVariant.finishName[locale] || currentVariant.finishName.en;
    const dimensionsText = handle.indicativeDimensions[locale] || handle.indicativeDimensions.en;

    setActiveSheet({
      handleName: hName,
      finishName: currentFinishName,
      svgUrl: currentVariant.sheetSvg,
      svgFilename: currentVariant.sheetFilename,
      dimensionsSummary: handle.dimensionsSummary,
      indicativeDimensions: dimensionsText,
    });
  };

  return (
    <section
      id="maniglie-disponibili"
      className="scroll-mt-24 pt-20 pb-24 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium block mb-2">
              Hardware & Sistemi di Presa • {productCode}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100">
              Maniglie Disponibili & Dimensioni
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light max-w-md leading-relaxed">
            Opzioni di presa ergonomica compatibili con {productName}. Clicca su ciascun modello per aprire la scheda tecnica vettoriale SVG in popup con le relative quote di ingombro.
          </p>
        </div>

        {/* Essential Cards Grid: 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayList.map((handle) => {
            const hName = handle.name[locale] || handle.name.en;
            const hDesc = handle.description[locale] || handle.description.en;
            const currentVariantId = selectedVariants[handle.id] || handle.defaultVariant || handle.variants[0].id;
            const currentVariant = handle.variants.find((v) => v.id === currentVariantId) || handle.variants[0];
            const currentFinishName = currentVariant.finishName[locale] || currentVariant.finishName.en;

            return (
              <div
                key={handle.id}
                className="group flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300"
              >
                {/* Pure White Product Canvas for isolated renders (Clickable to open popup) */}
                <div
                  onClick={() => openSheetForHandle(handle)}
                  className="relative aspect-[4/3] w-full bg-white flex items-center justify-center p-6 border-b border-zinc-100 dark:border-zinc-800/80 overflow-hidden cursor-pointer"
                  title={`Clicca per aprire la scheda tecnica di ${hName}`}
                >
                  <Image
                    src={currentVariant.image}
                    alt={`${hName} — ${currentFinishName}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Category Type Tag */}
                  <span className="absolute top-3 left-3 bg-zinc-100/90 text-zinc-700 text-[10px] font-mono uppercase px-2 py-0.5 border border-zinc-200">
                    {handle.type}
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] uppercase font-mono tracking-wider bg-black/60 text-white px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Apri Scheda ↗
                  </span>
                </div>

                {/* Card Editorial & Spec Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Model Name */}
                    <h3 className="text-lg font-light text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {hName}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                      {hDesc}
                    </p>

                    {/* Finishes Selector (e.g. Leva con rosetta Bronzo/Nichel) */}
                    <div className="pt-2">
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-2 font-medium">
                        Finitura: <strong className="text-zinc-800 dark:text-zinc-200 font-semibold">{currentFinishName}</strong>
                      </span>
                      {handle.variants.length > 1 ? (
                        <div className="flex flex-wrap items-center gap-2">
                          {handle.variants.map((v) => {
                            const vName = v.finishName[locale] || v.finishName.en;
                            const isSelected = v.id === currentVariantId;
                            return (
                              <button
                                key={v.id}
                                type="button"
                                onClick={() => handleVariantChange(handle.id, v.id)}
                                className={`text-[11px] px-3 py-1.5 transition-all flex items-center gap-1.5 cursor-pointer ${
                                  isSelected
                                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium'
                                    : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                                }`}
                              >
                                <span
                                  className="w-2.5 h-2.5 rounded-full inline-block border border-black/20"
                                  style={{ backgroundColor: v.colorHex }}
                                />
                                <span>{vName}</span>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                          <span
                            className="w-2.5 h-2.5 rounded-full inline-block border border-black/20"
                            style={{ backgroundColor: currentVariant.colorHex }}
                          />
                          <span>{currentFinishName}</span>
                        </div>
                      )}
                    </div>

                    {/* Indicative Dimensions Matrix */}
                    <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                          Dimensioni indicative — concept da validare
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        {handle.dimensionsSummary.map((dim, idx) => (
                          <div
                            key={idx}
                            className="p-1.5 bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60"
                          >
                            <span className="text-[9px] uppercase tracking-wider text-zinc-400 block font-sans">
                              {dim.label}
                            </span>
                            <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                              {dim.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons: Open SVG Technical Sheet in Popup */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => openSheetForHandle(handle)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs uppercase tracking-widest font-semibold hover:bg-zinc-800 dark:hover:bg-white/90 transition-all cursor-pointer shadow-xs active:scale-[0.99]"
                      title="Clicca per aprire la scheda tecnica in pop-up"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span>Tavola Tecnica SVG</span>
                    </button>
                    <a
                      href={currentVariant.sheetSvg}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
                      title="Apri SVG a tutto schermo in nuova scheda"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Hardware Disclaimer */}
        <div className="mt-12 p-6 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider text-[11px] block">
              Nota sulle Quote Hardware
            </span>
            <p className="font-light leading-relaxed">
              Le quote delle tavole sono indicative e non esecutive (concept da validare). Forme, sistemi di fissaggio e lavorazioni CNC devono essere confermate in fase di ordine esecutivo.
            </p>
          </div>
          <a
            href="/it/vela/maniglie"
            className="shrink-0 text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 hover:underline"
          >
            Catalogo Generale Maniglie →
          </a>
        </div>
      </div>

      {/* Portal-Mounted High-ZIndex SVG Sheet Popup */}
      {mounted &&
        activeSheet &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Scheda tecnica ${activeSheet.handleName}`}
            className="fixed inset-0 flex items-center justify-center p-3 sm:p-6"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.82)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              zIndex: 999999,
            }}
            onClick={() => setActiveSheet(null)}
          >
            <div
              className="relative bg-white dark:bg-zinc-900 w-full max-w-5xl max-h-[92vh] flex flex-col border border-zinc-300 dark:border-zinc-700 shadow-2xl overflow-hidden"
              style={{ borderRadius: '4px' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Title and Prominent "X" Close Button */}
              <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-950 shrink-0">
                <div className="pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 bg-zinc-200/70 dark:bg-zinc-800 px-2 py-0.5 border border-zinc-300 dark:border-zinc-700">
                      Scheda Tecnica Vettoriale
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
                      {activeSheet.svgFilename}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {activeSheet.handleName} — <span className="font-normal">{activeSheet.finishName}</span>
                  </h3>
                </div>

                {/* Prominent High-Contrast Close Button with "X" Icon */}
                <button
                  type="button"
                  onClick={() => setActiveSheet(null)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all cursor-pointer shadow-sm active:scale-95 shrink-0"
                  aria-label="Chiudi popup scheda tecnica"
                  title="Chiudi popup (Esc)"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-xs uppercase tracking-wider font-semibold">Chiudi</span>
                </button>
              </div>

              {/* Modal Body: Vector SVG Sheet Viewer (Pure white canvas, 297 × 210 mm ratio) */}
              <div className="flex-1 overflow-auto p-3 sm:p-6 bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center min-h-[280px]">
                <div className="w-full max-w-4xl bg-white border border-zinc-300 shadow-md p-2 sm:p-4">
                  {/* Embedded SVG image */}
                  <img
                    src={activeSheet.svgUrl}
                    alt={`Tavola SVG ${activeSheet.handleName}`}
                    className="w-full h-auto block select-none mx-auto"
                  />
                </div>
              </div>

              {/* Modal Footer: Dimensions & Regulatory Note */}
              <div className="p-4 sm:p-5 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shrink-0 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-zinc-400 uppercase tracking-wider text-[10px] block mb-0.5 font-medium">
                      Dimensioni indicative — concept da validare
                    </span>
                    <span className="font-mono text-zinc-900 dark:text-zinc-100 font-semibold text-xs sm:text-sm">
                      {activeSheet.indicativeDimensions}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={activeSheet.svgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 border border-zinc-300 dark:border-zinc-700 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors"
                    >
                      <span>Nuova scheda</span>
                      <span>↗</span>
                    </a>
                    <a
                      href={activeSheet.svgUrl}
                      download={activeSheet.svgFilename}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity"
                    >
                      <span>Scarica SVG</span>
                      <span>↓</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveSheet(null)}
                      className="px-3.5 py-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium transition-colors cursor-pointer"
                    >
                      Chiudi
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-400 font-light leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-2">
                  * Le quote sono indicative e non esecutive. Non costituiscono dati di produzione né specifiche costruttive verificate dal produttore.
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
