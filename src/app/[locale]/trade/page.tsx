import { currentUser } from '@clerk/nextjs/server';
import { getTranslations } from 'next-intl/server';

export default async function TradePage() {
  const user = await currentUser();
  const t = await getTranslations('Trade');

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-sm uppercase tracking-widest text-primary mb-4">{t('tag')}</div>
        <h1 className="text-4xl md:text-5xl font-light mb-8">
          {t('welcome', { name: user?.firstName || t('welcomePartner') })}
        </h1>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          {t('intro')}
        </p>

        <div className="bg-zinc-50 dark:bg-zinc-900 border border-border p-8 md:p-12 text-left">
          <h2 className="text-2xl font-medium mb-4">{t('cardTitle')}</h2>
          <p className="text-muted-foreground mb-8">
            {t('cardText')}
          </p>
          
          <a 
            href="/api/trade/price-list"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-foreground/90 transition-colors w-full sm:w-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            {t('downloadButton')}
          </a>
        </div>
      </div>
    </div>
  );
}
