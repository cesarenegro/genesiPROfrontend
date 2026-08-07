import { currentUser } from '@clerk/nextjs/server';
import { Link } from '@/i18n/routing';

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <section className="bg-background py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-light mb-4">Area Personale</h1>
          <p className="text-lg text-muted-foreground font-light">
            Benvenuto, {user?.firstName || 'Partner'}. Questo è il tuo hub B2B privato.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Profilo */}
            <div className="bg-background border border-border p-8 shadow-sm">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Il Tuo Profilo</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Nome</div>
                  <div className="font-medium">{user?.firstName} {user?.lastName}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Email</div>
                  <div className="font-medium">{user?.emailAddresses[0]?.emailAddress}</div>
                </div>
              </div>
            </div>

            {/* Card 2: Listini e Materiali */}
            <div className="bg-background border border-border p-8 shadow-sm">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Materiali Trade</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Accedi all'area riservata per scaricare i listini prezzi aggiornati e le schede tecniche B2B.
              </p>
              <Link 
                href="/trade"
                className="inline-block border border-foreground px-6 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                Vai all'Area Download
              </Link>
            </div>

            {/* Card 3: Stato Ordini */}
            <div className="bg-background border border-border p-8 shadow-sm">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Ordini & Preventivi</h2>
              <div className="flex flex-col items-center justify-center h-32 text-center border border-dashed border-border">
                <span className="text-sm text-muted-foreground">Nessun preventivo in corso.</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
