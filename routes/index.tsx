import { Handlers, PageProps } from "$fresh/server.ts";

import { Post } from "../types.d.ts";
import { listPosts } from "../utils/posts.ts";

export const handler: Handlers = {
  async GET(_request, context) {
    const posts = await listPosts();
    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { posts } = props?.data || {};

  return (
    <main>
      <div class="m-4">
        <h1 class="text-4xl font-bold">Mi blog</h1>

        {posts.map((post: Post) => (
          <article class="p-4">
            <h2 class="text-2xl font-bold">
              <a
                class="underline hover:text-blue-500"
                href={`/blog/${post.id}`}
              >
                {post.title}
              </a>
            </h2>
            <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
          </article>
        ))}
      </div>
    </main>
  );
}
