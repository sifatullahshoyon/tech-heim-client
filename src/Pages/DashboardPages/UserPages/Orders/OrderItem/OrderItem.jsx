import React from "react";
import { Link } from "react-router-dom";

const OrderItem = ({ order }) => {
  const {
    orderCode,
    placedOn,
    total,
    delivered,
    sentTo,
    products = [],
    address,
  } = order;

  return (
    <div className="border rounded-lg p-6 mb-8 ">
      {/* Order Details */}
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-2">
          <p>
            <span className="font-semibold text-gray-800">Order Code:</span>{" "}
            <span className="text-gray-600">{orderCode}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-800">Placed on:</span>{" "}
            <span className="text-gray-600">{placedOn}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-800">Total:</span>{" "}
            <span className="text-green-600">${total}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-800">Delivered:</span>{" "}
            <span
              className={`${
                delivered ? "text-green-600" : "text-red-600"
              } font-semibold`}
            >
              {delivered ? "Yes" : "No"}
            </span>
          </p>
        </div>
        <div className="relative group">
          <p className="font-semibold text-gray-800">{sentTo}</p>
          {/* Dropdown for address on hover */}
          <div className="absolute left-0 mt-1 hidden group-hover:block bg-white border p-3 rounded-lg shadow-lg w-64 text-gray-600 z-10">
            <p className="text-sm">{address}</p>
          </div>
        </div>
      </div>

      {/* Product Images */}
      <div className="flex justify-between items-center space-x-4 mt-4">
        {products.length > 0 ? (
          products
            .slice(0, 5)
            .map((product, index) => (
              <img
                key={index}
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-contain rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              />
            ))
        ) : (
          <p>No products available</p>
        )}

        {/* Display +x for additional products */}
        {products.length > 5 && (
          <div className="flex items-center justify-center w-16 h-16 border rounded-full bg-gray-100 text-gray-500 shadow-sm">
            +{products.length - 5}
          </div>
        )}

        {/* Order Status Link */}
        <Link
          to="/dashboard/order-status"
          className="ml-4 text-blue-500 px-4 py-2 rounded-lg shadow transition-colors"
        >
          View Status
        </Link>
      </div>
    </div>
  );
};

export default OrderItem;
