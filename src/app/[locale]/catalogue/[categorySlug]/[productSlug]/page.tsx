import { getProducts, getCategories } from '@/lib/catalogue';
import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/catalogue/ProductGallery';

interface Props {
  params: Promise<{ categorySlug: string; productSlug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { categorySlug, productSlug } = await params;
  
  const allProducts = await getProducts();
  const product = allProducts.find(p => p.slug === productSlug && p.categoryId === categorySlug);
  
  if (!product) {
    notFound();
  }

  const allCategories = await getCategories();
  const category = allCategories.find(c => c.slug === categorySlug);

  const locale = await getLocale() as 'en' | 'it' | 'ru' | 'zh' | 'id' | 'fr' | 'de';
  const t = await getTranslations('Catalogue');
  
  const categoryTitle = category ? (category.title[locale] || category.title.en) : categorySlug;
  const title = product.title[locale] || product.title.en;
  const description = product.description?.[locale] || product.description?.en || '';
  const specifications = product.specifications?.[locale] || product.specifications?.en || '';
  const materials = product.materials?.[locale] || product.materials?.en || '';
  const dimensions = product.dimensions?.[locale] || product.dimensions?.en || '';

  return (
    <div className="container mx-auto px-4 py-16 min-h-[100dvh]">
      <div className="mb-8">
        <Link href={`/catalogue/${categorySlug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block uppercase tracking-wider">
          {t('backToCategory', { category: categoryTitle })}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Gallery */}
        <div>
          <ProductGallery images={product.images} />
        </div>
        
        {/* Details */}
        <div className="flex flex-col">
          <div className="mb-2 text-sm text-muted-foreground uppercase tracking-widest">{product.sku}</div>
          <h1 className="text-4xl md:text-5xl font-light mb-8">{title}</h1>
          
          {description && (
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {description}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 border-y border-border py-8">
            {materials && (
              <div>
                <h3 className="text-sm uppercase tracking-widest mb-2 font-semibold">{t('materialsFinishes')}</h3>
                <p className="text-sm text-muted-foreground">{materials}</p>
              </div>
            )}
            {dimensions && (
              <div>
                <h3 className="text-sm uppercase tracking-widest mb-2 font-semibold">{t('dimensions')}</h3>
                <p className="text-sm text-muted-foreground">{dimensions}</p>
              </div>
            )}
            {specifications && (
              <div>
                <h3 className="text-sm uppercase tracking-widest mb-2 font-semibold">{t('specifications')}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{specifications}</p>
              </div>
            )}
          </div>

          <div className="mt-auto space-y-4">
            <button className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-semibold hover:bg-foreground/90 transition-colors">
              {t('requestQuote')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
