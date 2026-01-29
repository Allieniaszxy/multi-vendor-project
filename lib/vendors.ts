import { Vendor } from './types';

export const VENDORS: Record<string, Vendor> = {
  'mens-fashion': {
    slug: 'mens-fashion',
    name: "Men's Fashion Hub",
    category: "men's clothing",
    logo: '/vendors/mens-fashion/logo.png',
    heroImage: '/vendors/mens-fashion/hero.jpg',
    description: 'Discover the latest trends in men\'s fashion',
    primaryColor: '#159C47',
  },
  'womens-fashion': {
    slug: 'womens-fashion',
    name: "Women's Fashion Boutique",
    category: "women's clothing",
    logo: '/vendors/womens-fashion/logo.png',
    heroImage: '/vendors/womens-fashion/hero.jpg',
    description: 'Elegant and stylish women\'s apparel',
    primaryColor: '#159C47',
  },
  'jewelry-store': {
    slug: 'jewelry-store',
    name: 'Luxury Jewelry Store',
    category: 'jewelery',
    logo: '/vendors/jewelry-store/logo.png',
    heroImage: '/vendors/jewelry-store/hero.jpg',
    description: 'Exquisite jewelry for every occasion',
    primaryColor: '#159C47',
  },
  'tech-shop': {
    slug: 'tech-shop',
    name: 'Electronics & Tech',
    category: 'electronics',
    logo: '/vendors/tech-shop/logo.png',
    heroImage: '/vendors/tech-shop/hero.jpg',
    description: 'Cutting-edge electronics and gadgets',
    primaryColor: '#159C47',
  },
};

export function getVendorBySlug(slug: string): Vendor | null {
  return VENDORS[slug] || null;
}

export function getAllVendorSlugs(): string[] {
  return Object.keys(VENDORS);
}
