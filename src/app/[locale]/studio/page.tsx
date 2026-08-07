import Image from 'next/image';

export default function StudioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-black text-white py-40 border-b border-border text-center px-4 overflow-hidden min-h-[60vh] flex items-center justify-center">
        <Image
          src="/images/studio/hero.png"
          alt="Genesi Studio Headquarters"
          fill
          priority
          className="object-cover opacity-50 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
        
        <div className="relative z-20 container mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">Genesi Studio</h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            Our internal creative hub where architecture, interior design, and product engineering converge.
          </p>
        </div>
      </section>

      {/* Main Intro */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Image block */}
            <div className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-900 border border-border flex items-center justify-center relative overflow-hidden">
               <Image
                 src="/images/studio/atmosphere.png"
                 alt="Studio Atmosphere"
                 fill
                 className="object-cover"
               />
            </div>

            {/* Content block */}
            <div className="space-y-8">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground">The Hub of Innovation</h2>
              <h3 className="text-3xl md:text-4xl font-light leading-tight">
                Where Ideas Take Shape
              </h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                GENESI Studio is the beating heart of our brand. Composed of architects, interior designers, and master engineers, the studio is responsible for the conception of our collections and the execution of our turnkey contract projects.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                By maintaining a seamless dialogue between the drawing board and the production floor, we ensure that every design is not only conceptually striking but also structurally impeccable and perfectly tailored to the client's needs.
              </p>
              
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-border mt-12">
                <div>
                  <div className="text-4xl font-light mb-2">15+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">In-house Designers</div>
                </div>
                <div>
                  <div className="text-4xl font-light mb-2">3D</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Advanced Rendering</div>
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
            &quot;Design is not just what it looks like and feels like. Design is how it works within the space.&quot;
          </h2>
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
            — The Genesi Studio Team
          </p>
        </div>
      </section>
    </div>
  );
}
