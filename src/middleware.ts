import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);
const isProtectedRoute = createRouteMatcher(['/(.*)/trade(.*)', '/(.*)/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    const session = await auth();
    if (!session.userId) {
      // Invece di lanciare un'eccezione con protect() che fa crashare l'Edge Runtime di Vercel
      // ritorniamo esplicitamente il redirect alla pagina di login.
      return session.redirectToSignIn({ returnBackUrl: req.url });
    }
  }
  return intlMiddleware(req);
}, { debug: true });

export const config = {
  matcher: ['/', '/(it|en|ru|zh|id|fr|de)/:path*', '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|pdf|mp4)).*)', '/(api|trpc)(.*)'],
};
