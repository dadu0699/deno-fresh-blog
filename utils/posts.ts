import { extract } from "$std/front_matter/any.ts";
import { render } from "gfm/mod.ts";

import { Post } from "../types.d.ts";

export async function loadPost(id: string): Promise<Post | null> {
  const raw = await Deno
    .readTextFile(`./content/posts/${id}.md`)
    .catch(() => null);

  if (!raw) return null;

  const { attrs, body } = extract(raw);
  const params = attrs as Record<string, string>;

  const post: Post = {
    id,
    body: render(body),
    title: params.title,
    date: new Date(params.date),
    excerpt: params.excerpt,
  };

  return post;
}

export async function listPostsSequentially(): Promise<Post[]> {
  const posts = [];

  for await (const dirEntry of Deno.readDir("./content/posts")) {
    const { name } = dirEntry;
    const [id] = name.split(".");

    const post = await loadPost(id);
    if (post) posts.push(post);
  }

  return posts;
}

export async function listPosts(): Promise<Post[]> {
  const promises = [];

  for await (const dirEntry of Deno.readDir("./content/posts")) {
    const { name } = dirEntry;
    const [id] = name.split(".");
    if (id) promises.push(loadPost(id));
  }

  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
}
