import { Slot, component$ } from "@builder.io/qwik";
import { useDocumentHead, Link, useLocation } from "@builder.io/qwik-city";
// import { formatDate } from "~/utils/formatDate"
import { POSTS } from "./posts";

export default component$(() => {
  const head = useDocumentHead();
  const location = useLocation();

  console.log("location", location.url.pathname);

  return (
    <div class="flex flex-col lg:flex-row gap-24">
      {/* Left column - List */}
      <div class="w-full lg:w-1/3 p-4">
        <ul class="text-center gap-8 max-w-xs mx-auto flex flex-col">
          {POSTS.map((post) => {
            const isActive = location.url.pathname === `/txt/${post.slug}/`;
            return (
              <Link key={post.slug} href={`/txt/${post.slug}`}>
                <li
                  class={`border-2 pb-4 h-24 transition-all duration-200 ${
                    isActive
                      ? "border-foreground bg-foreground text-background shadow-lg shadow-green-400/20"
                      : "border-green-300 bg-background/75 hover:bg-background/90"
                  }`}
                >
                  {/* <time dateTime={post.date}>{formatDate(post.date)}</time> */}
                  <h2 class={isActive ? "text-black font-semibold" : ""}>
                    {post.title}
                  </h2>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      {/* Right column - Post content */}
      <div class="w-full lg:w-2/3 p-4">
        <article class="max-w-6xl mx-auto px-4 py-8 leading-relaxed text-lg border-2 border-foreground bg-background/55">
          <header>
            <h1>{head.title}</h1>
            <time dateTime={head.frontmatter.date}>
              {/* <span>{formatDate(head.frontmatter.date)}</span> */}
            </time>
          </header>
          <section class="max-w-4xl mx-auto px-4 py-8 prose prose-lg prose-invert prose-headings:text-gray-50 prose-p:text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-gray-50 prose-code:text-green-400 prose-pre:bg-gray-800 prose-pre:text-gray-200 prose-blockquote:border-l-blue-400 prose-blockquote:text-gray-300 prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300 prose-hr:border-gray-700">
            <Slot />
          </section>
        </article>
      </div>
    </div>
  );
});
