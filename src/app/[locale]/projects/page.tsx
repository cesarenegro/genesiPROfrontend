import { Link } from '@/i18n/routing';

const PROJECTS = [
  { id: 1, title: "The Grand Milano Hotel", location: "Milan, Italy", slug: "grand-milano", year: "2025" },
  { id: 2, title: "Azure Residences", location: "Dubai, UAE", slug: "azure-residences", year: "2024" },
  { id: 3, title: "Alpine Retreat", location: "St. Moritz, Switzerland", slug: "alpine-retreat", year: "2025" },
  { id: 4, title: "Fifth Avenue Penthouse", location: "New York, USA", slug: "fifth-avenue", year: "2023" },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="py-32 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">Our Projects</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            A selection of our most prestigious contract and residential projects worldwide. 
            GENESI partners with renowned architects to deliver uncompromising quality in every space.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {PROJECTS.map((project, idx) => (
              <Link 
                href={`/projects/${project.slug}`} 
                key={project.id}
                className="group block"
              >
                <div className={`relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-border mb-6 ${idx % 2 !== 0 ? 'aspect-[4/5] md:mt-24' : 'aspect-[4/3]'}`}>
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-300 dark:text-zinc-800 font-light text-2xl uppercase tracking-widest group-hover:scale-105 transition-transform duration-1000 ease-out">
                    View Project
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <h2 className="text-2xl font-light group-hover:text-primary transition-colors">{project.title}</h2>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
