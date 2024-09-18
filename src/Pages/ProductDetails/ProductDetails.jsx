import React, { useState } from 'react';
import laptop1 from '../../assets/Photos/Product-Details/laptop1.png'
import { IoStar } from 'react-icons/io5';
import { TbHomeRibbon, TbTruckDelivery } from 'react-icons/tb';
import { LuShieldCheck } from 'react-icons/lu';
import { FaAngleRight, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiDiscountPercentFill } from 'react-icons/ri';
const ProductDetails = () => {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };
    return (
        <div className='lg:max-w-screen-xl	max-w-screen-sm mx-auto '>
            <div className="hero ">
                <div className="hero-content gap-10 flex-col lg:flex-row">
                    <div>
                        <img
                            src={laptop1}
                            className="w-full h-full rounded-lg " />
                    </div>


                    {/* card-1  */}
                    <div className=" bg-base-100 ">
                        <div className="card-body">
                            <h2 className="text-3xl">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</h2>

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
                                    <h1 className='text-3xl'>Select Color :</h1>
                                    <div className="flex gap-4 mt-4">
                                        {/* Black color input */}
                                        <div
                                            className={`w-8 h-8 rounded-full cursor-pointer flex justify-center items-center ${selectedColor === 'Black' ? 'ring-4 ring-black' : ''}`}
                                            style={{ backgroundColor: 'Black' }}
                                            onClick={() => handleColorSelect('Black')}
                                        >
                                            {selectedColor === 'Black' && <FaCheck className="text-white" />}
                                        </div>

                                        {/* gray color input */}
                                        <div
                                            className={`w-8 h-8 rounded-full cursor-pointer flex justify-center items-center ${selectedColor === 'Gray' ? 'ring-4 ring-gray-500' : ''}`}
                                            style={{ backgroundColor: 'gray' }}
                                            onClick={() => handleColorSelect('Gray')}
                                        >
                                            {selectedColor === 'Gray' && <FaCheck className="text-black" />}
                                        </div>
                                    </div>

                                    <p className="mt-4 font-semibold"> {selectedColor}</p>
                                </div>


                            </div>

                            {/* product-List  */}
                            <div className='ml-8 mt-8'>
                                <ul style={{ listStyleType: 'disc' }}>
                                    <li >
                                        <div className='flex items-center my-2'>
                                            <p className='text-xl font-semibold text-gray-600'>Brand</p>
                                            <p className='text-xl font-semibold text-black'>Apple</p>
                                        </div>
                                    </li>
                                    <li >
                                        <div className='flex items-center my-2'>
                                            <p className='text-xl font-semibold text-gray-600'>Model Name</p>
                                            <p className='text-xl font-semibold text-black'>Mackbook Pro</p>
                                        </div>
                                    </li>
                                    <li >
                                        <div className='flex items-center my-2'>
                                            <p className='text-xl font-semibold text-gray-600'>Screen Size</p>
                                            <p className='text-xl font-semibold text-black'>13.3 Inches</p>
                                        </div>
                                    </li>
                                    <li >
                                        <div className='flex items-center my-2'>
                                            <p className='text-xl font-semibold text-gray-600'>Hard Disk size</p>
                                            <p className='text-xl font-semibold text-black'>256 GB</p>
                                        </div>
                                    </li>
                                    <li >
                                        <div className='flex items-center my-2'>
                                            <p className='text-xl font-semibold text-gray-600'>CPU Model</p>
                                            <p className='text-xl font-semibold text-black'>core i5</p>
                                        </div>
                                    </li>
                                </ul>
                                <div>
                                    <Link className='btn text-xl -ml-3 text-blue-600 bg-white hover:bg-white'>Show More <FaAngleRight /></Link>
                                </div>

                            </div>

                        </div>
                    </div>
                    {/* card-2  */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            {/* price */}
                            <div className='flex whitespace-nowrap  items-center gap-20'>
                                <h2 className="text-3xl text-black font-semibold">$ 1299.00</h2>
                                {/* discount-price  */}
                                <p className='text-2xl font-bold flex items-center text-[#F45E0C]'><RiDiscountPercentFill className='w-7 h-7' />-12%</p>
                            </div>
                            {/* last price  */}
                            <p className='text-xl font-semibold text-gray-500'>Last price $ 1410,87</p>

                            <div >

                                <div className='flex items-center gap-4 my-4'>
                                    <input type="radio" name="color" value="yellow" className='w-8 h-8' />
                                    <div className='text-2xl text-gray-600 font-semibold'>Pay Now</div>
                                </div>
                                <div className='flex items-center gap-4 my-4'>
                                    <input type="radio" name="color" value="yellow" className='w-8 h-8' />
                                    <div className='text-2xl text-gray-600 font-semibold'>Buy in installments</div>
                                </div>
                                <p className='ml-12 whitespace-nowrap text-gray-600 text-xl'> Choose your installments period</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;