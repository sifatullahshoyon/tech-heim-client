import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import ProductCards from "./ProductCards";

const NewProducts = () => {
  return (
    <section className="container mx-auto  mb-12">
      <>
        {/* heading */}
        <div className="flex justify-between">
          <h1 className="text-[32px] text-black font-medium">New Products</h1>
          <p className="flex items-center text-['#0C0C0C'] text-sm lg:text-base font-normal">
            View all
            <RiArrowRightSLine />
          </p>
        </div>
        {/* Divider */}
        <div class="divider divider-neutral"></div>
        {/* Product Card */}
        <ProductCards />
      </>
    </section>
  );
};

export default NewProducts;
