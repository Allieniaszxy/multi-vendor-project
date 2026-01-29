import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Store, Home } from "lucide-react";

export default function VendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-[#159C47] dark:hover:text-[#159C47] transition-colors"
              >
                <Store className="w-6 h-6" />
                <span className="font-bold text-lg hidden sm:inline">
                  Padisquare
                </span>
              </Link>

              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />

              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">All Stores</span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
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
