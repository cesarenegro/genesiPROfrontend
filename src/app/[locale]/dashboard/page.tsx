import { currentUser } from '@clerk/nextjs/server';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function DashboardPage() {
  const user = await currentUser();
  const t = await getTranslations('Dashboard');

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <section className="bg-background py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-light mb-4">{t('title')}</h1>
          <p className="text-lg text-muted-foreground font-light">
            {t('welcome', { name: user?.firstName || t('welcomePartner') })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Profilo */}
            <div className="bg-background border border-border p-8 shadow-sm">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">{t('profileTitle')}</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">{t('nameLabel')}</div>
                  <div className="font-medium">{user?.firstName} {user?.lastName}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">{t('emailLabel')}</div>
                  <div className="font-medium">{user?.emailAddresses[0]?.emailAddress}</div>
                </div>
              </div>
            </div>

            {/* Card 2: Listini e Materiali */}
            <div className="bg-background border border-border p-8 shadow-sm">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">{t('tradeMaterialsTitle')}</h2>
              <p className="text-sm text-muted-foreground mb-6">
                {t('tradeMaterialsText')}
              </p>
              <Link 
                href="/trade"
                className="inline-block border border-foreground px-6 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                {t('goToDownload')}
              </Link>
            </div>

            {/* Card 3: Stato Ordini */}
            <div className="bg-background border border-border p-8 shadow-sm">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">{t('ordersTitle')}</h2>
              <div className="flex flex-col items-center justify-center h-32 text-center border border-dashed border-border">
                <span className="text-sm text-muted-foreground">{t('noOrders')}</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
