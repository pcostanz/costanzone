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
    <div class="min-h-screen bg-gray-900 p-8">
      <h1 class="text-3xl font-bold text-white mb-8 text-center">
        Costanzone Logo Demo
      </h1>

      <div class="space-y-12 max-w-4xl mx-auto">
        {/* Basic */}
        <div class="text-center">
          <h2 class="text-xl text-white mb-4">Basic</h2>
          <CostanzoneLogo variant="basic" />
        </div>

        {/* Rainbow */}
        <div class="text-center">
          <h2 class="text-xl text-white mb-4">Rainbow Colors</h2>
          <CostanzoneLogo variant="rainbow" />
        </div>

        {/* Pulsing */}
        <div class="text-center">
          <h2 class="text-xl text-white mb-4">Pulsing Animation</h2>
          <CostanzoneLogo variant="pulsing" />
        </div>

        {/* Wave */}
        <div class="text-center">
          <h2 class="text-xl text-white mb-4">Wave Animation</h2>
          <CostanzoneLogo variant="wave" size={0.2} />
        </div>

        {/* Background Highlight */}
        <div class="text-center">
          <h2 class="text-xl text-white mb-4">Background Highlight</h2>
          <CostanzoneLogo variant="highlight" />
        </div>

        {/* Interactive */}
        <div class="text-center">
          <h2 class="text-xl text-white mb-4">
            Interactive (Hover each letter)
          </h2>
          <CostanzoneLogo variant="interactive" />
        </div>

        {/* Glitch Effect */}
        <div class="text-center">
          <h2 class="text-xl text-white mb-4">Glitch Effect</h2>
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
