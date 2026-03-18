'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { PageTransition } from '@/lib/animations';
import { motion } from 'framer-motion';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <PageTransition>
        <main className="section-padding bg-white dark:bg-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-8">Shopping Cart</h1>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                className="col-span-2 rounded-lg border border-golden-100 bg-gray-50 p-8 text-center dark:border-brown-700 dark:bg-brown-800"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🛒
                </motion.div>
                <h2 className="mb-3 text-xl font-semibold">Your cart is empty</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Start adding some products to your cart and they will appear here!
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/products" className="btn-primary inline-block">
                    Continue Shopping
                  </Link>
                </motion.div>
              </motion.div>

              {/* Empty Cart Summary */}
              <motion.div
                className="card sticky top-24 h-fit space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="font-semibold">Order Summary</h2>
                <div className="space-y-2 border-t border-gray-200 pt-4 dark:border-brown-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600 font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (18%)</span>
                    <span>₹0.00</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 dark:border-brown-600">
                  <div className="mb-4 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹0.00</span>
                  </div>
                  <button className="btn-primary w-full cursor-not-allowed opacity-50">
                    Checkout
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </PageTransition>
    );
  }

  const tax = (total * 0.18).toFixed(2);
  const shipping = total >= 500 ? 0 : 99;
  const grandTotal = (total + parseFloat(tax) + shipping).toFixed(2);

  return (
    <PageTransition>
      <main className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <motion.h1
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Shopping Cart
          </motion.h1>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Cart Items */}
            <div className="col-span-2">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="card flex gap-4 items-start md:items-center hover:shadow-lg transition-shadow"
                  >
                    {/* Product Image */}
                    {item.image && (
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-dark dark:text-cream">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        ₹{item.price.toFixed(2)} each
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <motion.div
                      className="flex items-center gap-2 border border-gray-300 rounded-lg dark:border-brown-600"
                      whileHover={{ boxShadow: '0 0 10px rgba(201, 169, 97, 0.3)' }}
                    >
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-brown-700 transition-colors"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 font-semibold w-12 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-brown-700 transition-colors"
                      >
                        +
                      </button>
                    </motion.div>

                    {/* Subtotal */}
                    <div className="text-right w-24">
                      <p className="font-bold text-golden-500">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <motion.button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors dark:hover:text-red-400"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Remove item"
                    >
                      ✕
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Order Summary */}
            <motion.div
              className="card sticky top-24 h-fit space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-semibold">Order Summary</h2>
              <div className="space-y-2 border-t border-gray-200 pt-4 dark:border-brown-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600 font-semibold' : 'text-amber-600'}>
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (18%)</span>
                  <span>₹{tax}</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 dark:border-brown-600">
                <div className="mb-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-golden-500">₹{grandTotal}</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href="/checkout" className="btn-primary block w-full text-center">
                    Proceed to Checkout
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-3"
                >
                  <Link
                    href="/products"
                    className="btn-secondary block w-full text-center"
                  >
                    Continue Shopping
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
