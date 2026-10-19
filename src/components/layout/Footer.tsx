import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations('Footer');
  return (
    <footer className="w-full border-t bg-muted/40 py-10 mt-auto">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/trade" className="hover:text-foreground transition-colors font-medium text-primary">{t('tradeB2b')}</Link>
          <Link href="/vela" className="hover:text-foreground transition-colors font-medium">VELA Porte</Link>
          <a href="#" className="hover:text-foreground transition-colors">{t('privacyPolicy')}</a>
          <a href="#" className="hover:text-foreground transition-colors">{t('termsOfService')}</a>
          <Link href="/contact" className="hover:text-foreground transition-colors">{t('contact')}</Link>
        </div>
      </div>
    </footer>
  );
}
