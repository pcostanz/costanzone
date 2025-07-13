import { component$, type PropsOf } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { HeaderLogo } from "./header-logo";
import { HeaderNavLink } from "./header-navlink";
// import { useMobile } from "~/hooks/useMobile";

type HeaderProps = PropsOf<"header">;

export const Header = component$<HeaderProps>((props) => {
  // const { isMobile } = useMobile();

  return (
    <header
      {...props}
      class={cn(
        "fixed top-0 left-0 right-0 z-50 font-medium bg-foreground text-background",
        "px-4 py-2",
        props.class,
      )}
    >
      <div class="hidden md:flex items-center justify-between">
        <div class="flex items-center gap-2">
          <HeaderNavLink exact href="/" title="home" />
          <HeaderNavLink href="/txt" title="notes" />
          {/* <HeaderNavLink href="/img" title="photos" />
          <HeaderNavLink href="/earth" title="earth" /> */}
          <HeaderNavLink href="/code" title="code" />
        </div>
        <HeaderLogo />
      </div>

      <div class="md:hidden relative w-full h-full flex items-center justify-center">
        <HeaderLogo />
      </div>
    </header>
  );
});
