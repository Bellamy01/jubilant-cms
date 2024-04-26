import Link from "next/link";

export default function CmsHeader() {
  return (
    <div className="flex items-center justify-between p-2">
      <Link href="/" className="flex items-center justify-center gap-2 px-2 bg-red-500">
        <p className="text-amber-50">BLOG CMS</p>
      </Link>
      <div>Welcome to BLOG CMS Studio. Here you can CRUD your web application data.</div>
    </div>
  );
}
