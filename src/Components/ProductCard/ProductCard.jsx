import p1 from "../../assets/image1.png";
import line from "../../assets/Line.png";
import { FaRegStar } from "react-icons/fa";
const ProductCard = () => {
  return (
    <div>
      <div className="w-full max-w-sm bg-white shadow-md border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        <div className="w-[50px] h-[32px]  px-[6px] bg-[#FDDBC9] py-[4px] mt-[10px] rounded-r-[8px]">
          <p className="text-[16px] font-light text-[#F45E0C]">-12%</p>
        </div>
        <a href="#">
          <img className="p-8 pb-0 rounded-t-lg transform transition-transform duration-300 hover:scale-110" src={p1} alt="product image" />
          <img className="p-2 rounded-t-lg" src={line} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <FaRegStar className="text-orange-400 "></FaRegStar>
              <FaRegStar className="text-orange-400 "></FaRegStar>
              <FaRegStar className="text-orange-400 "></FaRegStar>
              <FaRegStar className="text-orange-400 "></FaRegStar>
              <FaRegStar className="text-orange-400 "></FaRegStar>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
