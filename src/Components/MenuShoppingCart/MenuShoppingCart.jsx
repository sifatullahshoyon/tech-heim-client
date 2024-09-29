import React from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import img1 from "../../assets/images/products/laptop.png";
import MenuShoppingCartItem from "./MenuShoppingCartItem";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const MenuShoppingCart = () => {
  const location = useLocation();
  const isCarts = location?.pathname?.includes("carts");
  return (
    <div className=" flex flex-col">
      {/* Total Item */}
      <p className="text-sm md:text-lg">3 items</p>
      {/* Cart Info */}
      <div className="my-2 flex flex-col gap-3">
        {/* Single Cart Info */}
        {shoppingItemsArray?.map((shoppingItem) => (
          <MenuShoppingCartItem
            key={shoppingItem._id}
            shoppingItem={shoppingItem}
          />
        ))}
      </div>
      {/* Total &  proceed to cart */}
      {!isCarts ? (
        <div className="flex items-center w-full mt-2">
          <div className="flex flex-col mr-2">
            <p>Grand total</p>
            <p>$543.02</p>
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
  );
};

export default MenuShoppingCart;

const shoppingItemsArray = [
  {
    _id: 1,
    img: img1,
    title: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
    deliveryIcon: <TbTruckDelivery />,
    delivery: "free delivery",
    guaranteedIcon: <LuBadgeCheck />,
    guaranteed: "Guaranteed",
    price: 433.33,
  },
  {
    _id: 1,
    img: img1,
    title: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
    deliveryIcon: <TbTruckDelivery />,
    delivery: "free delivery",
    guaranteedIcon: <LuBadgeCheck />,
    guaranteed: "Guaranteed",
    price: 433.33,
  },
  {
    _id: 1,
    img: img1,
    title: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
    deliveryIcon: <TbTruckDelivery />,
    delivery: "free delivery",
    guaranteedIcon: <LuBadgeCheck />,
    guaranteed: "Guaranteed",
    price: 433.33,
  },
];
