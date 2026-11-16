import { Cover, Panel, Stack } from '@/components/opt2/Stack';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function StudioPage() {
  const t = await getTranslations('Studio');
  const n = await getTranslations('Navigation');
  const o = await getTranslations('Opt2');

  return (
    <Stack count={2}>
      <Panel
        i={0}
        hero
        image="/images/projects/tables/genesi-tables-03.jpg"
        alt="Genesi Studio"
        eyebrow={n('studio')}
        title={t('heroTitle')}
        text={t('heroSubtitle')}
        scrollLabel={o('scroll')}
      />

      <Cover i={1}>

      {/* Main Intro */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Image block */}
            <div className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-900 border border-border flex items-center justify-center relative overflow-hidden">
               <Image
                 src="/images/projects/hotel-rooms/genesi-hotel-rooms-02.jpg"
                 alt="Genesi Studio — camera su misura"
                 fill
                 className="object-cover"
               />
            </div>

            {/* Content block */}
            <div className="space-y-8">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground">{t('hubTag')}</h2>
              <h3 className="text-3xl md:text-4xl font-light leading-tight">
                {t('hubTitle')}
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                {t('hubP1')}
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                {t('hubP2')}
              </p>
              
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-border mt-12">
                <div>
                  <div className="text-4xl font-light mb-2">15+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">{t('statDesigners')}</div>
                </div>
                <div>
                  <div className="text-4xl font-light mb-2">3D</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">{t('statRendering')}</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900 border-y border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
            &quot;{t('quote')}&quot;
          </h2>
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
            {t('quoteAuthor')}
          </p>
        </div>
      </section>
      </Cover>
    </Stack>
  );
}
