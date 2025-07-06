import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CostanzoneLogo, { type LetterProps } from "~/components/CostanzoneLogo";

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

  // Rainbow effect letters
  const rainbowLetters: LetterProps[] = [
    { foreground: "text-red-400" },
    { foreground: "text-orange-400" },
    { foreground: "text-yellow-400" },
    { foreground: "text-green-400" },
    { foreground: "text-blue-400" },
    { foreground: "text-indigo-400" },
    { foreground: "text-purple-400" },
    { foreground: "text-pink-400" },
    { foreground: "text-red-400" },
    { foreground: "text-orange-400" },
  ];

  // Pulsing effect letters
  const pulsingLetters: LetterProps[] = Array.from({ length: 10 }, (_, i) => ({
    foreground: "text-cyan-400",
    animation: `pulse 2s ease-in-out infinite ${i * 0.2}s`,
  }));

  // Glitch effect letters
  const glitchLetters: LetterProps[] = Array.from({ length: 10 }, (_, i) => ({
    foreground: "text-purple-400",
    animation: `glitch 3s ease-in-out infinite ${i * 0.3}s`,
  }));

  // Wave effect letters
  const waveLetters: LetterProps[] = Array.from({ length: 10 }, (_, i) => ({
    foreground: "text-emerald-400",
    animation: `wave 2s ease-in-out infinite ${i * 0.1}s`,
  }));

  // Background highlight letters
  const highlightLetters: LetterProps[] = Array.from({ length: 10 }, () => ({
    foreground: "text-white",
    background: "bg-gradient-to-r from-blue-500 to-purple-600",
    className: "px-1 rounded",
  }));

  return (
    <>
      <div class="min-h-screen bg-gray-900 p-8">
        <h1 class="text-3xl font-bold text-white mb-8 text-center">
          Costanzone Logo Demo
        </h1>

        <div class="space-y-12 max-w-4xl mx-auto">
          {/* Basic */}
          <div class="text-center">
            <h2 class="text-xl text-white mb-4">Basic</h2>
            <CostanzoneLogo className="text-green-300" />
          </div>

          {/* Rainbow */}
          <div class="text-center">
            <h2 class="text-xl text-white mb-4">Rainbow Colors</h2>
            <CostanzoneLogo letters={rainbowLetters} />
          </div>

          {/* Pulsing */}
          <div class="text-center">
            <h2 class="text-xl text-white mb-4">Pulsing Animation</h2>
            <CostanzoneLogo letters={pulsingLetters} />
          </div>

          {/* Wave */}
          <div class="text-center">
            <h2 class="text-xl text-white mb-4">Wave Animation</h2>
            <CostanzoneLogo letters={waveLetters} />
          </div>

          {/* Background Highlight */}
          <div class="text-center">
            <h2 class="text-xl text-white mb-4">Background Highlight</h2>
            <CostanzoneLogo letters={highlightLetters} />
          </div>

          {/* Interactive */}
          <div class="text-center">
            <h2 class="text-xl text-white mb-4">
              Interactive (Hover each letter)
            </h2>
            <CostanzoneLogo
              letters={Array.from({ length: 10 }, () => ({
                foreground: "text-yellow-400",
                className:
                  "hover:text-red-400 hover:scale-110 transition-all duration-200 cursor-pointer",
              }))}
            />
          </div>

          {/* Glitch Effect */}
          <div class="text-center">
            <h2 class="text-xl text-white mb-4">Glitch Effect</h2>
            <CostanzoneLogo letters={glitchLetters} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          10% { transform: translate(-2px, 2px); }
          20% { transform: translate(2px, -2px); }
          30% { transform: translate(-2px, -2px); }
          40% { transform: translate(2px, 2px); }
          50% { transform: translate(0); }
        }
      `}</style>
    </>
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
