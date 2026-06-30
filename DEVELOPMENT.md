# MobiNest - Development Guidelines

## 🎯 Project Architecture

### Component Structure
All components are in `/components` directory with this pattern:

```typescript
// Naming: PascalCase
export default function ComponentName() {
  return (
    // Component JSX
  )
}
```

### Page Structure
Pages are organized by route in `/app` directory:

```typescript
// Server component (can have metadata)
export const metadata: Metadata = { ... }

export default function PageName() {
  return (
    // Page content
  )
}
```

### Type Safety
Always use TypeScript interfaces for:
- Props: `interface ComponentProps { ... }`
- Data: `interface Product { ... }`
- State: Keep typed with useState generics

## 📝 Coding Standards

### Component Templates

**Functional Component:**
```typescript
'use client'; // Add if component has interactivity

import { SomeType } from '@/types';

interface ComponentProps {
  title: string;
  items: SomeType[];
}

export default function ComponentName({ title, items }: ComponentProps) {
  return <div>{title}</div>;
}
```

**Page Component:**
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title - MobiNest',
  description: 'Page description for SEO',
};

export default function PageName() {
  return <main>{/* content */}</main>;
}
```

## 🎨 Styling Guidelines

### Tailwind CSS Classes
- Use utility classes for all styling
- Responsive prefixes: `sm:`, `md:`, `lg:`
- Hover/focus states: `hover:`, `focus:`
- Never use inline styles

**Example:**
```typescript
<button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
  Click Me
</button>
```

### Color Usage
- **Primary text**: `text-gray-900`
- **Secondary text**: `text-gray-600`
- **Backgrounds**: `bg-white`, `bg-gray-50`
- **Borders**: `border-gray-200`
- **Accents**: `bg-black`, `text-blue-400`

### Spacing
- **Padding**: `p-4`, `px-6`, `py-3`
- **Margins**: `m-4`, `mb-8`, `mt-6`
- **Gaps**: `gap-4`, `space-y-4`

## 📦 File Organization

### Imports Organization
```typescript
// 1. React/Next.js imports
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 2. Project imports
import { ProductCard } from '@/components';
import { getProducts } from '@/lib/products';
import { Product } from '@/types';

// 3. Styling (if applicable)
import styles from './component.module.css';
```

### Export Pattern
```typescript
// Use named exports for types
export interface Product { ... }

// Use default export for components
export default function Component() { ... }
```

## 🔄 State Management

### useState Hook
```typescript
'use client';

import { useState } from 'react';

export default function Component() {
  const [count, setCount] = useState<number>(0);
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Cart Management
```typescript
import { getCart, addToCart } from '@/lib/cart';

const cart = getCart(); // Get cart
addToCart(product, quantity); // Add item
```

## 🔍 SEO Best Practices

### Meta Tags
```typescript
export const metadata: Metadata = {
  title: 'Page Title - MobiNest',
  description: 'Unique description under 160 characters',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    images: [{ url: 'image.jpg', width: 1200, height: 630 }],
  },
};
```

### Image Optimization
Always use Next.js Image component:
```typescript
import Image from 'next/image';

<Image
  src="https://images.unsplash.com/..."
  alt="Descriptive alt text"
  width={500}
  height={500}
  priority // Only for above-the-fold
/>
```

## ⚡ Performance Tips

### Code Splitting
- Keep components small and focused
- Use lazy loading when appropriate
- Split large pages into smaller components

### Image Optimization
- Use Next.js Image for all images
- Specify width/height to prevent layout shift
- Use priority on above-fold images

### Bundle Size
- Prefer small dependencies
- Avoid client-side rendering when possible
- Use dynamic imports for heavy components

## 🧪 Testing Checklist

### Before Committing
- [ ] TypeScript compiles without errors
- [ ] ESLint passes: `npm run lint`
- [ ] Build completes successfully: `npm run build`
- [ ] Dev server starts: `npm run dev`
- [ ] Responsive on mobile (320px), tablet (768px), desktop (1024px)
- [ ] All links work
- [ ] Forms submit without errors
- [ ] Cart persists across refresh

## 🐛 Debugging Tips

### Common Issues

**1. TypeScript Errors**
```bash
# Check specific file
npx tsc app/page.tsx --noEmit
```

**2. Build Errors**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**3. Image Not Loading**
- Check URL is accessible
- Verify domain in `next.config.ts`
- Check image dimensions

**4. Cart Not Persisting**
- Check localStorage is enabled
- Verify no errors in browser console
- Check cart key: `mobinest-cart`

## 📚 Resources

### Documentation Links
- [Next.js App Router](https://nextjs.org/docs/app)
- [React Hooks](https://react.dev/reference/react)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)

### External APIs
- [Unsplash Images](https://source.unsplash.com/)
- [Google Fonts](https://fonts.google.com/)

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] All TypeScript types are correct
- [ ] No console.log statements in production
- [ ] Environment variables configured
- [ ] Build size optimized
- [ ] Images from CDN (Unsplash)
- [ ] Sitemaps generated
- [ ] Meta tags optimized
- [ ] 404 page works
- [ ] Cart functions correctly
- [ ] Mobile responsive tested
- [ ] Performance audit passed (Lighthouse)
- [ ] Security headers configured

## 💡 Best Practices

### Component Design
- ✅ Keep components focused and small
- ✅ Use props for flexibility
- ✅ Prefer composition over props drilling
- ✅ Export reusable components from index.ts

### Type Safety
- ✅ Always type props interfaces
- ✅ Use strict TypeScript mode
- ✅ Avoid `any` type
- ✅ Create interfaces for complex objects

### Styling
- ✅ Use Tailwind utility classes
- ✅ Maintain consistent spacing
- ✅ Use CSS custom properties for theming
- ✅ Follow mobile-first approach

### Performance
- ✅ Use Next.js Image component
- ✅ Code split with dynamic imports
- ✅ Lazy load below-fold content
- ✅ Minimize bundle size

### SEO
- ✅ Add meta tags to all pages
- ✅ Use semantic HTML
- ✅ Add alt text to images
- ✅ Create sitemap and robots.txt

## 🔐 Security Considerations

- ✅ No hardcoded credentials
- ✅ Validate form inputs
- ✅ Use HTTPS only
- ✅ Set security headers
- ✅ Keep dependencies updated
- ✅ Sanitize user inputs
- ✅ Use environment variables for secrets

## 📞 Getting Help

### Debugging Process
1. Check browser console for errors
2. Check Next.js terminal output
3. Use React DevTools
4. Check TypeScript errors: `npm run lint`
5. Clear cache and rebuild: `rm -rf .next`
6. Check official documentation

---

**Happy Developing! 🎉**
