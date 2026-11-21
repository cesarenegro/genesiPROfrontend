import { Locale, LocalizedText, resolveLocalizedText } from '@/lib/vela';

interface Props {
  locale: Locale;
}

interface DoorConfiguration {
  doorType: LocalizedText;
  badge: LocalizedText;
  lock: string;
  lockPdf: string | null;
  hinges: string;
  hingesPdf: string | null;
  smartAccess: string;
  handle: string;
  advantages: LocalizedText;
}

export default function VelaHardwareTable({ locale }: Props) {
  const tableHeaders = {
    tag: {
      it: 'Capitolati & Ingegnerizzazione VELA',
      en: 'VELA Specifications & Engineering',
      fr: 'Prescriptions & Ingénierie VELA',
      de: 'VELA Ausschreibung & Konstruktion',
    },
    title: {
      it: 'Matrice di Configurazione per Progettisti',
      en: 'Architect Configuration Matrix',
      fr: 'Matrice de Configuration pour Architectes',
      de: 'Konfigurationsmatrix für Planer',
    },
    desc: {
      it: 'Consigli di abbinamento tra tipologia di porta, serrature, cerniere a scomparsa e controllo accessi per garantire complanarità, silenziosità e durata certificata.',
      en: 'Curated pairings between door typologies, locks, concealed hinges, and smart access systems ensuring flush aesthetics, silent acoustics, and certified durability.',
      fr: 'Recommandations d\'associations entre types de portes, serrures, charnières invisibles et contrôle d\'accès garantissant affleurement, silence et longévité certifiée.',
      de: 'Empfohlene Kombinationen von Türtypen, Schlössern, verdeckten Bändern und Zutrittskontrolle für Bündigkeit, Ruhe und geprüfte Langlebigkeit.',
    },
    thDoor: { it: 'Tipologia Porta', en: 'Door Typology', fr: 'Typologie de Porte', de: 'Türtyp' },
    thLock: { it: 'Serratura Consigliata', en: 'Recommended Lock', fr: 'Serrure Recommandée', de: 'Empfohlenes Schloss' },
    thHinges: { it: 'Cerniere a Scomparsa', en: 'Concealed Hinges', fr: 'Charnières Invisibles', de: 'Verdeckte Bänder' },
    thAccess: { it: 'Controllo Accessi', en: 'Access Control', fr: 'Contrôle d\'Accès', de: 'Zutrittskontrolle' },
    thHandle: { it: 'Maniglia / Presa', en: 'Handle / Grip', fr: 'Poignée / Tirant', de: 'Griff / Stoßgriff' },
    thAdvantage: { it: 'Vantaggio Architettonico', en: 'Architectural Advantage', fr: 'Avantage Architectural', de: 'Architektonischer Vorteil' },
  };

  const configurations: DoorConfiguration[] = [
    {
      doorType: {
        it: 'Porta Rasomuro Complanare Minimal (Spessore 44–50 mm)',
        en: 'Minimal Flush-to-Wall Door (Thickness 44–50 mm)',
        fr: 'Porte Affleurante Minimaliste (Épaisseur 44–50 mm)',
        de: 'Wandbündige Minimal-Innentür (Stärke 44–50 mm)',
      },
      badge: {
        it: 'Residenziale Top',
        en: 'Premium Residential',
        fr: 'Résidentiel Haut de Gamme',
        de: 'Premium Wohnbereich',
      },
      lock: 'AGB Polaris 2XT (Magnetica)',
      lockPdf: '/documents/technical-sheets/Scheda_Tecnica_AGB_Polaris_2XT.pdf',
      hinges: 'Simonswerk TECTUS TE 340 3D (80 kg)',
      hingesPdf: '/documents/technical-sheets/Scheda_Tecnica_Simonswerk_TECTUS_TE_340_3D.pdf',
      smartAccess: 'ekey dLine / SimonsVoss AX',
      handle: 'Olivari Lama / Chevron / Gola Filo',
      advantages: {
        it: 'Scrocco completamente a scomparsa ad anta aperta; regolazione millimetrica 3D per complanarità rigorosa.',
        en: 'Fully retracted magnetic latch when open; 3D millimetric adjustment for absolute flush alignment.',
        fr: 'Pêne magnétique entièrement escamoté à l\'ouverture ; réglage 3D millimétrique pour un affleurement rigoureux.',
        de: 'Vollkommen eingezogene Schlossfalle bei offener Tür; 3D-Justierung für exakte Wandbündigkeit.',
      },
    },
    {
      doorType: {
        it: 'Porta Battente Pesante & Boiserie Massello (fino a 200 kg)',
        en: 'Heavy Flush Door & Boiserie Panelling (up to 200 kg)',
        fr: 'Porte Battante Lourde & Boiserie Massive (jusqu\'à 200 kg)',
        de: 'Schwere Drehtür & Massivholz-Boiserie (bis 200 kg)',
      },
      badge: {
        it: 'Strutture Monumentali',
        en: 'Monumental Structures',
        fr: 'Structures Monumentales',
        de: 'Monumentale Portale',
      },
      lock: 'ISEO Multiblindo eMotion (Multipunto)',
      lockPdf: '/documents/technical-sheets/Scheda_Tecnica_ISEO_Multiblindo_eMotion.pdf',
      hinges: 'Simonswerk TECTUS TE 540 3D (200 kg)',
      hingesPdf: '/documents/technical-sheets/Scheda_Tecnica_Simonswerk_TECTUS_TE_540_3D.pdf',
      smartAccess: 'ISEO Aries Smart / Multiblindo Motorizzato',
      handle: 'Formani ONE / Maniglione Architetturale',
      advantages: {
        it: 'Portata certificata su 2 cerniere per ante alte fino a 320 cm; catenacci multipunto motorizzati anti-intrusione.',
        en: 'Certified 200 kg load on 2 hinges for leaves up to 320 cm height; motorized multipoint bolts.',
        fr: 'Charge certifiée 200 kg sur 2 charnières pour vantaux jusqu\'à 320 cm ; pênes motorisés anti-intrusion.',
        de: 'Zertifizierte 200 kg Tragkraft auf 2 Bändern bis 320 cm Höhe; motorisierte Mehrfachverriegelung.',
      },
    },
    {
      doorType: {
        it: 'Camera & Suite Hotel 5 Stelle Lusso (Hospitality)',
        en: '5-Star Luxury Hotel Room & Suite (Hospitality)',
        fr: 'Chambre & Suite Hôtel 5 Étoiles (Hôtellerie)',
        de: '5-Sterne Luxushotel Zimmer & Suite (Hospitality)',
      },
      badge: {
        it: 'Hospitality 5★',
        en: 'Hospitality 5★',
        fr: 'Hôtellerie 5★',
        de: 'Hotellerie 5★',
      },
      lock: 'ASSA ABLOY VingCard Essence (RFID ZigBee)',
      lockPdf: '/documents/technical-sheets/Scheda_Tecnica_VingCard_Essence.pdf',
      hinges: 'Simonswerk TECTUS TE 340 3D (Tagliafuoco/Acustica)',
      hingesPdf: '/documents/technical-sheets/Scheda_Tecnica_Simonswerk_TECTUS_TE_340_3D.pdf',
      smartAccess: 'VingCard Mobile Access (BLE / Apple Wallet)',
      handle: 'Maniglia coordinata VingCard / VELA Custom',
      advantages: {
        it: 'Elettronica completamente annegata nell\'anta; solo la ghiera rotonda RFID è visibile. Certificazione acustica 42 dB.',
        en: 'Electronics entirely concealed in door leaf; only mini RFID reader bezel visible. 42 dB acoustic certification.',
        fr: 'Électronique totalement intégrée dans le vantail ; seule la rosace RFID est visible. Isolation acoustique 42 dB.',
        de: 'Vollständig im Türblatt integrierte Elektronik; nur minimalistischer RFID-Ring sichtbar. 42 dB Schallschutz.',
      },
    },
    {
      doorType: {
        it: 'Porta a Bilico Pivot Scultorea Senza Maniglia Apparente',
        en: 'Sculptural Pivot Door without Visible Hardware',
        fr: 'Porte Pivot Sculpturale Sans Garniture Apparente',
        de: 'Skulpturale Pivot-Tür Ohne Sichtbare Beschläge',
      },
      badge: {
        it: 'Pivot & Minimal',
        en: 'Pivot & Minimal',
        fr: 'Pivot & Minimal',
        de: 'Pivot & Minimal',
      },
      lock: 'Chiusura Magnetica No-Ha 2.0 (Senza Foro Chiave)',
      lockPdf: '/documents/technical-sheets/Scheda_Tecnica_AGB_Polaris_2XT.pdf',
      hinges: 'Perno Pivot a Pavimento / FritsJurgens',
      hingesPdf: null,
      smartAccess: 'ekey dLine su maniglione verticale incassato',
      handle: 'Maniglione verticale a tutta altezza o Presa a Gola',
      advantages: {
        it: 'Nessun foro maniglia o serratura a vista sull\'anta; apertura intuitiva con lieve trazione o spinta.',
        en: 'No visible keyhole or lever on the leaf; push-pull intuitive opening via magnetic retention.',
        fr: 'Aucun perçage ni serrure apparente sur le vantail ; manœuvre intuitive par poussée ou traction douce.',
        de: 'Keine sichtbaren Schlüssellöcher oder Drücker; intuitive Öffnung durch sanftes Ziehen oder Drücken.',
      },
    },
    {
      doorType: {
        it: 'Accesso Residenziale Smart Integrato con Domotica',
        en: 'Smart Home Integrated Residential Entry',
        fr: 'Accès Résidentiel Connecté Domotique',
        de: 'Smarter Wohnungszugang mit Hausautomation',
      },
      badge: {
        it: 'Smart Living',
        en: 'Smart Living',
        fr: 'Smart Living',
        de: 'Smart Living',
      },
      lock: 'AGB Polaris 2XT + tedee PRO (CNC Alluminio)',
      lockPdf: '/documents/technical-sheets/Scheda_Tecnica_tedee_PRO.pdf',
      hinges: 'Simonswerk TECTUS TE 340 3D',
      hingesPdf: '/documents/technical-sheets/Scheda_Tecnica_Simonswerk_TECTUS_TE_340_3D.pdf',
      smartAccess: 'Apple HomeKit, Matter, Home Assistant, BLE 5.0',
      handle: 'Olivari Lama / Olivari Link',
      advantages: {
        it: 'Il motore per serrature più compatto al mondo (ø45mm); integrazione immediata nei principali ecosistemi smart home.',
        en: 'Smallest smart lock cylinder in the world (ø45mm CNC); seamless Apple HomeKit and Matter integration.',
        fr: 'Moteur de serrure le plus compact au monde (ø45mm) ; intégration native Apple HomeKit et Matter.',
        de: 'Kompaktester Motorschließzylinder der Welt (ø45mm); nahtlose Integration in Apple HomeKit und Matter.',
      },
    },
  ];

  return (
    <section id="guida-capitolato" className="scroll-mt-20 py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium block mb-2 font-mono">
            {tableHeaders.tag[locale] || tableHeaders.tag.en}
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            {tableHeaders.title[locale] || tableHeaders.title.en}
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            {tableHeaders.desc[locale] || tableHeaders.desc.en}
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs mb-10">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 uppercase tracking-widest font-mono text-[10px]">
                <th className="py-4 px-6 font-semibold">{tableHeaders.thDoor[locale] || tableHeaders.thDoor.en}</th>
                <th className="py-4 px-6 font-semibold">{tableHeaders.thLock[locale] || tableHeaders.thLock.en}</th>
                <th className="py-4 px-6 font-semibold">{tableHeaders.thHinges[locale] || tableHeaders.thHinges.en}</th>
                <th className="py-4 px-6 font-semibold">{tableHeaders.thAccess[locale] || tableHeaders.thAccess.en}</th>
                <th className="py-4 px-6 font-semibold">{tableHeaders.thHandle[locale] || tableHeaders.thHandle.en}</th>
                <th className="py-4 px-6 font-semibold">{tableHeaders.thAdvantage[locale] || tableHeaders.thAdvantage.en}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
              {configurations.map((c, i) => (
                <tr key={i} className="hover:bg-zinc-50/70 dark:hover:bg-zinc-800/30 transition-colors">
                  {/* Tipologia Porta */}
                  <td className="py-5 px-6 font-medium text-zinc-900 dark:text-zinc-100 align-top">
                    <span className="inline-block px-2 py-0.5 mb-1.5 text-[9px] uppercase tracking-wider font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      {resolveLocalizedText(c.badge, locale)}
                    </span>
                    <p className="text-xs font-semibold leading-snug">
                      {resolveLocalizedText(c.doorType, locale)}
                    </p>
                  </td>

                  {/* Serratura */}
                  <td className="py-5 px-6 align-top">
                    <p className="text-xs text-zinc-800 dark:text-zinc-200 font-mono tabular-nums break-words [overflow-wrap:anywhere]">
                      {c.lock}
                    </p>
                    {c.lockPdf && (
                      <a
                        href={c.lockPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] text-amber-600 dark:text-amber-400 hover:underline mt-1 font-mono uppercase tracking-wider"
                      >
                        PDF Datasheet ↗
                      </a>
                    )}
                  </td>

                  {/* Cerniere */}
                  <td className="py-5 px-6 align-top">
                    <p className="text-xs text-zinc-800 dark:text-zinc-200 font-mono tabular-nums break-words [overflow-wrap:anywhere]">
                      {c.hinges}
                    </p>
                    {c.hingesPdf && (
                      <a
                        href={c.hingesPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] text-amber-600 dark:text-amber-400 hover:underline mt-1 font-mono uppercase tracking-wider"
                      >
                        PDF Datasheet ↗
                      </a>
                    )}
                  </td>

                  {/* Smart Access */}
                  <td className="py-5 px-6 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] align-top">
                    {c.smartAccess}
                  </td>

                  {/* Maniglia */}
                  <td className="py-5 px-6 text-zinc-700 dark:text-zinc-300 text-xs align-top">
                    {c.handle}
                  </td>

                  {/* Vantaggi */}
                  <td className="py-5 px-6 text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed align-top max-w-xs">
                    {resolveLocalizedText(c.advantages, locale)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
