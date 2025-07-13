import { component$ } from "@builder.io/qwik";

export interface LetterProps {
  foreground?: string;
  background?: string;
  className?: string;
  animation?: string;
}

export interface CostanzoneLogoProps {
  letters?: LetterProps[];
  className?: string;
  size?: number; // Font size multiplier (e.g., 0.5 for half size, 2 for double size)
  variant?:
    | "basic"
    | "rainbow"
    | "pulsing"
    | "wave"
    | "glitch"
    | "highlight"
    | "interactive";
}

const PAD_WIDTH = 6;

// Helper function to pad string to consistent width
const padToWidth = (str: string, width: number): string => {
  return str.padEnd(width, " ");
};

// Predefined animation variants
const createRainbowLetters = (): LetterProps[] => [
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

const createPulsingLetters = (): LetterProps[] =>
  Array.from({ length: 10 }, (_, i) => ({
    foreground: "text-cyan-400",
    animation: `pulse 2s ease-in-out infinite ${i * 0.2}s`,
  }));

const createGlitchLetters = (): LetterProps[] =>
  Array.from({ length: 10 }, (_, i) => ({
    foreground: "text-purple-500/70",
    animation: `glitch 3s ease-in-out infinite ${i * 0.3}s`,
  }));

const createWaveLetters = (): LetterProps[] =>
  Array.from({ length: 10 }, (_, i) => ({
    foreground: "text-emerald-400",
    animation: `wave 2s ease-in-out infinite ${i * 0.1}s`,
  }));

const createHighlightLetters = (): LetterProps[] =>
  Array.from({ length: 10 }, () => ({
    foreground: "text-white",
    background: "bg-gradient-to-r from-blue-500 to-purple-600",
    className: "px-1 rounded",
  }));

const createInteractiveLetters = (): LetterProps[] =>
  Array.from({ length: 10 }, () => ({
    foreground: "text-yellow-400",
    className:
      "hover:text-red-400 hover:scale-110 transition-all duration-200 cursor-pointer",
  }));

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
  ({ letters = [], className = "", size = 1, variant = "basic" }) => {
    // Get letters based on variant if no custom letters provided
    const getLetters = (): LetterProps[] => {
      if (letters.length > 0) return letters;

      switch (variant) {
        case "rainbow":
          return createRainbowLetters();
        case "pulsing":
          return createPulsingLetters();
        case "wave":
          return createWaveLetters();
        case "glitch":
          return createGlitchLetters();
        case "highlight":
          return createHighlightLetters();
        case "interactive":
          return createInteractiveLetters();
        case "basic":
        default:
          return Array.from({ length: 10 }, () => ({
            foreground: "text-green-300",
          }));
      }
    };

    const finalLetters = getLetters();

    return (
      <>
        <div
          class={`font-mono ${className}`}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: `clamp(${12 * size}px, ${3 * size}vw, ${24 * size}px)`,
            minHeight: "fit-content",
          }}
        >
          <div style={{ display: "inline-block" }}>
            {Array.from({ length: 6 }, (_, rowIndex) => (
              <div key={rowIndex} class="flex justify-center">
                {word.split("").map((letter, letterIndex) => {
                  const letterProps = finalLetters[letterIndex] || {};
                  const {
                    foreground = "text-green-300",
                    background = "bg-transparent",
                    className: letterClassName = "",
                    animation,
                  } = letterProps;

                  const letterRow =
                    letterData[letter as keyof typeof letterData][rowIndex] ||
                    "";

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
        </div>

        {/* CSS Animations for variants */}
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
  },
);
