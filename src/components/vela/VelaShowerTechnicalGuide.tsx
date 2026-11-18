'use client';

import { Locale } from '@/lib/vela';

interface Props {
  locale: Locale;
}

export default function VelaShowerTechnicalGuide({ locale }: Props) {
  const guideHeader = {
    tag: {
      it: 'Guida Tecnica di Capitolato',
      en: 'Architectural Specification Guide',
      fr: 'Guide Technique de Prescription',
      de: 'Technischer Ausschreibungsleitfaden',
    },
    title: {
      it: 'Standard Ingegneristici per Box Doccia VELA',
      en: 'Engineering Standards for VELA Shower Enclosures',
      fr: 'Normes d\'Ingénierie des Parois de Douche VELA',
      de: 'Konstruktionsstandards für VELA Duschkabinen',
    },
    desc: {
      it: 'I sistemi box doccia e pareti in cristallo VELA sono progettati specificamente per il settore hospitality d’alta gamma e le residenze private contemporanee, garantendo facilità di pulizia, purezza visiva e tenuta idraulica certificata.',
      en: 'VELA shower enclosures and glass wall partitions are engineered for luxury hospitality and contemporary private residences, combining minimal sightlines, effortless cleaning, and certified watertight seals.',
      fr: 'Les parois de douche et séparations en verre VELA sont conçues pour l\'hôtellerie de luxe et les résidences contemporaines, alliant profilés ultra-fins, facilité d\'entretien et étanchéité certifiée.',
      de: 'VELA Duschkabinen und Glastrennwände wurden speziell für die Luxushotellerie und anspruchsvolle Privatresidenzen entwickelt und vereinen minimale Ansichtsbreiten, leichte Reinigung und geprüfte Dichtigkeit.',
    },
  };

  const specs = [
    {
      num: '01',
      title: {
        it: 'Cristallo Temperato 8 & 10 mm',
        en: 'Tempered Glass 8 & 10 mm',
        fr: 'Verre Trempé de Sécurité 8 & 10 mm',
        de: 'Einscheiben-Sicherheitsglas 8 & 10 mm',
      },
      desc: {
        it: 'Vetro di sicurezza monolitico EN 12150-1 con bordi a filo lucido tondo (JPP). Disponibile in finitura Extrachiaro, Fumé Grigio, Satinato e Cannettato Fluted.',
        en: 'EN 12150-1 monolithic safety glass with flat polished edges (JPP). Available in Extra-clear, Smoked Grey, Satin, and Fluted reed patterns.',
        fr: 'Verre de sécurité monolithique certifié EN 12150-1 avec joints polis plats (JPP). Disponible en finitions Extra-clair, Fumé Gris, Satiné et Cannelé Fluted.',
        de: 'Einscheiben-Sicherheitsglas nach EN 12150-1 mit polierten Flachkanten (JPP). Lieferbar in Extra-klar, Grauglas, Satiniert und Fluted-Rillenglas.',
      },
    },
    {
      num: '02',
      title: {
        it: 'Trattamento CleanGlass Nano-Tech',
        en: 'CleanGlass Nano-Tech Coating',
        fr: 'Traitement CleanGlass Nano-Tech',
        de: 'CleanGlass Nano-Tech Veredelung',
      },
      desc: {
        it: 'Polimerizzazione molecolare permanente che sigilla le microporosità del cristallo. Rende la superficie oleofobica e idrofobica, azzerando i depositi calcarei.',
        en: 'Permanent molecular cross-linking sealing glass microporosities. Creates a hydrophobic and oleophobic shield, preventing limescale buildup.',
        fr: 'Polymérisation moléculaire permanente scellant les microporosités du verre. Crée une barrière hydrophobe et oléophobe empêchant le tartre.',
        de: 'Dauerhafte molekulare Versiegelung der Glasmikroporosität. Schafft einen hydrophoben und oleophoben Schutzschild gegen Kalkablagerungen.',
      },
    },
    {
      num: '03',
      title: {
        it: 'Profili a Scomparsa & Tenuta Magnetica',
        en: 'Concealed Profiles & Magnetic Seals',
        fr: 'Profilés Encastrés & Joints Magnétiques',
        de: 'Verdeckte Profile & Magnetdichtungen',
      },
      desc: {
        it: 'Telai strutturali in lega di alluminio primario 6060 o acciaio AISI 316 integrabili a filo cartongesso. Guarnizioni magnetiche traslucide anti-ingiallimento UV.',
        en: 'Structural frames in primary 6060 alloy or AISI 316 stainless steel recessed flush into drywall. UV-stabilized translucent magnetic water barrier seals.',
        fr: 'Cadres structurels en alliage d\'aluminium 6060 ou acier inoxydable AISI 316 encastrables dans la cloison. Joints magnétiques translucides anti-UV.',
        de: 'Strukturrahmen aus Primäraluminium 6060 oder Edelstahl AISI 316, bündig in die Wand integrierbar. UV-beständige Magnetdichtungen.',
      },
    },
    {
      num: '04',
      title: {
        it: 'Cinematica Soft-Close & Perno Pivot',
        en: 'Soft-Close Motion & Heavy-Duty Pivot',
        fr: 'Cinématique Soft-Close & Pivot Robuste',
        de: 'Soft-Close Dämpfung & Schwerlast-Pivot',
      },
      desc: {
        it: 'Scorrimento ammortizzato bi-direzionale collaudato per 100.000 cicli d’uso. Cerniere a bilico con cuscinetti sigillati in bagno d’olio e regolazione tridimensionale.',
        en: 'Bi-directional dampened soft-close certified for 100,000 cycles. Pivot hinges with oil-sealed bearings and 3D alignment adjustments.',
        fr: 'Coulissement amorti bidirectionnel testé sur 100 000 cycles. Charnières pivot sur roulements étanches avec réglage tridimensionnel.',
        de: 'Beidseitig gedämpfter Soft-Close, geprüft auf 100.000 Zyklen. Pivot-Bänder mit ölgelagerten Präzisionslagern und 3D-Justierung.',
      },
    },
  ];

  const tagText = guideHeader.tag[locale] || guideHeader.tag.en;
  const titleText = guideHeader.title[locale] || guideHeader.title.en;
  const descText = guideHeader.desc[locale] || guideHeader.desc.en;

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 mb-16">
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 tracking-widest uppercase">
          {tagText}
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-zinc-900 dark:text-zinc-100 mt-2">
          {titleText}
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
          {descText}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {specs.map((item) => {
          const itemTitle = item.title[locale] || item.title.en;
          const itemDesc = item.desc[locale] || item.desc.en;
          return (
            <div key={item.num} className="border-t border-zinc-200 dark:border-zinc-800 pt-5">
              <span className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500 block mb-1">
                {item.num}
              </span>
              <h3 className="text-base font-serif font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                {itemTitle}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono">
                {itemDesc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
