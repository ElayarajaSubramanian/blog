import { createBrowserRouter } from "react-router"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import BlogDetails from "../pages/BlogDetails"
import AboutMe from "../pages/AboutMe"

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "blog/:slug",
                Component: BlogDetails 
            },
            {
                path:"/aboutme",
                Component: AboutMe
            }
        ]
    }
])