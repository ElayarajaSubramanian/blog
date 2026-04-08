import BlogCard from "../components/BlogCard"
import { useQuery } from "@tanstack/react-query"
import { fetchBlogs, fetchCategories } from "../services/blogService"
import type { Blog, Category } from "../types/blog"
import { Link, useParams, useNavigate } from "react-router"
import { useState } from "react"
import ProfilePic from "../assets/profile-pic.jpg"

const Home = () => {

    const {category} = useParams();
    const navigate = useNavigate();
    const [page, setPage] = useState(1)

    const selectedCategory = category || "all"

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["blogs", page],
        queryFn: () => fetchBlogs(0, page * 6),
    })

    const {data: categories} = useQuery<Category[]>({
        queryKey: ["categories"],
        queryFn: fetchCategories
    })

    const hasData = data?.length >= page * 6
    // const [selectedCategory, setSelectedCategory] = useState<string>("all")

    const filteredCategories = data?.filter((blog:Blog)=>{
        if(selectedCategory === "all") return true
        return blog.categories?.includes(selectedCategory)
    })

    if(isLoading) return <p>Loading...</p>
    if(isError) {
        console.error(error);
        return <p>Error Loading Blogs</p>
    }

    return(
        <div className="grid grid-cols-(--home-layout) gap-4">
            <div className="flex flex-col mb-6">
                <h1 className="py-2 w-full bg-blue-500 text-white text-center text-lg font-semibold">வகைகள்</h1>
                <div className="bg-white flex flex-col">
                    <button
                        onClick={() => navigate("/")}
                        className={`p-3 border-b border-b-gray-200 cursor-pointer hover:text-blue-500 ${selectedCategory === "all" ? "text-blue-500":""}`}>
                        All
                    </button>

                    {categories?.map((cat: any) => (
                        <button
                            key={cat.slug}
                            onClick={() => navigate(`/category/${cat.title}`)}
                            className={`p-3 not-last:border-b border-b-gray-200 cursor-pointer hover:text-blue-500 ${selectedCategory === cat.title ? "text-blue-500":""}`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {filteredCategories?.map((blog: Blog) => (
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
                {hasData && <div className="flex justify-center mt-8">
                    <button onClick={()=>setPage((prev)=> prev+1)} className="px-6 py-2px-4 py-2 border rounded-lg border-blue-500 text-blue-500 w-fit hover:bg-blue-500 hover:text-white mt-4 cursor-pointer">
                        Load More
                    </button>
                </div>}
            </div>
            <div className="flex flex-col bg-white ">
                <h1 className="py-2 w-full bg-blue-500 text-white text-center text-lg font-semibold">என்னைப் பற்றி</h1>
                <img src={ProfilePic} className="rounded-[50%] w-36 h-36 object-cover object-top mx-auto mt-6"/>
                <div className="p-6">
                    <h2 className="font-semibold mb-5">இளையராஜா சுப்ரமணியன்</h2>
                    <p className="leading-7 mb-8">திருச்சி மாவட்டம் துறையூர் தாலுக்காவில் பிறந்து பள்ளிப் படிப்பை துறையூரிலும் கல்லூரிப் படிப்பை திருச்சியிலும் முடித்திருக்கிறேன். கணிப்பொறி வல்லுனராக 14 ஆண்டு அனுபவம் இருந்தாலும் புத்தகங்கள் வாசிப்பதிலும் பல மொழிகளில் வெளியான நல்ல உலகத் திரைப்படங்களைப் பார்ப்பத்திலும் பெரும் ஆர்வம் கொண்டவன்.</p>
                    <Link to="/aboutme" className="px-4 py-2 border rounded-lg border-blue-500 text-blue-500 w-fit hover:bg-blue-500 hover:text-white">மேலும் படிக்க</Link>
                </div>
            </div>
        </div>
    )
}

export default Home