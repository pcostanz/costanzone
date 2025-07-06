import { component$ } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { getImageBySlug } from "../data";

export default component$(() => {
  const location = useLocation();
  const slug = location.params.slug;
  const image = getImageBySlug(slug);

  if (!image) {
    return (
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-2xl font-bold mb-4">Image not found</h1>
        <p>The image with slug "{slug}" could not be found.</p>
      </div>
    );
  }

  return (
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <header class="mb-8">
          <h1 class="text-4xl font-bold mb-2">{image.title}</h1>
          <div class="text-gray-600 mb-4">
            <span>{image.continent}</span>
            {image.country !== "Unknown" && (
              <>
                <span class="mx-2">•</span>
                <span>{image.country}</span>
              </>
            )}
            <span class="mx-2">•</span>
            <span>{new Date(image.date).toLocaleDateString()}</span>
          </div>
          <p class="text-lg text-gray-700">{image.description}</p>
        </header>

        <div class="mb-8">
          <img
            src={image.imagePath}
            alt={image.title}
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {image.tags && image.tags.length > 0 && (
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-2">Tags</h3>
            <div class="flex flex-wrap gap-2">
              {image.tags.map((tag) => (
                <span
                  key={tag}
                  class="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div class="text-sm text-gray-500">
          <p>Slug: {image.slug}</p>
          <p>Image path: {image.imagePath}</p>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = ({ params }) => {
  const image = getImageBySlug(params.slug);

  return {
    title: image ? `${image.title} - Earth Images` : "Image not found",
    meta: [
      {
        name: "description",
        content: image?.description || "Earth image not found",
      },
    ],
  };
};
