import { Slot, component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";
// import { formatDate } from "~/utils/formatDate"

export default component$(() => {
  // Get metadata and frontmatter
  const head = useDocumentHead();

  return (
    <article>
      <header>
        <h1>{head.title}</h1>
        <time dateTime={head.frontmatter.date}>
          {/* <span>{formatDate(head.frontmatter.date)}</span> */}
        </time>
      </header>
      <section>
        <Slot />
      </section>
    </article>
  );
});
