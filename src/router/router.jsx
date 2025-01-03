import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import ProductPage from "../pages/ProductPage";
import LoadingPage from "../pages/LoadingPage";

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
                path: '/product',
                element: <ProductPage/>
            },
            {
                path: '/lo',
                element: <LoadingPage/>
            }
        ]
    },
])

export default router;