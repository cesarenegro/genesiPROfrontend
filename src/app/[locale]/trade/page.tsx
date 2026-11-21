import { currentUser } from '@clerk/nextjs/server';
import { getTranslations } from 'next-intl/server';
import TradeResourcesGrid from '@/components/trade/TradeResourcesGrid';

export default async function TradePage() {
  const user = await currentUser();
  const t = await getTranslations('Trade');

  return (
    <div className="container mx-auto px-4 py-20 min-h-[100dvh] space-y-14">
      <div className="max-w-3xl">
        <div className="text-sm uppercase tracking-widest text-primary mb-3">{t('tag')}</div>
        <h1 className="text-3xl md:text-5xl font-light mb-4">
          {t('welcome', { name: user?.firstName || t('welcomePartner') })}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
          {t('intro')}
        </p>
      </div>

      <TradeResourcesGrid />
    </div>
  );
}
