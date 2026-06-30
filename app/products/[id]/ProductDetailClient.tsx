'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Breadcrumb } from '@/components';
import { addToCart } from '@/lib/cart';
import { Product } from '@/types';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [added, setAdded] = useState(false);
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <div className="py-8">
        <Breadcrumb
          items={[
            { label: 'Shop', href: '/shop' },
            {
              label: product.category,
              href: `/shop?category=${product.category}`,
            },
          ]}
          current={product.name}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        {/* Images */}
        <div>
          <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden aspect-square relative">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === img
                      ? 'border-black'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="ml-4 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline space-x-4">
                <span className="text-4xl font-bold text-black">
                  AED {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    AED {product.originalPrice}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-red-600 font-semibold mt-2">
                  Save AED {(product.originalPrice - product.price).toFixed(2)} (
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  %)
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg mb-6">{product.description}</p>

            {/* Specifications */}
            {product.specs && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                  {Object.entries(product.specs).map(([key, value]: any) => (
                    <div
                      key={key}
                      className="flex justify-between text-gray-700"
                    >
                      <span className="font-medium">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stock Status */}
            <div
              className={`mb-6 p-4 rounded-lg ${
                product.inStock
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {product.inStock ? (
                <p className="font-semibold">
                  ✓ In Stock - Free shipping on orders over AED 500
                </p>
              ) : (
                <p className="font-semibold">Out of Stock</p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="text-lg font-medium">Quantity:</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-600 hover:text-black"
                >
                  −
                </button>
                <span className="px-6 py-2 border-l border-r border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-600 hover:text-black"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-4 text-lg font-bold rounded-lg transition ${
                added
                  ? 'bg-green-600 text-white'
                  : product.inStock
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            <button
              onClick={() => router.push('/cart')}
              className="w-full py-4 border-2 border-black text-black font-bold rounded-lg hover:bg-gray-100 transition"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="py-12 border-t border-gray-200 mt-12">
        <h2 className="text-3xl font-bold mb-8">Related Products</h2>
        <p className="text-gray-600">More products in {product.category}</p>
      </div>
    </>
  );
}
