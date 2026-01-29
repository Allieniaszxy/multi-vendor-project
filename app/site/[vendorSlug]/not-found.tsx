import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800">
            404
          </h1>
          <div className="relative -mt-16">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-[#159C47] rounded-full">
              <Search className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Vendor Not Found
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          We couldn't find the vendor store you're looking for. It may have been moved, 
          removed, or the URL might be incorrect.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Available Vendor Stores:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { slug: 'mens-fashion', name: "Men's Fashion Hub" },
              { slug: 'womens-fashion', name: "Women's Fashion Boutique" },
              { slug: 'jewelry-store', name: 'Luxury Jewelry Store' },
              { slug: 'tech-shop', name: 'Electronics & Tech' },
            ].map((vendor) => (
              <Link
                key={vendor.slug}
                href={`/site/${vendor.slug}`}
                className="px-4 py-3 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-gray-900 dark:text-white font-medium transition-colors"
              >
                {vendor.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#159C47] hover:bg-[#117D39] text-white font-medium rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          Need help? Contact our support team.
        </p>
      </div>
    </div>
  );
}
