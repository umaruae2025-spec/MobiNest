import Link from 'next/link';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/shop?category=${category.slug}`}>
      <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 hover:border-gray-300">
        <div className="text-5xl mb-4">{category.icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {category.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{category.description}</p>
        <span className="inline-flex items-center text-black font-medium group-hover:space-x-2 transition-all">
          Explore
          <svg
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
