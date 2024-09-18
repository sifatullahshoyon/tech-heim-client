import React, { useState } from 'react';
import laptop1 from '../../assets/Photos/Product-Details/laptop1.png'
import { IoStar } from 'react-icons/io5';
import { TbHomeRibbon, TbTruckDelivery } from 'react-icons/tb';
import { LuShieldCheck } from 'react-icons/lu';
import { FaCheck } from 'react-icons/fa';
const ProductDetails = () => {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };
    return (
        <div className='lg:max-w-screen-xl	max-w-screen-sm mx-auto '>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img
                            src={laptop1}
                            className="w-full h-full rounded-lg " />
                    </div>


                    {/* card-1  */}
                    <div className=" bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</h2>

                            <div className='flex my-2 items-center gap-4'>
                                <div className='flex items-center gap-1 bg-[#063A88] text-white border rounded-lg px-2 p-1'>
                                    <IoStar className='w-5 h-5' />
                                    <p className='font-semibold'>4.5</p>
                                </div>
                                <div>
                                    <p className='text-gray-500 font-semibold text-2xl '>sold 125</p>
                                </div>
                            </div>

                            <div className="flex my-4 items-center gap-4 flex-nowrap w-full">
                                {/* number-1 */}
                                <div className="flex items-center gap-2 whitespace-nowrap">
                                    <TbHomeRibbon className="w-7 h-7 text-blue-500" />
                                    <p className="text-gray-500 font-semibold">In Stock</p>
                                </div>
                                {/* number-2 */}
                                <div className="flex items-center gap-2 whitespace-nowrap">
                                    <LuShieldCheck className="w-6 h-6 text-blue-500" />
                                    <p className="text-gray-500 font-semibold">Guaranteed</p>
                                </div>
                                {/* number-3 */}
                                <div className="flex items-center gap-2 whitespace-nowrap">
                                    <TbTruckDelivery className="w-8 h-8 text-blue-500" />
                                    <p className="text-gray-500 font-semibold">Free Delivery</p>
                                </div>
                            </div>
                            <div>

                                <div className='flex items-center gap-10'>
                                    <h1 className='text-3xl'>Select Color</h1>
                                    <div className="flex gap-4 mt-4">
                                        {/* Black color input */}
                                        <div
                                            className={`w-10 h-10 rounded-full cursor-pointer flex justify-center items-center ${selectedColor === 'black' ? 'ring-4 ring-black' : ''}`}
                                            style={{ backgroundColor: 'black' }}
                                            onClick={() => handleColorSelect('black')}
                                        >
                                            {selectedColor === 'black' && <FaCheck className="text-white" />}
                                        </div>

                                        {/* Yellow color input */}
                                        <div
                                            className={`w-10 h-10 rounded-full cursor-pointer flex justify-center items-center ${selectedColor === 'gray' ? 'ring-4 ring-gray-500' : ''}`}
                                            style={{ backgroundColor: 'gray' }}
                                            onClick={() => handleColorSelect('gray')}
                                        >
                                            {selectedColor === 'gray' && <FaCheck className="text-black" />}
                                        </div>
                                    </div>

                                    {/* <p className="mt-4">Selected Color: {selectedColor}</p> */}
                                </div>

                            </div>



                        </div>
                    </div>
                    {/* card-2  */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;