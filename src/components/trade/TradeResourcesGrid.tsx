import React from 'react';

interface ResourceItem {
  id: string;
  brand: 'GENESI' | 'VELA';
  badge: string;
  format: string;
  title: string;
  description: string;
  meta: string;
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
    id: 'genesi-hospitality-2026',
    brand: 'GENESI',
    badge: 'Master Catalogue 2026',
    format: 'PDF · 108 Pagine A4',
    title: 'GENESI Hospitality Collection 2026',
    description:
      'Catalogo monografico completo con 80 arredi contract, 18 categorie hospitality, doppia vista tecnica/ambientale e quote metriche auditate.',
    meta: 'Edizione Ufficiale 2026 · 39.7 MB',
    href: '/docs/GENESI_COLLECTION_2026_FINAL.pdf',
    theme: {
      cardBg: 'bg-[#5B9C94]/50 border-[#488079]/50 shadow-xs hover:bg-[#5B9C94]/60 backdrop-blur-xs',
      badgeBg: 'bg-[#2C4A52]/80 text-white border border-[#2C4A52]/40',
      titleColor: 'text-stone-950 dark:text-white',
      descColor: 'text-stone-800 dark:text-stone-100',
      metaColor: 'text-stone-900 dark:text-stone-200',
      dividerColor: 'border-stone-900/15 dark:border-white/20',
      btnStyle: 'bg-[#2C4A52] text-white hover:bg-[#1f353b]',
    },
  },
  {
    id: 'genesi-technical-pricelist-2026',
    brand: 'GENESI',
    badge: 'Listino Tecnico & Schede',
    format: 'PDF · 86 Pagine A4',
    title: 'GENESI Technical Price List 2026',
    description:
      'Listino tecnico e abaco di capitolato con Master Index degli 80 SKU, viste ortogonali 2D quotate, specifiche materiali e condizioni tender.',
    meta: 'Abaco Tecnico Contract · 37.9 MB',
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
    badge: 'Listino Riservato B2B',
    format: 'PDF · Edizione Partner',
    title: 'GENESI Trade Price List 2026 (v2)',
    description:
      'Listino prezzi commerciale riservato a studi di architettura, interior contractor, buyer hospitality e distributori autorizzati.',
    meta: 'Accesso Protetto Trade · PDF',
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
    badge: 'Foglio Calcolo & Capitolato',
    format: 'EXCEL · .XLSX (80 SKU)',
    title: 'GENESI Master Excel Price List 2026',
    description:
      'Database tabellare completo con tutti gli 80 codici articolo, dimensioni verificate (W × D × H cm), materiali, finiture e lead time per computi.',
    meta: 'File Editabile Tender · XLSX',
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
    id: 'genesi-materials-finishing-2026',
    brand: 'GENESI',
    badge: 'Materioteca Contract',
    format: 'PDF · Dossier Finiture',
    title: 'GENESI Finishing & Materials 2026',
    description:
      'Campionario ufficiale alta definizione: essenze Teak (Honey, Oiled, Weathered, Wenge), metalli, marmi (Carrara, Marquina, Travertino) e tessuti.',
    meta: 'Estratto Campionari UMA · PDF',
    href: '/docs/GENESI_MATERIALS_FINISHING_2026.pdf',
    theme: {
      cardBg: 'bg-[#7C4D3B]/50 border-[#663E2F]/50 shadow-xs hover:bg-[#7C4D3B]/60 backdrop-blur-xs',
      badgeBg: 'bg-[#5A3527]/85 text-white border border-[#5A3527]/40',
      titleColor: 'text-stone-950 dark:text-white',
      descColor: 'text-stone-900 dark:text-stone-100',
      metaColor: 'text-stone-900 dark:text-amber-100',
      dividerColor: 'border-stone-900/15 dark:border-white/20',
      btnStyle: 'bg-[#5A3527] text-white hover:bg-[#46291e]',
    },
  },
  {
    id: 'genesi-brand-catalogue',
    brand: 'GENESI',
    badge: 'Company & Overview',
    format: 'PDF · Brochure Istituzionale',
    title: 'GENESI Architectural Overview',
    description:
      'Presentazione istituzionale del brand Genesi, filosofia progettuale turnkey per hotel e resort di lusso e selezione collezioni.',
    meta: 'Brochure Generale · 11.2 MB',
    href: '/docs/genesi-catalogue.pdf',
    theme: {
      cardBg: 'bg-[#2C4A52]/50 border-[#5B9C94]/50 shadow-xs hover:bg-[#2C4A52]/60 backdrop-blur-xs',
      badgeBg: 'bg-[#2C4A52]/85 text-[#D2F0EC] border border-[#5B9C94]/50',
      titleColor: 'text-stone-950 dark:text-white',
      descColor: 'text-stone-900 dark:text-slate-100',
      metaColor: 'text-stone-900 dark:text-[#A8DBD5]',
      dividerColor: 'border-stone-900/15 dark:border-white/20',
      btnStyle: 'bg-[#2C4A52] text-white hover:bg-[#1f353b]',
    },
  },
  {
    id: 'vela-monographic-catalogue-2026',
    brand: 'VELA',
    badge: 'VELA by Genesi',
    format: 'PDF · Catalogo Monografico',
    title: 'VELA Collezione Porte & Sistemi 2026',
    description:
      'Sistemi porte per interni residenziali (Bilico, Scorrevoli, Battenti, Rasomuro) e porte tecniche camere hotel certificate EI30/EI60.',
    meta: '80 Pagine A4 · In fase di rilascio',
    comingSoon: true,
    theme: {
      cardBg: 'bg-[#EDE8DF]/50 dark:bg-[#23201D]/50 border-[#C5A059]/50 backdrop-blur-xs',
      badgeBg: 'bg-[#3D312A]/80 text-[#E5C888]',
      titleColor: 'text-[#1C1917] dark:text-[#F5F2EB]',
      descColor: 'text-[#574C44] dark:text-stone-300',
      metaColor: 'text-[#7C6A58] dark:text-stone-400',
      dividerColor: 'border-[#D5CBBF]/60 dark:border-stone-800',
      btnStyle: 'bg-[#C5A059]/50 text-[#1C1917] dark:text-[#F5F2EB]',
    },
  },
  {
    id: 'vela-box-doccia-2026',
    brand: 'VELA',
    badge: 'VELA Wellness & Cristallo',
    format: 'PDF · Abaco Tecnico Doccia',
    title: 'VELA Box Doccia & Pareti Cristallo',
    description:
      'Collezione di 23 serie doccia in cristallo temperato 8/10 mm con trattamento nano-ceramico CleanGlass e profili architettonici PVD.',
    meta: '23 Serie Complete · In fase di rilascio',
    comingSoon: true,
    theme: {
      cardBg: 'bg-[#EDE8DF]/50 dark:bg-[#23201D]/50 border-[#C5A059]/50 backdrop-blur-xs',
      badgeBg: 'bg-[#3D312A]/80 text-[#E5C888]',
      titleColor: 'text-[#1C1917] dark:text-[#F5F2EB]',
      descColor: 'text-[#574C44] dark:text-stone-300',
      metaColor: 'text-[#7C6A58] dark:text-stone-400',
      dividerColor: 'border-[#D5CBBF]/60 dark:border-stone-800',
      btnStyle: 'bg-[#C5A059]/50 text-[#1C1917] dark:text-[#F5F2EB]',
    },
  },
  {
    id: 'vela-master-pricelist-2026',
    brand: 'VELA',
    badge: 'VELA Listino & Ferramenta',
    format: 'XLSX / PDF · Listino Tecnico',
    title: 'VELA Master Price List & Hardware 2026',
    description:
      'Listino prezzi completo per sistemi porte, box doccia, cerniere a scomparsa, maniglie di design e serrature elettroniche RFID.',
    meta: 'Listino Contract · In fase di rilascio',
    comingSoon: true,
    theme: {
      cardBg: 'bg-[#EDE8DF]/50 dark:bg-[#23201D]/50 border-[#C5A059]/50 backdrop-blur-xs',
      badgeBg: 'bg-[#3D312A]/80 text-[#E5C888]',
      titleColor: 'text-[#1C1917] dark:text-[#F5F2EB]',
      descColor: 'text-[#574C44] dark:text-stone-300',
      metaColor: 'text-[#7C6A58] dark:text-stone-400',
      dividerColor: 'border-[#D5CBBF]/60 dark:border-stone-800',
      btnStyle: 'bg-[#C5A059]/50 text-[#1C1917] dark:text-[#F5F2EB]',
    },
  },
];

