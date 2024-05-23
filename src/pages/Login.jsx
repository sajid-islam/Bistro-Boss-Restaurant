import { Link } from "react-router-dom";
import bg from "../assets/others/authentication2.png"
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";


const Login = () => {
    return (
        <div className={`bg-[url('https://i.postimg.cc/FsFpLC2B/authentication.png')]  w-full lg:px-32 px-5 md:px-12 py-10`}>
            <div className="bg-[url('https://i.postimg.cc/FsFpLC2B/authentication.png')] w-full  shadow-2xl flex justify-center items-cen md:px-10">
                <div className="hero">
                    <div className="hero-content grid grid-cols-1 md:grid-cols-2 ">
                        <div className="text-center lg:text-left hidden md:block">
                            <h1 className="text-3xl font-bold text-center">Login now!</h1>
                            <img src={bg} alt="" />
                        </div>
                        <div className="card shrink-0 w-full max-w-sm  mx-auto ">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-5">
                                    <input type="text" placeholder="" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="text-xs font-semibold  text-[#5D5FEF]">Reload Captcha</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Type here" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#D1A054B3] hover:bg-[#D1A054B3] text-white">Login</button>
                                </div>
                            </form>
                            <div className="text-center space-y-3">
                                <p className="text-[#D1A054] font-semibold">New here? <Link>Create a new account</Link></p>
                                <p className="text-[#444444] text-xs font-bold">Or Login with</p>
                                <div className="flex justify-center gap-4">
                                    <button><CiFacebook size={35} /></button>
                                    <button className="border-2 border-black rounded-full px-[7px]"><FaGoogle /></button>
                                    <button><VscGithub size={30} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;