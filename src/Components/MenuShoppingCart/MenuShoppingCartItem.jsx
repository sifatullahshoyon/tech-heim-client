import React from "react";
import { ImageDisplayControl } from "@frameright/react-image-display-control";
import { FaTrash } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const MenuShoppingCartItem = ({ shoppingItem }) => {
  const location = useLocation();
  const isCheckoutPage = location?.pathname?.includes("checkout");
  return (
    <div
      className={`card card-side bg-base-100 ${
        isCheckoutPage ? "" : "shadow-xl"
      }`}
    >
      <figure>
        <ImageDisplayControl>
          <img src={shoppingItem.img} />
        </ImageDisplayControl>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-balance">{shoppingItem.title}</h2>
        <p className="flex gap-1 items-center text-blue-500 text-base">
          {shoppingItem.deliveryIcon}{" "}
          <p className="text-[#717171]">{shoppingItem.delivery}</p>
        </p>
        <p className="flex gap-1 items-center text-blue-500 text-base">
          {shoppingItem.guaranteedIcon}{" "}
          <p className="text-[#717171]">{shoppingItem.guaranteed}</p>
        </p>
        <div className="card-actions justify-between items-center">
          <p>${shoppingItem.price}</p>
          <div className="flex items-center gap-2">
            <FaTrash className="text-rose-500" />
            <div className="flex gap-3 border-b">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuShoppingCartItem;
