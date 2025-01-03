import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Layout = () => {
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