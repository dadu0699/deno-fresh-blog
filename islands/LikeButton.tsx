import { useState } from "preact/hooks";

export default function LikeButton() {
  const [like, setLike] = useState(false);

  return (
    <button
      class="px-2 py-1 rounded-lg text-sm md:text-base hover:bg-gray-200 dark:hover:bg-gray-800 outline-none focus:outline-none"
      onClick={() => setLike(!like)}
    >
      {like ? "🤍 Like" : "❤️ Dislike"}
    </button>
  );
}
