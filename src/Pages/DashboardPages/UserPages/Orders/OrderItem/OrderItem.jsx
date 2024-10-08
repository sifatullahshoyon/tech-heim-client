import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaCalendarAlt,
  FaDollarSign,
  FaCheckCircle,
  FaSpinner,
  FaUser,
} from "react-icons/fa";

const OrderItem = ({ order, user }) => {
  const {
    paymentId,
    amount,
    customerEmail,
    customerName,
    timestamp,
    status,
    cart = [],
  } = order;
  const mainProduct = cart[0]?.product || {};
  const { galleryImages = [] } = mainProduct;

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-xl p-8 mb-8 transition-all duration-300 hover:shadow-2xl border border-gray-200">
      <div className="flex flex-col lg:flex-row justify-between items-start md:items-center mb-8">
        <div className="space-y-4 mb-4 md:mb-0">
          <p className="flex items-center text-gray-800 text-lg">
            <FaShoppingBag className="mr-3 text-blue-600" />
            <span className="font-semibold">Order ID:</span>
            <span className="ml-2 text-gray-700 font-mono">{paymentId}</span>
          </p>
          <p className="flex items-center text-gray-800 text-lg">
            <FaCalendarAlt className="mr-3 text-green-600" />
            <span className="font-semibold">Placed on:</span>
            <span className="ml-2 text-gray-700">
              {new Date(timestamp).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
          <p className="flex items-center text-gray-800 text-lg">
            <FaDollarSign className="mr-3 text-yellow-600" />
            <span className="font-semibold">Total:</span>
            <span className="ml-2 text-green-700 font-bold text-xl">
              ${amount.toFixed(2)}
            </span>
          </p>
        </div>
        <div className="relative group">
          <img
            src={user.photoURL}
            alt=""
            className="w-10 h-10 rounded-full border border-blue-500 "
          />
          <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border p-4 rounded-lg shadow-xl w-64 text-gray-700 z-10">
            <div className="flex items-center mb-2">
              <FaUser className="text-blue-500 mr-2" />
              <p className="font-semibold">{customerName || "User"}</p>
            </div>
            <p className="text-sm">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-8">
        <span className="font-semibold text-gray-800 mr-3 text-lg">
          Status:
        </span>
        <span
          className={`${
            status === "completed"
              ? "bg-green-200 text-green-800"
              : "bg-yellow-200 text-yellow-800"
          } px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-sm`}
        >
          {status === "completed" ? (
            <FaCheckCircle className="mr-2" />
          ) : (
            <FaSpinner className="mr-2 animate-spin" />
          )}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="flex flex-wrap justify-start items-center gap-4 mt-6 bg-white p-4 rounded-lg shadow-inner">
        {galleryImages.length > 0 ? (
          galleryImages
            .slice(0, 5)
            .map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border-2 border-gray-200"
              />
            ))
        ) : (
          <p className="text-gray-500 italic">No images available</p>
        )}

        {galleryImages.length > 5 && (
          <div className="flex items-center justify-center w-20 h-20 border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-600 font-semibold shadow-sm">
            +{galleryImages.length - 5}
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <Link
          to={`/dashboard/order-status/${paymentId}`}
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg font-semibold"
        >
          View Status
        </Link>
      </div>
    </div>
  );
};

export default OrderItem;
