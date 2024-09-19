import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ImageDisplayControl } from "@frameright/react-image-display-control";
import img1 from "../../../assets/images/products/macbook.png";

const ProductOnSellSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation={{
          prevEl: prevRef.current, // Custom previous button
          nextEl: nextRef.current, // Custom next button
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {productOnSell?.map((pd) => (
          <SwiperSlide key={pd._id}>
            <div className="flex gap-2">
              <div className="rounded-lg h-[237px] hover:h-[240px] transition-all w-[184px] bg-white overflow-hidden relative px-2">
                <div className="badge absolute top-2 rounded bg-[#FDDBC9]">
                  -{pd.discount}%
                </div>
                <ImageDisplayControl>
                  <img src={pd.img} />
                </ImageDisplayControl>
                <h4 className="text-balance text-xs text-black font-light">
                  {pd.title.length > 30
                    ? pd.title.slice(0, 30) + "..."
                    : pd.title}
                </h4>
                <div className="flex justify-between">
                  <p className="mt-8 text-[#717171] line-through">
                    ${parseFloat(pd.lastPrice)}
                  </p>
                  <p className="mt-8 text-black ">
                    ${parseFloat(pd.currentPrice)}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom position for navigation buttons */}
      <div className="absolute -bottom-[51px] right-0 z-10 flex flex-row items-center gap-2 p-4">
        <div
          ref={prevRef}
          className="swiper-button-prev-custom bg-white text-black p-2 rounded-full cursor-pointer"
        >
          <IoIosArrowBack />
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next-custom bg-white text-black p-2 rounded-full cursor-pointer"
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default ProductOnSellSlider;

const productOnSell = [
  {
    _id: 1,
    title: "Logitech G502 Gaming Mouse",
    img: img1,
    discount: 50,
    lastPrice: 38.0,
    currentPrice: 19.0,
  },
  {
    _id: 2,
    title:
      "NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design",
    img: img1,
    discount: 30,
    lastPrice: 49.0,
    currentPrice: 34.0,
  },
  {
    _id: 3,
    title: "Apple Watch Series 7 (GPS, 41MM)",
    img: img1,
    discount: 20,
    lastPrice: 289.0,
    currentPrice: 231.0,
  },
  {
    _id: 4,
    title: "Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)",
    img: img1,
    discount: 25,
    lastPrice: 950.0,
    currentPrice: 712.0,
  },
  {
    _id: 5,
    title: "Samsung Titan Smart Watch",
    img: img1,
    discount: 17,
    lastPrice: 120.0,
    currentPrice: 99.0,
  },
  {
    _id: 6,
    title: "Logitech G502 Gaming Mouse",
    img: img1,
    discount: 50,
    lastPrice: 38.0,
    currentPrice: 19.0,
  },
  {
    _id: 7,
    title:
      "NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design",
    img: img1,
    discount: 30,
    lastPrice: 49.0,
    currentPrice: 34.0,
  },
  {
    _id: 8,
    title: "Apple Watch Series 7 (GPS, 41MM)",
    img: img1,
    discount: 20,
    lastPrice: 289.0,
    currentPrice: 231.0,
  },
  {
    _id: 9,
    title: "Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)",
    img: img1,
    discount: 25,
    lastPrice: 950.0,
    currentPrice: 712.0,
  },
  {
    _id: 10,
    title: "Samsung Titan Smart Watch",
    img: img1,
    discount: 17,
    lastPrice: 120.0,
    currentPrice: 99.0,
  },
];
