import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import {
  getVelaProductBySlug,
  getVelaProducts,
  getCompatibleHandlesForProduct,
  getVelaConceptHandles,
  Locale,
} from '@/lib/vela';
import VelaGallery from '@/components/vela/VelaGallery';
import VelaHandlesSection from '@/components/vela/VelaHandlesSection';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string; productSlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, productSlug } = await params;
  const locale = rawLocale as Locale;
  const product = await getVelaProductBySlug(productSlug);

  if (!product) {
    return {
      title: 'Modello non trovato — VELA by Genesi',
    };
  }

  const name = product.name[locale] || product.name.en;
  const summary = product.summary[locale] || product.summary.en;

  return {
    title: `${name} — VELA by Genesi`,
    description: summary,
  };
}

export default async function VelaProductDetailPage({ params }: Props) {
  const { locale: rawLocale, productSlug } = await params;
  const locale = rawLocale as Locale;

  const product = await getVelaProductBySlug(productSlug);
  if (!product) {
    notFound();
  }

  const allProducts = await getVelaProducts();
  const relatedProducts = allProducts.filter((p) => p.slug !== productSlug).slice(0, 3);
  const compatibleHandles = await getCompatibleHandlesForProduct(product);
  const allConceptHandles = await getVelaConceptHandles();
  const t = await getTranslations('Vela');

  const productName = product.name[locale] || product.name.en;
  const productSummary = product.summary[locale] || product.summary.en;

  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/vela"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <span>{t('backToVela')}</span>
          </Link>
        </div>

        {/* 2-Column Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 border-b border-zinc-200 dark:border-zinc-800">
          {/* Left Column: Interactive Gallery (Col 7) */}
          <div className="lg:col-span-7">
            <VelaGallery
              images={product.images}
              locale={locale}
              productName={productName}
            />
          </div>

          {/* Right Column: Technical & Editorial Spec (Col 5) */}
          <div className="lg:col-span-5 flex flex-col space-y-8 lg:sticky lg:top-28">
            {/* Header Block */}
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-400 mb-3">
                <span>{t('brandTag')}</span>
                <span>•</span>
                <span className="font-mono text-zinc-700 dark:text-zinc-300 font-medium">
                  {product.code}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
                {productName}
              </h1>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                {productSummary}
              </p>
            </div>

            {/* Specifications Matrix */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  {t('openingMechanism')}
                </h2>
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
                  {product.openingType === 'pivot' && t('filterPivot')}
                  {product.openingType === 'sliding' && t('filterSliding')}
                  {product.openingType === 'swing' && t('filterSwing')}
                  {product.openingType === 'double' && 'A Doppia Anta Battente'}
                </div>
              </div>

              {/* Nominal Dimensions Quick Card */}
              {product.nominalDimensions && (
                <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100">
                      Dimensioni Nominali
                    </h2>
                    <div className="flex items-center gap-2.5">
                      {product.technicalDrawing && (
                        <a
                          href="#disegno-dimensionale"
                          className="text-[11px] uppercase tracking-widest text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center gap-1 font-medium"
                        >
                          <span>Quote</span>
                          <span>↓</span>
                        </a>
                      )}
                      {compatibleHandles.length > 0 && (
                        <a
                          href="#maniglie-disponibili"
                          className="text-[11px] uppercase tracking-widest text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center gap-1 font-medium"
                        >
                          <span>Maniglie</span>
                          <span>↓</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                    <div className="p-2 bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/60">
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-sans mb-0.5">Larghezza</span>
                      <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                        {product.nominalDimensions.widthMm} <span className="text-[10px] font-normal text-zinc-500">mm</span>
                      </span>
                    </div>
                    <div className="p-2 bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/60">
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-sans mb-0.5">Altezza</span>
                      <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                        {product.nominalDimensions.heightMm} <span className="text-[10px] font-normal text-zinc-500">mm</span>
                      </span>
                    </div>
                    <div className="p-2 bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/60">
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-sans mb-0.5">Spessore</span>
                      <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                        {product.nominalDimensions.thicknessMm} <span className="text-[10px] font-normal text-zinc-500">mm</span>
                      </span>
                    </div>
                  </div>
                  {product.nominalDimensions.note && (
                    <p className="mt-2 text-[11px] text-zinc-500 font-light">
                      • {product.nominalDimensions.note}
                    </p>
                  )}
                </div>
              )}

              {/* Verified Features */}
              {product.verifiedFeatures.length > 0 && (
                <div>
                  <h2 className="text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                    {t('productDetails')}
                  </h2>
                  <ul className="space-y-2.5">
                    {product.verifiedFeatures.map((feat, i) => {
                      const featText = feat[locale] || feat.en;
                      return (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed"
                        >
                          <span className="text-zinc-400 mt-0.5">•</span>
                          <span>{featText}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Verified Manufacturing Notes */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-medium mb-1">
                  {t('verifiedNotesTitle')}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                  {t('verifiedNotesDesc')}
                </p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-6 space-y-3">
              <Link
                href={`/contact?inquiry=contract&model=${encodeURIComponent(product.code)}`}
                className="w-full inline-flex justify-center items-center py-4 px-6 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
              >
                {t('inquireProduct')}
              </Link>
              <a
                href={`mailto:info@genesimobili.it?subject=${encodeURIComponent(`Richiesta Preventivo VELA — ${product.code}`)}`}
                className="w-full inline-flex justify-center items-center py-3.5 px-6 border border-zinc-300 dark:border-zinc-700 text-xs uppercase tracking-widest font-medium hover:border-zinc-900 dark:hover:border-white transition-colors text-zinc-700 dark:text-zinc-300"
              >
                Invia Richiesta Email Rapida
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated Technical Dimensional Drawing Section */}
        {product.technicalDrawing && (
          <section
            id="disegno-dimensionale"
            className="scroll-mt-24 pt-20 pb-20 border-b border-zinc-200 dark:border-zinc-800"
          >
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium block mb-2">
                    Tavola Grafica Dimensionale • {product.code}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100">
                    Disegno Dimensionale & Quote Nominali
                  </h2>
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-500">
                  <span className="font-mono bg-zinc-100 dark:bg-zinc-900 px-3 py-1 border border-zinc-200 dark:border-zinc-800">
                    Proporzione 4:3
                  </span>
                  <span className="font-mono bg-zinc-100 dark:bg-zinc-900 px-3 py-1 border border-zinc-200 dark:border-zinc-800">
                    2400 × 1800 px
                  </span>
                </div>
              </div>

              {/* Main Technical Sheet Canvas (Pure 4:3 Black and White, clean frame, untouched) */}
              <div className="relative w-full aspect-[4/3] bg-white border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xs">
                <Image
                  src={product.technicalDrawing.image}
                  alt={`Tavola dimensionale ${product.code} ${product.technicalDrawing.modelName} — prospetto frontale e profilo laterale`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1152px"
                  className="object-contain"
                  priority={false}
                />
                <div className="absolute top-4 right-4 bg-white/95 text-zinc-900 font-mono text-[10px] uppercase tracking-wider px-3 py-1 border border-zinc-300 shadow-xs">
                  {product.technicalDrawing.filename}
                </div>
              </div>

              {/* Metadata & Regulatory Disclaimer Matrix */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Nominal Parameters Table (Col 7) */}
                <div className="lg:col-span-7 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100">
                      Riepilogo Parametri Nominali
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {product.code}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                    <div>
                      <span className="text-zinc-400 block mb-1 text-[11px] uppercase tracking-wider">Larghezza Nominale (L)</span>
                      <span className="font-mono text-base font-semibold text-zinc-900 dark:text-zinc-100">
                        {product.technicalDrawing.nominalDimensions?.widthMm || '800'} <span className="text-xs font-normal text-zinc-500">mm</span>
                      </span>
                      {product.code === 'IN-04' && (
                        <span className="text-[11px] text-zinc-500 block mt-1">
                          Configurazione doppia anta (2 × 800 mm)
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="text-zinc-400 block mb-1 text-[11px] uppercase tracking-wider">Altezza Nominale (H)</span>
                      <span className="font-mono text-base font-semibold text-zinc-900 dark:text-zinc-100">
                        {product.technicalDrawing.nominalDimensions?.heightMm || 2100} <span className="text-xs font-normal text-zinc-500">mm</span>
                      </span>
                      <span className="text-[11px] text-zinc-500 block mt-1">
                        Luce passaggio standard
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-400 block mb-1 text-[11px] uppercase tracking-wider">Spessore Anta (S)</span>
                      <span className="font-mono text-base font-semibold text-zinc-900 dark:text-zinc-100">
                        {product.technicalDrawing.nominalDimensions?.thicknessMm || (product.familyId === 'hotel' ? 60 : 41)} <span className="text-xs font-normal text-zinc-500">mm</span>
                      </span>
                      <span className="text-[11px] text-zinc-500 block mt-1">
                        Pannello tamburato ad alte prestazioni
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                    <div>
                      Vista prospettica: <span className="font-medium text-zinc-900 dark:text-zinc-100">Prospetto frontale e profilo laterale ingrandito</span>
                    </div>
                    <a
                      href={product.technicalDrawing.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100 font-semibold hover:underline cursor-pointer"
                    >
                      <span>Visualizza a piena risoluzione (2400 × 1800)</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>

                {/* Concept Disclaimer / Architectural Note (Col 5) */}
                <div className="lg:col-span-5 p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 space-y-4 bg-white dark:bg-zinc-950">
                  <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold uppercase tracking-wider text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100 inline-block" />
                    <span>Informativa sui Disegni di Concept</span>
                  </div>
                  <p className="leading-relaxed font-light text-zinc-600 dark:text-zinc-400">
                    {product.technicalDrawing.disclaimer[locale] || product.technicalDrawing.disclaimer.it}
                  </p>
                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-900">
                    <Link
                      href={`/contact?inquiry=technical&model=${encodeURIComponent(product.code)}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 hover:opacity-70 transition-opacity"
                    >
                      <span>Richiedi esecutivi DWG / BIM di cantiere</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Dedicated Available Handles Section (Lualdi-style clean presentation) */}
        <VelaHandlesSection
          handles={compatibleHandles}
          allHandles={allConceptHandles}
          locale={locale}
          productCode={product.code}
          productName={productName}
        />

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="pt-20">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-zinc-400 mb-1 block">
                  Collezione VELA
                </span>
                <h2 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100">
                  {t('relatedProducts')}
                </h2>
              </div>
              <Link
                href="/vela"
                className="text-xs uppercase tracking-widest text-zinc-900 dark:text-zinc-100 hover:opacity-70 transition-opacity"
              >
                {t('backToVela')}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => {
                const relName = rel.name[locale] || rel.name.en;
                return (
                  <Link
                    key={rel.id}
                    href={`/vela/${rel.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden mb-4">
                      <Image
                        src={rel.mainImage}
                        alt={relName}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="text-xs uppercase tracking-widest text-zinc-400 mb-1">
                      {rel.code}
                    </div>
                    <h3 className="text-base font-light text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                      {relName}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
