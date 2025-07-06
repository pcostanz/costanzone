import { component$, type PropsOf } from "@builder.io/qwik";
import { HeaderLogo } from "./header-logo";
import { HeaderNavLink } from "./header-navlink";

type HeaderProps = PropsOf<"header">;

export const Header = component$<HeaderProps>(() => {
  return (
    <header class="fixed top-0 left-0 right-0 z-50 font-medium pl-4 pr-2 bg-foreground text-background">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <HeaderNavLink href="/txt" title="txt" />
          <HeaderNavLink href="/jpeg" title="jpeg" />
          <HeaderNavLink href="/tsx" title="tsx" />
        </div>
        <HeaderLogo />
      </div>
    </header>
  );
});
