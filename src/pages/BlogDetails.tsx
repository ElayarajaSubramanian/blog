import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogBySlug } from "../services/blogService";
import { PortableText } from "@portabletext/react";
import type { Blog } from "../types/blog";

const BlogDetails = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useQuery<Blog | null>({
    queryKey: ["blog", slug],
    queryFn: () => fetchBlogBySlug(slug!),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading blog</p>;
  if(!data) return <p>No data found</p>

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      {data.categories?.map((cat)=>(
        <span key={cat} className="text-xs bg-gray-200 py-1 px-2 rounded-xs mr-4">{cat}</span>
      ))}
      <h1 className="text-3xl font-bold my-4">{data.title}</h1>
      <img className="w-4/6 md:w-2/6 rounded-sm p-1 mx-auto my-4 border border-gray-300" src={data?.imageUrl} alt={data.title} />
      <div className="prose leading-7">
        <PortableText value={data.body} />
      </div>
    </div>
  );
};

export default BlogDetails;