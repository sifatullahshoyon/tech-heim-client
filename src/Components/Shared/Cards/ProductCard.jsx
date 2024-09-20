import React from 'react';
import { ImageDisplayControl } from "@frameright/react-image-display-control";
import { FaStar } from "react-icons/fa";

const ProductCard = ({pd}) => {
// const {title, img, discount, currentPrice, ratings} = '';
    return (
        <div className='w-72 h-[347px] shadow hover:shadow-lg transition-all rounded-lg p-4'>
             <ImageDisplayControl>
            <img src={pd.img} className='mx-auto' />
          </ImageDisplayControl>
          <div className="divider"></div>
          <br />
          <h4 className="text-balance text-base text-black font-light">
                  {pd.title.length > 30
                    ? pd.title.slice(0, 30) + "..."
                    : pd.title}
                    {/* {title} */}
                </h4>
          <div className="flex justify-between">
                  <p className="mt-8 text-[#717171] text-lg">
                  ${pd.currentPrice}
                  </p>
                  <p className="mt-8 text-base text-black flex items-center gap-1">
                  <FaStar />{pd.ratings}
                  </p>
                </div>
        </div>
    );
};

export default ProductCard; 