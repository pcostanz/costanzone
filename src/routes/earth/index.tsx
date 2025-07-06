import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>exploring google earth to find art in topography</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "earth",
  meta: [
    {
      name: "the costanzone",
      content: "get in the zone",
    },
  ],
};
