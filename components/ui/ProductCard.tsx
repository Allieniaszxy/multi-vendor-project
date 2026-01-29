"use client";

import Image from "next/image";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  accentColor?: string;
}

export default function ProductCard({
  product,
  accentColor = "#159C47",
}: ProductCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative aspect-square bg-gray-100 dark:bg-gray-700">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-2 min-h-[2.5rem]">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
              {product.rating.rate}
            </span>
          </div>
          <span className="text-xs text-gray-400">
            ({product.rating.count})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          <button
            className="px-4 py-2 rounded-md text-sm font-medium text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: accentColor }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}
