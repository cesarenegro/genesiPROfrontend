import { Cover, Panel, Stack } from '@/components/opt2/Stack';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('About');
  const n = await getTranslations('Navigation');
  const o = await getTranslations('Opt2');

  return (
    <Stack count={2}>
      <Panel
        i={0}
        hero
        image="/images/projects/backgrounds/genesi-backgrounds-01.jpg"
        alt="Genesi — arredi su misura"
        eyebrow={n('about')}
        title={t('heroTitle')}
        text={t('heroSubtitle')}
        scrollLabel={o('scroll')}
      />

      <Cover i={1}>

      {/* Story Split Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                {t('storyTitle')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                {t('storyP1')}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                {t('storyP2')}
              </p>
            </div>
            
            {/* Visual Block */}
            <div className="order-1 lg:order-2 aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 border border-border flex items-center justify-center relative overflow-hidden">
               <Image
                 src="/images/projects/complements/genesi-complements-05.jpg"
                 alt="Genesi — produzione su misura in laboratorio"
                 fill
                 className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Pillars */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-light mb-4">100%</div>
              <h3 className="text-sm uppercase tracking-widest font-semibold mb-2">{t('statMadeInItaly')}</h3>
              <p className="text-muted-foreground font-light">{t('statMadeInItalyDesc')}</p>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">50+</div>
              <h3 className="text-sm uppercase tracking-widest font-semibold mb-2">{t('statGlobalProjects')}</h3>
              <p className="text-muted-foreground font-light">{t('statGlobalProjectsDesc')}</p>
            </div>
            <div>
              <div className="text-5xl font-light mb-4">∞</div>
              <h3 className="text-sm uppercase tracking-widest font-semibold mb-2">{t('statBespokeOptions')}</h3>
              <p className="text-muted-foreground font-light">{t('statBespokeOptionsDesc')}</p>
            </div>
          </div>
        </div>
      </section>
      </Cover>
    </Stack>
  );
}
