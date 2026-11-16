import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    '/api/trade/price-list': ['./private-docs/**/*'],
  },
  // OPT2: catalogues are no longer downloadable; old links land on the VELA overview.
  async redirects() {
    return [
      { source: '/:locale(it|en|fr|de)/vela/catalogo', destination: '/:locale/vela', permanent: true },
      { source: '/vela/catalogo', destination: '/vela', permanent: true },
    ];
  },
  // The OPT2 review copy on opt2.genesi-italia.com must never be indexed by search engines.
  async headers() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'opt2.genesi-italia.com' }],
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
