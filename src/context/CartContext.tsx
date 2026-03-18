'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartItem, Product } from '@/types';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
};

const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      let newItems: CartItem[];
      if (existingIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.items, { product: action.payload.product, quantity: action.payload.quantity }];
      }
      return {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter((item) => item.product.id !== action.payload);
      return {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
    }
    case 'UPDATE_QUANTITY': {
      const newItems = state.items
        .map((item) =>
          item.product.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
        .filter((item) => item.quantity > 0);
      return {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
    }
    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 };
    case 'LOAD_CART': {
      return {
        items: action.payload,
        total: calculateTotal(action.payload),
        itemCount: calculateItemCount(action.payload),
      };
    }
    default:
      return state;
  }
};

interface CartContextType extends CartState {
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      try {
        const items = JSON.parse(stored) as CartItem[];
        dispatch({ type: 'LOAD_CART', payload: items });
      } catch (err) {
        console.error('Failed to parse cart from localStorage:', err);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product: Product, quantity = 1) => dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
  const removeItem = (productId: string) => dispatch({ type: 'REMOVE_ITEM', payload: productId });
  const updateQuantity = (productId: string, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
