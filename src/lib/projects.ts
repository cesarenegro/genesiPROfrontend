// Real GENESI projects and photography, recovered from the historical site genesi-pro.com.
// Images live in /public/images/projects/<category>/ and are registered in src/data/MASTER_FILE.csv.
// Only the three named projects (Mykonos Bar, Mykonos Restaurant, Bodrum Restaurant) carry a
// location from the original site; the other case studies group photos from the same delivery
// and intentionally do not state a location until confirmed by the client.

export type Localized = {
  it: string;
  en: string;
  fr?: string;
  de?: string;
  [key: string]: string | undefined;
};

export type ProjectImage = { src: string; w: number; h: number };

export type GalleryCategory =
  | 'restaurants'
  | 'hotel-rooms'
  | 'kitchens'
  | 'wardrobes'
  | 'upholstery'
  | 'tables'
  | 'complements'
  | 'lighting'
  | 'bathroom'
  | 'marbles'
  | 'wood-flooring'
  | 'outdoor'
  | 'interior-design';

export type Project = {
  slug: string;
  title: Localized;
  location?: Localized;
  year: string;
  scope: Localized;
  description: Localized;
  cover: ProjectImage;
  gallery: ProjectImage[];
  instagram?: string;
};

const img = (src: string, w: number, h: number): ProjectImage => ({ src, w, h });
const P = '/images/projects';

