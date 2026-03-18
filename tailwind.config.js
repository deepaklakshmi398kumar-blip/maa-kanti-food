/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        golden: {
          50: '#FBF8F3',
          100: '#F7F0E8',
          500: '#C9A961',
          600: '#B8995A',
          700: '#A78945',
          800: '#8B6F47',
        },
        brown: {
          50: '#F5EFE8',
          600: '#8B6F47',
          700: '#6F5538',
          900: '#2C1810',
        },
        cream: '#fef9f3',
        dark: '#2c1810',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      spacing: {
        mobile: '1rem',
        tablet: '1.5rem',
        desktop: '2rem',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      boxShadow: {
        sm: '0 2px 4px rgba(0,0,0,0.1)',
        md: '0 4px 12px rgba(0,0,0,0.15)',
        lg: '0 8px 24px rgba(0,0,0,0.2)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideUp: 'slideUp 0.3s ease-out',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(10px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
  darkMode: 'class',
};

export default config;
