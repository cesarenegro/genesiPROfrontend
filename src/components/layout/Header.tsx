import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileMenu, { type MobileNavItem } from "./MobileMenu";
import Image from "next/image";
import { SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { getTranslations } from 'next-intl/server';
import { FEATURE_VELA_ENABLED, FEATURE_VELA_UNDER_DEVELOPMENT } from '@/lib/features';

const GENESI_PRO_URL = 'https://www.genesi-pro.com';
const GENMA_URL = 'https://genmacollection.com/';

const dropdownPanel =
  "absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50";
const dropdownBox =
  "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg py-2 flex flex-col text-xs uppercase tracking-wider";
const dropdownItem =
  "px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors";
const dropdownHead =
  "px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold text-zinc-900 dark:text-zinc-100 transition-colors";
const caret = "text-[10px] text-zinc-400 group-hover:rotate-180 transition-transform duration-200";

export default async function Header() {
  const { userId } = await auth();
  const t = await getTranslations('Navigation');
  const velaMenu = FEATURE_VELA_ENABLED && !FEATURE_VELA_UNDER_DEVELOPMENT;

  const mobileItems: MobileNavItem[] = [
    { kind: 'link', href: '/about', label: t('about') },
    { kind: 'heading', label: t('studio') },
    { kind: 'link', href: '/studio', label: t('studioOverview'), indent: true },
    { kind: 'link', href: '/services', label: t('services'), indent: true },
    { kind: 'link', href: '/catalogue', label: t('catalogue'), indent: true },
    { kind: 'link', href: '/materials', label: t('materials'), indent: true },
    ...(FEATURE_VELA_ENABLED ? [{ kind: 'link', href: '/vela', label: t('vela') } as MobileNavItem] : []),
    { kind: 'link', href: '/projects', label: t('projects') },
    { kind: 'external', href: GENESI_PRO_URL, label: 'Genesi Pro' },
    { kind: 'external', href: GENMA_URL, label: 'Genma Collection' },
    { kind: 'external', href: '/docs/genesi-catalogue.pdf?v=2', label: t('openCatalogue') },
    ...(userId ? [{ kind: 'link', href: '/dashboard', label: t('personalArea') } as MobileNavItem] : []),
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 lg:px-6 xl:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="GENESI Logo"
            width={120}
            height={40}
            className="object-contain h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-3 xl:gap-6 2xl:gap-8 items-center text-[13px] xl:text-sm font-medium">
          <Link href="/about" className="hover:text-primary transition-colors whitespace-nowrap">{t('about')}</Link>

          {/* Studio dropdown: Studio, Services, Catalogue, Materials */}
          <div className="relative group">
            <Link href="/studio" className="hover:text-primary transition-colors flex items-center gap-1 py-2">
              <span>{t('studio')}</span>
              <span className={caret}>▾</span>
            </Link>
            <div className={dropdownPanel}>
              <div className={dropdownBox}>
                <Link href="/studio" className={dropdownHead}>{t('studioOverview')}</Link>
                <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-1" />
                <Link href="/services" className={dropdownItem}>{t('services')}</Link>
                <Link href="/catalogue" className={dropdownItem}>{t('catalogue')}</Link>
                <Link href="/materials" className={dropdownItem}>{t('materials')}</Link>
              </div>
            </div>
          </div>

          {FEATURE_VELA_ENABLED && (
            <div className="relative group">
              <Link
                href="/vela"
                className="hover:text-primary transition-colors font-semibold tracking-wider text-black dark:text-white border-b-2 border-transparent hover:border-black dark:hover:border-white pb-0.5 flex items-center gap-1"
              >
                <span>{t('vela')}</span>
                {velaMenu && <span className={caret}>▾</span>}
              </Link>

              {/* VELA Categories Dropdown */}
              {velaMenu && (
                <div className={dropdownPanel}>
                  <div className={dropdownBox}>
                    <Link href="/vela" className={dropdownHead}>Panoramica Brand VELA</Link>
                    <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-1" />
                    <Link href="/vela/porte-interni" className={dropdownItem}>Porte per Interni</Link>
                    <Link href="/vela/porte-hotel" className={dropdownItem}>Porte Camere Hotel</Link>
                    <Link href="/vela/box-doccia" className={dropdownItem}>Box Doccia</Link>
                    <Link href="/vela/maniglie" className={dropdownItem}>Maniglie & Dettagli</Link>
                    <Link href="/vela/materiali" className={dropdownItem}>Materiali & Finiture</Link>
                    <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-1" />
                    <Link
                      href="/vela/catalogo"
                      className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[#5B9C94] font-semibold transition-colors flex items-center justify-between"
                    >
                      <span>Scarica Catalogo VELA</span>
                      <span>↓</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          <Link href="/projects" className="hover:text-primary transition-colors whitespace-nowrap">{t('projects')}</Link>

          {/* External sister sites */}
          <a
            href={GENESI_PRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-foreground px-2.5 xl:px-3 py-1.5 font-semibold tracking-wider uppercase text-[11px] xl:text-xs hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
          >
            Genesi Pro <span aria-hidden>↗</span>
          </a>
          <a
            href={GENMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-foreground px-2.5 xl:px-3 py-1.5 font-semibold tracking-wider uppercase text-[11px] xl:text-xs hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
          >
            Genma Collection <span aria-hidden>↗</span>
          </a>

          <div className="hidden xl:block w-px h-4 bg-border mx-1"></div>

          {/* Download Catalogue CTA */}
          <a
            href="/docs/genesi-catalogue.pdf?v=2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] xl:text-sm font-medium bg-[#5B9C94] text-white px-2.5 xl:px-4 py-2 hover:bg-[#488079] transition-colors whitespace-nowrap"
          >
            {t('openCatalogue')}
          </a>

          {/* Auth Block */}
          {!userId ? (
            <SignInButton mode="modal">
              <button className="text-[13px] xl:text-sm font-medium bg-[#8A9A86] text-white px-2.5 xl:px-4 py-2 hover:bg-[#788764] transition-colors whitespace-nowrap">{t('tradeLogin')}</button>
            </SignInButton>
          ) : (
            <>
              <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">{t('personalArea')}</Link>
              <UserButton />
            </>
          )}

          <LocaleSwitcher />
        </nav>

        {/* Mobile / tablet */}
        <div className="lg:hidden flex items-center gap-3">
          {FEATURE_VELA_ENABLED && (
            <Link href="/vela" className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 bg-foreground text-background">
              VELA
            </Link>
          )}
          {userId ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <button className="hidden sm:inline-block text-xs font-medium bg-[#8A9A86] text-white px-3 py-1.5 hover:bg-[#788764] transition-colors whitespace-nowrap">{t('tradeLogin')}</button>
            </SignInButton>
          )}
          <LocaleSwitcher />
          <MobileMenu items={mobileItems} menuLabel={t('menu')} />
        </div>
      </div>
    </header>
  );
}
