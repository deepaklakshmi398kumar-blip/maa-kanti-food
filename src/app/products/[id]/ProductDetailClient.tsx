'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { FaStar, FaMinus, FaPlus, FaShoppingCart, FaArrowLeft, FaCheck } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addItem(product, quantity);
    toast.success(`${quantity}x ${product.name} added to cart!`);
  };

  return (
    <>
      <Link href="/products" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6">
        <FaArrowLeft className="text-sm" />
        <span>Back to Products</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative">
          <div className="bg-gray-50 rounded-2xl overflow-hidden aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          {discount > 0 && (
            <div className="absolute top-4 left-4 bg-accent-600 text-white text-sm px-3 py-1 rounded-full font-bold">
              {discount}% OFF
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <div className="text-sm text-primary-600 font-medium mb-2">{product.category}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>

          <div className="flex items-center space-x-3 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}
                />
              ))}
            </div>
            <span className="font-medium text-gray-900">{product.rating}</span>
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>

          <div className="flex items-baseline space-x-3 mb-6">
            <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
            {discount > 0 && (
              <span className="text-green-600 font-medium">Save ₹{product.originalPrice - product.price}</span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div className="bg-gray-50 rounded-lg p-3">
              <span className="text-gray-500">Weight</span>
              <p className="font-semibold text-gray-900">{product.weight}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <span className="text-gray-500">Brand</span>
              <p className="font-semibold text-gray-900">{product.brand}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            {product.inStock ? (
              <div className="flex items-center space-x-2 text-green-600">
                <FaCheck />
                <span className="font-medium">In Stock</span>
              </div>
            ) : (
              <span className="text-red-500 font-medium">Out of Stock</span>
            )}
          </div>

          {product.inStock && (
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-gray-700 font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-200 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 rounded-l-xl transition-colors"
                >
                  <FaMinus className="text-gray-600" />
                </button>
                <span className="px-6 py-3 font-medium text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 rounded-r-xl transition-colors"
                >
                  <FaPlus className="text-gray-600" />
                </button>
              </div>
            </div>
          )}

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full flex items-center justify-center space-x-3 py-4 rounded-xl text-lg font-bold transition-colors ${
              product.inStock
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FaShoppingCart />
            <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>
        </div>
      </div>
    </>
  );
}
