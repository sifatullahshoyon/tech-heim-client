import React, { useContext, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../../Hooks/useAuth/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const { user, googleSignIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    //location pathname
    const formLocation = location?.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate(formLocation, { replace: true })
            })
    }

    return (
        <div>
            <button
                onClick={handleGoogleSignIn}
                className="flex justify-between items-center gap-5 mx-auto mb-4 mt-8  rounded-md border px-5 py-2 shadow-lg duration-200  dark:hover:text-white w-full hover:bg-blue-500">
                <FaGoogle className="text-xl" />
                Continue with Google
            </button>
        </div>
    );
};

export default GoogleLogin;