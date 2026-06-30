import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Smartphones',
    icon: '📱',
    description: 'Latest mobile phones',
    slug: 'smartphones',
  },
  {
    id: '2',
    name: 'Tablets',
    icon: '📲',
    description: 'Premium tablets',
    slug: 'tablets',
  },
  {
    id: '3',
    name: 'Accessories',
    icon: '🎧',
    description: 'Tech accessories',
    slug: 'accessories',
  },
  {
    id: '4',
    name: 'Wearables',
    icon: '⌚',
    description: 'Smart devices',
    slug: 'wearables',
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Pro Max Smartphone',
    description: 'Cutting-edge smartphone with advanced camera and processing power',
    price: 1299,
    originalPrice: 1499,
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1592286927505-1fed6b2ade78?w=500&h=500&fit=crop',
    ],
    rating: 4.8,
    reviews: 328,
    inStock: true,
    specs: {
      'Screen': '6.7" OLED',
      'Processor': 'Latest Gen',
      'RAM': '12GB',
      'Storage': '256GB',
      'Camera': '48MP + 12MP',
    },
  },
  {
    id: '2',
    name: 'Ultra Tablet Pro',
    description: 'Premium tablet for productivity and entertainment',
    price: 849,
    originalPrice: 999,
    category: 'tablets',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    ],
    rating: 4.6,
    reviews: 215,
    inStock: true,
    specs: {
      'Screen': '12.9" Liquid Retina',
      'Processor': 'M2 Chip',
      'RAM': '8GB',
      'Storage': '128GB',
    },
  },
  {
    id: '3',
    name: 'Wireless Pro Earbuds',
    description: 'Premium wireless earbuds with noise cancellation',
    price: 399,
    originalPrice: 449,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    ],
    rating: 4.7,
    reviews: 542,
    inStock: true,
    specs: {
      'Battery': '8 hours',
      'Charging': 'USB-C',
      'Noise Cancellation': 'Active',
      'Bluetooth': '5.3',
    },
  },
  {
    id: '4',
    name: 'Smart Watch Ultra',
    description: 'Advanced smartwatch with health monitoring',
    price: 599,
    originalPrice: 699,
    category: 'wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    ],
    rating: 4.5,
    reviews: 189,
    inStock: true,
    specs: {
      'Display': '2.0" AMOLED',
      'Battery': '2 days',
      'Water Resistance': '5ATM',
      'Features': 'HR, SpO2, Sleep',
    },
  },
  {
    id: '5',
    name: 'Compact Phone',
    description: 'Fast and reliable compact smartphone',
    price: 599,
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop',
    ],
    rating: 4.4,
    reviews: 267,
    inStock: true,
    specs: {
      'Screen': '5.8" OLED',
      'Processor': 'Latest Gen',
      'RAM': '8GB',
      'Storage': '128GB',
      'Camera': '48MP',
    },
  },
  {
    id: '6',
    name: 'USB-C Cable (2m)',
    description: 'High-quality durable USB-C cable',
    price: 19,
    originalPrice: 29,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
    ],
    rating: 4.6,
    reviews: 1023,
    inStock: true,
    specs: {
      'Length': '2 meters',
      'Type': 'USB-C',
      'Charging Speed': 'Fast',
      'Material': 'Braided Nylon',
    },
  },
  {
    id: '7',
    name: 'Wireless Charger',
    description: 'Fast wireless charging pad',
    price: 59,
    originalPrice: 79,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1591290619246-a87cfeabfb57?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1591290619246-a87cfeabfb57?w=500&h=500&fit=crop',
    ],
    rating: 4.5,
    reviews: 456,
    inStock: true,
    specs: {
      'Power': '15W',
      'Type': 'Qi Certified',
      'Color': 'Black',
      'LED': 'Status Indicator',
    },
  },
  {
    id: '8',
    name: 'Fitness Band',
    description: 'Lightweight fitness tracking band',
    price: 149,
    category: 'wearables',
    image: 'https://images.unsplash.com/photo-1575311373937-040b3e191e7b?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1575311373937-040b3e191e7b?w=500&h=500&fit=crop',
    ],
    rating: 4.3,
    reviews: 312,
    inStock: true,
    specs: {
      'Display': 'OLED',
      'Battery': '5 days',
      'Water Resistant': 'Yes',
      'Tracking': 'Steps, Heart Rate',
    },
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};
