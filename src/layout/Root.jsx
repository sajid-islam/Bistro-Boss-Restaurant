import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from 'react-hot-toast';


const Root = () => {
    const {pathname} = useLocation()
    return (
        <div>
            {
                pathname === '/login' || pathname === '/register' ? '':<Navbar/>
            }
            <Outlet/>
            {
                pathname === '/login' || pathname === '/register' ? '':<Footer/>
            }
            <Toaster/>
        </div>
    );
};

export default Root;