import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/ui";
import { TailwindTest } from "~/components/tailwind-test";

export default component$(() => {
  return (
    <>
      <div>Hello world</div>
      <Button look="primary">Click me</Button>
      <TailwindTest />
    </>
  );
});

export const head: DocumentHead = {
  title: "c o s t a n / z o n e",
  meta: [
    {
      name: "the costanzone",
      content: "welcome to the costanzone",
    },
  ],
};
