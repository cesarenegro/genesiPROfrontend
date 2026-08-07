import { getProducts } from '@/lib/catalogue';
import { getLocale } from 'next-intl/server';
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

  const locale = await getLocale() as 'en' | 'it' | 'ru' | 'zh' | 'id' | 'fr' | 'de';
  const title = product.title[locale] || product.title.en;
  const description = product.description?.[locale] || product.description?.en || '';
  const specifications = product.specifications?.[locale] || product.specifications?.en || '';
  const materials = product.materials?.[locale] || product.materials?.en || '';

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="mb-8">
        <Link href={`/catalogue/${categorySlug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block uppercase tracking-wider">
          ← Back to {categorySlug}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-y border-border py-8">
            {materials && (
              <div>
                <h3 className="text-sm uppercase tracking-widest mb-2 font-semibold">Materials & Finishes</h3>
                <p className="text-sm text-muted-foreground">{materials}</p>
              </div>
            )}
            {specifications && (
              <div>
                <h3 className="text-sm uppercase tracking-widest mb-2 font-semibold">Specifications</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{specifications}</p>
              </div>
            )}
          </div>

          <div className="mt-auto space-y-4">
            <button className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-semibold hover:bg-foreground/90 transition-colors">
              Request a Quote
            </button>
            <button className="w-full border border-border py-4 uppercase tracking-widest text-sm font-semibold hover:border-foreground transition-colors flex justify-center items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download Tear-sheet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
