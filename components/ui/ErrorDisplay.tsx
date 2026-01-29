'use client';

import { AlertCircle, AlertTriangle, WifiOff, ServerCrash } from 'lucide-react';

interface ErrorDisplayProps {
  title?: string;
  message?: string;
  type?: 'error' | 'warning' | 'network' | 'server';
  action?: {
    label: string;
    onClick: () => void;
  };
  showDetails?: boolean;
  details?: string;
}

const errorIcons = {
  error: AlertCircle,
  warning: AlertTriangle,
  network: WifiOff,
  server: ServerCrash,
};

const errorColors = {
  error: {
    icon: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-100 dark:bg-red-900/20',
  },
  warning: {
    icon: 'text-yellow-600 dark:text-yellow-400',
    bg: 'bg-yellow-100 dark:bg-yellow-900/20',
  },
  network: {
    icon: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-100 dark:bg-blue-900/20',
  },
  server: {
    icon: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-100 dark:bg-orange-900/20',
  },
};

export function ErrorDisplay({
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please try again.',
  type = 'error',
  action,
  showDetails = false,
  details,
}: ErrorDisplayProps) {
  const Icon = errorIcons[type];
  const colors = errorColors[type];

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mb-4`}>
        <Icon className={`w-8 h-8 ${colors.icon}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
        {message}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-3 bg-[#159C47] hover:bg-[#117D39] text-white font-medium rounded-lg transition-colors"
        >
          {action.label}
        </button>
      )}
      {showDetails && details && (
        <details className="mt-6 w-full max-w-2xl">
          <summary className="cursor-pointer text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            Show error details
          </summary>
          <pre className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left text-xs text-gray-700 dark:text-gray-300 overflow-auto">
            {details}
          </pre>
        </details>
      )}
    </div>
  );
}

export function EmptyState({
  title,
  message,
  icon: Icon = AlertCircle,
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
      <p className="text-gray-600 dark:text-gray-400 max-w-md">
        {message}
      </p>
    </div>
  );
}
