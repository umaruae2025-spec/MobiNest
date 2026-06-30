import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  current: string;
}

export default function Breadcrumb({ items, current }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      <Link href="/" className="hover:text-black transition">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span>/</span>
          <Link href={item.href} className="hover:text-black transition">
            {item.label}
          </Link>
        </div>
      ))}
      <span>/</span>
      <span className="text-black font-medium">{current}</span>
    </nav>
  );
}
