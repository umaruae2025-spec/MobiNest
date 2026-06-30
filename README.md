# MobiNest - Premium E-Commerce Platform

A modern, production-ready e-commerce website for mobile phones, tablets, and tech accessories built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

### Frontend
- ✅ **Modern Black & White Premium Design** - Clean, professional aesthetic
- ✅ **Responsive Design** - Fully responsive for mobile, tablet, and desktop
- ✅ **Next.js 16 App Router** - Latest Next.js features and routing
- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **Tailwind CSS 4** - Modern utility-first styling
- ✅ **Image Optimization** - Using Next.js Image component with Unsplash integration
- ✅ **Fast Performance** - Optimized for Lighthouse and Core Web Vitals

### Pages & Features
- 🏠 **Home Page** - Hero section with categories, featured products, and trust indicators
- 🛍️ **Shop Page** - Browse all products with filtering by category and sorting options
- 🔍 **Product Detail Pages** - Comprehensive product information with specifications
- 🛒 **Shopping Cart** - Persistent cart with local storage
- ℹ️ **About Page** - Company story and values
- 📧 **Contact Page** - Contact form and business information
- 🦶 **Footer** - Navigation, social links, and company info

### Components
- **Navbar** - Responsive navigation with mobile menu and cart counter
- **Footer** - Multi-column footer with links and social media
- **Hero** - Large hero section with CTA buttons
- **ProductCard** - Individual product cards with ratings and prices
- **ProductGrid** - Responsive grid layout for products
- **CategoryCard** - Category showcase cards
- **CartSummary** - Order summary with pricing calculations
- **Breadcrumb** - Navigation breadcrumbs for better UX

### Advanced Features
- 🔐 **SEO Optimization** - Meta tags, sitemap, robots.txt, Open Graph
- 💾 **Local Storage Cart** - Persists cart across sessions
- 📱 **Mobile First** - Mobile-optimized experience
- ⚡ **Performance** - Code splitting, lazy loading, image optimization
- 🎨 **Dark/Light Mode Ready** - CSS custom properties for theming
- 📊 **Dynamic Metadata** - Page-specific titles and descriptions

## 📁 Project Structure

