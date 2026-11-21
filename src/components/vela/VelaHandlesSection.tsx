'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog } from '@base-ui/react/dialog';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { VelaConceptHandle, Locale, resolveLocalizedText } from '@/lib/vela';

interface Props {
  handles: VelaConceptHandle[];
  allHandles?: VelaConceptHandle[];
  locale: Locale;
  productCode: string;
  productName: string;
}

type SheetData = {
  handleName: string;
  finishName: string;
  svgUrl: string;
  svgFilename: string;
  dimensionsSummary: { label: string; value: string }[];
  indicativeDimensions: string;
};

export default function VelaHandlesSection({
  handles,
  allHandles = [],
  locale,
  productCode,
  productName,
}: Props) {
  const t = useTranslations('Vela');

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
  const [activeSheet, setActiveSheet] = useState<SheetData | null>(null);
  const [cachedSheet, setCachedSheet] = useState<SheetData | null>(null);

  const isSheetOpen = Boolean(activeSheet);
  const sheet = activeSheet ?? cachedSheet;

  useEffect(() => {
    if (!isSheetOpen) return;
    window.__genesiScroll?.stop();
    return () => {
      window.__genesiScroll?.start();
    };
  }, [isSheetOpen]);

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
    const hName = resolveLocalizedText(handle.name, locale);
    const currentVariantId = selectedVariants[handle.id] || handle.defaultVariant || handle.variants[0].id;
    const currentVariant = handle.variants.find((v) => v.id === currentVariantId) || handle.variants[0];
    const currentFinishName = resolveLocalizedText(currentVariant.finishName, locale);
    const dimensionsText = resolveLocalizedText(handle.indicativeDimensions, locale);

    const nextSheet: SheetData = {
      handleName: hName,
      finishName: currentFinishName,
      svgUrl: currentVariant.sheetSvg,
      svgFilename: currentVariant.sheetFilename,
      dimensionsSummary: handle.dimensionsSummary,
      indicativeDimensions: dimensionsText,
    };
    setCachedSheet(nextSheet);
    setActiveSheet(nextSheet);
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
              {t('handlesAvailableHeaderTag', { productCode })}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100">
              {t('handlesAvailableHeaderTitle')}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light max-w-md leading-relaxed">
            {t('handlesAvailableHeaderDesc', { productName })}
          </p>
        </div>

        {/* Essential Cards Grid: 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayList.map((handle) => {
            const hName = resolveLocalizedText(handle.name, locale);
            const hDesc = resolveLocalizedText(handle.description, locale);
            const currentVariantId = selectedVariants[handle.id] || handle.defaultVariant || handle.variants[0].id;
            const currentVariant = handle.variants.find((v) => v.id === currentVariantId) || handle.variants[0];
            const currentFinishName = resolveLocalizedText(currentVariant.finishName, locale);

            return (
              <div
                key={handle.id}
                className="group flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-200 ease-[var(--ease-out)]"
              >
                {/* Pure White Product Canvas for isolated renders (Clickable to open popup) */}
                <div
                  onClick={() => openSheetForHandle(handle)}
                  className="relative aspect-[4/3] w-full bg-white flex items-center justify-center p-6 border-b border-zinc-100 dark:border-zinc-800/80 overflow-hidden cursor-pointer"
                  title={t('handlesClickToOpen', { name: hName })}
                >
                  <Image
                    src={currentVariant.image}
                    alt={`${hName} — ${currentFinishName}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 group-hover:scale-[1.03] transition-transform duration-500 ease-[var(--ease-out)]"
                  />
                  {/* Category Type Tag */}
                  <span className="absolute top-3 left-3 bg-zinc-100/90 text-zinc-700 text-[10px] font-mono uppercase px-2 py-0.5 border border-zinc-200">
                    {handle.type}
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] uppercase font-mono tracking-wider bg-black/60 text-white px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('handlesOpenSheet')}
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

                    {/* Finishes Selector */}
                    <div className="pt-2">
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-2 font-medium">
                        {t('handlesFinishLabel')}{' '}
                        <strong className="text-zinc-800 dark:text-zinc-200 font-semibold">
                          {currentFinishName}
                        </strong>
                      </span>
                      {handle.variants.length > 1 ? (
                        <div className="flex flex-wrap items-center gap-2">
                          {handle.variants.map((v) => {
                            const vName = resolveLocalizedText(v.finishName, locale);
                            const isSelected = v.id === currentVariantId;
                            return (
                              <button
                                key={v.id}
                                type="button"
                                onClick={() => handleVariantChange(handle.id, v.id)}
                                className={`text-[11px] px-3 py-1.5 transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97] flex items-center gap-1.5 cursor-pointer ${
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
                          {t('handlesIndicativeDim')}
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
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs uppercase tracking-widest font-semibold hover:bg-zinc-800 dark:hover:bg-white/90 transition-[background-color,transform] duration-150 ease-[var(--ease-out)] cursor-pointer shadow-xs active:scale-[0.97]"
                      title={t('handlesClickToOpenSheet')}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span>{t('handlesTavolaTecnicaSvg')}</span>
                    </button>
                    <a
                      href={currentVariant.sheetSvg}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
                      title={t('handlesOpenSvgFullscreen')}
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
              {t('handlesNoteTitle')}
            </span>
            <p className="font-light leading-relaxed">
              {t('handlesNoteDesc')}
            </p>
          </div>
          <Link
            href="/vela/maniglie"
            className="shrink-0 text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 hover:underline"
          >
            {t('handlesGeneralCatalogue')}
          </Link>
        </div>
      </div>

      {/* Base UI Dialog Mounted High-ZIndex SVG Sheet Popup */}
      <Dialog.Root
        open={isSheetOpen}
        onOpenChange={(next) => {
          if (!next) setActiveSheet(null);
        }}
        onOpenChangeComplete={(next) => {
          if (!next) setCachedSheet(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="dialog-backdrop fixed inset-0 z-[100] bg-black/82 backdrop-blur-xs" />
          <Dialog.Viewport className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-6 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]">
            <Dialog.Popup
              className="dialog-popup relative bg-white dark:bg-zinc-900 w-full max-w-5xl max-h-[92dvh] flex flex-col border border-zinc-300 dark:border-zinc-700 shadow-2xl overflow-hidden rounded-[4px] outline-none"
              aria-label={sheet ? `${t('handlesSheetVectorBadge')} — ${sheet.handleName}` : undefined}
            >
              {sheet && (
                <>
                  {/* Modal Header with Title and Prominent "X" Close Button */}
                  <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-950 shrink-0">
                    <div className="pr-4 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 bg-zinc-200/70 dark:bg-zinc-800 px-2 py-0.5 border border-zinc-300 dark:border-zinc-700">
                          {t('handlesSheetVectorBadge')}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline break-words [overflow-wrap:anywhere]">
                          {sheet.svgFilename}
                        </span>
                      </div>
                      <Dialog.Title className="text-lg sm:text-2xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight">
                        {sheet.handleName} — <span className="font-normal">{sheet.finishName}</span>
                      </Dialog.Title>
                    </div>

                    {/* Prominent High-Contrast Close Button with "X" Icon */}
                    <Dialog.Close
                      type="button"
                      className="flex items-center gap-2 min-h-[44px] px-3.5 py-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-[background-color,transform] duration-150 ease-[var(--ease-out)] cursor-pointer shadow-sm active:scale-[0.97] shrink-0"
                      aria-label={t('handlesCloseModalAria')}
                      title={t('handlesCloseModalTitle')}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-xs uppercase tracking-wider font-semibold">
                        {t('handlesCloseModal')}
                      </span>
                    </Dialog.Close>
                  </div>

                  {/* Modal Body: Vector SVG Sheet Viewer */}
                  <div className="flex-1 overflow-auto overscroll-contain p-3 sm:p-6 bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center min-h-[280px]">
                    <div className="w-full max-w-4xl bg-white border border-zinc-300 shadow-md p-2 sm:p-4">
                      {/* Embedded SVG image */}
                      <img
                        src={sheet.svgUrl}
                        alt={`${t('handlesSheetVectorBadge')} — ${sheet.handleName}`}
                        className="w-full h-auto block select-none mx-auto"
                      />
                    </div>
                  </div>

                  {/* Modal Footer: Dimensions & Regulatory Note */}
                  <div className="p-4 sm:p-5 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shrink-0 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <span className="text-zinc-400 uppercase tracking-wider text-[10px] block mb-0.5 font-medium">
                          {t('handlesIndicativeDim')}
                        </span>
                        <span className="font-mono tabular-nums text-zinc-900 dark:text-zinc-100 font-semibold text-xs sm:text-sm">
                          {sheet.indicativeDimensions}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          href={sheet.svgUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 border border-zinc-300 dark:border-zinc-700 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-900 dark:hover:border-zinc-100 active:scale-[0.97] transition-[border-color,color,transform] duration-150 ease-[var(--ease-out)]"
                        >
                          <span>{t('handlesNewTab')}</span>
                          <span>↗</span>
                        </a>
                        <a
                          href={sheet.svgUrl}
                          download={sheet.svgFilename}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-medium hover:opacity-90 active:scale-[0.97] transition-[opacity,transform] duration-150 ease-[var(--ease-out)]"
                        >
                          <span>{t('handlesDownloadSvg')}</span>
                          <span>↓</span>
                        </a>
                        <Dialog.Close
                          type="button"
                          className="px-3.5 py-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium active:scale-[0.97] transition-[background-color,transform] duration-150 ease-[var(--ease-out)] cursor-pointer"
                        >
                          {t('handlesCloseModal')}
                        </Dialog.Close>
                      </div>
                    </div>

                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-2">
                      {t('handlesDisclaimerFootnote')}
                    </p>
                  </div>
                </>
              )}
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
