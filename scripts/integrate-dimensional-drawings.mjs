import fs from 'fs';
import path from 'path';

const currentVela = JSON.parse(fs.readFileSync('src/data/vela.json', 'utf8'));

// 1. Families definition
const families = [
  {
    id: "residential",
    slug: "porte-interni",
    title: {
      it: "Porte per interni residenziali",
      en: "Residential Interior Doors",
      de: "Innentüren für Wohnbereiche",
      fr: "Portes d'intérieur résidentielles",
      ru: "Межкомнатные двери для резиденций",
      zh: "高端住宅室内门系统",
      id: "Pintu Interior Residensial"
    },
    subtitle: {
      it: "Complanarità, aperture a bilico, sistemi scorrevoli e battenti a tutta altezza.",
      en: "Flush alignment, pivot hinges, sliding systems, and full-height swing doors.",
      de: "Flächenbündigkeit, Pivot-Systeme, Schiebetüren und raumhohe Drehtüren.",
      fr: "Affleurement, pivots, systèmes coulissants et portes battantes toute hauteur.",
      ru: "Компланарность, поворотные механизмы, раздвижные и распашные системы во всю высоту.",
      zh: "平齐无框、轴心旋转、移门与通顶开合系统。",
      id: "Sistem rata dinding, engsel pivot, geser, dan swing setinggi langit-langit."
    },
    heroImage: "/images/vela/residential/vela-door-in-a-calm-italian-interior.webp",
    status: "available",
    count: 10
  },
  {
    id: "hotel",
    slug: "porte-hotel",
    title: {
      it: "Porte per camere di hotel",
      en: "Hotel Room Doors",
      de: "Türen für Hotelzimmer",
      fr: "Portes pour chambres d'hôtel",
      ru: "Двери для гостиничных номеров",
      zh: "高星级酒店客房门系统",
      id: "Pintu Kamar Hotel"
    },
    subtitle: {
      it: "Soluzioni coordinate per l'hospitality di alta gamma con integrazione estetica e tecnologica.",
      en: "Coordinated solutions for high-end hospitality combining aesthetic consistency and engineering.",
      de: "Integrierte Lösungen für die gehobene Hotellerie mit ästhetischer und technischer Präzision.",
      fr: "Solutions coordonnées pour l'hôtellerie de luxe avec intégration esthétique et technologique.",
      ru: "Скоординированные решения для премиального гостиничного сектора.",
      zh: "面向高端酒店工程的协同化建筑开合解决方案。",
      id: "Solusi terintegrasi untuk perhotelan mewah berstandar tinggi."
    },
    heroImage: "/images/vela/hotel/arenaria-oak-hotel-door-diptych.webp",
    status: "available",
    count: 10
  },
  {
    id: "shower",
    slug: "box-doccia",
    title: {
      it: "Box doccia e pareti in cristallo",
      en: "Shower Enclosures & Glass Systems",
      de: "Duschkabinen und Glassysteme",
      fr: "Cabines de douche et systèmes en verre",
      ru: "Душевые ограждения и стеклянные системы",
      zh: "定制淋浴房与高端玻璃系统",
      id: "Box Shower & Partisi Kaca"
    },
    subtitle: {
      it: "Trasparenze architettoniche e profili minimi per l'ambiente bagno contemporaneo.",
      en: "Architectural transparencies and minimal profiles for contemporary bathrooms.",
      de: "Architektonische Transparenz und minimalistische Profile für moderne Bäder.",
      fr: "Transparences architecturales et profilés minimaux pour salles de bain d'exception.",
      ru: "Архитектурная прозрачность и минималистичные профили для ванных комнат.",
      zh: "现代卫浴空间的极简型材与建筑级通透玻璃系统。",
      id: "Transparansi arsitektural dan profil minimalis untuk kamar mandi kontemporer."
    },
    heroImage: "/images/vela/doors/09_STP1.webp",
    status: "available",
    count: 4
  }
];

const drawingLabel = {
  it: "Disegno dimensionale",
  en: "Dimensional drawing",
  de: "Maßzeichnung",
  fr: "Dessin dimensionnel",
  ru: "Чертеж с размерами",
  zh: "尺寸图纸",
  id: "Gambar dimensi"
};

const disclaimerText = {
  it: "Grafica dimensionale di concept per la presentazione dell’ingombro del prodotto sul sito e nel catalogo. Quote nominali di riferimento; profili laterali dichiarati schematicamente ingranditi nelle tavole. Non costituiscono disegni esecutivi né specifiche di produzione.",
  en: "Concept dimensional graphic presenting product space envelope for web and catalogue. Nominal reference dimensions; lateral profiles schematically enlarged in plates. Not intended as shop drawings or manufacturing specifications."
};

