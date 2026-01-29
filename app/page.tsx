import Link from "next/link";
import { VENDORS } from "@/lib/vendors";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Store, ArrowRight } from "lucide-react";

export default function HomePage() {
  const vendors = Object.values(VENDORS);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black transition-colors">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#159C47] rounded-lg flex items-center justify-center">
                <Store className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Padisquare
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Multi-Vendor Marketplace
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Discover Amazing Products
            <br />
            <span className="text-[#159C47]">From Multiple Vendors</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            Explore curated storefronts from our trusted vendors. Each vendor
            brings unique products and exceptional quality to your shopping
            experience.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vendors.map((vendor) => (
              <Link
                key={vendor.slug}
                href={`/site/${vendor.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="relative h-48 sm:h-64 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-4 left-4 w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-900 rounded-full p-3 shadow-xl ring-4 ring-white/20 flex items-center justify-center">
                    <Store className="w-8 h-8 sm:w-10 sm:h-10 text-[#159C47]" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#159C47] dark:group-hover:text-[#159C47] transition-colors">
                        {vendor.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {vendor.description}
                      </p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#159C47] group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300">
                    {vendor.category}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p className="mb-2">
              © {new Date().getFullYear()} Padisquare. All rights reserved.
            </p>
            <p className="text-xs">Built with Next.js 14 & TailwindCSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
