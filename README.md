# Multi-Vendor Mini Sites - Padisquare

A modern, responsive multi-vendor e-commerce platform built with Next.js 14, featuring dynamic vendor storefronts, dark mode, product search, sorting, and pagination.

## 🎯 Features

### Core Features
- ✅ **Multi-tenant routing** with `/site/[vendorSlug]` pattern
- ✅ **4 Vendor Stores**: Men's Fashion, Women's Fashion, Jewelry, Electronics
- ✅ **Product Search** - Real-time search functionality
- ✅ **Advanced Sorting** - Price (low→high, high→low), Most Recent
- ✅ **Pagination** - 12 products per page with URL state
- ✅ **Server Components** - Optimized performance with Next.js 14
- ✅ **SEO Optimized** - Dynamic metadata for each vendor

### UI/UX Features
- ✅ **Dark Mode** - Toggle with persistent theme preference
- ✅ **Loading States** - Skeleton loaders for smooth UX
- ✅ **Error Handling** - User-friendly error boundaries
- ✅ **Empty States** - Graceful handling of no results
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Smooth Animations** - Professional transitions and effects

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the folder, navigate to it
   cd multi-vendor-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
multi-vendor-project/
├── app/
│   ├── site/
│   │   └── [vendorSlug]/
│   │       ├── page.tsx          # Vendor storefront
│   │       ├── layout.tsx        # Vendor layout
│   │       ├── loading.tsx       # Loading state
│   │       ├── error.tsx         # Error boundary
│   │       └── not-found.tsx     # 404 page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/
│   ├── providers/
│   │   └── ThemeProvider.tsx     # Dark mode provider
│   └── ui/
│       ├── ThemeToggle.tsx       # Theme switcher
│       ├── LoadingSkeleton.tsx   # Loading components
│       ├── ErrorDisplay.tsx      # Error components
│       ├── VendorHero.tsx        # Hero section
│       ├── ProductCard.tsx       # Product card
│       ├── ProductGrid.tsx       # Product grid
│       ├── SearchBar.tsx         # Search input
│       ├── SortDropdown.tsx      # Sort selector
│       └── Pagination.tsx        # Pagination controls
├── lib/
│   ├── types.ts                  # TypeScript types
│   ├── vendors.ts                # Vendor config
│   ├── api.ts                    # API functions
│   └── utils.ts                  # Utilities
├── public/
│   └── vendors/                  # Vendor assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🏪 Available Vendors

Visit these URLs to explore the vendor stores:

1. **Men's Fashion Hub** - [/site/mens-fashion](http://localhost:3000/site/mens-fashion)
2. **Women's Fashion Boutique** - [/site/womens-fashion](http://localhost:3000/site/womens-fashion)
3. **Luxury Jewelry Store** - [/site/jewelry-store](http://localhost:3000/site/jewelry-store)
4. **Electronics & Tech** - [/site/tech-shop](http://localhost:3000/site/tech-shop)

## 🎨 Tech Stack

- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Theme**: next-themes
- **Icons**: Lucide React
- **API**: Fake Store API
- **Deployment**: Vercel-ready

## 🔧 Configuration

### Brand Color

The primary brand color (`#159C47`) is defined in:
- `tailwind.config.ts` - Theme configuration
- `lib/vendors.ts` - Vendor configurations

### Products Per Page

Default: 12 products per page

Change in `app/site/[vendorSlug]/page.tsx`:
```typescript
const limit = 12; // Modify this value
```

### Cache Duration

API responses are cached for 1 hour

Modify in `lib/api.ts`:
```typescript
next: { revalidate: 3600 } // seconds
```

## 🧪 Testing the Application

### Manual Testing Checklist

- [ ] Homepage loads with all 4 vendor cards
- [ ] Dark mode toggle works
- [ ] All vendor pages load correctly
- [ ] Search functionality works
- [ ] Sorting options work (price, recent)
- [ ] Pagination navigates correctly
- [ ] Loading skeletons appear
- [ ] Error page shows for invalid vendors
- [ ] Responsive on mobile/tablet/desktop

### Test URLs

```bash
# Homepage
http://localhost:3000

# Vendor Pages
http://localhost:3000/site/mens-fashion
http://localhost:3000/site/womens-fashion
http://localhost:3000/site/jewelry-store
http://localhost:3000/site/tech-shop

# Search & Filter
http://localhost:3000/site/mens-fashion?search=jacket
http://localhost:3000/site/tech-shop?sort=price-asc
http://localhost:3000/site/womens-fashion?page=2

# 404 Test
http://localhost:3000/site/invalid-vendor
```

## 📦 Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Other Platforms

The app can also be deployed to:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean

## 🎯 Key Features Explained

### Dark Mode
- Uses `next-themes` for theme management
- Persists user preference in localStorage
- No flash of wrong theme (FOUC prevention)
- System theme detection

### Loading States
- Server-side loading with `loading.tsx`
- Skeleton components for better UX
- Smooth transitions

### Error Handling
- Error boundaries catch runtime errors
- Network error detection
- User-friendly error messages
- Retry functionality

### SEO Optimization
- Dynamic metadata per vendor
- Proper Open Graph tags
- Semantic HTML structure

## 🔒 Environment Variables

No environment variables required! The app uses the public Fake Store API.

For production, you might want to add:

```env
# .env.local (optional)
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

## 🐛 Troubleshooting

### Issue: "Module not found"
**Solution**: Ensure all dependencies are installed
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Theme not persisting
**Solution**: Check browser's localStorage is enabled

### Issue: Images not loading
**Solution**: Verify `next.config.mjs` has the correct image domain

### Issue: Build fails
**Solution**: Delete `.next` and rebuild
```bash
rm -rf .next
npm run build
```

## 📚 API Reference

The app uses [Fake Store API](https://fakestoreapi.com):

- `GET /products/category/{category}` - Get products by category
- `GET /products/categories` - Get all categories

## 🎨 Customization

### Add a New Vendor

1. Update `lib/vendors.ts`:
   ```typescript
   'new-vendor': {
     slug: 'new-vendor',
     name: 'New Vendor Name',
     category: 'category-name',
     // ... other properties
   }
   ```

2. The route `/site/new-vendor` will automatically work!

### Change Colors

Update `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    DEFAULT: '#YOUR_COLOR',
    // ... other shades
  }
}
```

## 🤝 Contributing

This is a demo project for the Padisquare assignment. For improvements:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is created as an assignment submission for Padisquare.

## 👤 Contact

For questions or issues, please reach out to the assignment reviewer.

---

**Built with ❤️ for Padisquare** | Next.js 14 • TypeScript • TailwindCSS
