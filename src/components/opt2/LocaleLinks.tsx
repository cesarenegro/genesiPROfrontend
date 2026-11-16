'use client';

import { useLocale } from 'next-intl';
import { Link, routing, usePathname } from '@/i18n/routing';

/** IT · EN · FR · DE as plain links (Minotti utility-bar style). */
export default function LocaleLinks({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <span className={`inline-flex items-center gap-4 ${className}`}>
      {routing.locales.map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={`transition-colors ${l === locale ? 'text-white font-semibold' : 'hover:text-white'}`}
          aria-current={l === locale ? 'true' : undefined}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </span>
  );
}
