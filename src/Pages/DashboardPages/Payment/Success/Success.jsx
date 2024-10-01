import React from "react";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";

const Success = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col md:w-[442px] md:h-[530px] border p-6 rounded text-center shadow">
          <h1 className=" text-center mb-5">
            <TiTick className="text-green-600 font-medium mx-auto text-7xl p-3 rounded-full shadow-lg" />
          </h1>
          <h2 className="text-4xl mb-8 font-semibold text-green-600">
            Successful Payment
          </h2>
          <p className="text-base text-center text-[#505050] mb-6 text-balance">
            Congratulation
          </p>
          {/* Payment Info */}
          <div className="mb-5">
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-light">
                Payment Type:
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                Net Banking
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-light">
                Email :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                JimmySmith1996@gmail.com
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-light">
                Transaction Id :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                2345678910
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-light">
                Amount Paid :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                $543.02
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end mt-5">
            <Link to="/dashboard/order-status">
              <button className="btn bg-blue-500 hover:bg-blue-600 border-0 text-white w-[187px] h-12 text-base">
                Order Status
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
