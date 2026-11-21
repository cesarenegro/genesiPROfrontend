import { Link } from "@/i18n/routing";
import Image from "next/image";
import { SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { getLocale, getTranslations } from 'next-intl/server';
import { FEATURE_VELA_ENABLED, FEATURE_VELA_UNDER_DEVELOPMENT } from '@/lib/features';
import { PROJECTS, pick } from '@/lib/projects';
import HeaderShell from '@/components/opt2/HeaderShell';
import FullMenu, { type MenuEntry } from '@/components/opt2/FullMenu';
import LocaleLinks from '@/components/opt2/LocaleLinks';
import SocialLinks from '@/components/opt2/SocialLinks';

export const GENESI_PRO_URL = 'https://www.genesi-pro.com';
export const GENMA_URL = 'https://genmacollection.com/';

const V = '/images/vela';
const P = '/images/projects';

/**
 * OPT2 header (Minotti-inspired): thin utility bar on desktop, a minimal main bar with
 * "Menu" on the left and the logo centred, and a full-screen menu overlay.
 * No catalogue downloads anywhere.
 */
export default async function Header() {
  const { userId } = await auth();
  const locale = await getLocale();
  const t = await getTranslations('Navigation');
  const o = await getTranslations('Opt2');
  const velaMenu = FEATURE_VELA_ENABLED && !FEATURE_VELA_UNDER_DEVELOPMENT;

  const entries: MenuEntry[] = [
    { kind: 'link', href: '/about', label: t('about') },
    {
      kind: 'group',
      label: t('studio'),
      cards: [
        { href: '/studio', label: t('studioOverview'), image: `${P}/interior-design/genesi-interior-design-01.jpg` },
        { href: '/services', label: t('services'), image: `${P}/complements/genesi-complements-02.jpg` },
        { href: '/catalogue', label: t('catalogue'), image: `${P}/tables/genesi-tables-03.jpg` },
        { href: '/materials', label: t('materials'), image: `${P}/marbles/genesi-marbles-03.jpg` },
      ],
    },
    {
      kind: 'group',
      label: t('projects'),
      cards: [
        ...PROJECTS.map((p) => ({ href: `/projects/${p.slug}`, label: pick(p.title, locale), image: p.cover.src })),
        { href: '/projects', label: o('allProjects'), image: `${P}/restaurants/genesi-restaurants-05.jpg` },
      ],
    },
    ...(velaMenu
      ? [
          {
            kind: 'group',
            label: t('vela'),
            cards: [
              { href: '/vela', label: o('velaOverview'), image: `${V}/residential/vela-door-in-a-calm-italian-interior.webp` },
              { href: '/vela/porte-interni', label: o('velaInterior'), image: `${V}/residential/burnt-sienna-double-doors-in-travertine.webp` },
              { href: '/vela/porte-hotel', label: o('velaHotel'), image: `${V}/hotel/elegant-green-hotel-door.webp` },
              { href: '/vela/box-doccia', label: o('velaShower'), image: `${V}/box-doccia/01_P+G4.webp` },
              { href: '/vela/maniglie', label: o('velaHandles'), image: `${V}/handles/bronze-pull-and-fluted-oak-detail.webp` },
              { href: '/vela/materiali', label: o('velaMaterials'), image: `${V}/finishes/01-bronzo-spazzolato.webp` },
            ],
          } as MenuEntry,
        ]
      : FEATURE_VELA_ENABLED
        ? [{ kind: 'link', href: '/vela', label: t('vela') } as MenuEntry]
        : []),
    { kind: 'link', href: '/contact', label: o('contact') },
    { kind: 'external', href: GENESI_PRO_URL, label: 'Genesi Pro' },
    { kind: 'external', href: GENMA_URL, label: 'Genma Collection' },
  ];

  const account = userId ? (
    <span className="inline-flex items-center gap-4">
      <Link href="/dashboard" className="hover:text-white transition-colors">{t('personalArea')}</Link>
      <UserButton />
    </span>
  ) : (
    <SignInButton mode="modal">
      <button type="button" className="uppercase tracking-[0.2em] hover:text-white transition-colors">{t('tradeLogin')}</button>
    </SignInButton>
  );

  const menuFooter = (
    <span className="flex flex-wrap items-center justify-between gap-6">
      {account}
      <SocialLinks iconClass="w-5 h-5" />
    </span>
  );

  const utility = 'hover:text-white transition-colors';

  return (
    <HeaderShell>
      {/* Utility bar (desktop) */}
      <div className="hidden lg:flex h-[var(--topbar-h)] items-center justify-between px-10 bg-black/40 text-[10.5px] uppercase tracking-[0.22em] text-white/65">
        <LocaleLinks />
        <div className="flex items-center gap-7">
          <Link href="/contact" className={utility}>{o('contact')}</Link>
          <a href={GENESI_PRO_URL} target="_blank" rel="noopener noreferrer" className={utility}>Genesi Pro ↗</a>
          <a href={GENMA_URL} target="_blank" rel="noopener noreferrer" className={utility}>Genma Collection ↗</a>
          {account}
          <SocialLinks className="pl-6 border-l border-white/20" iconClass="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Main bar */}
      <div className="relative flex h-[var(--header-h)] items-center justify-between px-5 lg:px-10">
        <FullMenu
          entries={entries}
          labels={{ menu: t('menu'), close: o('close') }}
          locales={<LocaleLinks />}
          account={menuFooter}
        />

        <Link href="/" className="absolute left-1/2 -translate-x-1/2" aria-label="GENESI">
          <Image
            src="/images/logo.png"
            alt="GENESI"
            width={120}
            height={64}
            className="h-7 sm:h-8 lg:h-10 w-auto brightness-0 invert"
            priority
          />
        </Link>

        <nav className="flex items-center gap-6 lg:gap-8 text-[11px] uppercase tracking-[0.25em]">
          <Link href="/projects" className="hidden md:inline hover:text-white/70 transition-colors">{t('projects')}</Link>
          {FEATURE_VELA_ENABLED && (
            <Link href="/vela" className="inline-flex items-center min-h-[44px] lg:min-h-0 px-1 -mr-1 lg:px-0 lg:mr-0 font-semibold hover:text-white/70 active:scale-[0.97] transition-[color,transform] duration-150 ease-[var(--ease-out)]">VELA</Link>
          )}
        </nav>
      </div>
    </HeaderShell>
  );
}
