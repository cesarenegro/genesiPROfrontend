import velaData from '@/data/vela.json';
import extensionsData from '@/data/vela-extensions.json';

export type Locale = 'it' | 'en' | 'de' | 'fr' | 'ru' | 'zh' | 'id';

export interface LocalizedText {
  it: string;
  en: string;
  de?: string;
  fr?: string;
  ru?: string;
  zh?: string;
  id?: string;
}

export interface VelaImage {
  url: string;
  type: 'ambient' | 'elevation' | 'detail' | 'drawing';
  label: LocalizedText;
  width: number;
  height: number;
}

export interface VelaTechnicalDrawing {
  code: string;
  image: string;
  filename: string;
  width: number;
  height: number;
  aspectRatio: string;
  modelName: string;
  type: string;
  nominalDimensions: {
    widthMm: number | string;
    heightMm: number;
    thicknessMm: number;
    note?: string;
  };
  disclaimer: LocalizedText;
}

export interface VelaProduct {
  id: string;
  slug: string;
  aliases?: string[];
  familyId: string;
  code: string;
  name: LocalizedText;
  openingType: 'pivot' | 'sliding' | 'swing' | 'double';
  summary: LocalizedText;
  mainImage: string;
  elevationImage?: string;
  images: VelaImage[];
  verifiedFeatures: LocalizedText[];
  technicalDrawing?: VelaTechnicalDrawing;
  nominalDimensions?: {
    widthMm: number | string;
    heightMm: number;
    thicknessMm: number;
    note?: string;
  };
}

export interface VelaFamily {
  id: string;
  slug: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  heroImage: string;
  status: 'available' | 'in_preparation';
  count: number;
}

export interface VelaBrand {
  name: string;
  payoff: string;
  claim: LocalizedText;
  description: LocalizedText;
}

export interface VelaHotelDoor {
  id: string;
  slug: string;
  name: LocalizedText;
  material: LocalizedText;
  description: LocalizedText;
  image: string;
  width: number;
  height: number;
  features: string[];
  tag?: string;
}

export interface VelaResidentialDoor {
  id: string;
  slug: string;
  name: LocalizedText;
  material: LocalizedText;
  description: LocalizedText;
  image: string;
  width: number;
  height: number;
  features: string[];
  type?: 'pivot' | 'sliding' | 'swing' | 'double';
}

export interface VelaDetailShot {
  id: string;
  title: LocalizedText;
  desc: LocalizedText;
  image: string;
  width: number;
  height: number;
}

export interface VelaHandle {
  id: string;
  slug: string;
  name: LocalizedText;
  type: 'lever' | 'pull' | 'recessed' | 'hardware';
  material: LocalizedText;
  description: LocalizedText;
  image: string;
  width: number;
  height: number;
  compatibility: string;
  finishes: string[];
}

export async function getVelaBrand(): Promise<VelaBrand> {
  return velaData.brand as VelaBrand;
}

export async function getVelaFamilies(): Promise<VelaFamily[]> {
  return velaData.families as VelaFamily[];
}

export async function getVelaProducts(): Promise<VelaProduct[]> {
  return velaData.products as VelaProduct[];
}

export async function getVelaProductBySlug(slug: string): Promise<VelaProduct | undefined> {
  const products = await getVelaProducts();
  const lower = slug.toLowerCase();
  return products.find(p => p.slug === lower || (p.aliases && p.aliases.includes(lower)));
}

export async function getVelaProductsByFamily(familyId: string): Promise<VelaProduct[]> {
  const products = await getVelaProducts();
  return products.filter(p => p.familyId === familyId);
}

export async function getVelaHotelDoors(): Promise<VelaHotelDoor[]> {
  return extensionsData.hotelDoors as VelaHotelDoor[];
}

export async function getVelaHotelDetails(): Promise<VelaDetailShot[]> {
  return (extensionsData as any).hotelDetails as VelaDetailShot[];
}

export async function getVelaResidentialExtensions(): Promise<VelaResidentialDoor[]> {
  return extensionsData.residentialDoors as VelaResidentialDoor[];
}

export async function getVelaResidentialDetails(): Promise<VelaDetailShot[]> {
  return (extensionsData as any).residentialDetails as VelaDetailShot[];
}

export async function getVelaHandles(): Promise<VelaHandle[]> {
  return extensionsData.handles as VelaHandle[];
}

export interface VelaHandleVariant {
  id: string;
  finishName: LocalizedText;
  colorHex: string;
  image: string;
  sheetSvg: string;
  sheetFilename: string;
}

export interface VelaDimensionItem {
  label: string;
  value: string;
}

export interface VelaConceptHandle {
  id: string;
  name: LocalizedText;
  type: 'lever' | 'recessed' | 'knob' | 'pull';
  description: LocalizedText;
  defaultVariant: string;
  variants: VelaHandleVariant[];
  indicativeDimensions: LocalizedText;
  dimensionsSummary: VelaDimensionItem[];
  compatibleOpeningTypes: Array<'pivot' | 'sliding' | 'swing' | 'double'>;
  compatibleFamilies?: string[];
  compatibleCodes?: string[];
  compatibilityNote: LocalizedText;
}

export async function getVelaConceptHandles(): Promise<VelaConceptHandle[]> {
  const data = await import('@/data/vela-concept-handles.json');
  return data.default as unknown as VelaConceptHandle[];
}

export async function getCompatibleHandlesForProduct(product: VelaProduct): Promise<VelaConceptHandle[]> {
  const handles = await getVelaConceptHandles();
  return handles.filter((h) => {
    if (h.compatibleCodes && h.compatibleCodes.includes(product.code)) {
      return true;
    }
    if (product.code === 'IN-08' && h.id !== 'maniglione-vetro') {
      return false;
    }
    const matchesOpening = h.compatibleOpeningTypes.includes(product.openingType);
    const matchesFamily = !h.compatibleFamilies || h.compatibleFamilies.includes(product.familyId);
    return matchesOpening && matchesFamily;
  });
}


