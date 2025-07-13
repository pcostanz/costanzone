import { component$, type PropsOf } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { cn } from "@qwik-ui/utils";
import { useMobile } from "~/hooks/useMobile";

type NavLinkProps = PropsOf<"a"> & {
  href: string;
  activeClass?: string;
  inactiveClass?: string;
  exact?: boolean;
  title: string;
};

export const HeaderNavLink = component$<NavLinkProps>(
  ({
    href,
    activeClass = "text-foreground bg-background font-semibold",
    inactiveClass = "text-background transition-colors",
    exact = false,
    class: className,
    title,
    ...props
  }) => {
    const location = useLocation();
    const { isMobile } = useMobile();

    const isActive = exact
      ? location.url.pathname === href
      : location.url.pathname.startsWith(href);

    const responsiveClasses = isMobile
      ? "px-4 py-2 text-base"
      : "px-2 py-0 text-sm";

    return (
      <Link
        href={href}
        class={cn(
          "inline-flex items-center font-medium transition-colors hover:text-foreground hover:bg-background",
          responsiveClasses,
          isActive ? activeClass : inactiveClass,
          className,
        )}
        {...props}
      >
        {title}
      </Link>
    );
  },
);
