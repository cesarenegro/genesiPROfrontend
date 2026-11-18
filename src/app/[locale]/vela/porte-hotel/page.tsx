import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { getVelaHotelDoors, getVelaHotelDetails, Locale } from '@/lib/vela';
import VelaCategoryNav from '@/components/vela/VelaCategoryNav';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Vela' });
  return {
    title: t('hotelMetaTitle'),
    description: t('hotelMetaDesc'),
  };
}

export default async function PorteHotelPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const hotelDoors = await getVelaHotelDoors();
  const hotelDetails = await getVelaHotelDetails();
  const t = await getTranslations('Vela');

  const pillars = [
    {
      title: t('hotelPillar1Title'),
      desc: t('hotelPillar1Desc'),
      icon: '01',
    },
    {
      title: t('hotelPillar2Title'),
      desc: t('hotelPillar2Desc'),
      icon: '02',
    },
    {
      title: t('hotelPillar3Title'),
      desc: t('hotelPillar3Desc'),
      icon: '03',
    },
    {
      title: t('hotelPillar4Title'),
      desc: t('hotelPillar4Desc'),
      icon: '04',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <VelaCategoryNav activeCategory="porte-hotel" />

      {/* Hero Category Banner */}
      <section className="relative h-[65vh] min-h-[480px] max-h-[640px] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <Image
          src="/images/vela/hotel/arenaria-oak-hotel-door-diptych.webp"
          alt={t('hotelHeroTitle')}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60 z-10" />

        <div className="relative z-20 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-zinc-300 mb-3 block font-medium">
            {t('hotelHeroTag')}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4 leading-tight">
            {t('hotelHeroTitle')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            {t('hotelHeroSubtitle')}
          </p>
        </div>
      </section>

      {/* Editorial Overview Section */}
      <section className="py-20 md:py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <span className="text-xs uppercase tracking-widest text-zinc-400 mb-4 block font-medium">
            {t('hotelEditorialTag')}
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 leading-tight">
            {t('hotelEditorialTitle')}
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-10">
            {t('hotelEditorialDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?inquiry=contract&category=porte-hotel"
              className="px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
            >
              {t('hotelConsultCta')}
            </Link>
            <Link
              href="/vela/maniglie"
              className="px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-xs uppercase tracking-widest font-medium hover:border-zinc-900 dark:hover:border-zinc-100 transition-colors"
            >
              {t('hotelHardwareCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Hotel Doors Catalog Grid: 2 columns on desktop, photographic focus */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-zinc-400 mb-2 block font-medium">
                {t('hotelCatalogTag')}
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                {t('hotelCatalogTitle')}
              </h2>
            </div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mt-4 md:mt-0 font-medium">
              {t('hotelSolutionsCount', { count: hotelDoors.length })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {hotelDoors.map((door) => {
              const name = door.name[locale] || door.name.en;
              const material = door.material[locale] || door.material.en;
              const description = door.description[locale] || door.description.en;

              return (
                <div
                  key={door.id}
                  className="group flex flex-col bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600"
                >
                  {/* Photo canvas */}
                  <div className="relative aspect-[4/5] w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                    <Image
                      src={door.image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {door.tag && (
                      <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/90 backdrop-blur-xs px-3 py-1.5 text-[10px] uppercase tracking-widest text-zinc-800 dark:text-zinc-200 font-semibold border border-zinc-200/60 dark:border-zinc-800/60">
                        {door.tag}
                      </div>
                    )}
                  </div>

                  {/* Card Editorial Content */}
                  <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <span className="text-[11px] uppercase tracking-widest text-zinc-400 block font-medium">
                        {material}
                      </span>
                      <h3 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100">
                        {name}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        {description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                      <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">
                        {t('hotelSpecsTitle')}
                      </span>
                      <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                        {door.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-zinc-400 select-none">―</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-zinc-100 dark:border-zinc-800/80">
                      <Link
                        href={`/vela/${door.slug}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 hover:opacity-70 transition-opacity"
                      >
                        <span>{t('hotelSheetDimensions')}</span>
                        <span>→</span>
                      </Link>
                      <span className="text-[11px] text-zinc-400 font-mono">
                        {t('hotelDimensionsLabel')}
                      </span>
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
              {t('hotelPillarsTag')}
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">
              {t('hotelPillarsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item, i) => (
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

      {/* Macro Details & Hospitality Hardware Gallery */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-2 block font-medium">
              {t('hotelDetailsTag')}
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              {t('hotelDetailsTitle')}
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              {t('hotelDetailsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelDetails.map((detail) => {
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      {/* Cross-Link to Handles */}
      <section className="py-20 bg-zinc-950 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                {t('hotelHardwareBannerTag')}
              </span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">
                {t('hotelHardwareBannerTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                {t('hotelHardwareBannerDesc')}
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/vela/maniglie"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 text-xs uppercase tracking-widest font-semibold hover:bg-zinc-200 transition-colors"
              >
                <span>{t('hotelExploreHardwareCta')}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
