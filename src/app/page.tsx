'use client';

import { ProductCard } from '@/components/shop/ProductCard';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data';
import { PageTransition, FadeInSection, StaggerContainer, AnimatedItem } from '@/lib/animations';
import { motion } from 'framer-motion';

// Get first 6 products for featured section
const featuredProducts = products.slice(0, 6);

export default function Home() {
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden bg-gradient-to-br from-golden-50 via-cream to-white dark:from-dark dark:via-brown-700 dark:to-brown-800">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Hero Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="space-y-3">
                <motion.h1
                  className="text-3xl font-bold sm:text-4xl md:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Premium Organic Food
                </motion.h1>
                <motion.p
                  className="text-base text-gray-600 sm:text-lg dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Discover authentic spices, fresh grains, and traditional flour
                  delivered straight to your kitchen. Quality meets tradition.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/products"
                  className="btn-primary inline-block text-center hover:shadow-lg transition-shadow"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="btn-secondary inline-block text-center hover:shadow-lg transition-shadow"
                >
                  Learn More
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="grid grid-cols-3 gap-4 border-t border-golden-100 pt-6 dark:border-brown-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  { value: '50K+', label: 'Happy Customers' },
                  { value: '15K+', label: 'Orders Delivered' },
                  { value: '4.8★', label: 'Average Rating' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-golden-500">{stat.value}</div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <div className="relative hidden h-96 md:block">
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-golden-200 to-brown-100 dark:from-brown-600 dark:to-brown-800 blur-3xl opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <motion.div
                className="relative flex items-center justify-center"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <span className="text-9xl">🌾</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FadeInSection>
        <section className="section-padding bg-white dark:bg-dark">
          <div className="container-custom">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4">Featured Products</h2>
              <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
                Browse our collection of premium organic foods, carefully selected
                for quality and taste.
              </p>
            </motion.div>

            <StaggerContainer>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredProducts.map((product) => (
                  <AnimatedItem key={product.id}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      category={product.category}
                      rating={product.rating}
                      onAddToCart={() =>
                        console.log(`Added ${product.name} to cart`)
                      }
                      onAddToWishlist={(id) =>
                        console.log(`Toggled wishlist for product ${id}`)
                      }
                    />
                  </AnimatedItem>
                ))}
              </div>
            </StaggerContainer>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/products" className="btn-primary inline-block hover:shadow-lg transition-shadow">
                View All Products
              </Link>
            </motion.div>
          </div>
        </section>
      </FadeInSection>

      {/* Benefits Section */}
      <FadeInSection>
        <section className="section-padding bg-gradient-to-br from-golden-50 to-cream dark:from-brown-800 dark:to-dark">
          <div className="container-custom">
            <motion.h2
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose Us?
            </motion.h2>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-4">
                {[
                  {
                    icon: '✓',
                    title: 'Organic & Pure',
                    description: 'No chemicals, no additives. 100% pure and organic products.',
                  },
                  {
                    icon: '⚡',
                    title: 'Fast Delivery',
                    description: 'Same-day delivery on orders above ₹500 in selected areas.',
                  },
                  {
                    icon: '🔒',
                    title: 'Secure Payment',
                    description: 'Safe and secure payment options for your peace of mind.',
                  },
                  {
                    icon: '♻️',
                    title: 'Easy Returns',
                    description: '30-day money-back guarantee if you are not satisfied.',
                  },
                ].map((benefit, index) => (
                  <AnimatedItem key={index}>
                    <motion.div
                      className="card space-y-3 text-center hover:shadow-lg transition-shadow"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-4xl">{benefit.icon}</div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </motion.div>
                  </AnimatedItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section className="section-padding bg-gradient-to-r from-golden-500 to-brown-600 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-white">Ready to Experience Premium Quality?</h2>
              <p className="mb-8 text-golden-100">
                Join thousands of satisfied customers who trust Maa Kanti Foods.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/signup" className="btn-secondary inline-block">
                  Get Started Today
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </FadeInSection>
    </main>
    </PageTransition>
  );
}
