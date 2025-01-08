import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useDispatch } from "react-redux";
import { createContext, useEffect, useState } from "react";

import { getCategories } from "../store/categoriesSlice";
import { getProducts } from "../store/productsSlice";

export const Context = createContext();

const Layout = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCategories())
        dispatch(getProducts())
    }, [dispatch])


    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <Context.Provider value={[isOpen, setIsOpen]}>
                <div className="container">
                    <Header/>
                    <main>
                        <Outlet/>
                    </main>
                    <Footer/>
                </div>
            </Context.Provider>
        </>
    );
};

export default Layout;