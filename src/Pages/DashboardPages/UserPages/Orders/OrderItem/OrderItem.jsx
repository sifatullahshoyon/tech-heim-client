import React from "react";

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
    <div className="border rounded-lg p-4 mb-6">
      {/* Order Details */}
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Order Code:</span> {orderCode}
          </p>
          <p>
            <span className="font-semibold">Placed on:</span> {placedOn}
          </p>
          <p>
            <span className="font-semibold">Total:</span> ${total}
          </p>
          <p>
            <span className="font-semibold">Delivered:</span>{" "}
            {delivered ? "Yes" : "No"}
          </p>
        </div>
        <div className="relative">
          <p className="font-semibold">{sentTo}</p>
          {/* Dropdown for address on hover */}
          <div className="absolute left-0 mt-1 hidden group-hover:block bg-gray-50 border p-2 rounded shadow-lg">
            {address}
          </div>
        </div>
      </div>

      {/* Product Images */}
      <div className="flex items-center space-x-4">
        {products.length > 0 ? (
          products
            .slice(0, 5)
            .map((product, index) => (
              <img
                key={index}
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-contain"
              />
            ))
        ) : (
          <p>No products available</p>
        )}
        {/* Display +x for additional products */}
        {products.length > 5 && (
          <div className="flex items-center justify-center w-12 h-12 border rounded-full text-gray-500">
            +{products.length - 5}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderItem;
