import PostCard from "@/components/post-card";
import SectionHeading from "@/components/section-heading";
import { getPosts } from "@/lib/actions";
import { Post } from "@/lib/interfaces";

export const revalidate = 3600;

export default async function Home() {
  const posts: Post[] = await getPosts();
  return (
    <div className="grid grid-cols-1 gap-10 md:gap-14">
      <div>
        <h2 className="text-xl font-bold">Welcome to world of blogs.</h2>
        <p className="text-lg">
          Here you will find awesome articles that you can share with your loved
          ones. Stay stuned and sharpen your reading.
        </p>
      </div>
      <SectionHeading title="Our Articles" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {posts.length > 0 &&
          posts.map((post: Post) => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
}
