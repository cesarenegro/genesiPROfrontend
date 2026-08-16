import categoriesData from '@/data/categories.json';
import productsData from '@/data/products.json';

export type Locale = 'en' | 'it' | 'ru' | 'zh' | 'id' | 'fr' | 'de';

export type LocalizedString = Partial<Record<Locale, string>> & { en: string };

export interface Category {
  id: string;
  slug: string;
  title: LocalizedString;
  description?: LocalizedString;
  isActive: boolean;
}

export interface ProductImage {
  url: string;
  viewType: 'front' | 'side' | 'gallery';
  isPrimary: boolean;
}

export interface Product {
  id: string;
  categoryId: string;
  slug: string;
  sku: string;
  title: LocalizedString;
  description?: LocalizedString;
  specifications?: LocalizedString;
  materials?: LocalizedString;
  dimensions?: LocalizedString;
  tearSheetUrl?: string;
  images: ProductImage[];
  isPublished: boolean;
}

// Helper functions to fetch data
export async function getCategories(): Promise<Category[]> {
  // In a real app with JSON, this is instantaneous
  return (categoriesData as Category[]).filter(c => c.isActive);
}

export async function getProducts(): Promise<Product[]> {
  return (productsData as Product[]).filter(p => p.isPublished);
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  const all = await getProducts();
  return all.filter(p => p.categoryId === categoryId);
}
