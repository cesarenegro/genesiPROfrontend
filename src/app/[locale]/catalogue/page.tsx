import { getCategories } from '@/lib/catalogue';
import { getLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default async function CatalogueIndexPage() {
  const categories = await getCategories();
  const locale = await getLocale() as 'en' | 'it' | 'ru' | 'zh' | 'id' | 'fr' | 'de';
  
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-light mb-4">Our Collections</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mb-16">
        Explore our curated selection of premium furniture across all categories.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => {
          const title = cat.title[locale] || cat.title.en;
          
          return (
            <Link 
              href={`/catalogue/${cat.slug}`} 
              key={cat.id}
              className="group block overflow-hidden bg-white dark:bg-zinc-900 border border-border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image 
                  src={`/images/categories/${cat.slug}.png`}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-medium mb-1 group-hover:text-primary transition-colors">{title}</h2>
                <p className="text-sm text-muted-foreground uppercase tracking-wider text-xs">View Collection</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
