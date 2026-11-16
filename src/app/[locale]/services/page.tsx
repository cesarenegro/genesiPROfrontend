import { Cover, Panel, Stack } from '@/components/opt2/Stack';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function ServicesPage() {
  const t = await getTranslations('Services');
  const n = await getTranslations('Navigation');
  const o = await getTranslations('Opt2');

  const services = [
    {
      id: '01',
      image: '/images/projects/complements/genesi-complements-03.jpg',
      title: t('s01Title'),
      description: t('s01Desc'),
      features: [t('s01F1'), t('s01F2'), t('s01F3'), t('s01F4')]
    },
    {
      id: '02',
      image: '/images/projects/restaurants/genesi-restaurants-02.jpg',
      title: t('s02Title'),
      description: t('s02Desc'),
      features: [t('s02F1'), t('s02F2'), t('s02F3'), t('s02F4')]
    },
    {
      id: '03',
      image: '/images/projects/restaurants/genesi-restaurants-05.jpg',
      title: t('s03Title'),
      description: t('s03Desc'),
      features: [t('s03F1'), t('s03F2'), t('s03F3'), t('s03F4')]
    },
    {
      id: '04',
      image: '/images/projects/wardrobes/genesi-wardrobes-01.jpg',
      title: t('s04Title'),
      description: t('s04Desc'),
      features: [t('s04F1'), t('s04F2'), t('s04F3'), t('s04F4')]
    }
  ];

  return (
    <Stack count={2}>
      <Panel
        i={0}
        hero
        image="/images/projects/complements/genesi-complements-02.jpg"
        alt="Genesi — servizi"
        eyebrow={n('services')}
        title={t('headerTitle')}
        text={t('headerSubtitle')}
        scrollLabel={o('scroll')}
      />

      <Cover i={1}>

      {/* Services List (Zig-Zag Layout) */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-24 lg:gap-32">
            {services.map((service, idx) => (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Visual Image */}
                <div className={`aspect-square bg-zinc-50 dark:bg-zinc-900 border border-border flex items-center justify-center relative overflow-hidden ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover" 
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="mb-4 text-sm font-medium text-primary">{service.id} —</div>
                  <h2 className="text-3xl md:text-4xl font-light mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 border-l border-primary/20 pl-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm uppercase tracking-widest text-foreground font-medium">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 text-white py-32 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-light mb-6">{t('readyTitle')}</h2>
          <p className="text-zinc-400 text-lg font-light mb-10">
            {t('readySubtitle')}
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-10 py-5 bg-white text-black text-sm uppercase tracking-widest font-semibold hover:bg-zinc-200 transition-colors"
          >
            {t('contactTeam')}
          </Link>
        </div>
      </section>
      </Cover>
    </Stack>
  );
}
