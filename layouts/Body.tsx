import { ComponentChildren } from "preact";

import Footer from "./Footer.tsx";

type Props = {
  children: ComponentChildren;
};

export default function Body({ children }: Props) {
  return (
    <section class="flex flex-col min-h-screen antialiased text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">
      {children}
      <Footer />
    </section>
  );
}
