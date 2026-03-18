import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { FaTruck, FaLeaf, FaStar, FaShieldAlt } from 'react-icons/fa';

export default function HomePage() {
  const featuredProducts = products.slice(0, 8);
  const categoryItems = [
    { name: 'Spices', color: 'bg-red-100', textColor: 'text-red-700', emoji: '🌶️' },
    { name: 'Grains', color: 'bg-yellow-100', textColor: 'text-yellow-700', emoji: '🌾' },
    { name: 'Oils', color: 'bg-amber-100', textColor: 'text-amber-700', emoji: '🫙' },
    { name: 'Pulses', color: 'bg-orange-100', textColor: 'text-orange-700', emoji: '🫘' },
    { name: 'Organic', color: 'bg-green-100', textColor: 'text-green-700', emoji: '🌿' },
    { name: 'Snacks', color: 'bg-purple-100', textColor: 'text-purple-700', emoji: '🍿' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🌿</div>
          <div className="absolute top-20 right-20 text-6xl">🌶️</div>
          <div className="absolute bottom-10 left-1/4 text-7xl">🌾</div>
          <div className="absolute bottom-20 right-1/3 text-5xl">🫙</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-accent-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              🎉 Free delivery on orders above ₹499
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Pure & Fresh<br />
              <span className="text-yellow-300">Indian Groceries</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl">
              Bringing the authentic flavors of India to your kitchen. Premium quality spices, grains,
              pulses, and organic products sourced directly from farmers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-white text-primary-700 hover:bg-yellow-50 px-8 py-3 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                Shop Now
              </Link>
              <Link
                href="/products?category=Organic"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-bold text-lg transition-colors"
              >
                Organic Range
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-primary-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FaTruck, title: 'Free Delivery', desc: 'On orders above ₹499', color: 'text-primary-600' },
              { icon: FaLeaf, title: 'Farm Fresh', desc: 'Direct from farmers', color: 'text-green-600' },
              { icon: FaStar, title: 'Premium Quality', desc: 'Carefully selected products', color: 'text-yellow-500' },
              { icon: FaShieldAlt, title: 'Secure Payment', desc: '100% safe checkout', color: 'text-blue-600' },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                <Icon className={`text-2xl ${color} flex-shrink-0`} />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{title}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
            <p className="text-gray-500">Explore our wide range of Indian grocery products</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoryItems.map(({ name, color, textColor, emoji }) => (
              <Link
                key={name}
                href={`/products?category=${name}`}
                className={`${color} ${textColor} rounded-xl p-6 text-center hover:shadow-md transition-shadow cursor-pointer`}
              >
                <div className="text-4xl mb-2">{emoji}</div>
                <p className="font-semibold">{name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-500">Hand-picked premium products just for you</p>
            </div>
            <Link
              href="/products"
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1"
            >
              <span>View All</span>
              <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-accent-600 to-accent-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            🌿 Try Our Organic Range
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Certified organic products without chemicals or preservatives. Better for you, better for the planet.
          </p>
          <Link
            href="/products?category=Organic"
            className="bg-white text-accent-700 hover:bg-orange-50 px-8 py-3 rounded-xl font-bold text-lg transition-colors"
          >
            Shop Organic
          </Link>
        </div>
      </section>
    </div>
  );
}
