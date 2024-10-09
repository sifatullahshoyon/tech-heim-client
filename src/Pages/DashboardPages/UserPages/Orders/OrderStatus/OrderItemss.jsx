import React from "react";

const OrderItemss = ({ items }) => {
  return (
    <div className="space-y-4">
      {items?.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover"
          />
          <div>
            <p className="font-semibold">{item.name}</p>
            <p>{item.color}</p>
          </div>
          <p className="text-right">
            ${item.price}{" "}
            {item.originalPrice && (
              <span className="text-gray-400 line-through">
                ${item.originalPrice}
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OrderItemss;
