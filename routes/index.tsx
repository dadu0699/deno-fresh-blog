import { Handlers, PageProps } from "$fresh/server.ts";

import { Post } from "../types.d.ts";
import { listPosts } from "../utils/posts.ts";
import LikeButton from "../islands/LikeButton.tsx";

export const handler: Handlers = {
  async GET(_request, context) {
    const posts = await listPosts();
    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { posts } = props?.data || {};

  return (
    <div class="flex-grow container md:max-w-2xl px-4 pt-16 mx-auto">
      <header>
        <div class="flex justify-between items-center">
          <h1 class="text-3xl md:text-4xl border-b-4 border-pink-600 pb-1 font-extrabold transform -rotate-1">
            My blog.
          </h1>

          <div class="flex justify-start space-x-2">
            <LikeButton />
          </div>
        </div>

        <p class="mt-6 text-lg md:text-xl">
          This is an example of a blog made with Deno Fresh and Twind.
        </p>
      </header>

      <section class="mt-12 space-y-6">
        {posts.map((post: Post) => (
          <article>
            <h2 class="text-lg md:text-xl font-semibold hover:underline">
              <a
                href={`/blog/${post.id}`}
              >
                {post.title}
              </a>
            </h2>

            <time class="text-xs md:text-sm font-medium text-gray-400 dark:text-gray-600">
              {Intl.DateTimeFormat("en-GT", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(post.date)}
            </time>
          </article>
        ))}
      </section>
    </div>
  );
}
