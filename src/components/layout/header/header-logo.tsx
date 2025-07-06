import { component$, type PropsOf } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import CostanzoneLogo from "~/components/CostanzoneLogo";

type HeaderLogoProps = PropsOf<"div">;

export const HeaderLogo = component$<HeaderLogoProps>(() => {
  return (
    <div class="text-md text-muted-foreground gap-2 flex items-end pt-1">
      <Link href="/">
        <CostanzoneLogo variant="glitch" size={0.3} />
      </Link>
      <span class="text-muted-foreground text-xs">dev</span>
    </div>
  );
});
