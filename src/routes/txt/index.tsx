import type { DocumentHead } from "@builder.io/qwik-city";
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { POSTS } from "./(posts)/posts";

export default component$(() => {
  const navigate = useNavigate();

  useVisibleTask$(() => {
    // Redirect to the first post
    if (POSTS.length > 0) {
      navigate(`/txt/${POSTS[0].slug}`);
    }
  });

  return (
    <div class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h1 class="text-2xl mb-4">Redirecting...</h1>
        <p class="text-gray-500">Taking you to the latest post</p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: ".txt",
  meta: [
    {
      name: "costanzone",
      content: "get in the zone",
    },
  ],
};
