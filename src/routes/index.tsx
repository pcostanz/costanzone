import { component$ } from "@builder.io/qwik";
import { useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CostanzoneLogo from "~/components/CostanzoneLogo";

export default component$(() => {
  useVisibleTask$(() => {
    const titles = [
      "c o s t a n / z o n e",
      "c o s t a n | z o n e",
      "c o s t a n - z o n e",
      "c o s t a n \\ z o n e",
      "c o s t a n ~ z o n e",
    ];
    let currentIndex = 0;

    const interval = setInterval(() => {
      document.title = titles[currentIndex];
      currentIndex = (currentIndex + 1) % titles.length;
    }, 750);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div class="mt-8 p-6 rounded-lg">
        <div class="flex justify-center">
          <CostanzoneLogo className="text-green-300" />
          {/* <Demo /> */}
        </div>

        <div class="mt-4 text-center text-xs text-slate-400">
          <p>the internet is free, build your own footprint</p>
          <p>"they trust me, dumb fucks" - mark zuckerberg</p>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "c o s t a n / z o n e",
  meta: [
    {
      name: "the costanzone",
      content: "get in the zone",
    },
  ],
};
