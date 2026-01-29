import {
  HeroSkeleton,
  SearchBarSkeleton,
  SortDropdownSkeleton,
  ProductGridSkeleton,
  PaginationSkeleton,
} from '@/components/ui/LoadingSkeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HeroSkeleton />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <SearchBarSkeleton />
          <SortDropdownSkeleton />
        </div>

        <div className="mb-4 h-4 bg-gray-200 dark:bg-gray-800 rounded w-48 animate-pulse" />

        <ProductGridSkeleton count={12} />

        <div className="mt-12">
          <PaginationSkeleton />
        </div>
      </div>
    </div>
  );
}
