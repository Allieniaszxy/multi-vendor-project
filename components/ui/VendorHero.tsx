import { Vendor } from '@/lib/types';
import { Store } from 'lucide-react';

interface VendorHeroProps {
  vendor: Vendor;
}

export default function VendorHero({ vendor }: VendorHeroProps) {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 dark:from-black dark:to-gray-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Vendor Logo */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-white dark:bg-gray-800 rounded-full p-4 shadow-xl ring-4 ring-white/10 flex items-center justify-center">
            <Store className="w-12 h-12 sm:w-16 sm:h-16 text-[#159C47]" />
          </div>

          {/* Vendor Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {vendor.name}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
              {vendor.description}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div 
        className="h-1 w-full"
        style={{ backgroundColor: vendor.primaryColor }}
      />
    </div>
  );
}
