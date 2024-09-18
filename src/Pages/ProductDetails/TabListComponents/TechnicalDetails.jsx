import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const TechnicalDetails = () => {
    return (
        <div className='my-20'>
            <h1 className='text-3xl  font-semibold mb-6 text-[#0C68F4]'>Technical Details</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-2xl font-semibold'>Name</th>
                            <th className='text-2xl font-semibold'>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td className='text-2xl font-semibold'>Display</td>
                            <td className='text-xl font-semibold'>13.3-inch (diagonal) LED-backlit display with IPS technology</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td className='text-2xl font-semibold'>Graphics</td>
                            <td className='text-xl font-semibold'>Apple 10-core GPU</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td className='text-2xl font-semibold'>Processor</td>
                            <td className='text-xl font-semibold'>Apple M2 chip</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>4</th>
                            <td className='text-2xl font-semibold'>In the box</td>
                            <td className='text-xl font-semibold'>67W USB-C Power Adapter, USB-C Charge Cable (2 m)</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <th>5</th>
                            <td className='text-2xl font-semibold'>0.61 inch (1.56 cm)</td>
                            <td className='text-xl font-semibold'>67W USB-C Power Adapter, USB-C Charge Cable (2 m)</td>
                        </tr>
                        {/* row 6 */}
                        <tr>
                            <th>6</th>
                            <td className='text-2xl font-semibold'>Width</td>
                            <td className='text-xl font-semibold'>11.97 inches (30.41 cm)</td>
                        </tr>
                    </tbody>
                </table>
                <div className='mt-9'>
                    <button className='btn text-xl  text-blue-600 bg-white hover:bg-white'>Show More <FaAngleDown /></button>
                </div>
            </div>
        </div>
    );
};

export default TechnicalDetails;