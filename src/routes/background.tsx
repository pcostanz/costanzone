import { component$ } from "@builder.io/qwik";
import CostanzoneLogo from "~/components/CostanzoneLogo";

export const Background = component$(() => {
  // Animation delay increment in milliseconds
  const delayIncrement = 75;

  // Define the variants for each row
  const variants: Array<
    "basic" | "pulsing" | "rainbow" | "wave" | "highlight" | "glitch"
  > = [
    "basic",
    "pulsing",
    "rainbow",
    "wave",
    "highlight",
    "glitch",
    "basic",
    "pulsing",
    "rainbow",
    "wave",
    "highlight",
    "glitch",
  ];

  return (
    <div
      key="background"
      class="fixed inset-0 -top-48 opacity-8 rotate-345 select-none cursor-default -z-10"
    >
      <div class="space-y-8 max-w-4xl mx-auto">
        {variants.map((variant, index) => (
          <div
            key={`${variant}-${index}`}
            class="text-center flex flex-row gap-12 justify-center animate-fade-in"
            style={{
              animationDelay: `${index * delayIncrement}ms`,
              animationFillMode: "both",
            }}
          >
            <div>
              <CostanzoneLogo variant={variant} />
            </div>
            <div>
              <CostanzoneLogo variant={variant} />
            </div>
            <div>
              <CostanzoneLogo variant={variant} />
            </div>
          </div>
        ))}
      </div>

      {/* CSS for the fade-in animation */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 400ms ease-out;
        }
      `}</style>
    </div>
  );
});
