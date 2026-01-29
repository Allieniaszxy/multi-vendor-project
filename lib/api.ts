import { Product, ProductFilters } from './types';

const API_BASE = 'https://fakestoreapi.com';

// Cache configuration for Next.js
export const revalidate = 3600; // 1 hour

/**
 * Fetch all products from a specific category (vendor)
 */
export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  try {
    const response = await fetch(
      `${API_BASE}/products/category/${encodeURIComponent(category)}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Filter and sort products based on user selections
 */
export function filterAndSortProducts(
  products: Product[],
  filters: ProductFilters
): Product[] {
  let filtered = [...products];

  // Search filter
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
    );
  }

  // Sorting
  switch (filters.sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'recent':
      // Since API doesn't have dates, we'll use ID as proxy
      filtered.sort((a, b) => b.id - a.id);
      break;
    default:
      // Keep default order
      break;
  }

  return filtered;
}

/**
 * Paginate products
 */
export function paginateProducts(
  products: Product[],
  page: number = 1,
  limit: number = 12
): {
  products: Product[];
  totalPages: number;
  currentPage: number;
  totalProducts: number;
} {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = products.slice(startIndex, endIndex);

  return {
    products: paginatedProducts,
    totalPages: Math.ceil(products.length / limit),
    currentPage: page,
    totalProducts: products.length,
  };
}

/**
 * Get all available categories (for generating vendor pages)
 */
export async function getAllCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE}/products/categories`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}
