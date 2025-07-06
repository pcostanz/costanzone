import { component$, type PropsOf } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import CostanzoneLogo from "~/components/CostanzoneLogo";
import { useMobile } from "~/hooks/useMobile";

type HeaderLogoProps = PropsOf<"div">;

export const HeaderLogo = component$<HeaderLogoProps>(() => {
  const { isMobile } = useMobile();

  return (
    <div class="text-md text-muted-foreground gap-2 flex items-end pt-1">
      <Link href="/">
        <CostanzoneLogo variant="glitch" size={isMobile ? 0.4 : 0.2} />
      </Link>
      <span
        class={
          isMobile
            ? "text-muted-foreground text-sm"
            : "text-muted-foreground text-xs"
        }
      >
        dev
      </span>
    </div>
  );
});
