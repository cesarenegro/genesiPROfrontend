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
};

export default withNextIntl(nextConfig);
