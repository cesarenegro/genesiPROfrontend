import { getCategories, getProductsByCategory } from '@/lib/catalogue';
import { getLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Props {
  params: Promise<{ categorySlug: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const categories = await getCategories();
  const category = categories.find(c => c.slug === categorySlug);
  
  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(category.slug);
  const locale = await getLocale() as 'en' | 'it' | 'ru' | 'zh' | 'id' | 'fr' | 'de';
  const categoryTitle = category.title[locale] || category.title.en;
  
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="mb-12">
        <Link href="/catalogue" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">
          ← Back to Collections
        </Link>
        <h1 className="text-4xl md:text-5xl font-light mb-4">{categoryTitle}</h1>
        <p className="text-muted-foreground">{products.length} products available</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((prod) => {
          const prodTitle = prod.title[locale] || prod.title.en;
          const frontImg = prod.images.find(img => img.isPrimary) || prod.images[0];
          
          return (
            <Link 
              href={`/catalogue/${category.slug}/${prod.slug}`} 
              key={prod.id}
              className="group block bg-white dark:bg-zinc-900 border border-border hover:border-primary transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden bg-zinc-50 dark:bg-zinc-800 p-8 flex items-center justify-center">
                {frontImg ? (
                  <div className="relative w-full h-full">
                    <Image 
                      src={frontImg.url}
                      alt={prodTitle}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply dark:mix-blend-normal"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="text-muted-foreground/30 font-medium">NO IMAGE</div>
                )}
              </div>
              <div className="p-4 border-t border-border">
                <div className="text-xs text-muted-foreground mb-1">{prod.sku}</div>
                <h2 className="text-sm font-medium group-hover:text-primary transition-colors truncate">{prodTitle}</h2>
              </div>
            </Link>
          );
        })}
      </div>
      
      {products.length === 0 && (
        <div className="py-20 text-center text-muted-foreground border border-dashed rounded-lg">
          No products currently available in this collection.
        </div>
      )}
    </div>
  );
}
