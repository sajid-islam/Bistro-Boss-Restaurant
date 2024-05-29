import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../assets/others/authentication2.png"
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {login}=useAuth()
    const [disabled,setDisabled]=useState(true)
    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(6,'black','white')
    }, [])

    //Login
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(result=>{
            if(result.user){
                toast.success('Login Successfully')
                navigate(from)
            }
        })
        .catch(error=>{
            console.error(error);
            toast.error(error.message)
        })
    }

    // Captcha Validation
    const handleValidateCaptcha=(e)=>{
        const user_captcha_value= e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }
    return (
        <div className={`bg-[url('https://i.postimg.cc/FsFpLC2B/authentication.png')]  w-full lg:px-32 px-5 md:px-12 py-10`}>
            <Helmet>
                <title>Login | Bistro Boss</title>
            </Helmet>
            <div className="bg-[url('https://i.postimg.cc/FsFpLC2B/authentication.png')] w-full  shadow-2xl flex justify-center items-cen md:px-10">
                <div className="hero">
                    <div className="hero-content grid grid-cols-1 md:grid-cols-2 ">
                        <div className="text-center lg:text-left hidden md:block">
                            <h1 className="text-3xl font-bold text-center">Login now!</h1>
                            <img src={bg} alt="" />
                        </div>
                        <div className="card shrink-0 w-full max-w-sm  mx-auto ">
                            <h1 className="text-3xl font-bold text-center md:hidden">Register now!</h1>
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-5">
                                    <label className="label w-full">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the captcha" className="input input-bordered" required />
                                </div>

                                <div className="form-control mt-6">
                                    <button disabled={disabled} className="btn bg-[#D1A054B3] hover:bg-[#D1A054B3] text-white">Login</button>
                                </div>
                            </form>
                            <div className="text-center space-y-3">
                                <p className="text-[#D1A054] font-semibold">New here? <Link to={'/register'} className=" hover:underline">Create a new account</Link></p>
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