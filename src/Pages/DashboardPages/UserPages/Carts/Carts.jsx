import React from 'react';
import MenuShoppingCart from '../../../../Components/MenuShoppingCart/MenuShoppingCart';
import NewProducts from '../../../Home/NewProducts/NewProducts';

const Carts = () => {
    return (
        <div className='container mx-auto px-5'>
            {/* Tabs */}
            <div className='flex justify-center items-center gap-5 my-12'>
                <p>Cart</p>
                <p>checkout</p>
                <p>payment</p>
            </div>
            {/* Cart Detailes */}
            <div className='flex justify-around'>
                <MenuShoppingCart />
                {/* Payment Details */}
                <div className='border px-6 py-4 rounded w-[416px] h-[300px] mt-12'>
                    <h1 className='text-2xl text-black font-normal pb-4'>Payment Details</h1>
                    <div>
                        <div className='flex justify-between mb-2'>
                            <p className='text-[#717171] text-sm'>Subtotal</p>
                            <p className='text-[#717171] text-sm'>$5104.52</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='text-[#717171] text-sm'>Discount</p>
                            <p className='text-[#717171] text-sm'>-$111.82</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='text-[#717171] text-sm'>Shipment Cost</p>
                            <p className='text-[#717171] text-sm'>$364.73</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="flex justify-between mb-6">
                        <p className='text-base text-black font-normal'>Grand Total</p>
                        <p>$543.02</p>
                    </div>
                    <div className='w-full'>
                        <button className='btn btn-primary w-full'>Procced to checkout</button>
                    </div>
                </div>
            </div>
            {/* Customers viewed  Product*/}
            <div className='flex flex-col justify-around my-12'>
                <h1 className='ml-32 mb-6 text-xl text-balance font-medium text-black'>Customers who viewed items in your browsing history also viewed</h1>
                <NewProducts />
            </div>
        </div>
    );
};

export default Carts;