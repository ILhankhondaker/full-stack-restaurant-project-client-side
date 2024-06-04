import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Menu from "../Pages/Menu/Menu";
import Contact from "../Pages/Contact/Contact";


export const router = createBrowserRouter([


    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/about',
                element: <About></About>

            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: "menu",
                element: <Menu> </Menu>
            }
        ]
    },
]);


