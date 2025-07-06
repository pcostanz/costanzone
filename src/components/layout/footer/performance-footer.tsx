import { component$, useSignal } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { usePerformance } from "~/hooks/usePerformance";

export const PerformanceFooter = component$(() => {
  const {
    metrics,
    isLoaded,
    getPerformanceScore,
    getPerformanceGrade,
    formatMetric,
  } = usePerformance();
  const isExpanded = useSignal(false);

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 80) return "text-yellow-500";
    if (score >= 70) return "text-orange-500";
    return "text-red-500";
  };

  const getMetricColor = (
    value: number | null,
    thresholds: { good: number; poor: number },
  ) => {
    if (value === null) return "text-muted-foreground";
    if (value <= thresholds.good) return "text-green-500";
    if (value <= thresholds.poor) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <footer class="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-t border-border">
      <div class="max-w-7xl mx-auto px-4 py-2">
        <div class="flex items-center justify-between text-xs text-muted-foreground">
          {/* Performance Score */}
          <div class="flex items-center gap-2">
            <span class="font-mono">Performance:</span>
            {isLoaded.value ? (
              <span
                class={cn("font-bold", getScoreColor(getPerformanceScore()))}
              >
                {getPerformanceGrade()} ({getPerformanceScore()})
              </span>
            ) : (
              <div class="flex items-center gap-1">
                <span class="animate-pulse text-blue-500">Measuring...</span>
                <div class="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>

          {/* Key Metrics */}
          <div class="hidden sm:flex items-center gap-4">
            <div class="flex items-center gap-1">
              <span>LCP:</span>
              <span
                class={cn(
                  "font-mono",
                  getMetricColor(metrics.value.lcp, { good: 2500, poor: 4000 }),
                )}
              >
                {formatMetric(metrics.value.lcp)}
              </span>
            </div>
            <div class="flex items-center gap-1">
              <span>FID:</span>
              <span
                class={cn(
                  "font-mono",
                  getMetricColor(metrics.value.fid, { good: 100, poor: 300 }),
                )}
              >
                {formatMetric(metrics.value.fid)}
              </span>
            </div>
            <div class="flex items-center gap-1">
              <span>CLS:</span>
              <span
                class={cn(
                  "font-mono",
                  getMetricColor(metrics.value.cls, { good: 0.1, poor: 0.25 }),
                )}
              >
                {formatMetric(metrics.value.cls, "")}
              </span>
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <button
            onClick$={() => {
              isExpanded.value = !isExpanded.value;
            }}
            class="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={
              isExpanded.value
                ? "Hide performance details"
                : "Show performance details"
            }
          >
            <svg
              class={cn(
                "w-4 h-4 transition-transform duration-200",
                isExpanded.value && "rotate-180",
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Expanded Details */}
        {isExpanded.value && (
          <div class="mt-2 pt-2 border-t border-border">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div>
                <div class="font-medium text-muted-foreground">
                  First Contentful Paint
                </div>
                <div class="font-mono">{formatMetric(metrics.value.fcp)}</div>
              </div>
              <div>
                <div class="font-medium text-muted-foreground">
                  Time to First Byte
                </div>
                <div class="font-mono">{formatMetric(metrics.value.ttfb)}</div>
              </div>
              <div>
                <div class="font-medium text-muted-foreground">Load Time</div>
                <div class="font-mono">
                  {formatMetric(metrics.value.loadTime)}
                </div>
              </div>
              <div>
                <div class="font-medium text-muted-foreground">DOM Ready</div>
                <div class="font-mono">
                  {formatMetric(metrics.value.domContentLoaded)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
});
