import fs from 'fs';
import path from 'path';

const velaJsonPath = path.resolve('src/data/vela.json');
const current = JSON.parse(fs.readFileSync(velaJsonPath, 'utf8'));

// 1. Families with verified non-bathroom hero images
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
    count: 14
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
    count: 13
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
    count: 9
  }
];

// 2. Genuine Residential Products for "Sistemi VELA" Grid
const residentialProducts = [
  {
    id: "bruma-greige-pivot",
    slug: "bruma-greige-pivot-door",
    familyId: "residential",
    code: "VELA · PIVOT 01",
    name: {
      it: "Porta a Bilico Pivot Bruma Greige",
      en: "Bruma Greige Pivot Door"
    },
    openingType: "pivot",
    summary: {
      it: "Proporzioni maestose e apertura a bilico con perno a scomparsa nel controsoffitto. Movimento fluido e ammortizzato.",
      en: "Stately proportions and smooth dampened pivot rotation with ceiling-recessed bearing."
    },
    mainImage: "/images/vela/residential/bruma-greige-pivot-door-detail-diptych.webp",
    images: [
      {
        url: "/images/vela/residential/bruma-greige-pivot-door-detail-diptych.webp",
        type: "ambient",
        label: { it: "Vista d'insieme e dettaglio bilico", en: "Overview and pivot detail" },
        width: 1536,
        height: 1024
      },
      {
        url: "/images/vela/residential/warm-greige-pivot-door-details.webp",
        type: "detail",
        label: { it: "Perno superiore a scomparsa", en: "Concealed upper pivot" },
        width: 1536,
        height: 1024
      }
    ],
    verifiedFeatures: [
      { it: "Rotazione pivot bidirezionale con fermo a 90°", en: "Bidirectional pivot rotation with 90° stop" },
      { it: "Laccatura satinata multistrato tonalità greige", en: "Multilayer satin lacquer greige tone" },
      { it: "Assenza totale di telaio e battuta a pavimento", en: "No visible frame and no floor threshold" }
    ]
  },
  {
    id: "quiet-luxury-smoked-oak-pivot",
    slug: "quiet-luxury-smoked-oak-pivot-door",
    familyId: "residential",
    code: "VELA · PIVOT 02",
    name: {
      it: "Porta a Bilico Rovere Affumicato Quiet Luxury",
      en: "Quiet Luxury Smoked Oak Pivot Door"
    },
    openingType: "pivot",
    summary: {
      it: "Rovere termotrattato affumicato a forte spessore. Presenza scultorea per varchi di grandi dimensioni fino a 300 cm.",
      en: "Heavy thermal-treated smoked oak. Sculptural presence for monumental passages up to 300 cm."
    },
    mainImage: "/images/vela/residential/quiet-luxury--smoked-oak-pivot-door.webp",
    images: [
      {
        url: "/images/vela/residential/quiet-luxury--smoked-oak-pivot-door.webp",
        type: "ambient",
        label: { it: "Vista ambiente giorno", en: "Living room ambient view" },
        width: 1122,
        height: 1402
      },
      {
        url: "/images/vela/residential/rovere-smoked-oak-door-details.webp",
        type: "detail",
        label: { it: "Dettaglio venatura rovere affumicato", en: "Smoked oak grain macro" },
        width: 1536,
        height: 1024
      }
    ],
    verifiedFeatures: [
      { it: "Cerniera pivot per ante fino a 150 kg", en: "Heavy-duty pivot hinge up to 150 kg" },
      { it: "Finitura ad olio vegetale opaco a poro aperto", en: "Open-pore matte vegetable oil finish" },
      { it: "Maniglione verticale scuro a filo montante", en: "Flush vertical dark metal pull" }
    ]
  },
  {
    id: "graphite-pivot-door",
    slug: "graphite-pivot-door-with-brass-detail",
    familyId: "residential",
    code: "VELA · PIVOT 03",
    name: {
      it: "Porta a Bilico Grafite con Inserto in Ottone",
      en: "Graphite Pivot Door with Satin Brass Detail"
    },
    openingType: "pivot",
    summary: {
      it: "Contrasto netto tra la finitura grafite scura opaca e il calore dell'ottone spazzolato a mano.",
      en: "Striking contrast between deep matte graphite and the warm glow of hand-brushed brass."
    },
    mainImage: "/images/vela/residential/graphite-pivot-door-with-brass-detail.webp",
    images: [
      {
        url: "/images/vela/residential/graphite-pivot-door-with-brass-detail.webp",
        type: "ambient",
        label: { it: "Prospetto a tutta altezza", en: "Full-height elevation" },
        width: 1122,
        height: 1402
      }
    ],
    verifiedFeatures: [
      { it: "Inserto continuo in massello d'ottone satinato", en: "Continuous solid satin brass vertical inlay" },
      { it: "Perno pivot decentrato con microregolazione 3D", en: "Offset pivot pin with 3D micrometric adjustment" },
      { it: "Complanarità totale con muratura o boiserie", en: "Total flush alignment with wall panelling" }
    ]
  },
  {
    id: "elegant-warm-white-pocket",
    slug: "elegant-warm-white-pocket-door",
    familyId: "residential",
    code: "VELA · SLIDE 01",
    name: {
      it: "Porta Scorrevole a Scomparsa Warm White",
      en: "Warm White Concealed Pocket Door"
    },
    openingType: "sliding",
    summary: {
      it: "Sistema scorrevole a scomparsa nel controtelaio. L'anta svanisce completamente nello spessore del muro.",
      en: "Pocket sliding door disappearing inside the wall cavity for fluid open spaces."
    },
    mainImage: "/images/vela/residential/elegant-warm-white-pocket-door.webp",
    images: [
      {
        url: "/images/vela/residential/elegant-warm-white-pocket-door.webp",
        type: "ambient",
        label: { it: "Vista ambiente passaggio", en: "Hallway ambient view" },
        width: 1122,
        height: 1402
      }
    ],
    verifiedFeatures: [
      { it: "Scorrimento silenzioso su cuscinetti ammortizzati", en: "Silent sliding mechanism with soft-close damping" },
      { it: "Assenza totale di binario a pavimento", en: "No floor rail: seamless flooring" },
      { it: "Vaschetta di trascinamento a filo pannello", en: "Flush recessed edge pull" }
    ]
  },
  {
    id: "satin-bronze-reeded-glass",
    slug: "satin-bronze-reeded-glass-door",
    familyId: "residential",
    code: "VELA · SLIDE 02",
    name: {
      it: "Porta in Cristallo Cannettato & Telaio Bronzo",
      en: "Reeded Glass Door with Satin Bronze Frame"
    },
    openingType: "sliding",
    summary: {
      it: "Filtra la luce naturale garantendo riservatezza tra gli ambienti. Telaio minimale in alluminio finitura bronzo satinato.",
      en: "Diffuses daylight while safeguarding visual privacy with minimal satin bronze aluminium frame."
    },
    mainImage: "/images/vela/residential/satin-bronze-reeded-glass-door.webp",
    images: [
      {
        url: "/images/vela/residential/satin-bronze-reeded-glass-door.webp",
        type: "ambient",
        label: { it: "Vista trasparenza e luce", en: "Light diffusion view" },
        width: 1122,
        height: 1402
      }
    ],
    verifiedFeatures: [
      { it: "Vetro stratificato di sicurezza a cannette verticali", en: "Laminated safety glass with vertical fluting" },
      { it: "Profilo metallico a sezione ridotta", en: "Ultra-slim metal profile" },
      { it: "Maniglione a tutta altezza integrato nel montante", en: "Full-height integrated pull handle" }
    ]
  },
  {
    id: "vela-serene-oak-interior",
    slug: "vela-door-in-a-calm-italian-interior",
    familyId: "residential",
    code: "VELA · SWING 01",
    name: {
      it: "Porta Battente Serene Oak in Living Residenziale",
      en: "Serene Oak Interior Door in Italian Living"
    },
    openingType: "swing",
    summary: {
      it: "La porta come elemento d'arredo continuo. Rovere biondo spazzolato a filo muro in perfetta armonia con gli arredi su misura.",
      en: "The door as continuous architectural millwork. Brushed light oak flush with wall cabinetry."
    },
    mainImage: "/images/vela/residential/vela-door-in-a-calm-italian-interior.webp",
    images: [
      {
        url: "/images/vela/residential/vela-door-in-a-calm-italian-interior.webp",
        type: "ambient",
        label: { it: "Ambiente living italiano", en: "Italian living room view" },
        width: 1122,
        height: 1402
      }
    ],
    verifiedFeatures: [
      { it: "Spessore anta 50 mm con isolamento acustico", en: "50 mm thick leaf with acoustic core" },
      { it: "Cerniere a scomparsa registrabili su 3 assi", en: "Concealed 3D adjustable hinges" },
      { it: "Serratura a scatto magnetico silenzioso", en: "Silent magnetic latch mechanism" }
    ]
  },
  {
    id: "alba-ivory-flush",
    slug: "alba-ivory-door-detail-diptych",
    familyId: "residential",
    code: "VELA · SWING 02",
    name: {
      it: "Porta Rasomuro Alba Ivory a Filo Parete",
      en: "Alba Ivory Flush-to-Wall Pure Door"
    },
    openingType: "swing",
    summary: {
      it: "Minimalismo puro: il pannello si fonde con la parete rasata senza coprifili o mostrine a vista.",
      en: "Pure minimalism: leaf blends into the skimmed wall without architraves or trims."
    },
    mainImage: "/images/vela/residential/alba-ivory-door-detail-diptych.webp",
    images: [
      {
        url: "/images/vela/residential/alba-ivory-door-detail-diptych.webp",
        type: "ambient",
        label: { it: "Diptych vista d'insieme e fuga", en: "Overview and shadow gap diptych" },
        width: 1122,
        height: 1402
      }
    ],
    verifiedFeatures: [
      { it: "Telaio invisibile in alluminio estruso anodizzato", en: "Concealed extruded aluminium frame" },
      { it: "Laccatura vellutata opaca ad alta resistenza", en: "High-resistance matte velvet lacquer" },
      { it: "Guarnizione perimetrale morbida di battuta", en: "Soft perimeter acoustic buffer seal" }
    ]
  },
  {
    id: "burnt-sienna-double",
    slug: "burnt-sienna-double-doors-in-travertine",
    familyId: "residential",
    code: "VELA · SWING 03",
    name: {
      it: "Doppia Porta Burnt Sienna in Portale di Travertino",
      en: "Burnt Sienna Double Doors in Travertine"
    },
    openingType: "swing",
    summary: {
      it: "Doppia anta battente monumentale che dialoga con la pietra naturale. Ideale per saloni di rappresentanza e zone pranzo.",
      en: "Stately double doors framed by natural travertine portal for prestigious living rooms."
    },
    mainImage: "/images/vela/residential/burnt-sienna-double-doors-in-travertine.webp",
    images: [
      {
        url: "/images/vela/residential/burnt-sienna-double-doors-in-travertine.webp",
        type: "ambient",
        label: { it: "Vista portale travertino", en: "Travertine portal view" },
        width: 1122,
        height: 1402
      }
    ],
    verifiedFeatures: [
      { it: "Doppia anta con battuta centrale ermetica", en: "Double leaf with airtight central meeting stile" },
      { it: "Laccatura opaca terra di Siena bruciata", en: "Burnt sienna warm earthy matte lacquer" },
      { it: "Dimensionamento personalizzabile fino a grandi luci", en: "Custom sizing for grand openings" }
    ]
  },
  {
    id: "fluted-oak-passage",
    slug: "fluted-oak-door-serene-passage",
    familyId: "residential",
    code: "VELA · SWING 04",
    name: {
      it: "Porta Cannettata Fluted Oak in Rovere Naturale",
      en: "Fluted Natural Oak Passage Door"
    },
    openingType: "swing",
    summary: {
      it: "Superficie a doghe verticali fresate nel massello di rovere. Crea raffinati giochi di luce lungo i disimpegni.",
      en: "Vertical rhythm milled from solid oak. Enhances architectural corridors with delicate shadows."
    },
    mainImage: "/images/vela/residential/fluted-oak-door-serene-passage.webp",
    images: [
      {
        url: "/images/vela/residential/fluted-oak-door-serene-passage.webp",
        type: "ambient",
        label: { it: "Prospetto cannettato verticale", en: "Vertical fluted view" },
        width: 1122,
        height: 1402
      }
    ],
    verifiedFeatures: [
      { it: "Fresatura tridimensionale su essenza naturale", en: "3D precision fluting on natural oak" },
      { it: "Maniglia a gola ricavata a filo della cannettatura", en: "Finger groove aligned with fluting" },
      { it: "Complanarità continua con la parete", en: "Continuous coplanar wall alignment" }
    ]
  },
  {
    id: "riga-walnut-door",
    slug: "riga-walnut-door-with-bronze-accents",
    familyId: "residential",
    code: "VELA · SWING 05",
    name: {
      it: "Porta Riga Noce Canaletto e Dettagli Bronzo",
      en: "Riga Canaletto Walnut Door with Bronze Accents"
    },
    openingType: "swing",
    summary: {
      it: "Disegno a doghe orizzontali in noce canaletto che allarga visivamente lo spazio con finiture metalliche coordinate.",
      en: "Horizontal slatted Canaletto walnut visually expanding space with coordinated bronze trim."
    },
    mainImage: "/images/vela/residential/riga-walnut-door-with-bronze-accents.webp",
    images: [
      {
        url: "/images/vela/residential/riga-walnut-door-with-bronze-accents.webp",
        type: "ambient",
        label: { it: "Vista orizzontale a doghe", en: "Horizontal slatted perspective" },
        width: 1536,
        height: 1024
      }
    ],
    verifiedFeatures: [
      { it: "Dogatura orizzontale a rilievo continuo", en: "Continuous horizontal relief slats" },
      { it: "Profilo montante di battuta in alluminio bronzato", en: "Satin bronze anodized aluminium edge stile" },
      { it: "Noce canaletto naturale verniciato all'acqua", en: "Natural water-based finished walnut" }
    ]
  },
  {
    id: "luxury-reeded-oak",
    slug: "luxury-reeded-oak-door-with-bronze-inlay",
    familyId: "residential",
    code: "VELA · SWING 06",
    name: {
      it: "Porta Rovere Plissé con Filetto in Bronzo",
      en: "Reeded Oak Door with Bronze Inlay"
    },
    openingType: "swing",
    summary: {
      it: "Accostamento tra lavorazione cannettata e inserti in bronzo levigati a filo con la superficie lignea.",
      en: "Artisanal harmony between reeded textures and flush satin bronze inlays."
    },
    mainImage: "/images/vela/residential/luxury-reeded-oak-door-with-bronze-inlay.webp",
    images: [
      {
        url: "/images/vela/residential/luxury-reeded-oak-door-with-bronze-inlay.webp",
        type: "ambient",
        label: { it: "Vista frontale plissé", en: "Pleated front elevation" },
        width: 1122,
        height: 1402
      }
    ],
    verifiedFeatures: [
      { it: "Filettatura metallica incassata a controllo numerico", en: "CNC precision embedded metallic inlay" },
      { it: "Accostamento tra superfici lisce e cannettate", en: "Interplay between smooth and fluted zones" },
      { it: "Serratura silenziosa con chiave magnetica", en: "Silent magnetic keylock" }
    ]
  },
  {
    id: "warm-bronze-door",
    slug: "warm-bronze-door-modern-elegance",
    familyId: "residential",
    code: "VELA · SWING 07",
    name: {
      it: "Porta Complanare Warm Bronze Metallo Liquido",
      en: "Warm Bronze Liquid Metal Flush Door"
    },
    openingType: "swing",
    summary: {
      it: "Superficie a effetto bronzo liquido stesa artigianalmente. Riflessi cangianti al variare della luce naturale.",
      en: "Hand-applied liquid bronze metal surface shifting reflections under natural daylight."
    },
    mainImage: "/images/vela/residential/warm-bronze-door-modern-elegance.webp",
    images: [
      {
        url: "/images/vela/residential/warm-bronze-door-modern-elegance.webp",
        type: "ambient",
        label: { it: "Riflessi metallici radenti", en: "Grazing light metallic sheen" },
        width: 1122,
        height: 1402
      }
    ],
    verifiedFeatures: [
      { it: "Finitura a polvere di bronzo su base composita", en: "Real bronze powder coating on composite core" },
      { it: "Complanarità totale con apertura push-pull", en: "Total coplanar flush push-pull opening" },
      { it: "Trattamento nanotecnologico antimpronta", en: "Anti-fingerprint nanotech protective seal" }
    ]
  },
  {
    id: "terra-door-geometric",
    slug: "terra-door--brass-handles-and-geometric-relief",
    familyId: "residential",
    code: "VELA · SWING 08",
    name: {
      it: "Porta Terra con Bassorilievo Geometrico e Ottone",
      en: "Terra Door with Geometric Relief & Brass Handles"
    },
    openingType: "swing",
    summary: {
      it: "Ispirata alle geometrie dell'architettura modernista italiana: bassorilievo geometrico e maniglia a barra in ottone pieno.",
      en: "Inspired by mid-century Italian modernist architecture with solid brass bar handle."
    },
    mainImage: "/images/vela/residential/terra-door--brass-handles-and-geometric-relief.webp",
    images: [
      {
        url: "/images/vela/residential/terra-door--brass-handles-and-geometric-relief.webp",
        type: "ambient",
        label: { it: "Prospetto geometrico", en: "Geometric relief elevation" },
        width: 1122,
        height: 1402
      }
    ],
    verifiedFeatures: [
      { it: "Incisione a controllo numerico centesimale", en: "Centisimal CNC geometric engraving" },
      { it: "Maniglia orizzontale in ottone ricavata dal pieno", en: "Solid brass machined horizontal handle" },
      { it: "Laccatura opaca ad alta densità minerale", en: "Mineral-rich high-density matte lacquer" }
    ]
  },
  {
    id: "warm-ivory-shadow-gap",
    slug: "warm-ivory-italian-interior-door",
    familyId: "residential",
    code: "VELA · SWING 09",
    name: {
      it: "Porta Warm Ivory con Fuga Perimetrale d'Ombra",
      en: "Warm Ivory Interior Door with Shadow Gap"
    },
    openingType: "swing",
    summary: {
      it: "La fuga d'ombra distacca visivamente il pannello dalla parete circostante per un effetto sospeso e contemporaneo.",
      en: "Perimeter shadow gap visually detaches the door leaf from the wall for a floating effect."
    },
    mainImage: "/images/vela/residential/warm-ivory-italian-interior-door.webp",
    images: [
      {
        url: "/images/vela/residential/warm-ivory-italian-interior-door.webp",
        type: "ambient",
        label: { it: "Vista d'insieme con fuga d'ombra", en: "Shadow gap detail view" },
        width: 1122,
        height: 1402
      }
    ],
    verifiedFeatures: [
      { it: "Fuga d'ombra da 10 mm coordinata con battiscopa", en: "10 mm shadow gap matching flush skirting" },
      { it: "Laccatura multistrato resistente all'ingiallimento", en: "UV-resistant non-yellowing multilayer lacquer" },
      { it: "Serratura a scatto magnetico", en: "Silent magnetic strike latch" }
    ]
  }
];