export default function TradeResourcesGrid() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#5B9C94] font-semibold block mb-1">
            Documentazione Ufficiale Riservata
          </span>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            Cataloghi, Listini Prezzi & Capitolati Tecnici
          </h2>
        </div>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Edizione 2026 · Area Riservata B2B
        </span>
      </div>

      {/* Grid da 3 Card per riga */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESOURCES.map((item) => {
          const isComingSoon = Boolean(item.comingSoon);
          const { theme } = item;

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
                    {item.badge}
                  </span>
                  {isComingSoon ? (
                    <span className="text-[11px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-[#C5A059]/50 text-[#1C1917] dark:text-[#F5F2EB] border border-[#C5A059]/50">
                      Coming Soon
                    </span>
                  ) : (
                    <span className={`text-[11px] uppercase tracking-wider font-mono ${theme.metaColor}`}>
                      {item.format}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className={`text-lg font-medium tracking-tight mb-2.5 ${theme.titleColor}`}>
                  {item.title}
                </h3>
                <p className={`text-sm font-light leading-relaxed mb-6 ${theme.descColor}`}>
                  {item.description}
                </p>
              </div>

              {/* Footer / Action */}
              <div className={`pt-4 border-t flex items-center justify-between gap-4 mt-auto ${theme.dividerColor}`}>
                <span className={`text-xs font-medium ${theme.metaColor}`}>
                  {item.meta}
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
                    <span>Scarica</span>
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
