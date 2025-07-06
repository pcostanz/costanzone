import { component$ } from "@builder.io/qwik";
import { useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import CostanzoneLogo from "~/components/CostanzoneLogo";
import Demo from "./demo";
import { updateFavicon } from "~/utils/favicon-generator";

export default component$(() => {
  useVisibleTask$(() => {
    // Favicon animation - spell out "costanzone" once then return to original
    const faviconLetters = "ostanzone".split("");
    let faviconIndex = 0;
    let hasCompletedCycle = false;

    const faviconInterval = setInterval(() => {
      if (!hasCompletedCycle) {
        updateFavicon(faviconLetters[faviconIndex]);
        faviconIndex++;

        if (faviconIndex >= faviconLetters.length) {
          hasCompletedCycle = true;
          // Clear the interval immediately to stop the animation
          clearInterval(faviconInterval);
          // Show the last letter for a moment, then go black
          setTimeout(() => {
            updateFavicon(" ");
            // Add 2 second delay before returning to original favicon
            setTimeout(() => {
              updateFavicon("c");
            }, 2000);
          }, 300); // Show last letter for the same duration as other letters
        }
      }
    }, 300); // Slightly faster than title for more dynamic feel

    return () => {
      clearInterval(faviconInterval);
    };
  });

  return (
    <>
      <div class="mt-8 p-6 rounded-lg">
        <div class="flex justify-center">
          {/* <CostanzoneLogo className="text-green-300" /> */}
          <Demo />
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
  title: "costan.zone",
  meta: [
    {
      name: "the costanzone",
      content: "get in the zone",
    },
  ],
};
