import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/others/authentication2.png"
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../hooks/useAxiosPublic";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../components/SocialLogin/SocialLogin";

const Register = () => {
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()
    const { createUser } = useAuth()
    
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
                .then(result => {
                    if (result.user) {
                        updateProfile(result.user,{displayName:data.name,photoURL:data.photoURL})
                        //create user in database
                        const userInfo = {
                            name:data.name,
                            email:data.email
                        }
                        axiosPublic.post('/users',userInfo)
                        .then(res=>{
                            console.log(res.data);
                        })

                        //set user profile
                        toast.success('Register Successfully')
                        navigate('/')
                    }
                })
                .catch(error => {
                    console.log(error);
                    toast.error(error.message)
                })
    }
    return (
        <div className={`bg-[url('https://i.postimg.cc/FsFpLC2B/authentication.png')]  w-full lg:px-32 px-5 md:px-12 py-10`}>
            <div className="bg-[url('https://i.postimg.cc/FsFpLC2B/authentication.png')] w-full  shadow-2xl flex justify-center items-cen md:px-10">
                <Helmet>
                    <title>Register | Bistro Boss</title>
                </Helmet>
                <div className="hero">
                    <div className="hero-content flex-row-reverse">
                        <div className="text-center lg:text-left hidden md:block">
                            <h1 className="text-3xl font-bold text-center">Register now!</h1>
                            <img src={bg} alt="" />
                        </div>
                        <div className="card shrink-0 w-full max-w-sm  mx-auto ">
                            <h1 className="text-3xl font-bold text-center md:hidden">Register now!</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register('name', { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-500 mt-2">Name is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" {...register('photoURL', { required: true })} name="photoURL" placeholder="Enter your photoURL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-500 mt-2">PhotoURL is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register('email', {
                                        required: true,
                                    })}
                                        name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-500 mt-2">Email is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register('password', {
                                        required: true,
                                        minLength: 5,
                                        maxLength: 20,
                                        // pattern: /^(?=.*[a-z])(?=.*[A-Z])$/
                                    })}
                                        name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className="text-red-500 mt-2">Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-500 mt-2">Your password at least 6 characters</span>}
                                    {errors.password?.type === 'maxLength' && <span className="text-red-500 mt-2">Your password must be less then 20 characters</span>}
                                    {/* {errors.password?.type === 'pattern' && <span className="text-red-500 mt-2">Your password have must 1 uppercase , lowercase and special character</span>} */}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#D1A054B3] hover:bg-[#D1A054B3] text-white">Register</button>
                                </div>
                            </form>
                            <div className="text-center space-y-3">
                                <p className="text-[#D1A054] font-semibold">Already registered? <Link to={'/login'} className="hover:underline">Go to login</Link></p>
                                <div className="divider text-[#444444] text-xs font-bold">Or sing up with</div>
                                <SocialLogin/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;