'use client';

import React from 'react';
import { useLocale } from 'next-intl';

type Locale = 'it' | 'en' | 'fr' | 'de';

interface LocalizedText {
  it: string;
  en: string;
  fr: string;
  de: string;
}

interface ResourceItem {
  id: string;
  brand: 'GENESI' | 'VELA';
  badge: LocalizedText;
  format: LocalizedText;
  title: string;
  description: LocalizedText;
  meta: LocalizedText;
  href?: string;
  comingSoon?: boolean;
  theme: {
    cardBg: string;
    badgeBg: string;
    titleColor: string;
    descColor: string;
    metaColor: string;
    dividerColor: string;
    btnStyle: string;
  };
}

const RESOURCES: ResourceItem[] = [
  {
    id: 'genesi-technical-pricelist-2026',
    brand: 'GENESI',
    badge: {
      it: 'Listino Tecnico & Schede',
      en: 'Technical Price List & Sheets',
      fr: 'Tarif Technique & Fiches',
      de: 'Technische Preisliste & Datenblätter',
    },
    format: {
      it: 'PDF · 86 Pagine A4',
      en: 'PDF · 86 Pages A4',
      fr: 'PDF · 86 Pages A4',
      de: 'PDF · 86 Seiten A4',
    },
    title: 'GENESI Technical Price List 2026',
    description: {
      it: 'Listino tecnico e abaco di capitolato con Master Index degli 80 SKU, viste ortogonali 2D quotate, specifiche materiali e condizioni tender.',
      en: 'Technical price list and specification index with Master Index of all 80 SKUs, dimensioned 2D orthogonal views, material specs and tender terms.',
      fr: 'Tarif technique et recueil de spécifications avec Master Index des 80 références, vues orthogonales 2D cotées, spécifications matières et conditions contract.',
      de: 'Technische Preisliste und Ausschreibungshandbuch mit Master-Index aller 80 SKUs, bemaßten 2D-Orthogonalansichten, Materialangaben und Ausschreibungskonditionen.',
    },
    meta: {
      it: 'Abaco Tecnico Contract · 37.9 MB',
      en: 'Contract Technical Specs · 37.9 MB',
      fr: 'Recueil Technique Contract · 37.9 MB',
      de: 'Contract-Technikhandbuch · 37.9 MB',
    },
    href: '/docs/GENESI_TECHNICAL_PRICE_LIST_2026_FINAL.pdf',
    theme: {
      cardBg: 'bg-[#1C1917]/50 border-[#C5A059]/50 shadow-xs hover:bg-[#1C1917]/60 backdrop-blur-xs',
      badgeBg: 'bg-[#1C1917]/85 text-[#E5C888] border border-[#C5A059]/50',
      titleColor: 'text-stone-950 dark:text-[#F5F2EB]',
      descColor: 'text-stone-900 dark:text-stone-200',
      metaColor: 'text-stone-900 dark:text-[#E5C888]',
      dividerColor: 'border-stone-900/15 dark:border-white/20',
      btnStyle: 'bg-[#1C1917] text-[#E5C888] hover:bg-stone-900',
    },
  },
  {
    id: 'genesi-trade-b2b-pricelist',
    brand: 'GENESI',
    badge: {
      it: 'Listino Riservato B2B',
      en: 'Trade B2B Price List',
      fr: 'Tarif Réservé B2B',
      de: 'B2B-Fachpreisliste',
    },
    format: {
      it: 'PDF · Edizione Partner',
      en: 'PDF · Partner Edition',
      fr: 'PDF · Édition Partenaire',
      de: 'PDF · Partner-Ausgabe',
    },
    title: 'GENESI Trade Price List 2026 (v2)',
    description: {
      it: 'Listino prezzi commerciale riservato a studi di architettura, interior contractor, buyer hospitality e distributori autorizzati.',
      en: 'Commercial price list restricted to architecture studios, interior contractors, hospitality buyers and authorized dealers.',
      fr: "Tarif commercial réservé aux agences d'architecture, contractants d'intérieur, acheteurs de l'hôtellerie et distributeurs agréés.",
      de: 'Gewerbliche Preisliste, ausschließlich für Architekturbüros, Innenausbauer, Hospitality-Einkäufer und autorisierte Vertriebspartner.',
    },
    meta: {
      it: 'Accesso Protetto Trade · PDF',
      en: 'Trade Protected Access · PDF',
      fr: 'Accès Protégé Trade · PDF',
      de: 'Geschützter Trade-Zugang · PDF',
    },
    href: '/api/trade/price-list',
    theme: {
      cardBg: 'bg-[#8A9A86]/50 border-[#788764]/50 shadow-xs hover:bg-[#8A9A86]/60 backdrop-blur-xs',
      badgeBg: 'bg-[#3A4437]/85 text-white border border-[#3A4437]/40',
      titleColor: 'text-stone-950 dark:text-white',
      descColor: 'text-stone-800 dark:text-stone-100',
      metaColor: 'text-stone-900 dark:text-stone-200',
      dividerColor: 'border-stone-900/15 dark:border-white/20',
      btnStyle: 'bg-[#3A4437] text-white hover:bg-[#2c342a]',
    },
  },
  {
    id: 'genesi-master-excel-2026',
    brand: 'GENESI',
    badge: {
      it: 'Foglio Calcolo & Capitolato',
      en: 'Spreadsheet & Tender Model',
      fr: 'Tableur & Modèle de Devis',
      de: 'Kalkulationstabelle & Ausschreibung',
    },
    format: {
      it: 'EXCEL · .XLSX (80 SKU)',
      en: 'EXCEL · .XLSX (80 SKUs)',
      fr: 'EXCEL · .XLSX (80 Références)',
      de: 'EXCEL · .XLSX (80 SKUs)',
    },
    title: 'GENESI Master Excel Price List 2026',
    description: {
      it: 'Database tabellare completo con tutti gli 80 codici articolo, dimensioni verificate (W × D × H cm), materiali, finiture e lead time per computi.',
      en: 'Complete tabular database with all 80 product codes, verified dimensions (W × D × H cm), materials, finishes and lead times for estimations.',
      fr: 'Base de données tabulaire complète avec les 80 codes articles, dimensions vérifiées (L × P × H cm), matériaux, finitions et délais de fabrication.',
      de: 'Vollständige tabellarische Datenbank mit allen 80 Artikelcodes, geprüften Maßen (B × T × H cm), Materialien, Oberflächen und Lieferzeiten für Leistungsverzeichnisse.',
    },
    meta: {
      it: 'File Editabile Tender · XLSX',
      en: 'Editable Tender File · XLSX',
      fr: 'Fichier Modifiable Devis · XLSX',
      de: 'Bearbeitbare Ausschreibungsdatei · XLSX',
    },
    href: '/docs/GENESI_MASTER_PRICE_LIST_2026.xlsx',
    theme: {
      cardBg: 'bg-[#3D312A]/50 border-[#B08D57]/50 shadow-xs hover:bg-[#3D312A]/60 backdrop-blur-xs',
      badgeBg: 'bg-[#3D312A]/85 text-[#F0D7A7] border border-[#B08D57]/50',
      titleColor: 'text-stone-950 dark:text-[#F5F2EB]',
      descColor: 'text-stone-900 dark:text-stone-200',
      metaColor: 'text-stone-900 dark:text-[#F0D7A7]',
      dividerColor: 'border-stone-900/15 dark:border-white/20',
      btnStyle: 'bg-[#3D312A] text-[#F5F2EB] hover:bg-[#2d241f]',
    },
  },
  {
    id: 'vela-master-pricelist-2026',
    brand: 'VELA',
    badge: {
      it: 'VELA Listino & Ferramenta',
      en: 'VELA Price List & Hardware',
      fr: 'VELA Tarif & Quincaillerie',
      de: 'VELA Preisliste & Beschläge',
    },
    format: {
      it: 'EXCEL · .XLSX (8 Fogli)',
      en: 'EXCEL · .XLSX (8 Sheets)',
      fr: 'EXCEL · .XLSX (8 Feuilles)',
      de: 'EXCEL · .XLSX (8 Tabellen)',
    },
    title: 'VELA Master Price List & Hardware 2026',
    description: {
      it: 'Listino prezzi completo e calcolatore tender interattivo per sistemi porte, box doccia, cerniere a scomparsa e serrature elettroniche RFID.',
      en: 'Complete price list and interactive tender calculator for door systems, shower enclosures, concealed hinges and RFID electronic locks.',
      fr: "Tarif complet et calculateur d'appel d'offres interactif pour portes, parois de douche, charnières invisibles et serrures électroniques RFID.",
      de: 'Vollständige Preisliste und interaktiver Ausschreibungsrechner für Türsysteme, Duschabtrennungen, verdeckte Bänder und RFID-Schlösser.',
    },
    meta: {
      it: '67 SKU + Calcolatore Tender · XLSX',
      en: '67 SKUs + Tender Calculator · XLSX',
      fr: '67 Références + Calculateur Devis · XLSX',
      de: '67 SKUs + Ausschreibungsrechner · XLSX',
    },
    href: '/docs/MASTER_EXCEL_VELA_PRICE_LIST_2026.xlsx',
    theme: {
      cardBg: 'bg-[#EDE8DF]/50 dark:bg-[#23201D]/50 border-[#C5A059]/50 shadow-xs hover:bg-[#EDE8DF]/70 backdrop-blur-xs',
      badgeBg: 'bg-[#3D312A]/85 text-[#E5C888]',
      titleColor: 'text-[#1C1917] dark:text-[#F5F2EB]',
      descColor: 'text-[#574C44] dark:text-stone-300',
      metaColor: 'text-[#7C6A58] dark:text-stone-300',
      dividerColor: 'border-[#D5CBBF]/60 dark:border-stone-800',
      btnStyle: 'bg-[#3D312A] text-[#E5C888] hover:bg-[#2a211c]',
    },
  },
];

