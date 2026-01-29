export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Vendor {
  slug: string;
  name: string;
  category: string;
  logo: string;
  heroImage: string;
  description: string;
  primaryColor: string;
}

export type SortOption = 'price-asc' | 'price-desc' | 'recent' | 'default';

export interface ProductFilters {
  search?: string;
  sort?: SortOption;
  page?: number;
  limit?: number;
}
