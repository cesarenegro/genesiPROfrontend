import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { PROJECTS, getProject, pick } from '@/lib/projects';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; projectSlug: string }>;
}) {
  const { locale, projectSlug } = await params;
  const project = getProject(projectSlug);

  if (!project) {
    notFound();
  }

  const t = await getTranslations('Projects');
  const title = pick(project.title, locale);
  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);
  const [hero, ...rest] = project.gallery;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <Link
            href="/projects"
            className="inline-block text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground mb-8"
          >
            ← {t('backToProjects')}
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#5B9C94] block mb-2">
                {pick(project.scope, locale)}
              </span>
              <h1 className="text-3xl md:text-5xl font-light tracking-tight">{title}</h1>
            </div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground">
              {project.location ? `${pick(project.location, locale)} · ` : ''}
              {project.year}
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12">
        <div className="relative w-full overflow-hidden border border-border bg-zinc-100 dark:bg-zinc-900 flex justify-center">
          <Image
            src={hero.src}
            alt={title}
            width={hero.w}
            height={hero.h}
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="w-auto h-auto max-h-[80vh] object-contain"
          />
        </div>
      </section>

      {/* Description & gallery */}
      <section className="container mx-auto px-4 pb-16 space-y-16">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
            {pick(project.description, locale)}
          </p>
          {project.instagram && (
            <a
              href={project.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
            >
              {t('seeOnInstagram')} ↗
            </a>
          )}
        </div>

        {rest.length > 0 && (
          <div className="columns-1 md:columns-2 gap-6 [&>*]:mb-6">
            {rest.map((img, i) => (
              <div key={img.src} className="overflow-hidden border border-border bg-zinc-100 dark:bg-zinc-900 break-inside-avoid">
                <Image
                  src={img.src}
                  alt={`${title} — ${i + 2}`}
                  width={img.w}
                  height={img.h}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Other projects */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">{t('otherProjects')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {others.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden border border-border mb-4">
                  <Image
                    src={p.cover.src}
                    alt={pick(p.title, locale)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-light text-lg group-hover:text-primary transition-colors">{pick(p.title, locale)}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
