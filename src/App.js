import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/ResturantMenu";
import Profile from "./components/Profile";
import RestaurantsCardsdata from "./utils/RestaurantsCardsdata";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./ReduxStore/appStore";
import Cart from "./components/Cart";
import Qr from "./components/Qr";
import OrderPickedup from "./components/OrderPickedup";
import Shimmer from "./components/Shimmer";
import MenuShimmer from "./components/MenuShimmer";

const AppLayout = () => {

    const [name, setName] = useState();

    useEffect(() => {
        const data = {
            name: "Rakesh"
        }
        setName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loginUser: name }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/restaurants/:restId",
                element: <RestaurantMenu />
            },
            {
                path: "/example",
                element: <RestaurantsCardsdata />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/qr",
                element: <Qr />
            },
            {
                path: "/orderpickedup",
                element: <OrderPickedup />
            },
            {
                path: "/menushimmer",
                element: <MenuShimmer />
            },
            {
                path: "/shimmer",
                element: <Shimmer />
            },
        ],
        errorElement: <ErrorPage />
    }
]);


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);