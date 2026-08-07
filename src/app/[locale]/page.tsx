import { getCategories } from '@/lib/catalogue';
import { getLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default async function Home() {
  const categories = await getCategories();
  const locale = await getLocale() as 'en' | 'it' | 'ru' | 'zh' | 'id' | 'fr' | 'de';
  
  // Prendi le prime 4 categorie come "Featured"
  const featuredCategories = categories.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-black text-white">
        <video
          src="/videos/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Overlay per leggibilità e fonditura verso il basso */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent z-10" />
        
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center">
          
          {/* Logo intro animato (50vw max) */}
          <div className="animate-intro-logo mb-12 flex justify-center">
            <Image 
              src="/images/logo.png" 
              alt="GENESI" 
              width={1000} 
              height={400} 
              className="w-[50vw] max-w-3xl object-contain filter invert brightness-0 opacity-90"
              priority
            />
          </div>

          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Elegance in Every Detail
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
              Premium furniture, FF&E procurement, interior design, and project management for luxury spaces worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/catalogue" 
                className="px-8 py-4 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors uppercase tracking-widest"
              >
                Explore Catalogue
              </Link>
              <Link 
                href="/projects" 
                className="px-8 py-4 border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition-colors uppercase tracking-widest"
              >
                Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Intro */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Our Philosophy</h2>
          <h3 className="text-3xl md:text-5xl font-light mb-8 leading-tight">Crafting Luxury Spaces</h3>
          <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-light">
            GENESI is your partner for high-end interior solutions. From bespoke furniture to complete turnkey contract management, we bring Italian design excellence to hotels, residences, and commercial spaces. Every detail is meticulously engineered to ensure timeless elegance.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-2">Featured Collections</h2>
              <p className="text-muted-foreground">Discover our latest additions</p>
            </div>
            <Link href="/catalogue" className="hidden md:inline-block text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">
              View All Collections
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((cat) => {
              const title = cat.title[locale] || cat.title.en;
              
              return (
                <Link 
                  href={`/catalogue/${cat.slug}`} 
                  key={cat.id}
                  className="group block overflow-hidden bg-white dark:bg-zinc-950 border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                    <Image 
                      src={`/images/categories/${cat.slug}.png`}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Explore →</p>
                  </div>
                </Link>
              );
            })}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/catalogue" className="inline-block px-8 py-4 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors uppercase tracking-widest">
              View All Collections
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Split */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="bg-zinc-900 text-white p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">Services</h2>
            <h3 className="text-3xl md:text-5xl font-light mb-8">Turnkey Solutions</h3>
            <p className="text-zinc-300 leading-relaxed text-lg font-light mb-12 max-w-lg">
              We provide comprehensive FF&E procurement, custom millwork, and project management. From the initial concept to the final white-glove installation, Genesi ensures impeccable execution.
            </p>
            <div>
              <Link href="/services" className="inline-block border border-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Discover Our Services
              </Link>
            </div>
          </div>
          <div className="bg-zinc-200 dark:bg-zinc-800 relative min-h-[400px]">
            <Image
              src="/images/home-turnkey.png"
              alt="Genesi Turnkey Solutions"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
