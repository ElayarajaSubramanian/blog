import BlogCard from "../components/BlogCard"
import { useQuery } from "@tanstack/react-query"
import { fetchBlogs } from "../services/blogService"
import type { Blog } from "../types/blog"
import { Link } from "react-router"

const Home = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["blogs"],
        queryFn: fetchBlogs,
    })
    if(isLoading) return <p>Loading...</p>
    if(isError) {
        console.error(error);
        return <p>Error Loading Blogs</p>
    }

    return(
        <div className="flex flex-col gap-4">
            {data?.map((blog: Blog) => (
                <Link to={`blog/${blog.slug}`}>
                    <BlogCard
                        key={blog._id}
                        title={blog.title}
                        excerpt={blog.excerpt}
                        slug={blog.slug}
                        imageUrl={blog.imageUrl}
                        publishedAt={blog.publishedAt}
                    />
                </Link>
            ))}
        </div>
    )
}

export default Home