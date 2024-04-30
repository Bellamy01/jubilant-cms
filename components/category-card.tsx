import Link from "next/link";

export default function CategoryCard({ name, slug }: { name: string, slug: string }) {
  return (
    <div>
      <Link
        href={`/categories/${slug}`}
        className="bg-black/70 dark:bg-white dark:text-black flex items-center justify-center py-2 rounded-full text-white"
      >
        {name}
      </Link>
    </div>
  );
}
