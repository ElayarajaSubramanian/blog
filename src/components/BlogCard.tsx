import { Link } from "react-router";
import { formatDate } from "../utils/formatDate";

type BlogCardProps = {
    title: string;
    slug: string;
    excerpt: string;
    imageUrl: string;
    publishedAt: string;
}


const BlogCard = ({title, slug,excerpt, imageUrl, publishedAt}:BlogCardProps) => {
    const {day, month, year} = formatDate(publishedAt)
    return(
        <div className="p-3 grid grid-cols-(--my-grid-calls) gap-4 items-center justify-between bg-white">
            <div className="flex flex-col gap-3">
                <h1 className="text-blue-500 text-xl font-semibold">{title}</h1>
                <p className="text-base leading-7">{excerpt}</p>
                <Link to={`/blog/${slug}`} className="px-4 py-2 border rounded-lg border-blue-500 text-blue-500 w-fit hover:bg-blue-500 hover:text-white">Continue</Link>
            </div>
            <div className="flex gap-4">
                <img src={imageUrl} alt={title} className="w-36 h-36 object-cover p-1 border border-gray-200 rounded-sm"/>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">{day}</h1>
                    <h2 className="text-lg">{month.toUpperCase()}</h2>
                    <p>{year}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard