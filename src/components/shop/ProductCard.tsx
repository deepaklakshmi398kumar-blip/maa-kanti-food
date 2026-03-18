'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image?: string;
  category: string;
  rating?: number;
  inStock?: boolean;
  onAddToWishlist?: (id: number) => void;
  isInWishlist?: boolean;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  category,
  rating = 4.5,
  inStock = true,
  onAddToWishlist,
  isInWishlist = false,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      addToCart({
        id,
        name,
        price,
        quantity: 1,
        image,
      });
      setShowAddedMessage(true);
      setTimeout(() => setShowAddedMessage(false), 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWishlist = () => {
    onAddToWishlist?.(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'card group flex flex-col overflow-hidden',
        'bg-white shadow-md transition-all duration-300',
        'hover:shadow-xl',
        'dark:bg-brown-700 dark:shadow-lg'
      )}
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 sm:h-56">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-golden-100 to-golden-50">
            <span className="text-4xl">📦</span>
          </div>
        )}

        {/* Stock Badge */}
        {!inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
              Out of Stock
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={clsx(
            'absolute right-2 top-2 rounded-full p-2 transition-all duration-200',
            isInWishlist
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-white/90 text-gray-600 hover:bg-white'
          )}
          aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {isInWishlist ? '❤️' : '🤍'}
        </button>

        {/* Category Badge */}
        <div className="absolute bottom-2 left-2">
          <span className="inline-block rounded-full bg-golden-500 px-3 py-1 text-xs font-semibold text-white">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Product Name */}
        <Link href={`/products/${id}`}>
          <h3 className="line-clamp-2 text-base font-semibold text-dark transition-colors duration-200 hover:text-golden-500 dark:text-cream sm:text-lg">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        {rating && (
          <div className="mt-2 flex items-center gap-2">
            <span className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-sm">
                  {i < Math.round(rating) ? '⭐' : '☆'}
                </span>
              ))}
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-300">
              ({rating.toFixed(1)})
            </span>
          </div>
        )}

        {/* Spacer */}
        <div className="mt-auto" />

        {/* Price */}
        <div className="mt-4 mb-4">
          <span className="text-2xl font-bold text-golden-500">
            ₹{price.toFixed(2)}
          </span>
          <span className="ml-2 text-xs text-gray-500 line-through dark:text-gray-400">
            ₹{(price * 1.25).toFixed(2)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!inStock || isLoading}
          className={clsx(
            'btn-primary w-full',
            (!inStock || isLoading) && 'cursor-not-allowed opacity-50'
          )}
        >
          {isLoading ? 'Adding...' : 'Add to Cart'}
        </button>

        {/* Added Message */}
        {showAddedMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 rounded-lg bg-green-100 p-2 text-center text-sm font-semibold text-green-700"
          >
            ✓ Added to cart!
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
