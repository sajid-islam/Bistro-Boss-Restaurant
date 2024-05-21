import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
    const {pathname} = useLocation()
    return (
        <div>
            {
                pathname === '/login' || pathname === '/register' ? '':<Navbar/>
            }
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;