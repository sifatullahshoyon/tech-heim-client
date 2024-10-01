import React from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Fail = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl p-5 rounded-full shadow-lg mb-5">
          <FaXmark className="text-rose-600 font-bold" />
        </h1>
        <h2 className="text-4xl mb-8 font-semibold text-rose-600">
          Payment Failed
        </h2>
        <p className="text-base text-center text-[#505050] mb-6 text-balance">
          Unfortunately we have an issue with your <br /> payment, try again
          later.
        </p>
        <Link to="/payment">
          <button className="btn bg-blue-500 hover:bg-blue-600 border-0 text-white ml-10S">
            Try Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Fail;