export default function TradeResourcesGrid() {
  const rawLocale = useLocale();
  const locale = (['it', 'en', 'fr', 'de'].includes(rawLocale) ? rawLocale : 'en') as Locale;

  const headerStrings = {
    eyebrow: {
      it: 'Documentazione Ufficiale Riservata',
      en: 'Official Restricted Documentation',
      fr: 'Documentation Officielle Réservée',
      de: 'Offizielle Vertrauliche Dokumentation',
    },
    title: {
      it: 'Cataloghi, Listini Prezzi & Capitolati Tecnici',
      en: 'Catalogues, Price Lists & Technical Specifications',
      fr: 'Catalogues, Listes de Prix & Cahiers des Charges',
      de: 'Kataloge, Preislisten & Technische Ausschreibungen',
    },
    edition: {
      it: 'Edizione 2026 · Area Riservata B2B',
      en: '2026 Edition · B2B Trade Area',
      fr: 'Édition 2026 · Espace Réservé B2B',
      de: 'Ausgabe 2026 · B2B-Fachbereich',
    },
    download: {
      it: 'Scarica',
      en: 'Download',
      fr: 'Télécharger',
      de: 'Herunterladen',
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#5B9C94] font-semibold block mb-1">
            {headerStrings.eyebrow[locale]}
          </span>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            {headerStrings.title[locale]}
          </h2>
        </div>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {headerStrings.edition[locale]}
        </span>
      </div>

      {/* Grid da 3 Card per riga */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESOURCES.map((item) => {
          const isComingSoon = Boolean(item.comingSoon);
          const { theme } = item;
          const badgeText = item.badge[locale] || item.badge.en;
          const formatText = item.format[locale] || item.format.en;
          const descText = item.description[locale] || item.description.en;
          const metaText = item.meta[locale] || item.meta.en;

          return (
            <div
              key={item.id}
              className={`flex flex-col justify-between border p-7 transition-all duration-200 ${theme.cardBg}`}
            >
              <div>
                {/* Top Row: Badge + Format / Coming Soon pill */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span
                    className={`text-[11px] uppercase tracking-widest px-2.5 py-1 font-medium ${theme.badgeBg}`}
                  >
                    {badgeText}
                  </span>
                  {isComingSoon ? (
                    <span className="text-[11px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-[#C5A059]/50 text-[#1C1917] dark:text-[#F5F2EB] border border-[#C5A059]/50">
                      Coming Soon
                    </span>
                  ) : (
                    <span className={`text-[11px] uppercase tracking-wider font-mono ${theme.metaColor}`}>
                      {formatText}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className={`text-lg font-medium tracking-tight mb-2.5 ${theme.titleColor}`}>
                  {item.title}
                </h3>
                <p className={`text-sm font-light leading-relaxed mb-6 ${theme.descColor}`}>
                  {descText}
                </p>
              </div>

              {/* Footer / Action */}
              <div className={`pt-4 border-t flex items-center justify-between gap-4 mt-auto ${theme.dividerColor}`}>
                <span className={`text-xs font-medium ${theme.metaColor}`}>
                  {metaText}
                </span>

                {isComingSoon ? (
                  <span
                    className={`inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-widest font-semibold cursor-not-allowed select-none ${theme.btnStyle}`}
                  >
                    Coming Soon
                  </span>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-colors shrink-0 ${theme.btnStyle}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    <span>{headerStrings.download[locale]}</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
