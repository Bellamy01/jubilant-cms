import { getPost } from "@/lib/actions";
import { Post } from "@/lib/interfaces";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const revalidate = 60;

export default async function Page({ params: { slug } }: Params) {
  const post: Post = await getPost(slug);

  return (
    <div className="flex items-center justify-center gap-5 flex-col py-6 lg:py-12">
      <h2 className="font-bold text-2xl lg:text-5xl text-center text-blue-800 dark:text-blue-500">
        {post.title}
      </h2>
      <p className="text-2xl">{post.author.name}</p>
      <p className="text-sm">{new Date(post.publishedAt).toDateString()}</p>
      <div className="border-[0.5px] lg:my-4 border-gray-400 w-full" />
      <div className="prose-headings:my-50 prose-p:leading-7 prose-headings:text-blue-500 prose-li:list-disc">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: `Post title`
}
