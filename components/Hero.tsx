import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-black text-white min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Experience the Future of
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Mobile Technology
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover premium smartphones, tablets, and accessories from the world's top brands. Fast shipping, secure checkout, and exceptional service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-200 text-lg"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-200 text-lg"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-16 pt-16 border-t border-gray-700">
          <div>
            <div className="text-3xl font-bold text-blue-400">10K+</div>
            <p className="text-gray-400">Products</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">50K+</div>
            <p className="text-gray-400">Happy Customers</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400">24/7</div>
            <p className="text-gray-400">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
