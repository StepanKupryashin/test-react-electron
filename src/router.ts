import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import { TRouteLink } from "./types/common";
import Default from "./views/Default";
export const links: TRouteLink[] = [
   {
    path: "/",
    Component: Home,
    title: "Домашняя"
   },
   {
    path: "/about",
    Component: About,
    title: "О нас"
   }

];


const router = createBrowserRouter([
    {
        path: "/",
        Component: Default,
        children: links
    }
])

export default router;