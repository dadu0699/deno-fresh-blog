import { useState } from "preact/hooks";

export default function Button() {
  const [like, setLike] = useState(false);

  return (
    <button
      class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
      onClick={() => setLike(!like)}
    >
      {like ? "🤍 Like" : "❤️ Dislike"}
    </button>
  );
}
