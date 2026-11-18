'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import VelaCategoryNav from '@/components/vela/VelaCategoryNav';
import materialsData from '@/data/velaMaterials.json';
import { Locale, resolveLocalizedText } from '@/lib/vela';

type CategoryFilter = 'all' | 'interior' | 'hotel' | 'wood' | 'lacquer' | 'special';

export default function VelaMaterialsPage() {
  const t = useTranslations('Vela');
  const locale = useLocale() as Locale;
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<typeof materialsData[0] | null>(null);

  const filteredMaterials = materialsData.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'interior') return item.category === 'interior';
    if (activeFilter === 'hotel') return item.category === 'hotel';

    const typeIt = item.type.it.toLowerCase();
    const typeEn = item.type.en.toLowerCase();

    if (activeFilter === 'wood') {
      return typeIt.includes('legno') || typeEn.includes('wood') || typeEn.includes('oak') || typeEn.includes('walnut');
    }
    if (activeFilter === 'lacquer') {
      return typeIt.includes('laccato') || typeEn.includes('lacquer');
    }
    if (activeFilter === 'special') {
      return (
        typeIt.includes('metallo') ||
        typeIt.includes('cristallo') ||
        typeIt.includes('pietra') ||
        typeEn.includes('metal') ||
        typeEn.includes('glass')
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Category Navigation Bar */}
      <VelaCategoryNav activeCategory="materiali" />

      {/* Editorial Hero Header */}
      <header className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-400 mb-4 font-mono">
            <span>{t('matSubHeader')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-zinc-950 dark:text-zinc-50 mb-6">
            {t('matTitle')}
          </h1>

          <p className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-3xl leading-relaxed">
            {t('matDesc')}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <span className="px-3 py-1 bg-zinc-200/60 dark:bg-zinc-800/80 rounded-none border border-zinc-300 dark:border-zinc-700">
              {t('matBadgeInterior')}
            </span>
            <span className="px-3 py-1 bg-zinc-200/60 dark:bg-zinc-800/80 rounded-none border border-zinc-300 dark:border-zinc-700">
              {t('matBadgeHospitality')}
            </span>
          </div>
        </div>
      </header>

      {/* Filters & Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-4 text-xs uppercase tracking-widest">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {t('matAllSurfaces', { count: materialsData.length })}
            </button>
            <button
              onClick={() => setActiveFilter('interior')}
              className={`px-4 py-2 transition-all cursor-pointer ${
                activeFilter === 'interior'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {t('matInteriorDoorsTab')}
            </button>
            <button
              onClick={() => setActiveFilter('hotel')}
              className={`px-4 py-2 transition-all cursor-pointer ${
                activeFilter === 'hotel'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {t('matHotelDoorsTab')}
            </button>
            <button
              onClick={() => setActiveFilter('wood')}
              className={`px-4 py-2 transition-all cursor-pointer ${
                activeFilter === 'wood'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {t('matWoodSpeciesTab')}
            </button>
            <button
              onClick={() => setActiveFilter('lacquer')}
              className={`px-4 py-2 transition-all cursor-pointer ${
                activeFilter === 'lacquer'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {t('matLacquersTab')}
            </button>
            <button
              onClick={() => setActiveFilter('special')}
              className={`px-4 py-2 transition-all cursor-pointer ${
                activeFilter === 'special'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {t('matSpecialSurfacesTab')}
            </button>
          </div>

          {/* 3 Cards per Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((item) => {
              const doorUrl =
                item.category === 'interior'
                  ? `/vela/porte-interni#${item.code}`
                  : `/vela/porte-hotel#${item.code}`;

              const matName = resolveLocalizedText(item.name, locale);
              const matType = resolveLocalizedText(item.type, locale);
              const matDesc = resolveLocalizedText(item.desc, locale);

              return (
                <div
                  key={item.code}
                  className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between transition-all duration-300 hover:border-zinc-500 dark:hover:border-zinc-500 shadow-sm"
                >
                  {/* Swatch Canvas */}
                  <div
                    className="relative w-full h-36 sm:h-44 md:h-36 lg:h-44 bg-zinc-100 dark:bg-zinc-800 overflow-hidden cursor-pointer border-b border-zinc-200 dark:border-zinc-800"
                    style={{ aspectRatio: '1200 / 380' }}
                    onClick={() => setSelectedMaterial(item)}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.code} — ${matName}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Code Badge */}
                    <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 border border-white/20">
                      {item.code}
                    </div>

                    {/* Model Pill */}
                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/85 backdrop-blur-xs text-zinc-900 dark:text-zinc-200 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-zinc-300 dark:border-zinc-700">
                      {t('matModelPrefix')} {item.model}
                    </div>
                  </div>

                  {/* Card Editorial Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">
                          {matType}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                          {item.category === 'interior' ? t('matCatResidential') : t('matCatHospitality')}
                        </span>
                      </div>

                      <h3 className="text-xl font-light text-zinc-950 dark:text-zinc-50 tracking-tight">
                        {matName}
                      </h3>

                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mt-2">
                        {matDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                      <Link
                        href={doorUrl}
                        className="text-zinc-900 dark:text-zinc-200 hover:text-black dark:hover:text-white uppercase tracking-wider font-medium text-[11px] transition-colors"
                      >
                        {t('matViewDoor', { model: item.model })}
                      </Link>

                      <button
                        onClick={() => setSelectedMaterial(item)}
                        className="text-zinc-400 hover:text-zinc-950 dark:hover:text-white text-[11px] uppercase tracking-wider font-mono transition-colors cursor-pointer"
                      >
                        {t('matEnlarge')}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox / Zoom Modal */}
      {selectedMaterial && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedMaterial(null)}
        >
          <div
            className="bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 max-w-3xl w-full p-6 md:p-8 relative shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMaterial(null)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-lg cursor-pointer"
              aria-label={t('matModalClose')}
            >
              ✕
            </button>

            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
                <span>{selectedMaterial.code}</span>
                <span>·</span>
                <span>{t('matModelPrefix')} {selectedMaterial.model}</span>
                <span>·</span>
                <span>{resolveLocalizedText(selectedMaterial.type, locale)}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-zinc-950 dark:text-zinc-50">
                {resolveLocalizedText(selectedMaterial.name, locale)}
              </h3>
            </div>

            <div
              className="relative w-full h-56 sm:h-72 border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-950"
              style={{ aspectRatio: '1200 / 380' }}
            >
              <Image
                src={selectedMaterial.image}
                alt={resolveLocalizedText(selectedMaterial.name, locale)}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs">
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm max-w-md">
                {resolveLocalizedText(selectedMaterial.desc, locale)}
              </p>

              <div className="flex gap-3">
                <Link
                  href={`/contact?inquiry=contract&material=${encodeURIComponent(
                    selectedMaterial.code + ' ' + resolveLocalizedText(selectedMaterial.name, locale)
                  )}`}
                  className="px-5 py-2.5 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 uppercase tracking-widest font-medium hover:opacity-85 transition-opacity"
                >
                  {t('matRequestSample1to1')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Architectural Consultation & Sample Box Banner */}
      <section className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block">
            {t('matConsultationTag')}
          </span>

          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
            {t('matConsultationTitle')}
          </h2>

          <p className="text-zinc-400 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('matConsultationDesc')}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?inquiry=contract&item=sample-box-vela"
              className="px-8 py-4 bg-white text-zinc-950 text-xs sm:text-sm uppercase tracking-widest font-medium hover:bg-zinc-200 transition-colors"
            >
              {t('matRequestBoxCta')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
