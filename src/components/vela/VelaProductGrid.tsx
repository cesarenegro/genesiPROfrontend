'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { VelaProduct, Locale } from '@/lib/vela';
import { useTranslations } from 'next-intl';

interface Props {
  products: VelaProduct[];
  locale: Locale;
}

export default function VelaProductGrid({ products, locale }: Props) {
  const t = useTranslations('Vela');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'pivot' | 'sliding' | 'swing'>('all');

  const filteredProducts = useMemo(() => {
    if (selectedFilter === 'all') return products;
    return products.filter((p) => p.openingType === selectedFilter);
  }, [products, selectedFilter]);

  return (
    <section id="collezioni" className="scroll-mt-24">
      {/* Filtering Toolbar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800 mb-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-2">
            {t('allProducts')}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light max-w-xl">
            {t('allProductsDesc')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`text-xs uppercase tracking-widest px-4 py-2.5 transition-all ${
              selectedFilter === 'all'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium'
                : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800'
            }`}
          >
            {t('filterAll')}
          </button>
          <button
            onClick={() => setSelectedFilter('pivot')}
            className={`text-xs uppercase tracking-widest px-4 py-2.5 transition-all ${
              selectedFilter === 'pivot'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium'
                : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800'
            }`}
          >
            {t('filterPivot')}
          </button>
          <button
            onClick={() => setSelectedFilter('sliding')}
            className={`text-xs uppercase tracking-widest px-4 py-2.5 transition-all ${
              selectedFilter === 'sliding'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium'
                : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800'
            }`}
          >
            {t('filterSliding')}
          </button>
          <button
            onClick={() => setSelectedFilter('swing')}
            className={`text-xs uppercase tracking-widest px-4 py-2.5 transition-all ${
              selectedFilter === 'swing'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium'
                : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800'
            }`}
          >
            {t('filterSwing')}
          </button>
        </div>
      </div>

      {/* Counter bar */}
      <div className="flex justify-between items-center text-xs text-zinc-400 uppercase tracking-widest mb-8">
        <span>{t('filterCount', { count: filteredProducts.length })}</span>
        {selectedFilter !== 'all' && (
          <button
            onClick={() => setSelectedFilter('all')}
            className="text-zinc-900 dark:text-zinc-100 hover:underline cursor-pointer"
          >
            {t('resetFilters')}
          </button>
        )}
      </div>

      {/* Product Grid: 2 columns on desktop, 1 on mobile */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {filteredProducts.map((product) => {
            const productName = product.name[locale] || product.name.en;
            const productSummary = product.summary[locale] || product.summary.en;

            return (
              <Link
                key={product.id}
                href={`/vela/${product.slug}`}
                className="group block"
              >
                {/* Large Photo Canvas */}
                <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden mb-6">
                  <Image
                    src={product.mainImage}
                    alt={productName}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle technical pill */}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 text-[11px] uppercase tracking-widest text-zinc-700 dark:text-zinc-300 font-medium">
                    {product.code}
                  </div>
                </div>

                {/* Editorial Info */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl md:text-2xl font-light text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                      {productName}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-zinc-400">
                      {product.openingType === 'pivot' && t('filterPivot')}
                      {product.openingType === 'sliding' && t('filterSliding')}
                      {product.openingType === 'swing' && t('filterSwing')}
                      {product.openingType === 'double' && 'Doppia Anta'}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed line-clamp-2">
                    {productSummary}
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-zinc-900 dark:text-zinc-100 font-medium group-hover:gap-2.5 transition-all">
                      <span>{t('viewFamily')}</span>
                      <span>→</span>
                    </span>
                    {product.nominalDimensions && (
                      <span className="text-[11px] text-zinc-400 font-mono">
                        Quote: {product.nominalDimensions.widthMm} × {product.nominalDimensions.heightMm} mm
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="py-24 text-center border border-dashed border-zinc-200 dark:border-zinc-800">
          <p className="text-zinc-500 text-sm mb-4">{t('noProductsFound')}</p>
          <button
            onClick={() => setSelectedFilter('all')}
            className="text-xs uppercase tracking-widest px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90"
          >
            {t('resetFilters')}
          </button>
        </div>
      )}
    </section>
  );
}
