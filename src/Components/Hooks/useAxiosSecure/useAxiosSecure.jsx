import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useContext } from 'react';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);

    // Add a request interceptor
    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Add a response interceptor to handle 401 and 403 errors
    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            const status = error?.response?.status;
            if (status === 401 || status === 403) {
                await logOut();  // Ensure the user is logged out properly
                navigate('/login', { replace: true }); // Redirect to login page
                localStorage.removeItem('access-token'); // Remove token first
            }
            return Promise.reject(error); // Pass the error back
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;
