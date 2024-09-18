import React from 'react';
import { FaAngleDown, FaCommentDots } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';

const Comments = () => {
    return (
        <div className='my-20'>
            <h1 className='text-3xl ml-4 font-semibold mb-8 text-[#0C68F4]'>Comments</h1>
            {/* section-1  */}
            <div class="grid grid-rows-3 grid-flow-col gap-8">
                <div class="row-span-3 ...">
                    <div className="card bg-base-100 lg:w-96 w-60 ml-4">
                        <div>
                            <h2 className="text-2xl mb-6">leave your comments here for other customers</h2>

                            <input type="text" placeholder="Share your thoughts about this product here" className="input input-bordered w-full max-w-lg h-20" />
                            <button className="btn rounded-lg btn-lg border-[#0C68F4] bg-white text-[#0C68F4]  border-2 hover:text-white hover:border-[#0C68F4] hover:bg-[#0C68F4]   w-full text-xl text-semibold mt-6">Add to cart <FaCommentDots className='h-7 w-7' /></button>

                            <div>
                                <h1 className='text-2xl mt-6 font-semibold'>By feature</h1>
                                <div className='flex items-center mt-2 gap-4'>
                                    <p className='text-semibold '>Battery charge</p>
                                    <progress className="progress progress-warning mt-1 w-52" value="70" max="100"></progress>
                                    <p className='font-bold'>4.8</p>
                                </div>
                                <div className='flex items-center mt-2 gap-4'>
                                    <p className='text-semibold '>Monitor</p>
                                    <progress className="progress progress-warning mt-1 ml-10 w-52" value="80" max="100"></progress>
                                    <p className='font-bold'> 4.9</p>
                                </div>
                                <div className='flex items-center mt-2 gap-4'>
                                    <p className='text-semibold '>Lightness</p>
                                    <progress className="progress progress-warning mt-1 w-52 ml-8" value="50" max="100"></progress>
                                    <p className='font-bold'> 4.3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* comment-1  */}
                <div class="col-span-2 ...">
                    <div className="card lg:card-side bg-base-100 shadow-xl">


                        <div className="card-body">
                            <div className='flex items-center justify-between w-full lg:gap-96 gap-4'>
                                <div className='flex items-center gap-4'>
                                    <div className="avatar">
                                        <div className="w-20 rounded-full">
                                            <img src="https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="card-title">Gabriel</h2>
                                        <p className='text-gray-500'>July 28, 2023</p>
                                    </div>
                                </div>
                                <div className=' flex items-center gap-1 bg-[#063A88] text-white border rounded-lg px-2 p-1'>
                                    <IoStar className='w-5 h-5' />
                                    <p className='font-semibold'>4.5</p>
                                </div>
                            </div>

                            <p className='font-semibold text-xl text-gray-600'>I needed a fast, efficient laptop for on the go use. Battery life is amazing. Build quality is fantastic. Perfect fit for my needs.</p>
                            <div className="card-actions justify-end">
                                <button className='btn text-xl  text-blue-600 bg-white hover:bg-white'>Show More <FaAngleDown /></button>

                            </div>
                        </div>

                    </div>
                </div>
                {/* section-2  */}
                <div class="row-span-2 col-span-2 ...">
                    <div className="card lg:card-side bg-base-100 shadow-xl">

                        {/* comment-1  */}
                        <div className="card-body">
                            <div className='flex items-center justify-between w-full lg:gap-96 gap-4'>
                                <div className='flex items-center gap-4'>
                                    <div className="avatar">
                                        <div className="w-20 rounded-full">
                                            <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="card-title">Gabriel</h2>
                                        <p className='text-gray-500'>July 28, 2023</p>
                                    </div>
                                </div>
                                <div className=' flex items-center gap-1 bg-[#063A88] text-white border rounded-lg px-2 p-1'>
                                    <IoStar className='w-5 h-5' />
                                    <p className='font-semibold'>4.5</p>
                                </div>
                            </div>

                            <p className='font-semibold text-xl text-gray-600'>This macbook air at first feels just so big to me using it for school, and after a while, it felt as a perfect size. I look at it sometimes and realize how portable and small it is, but IT FEELS AS BIG AS LIKE A TV SCREEN. It's not a huge computer, but when your doing work and typing or whatever watching youtube it feels like a movie screen, beautiful. I never had such a good computer that just feels like a breath of fresh air. If you are contemplating on buying one, I would get 512 GB of storage and 16 ram. You will not be disappointed if you buy this no matter what, I strongly recommend it.</p>
                            <div className="card-actions justify-end">
                                <button className='btn text-xl  text-blue-600 bg-white hover:bg-white'>Show More <FaAngleDown /></button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;