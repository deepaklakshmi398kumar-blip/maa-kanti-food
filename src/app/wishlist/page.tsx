import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wishlist | Maa Kanti Foods',
  description: 'View your saved favorite products.',
};

export default function WishlistPage() {
  return (
    <main className="section-padding bg-white dark:bg-dark">
      <div className="container-custom">
        <h1 className="mb-8">My Wishlist</h1>

        {/* Empty State */}
        <div className="rounded-lg border border-golden-100 bg-gray-50 p-12 text-center dark:border-brown-700 dark:bg-brown-800">
          <div className="text-6xl mb-4">❤️</div>
          <h2 className="mb-3 text-xl font-semibold">Your wishlist is empty</h2>
          <p className="mb-6 max-w-md mx-auto text-gray-600 dark:text-gray-300">
            Start adding products to your wishlist! Click the heart icon on any product to save it for later.
          </p>
          <Link href="/products" className="btn-primary inline-block">
            Browse Products
          </Link>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Save for Later',
              description: 'Add items to your wishlist and come back to them whenever you want.',
            },
            {
              title: 'Price Alerts',
              description: 'Get notified when prices drop on items in your wishlist.',
            },
            {
              title: 'Share Lists',
              description: 'Share your wishlist with friends and family.',
            },
          ].map((item, index) => (
            <div key={index} className="card text-center">
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
