import React, { useState } from "react";
import imag2 from "../../../../../assets/errorImage.png";
const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div className="p-6 bg-white w-full">
      {/* Title and Subtitle */}
      <div className="mb-4">
        <h1 className="text-xl font-bold">Order History</h1>
        <p className="text-sm text-gray-500">Track, return or purchase items</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6 w-full">
        <ul className="flex space-x-4">
          {["Current", "Delivered", "Canceled", "Returned"].map((tab) => (
            <li
              key={tab.toLowerCase()}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`cursor-pointer pb-2 text-sm ${
                activeTab === tab.toLowerCase()
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
            >
              {tab} <span className="text-xs">0</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Empty State */}
      <div className="flex flex-col justify-center items-center text-center py-16">
        {/* Icon (Replace with actual image or SVG) */}
        <img src={imag2} alt="Empty Orders" className="w-24 h-24" />
        <p className="text-gray-500 mt-4">You have not placed any orders yet</p>
      </div>
    </div>
  );
};

export default OrderHistory;
