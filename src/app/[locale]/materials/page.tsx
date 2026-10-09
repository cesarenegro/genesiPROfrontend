import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function MaterialsPage() {
  const t = await getTranslations('Materials');

  const materialCategories = [
    {
      id: "marbles",
      image: "/images/materials/marbles.png",
      title: t('marblesTitle'),
      description: t('marblesDesc'),
      items: ["Calacatta Gold", "Nero Marquina", "Emperador Dark", "Travertino Romano"]
    },
    {
      id: "woods",
      image: "/images/materials/woods.png",
      title: t('woodsTitle'),
      description: t('woodsDesc'),
      items: ["Canaletto Walnut", "Smoked Oak", "Ebony Macassar", "Eucalyptus"]
    },
    {
      id: "metals",
      image: "/images/materials/metals.png",
      title: t('metalsTitle'),
      description: t('metalsDesc'),
      items: ["Brushed Brass", "Polished Chrome", "Burnished Bronze", "Titanium"]
    },
    {
      id: "leathers",
      image: "/images/materials/leathers.png",
      title: t('leathersTitle'),
      description: t('leathersDesc'),
      items: ["Full-Grain Aniline", "Nabuk", "Suede", "Printed Leather"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-32 border-b border-border text-center px-4">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">{t('headerTitle')}</h1>
        <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
          {t('headerSubtitle')}
        </p>
      </section>

      {/* Materials Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {materialCategories.map((category, idx) => (
              <div key={category.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Image */}
                <div className={`aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 border border-border flex items-center justify-center relative overflow-hidden ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Image 
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />
                </div>

                {/* Text Content */}
                <div className={`flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h2 className="text-3xl md:text-4xl font-light mb-6">{category.title}</h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
                    {category.description}
                  </p>
                  
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-foreground font-semibold border-b border-border pb-2 mb-4">
                      {t('signatureFinishes')}
                    </h3>
                    <ul className="grid grid-cols-2 gap-y-4">
                      {category.items.map((item, iIdx) => (
                        <li key={iIdx} className="text-muted-foreground font-light flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 block"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Samples CTA */}
      <section className="bg-foreground text-background py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-6">{t('sampleTitle')}</h2>
          <p className="text-background/70 mb-10 max-w-xl mx-auto font-light">
            {t('sampleSubtitle')}
          </p>
          <Link href="/contact" className="inline-block border border-background px-8 py-4 text-sm uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors">
            {t('requestSample')}
          </Link>
        </div>
      </section>
    </div>
  );
}
