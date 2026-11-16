import type { Metadata } from "next";
import { Raleway, Geist_Mono } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import SmoothScroll from '@/components/opt2/SmoothScroll';

// OPT2: Raleway (light, airy) like the reference site; exposed as the default sans font.
const raleway = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import {getTranslations} from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const title = 'Genesi Italia - Elegance in Every Detail';
  const description = t('description');

  return {
    metadataBase: new URL('https://genesi-italia.com'),
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://genesi-italia.com/${locale}`,
      siteName: 'Genesi Italia',
      locale,
      type: 'website',
      images: [
        {
          url: '/images/og-hero.jpg',
          width: 1200,
          height: 630,
          alt: 'Genesi Italia - Elegance in Every Detail',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-hero.jpg'],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
 
  const messages = await getMessages();

  return (
    <ClerkProvider>
      <html lang={locale} className={`${raleway.variable} ${geistMono.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <NextIntlClientProvider messages={messages}>
            <SmoothScroll />
            <Header />
            <main className="below-header flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
