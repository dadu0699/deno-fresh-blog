import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

import { CSS } from "gfm/mod.ts";

import { loadPost } from "../../utils/posts.ts";
import ReturnIcon from "../../components/ReturnIcon.tsx";

export const handler: Handlers = {
  async GET(_request, context) {
    const { id } = context.params;
    const post = await loadPost(id);

    if (!post) return context.renderNotFound();

    return context.render({ post });
  },
};

export default function PagePost(props: PageProps) {
  const { post } = props?.data || {};

  return (
    <>
      <Head>
        <title>Post - {post.title}</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <style>
          {`
            figure img {
              margin: auto;
            }
          `}
        </style>
      </Head>

      <article class="flex-grow container md:max-w-2xl px-4 pt-[4.5rem] mx-auto">
        <section class="fixed top-0 left-0 p-4 z-50 min-w-full bg-white md:bg-transparent dark:bg-gray-900 dark:md:bg-transparent">
          <a
            class="flex content-center items-center p-2 max-w-min rounded-lg text-sm md:text-base hover:bg-gray-200 dark:hover:bg-gray-800"
            href="/"
          >
            <ReturnIcon />
            Back
          </a>
        </section>

        <header>
          <section class="flex space-x-2 max-w-max mx-auto text-xs md:text-base text-gray-500 dark:text-gray-400 font-medium">
            <time>
              {new Intl.DateTimeFormat("en-GT", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(post.date)}
            </time>
            <span>•</span>
            <span>?? min read</span>
          </section>

          <h1 class="mt-3 mb-10 text-3xl md:text-4xl font-extrabold md:text-center">
            {post.title}
          </h1>
        </header>

        <div
          data-color-mode="auto"
          data-light-theme="light"
          data-dark-theme="dark"
          class={`${"markdown-body"} container mx-auto`}
          style={{ backgroundColor: "transparent !important" }}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>
    </>
  );
}
