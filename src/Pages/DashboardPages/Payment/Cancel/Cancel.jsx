import React from "react";
import { Link } from "react-router-dom";
import { FcCancel } from "react-icons/fc";

const Cancel = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl p-5 rounded-full shadow-lg mb-5">
          <FcCancel className="font-bold" />
        </h1>
        <h2 className="text-4xl mb-8 font-semibold text-rose-600">
          Payment Cancel
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

export default Cancel;
