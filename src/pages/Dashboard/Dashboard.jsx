import { NavLink, Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaBook, FaCalendarAlt, FaList } from "react-icons/fa";
import { IoIosWallet } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";
import "../Dashboard/dashboard.css";
import { Toaster } from "react-hot-toast";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    const { isAdmin } = useAdmin();

    return (
        <div className="lg:flex ">
            <div>
                <div className="drawer lg:drawer-open z-10">
                    <input
                        id="my-drawer-2"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content flex flex-col items-start bg-[#0088fe] p-5 lg:hidden">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="drawer-button ">
                            <IoMenu size={30}></IoMenu>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="my-drawer-2"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className=" p-4 w-80 min-h-full bg-[#0088fe] text-[#151515] font-semibold ">
                            {/* Logo */}
                            <p className="font-cinzel text-xs md:text-xl  font-extrabold mb-5">
                                Bistro Boss <br />{" "}
                                <span className="md:text-[14px] tracking-[5px] text-xs ">
                                    Restaurant
                                </span>
                            </p>

                            {/* Sidebar content here */}
                            {isAdmin ? (
                                // Admin content
                                <>
                                    <li>
                                        <NavLink to="/dashboard/adminHome">
                                            <IoHome size={20} />
                                            Admin Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addItem">
                                            <GiForkKnifeSpoon size={20} />
                                            Add Items
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageItems">
                                            <FaList size={20} />
                                            Manage Items
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageBookings">
                                            <FaBook size={20} />
                                            Manage Bookings
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/allUsers">
                                            <HiUserGroup size={20} />
                                            All users
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                //Regular user content
                                <>
                                    <li>
                                        <NavLink to="/dashboard/userHome">
                                            <IoHome size={20} />
                                            User Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/payment">
                                            <FaCalendarAlt size={20} />
                                            Reservation
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/paymentHistory">
                                            <IoIosWallet size={20} />
                                            Payment History
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/cart">
                                            <FaShoppingCart size={20} />
                                            My Cart
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/reservation">
                                            <FaStarHalfStroke size={20} />
                                            Add Review
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/reservation">
                                            <FaCalendarCheck size={20} />
                                            My Booking
                                        </NavLink>
                                    </li>
                                </>
                            )}

                            {/* Common content */}
                            <hr className="my-5 border-gray-400" />
                            <li>
                                <NavLink to="/">
                                    <IoHome size={20} />
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/ourMenu">
                                    <IoMenu size={20} />
                                    Menu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/ourShop/0">
                                    <MdShoppingBag size={20} />
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation">
                                    <MdEmail size={20} />
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-5 flex-1 bg-[#f6f6f6]">
                <Outlet />
            </div>
            <Toaster />
        </div>
    );
};

export default Dashboard;
