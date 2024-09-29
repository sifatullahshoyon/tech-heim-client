import React from "react";
import { Link } from "react-router-dom";

const GrandTotal = ({ props }) => {
  return (
    <div>
      <div className="divider"></div>
      <div className="flex justify-between mb-6">
        <p className="text-base text-black font-normal">Grand Total</p>
        <p>$543.02</p>
      </div>
      <div className="w-full">
        <Link to="/checkout">
          <button className="btn  bg-blue-500 hover:bg-blue-600 border-0 text-white w-full">
            {props}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GrandTotal;
