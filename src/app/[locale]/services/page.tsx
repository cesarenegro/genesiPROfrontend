import { Link } from '@/i18n/routing';
import Image from 'next/image';

const SERVICES = [
  {
    id: '01',
    image: '/images/services/bespoke.png',
    title: 'Bespoke Furniture Design',
    description: 'Every space is unique, and so are its requirements. Our master artisans and in-house design team collaborate closely with architects to customize our collections or engineer completely bespoke pieces from scratch, ensuring perfect integration into your architectural vision.',
    features: ['Custom Dimensions & Finishes', 'Material Sourcing', 'Prototyping', 'Artisan Craftsmanship']
  },
  {
    id: '02',
    image: '/images/services/ffe.png',
    title: 'FF&E Procurement',
    description: 'We manage the complexities of global luxury procurement. From selecting the finest Furniture, Fixtures, and Equipment to managing vendor relations and quality control, GENESI acts as your single point of contact for outfitting world-class hospitality and residential projects.',
    features: ['Vendor Management', 'Quality Assurance', 'Budget Optimization', 'Global Sourcing']
  },
  {
    id: '03',
    image: '/images/services/turnkey.png',
    title: 'Turnkey Contract Solutions',
    description: 'Our turnkey service provides peace of mind for large-scale developments. We oversee the entire lifecycle of the interior outfitting process, transforming bare architectural shells into fully operational, breathtaking environments, delivered on time and flawlessly executed.',
    features: ['Project Management', 'Space Planning', 'Milestone Tracking', 'Site Supervision']
  },
  {
    id: '04',
    image: '/images/services/white-glove.png',
    title: 'White-Glove Installation',
    description: 'The final touch of luxury. Our dedicated logistics team ensures that every piece of furniture is transported under the strictest safety conditions and installed on-site by our specialized technicians with meticulous care and precision.',
    features: ['Global Logistics', 'White-Glove Delivery', 'On-site Assembly', 'Final Styling']
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-background py-32 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            From concept engineering to flawless execution, GENESI offers a comprehensive suite of services tailored for the most demanding luxury projects worldwide.
          </p>
        </div>
      </section>

      {/* Services List (Zig-Zag Layout) */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-24 lg:gap-32">
            {SERVICES.map((service, idx) => (
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
          <h2 className="text-3xl md:text-5xl font-light mb-6">Ready to start your project?</h2>
          <p className="text-zinc-400 text-lg font-light mb-10">
            Our team of contract specialists is ready to review your architectural plans and provide a comprehensive quotation.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-10 py-5 bg-white text-black text-sm uppercase tracking-widest font-semibold hover:bg-zinc-200 transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
