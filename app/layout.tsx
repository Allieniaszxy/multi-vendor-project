import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Padisquare - Multi-Vendor Marketplace',
  description: 'Discover amazing products from multiple vendors in one place',
  keywords: ['marketplace', 'e-commerce', 'multi-vendor', 'shopping'],
  authors: [{ name: 'Padisquare' }],
  openGraph: {
    title: 'Padisquare - Multi-Vendor Marketplace',
    description: 'Discover amazing products from multiple vendors in one place',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
