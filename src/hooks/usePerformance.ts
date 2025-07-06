import { useSignal, useVisibleTask$, useTask$, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export interface PerformanceMetrics {
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  fcp: number | null; // First Contentful Paint
  ttfb: number | null; // Time to First Byte
  tti: number | null; // Time to Interactive
  loadTime: number | null; // Total page load time
  domContentLoaded: number | null; // DOM Content Loaded
  firstPaint: number | null; // First Paint
  firstContentfulPaint: number | null; // First Contentful Paint
}

export const usePerformance = () => {
  const metrics = useSignal<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    tti: null,
    loadTime: null,
    domContentLoaded: null,
    firstPaint: null,
    firstContentfulPaint: null,
  });

  const isLoaded = useSignal(false);
  const location = useLocation();

  const measurePerformance = $(() => {
    // Basic navigation timing
    if (typeof window !== "undefined" && "performance" in window) {
      const navigation = performance.getEntriesByType(
        "navigation",
      )[0] as PerformanceNavigationTiming;

      if (navigation) {
        metrics.value = {
          ...metrics.value,
          ttfb: navigation.responseStart - navigation.requestStart,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded:
            navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart,
        };
      }

      // Paint timing
      const paintEntries = performance.getEntriesByType("paint");
      paintEntries.forEach((entry) => {
        if (entry.name === "first-paint") {
          metrics.value.firstPaint = entry.startTime;
        }
        if (entry.name === "first-contentful-paint") {
          metrics.value.firstContentfulPaint = entry.startTime;
          metrics.value.fcp = entry.startTime;
        }
      });
    }

    // Mark as loaded after a short delay to allow metrics to populate
    setTimeout(() => {
      isLoaded.value = true;
    }, 1000);
  });

  // Set up Performance Observers once
  useVisibleTask$(() => {
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // Check for existing LCP entries first
      const existingLcpEntries = performance.getEntriesByType(
        "largest-contentful-paint",
      );
      if (existingLcpEntries.length > 0) {
        const lastEntry = existingLcpEntries[existingLcpEntries.length - 1];
        metrics.value.lcp = lastEntry.startTime;
      }

      // Check for existing CLS entries
      const existingClsEntries = performance.getEntriesByType("layout-shift");
      if (existingClsEntries.length > 0) {
        let clsValue = 0;
        existingClsEntries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metrics.value.cls = clsValue;
      }

      // LCP Observer
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.value.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch {
        console.warn("LCP observer not supported");
      }

      // FID
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === "first-input") {
              const firstInputEntry = entry as PerformanceEventTiming;
              metrics.value.fid =
                firstInputEntry.processingStart - firstInputEntry.startTime;
            }
          });
        });
        fidObserver.observe({ entryTypes: ["first-input"] });
      } catch {
        console.warn("FID observer not supported");
      }

      // CLS
      try {
        let clsValue = metrics.value.cls || 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              metrics.value.cls = clsValue;
            }
          });
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });
      } catch {
        console.warn("CLS observer not supported");
      }
    }

    // Initial measurement
    measurePerformance();

    // Check for LCP again after a delay (for page reloads)
    setTimeout(() => {
      const lcpEntries = performance.getEntriesByType(
        "largest-contentful-paint",
      );
      if (lcpEntries.length > 0 && !metrics.value.lcp) {
        const lastEntry = lcpEntries[lcpEntries.length - 1];
        metrics.value.lcp = lastEntry.startTime;
      }

      const clsEntries = performance.getEntriesByType("layout-shift");
      if (clsEntries.length > 0 && !metrics.value.cls) {
        let clsValue = 0;
        clsEntries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metrics.value.cls = clsValue;
      }
    }, 2000);
  });

  // Reset metrics when navigation occurs
  useTask$(({ track }) => {
    track(() => location.url.pathname);

    // Reset metrics for new page
    metrics.value = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      tti: null,
      loadTime: null,
      domContentLoaded: null,
      firstPaint: null,
      firstContentfulPaint: null,
    };
    isLoaded.value = false;

    // Start measuring new page performance
    measurePerformance();
  });

  const getPerformanceScore = () => {
    const { lcp, fid, cls } = metrics.value;
    let score = 100;

    // LCP scoring (0-2500ms is good, 2500-4000ms needs improvement, >4000ms is poor)
    if (lcp !== null) {
      if (lcp > 4000) score -= 30;
      else if (lcp > 2500) score -= 15;
    }

    // FID scoring (0-100ms is good, 100-300ms needs improvement, >300ms is poor)
    if (fid !== null) {
      if (fid > 300) score -= 30;
      else if (fid > 100) score -= 15;
    }

    // CLS scoring (0-0.1 is good, 0.1-0.25 needs improvement, >0.25 is poor)
    if (cls !== null) {
      if (cls > 0.25) score -= 30;
      else if (cls > 0.1) score -= 15;
    }

    return Math.max(0, score);
  };

  const getPerformanceGrade = () => {
    const score = getPerformanceScore();
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  };

  const formatMetric = (value: number | null, unit: string = "ms") => {
    if (value === null) return "—";
    if (unit === "ms") {
      return value < 1000
        ? `${Math.round(value)}ms`
        : `${(value / 1000).toFixed(1)}s`;
    }
    return `${value.toFixed(2)}${unit}`;
  };

  return {
    metrics,
    isLoaded,
    getPerformanceScore,
    getPerformanceGrade,
    formatMetric,
  };
};
