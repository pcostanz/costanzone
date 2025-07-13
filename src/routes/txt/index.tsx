import type { DocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
// import { formatDate } from "~/utils/formatDate"
import { POSTS } from "./(posts)/posts";

export default component$(() => {
  const location = useLocation();

  console.log(location.url.pathname);

  return (
    <div class="flex flex-col lg:flex-row">
      {/* Left column - List */}
      <div class="w-full lg:w-1/3 p-4">
        <ul class="text-center gap-8 max-w-xs mx-auto flex flex-col">
          {POSTS.map((post) => {
            const isActive = location.url.pathname === `/txt/${post.slug}`;
            console.log(isActive);
            console.log(location.url.pathname);
            console.log(post.slug);
            return (
              <Link key={post.slug} href={`/txt/${post.slug}`}>
                <li
                  class={`border-2 pb-4 h-24 transition-colors duration-200 ${
                    isActive
                      ? "border-red-500 bg-green-950/75 text-green-300"
                      : "border-green-300 bg-gray-950/75 hover:border-green-400 hover:bg-gray-900/75"
                  }`}
                >
                  {/* <time dateTime={post.date}>{formatDate(post.date)}</time> */}
                  <h2>{post.title}</h2>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      {/* Right column - Placeholder content */}
      <div class="w-full lg:w-2/3 p-4">
        <div class="text-center text-gray-500">
          <h2 class="text-xl mb-4">Select a post from the list</h2>
          <p>Choose a post from the left to read its content here.</p>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: ".txt",
  meta: [
    {
      name: "the costanzone",
      content: "get in the zone",
    },
  ],
};
