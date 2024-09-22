import React from 'react';
import { FaRegUser, FaMagnifyingGlassLocation, FaSignsPost } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { GoPasskeyFill } from 'react-icons/go';
import { MdMarkEmailUnread } from 'react-icons/md';

const PersonalData = () => {
    return (
        <div className="container mx-auto p-4">
            <div className='mb-6'>
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Identification </h1>
                <p className=' text-center'>Verify your identity</p>
            </div>
            <div className="hero">
                <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start">

                    {/* Image Section */}
                    <img
                        src="https://media.istockphoto.com/id/1132758418/photo/close-up-portrait-of-her-she-nice-attractive-puzzled-ignorant-wavy-haired-girl-showing.jpg?s=612x612&w=0&k=20&c=3G3eEg2RHg6AmVDbZCIzVo3n-1kFnE-61sgH3qDdyIo="
                        alt="Personal"
                        className="w-90 lg:w-1/2 h-auto rounded-lg shadow-2xl mb-6 lg:mb-0 lg:mr-8"
                    />

                    {/* Data Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-6">
                            {/* Row 1: Full Name & Email */}
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                                {/* Full Name */}
                                <div className="flex-1">
                                    <span className="block text-sm text-gray-600">Your Full Name</span>
                                    <div className="flex items-center bg-base-200 hover:text-teal-600 text-nowrap py-4 pr-4 pl-3 border rounded-xl gap-3 mt-1">
                                        <FaRegUser className="w-6 h-6 text-gray-700" />
                                        <span className="font-semibold text-lg md:text-xl">Jimmy Smith</span>
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="flex-1">
                                    <span className="block text-sm text-gray-600">Your Email Address</span>
                                    <div className="flex items-center bg-base-200 hover:text-teal-600 py-4 pr-4 pl-3 border rounded-xl gap-3 mt-1">
                                        <MdMarkEmailUnread className="w-6 h-6 text-gray-700" />
                                        <span className="font-semibold text-lg md:text-xl">jimmy@gmail.com</span>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Phone & Password */}
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                                {/* Phone Number */}
                                <div className="flex-1">
                                    <span className="block text-sm text-gray-600">Phone Number</span>
                                    <div className="flex items-center bg-base-200 hover:text-teal-600 py-4 pr-4 pl-3 border rounded-xl gap-3 mt-1">
                                        <FiPhone className="w-6 h-6 text-gray-700" />
                                        <span className="font-semibold text-lg md:text-xl">+123-456-78912</span>
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="flex-1">
                                    <span className="block text-sm text-gray-600">Password</span>
                                    <div className="flex items-center bg-base-200 hover:text-teal-600 py-4 pr-4 pl-3 border rounded-xl gap-3 mt-1">
                                        <GoPasskeyFill className="w-6 h-6 text-gray-700" />
                                        <span className="font-semibold text-lg md:text-xl">************</span>
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: Location & Postal Code */}
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                                {/* Location */}
                                <div className="flex-1">
                                    <span className="block text-sm text-gray-600">Location</span>
                                    <div className="flex text-nowrap items-center bg-base-200 hover:text-teal-600 py-4 pr-4 pl-3 border rounded-xl gap-3 mt-1">
                                        <FaMagnifyingGlassLocation className="w-6 h-6 text-gray-700" />
                                        <span className=" font-semibold text-lg md:text-xl">Dhaka, Bangladesh - 1341</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalData;
