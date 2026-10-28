'use client';

import { useState, useMemo } from 'react';
import { VelaShowerEnclosure, Locale } from '@/lib/vela';
import VelaShowerCard from './VelaShowerCard';
import VelaShowerModal from './VelaShowerModal';
import VelaShowerTechnicalGuide from './VelaShowerTechnicalGuide';

interface Props {
  items: VelaShowerEnclosure[];
  locale: Locale;
}

export default function VelaShowerSection({ items, locale }: Props) {
  const isIt = locale === 'it';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedThickness, setSelectedThickness] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<VelaShowerEnclosure | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: isIt ? 'Tutte le Serie (23)' : 'All Series (23)' },
    { id: 'pivot', label: isIt ? 'Bilico Pivot (7)' : 'Pivot Enclosures (7)' },
    { id: 'sliding', label: isIt ? 'Scorrevoli Soft-Close (5)' : 'Sliding Systems (5)' },
    { id: 'walk-in', label: isIt ? 'Walk-In & Pareti Fisse (4)' : 'Walk-In Partitions (4)' },
    { id: 'folding', label: isIt ? 'A Soffietto / Salvaspazio (3)' : 'Bi-Fold Systems (3)' },
    { id: 'niche', label: isIt ? 'Porta per Nicchia (2)' : 'Niche Doors (2)' },
    { id: 'island', label: isIt ? 'Isola & Angolari (2)' : 'Island & Corner (2)' },
  ];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Thickness filter
      if (selectedThickness !== 'all') {
        const targetThickness = Number(selectedThickness);
        if (!item.specs.glassThicknessMm.includes(targetThickness)) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const codeMatch = item.code.toLowerCase().includes(query);
        const nameMatch = (item.name[locale] || item.name.it || item.name.en || '').toLowerCase().includes(query);
        const descMatch = (item.description[locale] || item.description.it || item.description.en || '').toLowerCase().includes(query);
        return codeMatch || nameMatch || descMatch;
      }
      return true;
    });
  }, [items, selectedCategory, selectedThickness, searchQuery, locale]);

  return (
    <section className="py-12 sm:py-16">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 tracking-widest uppercase">
            {isIt ? 'Collezione Box Doccia & Cristalli' : 'Shower Enclosures & Glass Architecture'}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-zinc-900 dark:text-zinc-100 mt-2">
            {isIt ? 'Pareti Cristallo & Box Doccia VELA' : 'VELA Glass Partitions & Shower Enclosures'}
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl mt-3 leading-relaxed">
            {isIt
              ? '23 serie modulari per l’architettura del benessere. Sistemi pivot complanari, scorrimenti magnetici e pareti walk-in realizzate in cristallo temperato 8 e 10 mm con trattamento CleanGlass permanente.'
              : '23 modular series for luxury wellness spaces. Flush pivot mechanisms, magnetic sliding kinematics, and walk-in screens crafted in 8 and 10 mm tempered glass with permanent CleanGlass treatment.'}
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full md:w-72">
          <label htmlFor="shower-search" className="sr-only">
            {isIt ? 'Cerca serie o codice' : 'Search series or code'}
          </label>
          <div className="relative">
            <input
              id="shower-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isIt ? 'Cerca codice o modello (es. P+G4, SC8)...' : 'Search code or model...'}
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 px-3.5 py-2 pl-9 text-xs font-mono text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:border-amber-500 transition-colors"
            />
            <svg
              className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 text-xs font-mono transition-all border ${
                selectedCategory === c.id
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-semibold shadow-xs'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Thickness Quick Filter */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-zinc-500">{isIt ? 'Spessore Vetro:' : 'Glass:'}</span>
          <button
            type="button"
            onClick={() => setSelectedThickness('all')}
            className={`px-2 py-1 border transition-colors ${
              selectedThickness === 'all'
                ? 'bg-zinc-800 text-white border-zinc-800 font-bold'
                : 'bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700'
            }`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setSelectedThickness('8')}
            className={`px-2 py-1 border transition-colors ${
              selectedThickness === '8'
                ? 'bg-amber-600 text-white border-amber-600 font-bold'
                : 'bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700'
            }`}
          >
            8 mm
          </button>
          <button
            type="button"
            onClick={() => setSelectedThickness('10')}
            className={`px-2 py-1 border transition-colors ${
              selectedThickness === '10'
                ? 'bg-amber-600 text-white border-amber-600 font-bold'
                : 'bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700'
            }`}
          >
            10 mm
          </button>
        </div>
      </div>

      {/* Grid of Shower Enclosures */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredItems.map((item) => (
            <VelaShowerCard
              key={item.id}
              item={item}
              locale={locale}
              onOpenModal={(it) => setSelectedItem(it)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 mb-16">
          <p className="text-zinc-500 font-mono text-sm mb-3">
            {isIt ? 'Nessun modello trovato per i filtri selezionati.' : 'No shower enclosures matched your criteria.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedThickness('all');
              setSearchQuery('');
            }}
            className="text-xs font-mono text-amber-600 dark:text-amber-400 underline uppercase tracking-wider"
          >
            {isIt ? 'Azzera Filtri' : 'Reset Filters'}
          </button>
        </div>
      )}

      {/* Technical Specifier Guide */}
      <VelaShowerTechnicalGuide locale={locale} />

      {/* Interactive CAD / Spec Modal */}
      <VelaShowerModal
        item={selectedItem}
        locale={locale}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
