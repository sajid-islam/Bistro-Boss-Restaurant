import { Link, NavLink } from "react-router-dom";
import useAuth from './../../hooks/useAuth';
import { toast } from 'react-hot-toast';
import { TiShoppingCart } from "react-icons/ti";
import useItemCart from "../../hooks/useItemCart";
import './navbar.css'
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
    const { user, logout } = useAuth()
    const { isAdmin } = useAdmin()
    const { cartItem } = useItemCart()
    const navLink = <>
        <li><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
        <li><NavLink className="nav-link" to={'/contact-us'}>Contact Us</NavLink></li>
        {
            user && isAdmin && <li><NavLink className="nav-link" to={'/dashboard/adminHome'}>Dashboard</NavLink></li>
        }
        {
            user && !isAdmin && <li><NavLink className="nav-link" to={'/dashboard/userHome'}>Dashboard</NavLink></li>

        }
        <li><NavLink className="nav-link" to={'/ourMenu'}>Our Menu</NavLink></li>
        <li><NavLink className="nav-link" to={'/ourShop/0'}>Our Shop</NavLink></li>
        <li><NavLink className="nav-link" to={'/dashboard/cart'}>
            <button className="flex">
                <TiShoppingCart size={30} />
                <div className="relative right-3 bottom-2 bg-[#BB8506] rounded-full text-xs p-1">{cartItem.length}</div>
            </button>
        </NavLink></li>

    </>

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Logout Successfully')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }
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
                <ul className="flex font-medium px-1">
                    {navLink}
                </ul>
            </div>
            <div className="flex justify-end w-full md:w-auto md:ml-2">
                {
                    user ?
                        <div className="flex gap-5 items-center">
                            <Link onClick={handleLogout}
                                className="btn bg-[#111827] hover:bg-[#111827] text-[#BB8506] border-0">
                                Logout
                            </Link>
                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full ring ring-[#BB8506] ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                        </div> :
                        <Link to={'/login'}
                            className="btn bg-[#111827] hover:bg-[#111827] text-[#BB8506] border-0">
                            Login
                        </Link>


                }
            </div>
        </div>
    );
};

export default Navbar;