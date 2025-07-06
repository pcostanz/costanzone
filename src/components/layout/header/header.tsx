import { component$, type PropsOf } from "@builder.io/qwik";
import { HeaderLogo } from "./header-logo";
import { HeaderNavLink } from "./header-navlink";
// import { useMobile } from "~/hooks/useMobile";

type HeaderProps = PropsOf<"header">;

export const Header = component$<HeaderProps>(() => {
  // const { isMobile } = useMobile();

  return (
    <header
      class={[
        "fixed top-0 left-0 right-0 z-50 font-medium bg-foreground text-background",
        "pl-4 pr-2 py-2 md:pl-4 md:pr-2 md:py-2 px-4",
      ].join(" ")}
    >
      {/* Desktop Navigation */}
      <div class="hidden md:flex items-center justify-between">
        <div class="flex items-center">
          <HeaderNavLink href="/txt" title="txt" />
          <HeaderNavLink href="/jpeg" title="jpeg" />
          <HeaderNavLink href="/tsx" title="tsx" />
        </div>
        <HeaderLogo />
      </div>

      {/* Mobile Navigation */}
      <div class="md:hidden relative w-full h-full flex items-center justify-center">
        <HeaderLogo />
      </div>
    </header>
  );
});
