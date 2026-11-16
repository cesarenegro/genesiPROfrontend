import { Link } from "@/i18n/routing";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FEATURE_VELA_ENABLED } from "@/lib/features";
import { GENESI_PRO_URL, GENMA_URL } from "./Header";
import { CONTACT_EMAIL } from "@/lib/contact";
import SocialLinks from "@/components/opt2/SocialLinks";

export default async function Footer() {
  const t = await getTranslations('Footer');
  const n = await getTranslations('Navigation');
  const o = await getTranslations('Opt2');

  const head = 'text-[10.5px] uppercase tracking-[0.3em] text-white/45 mb-6';
  const item = 'text-sm font-light text-white/80 hover:text-white transition-colors';

  return (
    <footer className="relative z-[2] w-full bg-[#141414] text-white">
      <div className="px-6 lg:px-16 pt-20 lg:pt-28 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-14">
          <div className="col-span-2 lg:col-span-4">
            <Image src="/images/logo.png" alt="GENESI" width={140} height={74} className="h-12 w-auto brightness-0 invert" />
            <p className="mt-8 text-sm font-light text-white/60 leading-relaxed max-w-xs">{o('footerTagline')}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-block text-sm font-light text-white/85 hover:text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors">{CONTACT_EMAIL}</a>
          </div>

          <div className="lg:col-span-2">
            <p className={head}>{o('footerExplore')}</p>
            <ul className="space-y-3">
              <li><Link href="/projects" className={item}>{n('projects')}</Link></li>
              <li><Link href="/studio" className={item}>{n('studio')}</Link></li>
              <li><Link href="/services" className={item}>{n('services')}</Link></li>
              <li><Link href="/materials" className={item}>{n('materials')}</Link></li>
              {FEATURE_VELA_ENABLED && <li><Link href="/vela" className={item}>VELA</Link></li>}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className={head}>{o('footerCompany')}</p>
            <ul className="space-y-3">
              <li><Link href="/about" className={item}>{n('about')}</Link></li>
              <li><Link href="/contact" className={item}>{t('contact')}</Link></li>
              <li><Link href="/trade" className={item}>{t('tradeB2b')}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className={head}>{o('footerSisters')}</p>
            <ul className="space-y-3">
              <li><a href={GENESI_PRO_URL} target="_blank" rel="noopener noreferrer" className={item}>Genesi Pro ↗</a></li>
              <li><a href={GENMA_URL} target="_blank" rel="noopener noreferrer" className={item}>Genma Collection ↗</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className={head}>{o('footerFollow')}</p>
            <SocialLinks labels vertical className="text-sm font-light text-white" iconClass="w-4 h-4" />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-white/40">
          <p>© {new Date().getFullYear()} Genesi · {o('footerRights')}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t('privacyPolicy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
