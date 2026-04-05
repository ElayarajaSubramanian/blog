import { Link, Outlet } from "react-router"

const MainLayout = () => {
    return(
        <div className="max-w-full mx-auto">
            <header className="flex flex-col gap-2 py-8 max-w-5/6 mx-auto text-center">
                <Link to="/" className="text-4xl text-blue-500 font-bold">
                    இது என் பக்கம்
                </Link>
                <span className="text-xs text-black font-semibold">எண்ணங்கள் அனைத்தும் எழுத்துக்களாக </span> 
            </header>
            <nav className="bg-blue-500 py-4 sticky top-0">
                <ul className="flex gap-4 justify-center items-center text-white">
                    <li><Link to="/">முதல் பக்கம்</Link></li>
                    <li><Link to="/aboutme">என்னைப் பற்றி</Link></li>
                    <li><Link to="#">சிறுகதைகள்</Link></li>
                    <li><Link to="#">தொடர்கள்</Link></li>
                    <li><Link to="#">சினிமா</Link></li>
                    <li><Link to="#">இலக்கியம்</Link></li>
                </ul>
            </nav>
            <main className="max-w-3/6 mx-auto py-4">
                <Outlet/>
            </main>
        </div>
    )
}

export default MainLayout