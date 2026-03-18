'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product.inStock) return;
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
        <div className="relative overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-accent-600 text-white text-xs px-2 py-1 rounded-full font-bold">
              {discount}% OFF
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <div className="text-xs text-primary-600 font-medium mb-1">{product.category}</div>
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2 line-clamp-2 flex-grow">{product.description}</p>

          <div className="flex items-center space-x-1 mb-2">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
          </div>

          <div className="text-xs text-gray-500 mb-3">{product.weight} • {product.brand}</div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                product.inStock
                  ? 'bg-primary-600 hover:bg-primary-700 text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <FaShoppingCart className="text-xs" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
