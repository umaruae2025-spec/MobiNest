import type { Metadata } from "next";
import { Hero, ProductGrid, CategoryGrid } from "@/components";
import { products, categories, getFeaturedProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Home - MobiNest",
  description:
    "Welcome to MobiNest. Discover the latest smartphones, tablets, and tech accessories with premium quality and fast shipping.",
};

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid categories={categories} />
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProductGrid
          products={featuredProducts}
          title="Featured Products"
          description="Handpicked selections from our premium collection"
        />
      </section>

      {/* Call to Action Section */}
      <section className="bg-black text-white py-16 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Exclusive Offers Await
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter to get exclusive deals and updates on
            new products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <p className="text-gray-600">Authentic Products</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">🚚</div>
              <p className="text-gray-600">Fast Shipping</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">✓</div>
              <p className="text-gray-600">Secure Payment</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
