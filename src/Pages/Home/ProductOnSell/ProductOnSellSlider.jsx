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
    <div className="relative w-full">
      <Swiper
        // Responsiveness for Swiper based on screen size
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
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
            <div className="flex justify-center">
              <div className="rounded-lg hover:transition h-[237px]  hover:ease-in hover:duration-300  lg:max-w-[184px] bg-white overflow-hidden relative p-2 sm:w-auto ">
                <div className="badge absolute top-2 left-2 rounded bg-[#FDDBC9] text-black p-1">
                  -{pd.discount}%
                </div>
                <ImageDisplayControl>
                  <img
                    src={pd.img}
                    alt={pd.title}
                    className="w-full object-cover h-[150px] sm:h-[130px]"
                  />
                </ImageDisplayControl>
                <h4 className="text-xs text-black font-light mt-2">
                  {pd.title.length > 30
                    ? pd.title.slice(0, 30) + "..."
                    : pd.title}
                </h4>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-500 line-through text-sm sm:text-xs">
                    ${parseFloat(pd.lastPrice).toFixed(2)}
                  </p>
                  <p className="text-black font-semibold text-sm sm:text-xs">
                    ${parseFloat(pd.currentPrice).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom position for navigation buttons */}
      <div className="absolute bottom-2 lg:-bottom-10 right-2 z-10 flex items-center gap-2">
        <button
          ref={prevRef}
          className="btn swiper-button-prev-custom  shadow-lg text-black p-2 rounded-full cursor-pointer"
        >
          <IoIosArrowBack />
        </button>
        <button
          ref={nextRef}
          className="btn swiper-button-next-custom  shadow-lg text-black p-2 rounded-full cursor-pointer"
        >
          <IoIosArrowForward />
        </button>
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
