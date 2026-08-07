import { Link } from '@/i18n/routing';
import Image from 'next/image';

const MATERIAL_CATEGORIES = [
  {
    id: "marbles",
    image: "/images/materials/marbles.png",
    title: "Precious Marbles",
    description: "Sourced from the finest quarries in Carrara and around the world, our marbles offer unparalleled unique veining and timeless elegance. Each slab is hand-selected by our master artisans.",
    items: ["Calacatta Gold", "Nero Marquina", "Emperador Dark", "Travertino Romano"]
  },
  {
    id: "woods",
    image: "/images/materials/woods.png",
    title: "Solid Woods & Veneers",
    description: "We use only sustainably sourced, premium timber. Our veneers are carefully book-matched to create seamless, continuous grain patterns that celebrate the natural beauty of the wood.",
    items: ["Canaletto Walnut", "Smoked Oak", "Ebony Macassar", "Eucalyptus"]
  },
  {
    id: "metals",
    image: "/images/materials/metals.png",
    title: "Galvanic Metals",
    description: "Our metal components undergo rigorous galvanic treatments to achieve flawless, durable finishes that range from warm, brushed brass to sleek, polished chrome.",
    items: ["Brushed Brass", "Polished Chrome", "Burnished Bronze", "Titanium"]
  },
  {
    id: "leathers",
    image: "/images/materials/leathers.png",
    title: "Italian Leathers",
    description: "Working exclusively with top-tier Italian tanneries, we offer full-grain leathers and nabuk that age beautifully, providing unparalleled softness and durability.",
    items: ["Full-Grain Aniline", "Nabuk", "Suede", "Printed Leather"]
  }
];

export default function MaterialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-32 border-b border-border text-center px-4">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">Materials & Finishes</h1>
        <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
          The essence of true luxury lies in what you can feel. At GENESI, we obsess over every surface, sourcing only the most exquisite materials to craft masterpieces that stand the test of time.
        </p>
      </section>

      {/* Materials Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {MATERIAL_CATEGORIES.map((category, idx) => (
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
                      Signature Finishes
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
          <h2 className="text-3xl font-light mb-6">Need a physical sample?</h2>
          <p className="text-background/70 mb-10 max-w-xl mx-auto font-light">
            Architects and interior designers can request our exclusive Materials Box to experience the GENESI quality firsthand.
          </p>
          <Link href="/contact" className="inline-block border border-background px-8 py-4 text-sm uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors">
            Request Materials Box
          </Link>
        </div>
      </section>
    </div>
  );
}
