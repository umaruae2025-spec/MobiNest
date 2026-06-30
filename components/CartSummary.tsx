import Link from 'next/link';
import { CartItem } from '@/types';
import { getCartTotal } from '@/lib/cart';

interface CartSummaryProps {
  items: CartItem[];
}

export default function CartSummary({ items }: CartSummaryProps) {
  const subtotal = getCartTotal(items);
  const shipping = subtotal > 0 && subtotal < 500 ? 50 : 0;
  const tax = Math.round(subtotal * 0.05 * 100) / 100;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 sticky top-20">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">AED {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? 'Free' : `AED ${shipping}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (5%)</span>
          <span className="font-medium">AED {tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-300 pt-4 flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold text-lg">AED {total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition mb-3">
        Proceed to Checkout
      </button>
      <Link
        href="/shop"
        className="block text-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition font-medium"
      >
        Continue Shopping
      </Link>

      {subtotal > 0 && subtotal < 500 && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
          Free shipping on orders over AED 500! You need AED {(500 - subtotal).toFixed(2)} more.
        </div>
      )}
    </div>
  );
}
