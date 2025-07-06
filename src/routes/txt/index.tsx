import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>TXT</h1>
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
