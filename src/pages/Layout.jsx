import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

const Layout = () => {
    return (
        <>
            <div className="container">
                <Header/>
                <main>
                    <div className="top">
                        <Aside/>
                    </div>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default Layout;