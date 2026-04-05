import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogBySlug } from "../services/blogService";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../services/imageBuilder";

const BlogDetails = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => fetchBlogBySlug(slug!),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading blog</p>;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <img className="w-2/6 rounded-sm p-1 mx-auto my-4 border border-gray-300" src={urlFor(data.imageUrl).url()} alt={data.title} />
      <div className="prose leading-7">
        <PortableText value={data.body} />
      </div>
    </div>
  );
};

export default BlogDetails;