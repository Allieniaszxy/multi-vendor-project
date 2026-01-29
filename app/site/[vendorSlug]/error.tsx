'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { ErrorDisplay } from '@/components/ui/ErrorDisplay';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Vendor page error:', error);
  }, [error]);

  const isNetworkError = error.message?.includes('fetch') || 
                        error.message?.includes('network') ||
                        error.message?.includes('Failed to fetch');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
        <ErrorDisplay
          title={isNetworkError ? 'Connection Error' : 'Something went wrong'}
          message={
            isNetworkError
              ? 'Unable to load the vendor page. Please check your internet connection.'
              : 'We encountered an error while loading this vendor page. Please try again.'
          }
          type={isNetworkError ? 'network' : 'error'}
          action={{
            label: 'Try Again',
            onClick: reset,
          }}
          showDetails={process.env.NODE_ENV === 'development'}
          details={error.message}
        />

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Home className="w-4 h-4" />
            Go back to homepage
          </Link>
        </div>

        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
}
