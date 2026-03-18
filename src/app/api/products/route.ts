import { NextResponse } from 'next/server';

// Sample products data
const products = [
  {
    id: 1,
    name: 'Organic Turmeric Powder',
    price: 249,
    category: 'Spices',
    rating: 4.8,
    description: 'Pure turmeric powder with natural benefits',
  },
  {
    id: 2,
    name: 'Premium Wheatflour',
    price: 179,
    category: 'Flour',
    rating: 4.6,
    description: 'Fresh wheat flour for your daily cooking',
  },
  {
    id: 3,
    name: 'Besan (Gram Flour)',
    price: 159,
    category: 'Flour',
    rating: 4.7,
    description: 'High-quality gram flour for traditional recipes',
  },
  {
    id: 4,
    name: 'Red Chili Powder',
    price: 299,
    category: 'Spices',
    rating: 4.5,
    description: 'Authentic red chili powder for spicy dishes',
  },
  {
    id: 5,
    name: 'Basmati Rice',
    price: 459,
    category: 'Grains',
    rating: 4.9,
    description: 'Premium quality basmati rice',
  },
  {
    id: 6,
    name: 'Coriander Powder',
    price: 219,
    category: 'Spices',
    rating: 4.4,
    description: 'Ground coriander seeds for aromatics',
  },
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    let filtered = [...products];

    // Filter by category
    if (category) {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Search by name or description
    if (search) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by price range
    if (minPrice) {
      filtered = filtered.filter((p) => p.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter((p) => p.price <= parseFloat(maxPrice));
    }

    return NextResponse.json(filtered, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, save to database
    const newProduct = {
      id: Math.max(...products.map((p) => p.id)) + 1,
      ...body,
    };

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
