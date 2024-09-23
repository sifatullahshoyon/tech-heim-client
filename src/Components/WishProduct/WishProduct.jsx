import { BsCart4 } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import line from "../../assets/product/Line.png";

const WishProduct = ({ pc }) => {
  console.log(pc);
  return (
    <div className="p-[16px] rounded-[8px] shadow-md  mx-auto">
      <div className="text-center">
        <img className="w-[255px] h-[190px] mx-auto" src={pc} alt="" />
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
  );
};

export default WishProduct;
