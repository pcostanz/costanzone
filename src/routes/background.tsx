import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CostanzoneLogo from "~/components/CostanzoneLogo";

export const Background = component$(() => {
  return (
    <div
      key="background"
      class="fixed inset-0 -top-48 bg-gray-900 opacity-8 rotate-345 select-none cursor-default -z-10"
    >
      <div class="space-y-8 max-w-4xl mx-auto">
        <div class="text-center flex flex-row gap-12 justify-center">
          <div>
            <CostanzoneLogo variant="basic" />
          </div>
          <div>
            <CostanzoneLogo variant="basic" />
          </div>
          <div>
            <CostanzoneLogo variant="basic" />
          </div>
        </div>

        {/* Pulsing */}
        <div class="text-center flex flex-row gap-12 justify-center">
          <div>
            <CostanzoneLogo variant="pulsing" />
          </div>
          <div>
            <CostanzoneLogo variant="pulsing" />
          </div>
          <div>
            <CostanzoneLogo variant="pulsing" />
          </div>
        </div>

        <div class="text-center flex flex-row gap-12 justify-center">
          <div>
            <CostanzoneLogo variant="rainbow" />
          </div>
          <div>
            <CostanzoneLogo variant="rainbow" />
          </div>
          <div>
            <CostanzoneLogo variant="rainbow" />
          </div>
        </div>
        <div class="text-center flex flex-row gap-12 justify-center">
          <div>
            <CostanzoneLogo variant="wave" />
          </div>
          <div>
            <CostanzoneLogo variant="wave" />
          </div>
          <div>
            <CostanzoneLogo variant="wave" />
          </div>
        </div>

        <div class="text-center flex flex-row gap-12 justify-center">
          <div>
            <CostanzoneLogo variant="highlight" />
          </div>
          <div>
            <CostanzoneLogo variant="highlight" />
          </div>
          <div>
            <CostanzoneLogo variant="highlight" />
          </div>
        </div>

        <div class="text-center flex flex-row gap-12 justify-center">
          <div>
            <CostanzoneLogo variant="glitch" />
          </div>
          <div>
            <CostanzoneLogo variant="glitch" />
          </div>
          <div>
            <CostanzoneLogo variant="glitch" />
          </div>
        </div>
        <div class="text-center flex flex-row gap-12 justify-center">
          <div>
            <CostanzoneLogo variant="basic" />
          </div>
          <div>
            <CostanzoneLogo variant="basic" />
          </div>
          <div>
            <CostanzoneLogo variant="basic" />
          </div>
        </div>

        {/* Pulsing */}
        <div class="text-center flex flex-row gap-12 justify-center">
          <div>
            <CostanzoneLogo variant="pulsing" />
          </div>
          <div>
            <CostanzoneLogo variant="pulsing" />
          </div>
          <div>
            <CostanzoneLogo variant="pulsing" />
          </div>
        </div>

        <div class="text-center flex flex-row gap-12 justify-center">
          <div>
            <CostanzoneLogo variant="rainbow" />
          </div>
          <div>
            <CostanzoneLogo variant="rainbow" />
          </div>
          <div>
            <CostanzoneLogo variant="rainbow" />
          </div>
        </div>
        <div class="text-center flex flex-row gap-12 justify-center">
          <div>
            <CostanzoneLogo variant="wave" />
          </div>
          <div>
            <CostanzoneLogo variant="wave" />
          </div>
          <div>
            <CostanzoneLogo variant="wave" />
          </div>
        </div>

        <div class="text-center flex flex-row gap-12 justify-center">
          <div>
            <CostanzoneLogo variant="highlight" />
          </div>
          <div>
            <CostanzoneLogo variant="highlight" />
          </div>
          <div>
            <CostanzoneLogo variant="highlight" />
          </div>
        </div>

        <div class="text-center flex flex-row gap-12 justify-center">
          <div>
            <CostanzoneLogo variant="glitch" />
          </div>
          <div>
            <CostanzoneLogo variant="glitch" />
          </div>
          <div>
            <CostanzoneLogo variant="glitch" />
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Costanzone Logo Demo",
  meta: [
    {
      name: "description",
      content: "Demo of the Costanzone logo component with animations",
    },
  ],
};
