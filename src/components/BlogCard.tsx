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
                <h1 className="text-blue-500 text-lg font-semibold">{title}</h1>
                <p className="text-base leading-7">{excerpt}</p>
                <Link to={`/blog/${slug}`} className="px-4 py-2 border rounded-lg border-blue-500 text-blue-500 w-fit hover:bg-blue-500 hover:text-white mt-4">Continue</Link>
            </div>
            <div className="flex gap-4">
                <img src={imageUrl} alt={title} className="w-36 h-36 object-cover p-1 border border-gray-200 rounded-sm"/>
                <div className="flex flex-col gap-1 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>
                    <h1 className="text-4xl font-semibold border-b border-b-gray-500">{day}</h1>
                    <h2 className="text-lg">{month.toUpperCase()}</h2>
                    <p>{year}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard