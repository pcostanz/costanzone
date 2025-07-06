export interface EarthImage {
  slug: string;
  title: string;
  description: string;
  date: string;
  continent: string;
  country: string;
  imagePath: string; // Path relative to the media folder
  tags?: string[];
}

export interface ContinentData {
  name: string;
  countries: CountryData[];
}

export interface CountryData {
  name: string;
  images: EarthImage[];
}