export const PROJECTS: Project[] = [
  {
    slug: 'mykonos-bar',
    title: {
      it: 'Bar a Mykonos',
      en: 'Mykonos Bar',
      fr: 'Bar à Mykonos',
      de: 'Bar auf Mykonos',
    },
    location: {
      it: 'Mykonos, Grecia',
      en: 'Mykonos, Greece',
      fr: 'Mykonos, Grèce',
      de: 'Mykonos, Griechenland',
    },
    year: '2021',
    scope: {
      it: 'Hospitality · Sedute, tavoli e lounge esterna',
      en: 'Hospitality · Seating, tables and outdoor lounge',
      fr: 'Hôtellerie · Assises, tables et salon extérieur',
      de: 'Hotellerie · Sitzmöbel, Tische und Outdoor-Lounge',
    },
    description: {
      it: 'Fornitura e posa degli arredi per un bar a Mykonos: poltroncine in legno e paglia di Vienna con imbottiture turchesi, divanetti a muro, tavoli e la lounge esterna sotto pergolato.',
      en: 'Supply and installation of the furniture for a bar in Mykonos: wood and Vienna-straw armchairs with turquoise upholstery, wall banquettes, tables and the outdoor lounge under the pergola.',
      fr: 'Fourniture et pose du mobilier pour un bar à Mykonos : fauteuils en bois et canne de Vienne aux coussins turquoise, banquettes murales, tables et salon extérieur sous pergola.',
      de: 'Lieferung und Montage der Möbel für eine Bar auf Mykonos: Sessel aus Holz und Wiener Geflecht mit türkisblauen Polstern, Wandbänke, Tische und die Outdoor-Lounge unter der Pergola.',
    },
    cover: img(`${P}/restaurants/genesi-restaurants-03.jpg`, 768, 1024),
    gallery: [
      img(`${P}/restaurants/genesi-restaurants-03.jpg`, 768, 1024),
      img(`${P}/restaurants/genesi-restaurants-06.jpg`, 768, 1024),
      img(`${P}/restaurants/genesi-restaurants-07.jpg`, 768, 1024),
      img(`${P}/restaurants/genesi-restaurants-04.jpg`, 1024, 768),
      img(`${P}/restaurants/genesi-restaurants-05.jpg`, 1280, 960),
    ],
    instagram: 'https://www.instagram.com/p/CrL8-ASOyY9/',
  },
  {
    slug: 'mykonos-restaurant',
    title: {
      it: 'Ristorante a Mykonos',
      en: 'Mykonos Restaurant',
      fr: 'Restaurant à Mykonos',
      de: 'Restaurant auf Mykonos',
    },
    location: {
      it: 'Mykonos, Grecia',
      en: 'Mykonos, Greece',
      fr: 'Mykonos, Grèce',
      de: 'Mykonos, Griechenland',
    },
    year: '2022',
    scope: {
      it: 'Hospitality · Arredo sala ristorante',
      en: 'Hospitality · Restaurant dining room',
      fr: 'Hôtellerie · Aménagement de la salle de restaurant',
      de: 'Hotellerie · Einrichtung des Restaurantsaals',
    },
    description: {
      it: 'Arredo completo della sala di un ristorante a Mykonos: sedute, tavoli e complementi coordinati con il soffitto in canniccio e il bancone rosso.',
      en: 'Complete furnishing of a restaurant dining room in Mykonos: seating, tables and accessories coordinated with the reed ceiling and the red bar counter.',
      fr: 'Aménagement complet de la salle d’un restaurant à Mykonos : assises, tables et accessoires coordonnés au plafond en canisse et au comptoir rouge.',
      de: 'Komplette Möblierung des Speisesaals eines Restaurants auf Mykonos: Sitzmöbel, Tische und Accessoires, abgestimmt auf die Schilfrohrdecke und den roten Bartresen.',
    },
    cover: img(`${P}/restaurants/genesi-restaurants-01.jpg`, 1600, 1067),
    gallery: [img(`${P}/restaurants/genesi-restaurants-01.jpg`, 1600, 1067)],
    instagram: 'https://www.instagram.com/p/CrMSZuauttg/',
  },
  {
    slug: 'bodrum-restaurant',
    title: {
      it: 'Ristorante a Bodrum',
      en: 'Bodrum Restaurant',
      fr: 'Restaurant à Bodrum',
      de: 'Restaurant in Bodrum',
    },
    location: {
      it: 'Bodrum, Turchia',
      en: 'Bodrum, Turkey',
      fr: 'Bodrum, Turquie',
      de: 'Bodrum, Türkei',
    },
    year: '2021',
    scope: {
      it: 'Hospitality · Arredo outdoor fronte mare',
      en: 'Hospitality · Seafront outdoor furniture',
      fr: 'Hôtellerie · Mobilier d’extérieur front de mer',
      de: 'Hotellerie · Outdoor-Möbel direkt am Meer',
    },
    description: {
      it: 'Lounge esterna fronte mare per un ristorante a Bodrum: poltrone in legno massello con cuscini sfoderabili e tavolini su pedana in doghe.',
      en: 'Seafront outdoor lounge for a restaurant in Bodrum: solid-wood armchairs with removable cushions and coffee tables on a timber deck.',
      fr: 'Salon extérieur front de mer pour un restaurant à Bodrum : fauteuils en bois massif avec coussins déhoussables et tables basses sur terrasse en caillebotis.',
      de: 'Outdoor-Lounge direkt am Meer für ein Restaurant in Bodrum: Massivholzsessel mit abziehbaren Kissen und Beistelltische auf einer Holzlatten-Plattform.',
    },
    cover: img(`${P}/restaurants/genesi-restaurants-08.jpg`, 768, 1024),
    gallery: [img(`${P}/restaurants/genesi-restaurants-08.jpg`, 768, 1024)],
    instagram: 'https://www.instagram.com/p/CrMNds4OJx-/',
  },
  {
    slug: 'restaurant-lighting',
    title: {
      it: 'Ristorante · Illuminazione e sedute su misura',
      en: 'Restaurant · Custom lighting and seating',
      fr: 'Restaurant · Éclairage et assises sur mesure',
      de: 'Restaurant · Maßgefertigte Beleuchtung und Sitzmöbel',
    },
    year: '2022',
    scope: {
      it: 'Hospitality · Lampade su disegno e banquette',
      en: 'Hospitality · Bespoke lamps and banquettes',
      fr: 'Hôtellerie · Luminaires sur mesure et banquettes',
      de: 'Hotellerie · Individuelle Leuchten und Wandbänke',
    },
    description: {
      it: 'Lampadari ottagonali realizzati su disegno, dalla produzione in laboratorio alla posa, insieme a banquette in velluto e sedute per la sala.',
      en: 'Octagonal pendant lamps made to design, from workshop production to installation, together with velvet banquettes and dining-room seating.',
      fr: 'Suspensions octogonales fabriquées sur mesure, de la production en atelier jusqu’à la pose, ainsi que des banquettes en velours et assises pour la salle.',
      de: 'Achteckige Hängeleuchten nach individuellem Entwurf, von der Werkstattfertigung bis zur Montage, zusammen mit Samtwandbänken und Stühlen für den Saal.',
    },
    cover: img(`${P}/restaurants/genesi-restaurants-02.jpg`, 820, 1024),
    gallery: [
      img(`${P}/restaurants/genesi-restaurants-02.jpg`, 820, 1024),
      img(`${P}/lighting/genesi-lighting-06.jpg`, 1024, 699),
      img(`${P}/lighting/genesi-lighting-07.jpg`, 1024, 576),
    ],
  },
  {
    slug: 'reception-desk',
    title: {
      it: 'Banco reception su misura',
      en: 'Bespoke reception desk',
      fr: 'Banque d’accueil sur mesure',
      de: 'Maßgefertigter Empfangstresen',
    },
    year: '2022',
    scope: {
      it: 'Contract · Produzione su disegno',
      en: 'Contract · Made to design',
      fr: 'Contract · Fabrication sur mesure',
      de: 'Contract · Fertigung nach Maß',
    },
    description: {
      it: 'Banco reception curvo in essenza, pelle e piano in pietra, prodotto interamente su disegno nei laboratori dei nostri partner.',
      en: 'Curved reception desk in wood veneer, leather and a stone top, made entirely to design in our partner workshops.',
      fr: 'Banque d’accueil courbée en placage de bois, cuir et plateau en pierre naturelle, réalisée entièrement sur mesure dans les ateliers de nos partenaires.',
      de: 'Geschwungener Empfangstresen aus edlem Holzfurnier, Leder und Natursteinplatte, komplett nach individuellem Entwurf in unseren Partnerwerkstätten gefertigt.',
    },
    cover: img(`${P}/complements/genesi-complements-02.jpg`, 1600, 1200),
    gallery: [
      img(`${P}/complements/genesi-complements-02.jpg`, 1600, 1200),
      img(`${P}/complements/genesi-complements-03.jpg`, 1600, 1200),
      img(`${P}/complements/genesi-complements-04.jpg`, 1024, 609),
      img(`${P}/complements/genesi-complements-05.jpg`, 768, 1024),
    ],
  },
  {
    slug: 'walk-in-closets',
    title: {
      it: 'Cabine armadio e guardaroba',
      en: 'Walk-in closets and wardrobes',
      fr: 'Dressing et garde-robes sur mesure',
      de: 'Begehbare Kleiderschränke und Garderoben',
    },
    year: '2022–2023',
    scope: {
      it: 'Residenziale · Arredo su misura',
      en: 'Residential · Bespoke joinery',
      fr: 'Résidentiel · Menuiserie sur mesure',
      de: 'Wohnbereich · Maßgefertigte Schreinermöbel',
    },
    description: {
      it: 'Cabine armadio con boiserie, vetrine illuminate e isola centrale, armadi a tutta altezza e la camera coordinata, realizzati su misura.',
      en: 'Walk-in closets with panelling, lit display cases and a central island, full-height wardrobes and a matching bedroom, all made to measure.',
      fr: 'Dressings avec boiseries, vitrines lumineuses et îlot central, armoires toute hauteur et chambre coordonnée, réalisés sur mesure.',
      de: 'Begehbare Kleiderschränke mit Wandvertäfelung, beleuchteten Vitrinen und Mittelinsel, raumhohe Schränke und abgestimmtes Schlafzimmer, alles nach Maß gefertigt.',
    },
    cover: img(`${P}/wardrobes/genesi-wardrobes-01.jpg`, 1024, 768),
    gallery: [
      img(`${P}/wardrobes/genesi-wardrobes-01.jpg`, 1024, 768),
      img(`${P}/wardrobes/genesi-wardrobes-02.jpg`, 768, 1024),
      img(`${P}/wardrobes/genesi-wardrobes-03.jpg`, 1024, 768),
      img(`${P}/wardrobes/genesi-wardrobes-04.jpg`, 768, 1024),
      img(`${P}/wardrobes/genesi-wardrobes-05.jpg`, 768, 1024),
      img(`${P}/hotel-rooms/genesi-hotel-rooms-01.jpg`, 1024, 768),
    ],
  },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'restaurants',
  'hotel-rooms',
  'kitchens',
  'wardrobes',
  'upholstery',
  'tables',
  'complements',
  'lighting',
  'bathroom',
  'marbles',
  'wood-flooring',
  'outdoor',
  'interior-design',
];

