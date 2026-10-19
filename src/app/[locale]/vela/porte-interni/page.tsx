import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getLocale, getTranslations } from 'next-intl/server';
import {
  getVelaProductsByFamily,
  getVelaResidentialDetails,
  Locale,
} from '@/lib/vela';
import VelaProductGrid from '@/components/vela/VelaProductGrid';
import VelaCategoryNav from '@/components/vela/VelaCategoryNav';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Porte per Interni Residenziali — VELA by Genesi',
    description: 'Sistemi di porte per interni: complanarità rasomuro, bilico pivot, scorrevoli a scomparsa, cristalli cannettati e battenti su misura a tutta altezza.',
  };
}

export default async function PorteInterniPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const products = await getVelaProductsByFamily('residential');
  const residentialDetails = await getVelaResidentialDetails();
  const t = await getTranslations('Vela');

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <VelaCategoryNav activeCategory="porte-interni" />

      {/* Hero Category Banner */}
      <section className="relative h-[65vh] min-h-[480px] max-h-[640px] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <Image
          src="/images/vela/residential/vela-door-in-a-calm-italian-interior.webp"
          alt="Porte per interni residenziali VELA by Genesi"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 z-10" />

        <div className="relative z-20 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-zinc-300 mb-3 block font-medium">
            VELA • Collezione 01 — Residenziale
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4 leading-tight">
            Porte per Interni Residenziali
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            Complanarità a parete, aperture a bilico con perno decentrato a scomparsa, sistemi scorrevoli a scomparsa, cristalli cannettati e porte a tutta altezza senza traverso.
          </p>
        </div>
      </section>

      {/* Main Interactive Product Catalogue with Filters */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-2 block font-medium">
              Catalogo Sistemi d'Apertura
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              Collezione Porte Interne: Bilico, Scorrevoli e Battenti
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Filtra la collezione per tipologia di movimento ed esplora i modelli in rovere naturale, noce canaletto, laccature satinate e cristalli lavorati.
            </p>
          </div>

          <VelaProductGrid products={products} locale={locale} />
        </div>
      </section>

      {/* Macro Details of Residential Craftsmanship */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-2 block font-medium">
              Ebanisteria & Meccanica
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              I particolari che definiscono l'eccellenza VELA
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Dalla fresatura a controllo numerico nel massello alle cerniere a scomparsa totale registrabili sui tre assi: la qualità è tangibile in ogni millimetro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {residentialDetails.map((detail) => {
              const title = detail.title[locale] || detail.title.en;
              const desc = detail.desc[locale] || detail.desc.en;

              return (
                <div
                  key={detail.id}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <Image
                      src={detail.image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-light mb-2 text-zinc-900 dark:text-zinc-100">
                      {title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Link to Handles and Bespoke Engineering Callout */}
      <section className="py-20 bg-zinc-950 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-zinc-400 block font-medium">
                Sartorialità Architettonica
              </span>
              <h2 className="text-3xl font-light tracking-tight text-white leading-tight">
                Ogni sistema è ingegnerizzato su misura per il tuo progetto d'interni.
              </h2>
              <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                Le porte per interni VELA si adattano all'altezza interpiano, alla tipologia di muratura (cartongesso o intonaco rasato a filo) e alle finiture d'arredo desiderate.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact?inquiry=contract&category=porte-interni"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 text-xs uppercase tracking-widest font-semibold hover:bg-zinc-200 transition-colors"
                >
                  <span>Richiedi Consulenza su Misura</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/vela/maniglie"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-zinc-700 text-white text-xs uppercase tracking-widest font-semibold hover:border-white transition-colors"
                >
                  <span>Scopri le Maniglie VELA</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden border border-zinc-800">
                <Image
                  src="/images/vela/residential/warm-greige-pivot-door-details.webp"
                  alt="Dettaglio Meccanismo Pivot"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden border border-zinc-800">
                <Image
                  src="/images/vela/handles/bronze-handle-and-brushed-metal-finish.webp"
                  alt="Dettaglio Maniglia Bronzo Satinato"
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
