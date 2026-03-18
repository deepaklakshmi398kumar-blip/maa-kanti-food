import Link from 'next/link';
import { FaLeaf, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaLeaf className="text-2xl text-primary-400" />
              <span className="text-xl font-bold">Maa Kanti Food</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted source for premium Indian grocery products. We bring the finest spices,
              grains, pulses, and organic products directly from farms to your doorstep.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-primary-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-primary-400" />
                <span>info@maakantifood.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-primary-400" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary-400 transition-colors">Products</Link></li>
              <li><Link href="/cart" className="hover:text-primary-400 transition-colors">Cart</Link></li>
              <li><Link href="/auth/login" className="hover:text-primary-400 transition-colors">Sign In</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              {['Spices', 'Grains', 'Oils', 'Pulses', 'Organic', 'Snacks'].map((cat) => (
                <li key={cat}>
                  <Link href={`/products?category=${cat}`} className="hover:text-primary-400 transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Maa Kanti Food. All rights reserved. Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
