import { Link } from '@/i18n/routing';
import { Locale, LocalizedText, resolveLocalizedText } from '@/lib/vela';

interface Props {
  locale: Locale;
}

interface DoorConfiguration {
  doorType: LocalizedText;
  badge: string;
  lock: string;
  lockPdf: string | null;
  hinges: string;
  hingesPdf: string | null;
  smartAccess: string;
  handle: string;
  advantages: LocalizedText;
}

export default function VelaHardwareTable({ locale }: Props) {
  const configurations: DoorConfiguration[] = [
    {
      doorType: {
        it: 'Porta Rasomuro Complanare Minimal (Spessore 44–50 mm)',
        en: 'Minimal Flush-to-Wall Door (Thickness 44–50 mm)',
      },
      badge: 'Residenziale Top',
      lock: 'AGB Polaris 2XT (Magnetica)',
      lockPdf: '/documents/technical-sheets/Scheda_Tecnica_AGB_Polaris_2XT.pdf',
      hinges: 'Simonswerk TECTUS TE 340 3D (80 kg)',
      hingesPdf: '/documents/technical-sheets/Scheda_Tecnica_Simonswerk_TECTUS_TE_340_3D.pdf',
      smartAccess: 'ekey dLine su maniglia o SimonsVoss AX',
      handle: 'Olivari Lama / Olivari Chevron / Gola Filo',
      advantages: {
        it: 'Scrocco completamente a scomparsa ad anta aperta; regolazione millimetrica 3D per complanarità rigorosa.',
        en: 'Fully retracted magnetic latch when open; 3D millimetric adjustment for absolute flush alignment.',
      },
    },
    {
      doorType: {
        it: 'Porta Battente Pesante & Boiserie Massello (fino a 200 kg)',
        en: 'Heavy Flush Door & Boiserie Panelling (up to 200 kg)',
      },
      badge: 'Strutture Monumentali',
      lock: 'ISEO Multiblindo eMotion (Multipunto)',
      lockPdf: '/documents/technical-sheets/Scheda_Tecnica_ISEO_Multiblindo_eMotion.pdf',
      hinges: 'Simonswerk TECTUS TE 540 3D (200 kg)',
      hingesPdf: '/documents/technical-sheets/Scheda_Tecnica_Simonswerk_TECTUS_TE_540_3D.pdf',
      smartAccess: 'ISEO Aries Smart / Multiblindo Motorizzato',
      handle: 'Formani ONE / Maniglione Architetturale',
      advantages: {
        it: 'Portata certificata su 2 cerniere per ante alte fino a 320 cm; catenacci multipunto motorizzati anti-intrusione.',
        en: 'Certified 200 kg load on 2 hinges for leaves up to 320 cm height; motorized multipoint bolts.',
      },
    },
    {
      doorType: {
        it: 'Camera & Suite Hotel 5 Stelle Lusso (Hospitality)',
        en: '5-Star Luxury Hotel Room & Suite (Hospitality)',
      },
      badge: 'Hospitality & Contract',
      lock: 'ASSA ABLOY VingCard Essence / dormakaba Saflok',
      lockPdf: '/documents/technical-sheets/Scheda_Tecnica_VingCard_Essence.pdf',
      hinges: 'AGB Eclipse 3.0 / Simonswerk TE 340 3D',
      hingesPdf: '/documents/technical-sheets/Scheda_Tecnica_AGB_Eclipse_3_0.pdf',
      smartAccess: 'RFID MIFARE / BLE Mobile Key / Apple Wallet',
      handle: 'Olivari Open / Olivari Link',
      advantages: {
        it: 'Lettore RFID integrato a filo (ø30mm) che nasconde l\'elettronica nella porta; certificazione antincendio e PMS hotel.',
        en: 'Concealed RFID reader (ø30mm) with electronic hardware hidden in door leaf; full PMS & fire certification.',
      },
    },
    {
      doorType: {
        it: 'Porta Pivot / Bilico o Senza Maniglia Meccanica',
        en: 'Pivot Door or Handleless Push-Pull',
      },
      badge: 'Minimalismo Assoluto',
      lock: 'AGB Touch (Ritenuta Magnetica Regolabile)',
      lockPdf: '/documents/technical-sheets/Scheda_Tecnica_AGB_Polaris_2XT.pdf',
      hinges: 'Perno Pivot a Pavimento / FritsJurgens',
      hingesPdf: null,
      smartAccess: 'ekey dLine su maniglione verticale incassato',
      handle: 'Maniglione verticale a tutta altezza o Presa a Gola',
      advantages: {
        it: 'Nessun foro maniglia o serratura a vista sull\'anta; apertura intuitiva con lieve trazione o spinta.',
        en: 'No visible keyhole or lever on the leaf; push-pull intuitive opening via magnetic retention.',
      },
    },
    {
      doorType: {
        it: 'Accesso Residenziale Smart Integrato con Domotica',
        en: 'Smart Home Integrated Residential Entry',
      },
      badge: 'Smart Living',
      lock: 'AGB Polaris 2XT + tedee PRO (CNC Alluminio)',
      lockPdf: '/documents/technical-sheets/Scheda_Tecnica_tedee_PRO.pdf',
      hinges: 'Simonswerk TECTUS TE 340 3D',
      hingesPdf: '/documents/technical-sheets/Scheda_Tecnica_Simonswerk_TECTUS_TE_340_3D.pdf',
      smartAccess: 'Apple HomeKit, Matter, Home Assistant, BLE 5.0',
      handle: 'Olivari Lama / Olivari Link',
      advantages: {
        it: 'Il motore per serrature più compatto al mondo (ø45mm); integrazione immediata nei principali ecosistemi smart home.',
        en: 'Smallest smart lock cylinder in the world (ø45mm CNC); seamless Apple HomeKit and Matter integration.',
      },
    },
  ];

  return (
    <section id="guida-capitolato" className="scroll-mt-20 py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium block mb-2 font-mono">
            Capitolati & Ingegnerizzazione VELA
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Matrice di Configurazione per Progettisti
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            Consigli di abbinamento tra tipologia di porta, serrature, cerniere a scomparsa e controllo accessi per garantire complanarità, silenziosità e durata certificata.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs mb-10">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 uppercase tracking-widest font-mono text-[10px]">
                <th className="py-4 px-6 font-semibold">Tipologia Porta</th>
                <th className="py-4 px-6 font-semibold">Serratura Consigliata</th>
                <th className="py-4 px-6 font-semibold">Cerniere a Scomparsa</th>
                <th className="py-4 px-6 font-semibold">Controllo Accessi</th>
                <th className="py-4 px-6 font-semibold">Maniglia / Presa</th>
                <th className="py-4 px-6 font-semibold">Vantaggio Architettonico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
              {configurations.map((c, i) => (
                <tr key={i} className="hover:bg-zinc-50/70 dark:hover:bg-zinc-800/30 transition-colors">
                  {/* Tipologia Porta */}
                  <td className="py-5 px-6 font-medium text-zinc-900 dark:text-zinc-100 align-top">
                    <span className="inline-block px-2 py-0.5 mb-1.5 text-[9px] uppercase tracking-wider font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      {c.badge}
                    </span>
                    <p className="text-xs font-semibold leading-snug">
                      {resolveLocalizedText(c.doorType, locale)}
                    </p>
                  </td>

                  {/* Serratura */}
                  <td className="py-5 px-6 text-zinc-700 dark:text-zinc-300 align-top">
                    <div className="space-y-1">
                      <p className="font-medium text-zinc-900 dark:text-zinc-200">{c.lock}</p>
                      {c.lockPdf && (
                        <a
                          href={c.lockPdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] text-red-600 dark:text-red-400 hover:underline font-mono"
                        >
                          <span>Scheda PDF</span>
                          <span>↓</span>
                        </a>
                      )}
                    </div>
                  </td>

                  {/* Cerniere */}
                  <td className="py-5 px-6 text-zinc-700 dark:text-zinc-300 align-top">
                    <div className="space-y-1">
                      <p className="font-medium text-zinc-900 dark:text-zinc-200">{c.hinges}</p>
                      {c.hingesPdf && (
                        <a
                          href={c.hingesPdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] text-red-600 dark:text-red-400 hover:underline font-mono"
                        >
                          <span>Scheda PDF</span>
                          <span>↓</span>
                        </a>
                      )}
                    </div>
                  </td>

                  {/* Controllo Accessi */}
                  <td className="py-5 px-6 text-zinc-700 dark:text-zinc-300 align-top">
                    <span className="font-mono text-[11px] text-zinc-900 dark:text-zinc-200">
                      {c.smartAccess}
                    </span>
                  </td>

                  {/* Maniglia */}
                  <td className="py-5 px-6 text-zinc-700 dark:text-zinc-300 align-top">
                    <p>{c.handle}</p>
                  </td>

                  {/* Vantaggi */}
                  <td className="py-5 px-6 text-zinc-500 dark:text-zinc-400 align-top max-w-xs leading-relaxed text-[11px]">
                    {resolveLocalizedText(c.advantages, locale)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Technical Dossier Callout Banner */}
        <div className="p-8 bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold">
              Documentazione Ingegneristica Integrata
            </span>
            <h3 className="text-xl md:text-2xl font-light tracking-tight text-white">
              Dossier Tecnico Ferramenta Top di Gamma VELA
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Include quote di fresata, profondità di scasso, raggiature di battuta, schemi di cablaggio e tolleranze dimensionali per il corretto montaggio a regola d'arte.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact?inquiry=contract&dossier=ferramenta-top-di-gamma"
              className="px-6 py-3.5 bg-white text-zinc-950 hover:bg-zinc-100 text-xs uppercase tracking-widest font-semibold transition-colors text-center"
            >
              Richiedi Dossier CAD & Capitolato
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
