'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/CartItem';
import { FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

export default function CartPage() {
  const { items, itemCount, total, clearCart } = useCart();

  const deliveryFee = total >= 499 ? 0 : 49;
  const finalTotal = total + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <FaShoppingCart className="text-6xl text-gray-300 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Add some delicious Indian groceries to your cart!</p>
        <Link
          href="/products"
          className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-bold transition-colors inline-flex items-center space-x-2"
        >
          <FaArrowLeft />
          <span>Continue Shopping</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-sm text-red-500 hover:text-red-600 font-medium"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}

          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium mt-4"
          >
            <FaArrowLeft className="text-sm" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span className={deliveryFee === 0 ? 'text-green-600 font-medium' : ''}>
                  {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                </span>
              </div>
              {total < 499 && (
                <p className="text-xs text-gray-500">
                  Add ₹{499 - total} more for free delivery
                </p>
              )}
              <div className="border-t pt-3 flex justify-between font-bold text-lg text-gray-900">
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>

            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl font-bold text-lg transition-colors mb-3">
              Proceed to Checkout
            </button>
            <p className="text-center text-xs text-gray-500">
              🔒 Secure payment guaranteed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
