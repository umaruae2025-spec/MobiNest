import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MobiNest
        </div>

        {/* Links */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100">
            Login
          </button>

          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Cart 🛒
          </button>
        </div>

      </div>
    </header>
  );
}