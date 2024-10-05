import React from "react";
import { ImageDisplayControl } from "@frameright/react-image-display-control";
import phoneSeries from "../../../assets/images/banner/iPhone-series.png";
import playstation from "../../../assets/images/banner/play-station-5.png";
import { Link } from "react-router-dom";

const Prebook = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-12">
      <div className=" md:flex md:flex-row gap-6 space-y-6 md:space-y-0">
        {/* Image One */}
        <div className="relative">
          <ImageDisplayControl>
            <img src={phoneSeries} className="w-full" />
          </ImageDisplayControl>
          <div className="absolute bottom-5 right-5 lg:bottom-20 lg:right-40 ">
            <Link to='/shop'>
              <button className="btn btn-primary bg-[#0C68F4] border-0 text-white">
                Explore More
              </button>
            </Link>
          </div>
        </div>
        {/* Image Two */}
        <div className="relative">
          <ImageDisplayControl>
            <img src={playstation} className="w-full" />
          </ImageDisplayControl>
          <div className="absolute bottom-10 left-20">
            <Link to='/shop'>
              <button className="btn btn-primary bg-[#0C68F4] border-0 text-white px-10">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prebook;
