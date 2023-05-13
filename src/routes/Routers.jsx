import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";

export const router = createBrowserRouter([{
    path: "/",
    element: <HomeLayout />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/menu', element: <Menu /> },
    ]

}]);