# Maa Kanti Foods - Next.js App Router Version

A modern e-commerce platform for premium organic food products, rebuilt with Next.js 14, App Router, and Tailwind CSS.

## 🚀 Features

### Core Features
- ✅ **Modern UI** - Built with Tailwind CSS for responsive design
- ✅ **Dark Mode** - Full dark mode support with localStorage persistence
- ✅ **Product Catalog** - Browse, search, and filter products
- ✅ **Shopping Cart** - Add/remove items, manage quantities
- ✅ **Wishlist** - Save favorite products for later
- ✅ **User Authentication** - Sign up, login, profile management with JWT
- ✅ **Reusable Components** - Navbar, Footer, ProductCard, Button
- ✅ **API Routes** - RESTful API built with Next.js App Router
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Performance Optimized** - Image optimization, code splitting

### Project Structure

```
maa-kanti-food-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Home page
│   │   ├── api/
│   │   │   ├── products/        # Products API routes
│   │   │   └── auth/            # Authentication API routes
│   │   ├── about/               # About page
│   │   ├── products/            # Products listing page
│   │   ├── cart/                # Shopping cart page
│   │   ├── wishlist/            # Wishlist page
│   │   ├── login/               # Login page
│   │   └── signup/              # Signup page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Navigation bar (reusable)
│   │   │   └── Footer.tsx       # Footer (reusable)
│   │   ├── common/
│   │   │   └── Button.tsx       # Reusable button component
│   │   └── shop/
│   │       └── ProductCard.tsx  # Product card (reusable)
│   ├── lib/
│   │   ├── auth/
│   │   │   └── jwt.ts           # JWT authentication utilities
│   │   └── db/
│   │       └── client.ts        # Database client utilities
│   └── styles/
│       └── globals.css          # Global styles with Tailwind
├── public/
│   └── images/                  # Static images
├── tailwind.config.js           # Tailwind CSS configuration
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Authentication**: JWT (jsonwebtoken + bcryptjs)
- **Database**: SQLite3
- **HTTP Client**: Axios
- **State Management**: Zustand (optional)
- **Package Manager**: npm

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git

### Setup

1. **Clone and navigate to the project**
```bash
cd maa-kanti-food-nextjs
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment variables**
```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
JWT_SECRET=your-secret-key-change-in-production
```

