import React from "react";
import About from "../pages/User/About";
import BasketPage from "../pages/User/BasketPage";
import Contact from "../pages/User/Contact";
import Home from "../pages/User/Home";
import Keratin from "../pages/User/Keratin";
import Ozonio from "../pages/User/Keratin/Ozonio";
import Revive from "../pages/User/Keratin/Revive";
import KeratinDetailPage from "../pages/User/KeratinDetailPage";
import Konfidensial from "../pages/User/Konfidensial";
import Login from "../pages/User/Login";
import LoginRoot from "../pages/User/LoginRoot";
import Register from "../pages/User/Register";
import SacBoya from "../pages/User/SacBoya";
import SacQulluq from "../pages/User/SacQulluq";
import Balsamo from "../pages/User/SacQulluq/Balsamo";
import Botox from "../pages/User/SacQulluq/Botox";
import Kondisioner from "../pages/User/SacQulluq/Kondisioner";
import Maska from "../pages/User/SacQulluq/Maska";
import Shampoo from "../pages/User/SacQulluq/Shampo";
import SacQulluqDetail from "../pages/User/SacQulluqDetail";
import Suallar from "../pages/User/Suallar";
import Test from "../pages/User/Test";
import UserMainRoot from "../pages/User/UserMainRoot";
import Utuler from "../pages/User/Utuler";
import HavaFenleri from "../pages/User/HavaFenleri";

const addToCart = (product) => {

};

export const ROUTES = [
    {
        path: "",
        element: <UserMainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/keratin",
                element: <Keratin />
            },
            {
                path: '/keratin/:id',
                element: <KeratinDetailPage addToCart={addToCart} />
            },
            {
                path: "sacqulluq",
                element: <SacQulluq />
            },
            {
                path: "sacqulluq/:id",
                element: <SacQulluqDetail />
            },
            {
                path: "havafenleri",
                element: <HavaFenleri  />
            },
            {
                path: "utuler",
                element: <Utuler />
            },
            {
                path: "sacboya",
                element: <SacBoya />
            },
            // {
            //     path: "meiset",
            //     element: <HavaFenleri />
            // },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "konfidensial",
                element: <Konfidensial />
            },
            {
                path: 'basket',
                element: <BasketPage />
            },
            {
                path: 'suallar',
                element: <Suallar />
            },
            {
                path: 'ozonio',
                element: <Ozonio />
            },
            {
                path: 'revive',
                element: <Revive />
            },
            {
                path: 'shampoo',
                element: <Shampoo />
            },
            {
                path: 'balsamo',
                element: <Balsamo />
            },
            {
                path: 'maska',
                element: <Maska />
            },
            {
                path: 'kondisioner',
                element: <Kondisioner />
            },
            {
                path: 'botox',
                element: <Botox />
            },
            {
                path: 'test',
                element: <Test />
            },
        ]
    },
    {
        path: "/",
        element: <LoginRoot />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
]

