import { MetadataRoute } from 'next';
import { FEATURE_VELA_ENABLED } from '@/lib/features';
import { routing } from '@/i18n/routing';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://genesi-pro.com';
  const routes = [
    '',
    '/about',
    '/studio',
    '/services',
    '/catalogue',
    '/projects',
    '/materials',
    '/contact',
    '/trade',
  ];

  if (FEATURE_VELA_ENABLED) {
    routes.push(
      '/vela',
      '/vela/porte-interni',
      '/vela/porte-hotel',
      '/vela/box-doccia',
      '/vela/maniglie',
      '/vela/materiali',
      '/vela/catalogo'
    );
  }

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
