import { currentUser } from '@clerk/nextjs/server';

export default async function TradePage() {
  const user = await currentUser();
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-sm uppercase tracking-widest text-primary mb-4">Area Riservata</div>
        <h1 className="text-4xl md:text-5xl font-light mb-8">Benvenuto, {user?.firstName || 'Partner'}</h1>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          GENESI partners with interior designers, architects, and developers worldwide to deliver exceptional luxury furniture for residential and hospitality projects.
        </p>

        <div className="bg-zinc-50 dark:bg-zinc-900 border border-border p-8 md:p-12 text-left">
          <h2 className="text-2xl font-medium mb-4">2026 Technical Price List</h2>
          <p className="text-muted-foreground mb-8">
            Download our complete technical catalogue and MSRP price list. For trade discounts and custom contract quotations, please contact our sales team directly.
          </p>
          
          <a 
            href="/docs/genesi-price-list-2026.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-foreground/90 transition-colors w-full sm:w-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Download Price List PDF
          </a>
        </div>
      </div>
    </div>
  );
}
