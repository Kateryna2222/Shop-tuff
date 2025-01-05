import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import Busket from "../pages/Busket";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/products/:id',
                element: <ProductPage/>
            },
            {
                path: `/categories/:name`,
                element: <CategoryPage/>
            },
            {
                path: `/busket`,
                element: <Busket/>
            },
        ]
    },
])

export default router;