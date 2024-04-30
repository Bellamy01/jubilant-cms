import { getPost, getPosts } from "@/lib/actions";
import { Post } from "@/lib/interfaces";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata({
  params: { slug }} : Params): Promise<Metadata> {
    const post: Post = await getPost(slug);

    return {
      title: post.title,
      openGraph: {
        images: urlForImage(post.mainImage.asset),
        description: post.mainImage.alt,
      },
    };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post: Post) => ({
    slug: post.slug.current,
  }));
}

export default async function Page({ params: { slug } }: Params) {
  const post: Post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="flex items-center justify-center gap-5 flex-col py-6 lg:py-12">
      <h2 className="font-bold text-2xl lg:text-5xl text-center text-blue-800 dark:text-blue-500">
        {post.title}
      </h2>
      <p className="text-2xl">{post.author.name}</p>
      <p className="text-sm">{new Date(post.publishedAt).toDateString()}</p>
      <Image
        src={urlForImage(post.mainImage.asset)}
        width={1200}
        height={1200}
        alt={post.mainImage.alt}
        className="w-full h-fit bg-center bg-cover my-5"
      />
      <div className="border-[0.5px] lg:my-4 border-gray-400 w-full" />
      <div className="prose-headings:my-50 prose-p:leading-7 prose-headings:text-balance prose-headings:text-blue-500 prose-li:list-disc">
        <PortableText
          value={post.body}
          components={{
            types: {
              image: ({ value }) => (
                <Image
                  src={urlForImage(value)}
                  width={800}
                  height={800}
                  alt={value.alt}
                  className="w-full h-fit lg:h-[34rem] bg-center bg-cover my-5"
                />
              ),
            },
            block: {
              strong: ({ children }) => (
                <strong className="text-2xl">{children}</strong>
              ),
            },
            listItem: {
              bullet: ({ children }) => (
                <li style={{ listStyleType: "disclosure-closed" }}>
                  {children}
                </li>
              ),
              checkmarks: ({ children }) => <li>✅ {children}</li>,
            },
          }}
        />
      </div>
    </div>
  );
}
