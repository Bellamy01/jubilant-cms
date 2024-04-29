import { Post } from "@/lib/interfaces";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div id={post._id}>
      <Link href={`/posts/${post.slug.current}`}>
        <h3 className="font-bold">{post.title}</h3>
        <Image
          src={urlForImage(post.mainImage.asset)}
          width={800}
          height={800}
          alt={post.mainImage.alt}
          className="w-full lg:h-72 bg-center bg-cover my-4"
          key={post._id}
        />
      </Link>
      <Link
        href={`/categories/${post.category.slug.current}`}
        key={post.category._id}
        className="text-base text-blue-500"
      >
        #{post.category.title.toLowerCase()}
      </Link>
      <p className="text-xs">{new Date(post.publishedAt).toDateString()}</p>
      <p>By {post.author.name}</p>
    </div>
  );
}
