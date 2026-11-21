import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { getVelaHandles, getVelaConceptHandles, getVelaHardware, Locale, resolveLocalizedText } from '@/lib/vela';
import VelaCategoryNav from '@/components/vela/VelaCategoryNav';
import VelaHandlesSection from '@/components/vela/VelaHandlesSection';
import VelaHardwareSection from '@/components/vela/VelaHardwareSection';
import VelaHardwareTable from '@/components/vela/VelaHardwareTable';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const t = await getTranslations({ locale, namespace: 'Vela' });
  return {
    title: t('handlesMetaTitle'),
    description: t('handlesMetaDesc'),
  };
}

export default async function ManigliePage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const handles = await getVelaHandles();
  const conceptHandles = await getVelaConceptHandles();
  const hardware = await getVelaHardware();
  const t = await getTranslations('Vela');

  const finishes = [
    {
      code: '01',
      name: {
        it: 'Bronzo Spazzolato a Mano',
        en: 'Hand-Brushed Bronze',
        fr: 'Bronze Brossé Main',
        de: 'Handgebürstete Bronze',
      },
      tag: {
        it: 'Spazzolatura Artigianale',
        en: 'Artisanal Brushing',
        fr: 'Brossage Artisanal',
        de: 'Handwerkliche Bürstung',
      },
      desc: {
        it: 'Tonalità calda e cangiante con micro-graffiature direzionali eseguite manualmente e sigillate con film nano-ceramico protettivo.',
        en: 'Warm, shimmering hue with directional manual micro-scratching sealed with a protective nano-ceramic film.',
        fr: 'Nuance chaude et chatoyante avec micro-rayures directionnelles manuelles scellées par un film nano-céramique protecteur.',
        de: 'Warmer, changierender Farbton mit handgeführter gerichteter Bürstung, versiegelt durch nanokeramischen Schutzfilm.',
      },
      material: {
        it: 'Lega di bronzo nobile',
        en: 'Noble bronze alloy',
        fr: 'Alliage de bronze noble',
        de: 'Edle Bronzelegierung',
      },
      treatment: {
        it: 'Spazzolatura manuale + finitura satinata',
        en: 'Manual brushing + satin finish',
        fr: 'Brossage manuel + finition satinée',
        de: 'Handbürstung + Satin-Finish',
      },
      image: '/images/vela/finishes/01-bronzo-spazzolato.webp',
      colorHex: '#8C6D58',
    },
    {
      code: '02',
      name: {
        it: 'Ottone Naturale Satinato',
        en: 'Satin Natural Brass',
        fr: 'Laiton Naturel Satiné',
        de: 'Natürliches Messing Satiniert',
      },
      tag: {
        it: 'Ottone Massiccio',
        en: 'Solid Brass',
        fr: 'Laiton Massif',
        de: 'Massives Messing',
      },
      desc: {
        it: 'Riflessi dorati caldi ed equilibrati, ideali per creare un contrasto naturale con essenze di rovere scuro, noce e cannettati.',
        en: 'Warm, balanced golden reflections, ideal for creating natural contrast with dark oak, walnut, and fluted textures.',
        fr: 'Reflets dorés chauds et équilibrés, idéals pour créer un contraste naturel avec chêne foncé, noyer et textures cannelées.',
        de: 'Warme, ausgewogene goldene Reflexe, ideal für einen natürlichen Kontrast zu dunkler Eiche, Nussbaum und Rillenpaneelen.',
      },
      material: {
        it: 'Ottone pieno trafilato',
        en: 'Drawn solid brass',
        fr: 'Laiton massif étiré',
        de: 'Gezogenes Vollmessing',
      },
      treatment: {
        it: 'Satinatura meccanica calibrata',
        en: 'Calibrated mechanical satin finish',
        fr: 'Satinage mécanique calibré',
        de: 'Kalibrierte mechanische Satinierung',
      },
      image: '/images/vela/finishes/02-ottone-satinato.webp',
      colorHex: '#C5A967',
    },
    {
      code: '03',
      name: {
        it: 'Acciaio Inox AISI 316',
        en: 'AISI 316 Stainless Steel',
        fr: 'Acier Inox AISI 316',
        de: 'Edelstahl AISI 316',
      },
      tag: {
        it: 'Marine Grade',
        en: 'Marine Grade',
        fr: 'Qualité Marine',
        de: 'Marinequalität',
      },
      desc: {
        it: 'Purezza metallica inossidabile resistente a salsedine e umidità elevata. Perfetto per suite d\'hotel, ambienti wellness e residenze contemporanee.',
        en: 'Stainless metallic purity resistant to salinity and high humidity. Perfect for hotel suites, wellness environments, and modern residences.',
        fr: 'Pureté métallique inoxydable résistante aux embruns et à l\'humidité élevée. Parfait pour suites d\'hôtel, espaces bien-être et résidences contemporaines.',
        de: 'Rostfreie metallische Reinheit, beständig gegen Salzluft und hohe Luftfeuchtigkeit. Ideal für Hotelsuiten, Wellnessbereiche und moderne Residenzen.',
      },
      material: {
        it: 'Acciaio inossidabile austenitico AISI 316',
        en: 'Austenitic stainless steel AISI 316',
        fr: 'Acier inoxydable austénitique AISI 316',
        de: 'Austenitischer Edelstahl AISI 316',
      },
      treatment: {
        it: 'Microsatinatura a nastro continuo',
        en: 'Continuous-belt micro-satin finish',
        fr: 'Microsatinage à bande continue',
        de: 'Mikrosatinierung mit Endlosband',
      },
      image: '/images/vela/finishes/03-acciaio-inox.webp',
      colorHex: '#B2B4B8',
    },
    {
      code: '04',
      name: {
        it: 'Canna di Fucile (Dark Bronze)',
        en: 'Gunmetal (Dark Bronze)',
        fr: 'Canon de Fusil (Bronze Sombre)',
        de: 'Rotguss (Dunkelbronze)',
      },
      tag: {
        it: 'Brunitura Profonda',
        en: 'Deep Burnishing',
        fr: 'Brunissage Profond',
        de: 'Tiefe Brünierung',
      },
      desc: {
        it: 'Profondità cromatica antracite con sottotono bronzato scuro. Dialoga perfettamente con telai minimali, porte grafite e laccature scure.',
        en: 'Anthracite chromatic depth with dark bronze undertones. Dialogues harmoniously with minimal frames, graphite doors, and dark lacquers.',
        fr: 'Profondeur chromatique anthracite aux sous-tons de bronze sombre. Dialogue harmonieusement avec châssis minimaux, portes graphite et laques sombres.',
        de: 'Anthrazitfarbene Farbtiefe mit dunklem Bronze-Unterton. Harmoniert perfekt mit minimalistischen Zargen, Graphittüren und dunklen Lacken.',
      },
      material: {
        it: 'Bronzo trattato a caldo',
        en: 'Heat-treated bronze',
        fr: 'Bronze traité à chaud',
        de: 'Warmbehandelte Bronze',
      },
      treatment: {
        it: 'Brunitura chimica a spessore controllato',
        en: 'Controlled-thickness chemical burnishing',
        fr: 'Brunissage chimique à épaisseur contrôlée',
        de: 'Chemische Brünierung mit kontrollierter Schichtdicke',
      },
      image: '/images/vela/finishes/04-canna-fucile.webp',
      colorHex: '#4A423B',
    },
    {
      code: '05',
      name: {
        it: 'Nero Opaco Soft-Touch',
        en: 'Matte Black Soft-Touch',
        fr: 'Noir Mat Toucher Doux',
        de: 'Mattschwarz Soft-Touch',
      },
      tag: {
        it: 'High Performance',
        en: 'High Performance',
        fr: 'Haute Performance',
        de: 'Hochleistung',
      },
      desc: {
        it: 'Finitura tecnica antiriflesso a sensazione vellutata al tatto. Trattamento ad elevatissima durezza superficiale anti-impronta e antigraffio.',
        en: 'Anti-reflective technical finish with a velvety tactile feel. High surface hardness treatment with anti-fingerprint and scratch-resistant protection.',
        fr: 'Finition technique antireflet au toucher velouté. Traitement à très haute dureté superficielle anti-traces et anti-rayures.',
        de: 'Antireflex-Oberfläche mit samtigem Griffgefühl. Extrem hohe Oberflächenhärte mit Anti-Fingerprint- und Kratzschutz.',
      },
      material: {
        it: 'Lega metallica speciale',
        en: 'Special metal alloy',
        fr: 'Alliage métallique spécial',
        de: 'Spezielle Metalllegierung',
      },
      treatment: {
        it: 'Anodizzazione profonda + rivestimento soft-touch',
        en: 'Deep anodization + soft-touch coating',
        fr: 'Anodisation profonde + revêtement soft-touch',
        de: 'Tiefenanodisierung + Soft-Touch-Beschichtung',
      },
      image: '/images/vela/finishes/05-nero-opaco.webp',
      colorHex: '#1E1E1E',
    },
    {
      code: '06',
      name: {
        it: 'Nichel Satinato Champagne',
        en: 'Satin Champagne Nickel',
        fr: 'Nickel Satiné Champagne',
        de: 'Champagner-Nickel Satiniert',
      },
      tag: {
        it: 'Eleganza Senza Tempo',
        en: 'Timeless Elegance',
        fr: 'Élégance Intemporelle',
        de: 'Zeitlose Eleganz',
      },
      desc: {
        it: 'Tonalità metallica chiara e morbida con riflessi champagne satinati. Un classico dell\'architettura d\'interni milanese ad altissima versatilità.',
        en: 'Light and soft metallic shade with satin champagne reflections. A classic of Milanese interior architecture with exceptional versatility.',
        fr: 'Tonalité métallique claire et douce aux reflets champagne satinés. Un classique de l\'architecture d\'intérieur milanaise à très haute polyvalence.',
        de: 'Heller, sanfter Metallton mit satinierten Champagnerreflexen. Ein Klassiker der Mailänder Innenarchitektur mit hoher Vielseitigkeit.',
      },
      material: {
        it: 'Metallo forgiato nobile',
        en: 'Noble forged metal',
        fr: 'Métal forgé noble',
        de: 'Edel geschmiedetes Metall',
      },
      treatment: {
        it: 'Bagno galvanico al nichel + satinatura serica',
        en: 'Galvanic nickel bath + silky satin finish',
        fr: 'Bain galvanique au nickel + satinage soyeux',
        de: 'Galvanisches Nickelbad + seidige Satinierung',
      },
      image: '/images/vela/finishes/06-nichel-satinato.webp',
      colorHex: '#C4BEB4',
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#FDFDFD] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <VelaCategoryNav activeCategory="maniglie" />

      {/* Hero Category Banner */}
      <section className="relative h-[65vh] min-h-[500px] max-h-[660px] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <Image
          src="/images/vela/handles/italian-hotel-lock-and-oak-elegance.webp"
          alt={t('handlesHeroTitle')}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/60 z-10" />

        <div className="relative z-20 container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-zinc-300 mb-3 block font-mono font-medium">
            {t('handlesHeroTag')}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4 leading-tight">
            {t('handlesHeroTitle')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed mb-6">
            {t('handlesHeroSubtitle')}
          </p>

          {/* Quick Anchor Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-2.5">
            <a
              href="#ferramenta-architetturale"
              className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-xs text-[11px] uppercase tracking-wider text-white border border-white/20 transition-colors"
            >
              {t('handlesAnchorHardware', { count: hardware.length })}
            </a>
            <a
              href="#guida-capitolato"
              className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-xs text-[11px] uppercase tracking-wider text-white border border-white/20 transition-colors"
            >
              {t('handlesAnchorMatrix')}
            </a>
            <a
              href="#maniglie-disponibili"
              className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-xs text-[11px] uppercase tracking-wider text-white border border-white/20 transition-colors"
            >
              {t('handlesAnchorHandles')}
            </a>
            <a
              href="#finiture-metalli"
              className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-xs text-[11px] uppercase tracking-wider text-white border border-white/20 transition-colors"
            >
              {t('handlesAnchorFinishes')}
            </a>
          </div>
        </div>
      </section>

      {/* Editorial Overview Section */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <span className="text-xs uppercase tracking-widest text-zinc-400 mb-4 block font-medium">
            {t('handlesEditorialTag')}
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 leading-tight">
            {t('handlesEditorialTitle')}
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-10">
            {t('handlesEditorialDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?inquiry=contract&category=ferramenta"
              className="px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
            >
              {t('handlesRequestCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* 1. Architectural Hardware & Smart Locks Section */}
      <VelaHardwareSection hardware={hardware} locale={locale} />

      {/* 2. Architect Configuration Matrix & Specifications */}
      <VelaHardwareTable locale={locale} />

      {/* 3. Concept Handles & SVG Sheets Section */}
      <div className="container mx-auto px-6 lg:px-12">
        <VelaHandlesSection
          handles={conceptHandles}
          locale={locale}
          productCode="LINEA VELA"
          productName={t('brandTag')}
        />
      </div>

      {/* 4. Handles Grid: 2 columns on desktop */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-2 block font-medium">
              {t('handlesModelsTag')}
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">
              {t('handlesModelsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {handles.map((item) => {
              const name = resolveLocalizedText(item.name, locale);
              const material = resolveLocalizedText(item.material, locale);
              const description = resolveLocalizedText(item.description, locale);

              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-between transition-colors duration-200 ease-[var(--ease-out)] hover:border-zinc-400 dark:hover:border-zinc-600"
                >
                  {/* Photo canvas */}
                  <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden mb-6 border border-zinc-200/60 dark:border-zinc-800/60">
                    <Image
                      src={item.image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-[1.03] transition-transform duration-500 ease-[var(--ease-out)]"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/85 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-widest text-zinc-700 dark:text-zinc-300 font-semibold border border-zinc-200/50 dark:border-zinc-800/50">
                      {item.type === 'lever' && t('handlesTypeLever')}
                      {item.type === 'pull' && t('handlesTypePull')}
                      {item.type === 'recessed' && t('handlesTypeRecessed')}
                      {item.type === 'hardware' && t('handlesTypeHardware')}
                    </div>
                  </div>

                  {/* Editorial Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-light text-zinc-900 dark:text-zinc-100 mb-2">
                        {name}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                        {material}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {description}
                    </p>

                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-2 text-xs">
                      <div className="text-zinc-500">
                        <strong className="text-zinc-700 dark:text-zinc-300 font-medium uppercase tracking-wider">
                          {t('handlesApplication')}{' '}
                        </strong>
                        {item.compatibility}
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.finishes.map((fin, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                          >
                            {fin}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/contact?inquiry=sales&handle=${encodeURIComponent(item.slug)}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-900 dark:text-zinc-100 hover:opacity-75 transition-opacity"
                      >
                        <span>{t('handlesRequestDatasheetQuote')}</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials & Finishes Palette Section */}
      <section id="finiture-metalli" className="scroll-mt-20 py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-3 block font-medium">
              {t('finishesPaletteTag')}
            </span>
            <h2 className="text-3xl font-light tracking-tight text-white leading-tight mb-4">
              {t('finishesPaletteTitle')}
            </h2>
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
              {t('finishesPaletteDesc')}
            </p>
          </div>

          {/* 3 Cards per Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finishes.map((f) => {
              const fName = resolveLocalizedText(f.name, locale);
              const fTag = resolveLocalizedText(f.tag, locale);
              const fDesc = resolveLocalizedText(f.desc, locale);
              const fMaterial = resolveLocalizedText(f.material, locale);
              const fTreatment = resolveLocalizedText(f.treatment, locale);

              return (
                <div
                  key={f.code}
                  className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors duration-200 ease-[var(--ease-out)] flex flex-col overflow-hidden"
                >
                  {/* 4:3 Aspect Ratio Image Canvas */}
                  <div className="relative aspect-[4/3] w-full bg-zinc-950 overflow-hidden border-b border-zinc-800">
                    <Image
                      src={f.image}
                      alt={`${fName} — ${fTag}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-[var(--ease-out)]"
                    />
                    {/* Code Tag Top-Left */}
                    <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 border border-white/15">
                      {f.code}
                    </div>
                    {/* Category Pill Top-Right */}
                    <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-xs text-zinc-300 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-white/15">
                      {fTag}
                    </div>
                  </div>

                  {/* Editorial Spec Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full inline-block border border-white/20 shrink-0"
                          style={{ backgroundColor: f.colorHex }}
                        />
                        <h3 className="text-lg font-light text-white tracking-tight">
                          {fName}
                        </h3>
                      </div>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {fDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-zinc-800/80 space-y-1.5 text-[11px] font-mono">
                      <div className="flex justify-between items-baseline text-zinc-400">
                        <span className="text-zinc-500 uppercase font-sans text-[10px] tracking-wider">
                          {t('finishesBase')}
                        </span>
                        <span className="text-right">{fMaterial}</span>
                      </div>
                      <div className="flex justify-between items-baseline text-zinc-400">
                        <span className="text-zinc-500 uppercase font-sans text-[10px] tracking-wider">
                          {t('finishesTreatment')}
                        </span>
                        <span className="text-zinc-200 text-right">{fTreatment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            {t('handlesSampleBoxTitle')}
          </h2>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-10">
            {t('handlesSampleBoxDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?inquiry=contract&item=sample-box-maniglie"
              className="px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs sm:text-sm uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
            >
              {t('handlesSampleBoxCta')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
