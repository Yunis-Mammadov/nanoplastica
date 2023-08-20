import About from "../pages/User/About";
import Aletler from "../pages/User/Aletler";
import Contact from "../pages/User/Contact";
import Home from "../pages/User/Home";
import Keratin from "../pages/User/Keratin";
import SacQulluq from "../pages/User/SacQulluq";
import Setler from "../pages/User/Setler";
import UserMainRoot from "../pages/User/UserMainRoot";

export const ROUTES = [
    {
        path: "/",
        element: <UserMainRoot/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "keratin",
                element: <Keratin/>
            },
            {
                path: "sacqulluq",
                element: <SacQulluq/>
            },
            {
                path: "aletler",
                element: <Aletler/>
            },
            {
                path: "haqqimizda",
                element: <About/>
            },
            {
                path: "elaqe",
                element: <Contact/>
            },
            {
                path: "setler",
                element: <Setler/>
            }
        ]
    }
]