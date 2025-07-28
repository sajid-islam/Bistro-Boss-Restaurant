import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://bistro-boss-server1.vercel.app",
    withCredentials: true,
});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
