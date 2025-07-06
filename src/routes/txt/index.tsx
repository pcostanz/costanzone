import type { DocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
// import { formatDate } from "~/utils/formatDate"
import { POSTS } from "./(posts)/posts";

export default component$(() => {
  return (
    <>
      <ul class="text-lime-100">
        {POSTS.map((post) => (
          <li key={post.slug}>
            {/* <time dateTime={post.date}>{formatDate(post.date)}</time> */}
            <Link href={`/txt/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
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
