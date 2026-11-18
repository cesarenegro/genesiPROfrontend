'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

interface Props {
  activeCategory?: 'all' | 'porte-interni' | 'porte-hotel' | 'box-doccia' | 'maniglie' | 'materiali' | 'catalogo';
}

export default function VelaCategoryNav({ activeCategory = 'all' }: Props) {
  const t = useTranslations('Vela');

  const links = [
    { id: 'all', href: '/vela', label: t('navAll') },
    { id: 'porte-interni', href: '/vela/porte-interni', label: t('navPorteInterni') },
    { id: 'porte-hotel', href: '/vela/porte-hotel', label: t('navPorteHotel') },
    { id: 'box-doccia', href: '/vela/box-doccia', label: t('navBoxDoccia') },
    { id: 'maniglie', href: '/vela/maniglie', label: t('navManiglie') },
    { id: 'materiali', href: '/vela/materiali', label: t('navMateriali') },
  ];

  return (
    <div className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-16 z-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between overflow-x-auto py-2.5 no-scrollbar gap-6 text-xs uppercase tracking-widest font-medium">
          <div className="flex items-center gap-2 text-zinc-400 shrink-0">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">VELA</span>
            <span>/</span>
            <span>{t('navCategoryPrefix')}</span>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            {links.map((link) => {
              const isActive = activeCategory === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`py-1 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-zinc-950 dark:text-white font-semibold border-b-2 border-zinc-950 dark:border-white'
                      : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white border-b-2 border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
