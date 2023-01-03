import { assertEquals } from "$std/testing/asserts.ts";

import { loadPost } from "./posts.ts";

Deno.test("loadPost() returns null if the post does not exist", async () => {
  const post = await loadPost("non-existent");
  assertEquals(post, null);
});

Deno.test("loadPost() returns a Post object if the post exists", async () => {
  const post = await loadPost("hello-world");
  assertEquals(post?.id, "hello-world");
  assertEquals(post?.title, "Hello World");
});
