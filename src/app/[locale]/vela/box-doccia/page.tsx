import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getLocale, getTranslations } from 'next-intl/server';
import { getVelaProductsByFamily, Locale } from '@/lib/vela';
import VelaCategoryNav from '@/components/vela/VelaCategoryNav';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Box Doccia & Pareti in Cristallo — VELA by Genesi',
    description: 'Sistemi box doccia e pareti in cristallo per l\'architettura del bagno: profili minimi a filo, cristalli temperati e finiture su misura.',
  };
}

export default async function BoxDocciaPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const showerProducts = await getVelaProductsByFamily('shower');
  const t = await getTranslations('Vela');

  const showerPillars = [
    {
      title: 'Cristalli Architettonici di Sicurezza',
      desc: 'Vetri temperati di spessore maggiorato in versione extrachiara, fumé o cannettata, completati da trattamenti idrofobici anticalcare a lunga durata.',
      icon: '01',
    },
    {
      title: 'Profili a Sezione Minima o a Filo Pavimento',
      desc: 'Sistemi di canaline annegate nel massetto o nei rivestimenti in pietra per esaltare la trasparenza e cancellare ogni dislivello di soglia.',
      icon: '02',
    },
    {
      title: 'Cerniere e Meccanismi a Filo Vetro',
      desc: 'Componenti metallici in finitura spazzolata, ottone brunito o nero opaco con fissaggio a filo interno per una pulizia impeccabile.',
      icon: '03',
    },
    {
      title: 'Sartorialità Walk-In e Su Misura',
      desc: 'Configurazioni a nicchia, pareti divisorie walk-in e box ad angolo realizzati al millimetro per residenze private e suite alberghiere.',
      icon: '04',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <VelaCategoryNav activeCategory="box-doccia" />

      {/* Hero Category Banner */}
      <section className="relative h-[65vh] min-h-[480px] max-h-[640px] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <Image
          src="/images/vela/doors/09_STP1.webp"
          alt="Box doccia e cristalli VELA by Genesi"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60 z-10" />

        <div className="relative z-20 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-zinc-300 mb-3 block font-medium">
            VELA • Collezione 03 — Box Doccia & Cristallo
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4 leading-tight">
            Box Doccia e Pareti in Cristallo
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            Trasparenze pure e geometrie rigorose per l’ambiente bagno contemporaneo. Cristalli temperati di sicurezza, profili a sezione minima e tenute ermetiche a scomparsa.
          </p>
        </div>
      </section>

      {/* Editorial Overview Section */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <span className="text-xs uppercase tracking-widest text-zinc-400 mb-4 block font-medium">
            L'Architettura del Bagno
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 leading-tight">
            La materia trasparente al servizio della luce e dello spazio.
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-10">
            I box doccia VELA interpretano la stanza da bagno come un luogo di benessere essenziale. Eliminando gli ingombri visivi e lavorando su profili metallici di precisione, ogni soluzione valorizza la continuità di marmi, resine e ceramiche architettoniche.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?inquiry=sales&category=box-doccia"
              className="px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
            >
              Richiedi Preventivo Box Doccia su Misura
            </Link>
          </div>
        </div>
      </section>

      {/* Shower Systems Catalog Grid */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-zinc-400 mb-2 block font-medium">
                Sistemi d'Autore
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                Cabine, Walk-In e Scorrevoli in Cristallo
              </h2>
            </div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mt-4 md:mt-0 font-medium">
              Soluzioni Bagno per Residenze Private & Hotel Luxury
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {showerProducts.map((item) => {
              const name = item.name[locale] || item.name.en;
              const summary = item.summary[locale] || item.summary.en;

              return (
                <div
                  key={item.id}
                  className="group flex flex-col bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600"
                >
                  <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                    <Image
                      src={item.mainImage}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/90 backdrop-blur-xs px-3 py-1.5 text-[10px] uppercase tracking-widest text-zinc-800 dark:text-zinc-200 font-semibold border border-zinc-200/60 dark:border-zinc-800/60">
                      {item.code}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100">
                        {name}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        {summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                      <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">
                        Specifiche del Cristallo
                      </span>
                      <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                        {item.verifiedFeatures.map((feat, idx) => {
                          const text = feat[locale] || feat.en;
                          return (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-zinc-400 select-none">―</span>
                              <span>{text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/contact?inquiry=sales&category=box-doccia&model=${encodeURIComponent(item.slug)}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 hover:opacity-70 transition-opacity"
                      >
                        <span>Richiedi Progetto & Dimensioni Su Misura</span>
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

      {/* Pillars Grid */}
      <section className="py-24 bg-zinc-50/60 dark:bg-zinc-900/40 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-2 block font-medium">
              Caratteristiche Costruttive
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">
              Dettagli costruttivi e qualità dei componenti
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {showerPillars.map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs text-zinc-400 mb-6 font-medium">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-light mb-3 text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photographic Detail Split */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-zinc-400 block font-medium">
                Metalli e Tenute
              </span>
              <h2 className="text-3xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
                Cerniere a perno e guarnizioni a tenuta invisibile.
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                Le cerniere tecniche a pavimento e a parete consentono rotazioni a 90° e 180° con regolazione millimetrica di battuta, abbinate a profili magnetici sottili per impedire qualsiasi dispersione d'acqua.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact?inquiry=sales&category=box-doccia"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 hover:opacity-75 transition-opacity"
                >
                  <span>Configura il tuo box doccia</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <Image
                  src="/images/vela/doors/13_P+L3_DETT_CERNIERA_INFERIORE.webp"
                  alt="Dettaglio Cerniera a Pavimento a Tenuta"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <Image
                  src="/images/vela/doors/08_STA1_DETT_TERMINALE.webp"
                  alt="Dettaglio Profilo Terminale Satinato"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
