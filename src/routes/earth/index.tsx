import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { getAllImages } from "./data";

export default component$(() => {
  const images = getAllImages();
  // const continents = getImagesByContinent();

  return (
    <div class="container mx-auto w-full">
      {images.length === 0 ? (
        <div class="text-center">
          <p class="text-gray-500">
            No images found. Add some images to get started!
          </p>
        </div>
      ) : (
        <div class="">
          {/* Gallery View */}
          <section>
            <div class="flex flex-wrap gap-4">
              {images.map((image) => (
                <Link
                  key={image.slug}
                  href={`/earth/${image.slug}`}
                  class="group block rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div class="aspect-w-16 aspect-h-9">
                    <img
                      src={image.imagePath}
                      alt={image.title}
                      class="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div class="p-4">
                    <div class="flex items-center text-xs text-gray-500">
                      <span>{image.continent}</span>
                      {image.country !== "Unknown" && (
                        <>
                          <span class="mx-1">•</span>
                          <span>{image.country}</span>
                        </>
                      )}
                      <span class="mx-1">•</span>
                      <span>{new Date(image.date).toLocaleDateString()}</span>
                    </div>
                  </div> */}
                </Link>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Earth Images - costanzone",
  meta: [
    {
      name: "description",
      content:
        "Exploring Google Earth to find art in topography. A collection of aerial views and topographic patterns.",
    },
  ],
};
