import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Loading from "../Loading/loading";
import About from "../pages/User/About";
import BasketPage from "../pages/User/BasketPage";
import Contact from "../pages/User/Contact";
import HavaFenleri from "../pages/User/HavaFenleri";
import Home from "../pages/User/Home";
import Keratin from "../pages/User/Keratin";
import KeratinDetailPage from "../pages/User/KeratinDetailPage";
import Konfidensial from "../pages/User/Konfidensial";
import Login from "../pages/User/Login";
import LoginRoot from "../pages/User/LoginRoot";
import Register from "../pages/User/Register";
import SacQulluq from "../pages/User/SacQulluq";
import SacQulluqDetail from "../pages/User/SacQulluqDetail";
import Setler from "../pages/User/Setler";
import Suallar from "../pages/User/Suallar";
import UserMainRoot from "../pages/User/UserMainRoot";
import Utuler from "../pages/User/Utuler";
import PulsuzCatdırılma from "../pages/User/Home/WhyUs/PulsuzCatdırılma";
import Qapıda from "../pages/User/Home/WhyUs/Qapıda";
import Qızıl from "../pages/User/Home/WhyUs/Qızıl";
import Zemanet from "../pages/User/Home/WhyUs/Zemanet";

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
                path: "fenler",
                element: <HavaFenleri />
            },
            {
                path: "utuler",
                element: <Utuler />
            },
            {
                path: "setler",
                element: <Setler />
            },
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
                element: <Suallar/>
            },
            {
                path: 'catdirilma',
                element: <PulsuzCatdırılma />
            },
            {
                path: 'qapıda',
                element: <Qapıda />
            },
            {
                path: 'qızılzemanet',
                element: <Qızıl />
            },
            {
                path: 'zemanet',
                element: <Zemanet />
            }
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


const RouteComponents = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulated loading time, replace this with actual loading logic
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Example duration, replace with the actual loading duration

        return () => clearTimeout(timeout);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            {ROUTES.map((route, index) => (
                <React.Fragment key={index}>
                    {route.children.map((childRoute, childIndex) => (
                        <React.Fragment key={childIndex}>
                            {/* Her bir sayfa bileşeninin yüklendiği yer */}
                            <Route path={childRoute.path} element={childRoute.element} />
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </>
    );
};

export default RouteComponents;