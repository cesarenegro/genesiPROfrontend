'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import VelaCategoryNav from '@/components/vela/VelaCategoryNav';
import materialsData from '@/data/velaMaterials.json';

type CategoryFilter = 'all' | 'interior' | 'hotel' | 'wood' | 'lacquer' | 'special';

export default function VelaMaterialsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<typeof materialsData[0] | null>(null);

  const filteredMaterials = materialsData.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'interior') return item.category === 'interior';
    if (activeFilter === 'hotel') return item.category === 'hotel';
    if (activeFilter === 'wood') return item.type.toLowerCase().includes('legno');
    if (activeFilter === 'lacquer') return item.type.toLowerCase().includes('laccato');
    if (activeFilter === 'special') return item.type.toLowerCase().includes('metallo') || item.type.toLowerCase().includes('cristallo') || item.type.toLowerCase().includes('pietra');
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
            <span>VELA / BY GENESI</span>
            <span>·</span>
            <span>CATALOGO GENERALE 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-zinc-950 dark:text-zinc-50 mb-6">
            Materiali & Finiture
          </h1>

          <p className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-3xl leading-relaxed">
            La cartella materica ufficiale del programma VELA: 20 superfici selezionate per vestire varchi architettonici residenziali e porte hospitality. Essenze lignee termo-trattate, laccature vellutate ad alta durezza, metalli satinati e cristalli strutturati.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <span className="px-3 py-1 bg-zinc-200/60 dark:bg-zinc-800/80 rounded-none border border-zinc-300 dark:border-zinc-700">
              10 FINITURE INTERNI (IN-01 — IN-10)
            </span>
            <span className="px-3 py-1 bg-zinc-200/60 dark:bg-zinc-800/80 rounded-none border border-zinc-300 dark:border-zinc-700">
              10 FINITURE HOSPITALITY (HT-01 — HT-10)
            </span>
            <a
              href="/docs/genesi-catalogue.pdf?v=2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-white underline hover:opacity-75 transition-opacity font-sans font-medium uppercase tracking-wider text-[11px]"
            >
              Consulta nel Catalogo Ufficiale (Pag. 03–04) →
            </a>
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
              className={`px-4 py-2 transition-all ${
                activeFilter === 'all'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Tutte le Superfici ({materialsData.length})
            </button>
            <button
              onClick={() => setActiveFilter('interior')}
              className={`px-4 py-2 transition-all ${
                activeFilter === 'interior'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Porte per Interni (10)
            </button>
            <button
              onClick={() => setActiveFilter('hotel')}
              className={`px-4 py-2 transition-all ${
                activeFilter === 'hotel'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Hospitality & Hotel (10)
            </button>
            <button
              onClick={() => setActiveFilter('wood')}
              className={`px-4 py-2 transition-all ${
                activeFilter === 'wood'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Essenze Lignee
            </button>
            <button
              onClick={() => setActiveFilter('lacquer')}
              className={`px-4 py-2 transition-all ${
                activeFilter === 'lacquer'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Laccature
            </button>
            <button
              onClick={() => setActiveFilter('special')}
              className={`px-4 py-2 transition-all ${
                activeFilter === 'special'
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Cristallo, Metallo & Materici
            </button>
          </div>

          {/* 3 Cards per Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((item) => {
              const doorUrl =
                item.category === 'interior'
                  ? `/vela/porte-interni#${item.code}`
                  : `/vela/porte-hotel#${item.code}`;

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
                      alt={`${item.code} — ${item.name}`}
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
                      Mod. {item.model}
                    </div>
                  </div>

                  {/* Card Editorial Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">
                          {item.type}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                          {item.category === 'interior' ? 'Residenziale' : 'Hospitality'}
                        </span>
                      </div>

                      <h3 className="text-xl font-light text-zinc-950 dark:text-zinc-50 tracking-tight">
                        {item.name}
                      </h3>

                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                      <Link
                        href={doorUrl}
                        className="text-zinc-900 dark:text-zinc-200 hover:text-black dark:hover:text-white uppercase tracking-wider font-medium text-[11px] transition-colors"
                      >
                        Vedi Porta {item.model} →
                      </Link>

                      <button
                        onClick={() => setSelectedMaterial(item)}
                        className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-[11px] uppercase tracking-wider font-mono transition-colors"
                      >
                        Ingrandisci [+]
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
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-lg"
              aria-label="Chiudi"
            >
              ✕
            </button>

            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
                <span>{selectedMaterial.code}</span>
                <span>·</span>
                <span>Modello {selectedMaterial.model}</span>
                <span>·</span>
                <span>{selectedMaterial.type}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-zinc-950 dark:text-zinc-50">
                {selectedMaterial.name}
              </h3>
            </div>

            <div
              className="relative w-full h-56 sm:h-72 border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-950"
              style={{ aspectRatio: '1200 / 380' }}
            >
              <Image
                src={selectedMaterial.image}
                alt={selectedMaterial.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs">
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm max-w-md">
                {selectedMaterial.desc}
              </p>

              <div className="flex gap-3">
                <Link
                  href={`/contact?inquiry=contract&material=${encodeURIComponent(selectedMaterial.code + ' ' + selectedMaterial.name)}`}
                  className="px-5 py-2.5 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 uppercase tracking-widest font-medium hover:opacity-85 transition-opacity"
                >
                  Richiedi Campione 1:1
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
            VELA ARCHITECTURAL SERVICE
          </span>

          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
            Cofanetto Campionature per Architetti & General Contractor
          </h2>

          <p className="text-zinc-400 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Per progetti contract e residenze di prestigio forniamo il cofanetto campioni con le 20 superfici tattili in scala reale, comprensivo di schede tecniche di posa e finiture metalliche coordinate.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?inquiry=contract&item=sample-box-vela"
              className="px-8 py-4 bg-white text-zinc-950 text-xs sm:text-sm uppercase tracking-widest font-medium hover:bg-zinc-200 transition-colors"
            >
              Richiedi Cofanetto Materiali VELA
            </Link>
            <a
              href="/docs/genesi-catalogue.pdf?v=2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-zinc-700 text-white text-xs sm:text-sm uppercase tracking-widest font-medium hover:bg-zinc-900 transition-colors"
            >
              Scarica Schede Tecniche (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
