import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div
            className={`bg-[url('https://i.postimg.cc/FsFpLC2B/authentication.png')] w-full lg:px-32 px-5 md:px-12 py-16 min-h-screen flex items-center justify-center`}
        >
            <Helmet>
                <title>404 | Bistro Boss</title>
            </Helmet>
            <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-10 md:p-16 max-w-3xl text-center">
                <h1 className="text-6xl font-extrabold text-[#D1A054] mb-6">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Oops! Page not found
                </h2>
                <p className="text-gray-600 mb-8">
                    The page you are looking for does not exist or has been
                    moved.
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="btn bg-[#D1A054B3] hover:bg-[#D1A054] text-white px-8"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default NotFound;
