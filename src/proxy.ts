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

  if (isProtectedRoute(req)) {
    const session = await auth();
    if (!session.userId) {
      return session.redirectToSignIn({ returnBackUrl: req.url });
    }
  }
  
  return intlMiddleware(req);
}, { debug: true });


export const config = {
  matcher: ['/', '/(it|en|ru|zh|id|fr|de)/:path*', '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|pdf|mp4|txt|xml)).*)', '/(api|trpc)(.*)'],
};
