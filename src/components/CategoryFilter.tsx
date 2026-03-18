'use client';

import { categories } from '@/data/products';

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
      <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
      <ul className="space-y-1">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onSelect(cat)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selected === cat
                  ? 'bg-primary-600 text-white font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
