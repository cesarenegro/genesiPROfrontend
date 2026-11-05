import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';

const PROJECT_DETAILS: Record<
  string,
  {
    title: string;
    location: string;
    year: string;
    scope: string;
    heroImage: string;
    gallery: string[];
    description: string;
  }
> = {
  'grand-milano': {
    title: 'The Grand Milano Hotel',
    location: 'Milan, Italy',
    year: '2025',
    scope: 'Turnkey Hospitality FF&E · 120 Suites & Public Areas',
    heroImage: '/images/services/ffe.png',
    gallery: ['/images/categories/beds.png', '/images/categories/desk-minibar.png', '/images/categories/armchairs.png'],
    description:
      'Complete custom manufacturing and turnkey installation for a five-star luxury property in the heart of Milan, featuring Navona travertine reception sculptural volumes, brushed dark bronze architectural metalwork, and bespoke guestroom furniture.',
  },
  'azure-residences': {
    title: 'Azure Residences',
    location: 'Dubai, UAE',
    year: '2024',
    scope: 'Branded Residences · Custom Millwork & Loose Furniture',
    heroImage: '/images/home-turnkey.png',
    gallery: ['/images/categories/sofas.png', '/images/categories/dining-tables.png', '/images/categories/sideboards.png'],
    description:
      'Double-height lobby lounges and 64 waterfront branded residences crafted with solid kiln-dried teak, fluted marble monoliths, and custom upholstered seating systems.',
  },
  'alpine-retreat': {
    title: 'Alpine Retreat',
    location: 'St. Moritz, Switzerland',
    year: '2025',
    scope: 'Private Sanctuary & Wellness Suites · Bespoke Interiors',
    heroImage: '/images/categories/sofas.png',
    gallery: ['/images/hero.png', '/images/categories/beds.png', '/images/categories/nightstands.png'],
    description:
      'Warm minimalist alpine architecture combining smoked oak wall panelling, tactile bouclé upholstery, and organic carved travertine tables.',
  },
  'fifth-avenue': {
    title: 'Fifth Avenue Penthouse',
    location: 'New York, USA',
    year: '2023',
    scope: 'Private Penthouse · Architectural Millwork & FF&E',
    heroImage: '/images/services/turnkey.png',
    gallery: ['/images/categories/media-walls.png', '/images/categories/dining-chairs.png', '/images/categories/wardrobes.png'],
    description:
      'Full-floor Manhattan residence featuring floor-to-ceiling walnut architectural boiserie, Nero Marquina marble tables, and bespoke walk-in wardrobe systems.',
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  const project = PROJECT_DETAILS[projectSlug];

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <Link
            href="/projects"
            className="inline-block text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground mb-8"
          >
            ← Back to Projects
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#5B9C94] block mb-2">
                {project.scope}
              </span>
              <h1 className="text-3xl md:text-5xl font-light tracking-tight">{project.title}</h1>
            </div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground">
              {project.location} · {project.year}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-4 py-12">
        <div className="relative aspect-[16/9] w-full overflow-hidden border border-border bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Description & Gallery */}
      <section className="container mx-auto px-4 py-12 space-y-16">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.gallery.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden border border-border bg-zinc-100 dark:bg-zinc-900"
            >
              <Image
                src={img}
                alt={`${project.title} gallery ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