// 2. The 10 Residential Products (IN-01 to IN-10)
const residentialProducts = [
  {
    id: "in-01-selva",
    slug: "in-01-selva",
    aliases: ["selva", "quiet-luxury-smoked-oak-pivot-door"],
    familyId: "residential",
    code: "IN-01",
    model: "SELVA",
    name: {
      it: "Porta a Bilico SELVA — Rovere Fumé",
      en: "SELVA Pivot Door — Smoked Oak"
    },
    openingType: "pivot",
    summary: {
      it: "Apertura pivot a bilico scultorea in rovere termotrattato affumicato a forte spessore. Rotazione fluida con perno a scomparsa.",
      en: "Sculptural pivot door in thermal-treated smoked oak. Smooth rotation with concealed pivot mechanism."
    },
    mainImage: "/images/vela/residential/quiet-luxury--smoked-oak-pivot-door.webp",
    images: [
      {
        url: "/images/vela/residential/quiet-luxury--smoked-oak-pivot-door.webp",
        type: "ambient",
        label: { it: "Vista living contemporaneo", en: "Contemporary living view" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/residential/rovere-smoked-oak-door-details.webp",
        type: "detail",
        label: { it: "Dettaglio finitura rovere fumé", en: "Smoked oak finish detail" },
        width: 1536,
        height: 1024
      },
      {
        url: "/images/vela/drawings/IN-01_SELVA.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Apertura a bilico pivot senza cerniere visibili", en: "Pivot rotation without visible hinges" },
      { it: "Finitura rovere termotrattato fumé a poro aperto", en: "Smoked open-pore thermal oak finish" },
      { it: "Complanarità totale con la muratura", en: "Total flush alignment with wall" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/IN-01_SELVA.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "41 mm",
      series: "INTERNI",
      description: "ROVERE FUMÉ | PORTA A PIVOT",
      disclaimer: disclaimerText
    }
  },
  {
    id: "in-02-alba",
    slug: "in-02-alba",
    aliases: ["alba", "alba-ivory-door-detail-diptych"],
    familyId: "residential",
    code: "IN-02",
    model: "ALBA",
    name: {
      it: "Porta Battente Rasomuro ALBA — Laccato Avorio",
      en: "ALBA Flush Door — Ivory Lacquer"
    },
    openingType: "swing",
    summary: {
      it: "Porta battente a filo muro in laccatura avorio caldo. Il pannello si fonde con la muratura creando continuità architettonica.",
      en: "Flush-to-wall swing door in warm ivory lacquer. The leaf blends seamlessly into surrounding walls."
    },
    mainImage: "/images/vela/residential/alba-ivory-door-detail-diptych.webp",
    images: [
      {
        url: "/images/vela/residential/alba-ivory-door-detail-diptych.webp",
        type: "ambient",
        label: { it: "Diptych vista e complanarità", en: "Overview & flush detail" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/residential/warm-ivory-italian-interior-door.webp",
        type: "detail",
        label: { it: "Finitura avorio con fuga d'ombra", en: "Warm ivory shadow gap finish" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/IN-02_ALBA.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Telaio a scomparsa per intonaco o cartongesso", en: "Concealed frame for plaster or drywall" },
      { it: "Laccatura opaca satinata vellutata al tatto", en: "Velvety touch satin matte lacquer" },
      { it: "Serratura magnetica a scatto silenzioso", en: "Silent magnetic latch mechanism" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/IN-02_ALBA.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "41 mm",
      series: "INTERNI",
      description: "LACCATO AVORIO | PORTA BATTENTE",
      disclaimer: disclaimerText
    }
  },
  {
    id: "in-03-righe",
    slug: "in-03-righe",
    aliases: ["righe", "fluted-oak-door-serene-passage"],
    familyId: "residential",
    code: "IN-03",
    model: "RIGHE",
    name: {
      it: "Porta Cannettata RIGHE — Rovere Naturale",
      en: "RIGHE Fluted Door — Natural Oak"
    },
    openingType: "swing",
    summary: {
      it: "Superficie a doghe verticali fresate con precisione nel massello di rovere. Crea un raffinato ritmo di luci e ombre.",
      en: "Vertical slats milled in solid natural oak creating an elegant rhythm of light and shadow."
    },
    mainImage: "/images/vela/residential/fluted-oak-door-serene-passage.webp",
    images: [
      {
        url: "/images/vela/residential/fluted-oak-door-serene-passage.webp",
        type: "ambient",
        label: { it: "Prospetto doghe verticali", en: "Vertical slatted view" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/IN-03_RIGHE.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Fresatura tridimensionale su rovere naturale", en: "3D precision fluting on natural oak" },
      { it: "Presa a gola integrata nella cannettatura", en: "Finger groove aligned with fluting" },
      { it: "Cerniere a scomparsa registrabili 3D", en: "3D adjustable concealed hinges" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/IN-03_RIGHE.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "41 mm",
      series: "INTERNI",
      description: "ROVERE NATURALE | DOGHE VERTICALI",
      disclaimer: disclaimerText
    }
  },
  {
    id: "in-04-terra",
    slug: "in-04-terra",
    aliases: ["terra", "burnt-sienna-double-doors-in-travertine", "terra-door--brass-handles-and-geometric-relief"],
    familyId: "residential",
    code: "IN-04",
    model: "TERRA",
    name: {
      it: "Doppia Porta TERRA — Terracotta & Bassorilievo",
      en: "TERRA Double Door — Terracotta Relief"
    },
    openingType: "swing",
    summary: {
      it: "Configurazione monumentale a doppia anta battente (2 × 800 mm) con finitura terracotta e maniglia in ottone ricavata dal pieno.",
      en: "Stately double door configuration (2 × 800 mm) in terracotta finish with solid brass bar handle."
    },
    mainImage: "/images/vela/residential/burnt-sienna-double-doors-in-travertine.webp",
    images: [
      {
        url: "/images/vela/residential/burnt-sienna-double-doors-in-travertine.webp",
        type: "ambient",
        label: { it: "Doppia anta in portale di travertino", en: "Double door in travertine portal" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/residential/terra-door--brass-handles-and-geometric-relief.webp",
        type: "detail",
        label: { it: "Dettaglio bassorilievo e ottone", en: "Relief and brass detail" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/IN-04_TERRA.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Doppia anta battente simmetrica (2 × 800 mm)", en: "Symmetrical double swing leaves (2 × 800 mm)" },
      { it: "Incisione geometrica a bassorilievo", en: "Geometric architectural relief engraving" },
      { it: "Battuta centrale ermetica con guarnizione acustica", en: "Airtight central meeting stile with seal" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/IN-04_TERRA.png",
      width: 2400,
      height: 1800,
      nominalWidth: "2 × 800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "41 mm",
      series: "INTERNI",
      description: "TERRACOTTA | DOPPIA ANTA (2 × 800 mm)",
      disclaimer: disclaimerText
    }
  },
  {
    id: "in-05-ombra",
    slug: "in-05-ombra",
    aliases: ["ombra", "luxury-reeded-oak-door-with-bronze-inlay"],
    familyId: "residential",
    code: "IN-05",
    model: "OMBRA",
    name: {
      it: "Porta Scanalata OMBRA — Rovere Scuro & Bronzo",
      en: "OMBRA Fluted Door — Dark Oak & Bronze"
    },
    openingType: "swing",
    summary: {
      it: "Ebanisteria sartoriale in rovere scuro scanalato con intarsi metallici in bronzo spazzolato complanari.",
      en: "Artisanal fluted dark oak woodwork with flush brushed bronze metallic inlays."
    },
    mainImage: "/images/vela/residential/luxury-reeded-oak-door-with-bronze-inlay.webp",
    images: [
      {
        url: "/images/vela/residential/luxury-reeded-oak-door-with-bronze-inlay.webp",
        type: "ambient",
        label: { it: "Vista plissé rovere e bronzo", en: "Dark oak and bronze view" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/residential/riga-walnut-door-with-bronze-accents.webp",
        type: "detail",
        label: { it: "Dettaglio dogatura e montante bronzato", en: "Slats and bronze stile detail" },
        width: 1536,
        height: 1024
      },
      {
        url: "/images/vela/drawings/IN-05_OMBRA.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Rovere tinto scuro con scanalature ritmate", en: "Dark stained oak with rhythmic grooves" },
      { it: "Filettatura metallica incassata centesimale", en: "Centisimal flush embedded metal inlay" },
      { it: "Serratura silenziosa con chiave magnetica", en: "Silent magnetic keylock" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/IN-05_OMBRA.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "41 mm",
      series: "INTERNI",
      description: "ROVERE SCURO | SCANALATO",
      disclaimer: disclaimerText
    }
  },
  {
    id: "in-06-quadro",
    slug: "in-06-quadro",
    aliases: ["quadro", "vela-door-in-a-calm-italian-interior"],
    familyId: "residential",
    code: "IN-06",
    model: "QUADRO",
    name: {
      it: "Porta Battente QUADRO — Rovere Chiaro",
      en: "QUADRO Interior Door — Light Oak"
    },
    openingType: "swing",
    summary: {
      it: "Rovere chiaro biondo a poro aperto con riquadratura geometrica. Armonia discreta per ambienti living sereni.",
      en: "Light open-pore blonde oak with geometric proportion. Understated harmony for living interiors."
    },
    mainImage: "/images/vela/residential/vela-door-in-a-calm-italian-interior.webp",
    images: [
      {
        url: "/images/vela/residential/vela-door-in-a-calm-italian-interior.webp",
        type: "ambient",
        label: { it: "Ambiente living italiano", en: "Italian living room perspective" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/IN-06_QUADRO.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Spessore anta 41 mm con nucleo acustico", en: "41 mm thick leaf with acoustic core" },
      { it: "Rovere naturale trattato ad acqua opaco", en: "Water-based matte natural oak" },
      { it: "Cerniere a scomparsa registrabili su 3 assi", en: "Concealed 3D adjustable hinges" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/IN-06_QUADRO.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "41 mm",
      series: "INTERNI",
      description: "ROVERE CHIARO | RIQUADRATURA A QUADRI",
      disclaimer: disclaimerText
    }
  },
  {
    id: "in-07-metallo",
    slug: "in-07-metallo",
    aliases: ["metallo", "warm-bronze-door-modern-elegance", "graphite-pivot-door-with-brass-detail"],
    familyId: "residential",
    code: "IN-07",
    model: "METALLO",
    name: {
      it: "Porta a Bilico METALLO — Bronzo Satinato",
      en: "METALLO Pivot Door — Satin Bronze"
    },
    openingType: "pivot",
    summary: {
      it: "Apertura a bilico pivot con finitura metallica cangiante a effetto bronzo liquido. Riflessi preziosi e rotazione perfetta.",
      en: "Pivot rotation with hand-applied liquid bronze metallic surface. Subtle shifting light reflections."
    },
    mainImage: "/images/vela/residential/warm-bronze-door-modern-elegance.webp",
    images: [
      {
        url: "/images/vela/residential/warm-bronze-door-modern-elegance.webp",
        type: "ambient",
        label: { it: "Finitura bronzo liquido in luce radente", en: "Liquid bronze metallic sheen" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/residential/graphite-pivot-door-with-brass-detail.webp",
        type: "detail",
        label: { it: "Variante grafite con inserto ottone", en: "Graphite and brass variant" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/IN-07_METALLO.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Finitura artigianale a polvere di bronzo", en: "Real bronze powder hand-finished coat" },
      { it: "Perno a bilico incassato a filo pavimento", en: "Floor-flush concealed pivot bearing" },
      { it: "Complanarità assoluta push-pull", en: "Complete push-pull flush closure" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/IN-07_METALLO.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "41 mm",
      series: "INTERNI",
      description: "BRONZO SATINATO | PORTA A PIVOT",
      disclaimer: disclaimerText
    }
  },
  {
    id: "in-08-cristallo",
    slug: "in-08-cristallo",
    aliases: ["cristallo", "satin-bronze-reeded-glass-door"],
    familyId: "residential",
    code: "IN-08",
    model: "CRISTALLO",
    name: {
      it: "Porta Vetro CRISTALLO — Cannettato & Bronzo",
      en: "CRISTALLO Glass Door — Reeded & Bronze"
    },
    openingType: "sliding",
    summary: {
      it: "Vetro cannettato extrachiaro con telaio strutturale sottile in alluminio finitura bronzo satinato. Diffonde la luce naturale.",
      en: "Extra-clear reeded fluted glass with slender satin bronze aluminum frame. Diffuses daylight while preserving privacy."
    },
    mainImage: "/images/vela/residential/satin-bronze-reeded-glass-door.webp",
    images: [
      {
        url: "/images/vela/residential/satin-bronze-reeded-glass-door.webp",
        type: "ambient",
        label: { it: "Trasparenza cannettata e telaio bronzo", en: "Reeded glass and bronze frame" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/IN-08_CRISTALLO.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Vetro stratificato di sicurezza cannettato", en: "Laminated reeded safety glass" },
      { it: "Profilo perimetrale minimale in alluminio", en: "Ultra-slim perimeter aluminum profile" },
      { it: "Maniglione a tutta altezza integrato", en: "Full-height integrated pull handle" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/IN-08_CRISTALLO.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "41 mm",
      series: "INTERNI",
      description: "VETRO CANNELLETTATO | TELAIO BRONZO",
      disclaimer: disclaimerText
    }
  },
  {
    id: "in-09-seta",
    slug: "in-09-seta",
    aliases: ["seta", "elegant-warm-white-pocket-door"],
    familyId: "residential",
    code: "IN-09",
    model: "SETA",
    name: {
      it: "Porta Scorrevole SETA — Laccato Bianco",
      en: "SETA Pocket Sliding Door — White Lacquer"
    },
    openingType: "sliding",
    summary: {
      it: "Sistema scorrevole a scomparsa nel controtelaio. L'anta laccata bianco seta svanisce completamente all'interno della muratura.",
      en: "Concealed pocket sliding door. The silk white lacquered leaf vanishes completely into the wall."
    },
    mainImage: "/images/vela/residential/elegant-warm-white-pocket-door.webp",
    images: [
      {
        url: "/images/vela/residential/elegant-warm-white-pocket-door.webp",
        type: "ambient",
        label: { it: "Passaggio scorrevole a scomparsa", en: "Pocket sliding hallway view" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/IN-09_SETA.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Scorrimento ammortizzato soft-close silenzioso", en: "Silent soft-close dampened sliding track" },
      { it: "Assenza totale di binario o inciampi a terra", en: "No floor rail for continuous flooring" },
      { it: "Vaschetta di trascinamento a filo pannello", en: "Flush recessed edge pull" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/IN-09_SETA.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "41 mm",
      series: "INTERNI",
      description: "LACCATO BIANCO | PORTA SCORREVOLE",
      disclaimer: disclaimerText
    }
  },
  {
    id: "in-10-bruma",
    slug: "in-10-bruma",
    aliases: ["bruma", "bruma-greige-pivot-door-detail-diptych"],
    familyId: "residential",
    code: "IN-10",
    model: "BRUMA",
    name: {
      it: "Porta a Bilico BRUMA — Greige con Presa Integrata",
      en: "BRUMA Pivot Door — Greige with Integrated Grip"
    },
    openingType: "pivot",
    summary: {
      it: "Apertura pivot fluida in laccatura satinata greige con presa a gola ergonomica scavata a filo. Proporzioni ampie e silenziose.",
      en: "Smooth pivot opening in satin greige lacquer with flush integrated grip. Stately proportions."
    },
    mainImage: "/images/vela/residential/bruma-greige-pivot-door-detail-diptych.webp",
    images: [
      {
        url: "/images/vela/residential/bruma-greige-pivot-door-detail-diptych.webp",
        type: "ambient",
        label: { it: "Diptych anta e dettaglio bilico", en: "Overview and pivot diptych" },
        width: 1536,
        height: 1024
      },
      {
        url: "/images/vela/residential/warm-greige-pivot-door-details.webp",
        type: "detail",
        label: { it: "Dettaglio perno a soffitto a scomparsa", en: "Concealed ceiling pivot detail" },
        width: 1536,
        height: 1024
      },
      {
        url: "/images/vela/drawings/IN-10_BRUMA.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Rotazione pivot bidirezionale con arresto a 90°", en: "Bidirectional pivot with 90° soft stop" },
      { it: "Laccatura satinata anti-impronta greige", en: "Anti-fingerprint satin greige lacquer" },
      { it: "Presa ergonomica a gola incassata nel pannello", en: "Ergonomic flush recessed finger pull" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/IN-10_BRUMA.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "41 mm",
      series: "INTERNI",
      description: "GREIGE | PIVOT CON PRESA INTEGRATA",
      disclaimer: disclaimerText
    }
  }
];

// 3. The 10 Hotel Products (HT-01 to HT-10)
const hotelProducts = [
  {
    id: "ht-01-senso",
    slug: "ht-01-senso",
    aliases: ["senso", "italian-walnut-hotel-door-with-bronze-inlay"],
    familyId: "hotel",
    code: "HT-01",
    model: "SENSO",
    name: {
      it: "Porta Suite SENSO — Noce con RFID",
      en: "SENSO Suite Door — Walnut & RFID"
    },
    openingType: "swing",
    summary: {
      it: "Porta d'ingresso suite in noce canaletto fiammato con intarsio in bronzo e predisposizione per lettore hotel RFID a scomparsa.",
      en: "Suite entrance door in Canaletto walnut with bronze inlay and RFID transponder integration."
    },
    mainImage: "/images/vela/hotel/italian-walnut-hotel-door-with-bronze-inlay.webp",
    images: [
      {
        url: "/images/vela/hotel/italian-walnut-hotel-door-with-bronze-inlay.webp",
        type: "ambient",
        label: { it: "Ingresso suite in noce canaletto", en: "Walnut suite entrance view" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/hotel/senso-hotel-door-hardware-details.webp",
        type: "detail",
        label: { it: "Dettaglio hardware hotel", en: "Hotel hardware detail" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/HT-01_SENSO.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Predisposizione serratura elettronica RFID a filo", en: "Flush RFID electronic lock preparation" },
      { it: "Abbattimento acustico con soglia a ghigliottina", en: "Acoustic drop seal with threshold drop" },
      { it: "Spessore maggiorato 60 mm per privacy ospite", en: "60 mm increased thickness for guest privacy" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/HT-01_SENSO.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "60 mm",
      series: "HOTEL",
      description: "NOCE | LETTORE RFID OPZIONALE",
      disclaimer: disclaimerText
    }
  },
  {
    id: "ht-02-oliva",
    slug: "ht-02-oliva",
    aliases: ["oliva", "olive-grey-hotel-door-italian-design"],
    familyId: "hotel",
    code: "HT-02",
    model: "OLIVA",
    name: {
      it: "Porta Camera OLIVA — Verde Oliva & Controllo Accessi",
      en: "OLIVA Hotel Door — Olive Green & Access Control"
    },
    openingType: "swing",
    summary: {
      it: "Tonalità verde oliva contemporanea con imbotte complanare e predisposizione integrata per tessera di sicurezza hotel.",
      en: "Contemporary olive tone with flush casing and seamless hotel keycard integration."
    },
    mainImage: "/images/vela/hotel/olive-grey-hotel-door-italian-design.webp",
    images: [
      {
        url: "/images/vela/hotel/olive-grey-hotel-door-italian-design.webp",
        type: "ambient",
        label: { it: "Vista corridoio hotel oliva", en: "Olive hotel corridor view" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/hotel/oliva-hotel-door-details.webp",
        type: "detail",
        label: { it: "Dettaglio battuta e riscontro", en: "Strike plate and edge detail" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/HT-02_OLIVA.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Complanarità totale con le pareti di corridoio", en: "Total coplanarity with corridor walls" },
      { it: "Laccatura opaca ad altissima resistenza antiurto", en: "High-durability impact resistant matte lacquer" },
      { it: "Guarnizioni perimetrali silenziose di battuta", en: "Continuous silent acoustic buffer seals" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/HT-02_OLIVA.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "60 mm",
      series: "HOTEL",
      description: "VERDE OLIVA | CONTROLLO ACCESSI",
      disclaimer: disclaimerText
    }
  },
  {
    id: "ht-03-arenaria",
    slug: "ht-03-arenaria",
    aliases: ["arenaria", "arenaria-oak-hotel-door-diptych"],
    familyId: "hotel",
    code: "HT-03",
    model: "ARENARIA",
    name: {
      it: "Porta Suite ARENARIA — Rovere Chiaro & Boiserie",
      en: "ARENARIA Suite Door — Natural Oak & Panelling"
    },
    openingType: "swing",
    summary: {
      it: "Ingresso suite coordinato con boiserie e numero di camera complanare. Rovere biondo spazzolato per resort di lusso.",
      en: "Suite entrance coordinated with continuous wall panelling and flush room signage in natural oak."
    },
    mainImage: "/images/vela/hotel/arenaria-oak-hotel-door-diptych.webp",
    images: [
      {
        url: "/images/vela/hotel/arenaria-oak-hotel-door-diptych.webp",
        type: "ambient",
        label: { it: "Diptych porta suite e corridoio", en: "Suite door and corridor diptych" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/HT-03_ARENARIA.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Integrazione continua con boiserie VELA", en: "Seamless integration with VELA wall panelling" },
      { it: "Isolamento acustico hotel di alta fascia", en: "High-grade hospitality acoustic core" },
      { it: "Cerniere a scomparsa registrabili su 3 assi", en: "Concealed 3D adjustable heavy-duty hinges" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/HT-03_ARENARIA.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "60 mm",
      series: "HOTEL",
      description: "ROVERE CHIARO | CONTROLLO ACCESSI",
      disclaimer: disclaimerText
    }
  },
  {
    id: "ht-04-bronzo",
    slug: "ht-04-bronzo",
    aliases: ["bronzo", "bronze-framed-espresso-hotel-door"],
    familyId: "hotel",
    code: "HT-04",
    model: "BRONZO",
    name: {
      it: "Porta Suite BRONZO — Rovere Espresso con Telaio Bronzo",
      en: "BRONZO Suite Door — Espresso Oak with Bronze Frame"
    },
    openingType: "swing",
    summary: {
      it: "Telaio perimetrale metallico a vista in bronzo satinato e pannello in rovere tinto espresso con inserto orizzontale.",
      en: "Exposed perimeter frame in satin bronze paired with dark espresso stained oak panel."
    },
    mainImage: "/images/vela/hotel/bronze-framed-espresso-hotel-door.webp",
    images: [
      {
        url: "/images/vela/hotel/bronze-framed-espresso-hotel-door.webp",
        type: "ambient",
        label: { it: "Vista prospetto telaio bronzo", en: "Satin bronze frame view" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/hotel/espresso-oak-and-bronze-door-details.webp",
        type: "detail",
        label: { it: "Dettaglio giunzione rovere e bronzo", en: "Oak and bronze junction detail" },
        width: 1536,
        height: 1024
      },
      {
        url: "/images/vela/drawings/HT-04_BRONZO.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Telaio strutturale in alluminio finitura bronzo", en: "Structural aluminum frame in bronze finish" },
      { it: "Serratura magnetica a scatto silenzioso", en: "Silent magnetic latch mechanism" },
      { it: "Spessore 60 mm ad elevata tenuta termo-acustica", en: "60 mm thickness for thermo-acoustic insulation" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/HT-04_BRONZO.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "60 mm",
      series: "HOTEL",
      description: "ROVERE ESPRESSO | INSERTO ORIZZONTALE",
      disclaimer: disclaimerText
    }
  },
  {
    id: "ht-05-avena",
    slug: "ht-05-avena",
    aliases: ["avena", "ivory-hotel-door-with-brass-details"],
    familyId: "hotel",
    code: "HT-05",
    model: "AVENA",
    name: {
      it: "Porta Camera AVENA — Avorio con Inserto Sottile",
      en: "AVENA Guestroom Door — Ivory with Subtle Inlay"
    },
    openingType: "swing",
    summary: {
      it: "Raffinata laccatura bianco avorio con profilo metallico sottile. Ideale per boutique hotel, grand hotel e resort sul mare.",
      en: "Refined warm ivory lacquer with slender metallic profile for boutique hotels and seaside luxury resorts."
    },
    mainImage: "/images/vela/hotel/ivory-hotel-door-with-brass-details.webp",
    images: [
      {
        url: "/images/vela/hotel/ivory-hotel-door-with-brass-details.webp",
        type: "ambient",
        label: { it: "Vista camera hotel avorio", en: "Ivory hotel guestroom view" },
        width: 1536,
        height: 1024
      },
      {
        url: "/images/vela/hotel/greige-hotel-door-with-brass-accent.webp",
        type: "detail",
        label: { it: "Dettaglio profilo ottone satinato", en: "Satin brass profile detail" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/HT-05_AVENA.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Laccatura a poro chiuso ad alta manutenibilità", en: "Easy-to-clean closed-pore hospitality lacquer" },
      { it: "Profilo sottile d'accento metallico", en: "Slender metallic decorative profile" },
      { it: "Guarnizioni perimetrali di tenuta acustica", en: "Perimeter acoustic buffer seals" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/HT-05_AVENA.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "60 mm",
      series: "HOTEL",
      description: "AVORIO | INSERTO SOTTILE",
      disclaimer: disclaimerText
    }
  },
  {
    id: "ht-06-rovere",
    slug: "ht-06-rovere",
    aliases: ["rovere", "warm-oak-luxury-hotel-entrance"],
    familyId: "hotel",
    code: "HT-06",
    model: "ROVERE",
    name: {
      it: "Portale Suite ROVERE — Rovere Tinto & Lettore RFID",
      en: "ROVERE Suite Entrance — Stained Oak & RFID"
    },
    openingType: "swing",
    summary: {
      it: "Portale architettonico profondo per ingresso suite con rovere tinto caldo e lettore smart key hotel a filo.",
      en: "Deep architectural portal for suite arrival with warm stained oak and integrated hotel smart lock."
    },
    mainImage: "/images/vela/hotel/warm-oak-luxury-hotel-entrance.webp",
    images: [
      {
        url: "/images/vela/hotel/warm-oak-luxury-hotel-entrance.webp",
        type: "ambient",
        label: { it: "Portale architettonico corridoio", en: "Architectural corridor portal" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/hotel/espresso-oak-door-with-bronze-rfid-detail.webp",
        type: "detail",
        label: { it: "Dettaglio lettore RFID a filo", en: "Flush RFID reader detail" },
        width: 1536,
        height: 1024
      },
      {
        url: "/images/vela/drawings/HT-06_ROVERE.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Sguancio sagomato con predisposizione LED", en: "Flared portal with indirect LED preparation" },
      { it: "Integrazione sistema transponder hotel", en: "Hospitality transponder credential integration" },
      { it: "Spessore 60 mm per totale isolamento acustico", en: "60 mm thickness for maximum acoustic comfort" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/HT-06_ROVERE.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "60 mm",
      series: "HOTEL",
      description: "ROVERE TINTO | LETTORE RFID",
      disclaimer: disclaimerText
    }
  },
  {
    id: "ht-07-essenza",
    slug: "ht-07-essenza",
    aliases: ["essenza", "essenza-hotel-door-in-ash-and-bronze"],
    familyId: "hotel",
    code: "HT-07",
    model: "ESSENZA",
    name: {
      it: "Porta Camera ESSENZA — Frassino Chiaro con Gola",
      en: "ESSENZA Hotel Door — Light Ash with Vertical Grip"
    },
    openingType: "swing",
    summary: {
      it: "Frassino naturale desaturato a poro aperto con gola verticale e fascia inferiore paracolpi in metallo.",
      en: "Open-grain natural ashwood with vertical finger groove and protective bottom kickplate."
    },
    mainImage: "/images/vela/hotel/essenza-hotel-door-in-ash-and-bronze.webp",
    images: [
      {
        url: "/images/vela/hotel/essenza-hotel-door-in-ash-and-bronze.webp",
        type: "ambient",
        label: { it: "Vista prospetto frassino e bronzo", en: "Ashwood and bronze view" },
        width: 1536,
        height: 1024
      },
      {
        url: "/images/vela/hotel/warm-ashwood-room-door-in-boutique-hotel.webp",
        type: "detail",
        label: { it: "Dettaglio camera boutique hotel", en: "Boutique hotel room detail" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/HT-07_ESSENZA.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Gola verticale d'apertura ergonomica", en: "Ergonomic vertical opening groove" },
      { it: "Protezione paracolpi per carrelli di servizio", en: "Built-in luggage kickplate protection" },
      { it: "Trattamento protettivo all'acqua opaco naturale", en: "Natural matte protective water finish" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/HT-07_ESSENZA.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "60 mm",
      series: "HOTEL",
      description: "FRASSINO CHIARO | GOLA VERTICALE",
      disclaimer: disclaimerText
    }
  },
  {
    id: "ht-08-verde",
    slug: "ht-08-verde",
    aliases: ["verde", "elegant-green-hotel-door"],
    familyId: "hotel",
    code: "HT-08",
    model: "VERDE",
    name: {
      it: "Porta Suite VERDE — Verde Profondo con Ferramenta Scura",
      en: "VERDE Suite Door — Deep Green & Dark Hardware"
    },
    openingType: "swing",
    summary: {
      it: "Tonalità forest green profonda e vellutata al tatto con ferramenta in ottone brunito scuro. Atmosfera esclusiva e contemporanea.",
      en: "Deep velvet forest green lacquer with dark burnished brass hardware for exclusive suites."
    },
    mainImage: "/images/vela/hotel/elegant-green-hotel-door.webp",
    images: [
      {
        url: "/images/vela/hotel/elegant-green-hotel-door.webp",
        type: "ambient",
        label: { it: "Vista camera verde profondo", en: "Deep green suite view" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/hotel/forest-green-hotel-door-details.webp",
        type: "detail",
        label: { it: "Dettaglio maniglia e serratura", en: "Handle and lock detail" },
        width: 1536,
        height: 1024
      },
      {
        url: "/images/vela/drawings/HT-08_VERDE.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Laccatura opaca anti-impronta soft-touch", en: "Soft-touch anti-fingerprint matte lacquer" },
      { it: "Ferramenta e maniglieria brunita a filo", en: "Dark burnished flush hardware" },
      { it: "Soglia mobile paraspifferi e antirumore", en: "Automatic acoustic guillotine bottom drop seal" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/HT-08_VERDE.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "60 mm",
      series: "HOTEL",
      description: "VERDE PROFONDO | FERRAMENTA SCURA",
      disclaimer: disclaimerText
    }
  },
  {
    id: "ht-09-pietra",
    slug: "ht-09-pietra",
    aliases: ["pietra", "limestone-guestroom-door-in-a-sunlit-corridor"],
    familyId: "hotel",
    code: "HT-09",
    model: "PIETRA",
    name: {
      it: "Porta Camera PIETRA — Effetto Pietra & Reader RFID",
      en: "PIETRA Guestroom Door — Stone Texture & RFID"
    },
    openingType: "swing",
    summary: {
      it: "Superficie minerale a effetto pietra calcarea limestone. Elevata resistenza all'usura da valigie e perfetta complanarità con la parete.",
      en: "Mineral limestone tactile texture with high wear resistance and flush corridor casing."
    },
    mainImage: "/images/vela/hotel/limestone-guestroom-door-in-a-sunlit-corridor.webp",
    images: [
      {
        url: "/images/vela/hotel/limestone-guestroom-door-in-a-sunlit-corridor.webp",
        type: "ambient",
        label: { it: "Corridoio soleggiato con porta limestone", en: "Sunlit limestone corridor view" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/hotel/pietra-limestone-hotel-door-details.webp",
        type: "detail",
        label: { it: "Dettaglio texture minerale e fuga", en: "Mineral texture and edge detail" },
        width: 1536,
        height: 1024
      },
      {
        url: "/images/vela/drawings/HT-09_PIETRA.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Finitura minerale ad altissima resistenza superficiale", en: "Ultra-durable mineral tactile surface" },
      { it: "Integrazione discreta di card reader hotel", en: "Discreet hotel keycard reader integration" },
      { it: "Battuta fonoassorbente a quattro lati", en: "Four-sided continuous acoustic dampening" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/HT-09_PIETRA.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "60 mm",
      series: "HOTEL",
      description: "LACCATO EFFETTO PIETRA | READER",
      disclaimer: disclaimerText
    }
  },
  {
    id: "ht-10-riga",
    slug: "ht-10-riga",
    aliases: ["riga", "luxurious-walnut-and-bronze-hotel-door"],
    familyId: "hotel",
    code: "HT-10",
    model: "RIGA",
    name: {
      it: "Porta Grande Suite RIGA — Noce & Inserto Orizzontale",
      en: "RIGA Presidential Suite Door — Walnut & Horizontal Inlay"
    },
    openingType: "swing",
    summary: {
      it: "Porta d'accesso maestosa per presidential suite in noce canaletto con maniglione verticale in bronzo e inserto orizzontale.",
      en: "Monumental presidential suite entrance in Canaletto walnut with vertical bronze pull."
    },
    mainImage: "/images/vela/hotel/luxurious-walnut-and-bronze-hotel-door.webp",
    images: [
      {
        url: "/images/vela/hotel/luxurious-walnut-and-bronze-hotel-door.webp",
        type: "ambient",
        label: { it: "Grande suite noce e bronzo", en: "Presidential suite walnut view" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/hotel/fluted-oak-boutique-hotel-door.webp",
        type: "detail",
        label: { it: "Dettaglio cannettato verticale coordinato", en: "Coordinated vertical fluting" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/drawings/HT-10_RIGA.png",
        type: "drawing",
        label: drawingLabel,
        width: 2400,
        height: 1800
      }
    ],
    verifiedFeatures: [
      { it: "Altezza fino a 300 cm a filo soffitto", en: "Full height up to 300 cm flush to ceiling" },
      { it: "Maniglione verticale ergonomico fonoassorbente", en: "Integrated vertical acoustic pull handle" },
      { it: "Isolamento termo-acustico di massimo grado", en: "Top-tier acoustic and thermal core" }
    ],
    technicalDrawing: {
      image: "/images/vela/drawings/HT-10_RIGA.png",
      width: 2400,
      height: 1800,
      nominalWidth: "800 mm",
      nominalHeight: "2100 mm",
      nominalThickness: "60 mm",
      series: "HOTEL",
      description: "NOCE | INSERTO ORIZZONTALE",
      disclaimer: disclaimerText
    }
  }
];

// 4. Shower products preserved from previous step
const showerProducts = currentVela.products.filter(p => p.familyId === 'shower');

// Combine all products: 10 residential, 10 hotel, 4 shower = 24 products total
const allProducts = [...residentialProducts, ...hotelProducts, ...showerProducts];

const updatedData = {
  brand: currentVela.brand,
  families,
  products: allProducts
};

fs.writeFileSync('src/data/vela.json', JSON.stringify(updatedData, null, 2), 'utf8');

console.log('Successfully written src/data/vela.json with all 20 dimensional drawings:');
console.log(`- ${residentialProducts.length} residential products (IN-01 to IN-10)`);
console.log(`- ${hotelProducts.length} hotel products (HT-01 to HT-10)`);
console.log(`- ${showerProducts.length} shower products`);
