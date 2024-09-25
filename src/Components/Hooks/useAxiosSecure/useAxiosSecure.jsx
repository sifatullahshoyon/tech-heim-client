import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    // const navigate = useNavigate();
    // const [signOut] = useSignOut(auth);

    // Add a request interceptor
    // axiosSecure.interceptors.request.use(function (config) {
    //     const token = localStorage.getItem('access-token')
    //     // console.log('request', token)
    //     config.headers.authorization = `Bearer ${token}`
    //     return config;
    // }, function (error) {
    //     // Do something with request error
    //     return Promise.reject(error);
    // });

    // interceptors 401 and 403 status 
    // axiosSecure.interceptors.response.use(function (response) {

    //     return response;
    // }, async (error) => {
    //     const status = error.response.status;
    //     if (status === 401 || status === 403) {
    //         await signOut()
    //         navigate('/login')
    //         localStorage.removeItem('access-token');
    //     }
    //     return Promise.reject(status);
    // });

    return axiosSecure;
}

export default useAxiosSecure;