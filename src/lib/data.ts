// Sample products data
export const products = [
  {
    id: 1,
    name: 'Organic Turmeric Powder',
    price: 249,
    image: '/images/flour.jpg',
    category: 'Spices',
    rating: 4.8,
    description: 'Pure turmeric powder with natural benefits',
    inStock: true,
  },
  {
    id: 2,
    name: 'Premium Wheatflour',
    price: 179,
    image: '/images/flour.jpg',
    category: 'Flour',
    rating: 4.6,
    description: 'Fresh wheat flour for your daily cooking',
    inStock: true,
  },
  {
    id: 3,
    name: 'Besan (Gram Flour)',
    price: 159,
    image: '/images/flour.jpg',
    category: 'Flour',
    rating: 4.7,
    description: 'High-quality gram flour for traditional recipes',
    inStock: true,
  },
  {
    id: 4,
    name: 'Red Chili Powder',
    price: 299,
    image: '/images/flour.jpg',
    category: 'Spices',
    rating: 4.5,
    description: 'Authentic red chili powder for spicy dishes',
    inStock: true,
  },
  {
    id: 5,
    name: 'Basmati Rice Premium',
    price: 459,
    image: '/images/flour.jpg',
    category: 'Grains',
    rating: 4.9,
    description: 'Premium quality basmati rice',
    inStock: true,
  },
  {
    id: 6,
    name: 'Coriander Powder',
    price: 219,
    image: '/images/flour.jpg',
    category: 'Spices',
    rating: 4.4,
    description: 'Ground coriander seeds for aromatics',
    inStock: true,
  },
  {
    id: 7,
    name: 'Cumin Seeds',
    price: 189,
    image: '/images/flour.jpg',
    category: 'Spices',
    rating: 4.7,
    description: 'Freshly sourced cumin seeds',
    inStock: true,
  },
  {
    id: 8,
    name: 'Fenugreek Leaves',
    price: 129,
    image: '/images/flour.jpg',
    category: 'Herbs',
    rating: 4.5,
    description: 'Dried methi leaves for authentic recipes',
    inStock: true,
  },
  {
    id: 9,
    name: 'Rice Flour',
    price: 149,
    image: '/images/flour.jpg',
    category: 'Flour',
    rating: 4.6,
    description: 'Fine rice flour for delicate dishes',
    inStock: true,
  },
  {
    id: 10,
    name: 'Pearl Millet',
    price: 129,
    image: '/images/flour.jpg',
    category: 'Grains',
    rating: 4.4,
    description: 'Nutritious pearl millet grain',
    inStock: true,
  },
  {
    id: 11,
    name: 'Black Cardamom',
    price: 349,
    image: '/images/flour.jpg',
    category: 'Spices',
    rating: 4.8,
    description: 'Aromatic black cardamom pods',
    inStock: true,
  },
  {
    id: 12,
    name: 'White Sesame Seeds',
    price: 199,
    image: '/images/flour.jpg',
    category: 'Seeds',
    rating: 4.6,
    description: 'Pure white sesame seeds',
    inStock: true,
  },
];

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  description?: string;
  inStock?: boolean;
}

// Categories for filtering
export const categories = [
  'All Products',
  'Flour',
  'Spices',
  'Grains',
  'Herbs',
  'Seeds',
];

// Helper functions
export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All Products') return products;
  return products.filter((product) => product.category === category);
}

export function searchProducts(query: string): Product[] {
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description?.toLowerCase().includes(query.toLowerCase())
  );
}

export function getProductsByPriceRange(
  min: number,
  max: number
): Product[] {
  return products.filter((product) => product.price >= min && product.price <= max);
}
