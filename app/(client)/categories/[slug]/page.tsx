import PostCard from "@/components/post-card";
import SectionHeading from "@/components/section-heading";
import { getCategory, getPostsPerCategory } from "@/lib/actions";
import { Category, Post } from "@/lib/interfaces";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default async function Page({ params: { slug } }: Params) {
  const posts: Post[] = await getPostsPerCategory(slug);
  const category: Category = await getCategory(slug);
  console.log(posts);
  console.log(category);

  return (
    <div className="flex items-center justify-center gap-5 flex-col py-6 lg:py-12">
      <h2 className="text-6xl">{category.title}</h2>
      <p className="text-center">{category.description}</p>
      <div className="border-[0.5px] lg:my-4 border-gray-400 w-full" />
      <div className="flex items-center justify-center gap-6">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 grid-flow-dense">
            {posts.map((post: Post) => <PostCard key={post._id} post={post} />)}
            </div>
            ) : (
            <div className="flex items-center justify-center">
              <p className="text-xl"> No posts found.</p>
            </div>
          )}
      </div>
    </div>
  );
}
