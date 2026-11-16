import { Cover, Panel, Stack } from '@/components/opt2/Stack';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getLocale, getTranslations } from 'next-intl/server';
import ProjectsGallery from '@/components/projects/ProjectsGallery';
import { GALLERY, GALLERY_CATEGORIES, PROJECTS, pick, type GalleryCategory } from '@/lib/projects';

export default async function ProjectsPage() {
  const t = await getTranslations('Projects');
  const n = await getTranslations('Navigation');
  const o = await getTranslations('Opt2');
  const locale = await getLocale();

  const labels = Object.fromEntries(
    GALLERY_CATEGORIES.map((c) => [c, t(`cat.${c}`)])
  ) as Record<GalleryCategory, string>;

  return (
    <Stack count={2}>
      <Panel
        i={0}
        hero
        image="/images/projects/restaurants/genesi-restaurants-05.jpg"
        alt="Genesi — progetti"
        eyebrow={n('projects')}
        title={t('headerTitle')}
        text={t('headerSubtitle')}
        scrollLabel={o('scroll')}
      />

      <Cover i={1}>

      {/* Case studies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{t('caseStudiesTag')}</h2>
            <h3 className="text-3xl md:text-4xl font-light">{t('caseStudiesTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {PROJECTS.map((project) => {
              const title = pick(project.title, locale);
              return (
                <Link href={`/projects/${project.slug}`} key={project.slug} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-border mb-5">
                    <Image
                      src={project.cover.src}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="px-6 py-3 bg-white/95 text-black text-xs uppercase tracking-widest font-medium">
                        {t('viewProject')}
                      </span>
                    </div>
                    {project.gallery.length > 1 && (
                      <span className="absolute top-3 right-3 bg-black/70 text-white text-[10px] uppercase tracking-widest px-2.5 py-1">
                        {t('photos', { count: project.gallery.length })}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-end gap-4 mb-2">
                    <h4 className="text-xl font-light group-hover:text-primary transition-colors">{title}</h4>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest shrink-0">{project.year}</span>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    {project.location ? `${pick(project.location, locale)} · ` : ''}
                    {pick(project.scope, locale)}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio by category */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{t('portfolioTag')}</h2>
            <h3 className="text-3xl md:text-4xl font-light mb-4">{t('portfolioTitle')}</h3>
            <p className="text-muted-foreground font-light">{t('portfolioSubtitle')}</p>
          </div>
          <ProjectsGallery
            items={GALLERY}
            categories={GALLERY_CATEGORIES}
            labels={labels}
            allLabel={t('filterAll')}
            closeLabel={t('close')}
          />
        </div>
      </section>

      {/* Links to archive & social */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl space-y-6">
          <p className="text-muted-foreground font-light">{t('moreText')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/genesi_pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-foreground text-background text-xs font-medium uppercase tracking-widest hover:bg-foreground/90 transition-colors"
            >
              Instagram @genesi_pro
            </a>
            <a
              href="https://www.genesi-pro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-foreground text-xs font-medium uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
            >
              genesi-pro.com ↗
            </a>
          </div>
        </div>
      </section>
      </Cover>
    </Stack>
  );
}
