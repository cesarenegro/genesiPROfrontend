'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { VelaHardwareItem, Locale, resolveLocalizedText } from '@/lib/vela';
import VelaHardwareCard from './VelaHardwareCard';

interface Props {
  hardware: VelaHardwareItem[];
  locale: Locale;
}

type CategoryFilter = 'all' | 'smart-residential' | 'hospitality' | 'magnetic' | 'hinges' | 'handles';

export default function VelaHardwareSection({ hardware, locale }: Props) {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState<VelaHardwareItem | null>(null);
  const [modalImageTab, setModalImageTab] = useState<'product' | 'inSitu'>('product');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    if (activeModalItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalItem]);

  const categories: { id: CategoryFilter; label: Record<string, string>; count: number }[] = [
    {
      id: 'all',
      label: { it: 'Tutta la Ferramenta', en: 'All Hardware' },
      count: hardware.length,
    },
    {
      id: 'smart-residential',
      label: { it: 'Smart Locks Residenziali', en: 'Residential Smart Locks' },
      count: hardware.filter((h) => h.category === 'smart-residential').length,
    },
    {
      id: 'hospitality',
      label: { it: 'Hospitality & RFID Hotel', en: 'Hospitality & Hotel RFID' },
      count: hardware.filter((h) => h.category === 'hospitality').length,
    },
    {
      id: 'magnetic',
      label: { it: 'Serrature Magnetiche', en: 'Magnetic Locks' },
      count: hardware.filter((h) => h.category === 'magnetic').length,
    },
    {
      id: 'hinges',
      label: { it: 'Cerniere a Scomparsa 3D', en: '3D Concealed Hinges' },
      count: hardware.filter((h) => h.category === 'hinges').length,
    },
    {
      id: 'handles',
      label: { it: 'Maniglie Architetturali', en: 'Architectural Handles' },
      count: hardware.filter((h) => h.category === 'handles').length,
    },
  ];

  // Filter items
  const filteredItems = hardware.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const name = resolveLocalizedText(item.name, locale).toLowerCase();
    const subtitle = resolveLocalizedText(item.subtitle, locale).toLowerCase();
    const brand = item.brand.toLowerCase();
    const country = item.country.toLowerCase();
    const protocols = item.specs.wirelessProtocols?.join(' ').toLowerCase() || '';

    return (
      name.includes(query) ||
      subtitle.includes(query) ||
      brand.includes(query) ||
      country.includes(query) ||
      protocols.includes(query)
    );
  });

  const inSituSpotlights = [
    {
      id: 'hw-ekey-dline',
      title: 'Biometrico dLine su Maniglione in Bronzo',
      brand: 'ekey • Austria',
      image: '/images/vela/hardware/vela_ekey_dline_in_situ.jpg',
      category: 'smart-residential',
    },
    {
      id: 'hw-simonswerk-te-340',
      title: 'Cerniera TECTUS a Scomparsa su Rasomuro',
      brand: 'Simonswerk • Germania',
      image: '/images/vela/hardware/vela_simonswerk_tectus_in_situ.jpg',
      category: 'hinges',
    },
    {
      id: 'hw-vingcard-essence',
      title: 'VingCard Essence Filo Boiserie Hotel 5★',
      brand: 'ASSA ABLOY • Norvegia',
      image: '/images/vela/hardware/vela_vingcard_essence_in_situ.jpg',
      category: 'hospitality',
    },
    {
      id: 'hw-agb-polaris-2xt',
      title: 'Serratura Magnetica a Filo Polaris 2XT',
      brand: 'AGB • Italia',
      image: '/images/vela/hardware/vela_agb_polaris_in_situ.jpg',
      category: 'magnetic',
    },
  ];

  const handleOpenModal = (item: VelaHardwareItem) => {
    setActiveModalItem(item);
    setModalImageTab('product');
  };

  return (
    <section id="ferramenta-architetturale" className="scroll-mt-20 py-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium block mb-2">
              Ingegneria & Controllo Accessi • VELA Hardware Program
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              Ferramenta Top di Gamma & Serrature Smart
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Selezione rigorosa dei migliori sistemi di chiusura e rotazione europei: serrature magnetiche AGB a scrocco silenziato, cerniere a scomparsa totale Simonswerk TECTUS registrabili su 3 assi, cilindri e lettori biometrici complanari e card reader RFID per l’hospitality di lusso.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="#guida-capitolato"
              className="px-5 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-zinc-900 dark:hover:border-zinc-100 text-xs uppercase tracking-widest font-medium transition-colors text-center"
            >
              Matrice di Capitolato ↓
            </a>
            <Link
              href="/contact?inquiry=contract&category=ferramenta"
              className="px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity text-center"
            >
              Richiedi Consulenza Tecnica
            </Link>
          </div>
        </div>

        {/* Visual In-Situ Showcase Ribbon */}
        <div className="mb-14 bg-zinc-50 dark:bg-zinc-900/40 p-6 md:p-8 border border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold block">
                Visual In-Situ Rendering
              </span>
              <h3 className="text-lg md:text-xl font-light tracking-tight text-zinc-900 dark:text-zinc-100">
                Integrazione Architettonica: Come la Ferramenta Veste la Porta
              </h3>
            </div>
            <p className="text-xs text-zinc-500 max-w-md font-light">
              Clicca su ciascuna scena per filtrare la categoria e visualizzare i dettagli tecnici del componente integrato.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {inSituSpotlights.map((spot) => (
              <div
                key={spot.id}
                onClick={() => {
                  setSelectedCategory(spot.category as CategoryFilter);
                  const matched = hardware.find((h) => h.id === spot.id);
                  if (matched) {
                    handleOpenModal(matched);
                  }
                }}
                className="group relative aspect-[16/10] overflow-hidden cursor-pointer border border-zinc-200 dark:border-zinc-800 hover:border-zinc-500 transition-all"
              >
                <Image
                  src={spot.image}
                  alt={spot.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-2 left-2 bg-black/75 backdrop-blur-xs text-[10px] text-zinc-300 font-mono px-2 py-0.5 border border-white/10">
                  {spot.brand}
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs text-white font-medium line-clamp-2 drop-shadow-xs">
                    {spot.title}
                  </p>
                  <span className="text-[10px] text-amber-400 uppercase tracking-widest font-mono group-hover:underline">
                    Dettaglio In-Situ →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {categories.map((cat) => {
              const label = cat.label[locale] || cat.label.en;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-xs'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? 'bg-zinc-700 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-800'
                        : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca brand, modello, protocollo..."
              className="w-full px-3.5 py-2 pl-9 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
            />
            <svg
              className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Hardware Cards Grid: 3 columns */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-zinc-50 dark:bg-zinc-900/30 border border-dashed border-zinc-300 dark:border-zinc-700">
            <p className="text-zinc-500 text-sm">Nessuna ferramenta trovata per i criteri selezionati.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs uppercase tracking-wider font-medium"
            >
              Mostra Tutti i Modelli
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <VelaHardwareCard
                key={item.id}
                item={item}
                locale={locale}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        )}
      </div>

      {/* Detail & Tolerances Modal */}
      {mounted &&
        activeModalItem &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div
              className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-widest font-mono text-zinc-500">
                    {activeModalItem.brand} • {activeModalItem.country}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700">/</span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-zinc-900 dark:text-zinc-100">
                    Dossier Tecnico & Quote
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  aria-label="Chiudi"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-1">
                {/* Dual Image Header */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: Product View */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wider text-zinc-400 font-mono">
                      <span>Vista Tecnica Prodotto</span>
                      <span className="text-zinc-500">Isolata</span>
                    </div>
                    <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                      <Image
                        src={activeModalItem.images.product}
                        alt={resolveLocalizedText(activeModalItem.name, locale)}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Right: In-Situ View (or fallback) */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wider text-zinc-400 font-mono">
                      <span>Integrazione Architettonica</span>
                      <span className="text-amber-500">In-Situ Render</span>
                    </div>
                    <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                      {activeModalItem.images.inSitu ? (
                        <Image
                          src={activeModalItem.images.inSitu}
                          alt="In-situ rendering"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-zinc-400 bg-zinc-50 dark:bg-zinc-950">
                          <svg className="w-8 h-8 mb-2 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <p className="text-xs">Installazione complanare personalizzabile su battente o rasomuro.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-light text-zinc-900 dark:text-zinc-100">
                    {resolveLocalizedText(activeModalItem.name, locale)}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                    {resolveLocalizedText(activeModalItem.subtitle, locale)}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                    {resolveLocalizedText(activeModalItem.description, locale)}
                  </p>
                </div>

                {/* Detailed Specifications Table */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-zinc-400">
                    Specifiche di Fresata, Portata & Elettronica
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {activeModalItem.specs.loadCapacityKg && (
                      <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                        <span className="text-zinc-500 uppercase font-mono text-[10px]">Portata Certificata:</span>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                          {activeModalItem.specs.loadCapacityKg} kg (con 2 cerniere)
                        </span>
                      </div>
                    )}
                    {activeModalItem.specs.backsetMm && (
                      <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                        <span className="text-zinc-500 uppercase font-mono text-[10px]">Entrata (Backset):</span>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                          {activeModalItem.specs.backsetMm}
                        </span>
                      </div>
                    )}
                    {activeModalItem.specs.doorThicknessMinMm && (
                      <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                        <span className="text-zinc-500 uppercase font-mono text-[10px]">Spessore Minimo Anta:</span>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                          ≥ {activeModalItem.specs.doorThicknessMinMm} mm
                        </span>
                      </div>
                    )}
                    {activeModalItem.specs.batteryLife && (
                      <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                        <span className="text-zinc-500 uppercase font-mono text-[10px]">Autonomia & Cicli:</span>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                          {activeModalItem.specs.batteryLife}
                        </span>
                      </div>
                    )}
                    {activeModalItem.specs.powerSupply && (
                      <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                        <span className="text-zinc-500 uppercase font-mono text-[10px]">Alimentazione:</span>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                          {activeModalItem.specs.powerSupply}
                        </span>
                      </div>
                    )}
                    {activeModalItem.specs.wirelessProtocols && (
                      <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                        <span className="text-zinc-500 uppercase font-mono text-[10px]">Protocolli Wireless:</span>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-right">
                          {activeModalItem.specs.wirelessProtocols.join(', ')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Available Finishes */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-zinc-400">
                    Finiture & Trattamenti Disponibili
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalItem.specs.finishes.map((f, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-800 dark:text-zinc-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended Door Typologies */}
                <div className="p-4 bg-zinc-50 dark:bg-zinc-950 border-l-2 border-zinc-900 dark:border-white space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
                    Consiglio Architettonico per Capitolato
                  </span>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300">
                    {resolveLocalizedText(activeModalItem.recommendedFor, locale)}
                  </p>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-4">
                {activeModalItem.datasheetPdf ? (
                  <a
                    href={activeModalItem.datasheetPdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white text-xs uppercase tracking-widest font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7.414A2 2 0 0017.414 6L14 2.586A2 2 0 0012.586 2H4zm8 1.414L15.586 8H12V4.414zM4 5h6v4a1 1 0 001 1h4v6H4V5z" />
                    </svg>
                    <span>Scarica Scheda Ufficiale Produttore ({activeModalItem.datasheetPdf.sizeLabel})</span>
                  </a>
                ) : (
                  <div />
                )}

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(null)}
                    className="px-4 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs uppercase tracking-wider font-medium hover:border-zinc-900 dark:hover:border-zinc-100"
                  >
                    Chiudi
                  </button>
                  <Link
                    href={`/contact?inquiry=hardware&model=${encodeURIComponent(activeModalItem.slug)}`}
                    className="px-5 py-2.5 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 text-xs uppercase tracking-widest font-medium hover:opacity-90"
                  >
                    Includi in Capitolato
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
