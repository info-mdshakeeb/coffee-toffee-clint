import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Menu from "../pages/menu/Menu";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([{
    path: "/",
    element: <HomeLayout />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/menu', element: <PrivateRoute><Menu /></PrivateRoute> },
    ]
},
{ path: '/user/login', element: <Login /> },
{ path: '/user/register', element: <Register /> },
]);