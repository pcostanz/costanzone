import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>code will go here</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: ".tsx",
  meta: [
    {
      name: "costanzone",
      content: "get in the zone",
    },
  ],
};
