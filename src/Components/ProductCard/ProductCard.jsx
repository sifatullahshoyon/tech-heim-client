import { Link } from "react-router-dom";
import p1 from "../../assets/image1.png";
import line from "../../assets/Line.png";

import { FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
const ProductCard = ({ pc }) => {
  console.log(pc);

  const {
    category,
    color,
    driveSize,
    featureImage,
    gpuBrand,
    modelName,
    name,
    processor,
    ram,
    rate,
    regularPrice,
    screenSize,
    sellPrice,
    stock,
    _id,
  } = pc;

  const fullStars = Math.floor(rate); // Get the number of full stars
  const hasHalfStar = rate % 1 !== 0; // Check if there is a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Calculate empty stars

  return (
    <div className="flex flex-grow">
      <div className="w-full max-w-sm bg-white shadow-md border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 ">
        {sellPrice ? (
          <>
            <div className="w-[50px] h-[32px]  px-[6px] bg-[#FDDBC9] py-[4px] mt-[10px] rounded-r-[8px]">
              <p className="text-[16px] font-light text-[#F45E0C]">
                {-(( Math.round(regularPrice - sellPrice) ) / 100) * 100}%
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="w-[50px] h-[32px]  px-[6px] bg-[white] py-[4px] mt-[10px] rounded-r-[8px]"></div>
          </>
        )}

        <a href="#">
          <img
            className="p-8 pb-0 w-[400px] rounded-t-lg transform transition-transform duration-300 hover:scale-110"
            src={featureImage}
            alt="product image"
          />
          <img className="p-2 rounded-t-lg" src={line} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name?.slice(0, 68)}...
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {/* Render full stars */}
              {Array(fullStars)
                .fill()
                .map((_, index) => (
                  <FaStar key={index} className="text-orange-400" />
                ))}

              {/* Render half star if there is one */}
              {hasHalfStar && <FaStarHalfAlt className="text-orange-400" />}

              {/* Render empty stars */}
              {Array(emptyStars)
                .fill()
                .map((_, index) => (
                  <FaRegStar key={index} className="text-gray-300" />
                ))}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {rate}
            </span>
          </div>

          <div className="flex items-center justify-between">
            {sellPrice ? (
              <>
                <del className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${regularPrice}
                </del>

                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${sellPrice}
                </span>
              </>
            ) : (
              <>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${regularPrice}
                </span>
              </>
            )}
          </div>
          <div className="flex justify-evenly mt-[30px]">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <Link className="flex items-center " to="">
                {" "}
                <FaShoppingCart className="mr-[5px]" />
                <span>Add to cart</span>
              </Link>
            </button>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <Link to={`/productDetails/${_id}`} className="flex items-center ">
                {" "}
                <span>View Details</span>
                <IoIosArrowRoundForward className="mr-[5px]" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
