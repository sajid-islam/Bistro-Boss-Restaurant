import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: "https://bistro-boss-server1.vercel.app",
    withCredentials: true,
});

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
