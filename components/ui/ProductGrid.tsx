"use client";

import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import { Package, Search } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  vendorColor?: string;
  searchQuery?: string;
}

function EmptyState({
  title,
  message,
  icon: Icon = Package,
}: {
  title: string;
  message: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 max-w-md">{message}</p>
    </div>
  );
}

export default function ProductGrid({
  products,
  vendorColor = "#159C47",
  searchQuery,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState
        title={searchQuery ? "No products found" : "No products available"}
        message={
          searchQuery
            ? `We couldn't find any products matching "${searchQuery}". Try adjusting your search.`
            : "There are no products available at the moment. Please check back later."
        }
        icon={searchQuery ? Search : Package}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          accentColor={vendorColor}
        />
      ))}
    </div>
  );
}
