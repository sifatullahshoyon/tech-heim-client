import React from 'react';
import apple from '../../../assets/Photos/Product-Details/apple.png'
import canon from '../../../assets/Photos/Product-Details/canon.png'
import lenovo from '../../../assets/Photos/Product-Details/lenovo.png'
import samsung from '../../../assets/Photos/Product-Details/samsung.png'
import sony from '../../../assets/Photos/Product-Details/sony.png'
import huawei from '../../../assets/Photos/Product-Details/huawei.png'
import topBanner from '../../../assets/Photos/Product-Details/topBanner.png'
const TopBrands = () => {
    return (
        <div className='lg:mx-20 mx-8'>
            <h1 className='text-5xl font-semibold'>Top Brands</h1>
            <div className="divider divider-neutral"></div>

            <div className='mx-20  grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 my-28 gap-28 justify-items-center align-middle '>

                <img src={apple} className='-mt-4' alt="" />


                {/* card 2 */}

                <img src={sony} alt="" />

                {/* card 3 */}

                <img src={samsung} alt="" />


                {/* card 4 */}

                <img src={canon} alt="" />


                {/* card 5 */}

                <img src={huawei} className='-mt-6' alt="" />

                {/* card 6 */}

                <img src={lenovo} alt="" />

            </div>

            <img src={topBanner} className='w-full h-full' alt="" />
        </div>
    );
};

export default TopBrands;