// 3. Authentic Box Doccia Products (mapped from BOX DOCCIA E CRISTALLO)
const showerProducts = [
  {
    id: "shower-01-p-g4",
    slug: "box-doccia-01-p-g4",
    familyId: "shower",
    code: "VELA · SHOWER 01",
    name: {
      it: "Cabina Doccia Angolare Cristallo & Marmo Verde",
      en: "Corner Shower Enclosure in Clear Glass & Green Marble"
    },
    openingType: "swing",
    summary: {
      it: "Sistema box doccia ad angolo in cristallo temperato extrachiaro con perno pivot e guarnizioni di tenuta invisibili.",
      en: "Corner shower enclosure with extra-clear tempered glass, pivot hinges, and invisible water seals."
    },
    mainImage: "/images/vela/doors/01_P+G4.webp",
    elevationImage: "/images/vela/doors/01_P+G4_2AV.webp",
    images: [
      {
        url: "/images/vela/doors/01_P+G4.webp",
        type: "ambient",
        label: { it: "Ambiente bagno con marmo verde", en: "Green marble bathroom ambient view" },
        width: 1920,
        height: 1344
      },
      {
        url: "/images/vela/doors/01_P+G4_2AV.webp",
        type: "elevation",
        label: { it: "Prospetto tecnico a due ante", en: "Two-door technical elevation" },
        width: 1357,
        height: 1920
      },
      {
        url: "/images/vela/doors/01_P+G4_DETT_PIVOT.webp",
        type: "detail",
        label: { it: "Cerniera pivot inferiore in ottone", en: "Brass lower pivot hinge detail" },
        width: 1920,
        height: 1920
      }
    ],
    verifiedFeatures: [
      { it: "Cristallo temperato di sicurezza 8 mm", en: "8 mm tempered safety glass" },
      { it: "Trattamento idrofobico anticalcare", en: "Long-lasting hydrophobic anti-limescale seal" },
      { it: "Cerniera a perno con arresto controllato", en: "Pivot hinge with controlled stop position" }
    ]
  },
  {
    id: "shower-02-nvp1",
    slug: "box-doccia-02-nvp1",
    familyId: "shower",
    code: "VELA · SHOWER 02",
    name: {
      it: "Porta Doccia Scorrevole a Binario Superiore Minimo",
      en: "Sliding Shower Door with Minimal Upper Track"
    },
    openingType: "sliding",
    summary: {
      it: "Scorrimento fluido su cuscinetti in acciaio inox schermati dall'acqua. Profilo a pavimento azzerato.",
      en: "Smooth sliding on stainless steel bearings protected from water splash. Zero floor threshold."
    },
    mainImage: "/images/vela/doors/02_NVP1.webp",
    elevationImage: "/images/vela/doors/02_NVP1_2AV.webp",
    images: [
      {
        url: "/images/vela/doors/02_NVP1.webp",
        type: "ambient",
        label: { it: "Vista ambiente doccia", en: "Shower enclosure ambient view" },
        width: 1920,
        height: 1344
      },
      {
        url: "/images/vela/doors/02_NVP1_DETT_SCORREVOLE.webp",
        type: "detail",
        label: { it: "Dettaglio carrello di scorrimento", en: "Upper sliding track carriage detail" },
        width: 1920,
        height: 1920
      },
      {
        url: "/images/vela/doors/02_NVP1_DETT_MANIGLIA.webp",
        type: "detail",
        label: { it: "Maniglia verticale a filo vetro", en: "Flush vertical glass handle" },
        width: 1920,
        height: 1920
      }
    ],
    verifiedFeatures: [
      { it: "Binario superiore di guida a sezione ridotta", en: "Slim upper guide rail" },
      { it: "Assenza di barriere a filo pavimento", en: "Barrier-free walk-in floor threshold" },
      { it: "Guarnizioni magnetiche a tenuta stagna", en: "Airtight magnetic door closure seals" }
    ]
  },
  {
    id: "shower-09-stp1",
    slug: "box-doccia-09-stp1",
    familyId: "shower",
    code: "VELA · SHOWER 03",
    name: {
      it: "Cabina Doccia Walk-In con Mensola Portaoggetti Integrata",
      en: "Walk-In Shower Enclosure with Integrated Glass Shelf"
    },
    openingType: "swing",
    summary: {
      it: "Soluzione integrata con mensola sagomata in cristallo e profilo a parete a scomparsa.",
      en: "Integrated system with shaped glass shelf and recessed wall profile."
    },
    mainImage: "/images/vela/doors/09_STP1.webp",
    elevationImage: "/images/vela/doors/09_STP1_2AV.webp",
    images: [
      {
        url: "/images/vela/doors/09_STP1.webp",
        type: "ambient",
        label: { it: "Vista cabina doccia completa", en: "Complete shower cabin view" },
        width: 1920,
        height: 1344
      },
      {
        url: "/images/vela/doors/09_STP1_DETT_MENSOLA.webp",
        type: "detail",
        label: { it: "Dettaglio mensola in cristallo", en: "Glass shelf detail" },
        width: 1920,
        height: 1920
      },
      {
        url: "/images/vela/doors/09_STP1_DETT_MANIGLIA.webp",
        type: "detail",
        label: { it: "Impugnatura minimale inox", en: "Stainless steel minimal handle" },
        width: 1920,
        height: 1920
      }
    ],
    verifiedFeatures: [
      { it: "Cristallo di sicurezza 8 mm extrachiaro", en: "8 mm extra-clear safety glass" },
      { it: "Mensola strutturale complanare", en: "Flush structural glass accessory shelf" },
      { it: "Tenuta ermetica con gocciolatoio morbido", en: "Hermetic seal with soft drip rail" }
    ]
  },
  {
    id: "shower-25-vpp2",
    slug: "box-doccia-25-vpp2",
    familyId: "shower",
    code: "VELA · SHOWER 04",
    name: {
      it: "Box Doccia Walk-In Industriale con Profili Neri",
      en: "Industrial Walk-In Shower Enclosure with Black Profiles"
    },
    openingType: "swing",
    summary: {
      it: "Design contemporaneo di forte carattere, con telaio perimetrale in alluminio anodizzato nero opaco e cerniere a 180°.",
      en: "Strong contemporary character with matte black anodized framing and 180° hinges."
    },
    mainImage: "/images/vela/doors/25_VPP2.webp",
    elevationImage: "/images/vela/doors/25_VPP2_2V.webp",
    images: [
      {
        url: "/images/vela/doors/25_VPP2.webp",
        type: "ambient",
        label: { it: "Vista ambiente industrial bagno", en: "Industrial bathroom ambient view" },
        width: 1920,
        height: 1344
      },
      {
        url: "/images/vela/doors/25_VPP2_DETT_ANTECHIUSE.webp",
        type: "detail",
        label: { it: "Dettaglio ante chiuse e profili", en: "Closed leaves and profile junction" },
        width: 1920,
        height: 1920
      },
      {
        url: "/images/vela/doors/25_VPP2_DETT_MANIGLIE.webp",
        type: "detail",
        label: { it: "Coppia maniglie nere a barra", en: "Black bar handle pair" },
        width: 1920,
        height: 1920
      }
    ],
    verifiedFeatures: [
      { it: "Profilo perimetrale nero opaco ultra-resistente", en: "Ultra-durable matte black perimeter frame" },
      { it: "Apertura a doppio battente a 180°", en: "Double swing 180° opening" },
      { it: "Massima facilità di pulizia con filo vetro interno", en: "Internal flush glass for effortless cleaning" }
    ]
  }
];

// Combine all products: residential first, then shower
const allProducts = [...residentialProducts, ...showerProducts];

const updatedData = {
  brand: current.brand,
  families,
  products: allProducts
};

fs.writeFileSync(velaJsonPath, JSON.stringify(updatedData, null, 2), 'utf8');
console.log('Successfully updated src/data/vela.json:');
console.log(`- ${families.length} families`);
console.log(`- ${residentialProducts.length} residential door products (Real doors from PORTE INTERNO!)`);
console.log(`- ${showerProducts.length} shower enclosure products (Real glass from BOX DOCCIA E CRISTALLO!)`);
