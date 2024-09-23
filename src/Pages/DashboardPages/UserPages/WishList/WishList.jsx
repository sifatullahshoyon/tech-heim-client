import img1 from "../../../../assets/product/image1.png";
import img2 from "../../../../assets/product/image2.png";
import img3 from "../../../../assets/product/image3.png";
import img4 from "../../../../assets/product/image4.png";
import img5 from "../../../../assets/product/image5.png";
import img6 from "../../../../assets/product/image6.png";
import line from "../../../../assets/product/Line.png";
import { BsCart4 } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
const WishList = () => {
  return (
    <div className="container mx-auto px-[10px] md:px-[10px]  ">
      {/* Breadcrumb start  */}
      <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* Breadcrumb end  */}
      <div className="mt-[15px] mb-[50px]">
        <h1 className="text-[20px] font-medium">Wish list</h1>
        <p className="text-[#717171] text-[16px] font-light">See your favorites list here</p>
      </div>

      <div>
        {([1, 2, 3, 4, 5, 6, 7, 8, 9] || []).length > 0 ? (
          <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pc) => (
              <div className="p-[16px] rounded-[8px] shadow-md  mx-auto">
                <div className="text-center">
                  <img className="w-[255px] h-[190px] mx-auto" src={img1} alt="" />
                  <img className=" my-[16px] " src={line} alt="" />
                </div>
                <p className="text-[16px] font-light text-[#063A88]">
                  APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver
                </p>
                <div className="mt-[8px] flex items-center justify-between">
                  <button className="btn text-[#0C68F4] text-[16px] font-normal rounded-[8px]">
                    <BsCart4></BsCart4>
                    Add to cart
                  </button>
                  <button>
                    <RiDeleteBin2Fill className="text-[red] text-[24px]"></RiDeleteBin2Fill>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-32">
            <p className="text-center text-gray-500 text-base md:text-lg lg:text-xl">
              No products available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
