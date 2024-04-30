import CategoryCard from "@/components/category-card";
import PostCard from "@/components/post-card";
import SectionHeading from "@/components/section-heading";
import { getCategories, getPosts } from "@/lib/actions";
import { Category, Post } from "@/lib/interfaces";

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  const categories: Category[] = await getCategories();
  return (
    <div className="grid grid-cols-1">
      <div>
        <h2 className="text-xl font-bold">Welcome to world of blogs.</h2>
        <p className="text-lg">
          Here you will find awesome articles that you can share with your loved
          ones. Stay stuned and sharpen your reading.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 my-12">
        <SectionHeading title="Our Articles" />
        <div className="grid grid-cols-1 gap-2">
          <p className="text-xl">Choose a section</p>
            {categories.length > 0 ? (
               <div className="grid grid-cols-5 gap-5">
                {categories.map((category: Category, index: number) => (
                  <CategoryCard key={category._id} name={category.title} slug={category.slug.current} /> ))}
              </div>
            ) : (
              <div>
                <p>Loading...</p>
              </div>
            )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 grid-flow-dense">
          {posts.length > 0 &&
            posts.map((post: Post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </div>
  );
}
