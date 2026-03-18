'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useSession, signOut } from 'next-auth/react';
import { FaShoppingCart, FaUser, FaLeaf } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const { itemCount } = useCart();
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header className="bg-primary-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <FaLeaf className="text-2xl text-yellow-300" />
            <span className="text-xl font-bold tracking-tight">
              Maa Kanti Food
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-yellow-300 transition-colors font-medium">
              Home
            </Link>
            <Link href="/products" className="hover:text-yellow-300 transition-colors font-medium">
              Products
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 hover:text-yellow-300 transition-colors">
              <FaShoppingCart className="text-2xl" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </Link>

            {session ? (
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center space-x-1 hover:text-yellow-300 transition-colors"
                >
                  <FaUser className="text-xl" />
                  <span className="hidden md:inline text-sm">{session.user?.name}</span>
                </button>
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl py-1 z-10">
                    <p className="px-4 py-2 text-sm text-gray-500 border-b">{session.user?.email}</p>
                    <button
                      onClick={() => { signOut(); setProfileMenuOpen(false); }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="bg-accent-600 hover:bg-accent-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
            )}

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-500">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-yellow-300 py-1" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/products" className="hover:text-yellow-300 py-1" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
