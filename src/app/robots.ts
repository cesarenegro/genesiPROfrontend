import { MetadataRoute } from 'next';
import { FEATURE_VELA_ENABLED } from '@/lib/features';

export default function robots(): MetadataRoute.Robots {
  const disallowed = ['/api/', '/dashboard/'];

  if (!FEATURE_VELA_ENABLED) {
    disallowed.push('/vela', '/vela/', '/*/vela', '/*/vela/*');
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: disallowed,
    },
    sitemap: 'https://genesi-pro.com/sitemap.xml',
  };
}
