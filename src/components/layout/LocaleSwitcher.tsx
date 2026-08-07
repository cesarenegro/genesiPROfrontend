'use client';
import { useLocale } from 'next-intl';
import { routing, usePathname, useRouter } from '@/i18n/routing';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <select 
      value={locale} 
      onChange={handleLocaleChange}
      className="bg-transparent text-sm cursor-pointer outline-none uppercase font-semibold text-foreground/80 hover:text-foreground transition-colors"
    >
      {routing.locales.map((cur) => (
        <option key={cur} value={cur} className="uppercase text-black">
          {cur}
        </option>
      ))}
    </select>
  );
}
