import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

const useAxiosSecure = () => {


    return axiosSecure;
};

export default useAxiosSecure;