export default function Footer() {
  const links = [{ name: "Home", url: "/" }];

  return (
    <footer class="mx-auto my-16 pb-6 space-y-3 text-center text-sm md:text-base text-gray-600 dark:text-gray-500">
      <ul class="flex items-center justify-center">
        {links.map(({ name, url }) => (
          <>
            <li class="text-sm md:text-base text-gray-700 dark:text-gray-500">
              <a
                class="hover:text-gray-800 dark:hover:text-gray-200 hover:underline"
                href={url}
              >
                {name}
              </a>
            </li>
            {/* <span class="px-1">•</span> */}
          </>
        ))}
      </ul>

      <div>
        Published with{" "}
        <a class="font-semibold hover:underline" href="https://deno.com/deploy">
          Deno Deploy
        </a>
      </div>
    </footer>
  );
}
