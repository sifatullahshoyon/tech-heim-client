import React, { useContext, useEffect } from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import img1 from "../../assets/images/products/laptop.png";
import MenuShoppingCartItem from "./MenuShoppingCartItem";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const MenuShoppingCart = () => {

  const { cartProduct ,fetchCartDetails} = useContext(AuthContext);
  const { cart, totalPrice } = cartProduct;
  const location = useLocation();
  const isCarts = location?.pathname?.includes("carts");
  const isCheckout = location?.pathname?.includes("checkout");

  console.log(cart?.length)

  return (
    <div>
      {cart?.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-gray-500">Your cart is currently empty. Start adding items!</p>
        </div>
      ) : (
        <div className=" flex flex-col">
          {/* Total Item */}
          {!isCheckout ? <p className="text-sm md:text-lg">{cart?.length} items</p> : ""}
          {/* Cart Info */}
          <div className="my-2 flex flex-col gap-3">
            {/* Single Cart Info */}
            {cart?.map((Item, i) => (
              <MenuShoppingCartItem key={i} shoppingItem={Item} />
            ))}
          </div>
          {/* Total &  proceed to cart */}
          {!isCarts && !isCheckout ? (
            <div className="flex items-center w-full mt-2">
              <div className="flex flex-col mr-2">
                <p>Grand total</p>
                <p>${totalPrice}</p>
              </div>
              <div className="w-4/5">
                <button className="btn bg-[#0C68F4] hover:bg-blue-800 text-white  w-full flex">
                  Proceed to Cart <FaShoppingCart />{" "}
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default MenuShoppingCart;
