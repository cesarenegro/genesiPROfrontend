'use client';

import { Locale } from '@/lib/vela';

interface Props {
  locale: Locale;
}

export default function VelaShowerTechnicalGuide({ locale }: Props) {
  const isIt = locale === 'it';

  const specs = [
    {
      num: '01',
      title: isIt ? 'Cristallo Temperato 8 & 10 mm' : 'Tempered Glass 8 & 10 mm',
      desc: isIt
        ? 'Vetro di sicurezza monolitico EN 12150-1 con bordi a filo lucido tondo (JPP). Disponibile in finitura Extrachiaro, Fumé Grigio, Satinato e Cannettato Fluted.'
        : 'EN 12150-1 monolithic safety glass with flat polished edges (JPP). Available in Extra-clear, Smoked Grey, Satin, and Fluted reed patterns.',
    },
    {
      num: '02',
      title: isIt ? 'Trattamento CleanGlass Nano-Tech' : 'CleanGlass Nano-Tech Coating',
      desc: isIt
        ? 'Polimerizzazione molecolare permanente che sigilla le microporosità del cristallo. Rende la superficie oleofobica e idrofobica, azzerando i depositi calcarei.'
        : 'Permanent molecular cross-linking sealing glass microporosities. Creates a hydrophobic and oleophobic shield, preventing limescale buildup.',
    },
    {
      num: '03',
      title: isIt ? 'Profili a Scomparsa & Tenuta Magnetica' : 'Concealed Profiles & Magnetic Seals',
      desc: isIt
        ? 'Telai strutturali in lega di alluminio primario 6060 o acciaio AISI 316 integrabili a filo cartongesso. Guarnizioni magnetiche traslucide anti-ingiallimento UV.'
        : 'Structural frames in primary 6060 alloy or AISI 316 stainless steel recessed flush into drywall. UV-stabilized translucent magnetic water barrier seals.',
    },
    {
      num: '04',
      title: isIt ? 'Cinematica Soft-Close & Perno Pivot' : 'Soft-Close Motion & Heavy-Duty Pivot',
      desc: isIt
        ? 'Scorrimento ammortizzato bi-direzionale collaudato per 100.000 cicli d’uso. Cerniere a bilico con cuscinetti sigillati in bagno d’olio e regolazione tridimensionale.'
        : 'Bi-directional dampened soft-close certified for 100,000 cycles. Pivot hinges with oil-sealed bearings and 3D alignment adjustments.',
    },
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 mb-16">
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 tracking-widest uppercase">
          {isIt ? 'Guida Tecnica di Capitolato' : 'Architectural Specification Guide'}
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-zinc-900 dark:text-zinc-100 mt-2">
          {isIt ? 'Standard Ingegneristici per Box Doccia VELA' : 'Engineering Standards for VELA Shower Enclosures'}
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
          {isIt
            ? 'I sistemi box doccia e pareti in cristallo VELA sono progettati specificamente per il settore hospitality d’alta gamma e le residenze private contemporanee, garantendo facilità di pulizia, purezza visiva e tenuta idraulica certificata.'
            : 'VELA shower enclosures and glass wall partitions are engineered for luxury hospitality and contemporary private residences, combining minimal sightlines, effortless cleaning, and certified watertight seals.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {specs.map((item) => (
          <div key={item.num} className="border-t border-zinc-200 dark:border-zinc-800 pt-5">
            <span className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500 block mb-1">
              {item.num}
            </span>
            <h3 className="text-base font-serif font-medium text-zinc-900 dark:text-zinc-100 mb-2">
              {item.title}
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
