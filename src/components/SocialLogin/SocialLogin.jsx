import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const { googleLogin } = useAuth()
    const axiosPublic = useAxiosPublic()
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                if (result.user) {
                    //set user in database
                    const userInfo = {
                        name:result.user.displayName,
                        email:result.user.email
                    }
                    axiosPublic.post('/users',userInfo)
                    .then(res =>{
                        console.log(res.data);
                    })

                    toast.success('Login Successfully')
                    navigate(from)          
                }
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })
    }
    return (
        <div className="flex justify-center gap-4">
            <button><CiFacebook size={35} /></button>
            <button
            onClick={handleGoogleLogin}
                className="border-2 border-black rounded-full px-[7px]">
                <FaGoogle />
            </button>
            <button><VscGithub size={30} /></button>
        </div>
    );
};

export default SocialLogin;