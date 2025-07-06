import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { getAllImages } from "./data";

export default component$(() => {
  const images = getAllImages();
  // const continents = getImagesByContinent();

  return (
    <div class="container mx-auto px-4 py-8">
      {images.length === 0 ? (
        <div class="text-center py-12">
          <p class="text-gray-500">
            No images found. Add some images to get started!
          </p>
        </div>
      ) : (
        <div class="space-y-12">
          {/* Gallery View */}
          <section>
            <div class="grid grid-cols-1 gap-6">
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
                  <div class="p-4">
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
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Organized by Continent */}
          {/* <section>
            <h2 class="text-2xl font-bold mb-6">By Continent</h2>
            <div class="space-y-8">
              {continents.map((continent) => (
                <div key={continent.name}>
                  <h3 class="text-xl font-semibold mb-4">{continent.name}</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {continent.countries.map((country) =>
                      country.images.map((image) => (
                        <Link
                          key={image.slug}
                          href={`/earth/${image.slug}`}
                          class="group block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <div class="aspect-w-16 aspect-h-9 bg-gray-200">
                            <img
                              src={image.imagePath}
                              alt={image.title}
                              class="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div class="p-3">
                            <h4 class="font-medium text-sm mb-1 group-hover:text-blue-600 transition-colors">
                              {image.title}
                            </h4>
                            <p class="text-xs text-gray-500">
                              {country.name !== "Unknown"
                                ? country.name
                                : continent.name}
                            </p>
                          </div>
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      )}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Earth Images - The Costanzone",
  meta: [
    {
      name: "description",
      content:
        "Exploring Google Earth to find art in topography. A collection of aerial views and topographic patterns.",
    },
  ],
};
