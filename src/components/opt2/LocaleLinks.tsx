'use client';

import { useLocale } from 'next-intl';
import { Link, routing, usePathname } from '@/i18n/routing';

/** IT · EN · FR · DE as plain links (Minotti utility-bar style). */
export default function LocaleLinks({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <span className={`inline-flex items-center gap-2 lg:gap-4 ${className}`}>
      {routing.locales.map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={`inline-flex items-center justify-center min-w-[44px] min-h-[44px] lg:min-w-0 lg:min-h-0 active:scale-[0.95] transition-[color,transform] duration-150 ease-[var(--ease-out)] ${l === locale ? 'text-white font-semibold' : 'hover:text-white'}`}
          aria-current={l === locale ? 'true' : undefined}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </span>
  );
}
