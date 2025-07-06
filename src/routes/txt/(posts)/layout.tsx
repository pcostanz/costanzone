import { Slot, component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";
// import { formatDate } from "~/utils/formatDate"

export default component$(() => {
  // Get metadata and frontmatter
  const head = useDocumentHead();

  return (
    <article class="max-w-4xl mx-auto px-4 py-8 leading-relaxed text-lg bg-gray-900 text-gray-50 rounded-xl">
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
  );
});
