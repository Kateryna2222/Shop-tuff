import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import Busket from "../pages/Busket";
import Favourite from "../pages/Favourite";
import ProfilePage from "../pages/ProfilePage";
import { Context } from "../pages/Layout";
import { useContext } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
    const { isUser } = useSelector(state => state.user); 
    const [setIsOpen] = useContext(Context)
    
    if (!isUser) {
        setIsOpen(true)
        return <HomePage/>
    }

    return element; 
};

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
                path: `/categories/:id`,
                element: <CategoryPage/>
            },
            {
                path: `/busket`,
                element: <ProtectedRoute element={<Busket/>}/>
            },
            {
                path: `/favourite`,
                element: <ProtectedRoute element={<Favourite/>}/>
            },
            {
                path: `/profile`,
                element: <ProtectedRoute element={<ProfilePage/>}/>
            },
        ]
    },
])

export default router;