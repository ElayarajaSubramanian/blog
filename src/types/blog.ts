export type Blog = {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    imageUrl: string;
    publishedAt: string;
    categories: string[];
    body: any;
}

export type Category = {
  title: string;
  slug: string;
};