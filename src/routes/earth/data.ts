import type { EarthImage, ContinentData } from "~/types/earth";

export const EARTH_IMAGES: EarthImage[] = [
  {
    slug: "coal",
    title: "Coal",
    description:
      "A striking aerial view of coal formations or mining operations captured from Google Earth, revealing the intersection of natural resources and human activity.",
    date: "2024-12-19",
    continent: "Africa",
    country: "Unknown", // You can update this when you know the specific country
    imagePath: "/images/earth/coal.jpg",
    tags: ["coal", "mining", "aerial", "topography", "resources"],
  },
];

// Helper function to get images by continent
export function getImagesByContinent(): ContinentData[] {
  const continentMap = new Map<string, EarthImage[]>();

  EARTH_IMAGES.forEach((image) => {
    if (!continentMap.has(image.continent)) {
      continentMap.set(image.continent, []);
    }
    continentMap.get(image.continent)!.push(image);
  });

  return Array.from(continentMap.entries()).map(([continent, images]) => {
    const countryMap = new Map<string, EarthImage[]>();

    images.forEach((image) => {
      if (!countryMap.has(image.country)) {
        countryMap.set(image.country, []);
      }
      countryMap.get(image.country)!.push(image);
    });

    return {
      name: continent,
      countries: Array.from(countryMap.entries()).map(
        ([country, countryImages]) => ({
          name: country,
          images: countryImages,
        }),
      ),
    };
  });
}

// Helper function to get image by slug
export function getImageBySlug(slug: string): EarthImage | undefined {
  return EARTH_IMAGES.find((image) => image.slug === slug);
}

// Helper function to get all images
export function getAllImages(): EarthImage[] {
  return EARTH_IMAGES;
}
