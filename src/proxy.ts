import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';

import { FEATURE_VELA_ENABLED } from './lib/features';

const intlMiddleware = createMiddleware(routing);
const isProtectedRoute = createRouteMatcher(['/(.*)/trade(.*)', '/(.*)/dashboard(.*)']);
const isVelaRoute = createRouteMatcher(['/vela(.*)', '/(.*)/vela(.*)']);

export default clerkMiddleware(async (auth, req) => {
  // Bypass next-intl and sign-in redirect for API routes, robots.txt and sitemap.xml
  if (
    req.nextUrl.pathname.startsWith('/api/') ||
    req.nextUrl.pathname === '/robots.txt' ||
    req.nextUrl.pathname === '/sitemap.xml'
  ) {
    return NextResponse.next();
  }

  // Locales removed in OPT2 (ru, zh, id): send old links to the English version.
  const legacy = req.nextUrl.pathname.match(/^\/(ru|zh|id)(\/.*)?$/);
  if (legacy) {
    const url = req.nextUrl.clone();
    url.pathname = `/en${legacy[2] ?? ''}`;
    return NextResponse.redirect(url, 308);
  }

  if (isProtectedRoute(req)) {
    const session = await auth();
    if (!session.userId) {
      return session.redirectToSignIn({ returnBackUrl: req.url });
    }
  }
  
  return intlMiddleware(req);
});


export const config = {
  matcher: ['/', '/(it|en|fr|de|ru|zh|id)/:path*', '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|pdf|mp4|txt|xml)).*)', '/(api|trpc)(.*)'],
};
