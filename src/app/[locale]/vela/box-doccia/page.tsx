import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { getVelaShowerEnclosures, Locale } from '@/lib/vela';
import VelaCategoryNav from '@/components/vela/VelaCategoryNav';
import VelaShowerSection from '@/components/vela/VelaShowerSection';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Vela' });
  return {
    title: t('showerMetaTitle'),
    description: t('showerMetaDesc'),
  };
}

export default async function BoxDocciaPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const showerEnclosures = await getVelaShowerEnclosures();
  const t = await getTranslations('Vela');

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#FDFDFD] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <VelaCategoryNav activeCategory="box-doccia" />

      {/* Hero Category Banner */}
      <section className="relative h-[65vh] min-h-[480px] max-h-[640px] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <Image
          src="/images/vela/box-doccia/01_P+G4.webp"
          alt={t('showerHeroTitle')}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60 z-10" />

        <div className="relative z-20 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-amber-400 mb-3 block font-mono font-medium">
            VELA • {t('showerHeroTag')}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-white mb-4 leading-tight">
            {t('showerHeroTitle')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            {t('showerHeroDesc')}
          </p>
        </div>
      </section>

      {/* Main Interactive Showcase (23 Series with Filters & Modal) */}
      <div className="container mx-auto px-6 lg:px-12">
        <VelaShowerSection items={showerEnclosures} locale={locale} />
      </div>

      {/* Photographic Detail Split */}
      <section className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 block font-mono font-semibold">
                {t('showerSplitTag')}
              </span>
              <h2 className="text-3xl font-serif text-zinc-900 dark:text-zinc-100 leading-tight">
                {t('showerSplitTitle')}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                {t('showerSplitDesc')}
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <span>{t('showerConfigureCta')}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900">
                <Image
                  src="/images/vela/box-doccia/13_P+L3_DETT_CERNIERA_INFERIORE.webp"
                  alt={t('showerPivotFloorLabel')}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-black/80 text-[10px] text-zinc-200 font-mono px-2 py-0.5 border border-white/10">
                  {t('showerPivotFloorLabel')}
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900">
                <Image
                  src="/images/vela/box-doccia/08_STA1_DETT_TERMINALE.webp"
                  alt={t('showerWallProfileLabel')}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-black/80 text-[10px] text-zinc-200 font-mono px-2 py-0.5 border border-white/10">
                  {t('showerWallProfileLabel')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
