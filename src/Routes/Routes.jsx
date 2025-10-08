import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";
import ProductDetails from "../Pages/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('./furnitureData.json'),
                element: <Home></Home>,
            },
            {
                path: "/products",
                element: <Products></Products>,
            },
            {
                path: "/wishlist",
                element: <WishList></WishList>,
            },
            {
                path: "/products/:id",
                Component: ProductDetails
            }
        ]
    },
]);