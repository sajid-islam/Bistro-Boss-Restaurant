import { Link, NavLink } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    const navLink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        <li><NavLink to={'/our-menu'}>Our Menu</NavLink></li>
        <li><NavLink to={'/our-shop/0'}>Our Shop</NavLink></li>

    </>
    return (
        <div className="navbar md:px-10 bg-black/30 fixed z-10 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="font-cinzel text-xs md:text-xl  font-bold">Bistro Boss <br /> <span className="md:text-[14px] tracking-[5px] text-xs">Restaurant</span></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="flex gap-4 font-medium px-1">
                    {navLink}
                </ul>
            </div>
            <div className="flex justify-end w-full md:w-auto md:ml-2">
                <Link to={'/login'} className="btn bg-[#111827] hover:bg-[#111827] text-[#BB8506]">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;