```
mobinest/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with Navbar & Footer
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   ├── not-found.tsx             # 404 page
│   ├── sitemap.ts                # SEO sitemap
│   ├── shop/
│   │   ├── layout.tsx            # Shop layout
│   │   └── page.tsx              # Shop/browse page
│   ├── products/
│   │   ├── layout.tsx            # Products layout
│   │   ├── [id]/
│   │   │   ├── page.tsx          # Product detail (server)
│   │   │   └── ProductDetailClient.tsx  # Product detail (client)
│   ├── cart/
│   │   ├── layout.tsx            # Cart layout
│   │   └── page.tsx              # Shopping cart
│   ├── about/
│   │   ├── layout.tsx            # About layout
│   │   └── page.tsx              # About page
│   └── contact/
│       ├── layout.tsx            # Contact layout
│       └── page.tsx              # Contact page
├── components/                   # Reusable React components
│   ├── Navbar.tsx                # Navigation bar
│   ├── Footer.tsx                # Footer
│   ├── Hero.tsx                  # Hero section
│   ├── ProductCard.tsx           # Product card component
│   ├── ProductGrid.tsx           # Product grid layout
│   ├── CategoryCard.tsx          # Category card
│   ├── CategoryGrid.tsx          # Category grid
│   ├── Breadcrumb.tsx            # Breadcrumb navigation
│   ├── CartSummary.tsx           # Cart summary sidebar
│   └── index.ts                  # Component exports
├── lib/                          # Utilities and helpers
│   ├── products.ts               # Product data and utilities
│   └── cart.ts                   # Cart management utilities
├── types/                        # TypeScript type definitions
│   └── index.ts                  # Type exports
├── public/
│   └── robots.txt                # SEO robots.txt
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.mjs            # PostCSS configuration
└── package.json                  # Dependencies
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.9 with App Router
- **React**: 19.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + PostCSS 4
- **Images**: Next.js Image Optimization with Unsplash
- **Package Manager**: npm
- **Linting**: ESLint 9

## 📦 Sample Data

The project includes **8 sample products** with real images from Unsplash:
- Pro Max Smartphone - AED 1,299
- Ultra Tablet Pro - AED 849
- Wireless Pro Earbuds - AED 399
- Smart Watch Ultra - AED 599
- Compact Phone - AED 599
- USB-C Cable (2m) - AED 19
- Wireless Charger - AED 59
- Fitness Band - AED 149

## 🎯 Key Pages

### Home Page (`/`)
- Hero section with gradient background
- Category showcase with 4 categories
- Featured products grid (4 products)
- Newsletter subscription section
- Trust indicators (authenticity, support, shipping, security)

### Shop Page (`/shop`)
- Browse all products
- Filter by category (Smartphones, Tablets, Accessories, Wearables)
- Sort options (Newest, Price: Low to High, Price: High to Low, Top Rated)
- Responsive product grid
- Product count display

### Product Detail Page (`/products/[id]`)
- High-quality product image with zoom
- Product specifications
- Price with discount calculation
- Star rating and reviews count
- Add to cart functionality
- Stock status
- Breadcrumb navigation
- Dynamic meta tags for SEO

### Shopping Cart (`/cart`)
- Display all cart items
- Quantity adjustment
- Remove items functionality
- Order summary with calculations
- Shipping cost logic (free over AED 500)
- Tax calculation (5%)
- Continue shopping button

### About Page (`/about`)
- Company mission and values
- Team members
- Statistics and achievements
- Why choose us section

### Contact Page (`/contact`)
- Contact form (name, email, phone, subject, message)
- Contact information (address, phone, email, hours)
- Social media links
- FAQ section

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**
```bash
npm run build
npm start
```

4. **Run Linting**
```bash
npm run lint
```

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accents**: Gray scale (50-900)
- **Highlights**: Blue, Purple, Pink gradients

### Typography
- **Font**: Geist Sans (main), Geist Mono (code)
- **Sizes**: 
  - H1: 3rem (desktop), 2.25rem (mobile)
  - H2: 1.875rem (desktop), 1.5rem (mobile)
  - Body: 1rem

### Spacing
- Follows Tailwind's 4px grid system
- Consistent padding and margins throughout

## 💾 Cart Persistence

The cart is automatically saved to browser's localStorage:
- **Key**: `mobinest-cart`
- **Storage**: JSON stringified CartItem array
- **Persistence**: Survives browser refresh and session restart
- **Clear**: Use "Clear Cart" function to reset

## 🔍 SEO Features

- **Dynamic Meta Tags**: Each page has optimized title and description
- **Open Graph Tags**: Social media sharing support
- **Sitemap**: Auto-generated sitemap.xml with priority levels
- **Robots.txt**: Crawl guidelines for search engines
- **Breadcrumb Navigation**: Improved crawlability
- **Responsive Design**: Mobile-first indexing friendly
- **Image Alt Text**: All images have descriptive alt text
- **Structured Data Ready**: Schema.org ready structure

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors (WCAG AA compliant)
- Descriptive link text
- Form labels and error handling

## 🚀 Performance Optimizations

- **Image Optimization**: Using Next.js Image with Unsplash
- **Code Splitting**: Automatic with Next.js
- **CSS Minification**: Built-in with Tailwind
- **Dead Code Elimination**: TypeScript and tree-shaking
- **Lazy Loading**: Components load on demand
- **Font Optimization**: Google Fonts with next/font

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created with ❤️ for modern e-commerce experiences.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For support, email info@mobinest.com or contact us through the contact page.

---

**MobiNest** - Your Premium Mobile Technology Destination
