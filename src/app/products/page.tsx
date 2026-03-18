'use client';

import { ProductCard } from '@/components/shop/ProductCard';
import { products, categories } from '@/lib/data';
import { PageTransition, FadeInSection, StaggerContainer, AnimatedItem } from '@/lib/animations';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <PageTransition>
      <main>
        {/* Header */}
        <section className="section-padding bg-gradient-to-r from-golden-50 to-cream dark:from-brown-700 dark:to-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-4">Our Products</h1>
              <p className="max-w-2xl text-gray-600 dark:text-gray-300">
                Explore our carefully curated collection of premium organic foods.
                Each product is selected for quality and authenticity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="section-padding bg-white dark:bg-dark">
          <div className="container-custom">
            {/* Filters */}
            <motion.div
              className="mb-8 rounded-lg border border-golden-100 bg-gray-50 p-4 dark:border-brown-700 dark:bg-brown-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="mb-4 font-semibold">Filter Products</h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-golden-500 focus:outline-none dark:border-brown-600 dark:bg-brown-700"
                />
                <select className="rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-golden-500 focus:outline-none dark:border-brown-600 dark:bg-brown-700">
                  <option value="">All Categories</option>
                  <option value="spices">Spices</option>
                  <option value="flour">Flour</option>
                  <option value="grains">Grains</option>
                  <option value="seeds">Seeds</option>
                </select>
                <input
                  type="number"
                  placeholder="Min Price"
                  className="rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-golden-500 focus:outline-none dark:border-brown-600 dark:bg-brown-700"
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  className="rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-golden-500 focus:outline-none dark:border-brown-600 dark:bg-brown-700"
                />
              </div>
            </motion.div>

            {/* Products Grid */}
            <StaggerContainer>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
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
                    />
                  </AnimatedItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Info Section */}
        <FadeInSection>
          <section className="section-padding bg-gray-50 dark:bg-brown-800">
            <div className="container-custom">
              <motion.h2
                className="mb-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Quality Assurance
              </motion.h2>
              <StaggerContainer>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      title: 'Premium Quality',
                      description:
                        'All products are sourced from trusted suppliers and tested for quality.',
                    },
                    {
                      title: 'Fresh & Organic',
                      description:
                        'We ensure all products are fresh and free from artificial additives.',
                    },
                    {
                      title: 'Fast Shipping',
                      description:
                        'Get your orders delivered quickly with proper packaging.',
                    },
                  ].map((item, index) => (
                    <AnimatedItem key={index}>
                      <motion.div
                        className="card text-center hover:shadow-lg transition-shadow"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="mb-2 font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </motion.div>
                    </AnimatedItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </section>
        </FadeInSection>
      </main>
    </PageTransition>
  );
}
