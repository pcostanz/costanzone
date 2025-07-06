import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CostanzoneLogo from "~/components/CostanzoneLogo";

export default component$(() => {
  const animationFrame = useSignal(0);

  useVisibleTask$(() => {
    const animate = () => {
      animationFrame.value = (animationFrame.value + 1) % 120;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  });

  return (
    <div class="min-h-screen bg-gray-900 opacity-20">
      <div class="space-y-8 max-w-4xl mx-auto">
        <div class="text-center">
          <CostanzoneLogo variant="basic" />
        </div>

        {/* Rainbow */}
        <div class="text-center">
          <CostanzoneLogo variant="rainbow" />
        </div>

        {/* Pulsing */}
        <div class="text-center">
          <CostanzoneLogo variant="pulsing" />
        </div>

        {/* Wave */}
        <div class="text-center">
          <CostanzoneLogo variant="wave" />
        </div>

        {/* Background Highlight */}
        <div class="text-center">
          <CostanzoneLogo variant="highlight" />
        </div>

        {/* Interactive */}
        <div class="text-center">
          <CostanzoneLogo variant="interactive" />
        </div>

        {/* Glitch Effect */}
        <div class="text-center">
          <CostanzoneLogo variant="glitch" />
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
