# MobiNest - Installation & Setup Guide

## ✅ Quick Start

### Prerequisites
- Node.js 18 or higher
- npm (comes with Node.js)
- macOS, Windows, or Linux

### Installation Steps

1. **Navigate to project directory**
```bash
cd /Users/newtouch/Desktop/mobinest
```

2. **Install dependencies** (already done)
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

This will create an optimized production build in the `.next` directory.

## 📁 Project File Structure

### Key Directories

**`/app`** - Next.js App Router pages and layouts
- `page.tsx` - Home page
- `layout.tsx` - Root layout with global components
- `globals.css` - Global styles
- `not-found.tsx` - 404 error page
- `sitemap.ts` - SEO sitemap generator

**Routes:**
- `/` - Home page
- `/shop` - Shop/browse products
- `/products/[id]` - Product detail page
- `/cart` - Shopping cart
- `/about` - About page
- `/contact` - Contact page

**`/components`** - Reusable React components
- `Navbar.tsx` - Navigation bar
- `Footer.tsx` - Footer
- `Hero.tsx` - Hero section
- `ProductCard.tsx` - Individual product card
- `ProductGrid.tsx` - Product grid layout
- `CategoryCard.tsx` - Category card
- `CategoryGrid.tsx` - Category grid
- `Breadcrumb.tsx` - Breadcrumb navigation
- `CartSummary.tsx` - Cart summary sidebar
- `index.ts` - Component exports

**`/lib`** - Utilities and business logic
- `products.ts` - Product data and helper functions
- `cart.ts` - Shopping cart management with localStorage

**`/types`** - TypeScript type definitions
- `index.ts` - All type exports

**`/public`** - Static assets
- `robots.txt` - SEO robots file

### Configuration Files

- `next.config.ts` - Next.js configuration (image optimization)
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration (auto-generated)
- `postcss.config.mjs` - PostCSS configuration (auto-generated)
- `.eslintrc.json` - ESLint configuration
- `package.json` - Dependencies and scripts

## 🎨 Design & Styling

### Tailwind CSS
The project uses Tailwind CSS v4 for all styling. All components use utility classes.

**Color Scheme:**
- Black: `#000000` (text, buttons, accents)
- White: `#FFFFFF` (background)
- Gray scale: `gray-50` to `gray-900`
- Accent colors: Blue, Purple, Pink (gradients)

### Responsive Design
- Mobile: `<640px`
- Tablet: `640px - 1024px`
- Desktop: `>1024px`

Use Tailwind's responsive prefixes:
- `sm:` - Small screens
- `md:` - Medium screens
- `lg:` - Large screens

## 🛒 Shopping Cart

### How It Works
1. Cart data stored in browser's localStorage
2. Key: `mobinest-cart`
3. Persists across browser sessions
4. Sync across tabs using `storage` events

### Cart Functions (in `/lib/cart.ts`)
- `getCart()` - Retrieve cart items
- `addToCart()` - Add product to cart
- `removeFromCart()` - Remove product from cart
- `updateCartItemQuantity()` - Update quantity
- `clearCart()` - Clear entire cart
- `getCartTotal()` - Calculate total price
- `getCartItemCount()` - Get total item count

## 📊 Sample Products

The project includes 8 sample products with real Unsplash images:

1. **Pro Max Smartphone** - AED 1,299 (Smartphones)
2. **Ultra Tablet Pro** - AED 849 (Tablets)
3. **Wireless Pro Earbuds** - AED 399 (Accessories)
4. **Smart Watch Ultra** - AED 599 (Wearables)
5. **Compact Phone** - AED 599 (Smartphones)
6. **USB-C Cable (2m)** - AED 19 (Accessories)
7. **Wireless Charger** - AED 59 (Accessories)
8. **Fitness Band** - AED 149 (Wearables)

Edit products in `/lib/products.ts`

## 🔍 SEO Configuration

### Meta Tags
Each page has optimized meta tags:
- Title: `{Page Name} - MobiNest`
- Description: Unique description per page
- Keywords: Relevant search terms
- Open Graph tags for social sharing

### Sitemap
Auto-generated at `/sitemap.xml` with:
- All pages and products
- Priority levels
- Change frequency

### Robots.txt
Located in `/public/robots.txt` for search engine crawling

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Other Platforms
1. Build: `npm run build`
2. Output: `.next` directory
3. Start: `npm start` (port 3000)

### Environment Variables
Currently no env variables required, but add to `.env.local` if needed:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🧪 Testing & Linting

### Run Linter
```bash
npm run lint
```

Fixes ESLint issues with:
```bash
npm run lint -- --fix
```

## 📝 TypeScript

All components are fully typed. Key types in `/types/index.ts`:

```typescript
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  // ... more fields
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}
```

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build Errors
1. Clear cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check Node version: `node --version` (should be 18+)

### Cart Not Persisting
- Check browser's localStorage is enabled
- Verify no privacy mode/incognito (localStorage disabled)
- Check browser console for errors

### Images Not Loading
- Verify Unsplash URLs are accessible
- Check Next.js image optimization in `next.config.ts`
- Ensure images are from allowed domains

## 📚 Additional Resources

- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

## 🆘 Support

For issues or questions:
1. Check the README.md for feature overview
2. Review component documentation in code comments
3. Check Next.js official documentation
4. Review TypeScript errors carefully

## ✨ Next Steps

1. **Customize Products**: Edit `/lib/products.ts` with your products
2. **Update Branding**: Modify colors, fonts, and company info
3. **Add Payment**: Integrate payment gateway (Stripe, PayPal)
4. **Connect Backend**: Replace sample data with API calls
5. **Analytics**: Add Google Analytics or similar
6. **Database**: Add database for products and orders

---

**Happy coding! 🎉**
