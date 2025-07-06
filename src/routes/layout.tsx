import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Header } from "~/components/layout/header/header";
import { FooterMobileNav } from "~/components/layout/footer/footer-mobile-nav";
// import { useMobile } from "~/hooks/useMobile";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="min-h-screen overflow-y-auto">
      <Header />
      <main class="pt-20 md:pt-20">
        <Slot />
      </main>
      <FooterMobileNav />
      {/* <Footer /> */}
    </div>
  );
});
