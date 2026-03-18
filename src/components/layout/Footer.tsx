import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { label: 'All Products', href: '/products' },
      { label: 'New Arrivals', href: '/products?sort=newest' },
      { label: 'Best Sellers', href: '/products?sort=popular' },
      { label: 'Wishlist', href: '/wishlist' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Help & FAQ', href: '/help' },
      { label: 'Blog', href: '/blog' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/policies#privacy' },
      { label: 'Terms of Service', href: '/policies#terms' },
      { label: 'Shipping Policy', href: '/policies#shipping' },
      { label: 'Return Policy', href: '/policies#returns' },
    ],
  };

  return (
    <footer className="border-t border-golden-100 bg-white dark:border-brown-700 dark:bg-dark">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-golden-500">
              Maa Kanti Foods
            </h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Premium organic spices and grains delivered to your doorstep.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/maakantifood"
                className="text-gray-600 transition-colors duration-200 hover:text-golden-500 dark:text-gray-300"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://twitter.com/maakantifood"
                className="text-gray-600 transition-colors duration-200 hover:text-golden-500 dark:text-gray-300"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com/maakantifood"
                className="text-gray-600 transition-colors duration-200 hover:text-golden-500 dark:text-gray-300"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="mb-4 font-semibold text-dark dark:text-cream">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors duration-200 hover:text-golden-500 dark:text-gray-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-8 border-golden-100 dark:border-brown-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {currentYear} Maa Kanti Foods. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Secured by SSL
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Verified Seller
            </span>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-golden-100 bg-gray-50 py-4 dark:border-brown-700 dark:bg-black/30">
        <div className="container-custom flex flex-wrap items-center justify-center gap-6 text-center">
          <div className="text-xs text-gray-600 dark:text-gray-300">
            💳 <span className="ml-1">Secure Payments</span>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-300">
            🚚 <span className="ml-1">Fast Shipping</span>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-300">
            ♻️ <span className="ml-1">Easy Returns</span>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-300">
            ⭐ <span className="ml-1">100% Quality</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
