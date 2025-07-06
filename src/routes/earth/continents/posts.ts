export interface ImagePost {
  slug: string;
  title: string;
  description: string;
  date: string;
  continent: string;
  country: string;
  imageUrl?: string; // Optional: URL to the raw image
  imageAlt?: string; // Optional: Alt text for accessibility
  tags?: string[]; // Optional: For categorization
}

export const IMAGE_POSTS: Readonly<ImagePost[]> = [
  {
    slug: "sunset-over-mountains",
    title: "Sunset Over the Alps",
    description:
      "A breathtaking sunset view over the Swiss Alps captured during golden hour.",
    date: "2024-05-20",
    continent: "Europe",
    country: "Switzerland",
    imageUrl: "/images/sunset-alps.jpg",
    imageAlt: "Golden sunset over snow-capped mountain peaks",
    tags: ["mountains", "sunset", "nature", "landscape"],
  },
  {
    slug: "tokyo-street-scene",
    title: "Tokyo Street Scene",
    description:
      "Vibrant street life in the heart of Tokyo's Shibuya district.",
    date: "2024-05-18",
    continent: "Asia",
    country: "Japan",
    imageUrl: "/images/tokyo-street.jpg",
    imageAlt: "Busy Tokyo street with neon lights and people",
    tags: ["city", "urban", "japan", "street"],
  },
];
