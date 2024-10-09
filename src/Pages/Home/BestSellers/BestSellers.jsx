import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import SellersCard from "./SellersCard";

const BestSellers = () => {
  return (
    <section className="container mx-auto  mb-12">
      <>
        {/* heading */}
        <div className="flex justify-between">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-8">Best Sellers</h1>
          <p className="flex items-center text-['#0C0C0C'] text-sm lg:text-base font-normal">
            View all
            <RiArrowRightSLine />
          </p>
        </div>
        {/* Divider */}
        <div className="divider divider-neutral"></div>
        {/* Sellers Card */}
        <SellersCard />
      </>
    </section>
  );
};

export default BestSellers;
