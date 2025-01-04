import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getCategories } from "../store/categoriesSlice";
import { getProducts } from "../store/productsSlice";

const Layout = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCategories())
        dispatch(getProducts())
    }, [dispatch])


    return (
        <>
            <div className="container">
                <Header/>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default Layout;