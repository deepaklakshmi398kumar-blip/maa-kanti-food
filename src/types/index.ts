export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  weight: string;
  brand: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export type Category = 'All' | 'Spices' | 'Grains' | 'Oils' | 'Pulses' | 'Organic' | 'Snacks';
