import { AppProps } from "$fresh/server.ts";

import Footer from "../layouts/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <body class="flex flex-col min-h-screen antialiased text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">
      <Component />

      <Footer />
    </body>
  );
}
