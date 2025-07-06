import { useSignal, useVisibleTask$ } from "@builder.io/qwik";

export const useMobile = () => {
  const isMobile = useSignal(false);

  useVisibleTask$(() => {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      // Define mobile breakpoint (you can adjust this as needed)
      const mobileQuery = window.matchMedia("(max-width: 768px)");

      // Set initial value
      isMobile.value = mobileQuery.matches;

      // Listen for changes
      const handleResize = (e: MediaQueryListEvent) => {
        isMobile.value = e.matches;
      };

      mobileQuery.addEventListener("change", handleResize);

      // Cleanup function
      return () => {
        mobileQuery.removeEventListener("change", handleResize);
      };
    }
  });

  return {
    isMobile: isMobile.value,
    isMobileSignal: isMobile,
  };
};
