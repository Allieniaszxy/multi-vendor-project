import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVendorBySlug } from "@/lib/vendors";
import {
  getProductsByCategory,
  filterAndSortProducts,
  paginateProducts,
} from "@/lib/api";
import VendorHero from "@/components/ui/VendorHero";
import ProductGrid from "@/components/ui/ProductGrid";
import SearchBar from "@/components/ui/SearchBar";
import SortDropdown from "@/components/ui/SortDropdown";
import Pagination from "@/components/ui/Pagination";
import { SortOption, Product } from "@/lib/types";

interface PageProps {
  params: { vendorSlug: string };
  searchParams: { search?: string; sort?: SortOption; page?: string };
}

// Force dynamic rendering to avoid build-time API calls
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const vendor = getVendorBySlug(params.vendorSlug);

  if (!vendor) {
    return {
      title: "Vendor Not Found",
    };
  }

  return {
    title: `${vendor.name} | Padisquare`,
    description: vendor.description,
    openGraph: {
      title: vendor.name,
      description: vendor.description,
    },
  };
}

export default async function VendorPage({ params, searchParams }: PageProps) {
  const vendor = getVendorBySlug(params.vendorSlug);

  if (!vendor) {
    notFound();
  }

  let allProducts: Product[] = [];
  try {
    allProducts = await getProductsByCategory(vendor.category);
  } catch (error) {
    console.error("Error loading products:", error);
    allProducts = [];
  }

  const filteredProducts = filterAndSortProducts(allProducts, {
    search: searchParams.search,
    sort: searchParams.sort,
  });

  const page = parseInt(searchParams.page || "1", 10);
  const limit = 12;
  const { products, totalPages, currentPage, totalProducts } = paginateProducts(
    filteredProducts,
    page,
    limit,
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <VendorHero vendor={vendor} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <SearchBar defaultValue={searchParams.search} />
          </div>
          <div className="sm:w-64">
            <SortDropdown defaultValue={searchParams.sort} />
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Showing {products.length} of {totalProducts} products
          {searchParams.search && ` for "${searchParams.search}"`}
        </div>

        <ProductGrid
          products={products}
          vendorColor={vendor.primaryColor}
          searchQuery={searchParams.search}
        />

        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              vendorSlug={vendor.slug}
            />
          </div>
        )}
      </div>
    </div>
  );
}
