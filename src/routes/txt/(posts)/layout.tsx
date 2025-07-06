import { Slot, component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";
// import { formatDate } from "~/utils/formatDate"

export default component$(() => {
  // Get metadata and frontmatter
  const head = useDocumentHead();

  return (
    <article class="max-w-3xl mx-auto px-4 py-8 leading-relaxed text-lg bg-gray-900 text-gray-50 rounded-xl">
      <header>
        <h1>{head.title}</h1>
        <time dateTime={head.frontmatter.date}>
          {/* <span>{formatDate(head.frontmatter.date)}</span> */}
        </time>
      </header>
      <section class="max-w-3xl mx-auto px-4 py-8 leading-relaxed text-lg">
        <Slot />
      </section>
    </article>
  );
});
