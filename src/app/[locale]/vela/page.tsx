import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getLocale, getTranslations } from 'next-intl/server';
import { getVelaBrand, getVelaFamilies, getVelaProductsByFamily, Locale } from '@/lib/vela';
import VelaProductGrid from '@/components/vela/VelaProductGrid';
import VelaCategoryNav from '@/components/vela/VelaCategoryNav';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Vela' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function VelaBrandPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  const brand = await getVelaBrand();
  const families = await getVelaFamilies();
  const products = await getVelaProductsByFamily('residential');
  const t = await getTranslations('Vela');

  const claimText = brand.claim[locale] || brand.claim.en;
  const brandDescription = brand.description[locale] || brand.description.en;

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <VelaCategoryNav activeCategory="all" />
      {/* ============================================================ */}
      {/* A. APERTURA FOTOGRAFICA (HERO)                                */}
      {/* ============================================================ */}
      <section className="relative h-[85vh] min-h-[640px] max-h-[920px] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        {/* Background real photography with slow subtle ambient feel */}
        <Image
          src="/images/vela/residential/vela-door-in-a-calm-italian-interior.webp"
          alt="VELA by Genesi — Porte e superfici per l’architettura degli interni"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-85"
        />

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/50 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center max-w-4xl">
          {/* Approved VELA Logo in White SVG Vector */}
          <div className="mb-8 w-48 sm:w-64 md:w-80 transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/vela/vela-logo-white.svg"
              alt="VELA by Genesi"
              width={380}
              height={140}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight text-white mb-6 leading-tight">
            {claimText}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-2xl mb-10 leading-relaxed">
            {brandDescription}
          </p>

          <a
            href="#collezioni"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 text-xs sm:text-sm uppercase tracking-widest font-medium hover:bg-zinc-200 transition-colors"
          >
            <span>{t('exploreCollections')}</span>
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* B. INTRODUZIONE EDITORIALE                                   */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <span className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4 block">
            {t('brandTag')}
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 leading-tight">
            Geometrie del passaggio, complanarità e silenzio materico.
          </h2>
          <p className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            La porta non è più un elemento di separazione, ma una superficie architettonica continua.
            VELA nasce all'interno dell'universo GENESI per offrire ai progettisti sistemi di apertura
            integrati: dal bilico scenografico alle soluzioni scorrevoli a scomparsa totale.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* C. ACCESSI ALLE 3 FAMIGLIE DI PRODOTTO                        */}
      {/* ============================================================ */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-3">
              {t('ourFamilies')}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light">
              {t('ourFamiliesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {families.map((family) => {
              const title = family.title[locale] || family.title.en;
              const subtitle = family.subtitle[locale] || family.subtitle.en;
              const isAvailable = family.status === 'available';

              return (
                <div
                  key={family.id}
                  className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={family.heroImage}
                      alt={title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      {isAvailable ? (
                        <span className="bg-white/95 dark:bg-black/85 text-zinc-900 dark:text-zinc-100 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 border border-zinc-200/50 dark:border-zinc-800/50">
                          {t('availableNow')} ({family.count})
                        </span>
                      ) : (
                        <span className="bg-zinc-900/80 text-zinc-300 text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 backdrop-blur-xs">
                          {t('inPreparation')}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-xl font-light mb-3 text-zinc-900 dark:text-zinc-100">
                        {title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-6">
                        {subtitle}
                      </p>
                    </div>

                    <div>
                      <Link
                        href={`/vela/${family.slug}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 hover:opacity-75 transition-opacity"
                      >
                        <span>{t('viewFamily')}</span>
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

      {/* ============================================================ */}
      {/* C.1 SPOTLIGHT HARDWARE & MANIGLIE ARCHITETTURALI            */}
      {/* ============================================================ */}
      <section className="py-20 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-zinc-900 text-white p-8 md:p-14 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium block">
                Hardware & Tatto • Sezione Dedicata
              </span>
              <h2 className="text-2xl md:text-4xl font-light tracking-tight text-white leading-tight">
                Maniglie, Prese a Gola & Serrature Elettroniche VELA
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                L'interfaccia tattile del sistema porta. Maniglie forgiate a mano, maniglioni per cristalli e pannelli cannettati, prese a gola a filo nel massello e sistemi di chiusura RFID per hotel.
              </p>
              <div className="pt-2">
                <Link
                  href="/vela/maniglie"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 text-xs uppercase tracking-widest font-semibold hover:bg-zinc-200 transition-colors"
                >
                  <span>Esplora il Catalogo Maniglie & Dettagli</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-96 grid grid-cols-2 gap-3 shrink-0">
              <div className="relative aspect-square overflow-hidden border border-zinc-800">
                <Image
                  src="/images/vela/handles/bronze-handle-and-brushed-metal-finish.webp"
                  alt="Maniglia Bronzo Spazzolato"
                  fill
                  sizes="20vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden border border-zinc-800">
                <Image
                  src="/images/vela/handles/bronze-pull-and-fluted-oak-detail.webp"
                  alt="Maniglione Bronzo su Cannettato"
                  fill
                  sizes="20vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden border border-zinc-800">
                <Image
                  src="/images/vela/handles/seta-door-pull-and-groove.webp"
                  alt="Presa a Gola nel Massello"
                  fill
                  sizes="20vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden border border-zinc-800">
                <Image
                  src="/images/vela/handles/senso-hotel-door-hardware-details.webp"
                  alt="Serratura Hotel e Hardware"
                  fill
                  sizes="20vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* D. SELEZIONE PRODOTTI (CATALOGO REALE A 2 COLONNE)            */}
      {/* ============================================================ */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <VelaProductGrid products={products} locale={locale} />
        </div>
      </section>

      {/* ============================================================ */}
      {/* E. MATERIALI E DETTAGLI D'INGEGNERIA                         */}
      {/* ============================================================ */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-3 block">
              Dettagli Costruttivi
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 text-white">
              {t('materialsTitle')}
            </h2>
            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
              {t('materialsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Detail 1: Pivot */}
            <div className="space-y-4">
              <div className="relative aspect-square w-full bg-zinc-900 overflow-hidden border border-zinc-800">
                <Image
                  src="/images/vela/residential/warm-greige-pivot-door-details.webp"
                  alt="Dettaglio Perno a Bilico"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-lg font-light text-white">{t('detailPivots')}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                {t('detailPivotsDesc')}
              </p>
            </div>

            {/* Detail 2: Presa a Gola nel Massello */}
            <div className="space-y-4">
              <div className="relative aspect-square w-full bg-zinc-900 overflow-hidden border border-zinc-800">
                <Image
                  src="/images/vela/residential/vela-rovere-door-details-in-smoked-oak.webp"
                  alt="Dettaglio Presa a Gola nel Massello"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-lg font-light text-white">{t('detailTracks')}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                {t('detailTracksDesc')}
              </p>
            </div>

            {/* Detail 3: Complanarità Legno-Metallo */}
            <div className="space-y-4">
              <div className="relative aspect-square w-full bg-zinc-900 overflow-hidden border border-zinc-800">
                <Image
                  src="/images/vela/residential/smoked-oak-satin-bronze-door-details.webp"
                  alt="Dettaglio Incontro Rovere e Bronzo"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-lg font-light text-white">{t('detailFlush')}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                {t('detailFlushDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* F. CONTATTO & CONSULENZA ARCHITETTONICA                      */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <div className="w-24 mx-auto mb-8 opacity-80 dark:invert">
            <Image
              src="/images/vela/vela-logo-dark.svg"
              alt="VELA"
              width={160}
              height={60}
              className="w-full h-auto object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            {t('contactTitle')}
          </h2>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-10">
            {t('contactSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs sm:text-sm uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
            >
              {t('requestInfo')}
            </Link>
            <a
              href="mailto:info@genesimobili.it?subject=Richiesta%20Informazioni%20Linea%20VELA"
              className="px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-xs sm:text-sm uppercase tracking-widest font-medium hover:border-zinc-900 dark:hover:border-white transition-colors"
            >
              Contatta via Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
