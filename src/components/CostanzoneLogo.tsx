import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export interface LetterProps {
  foreground?: string;
  background?: string;
  className?: string;
  animation?: string;
}

export interface CostanzoneLogoProps {
  letters?: LetterProps[];
  className?: string;
  animated?: boolean;
}

const PAD_WIDTH = 8;

// Helper function to pad string to consistent width
const padToWidth = (str: string, width: number): string => {
  return str.padEnd(width, " ");
};

const letterData = {
  c: [
    padToWidth("  ██████╗", PAD_WIDTH),
    padToWidth(" ██╔════╝", PAD_WIDTH),
    padToWidth(" ██║     ", PAD_WIDTH),
    padToWidth(" ██║     ", PAD_WIDTH),
    padToWidth(" ╚██████╗", PAD_WIDTH),
    padToWidth("  ╚═════╝", PAD_WIDTH),
  ],
  o: [
    padToWidth("  ██████╗ ", PAD_WIDTH),
    padToWidth(" ██╔═══██╗", PAD_WIDTH),
    padToWidth(" ██║   ██║", PAD_WIDTH),
    padToWidth(" ██║   ██║", PAD_WIDTH),
    padToWidth(" ╚██████╔╝", PAD_WIDTH),
    padToWidth("  ╚═════╝ ", PAD_WIDTH),
  ],
  s: [
    padToWidth(" ███████╗", PAD_WIDTH),
    padToWidth(" ██╔════╝", PAD_WIDTH),
    padToWidth(" ███████╗", PAD_WIDTH),
    padToWidth(" ╚════██║", PAD_WIDTH),
    padToWidth(" ███████║", PAD_WIDTH),
    padToWidth(" ╚══════╝", PAD_WIDTH),
  ],
  t: [
    padToWidth(" ████████╗", PAD_WIDTH),
    padToWidth(" ╚══██╔══╝", PAD_WIDTH),
    padToWidth("    ██║   ", PAD_WIDTH),
    padToWidth("    ██║   ", PAD_WIDTH),
    padToWidth("    ██║   ", PAD_WIDTH),
    padToWidth("    ╚═╝   ", PAD_WIDTH),
  ],
  a: [
    padToWidth("  █████╗ ", PAD_WIDTH),
    padToWidth(" ██╔══██╗", PAD_WIDTH),
    padToWidth(" ███████║", PAD_WIDTH),
    padToWidth(" ██╔══██║", PAD_WIDTH),
    padToWidth(" ██║  ██║", PAD_WIDTH),
    padToWidth(" ╚═╝  ╚═╝", PAD_WIDTH),
  ],
  n: [
    padToWidth(" ███╗   ██╗", PAD_WIDTH),
    padToWidth(" ████╗  ██║", PAD_WIDTH),
    padToWidth(" ██╔██╗ ██║", PAD_WIDTH),
    padToWidth(" ██║╚██╗██║", PAD_WIDTH),
    padToWidth(" ██║ ╚████║", PAD_WIDTH),
    padToWidth(" ╚═╝  ╚═══╝", PAD_WIDTH),
  ],
  z: [
    padToWidth(" ███████╗", PAD_WIDTH),
    padToWidth(" ╚════██║", PAD_WIDTH),
    padToWidth("  █████╔╝", PAD_WIDTH),
    padToWidth(" ██╔═══╝ ", PAD_WIDTH),
    padToWidth(" ███████╗", PAD_WIDTH),
    padToWidth(" ╚══════╝", PAD_WIDTH),
  ],
  e: [
    padToWidth(" ███████╗", PAD_WIDTH),
    padToWidth(" ██╔════╝", PAD_WIDTH),
    padToWidth(" █████╗  ", PAD_WIDTH),
    padToWidth(" ██╔══╝  ", PAD_WIDTH),
    padToWidth(" ███████╗", PAD_WIDTH),
    padToWidth(" ╚══════╝", PAD_WIDTH),
  ],
};

const word = "costanzone";

export default component$<CostanzoneLogoProps>(
  ({ letters = [], className = "", animated = false }) => {
    const animationFrame = useSignal(0);

    useVisibleTask$(() => {
      if (!animated) return;

      const animate = () => {
        animationFrame.value = (animationFrame.value + 1) % 60;
        requestAnimationFrame(animate);
      };

      const animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    });

    return (
      <div class={`font-mono ${className}`}>
        {Array.from({ length: 6 }, (_, rowIndex) => (
          <div key={rowIndex} class="flex justify-center">
            {word.split("").map((letter, letterIndex) => {
              const letterProps = letters[letterIndex] || {};
              const {
                foreground = "text-green-300",
                background = "bg-transparent",
                className: letterClassName = "",
                animation,
              } = letterProps;

              const letterRow =
                letterData[letter as keyof typeof letterData][rowIndex] || "";

              return (
                <div
                  key={`${letter}-${letterIndex}-${rowIndex}`}
                  class={`${foreground} ${background} ${letterClassName}`}
                  style={animation ? { animation } : undefined}
                >
                  <pre class="m-0 p-0 leading-none">{letterRow}</pre>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  },
);