const g = (cat: GalleryCategory, n: number, w: number, h: number) => ({
  category: cat,
  ...img(`${P}/${cat}/genesi-${cat}-${String(n).padStart(2, '0')}.jpg`, w, h),
});

export type GalleryItem = ProjectImage & { category: GalleryCategory };

export const GALLERY: GalleryItem[] = [
  g('restaurants', 1, 1600, 1067), g('restaurants', 2, 820, 1024), g('restaurants', 3, 768, 1024),
  g('restaurants', 4, 1024, 768), g('restaurants', 5, 1280, 960), g('restaurants', 6, 768, 1024),
  g('restaurants', 7, 768, 1024), g('restaurants', 8, 768, 1024),
  g('hotel-rooms', 1, 1024, 768), g('hotel-rooms', 2, 1004, 952),
  g('kitchens', 1, 1076, 1536), g('kitchens', 2, 1075, 1536), g('kitchens', 3, 1075, 1536),
  g('kitchens', 4, 1075, 1536), g('kitchens', 5, 1075, 1536), g('kitchens', 6, 1075, 1536),
  g('kitchens', 7, 1024, 717), g('kitchens', 8, 896, 1024),
  g('wardrobes', 1, 1024, 768), g('wardrobes', 2, 768, 1024), g('wardrobes', 3, 1024, 768),
  g('wardrobes', 4, 768, 1024), g('wardrobes', 5, 768, 1024), g('wardrobes', 6, 1024, 768),
  g('wardrobes', 7, 1024, 768), g('wardrobes', 8, 1500, 2000), g('wardrobes', 9, 1500, 2000),
  g('wardrobes', 10, 1500, 2000),
  g('upholstery', 1, 1600, 900), g('upholstery', 2, 1600, 1200), g('upholstery', 3, 2000, 1500),
  g('upholstery', 4, 2000, 1500), g('upholstery', 5, 1599, 899), g('upholstery', 6, 1600, 1200),
  g('upholstery', 7, 1080, 1920),
  g('tables', 1, 720, 1280), g('tables', 2, 720, 1280), g('tables', 3, 1280, 958),
  g('tables', 4, 768, 1024), g('tables', 5, 578, 1024), g('tables', 6, 1024, 768),
  g('tables', 7, 576, 1024), g('tables', 8, 488, 753),
  g('complements', 1, 1024, 768), g('complements', 2, 1600, 1200), g('complements', 3, 1600, 1200),
  g('complements', 4, 1024, 609), g('complements', 5, 768, 1024), g('complements', 6, 1500, 2000),
  g('lighting', 1, 768, 1024), g('lighting', 2, 768, 1024), g('lighting', 3, 768, 1024),
  g('lighting', 4, 1599, 1239), g('lighting', 5, 1313, 936), g('lighting', 6, 1024, 699),
  g('lighting', 7, 1024, 576), g('lighting', 8, 960, 1280),
  g('bathroom', 1, 768, 1024),
  g('marbles', 1, 768, 1024), g('marbles', 2, 768, 1024), g('marbles', 3, 768, 1024),
  g('marbles', 4, 768, 1024),
  g('wood-flooring', 1, 1500, 2000),
  g('outdoor', 1, 1024, 577), g('outdoor', 2, 1045, 445), g('outdoor', 3, 576, 1024),
  g('outdoor', 4, 576, 1024),
  g('interior-design', 1, 996, 949), g('interior-design', 2, 512, 468),
];

export function pick(l: Localized, locale: string): string {
  return l[locale] || l.en || l.it || '';
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
