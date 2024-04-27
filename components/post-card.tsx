import { Category, Post } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }: { post: Post } ) {
  return (
    <div>
      <Link href={`/posts/${post.slug.current}`}>
        <h3 className="font-bold">{post.title}</h3>
        {/* <Image src={post.mainImage.asset.url} alt={post.mainImage.alt} /> */}
        {post.categories.map((category: Category) => (
          <p key={category._id} className="text-sm text-blue-500">#{category.title.toLowerCase()}</p>
        ))}
        <p className="text-xs">{new Date(post.publishedAt).toDateString()}</p>
        <p>By {post.author.name}</p>
      </Link>
    </div>
  );
}
