import React from "react";
import { ImageDisplayControl } from "@frameright/react-image-display-control";
import bannerImg from "../../assets/images/banner/banner.png";
import PrimaryBtn from "../../Components/Shared/Buttons/PrimaryBtn";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-12">
      <div className="flex flex-row justify-between items-center mt-6 lg:mt-0 h-[200px] lg:h-[544px]">
        {/* Content */}
        <div>
          <h1 className="font-semibold text-2xl text-balance md:text-3xl lg:text-[64px] text-[#042352] lg:mb-[50px] md:mb-7 mb-2">
            Tech Heim
          </h1>
          <p className="text-black text-[9px] md:text-lg lg:text-[32px] font-medium text-balance mb-[54px] md:mb-20 lg:mb-[110px]">
            "Join the <span className="text-[#F45E0C]">digital revolution</span>
            "
          </p>
          <Link to='/shop'>
            <PrimaryBtn
              width="w-[89px] md:w-60 lg:w-72"
              height="h-9 lg:h-14"
              color="text-white"
              size="text-[10px]
              md:text-xl lg:text-2xl"
            >
              Explore More
            </PrimaryBtn></Link>
        </div>
        {/* Image */}
        <div>
          <ImageDisplayControl>
            <img src={bannerImg} />
          </ImageDisplayControl>
        </div>
      </div>
    </section>
  );
};

export default Banner;
