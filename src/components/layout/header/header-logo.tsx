import { component$, type PropsOf } from "@builder.io/qwik";
import { HeaderNavLink } from "./header-navlink";

type HeaderLogoProps = PropsOf<"div">;

export const HeaderLogo = component$<HeaderLogoProps>(() => {
  return (
    <div class="text-md text-muted-foreground gap-2 flex items-end">
      <HeaderNavLink href="/" title="costanzone" />
      <span class="text-muted-foreground text-xs">dev</span>
    </div>
  );
});
