'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/CartContext';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex-shrink-0">
        <Image
          src={item.product.image}
          alt={item.product.name}
          width={80}
          height={80}
          className="w-20 h-20 object-cover rounded-lg"
          unoptimized
        />
      </div>

      <div className="flex-grow min-w-0">
        <h3 className="font-semibold text-gray-900 truncate">{item.product.name}</h3>
        <p className="text-sm text-gray-500">{item.product.weight} • {item.product.brand}</p>
        <p className="text-sm text-primary-600 font-medium">₹{item.product.price} each</p>
      </div>

      <div className="flex items-center space-x-3 flex-shrink-0">
        <div className="flex items-center border border-gray-200 rounded-lg">
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
          >
            <FaMinus className="text-xs text-gray-600" />
          </button>
          <span className="px-3 py-2 text-sm font-medium min-w-[2rem] text-center">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
          >
            <FaPlus className="text-xs text-gray-600" />
          </button>
        </div>

        <div className="text-right">
          <p className="font-bold text-gray-900">₹{item.product.price * item.quantity}</p>
        </div>

        <button
          onClick={() => removeItem(item.product.id)}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <FaTrash className="text-sm" />
        </button>
      </div>
    </div>
  );
}
