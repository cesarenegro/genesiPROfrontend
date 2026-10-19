import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getLocale, getTranslations } from 'next-intl/server';
import { getVelaHandles, getVelaConceptHandles, Locale } from '@/lib/vela';
import VelaCategoryNav from '@/components/vela/VelaCategoryNav';
import VelaHandlesSection from '@/components/vela/VelaHandlesSection';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Maniglie, Prese e Dettagli Architetturali — VELA by Genesi',
    description: 'Collezione maniglie per porte, maniglioni complanari, prese a gola ricavate nel massello e serrature magnetiche ed elettroniche RFID.',
  };
}

export default async function ManigliePage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const handles = await getVelaHandles();
  const conceptHandles = await getVelaConceptHandles();
  const t = await getTranslations('Vela');

  const finishes = [
    {
      code: '01',
      name: 'Bronzo Spazzolato a Mano',
      tag: 'Spazzolatura Artigianale',
      desc: 'Tonalità calda e cangiante con micro-graffiature direzionali eseguite manualmente e sigillate con film nano-ceramico protettivo.',
      material: 'Lega di bronzo nobile',
      treatment: 'Spazzolatura manuale + finitura satinata',
      image: '/images/vela/finishes/01-bronzo-spazzolato.webp',
      colorHex: '#8C6D58',
    },
    {
      code: '02',
      name: 'Ottone Naturale Satinato',
      tag: 'Ottone Massiccio',
      desc: 'Riflessi dorati caldi ed equilibrati, ideali per creare un contrasto naturale con essenze di rovere scuro, noce e cannettati.',
      material: 'Ottone pieno trafilato',
      treatment: 'Satinatura meccanica calibrata',
      image: '/images/vela/finishes/02-ottone-satinato.webp',
      colorHex: '#C5A967',
    },
    {
      code: '03',
      name: 'Acciaio Inox AISI 316',
      tag: 'Marine Grade',
      desc: 'Purezza metallica inossidabile resistente a salsedine e umidità elevata. Perfetto per suite d\'hotel, ambienti wellness e residenze contemporanee.',
      material: 'Acciaio inossidabile austenitico AISI 316',
      treatment: 'Microsatinatura a nastro continuo',
      image: '/images/vela/finishes/03-acciaio-inox.webp',
      colorHex: '#B2B4B8',
    },
    {
      code: '04',
      name: 'Canna di Fucile (Dark Bronze)',
      tag: 'Brunitura Profonda',
      desc: 'Profondità cromatica antracite con sottotono bronzato scuro. Dialoga perfettamente con telai minimali, porte grafite e laccature scure.',
      material: 'Bronzo trattato a caldo',
      treatment: 'Brunitura chimica a spessore controllato',
      image: '/images/vela/finishes/04-canna-fucile.webp',
      colorHex: '#4A423B',
    },
    {
      code: '05',
      name: 'Nero Opaco Soft-Touch',
      tag: 'High Performance',
      desc: 'Finitura tecnica antiriflesso a sensazione vellutata al tatto. Trattamento ad elevatissima durezza superficiale anti-impronta e antigraffio.',
      material: 'Lega metallica speciale',
      treatment: 'Anodizzazione profonda + rivestimento soft-touch',
      image: '/images/vela/finishes/05-nero-opaco.webp',
      colorHex: '#1E1E1E',
    },
    {
      code: '06',
      name: 'Nichel Satinato Champagne',
      tag: 'Eleganza Senza Tempo',
      desc: 'Tonalità metallica chiara e morbida con riflessi champagne satinati. Un classico dell\'architettura d\'interni milanese ad altissima versatilità.',
      material: 'Metallo forgiato nobile',
      treatment: 'Bagno galvanico al nichel + satinatura serica',
      image: '/images/vela/finishes/06-nichel-satinato.webp',
      colorHex: '#C4BEB4',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <VelaCategoryNav activeCategory="maniglie" />

      {/* Hero Category Banner */}
      <section className="relative h-[65vh] min-h-[480px] max-h-[640px] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <Image
          src="/images/vela/handles/italian-hotel-lock-and-oak-elegance.webp"
          alt="Maniglie e dettagli architetturali VELA"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60 z-10" />

        <div className="relative z-20 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-zinc-300 mb-3 block font-medium">
            VELA • Hardware & Tatto
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4 leading-tight">
            Maniglie, Prese & Dettagli
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            L'interfaccia tattile del sistema porta. Maniglie a leva forgiate, maniglioni per cristalli e cannettati, gole d’apertura a scomparsa e serrature elettroniche RFID per l'hospitality.
          </p>
        </div>
      </section>

      {/* Editorial Overview Section */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <span className="text-xs uppercase tracking-widest text-zinc-400 mb-4 block font-medium">
            Ergonomia e Precisione Meccanica
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 leading-tight">
            La qualità di una porta si percepisce nel momento in cui la si tocca.
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-10">
            In VELA, l'impugnatura e gli elementi di chiusura non sono semplici accessori ma parte integrante del disegno architettonico della porta. I metalli nobili vengono lavorati dal pieno o forgiati e rifiniti a mano per garantire un'esperienza tattile fluida e una durata senza compromessi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?inquiry=contract&category=maniglie"
              className="px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
            >
              Richiedi Catalogo Tecnico & Campionari Maniglie
            </Link>
          </div>
        </div>
      </section>

      {/* Concept Handles & SVG Sheets Section */}
      <div className="container mx-auto px-6 lg:px-12">
        <VelaHandlesSection
          handles={conceptHandles}
          locale={locale}
          productCode="LINEA VELA"
          productName="Collezione Porte VELA"
        />
      </div>

      {/* Handles Grid: 2 columns on desktop */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-2 block font-medium">
              Catalogo Modelli
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">
              Sistemi di presa e maniglie coordinate VELA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {handles.map((item) => {
              const name = item.name[locale] || item.name.en;
              const material = item.material[locale] || item.material.en;
              const description = item.description[locale] || item.description.en;

              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-between transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600"
                >
                  {/* Photo canvas */}
                  <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden mb-6 border border-zinc-200/60 dark:border-zinc-800/60">
                    <Image
                      src={item.image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/85 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-widest text-zinc-700 dark:text-zinc-300 font-semibold border border-zinc-200/50 dark:border-zinc-800/50">
                      {item.type === 'lever' && 'Maniglia a Leva'}
                      {item.type === 'pull' && 'Maniglione Architetturale'}
                      {item.type === 'recessed' && 'Presa a Gola a Filo'}
                      {item.type === 'hardware' && 'Sistema di Chiusura / RFID'}
                    </div>
                  </div>

                  {/* Editorial Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-light text-zinc-900 dark:text-zinc-100 mb-2">
                        {name}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                        {material}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {description}
                    </p>

                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-2 text-xs">
                      <div className="text-zinc-500">
                        <strong className="text-zinc-700 dark:text-zinc-300 font-medium uppercase tracking-wider">Applicazione: </strong>
                        {item.compatibility}
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.finishes.map((fin, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                          >
                            {fin}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/contact?inquiry=sales&handle=${encodeURIComponent(item.slug)}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 hover:opacity-75 transition-opacity"
                      >
                        <span>Richiedi scheda tecnica & preventivo</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials & Finishes Palette Section */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-3 block font-medium">
              Cartella Finiture Metalli
            </span>
            <h2 className="text-3xl font-light tracking-tight text-white leading-tight mb-4">
              I metalli nobili del programma VELA
            </h2>
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
              Trattamenti galvanici a spessore, lucidature a specchio e spazzolature artigianali protette da film nano-ceramici per garantire resistenza all'abrasione e all'ossidazione nel tempo.
            </p>
          </div>

          {/* 3 Cards per Row Grid (3 Card per riga) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finishes.map((f) => (
              <div
                key={f.code}
                className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 flex flex-col overflow-hidden shadow-sm"
              >
                {/* 4:3 Aspect Ratio Image Canvas with Subtle Hover Zoom */}
                <div className="relative aspect-[4/3] w-full bg-zinc-950 overflow-hidden border-b border-zinc-800">
                  <Image
                    src={f.image}
                    alt={`${f.name} — ${f.tag}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Code Tag Top-Left */}
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 border border-white/15">
                    {f.code}
                  </div>
                  {/* Category Pill Top-Right */}
                  <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-xs text-zinc-300 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-white/15">
                    {f.tag}
                  </div>
                </div>

                {/* Editorial Spec Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-3.5 h-3.5 rounded-full inline-block border border-white/20 shrink-0"
                        style={{ backgroundColor: f.colorHex }}
                      />
                      <h3 className="text-lg font-light text-white tracking-tight">
                        {f.name}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {f.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 space-y-1.5 text-[11px] font-mono">
                    <div className="flex justify-between items-baseline text-zinc-400">
                      <span className="text-zinc-500 uppercase font-sans text-[10px] tracking-wider">Base:</span>
                      <span className="text-right">{f.material}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-zinc-400">
                      <span className="text-zinc-500 uppercase font-sans text-[10px] tracking-wider">Trattamento:</span>
                      <span className="text-zinc-200 text-right">{f.treatment}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            Desideri toccare con mano le nostre maniglie?
          </h2>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-10">
            Architetti, progettisti e general contractor possono richiedere il cofanetto campionature con finiture metalliche e impugnature in scala 1:1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?inquiry=contract&item=sample-box-maniglie"
              className="px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs sm:text-sm uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
            >
              Richiedi Cofanetto Campioni Maniglie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
