import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleLogin = () => {
    return (
        <div>
            <button className="flex justify-between items-center gap-5 mx-auto mb-4 mt-8  rounded-md border px-5 py-2 shadow-lg duration-200  dark:hover:text-white w-full hover:bg-blue-500">
                <FaGoogle className="text-xl" />
                Continue with Google
            </button>
        </div>
    );
};

export default GoogleLogin;