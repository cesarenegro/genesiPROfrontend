import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { FEATURE_VELA_ENABLED, FEATURE_VELA_UNDER_DEVELOPMENT } from '@/lib/features';
import { PROJECTS, pick } from '@/lib/projects';
import { ArrowLink, Cover, Eyebrow, Panel, Stack } from '@/components/opt2/Stack';

const P = '/images/projects';

export default async function Home() {
  const locale = await getLocale();
  const o = await getTranslations('Opt2');
  const velaOn = FEATURE_VELA_ENABLED && !FEATURE_VELA_UNDER_DEVELOPMENT;

  return (
    <Stack count={6}>
      {/* 0 · Full-screen hero */}
      <Panel
        i={0}
        hero
        image={`${P}/restaurants/genesi-restaurants-01.jpg`}
        alt="Genesi — ristorante a Mykonos"
        eyebrow={o('homeHeroEyebrow')}
        title={o('homeHeroTitle')}
        cta={{ href: '/projects', label: o('projectsCta') }}
        scrollLabel={o('scroll')}
      />

      {/* 1 · Philosophy */}
      <Cover i={1}>
        <section className="px-6 lg:px-16 py-28 lg:py-44">
          <div className="max-w-5xl mx-auto text-center reveal">
            <Eyebrow>{o('homeIntroEyebrow')}</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extralight leading-[1.1] tracking-tight">{o('homeIntroTitle')}</h2>
            <p className="mt-10 text-base lg:text-xl text-muted-foreground font-light leading-relaxed max-w-[65ch] mx-auto">{o('homeIntroText')}</p>
          </div>
        </section>
      </Cover>

      {/* 2-4 · Pinned photo bands */}
      <Panel
        i={2}
        image={`${P}/restaurants/genesi-restaurants-05.jpg`}
        alt="Genesi — hospitality"
        eyebrow={o('band1Eyebrow')}
        title={o('band1Title')}
        text={o('band1Text')}
        cta={{ href: '/projects', label: o('discover') }}
      />
      <Panel
        i={3}
        image={`${P}/tables/genesi-tables-03.jpg`}
        alt="Genesi — tavolo su misura"
        eyebrow={o('band2Eyebrow')}
        title={o('band2Title')}
        text={o('band2Text')}
        cta={{ href: '/studio', label: o('discover') }}
      />
      <Panel
        i={4}
        image={`${P}/lighting/genesi-lighting-04.jpg`}
        alt="Genesi — illuminazione"
        eyebrow={o('band3Eyebrow')}
        title={o('band3Title')}
        text={o('band3Text')}
        cta={{ href: '/projects', label: o('discover') }}
      />

      {/* 5 · Everything else slides over the last band */}
      <Cover i={5}>
        {/* VELA */}
        {velaOn && (
          <section className="bg-[#1e1e1e] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100svh]">
              <div className="relative min-h-[70svh] lg:min-h-0 lg:order-2 overflow-hidden">
                <Image
                  src="/images/vela/residential/vela-door-in-a-calm-italian-interior.webp"
                  alt="VELA — porta per interni"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center px-6 lg:px-20 py-20 reveal">
                <Image src="/images/vela/vela-logo-white.svg" alt="VELA by Genesi" width={200} height={72} className="w-36 h-auto mb-12 opacity-90" />
                <Eyebrow className="text-white/60">{o('velaEyebrow')}</Eyebrow>
                <h2 className="text-3xl lg:text-5xl font-extralight leading-tight tracking-tight">{o('velaTitle')}</h2>
                <p className="mt-6 text-white/70 font-light leading-relaxed max-w-md">{o('velaText')}</p>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.25em] text-white/70">
                  <Link href="/vela/porte-interni" className="hover:text-white transition-colors">{o('velaInterior')}</Link>
                  <span className="dash-sep" />
                  <Link href="/vela/porte-hotel" className="hover:text-white transition-colors">{o('velaHotel')}</Link>
                  <span className="dash-sep" />
                  <Link href="/vela/box-doccia" className="hover:text-white transition-colors">{o('velaShower')}</Link>
                </div>
                <div className="mt-12">
                  <ArrowLink href="/vela" light>{o('velaCta')}</ArrowLink>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects */}
        <section className="px-6 lg:px-16 py-24 lg:py-36">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-20 reveal">
            <div>
              <Eyebrow>{o('projectsEyebrow')}</Eyebrow>
              <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight">{o('projectsTitle')}</h2>
            </div>
            <ArrowLink href="/projects">{o('projectsCta')}</ArrowLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-14">
            {PROJECTS.slice(0, 5).map((p, idx) => {
              // Editorial rhythm: two wide, three narrow
              const span = idx < 2 ? 'md:col-span-3' : 'md:col-span-2';
              const ratio = idx < 2 ? 'aspect-[4/3]' : 'aspect-[4/5]';
              return (
                <Link key={p.slug} href={`/projects/${p.slug}`} className={`group block ${span}`}>
                  <div className={`relative ${ratio} overflow-hidden bg-zinc-100`}>
                    <Image
                      src={p.cover.src}
                      alt={pick(p.title, locale)}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-5 text-lg lg:text-xl font-light">{pick(p.title, locale)}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {p.location ? `${pick(p.location, locale)} · ` : ''}{p.year}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Studio split */}
        <section className="grid grid-cols-1 lg:grid-cols-2 bg-[#1e1e1e] text-white">
          <div className="relative min-h-[60svh] lg:min-h-[90svh] overflow-hidden">
            <Image
              src={`${P}/complements/genesi-complements-02.jpg`}
              alt="Genesi — banco reception su misura"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 lg:px-20 py-20 reveal">
            <Eyebrow className="text-white/60">{o('studioEyebrow')}</Eyebrow>
            <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight">{o('studioTitle')}</h2>
            <p className="mt-6 text-white/70 font-light leading-relaxed max-w-md">{o('studioText')}</p>
            <div className="mt-12">
              <ArrowLink href="/services" light>{o('studioCta')}</ArrowLink>
            </div>
          </div>
        </section>
      </Cover>
    </Stack>
  );
}
