import React from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import ProductOnSellSlider from "./ProductOnSellSlider";

const ProductOnSell = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-12">
      <div className="h-[325px] bg-[#063A88] w-full rounded-lg relative">
        {/* Background Img */}
        <div className="productOnSell"></div>
        {/* Content & Slider */}
        <div className="flex items-center gap-20 h-full">
          {/* Text */}
          <div className="pl-16 w-1/4">
            <h1 className="text-sm lg:text-2xl font-medium text-white mb-2">
              Products On Sale
            </h1>
            <p className="text-xs lg:text-xl text-white font-light mb-14">
              Shop Now!
            </p>
            <p className="flex items-center text-white text-sm lg:text-base font-normal">
              View all
              <RiArrowRightSLine />
            </p>
          </div>
          {/* Slider */}
          <div className="w-3/4">
            <ProductOnSellSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOnSell;
