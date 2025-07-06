export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export const POSTS: Readonly<Post[]> = [
  {
    slug: "qwik-from-react",
    title: "Qwik from React",
    description:
      "Learn how to create a blog website using the Qwik frontend framework.",
    date: "2024-05-20",
  },
];
