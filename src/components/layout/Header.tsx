import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";
import Image from "next/image";
import { SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

import { getTranslations } from 'next-intl/server';

export default async function Header() {
  const { userId } = await auth();
  const t = await getTranslations('Navigation');
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
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
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="/about" className="hover:text-primary transition-colors">{t('about')}</Link>
          <Link href="/studio" className="hover:text-primary transition-colors">{t('studio')}</Link>
          <Link href="/services" className="hover:text-primary transition-colors">{t('services')}</Link>
          <Link href="/catalogue" className="hover:text-primary transition-colors">{t('catalogue')}</Link>
          <div className="relative group">
            <Link
              href="/vela"
              className="hover:text-primary transition-colors font-semibold tracking-wider text-black dark:text-white border-b-2 border-transparent hover:border-black dark:hover:border-white pb-0.5 flex items-center gap-1"
            >
              <span>{t('vela')}</span>
              <span className="text-[10px] text-zinc-400 group-hover:rotate-180 transition-transform duration-200">▾</span>
            </Link>

            {/* VELA Categories Dropdown */}
            <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg py-2 flex flex-col text-xs uppercase tracking-wider">
                <Link
                  href="/vela"
                  className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold text-zinc-900 dark:text-zinc-100 transition-colors"
                >
                  Panoramica Brand VELA
                </Link>
                <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-1" />
                <Link
                  href="/vela/porte-interni"
                  className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Porte per Interni
                </Link>
                <Link
                  href="/vela/porte-hotel"
                  className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Porte Camere Hotel
                </Link>
                <Link
                  href="/vela/box-doccia"
                  className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Box Doccia
                </Link>
                <Link
                  href="/vela/maniglie"
                  className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Maniglie & Dettagli
                </Link>
                <Link
                  href="/vela/materiali"
                  className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  Materiali & Finiture
                </Link>
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
          </div>
          <Link href="/projects" className="hover:text-primary transition-colors">{t('projects')}</Link>
          <Link href="/materials" className="hover:text-primary transition-colors">{t('materials')}</Link>
          
          <div className="w-px h-4 bg-border mx-2"></div>
          
          {/* Download Catalogue CTA */}
          <a 
            href="/docs/genesi-catalogue.pdf?v=2" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-[#5B9C94] text-white px-5 py-2 hover:bg-[#488079] transition-colors"
          >
            {t('openCatalogue')}
          </a>
          
          {/* Auth Block */}
          {!userId ? (
            <SignInButton mode="modal">
              <button className="text-sm font-medium bg-[#8A9A86] text-white px-5 py-2 hover:bg-[#788764] transition-colors">{t('tradeLogin')}</button>
            </SignInButton>
          ) : (
            <>
              <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors mr-2">{t('personalArea')}</Link>
              <UserButton />
            </>
          )}

          <LocaleSwitcher />
        </nav>
        
        {/* Mobile menu link */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="/vela" className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 bg-foreground text-background">
            VELA
          </Link>
          {userId && (
            <UserButton />
          )}
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
