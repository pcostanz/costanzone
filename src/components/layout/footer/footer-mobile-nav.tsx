import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { cn } from "@qwik-ui/utils";

interface NavItem {
  href: string;
  title: string;
  icon: string;
}

const navItems: NavItem[] = [
  { href: "/txt", title: "txt", icon: "📝" },
  { href: "/jpeg", title: "jpeg", icon: "🖼️" },
  { href: "/tsx", title: "tsx", icon: "⚛️" },
];

export const FooterMobileNav = component$(() => {
  const isOpen = useSignal(false);
  const location = useLocation();

  // Close menu when route changes
  useVisibleTask$(({ track }) => {
    track(() => location.url.pathname);
    isOpen.value = false;
  });

  const toggleMenu = $(() => {
    isOpen.value = !isOpen.value;
  });

  const isActive = (href: string) => {
    return location.url.pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Navigation - Shown on mobile, hidden on desktop */}
      <div class="block md:hidden">
        {/* Backdrop */}
        <div
          class={cn(
            "fixed inset-0 z-40 transition-all duration-300 ease-out",
            "bg-black/20 backdrop-blur-sm",
            isOpen.value
              ? "opacity-100 backdrop-blur-sm"
              : "opacity-0 backdrop-blur-none pointer-events-none",
          )}
          onClick$={() => {
            isOpen.value = false;
          }}
        />

        {/* Navigation Items */}
        <div class="fixed bottom-20 right-4 z-50 flex flex-col items-end gap-3">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              class={cn(
                "flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 ease-out",
                "bg-foreground text-background hover:scale-110 active:scale-95",
                isActive(item.href) && "ring-2 ring-background ring-offset-2",
                isOpen.value
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none",
                "transform-gpu",
              )}
              style={{
                transitionDelay: isOpen.value ? `${index * 100}ms` : "0ms",
              }}
              onClick$={() => {
                isOpen.value = false;
              }}
            >
              <span class="text-lg">{item.icon}</span>
              <span class="sr-only">{item.title}</span>
            </Link>
          ))}
        </div>

        {/* Main Button */}
        <button
          onClick$={() => {
            toggleMenu();
          }}
          class={cn(
            "fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full shadow-lg",
            "bg-foreground text-background hover:scale-105 active:scale-95",
            "transition-all duration-300 ease-out transform-gpu",
            "flex items-center justify-center",
          )}
          aria-label={isOpen.value ? "Close navigation" : "Open navigation"}
        >
          <div
            class={cn(
              "w-6 h-6 relative transition-transform duration-300",
              isOpen.value && "rotate-45",
            )}
          >
            <span
              class={cn(
                "absolute top-1/2 left-0 w-full h-0.5 bg-current transition-all duration-300",
                "transform -translate-y-1/2",
                isOpen.value && "rotate-90",
              )}
            />
            <span
              class={cn(
                "absolute top-1/2 left-0 w-full h-0.5 bg-current transition-all duration-300",
                "transform -translate-y-1/2",
                isOpen.value && "opacity-0",
              )}
            />
          </div>
        </button>
      </div>
    </>
  );
});