4. **Run development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:3000
```

## 🚀 Development

### Available Scripts

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## 📁 Project Organization

### `/src/app` - Application Routes (App Router)
- Each folder represents a route
- `page.tsx` files are the actual pages
- `layout.tsx` provides shared layout for route segments
- `/api` folder contains API endpoints

### `/src/components` - Reusable Components
- **layout/** - Header/footer components
- **common/** - Utility components (Button, Input, etc.)
- **shop/** - E-commerce specific components (ProductCard)

### `/src/lib` - Utilities & Libraries
- **auth/** - Authentication logic (JWT, password hashing)
- **db/** - Database connection and queries

### `/src/styles` - Styling
- `globals.css` - Tailwind CSS directives and custom styles

## 🎨 Design System

### Colors
```
- Golden: #C9A961 (primary brand color)
- Brown: #8B6F47 (secondary/dark variant)
- Cream: #fef9f3 (light background)
- Dark: #2c1810 (text on light backgrounds)
```

### Typography
- **Headings**: Bold, responsive (h1: 2xl-5xl, h2: xl-3xl)
- **Body**: 16px base size, responsive scaling
- **Mobile**: 14px minimum for readability

### Spacing
```
- Mobile: 1rem (16px)
- Tablet: 1.5rem (24px)
- Desktop: 2rem (32px)
```

### Components
- **Cards**: 16px radius, shadow effect, hover animation
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Navbar**: Sticky, backdrop blur, responsive menu

## 🔐 Authentication

### Implementation
- JWT tokens (access: 1hr, refresh: 7d)
- Password hashing with bcryptjs
- Password strength validation
- Token refresh mechanism

### API Endpoints
```
POST   /api/auth/signup       - Create new account
POST   /api/auth/login        - Login user
POST   /api/auth/refresh      - Refresh token
GET    /api/auth/profile      - Get user profile
PUT    /api/auth/profile      - Update profile
POST   /api/auth/logout       - Logout user
POST   /api/auth/change-password - Change password
```

## 🛒 E-commerce Features

### Products API
```
GET    /api/products                    - List all products
GET    /api/products?category=spices    - Filter by category
GET    /api/products?search=turmeric    - Search products
GET    /api/products?minPrice=100&maxPrice=500 - Price range
POST   /api/products                    - Create product (admin only)
```

### Shopping Features
- ✅ Add/remove from cart
- ✅ Quantity adjustment
- ✅ Price calculation with tax and shipping
- ✅ Save to wishlist
- ✅ Search and filter products
- ✅ Product ratings and reviews

## 🎯 Responsive Design

### Breakpoints
- **Mobile**: < 480px (single column, stacked layout)
- **Tablet**: 480px - 768px (2 columns, optimized)
- **Desktop**: > 768px (3+ columns, full layout)

### Mobile Optimization
- Hamburger menu for navigation
- Touch-friendly buttons (min 44x44px)
- Optimized images with srcset
- Font sizes scale responsively
- Safe area consideration

## 📊 Performance

### Optimization Strategies
- Image optimization with Next.js Image component
- Code splitting by route
- CSS-in-JS with Tailwind (minimal bundle)
- API route caching
- Lazy loading of components

### Monitoring
- Core Web Vitals tracking
- Error logging and reporting

## 🌙 Dark Mode

### Implementation
- Class-based dark mode (TailwindCSS)
- LocalStorage persistence
- Respects system preferences
- Smooth transitions between themes
- All components dark mode compatible

### Usage
```tsx
// Automatically handled by Navbar component
// Toggle with theme button in navbar
```

## 🔧 Customization

### Adding New Pages
1. Create folder in `/src/app/pageName`
2. Add `page.tsx` with React component
3. Optionally add `layout.tsx` for specific layout
4. Metadata is automatically generated

### Adding New Components
1. Create in appropriate `/src/components/` folder
2. Export as named export
3. Import and use in pages

### Styling
- Use Tailwind CSS utility classes
- Custom styles in `globals.css`
- Component-specific styles with `@apply`

## 📱 Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest
- Mobile browsers: iOS Safari 12+, Chrome Android 90+

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Connect to Vercel
# Follow the deployment wizard
```

### Self-Hosted
```bash
npm run build
npm start
```

### Environment Variables (Production)
```
NEXT_PUBLIC_API_URL=https://yourdomain.com
JWT_SECRET=your-strong-secret-key
NODE_ENV=production
```

## 📖 Documentation

### For Features
- See `QUICK_START_GUIDE.md` for feature overview
- See `IMPLEMENTATION_SUMMARY.md` for technical details

### For Components
- Each component has JSDoc comments
- Props are TypeScript typed
- Examples provided in component files

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3000   # Windows
```

**Styles not loading**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**Database connection error**
```bash
# Ensure database directory exists
mkdir -p data
npm run dev
```

## 📝 Git Commits

```bash
# Feature
git commit -m "feat: add product search functionality"

# Fix
git commit -m "fix: correct cart total calculation"

# Documentation
git commit -m "docs: update installation instructions"
```

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 👥 Contributing

1. Create a feature branch: `git checkout -b feature/feature-name`
2. Commit changes: `git commit -m "feat: description"`
3. Push to branch: `git push origin feature/feature-name`
4. Submit pull request

## 📞 Support

For issues and questions:
- Email: support@maakantifood.com
- Contact page: `/contact`
- Help & FAQ: `/help`

---

**Last Updated**: March 18, 2026
**Version**: 1.0.0
**Status**: Production Ready 🚀

---

## Quick Links

- [Home](http://localhost:3000)
- [Products](http://localhost:3000/products)
- [Cart](http://localhost:3000/cart)
- [Wishlist](http://localhost:3000/wishlist)
- [Login](http://localhost:3000/login)
- [Sign Up](http://localhost:3000/signup)
- [About](http://localhost:3000/about)

---

Built with ❤️ for food enthusiasts
