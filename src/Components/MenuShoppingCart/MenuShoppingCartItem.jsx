import React from "react";
import { ImageDisplayControl } from "@frameright/react-image-display-control";
import { FaTrash } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { LuBadgeCheck } from "react-icons/lu";
import useAxiosPublic from "../Hooks/useAxiosPublic/useAxiosPublic";
import useAuth from "../Hooks/useAuth/useAuth";

const MenuShoppingCartItem = ({ shoppingItem }) => {
  const axiosPublic = useAxiosPublic();
  const { user, wistList, fetchWishList, cartProduct, cartProductID, fetchCartDetails,setCartProduct } = useAuth();
  const userEmail = user?.email;
  // Function to remove a product from the cart
  const handleRemoveFromCart = async (userEmail, productId) => {
    console.log(userEmail, productId)
    try {
      const response = await axiosPublic.delete("/cart/delete", {
        data: { userEmail, productId }, // Sending userEmail and productId in the request body
      });

      
        const updatedCart = response.data.updatedCart;

        console.log(updatedCart)
        
        fetchCartDetails();
       
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };
  const location = useLocation();
  const isCheckoutPage = location?.pathname?.includes("checkout");
  return (
    <div className={`card card-side ${isCheckoutPage ? "" : "shadow-xl"}`}>
      <figure>
        <ImageDisplayControl>
          <img src={shoppingItem?.product?.featureImage} className="w-[200px]" />
        </ImageDisplayControl>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-balance">{shoppingItem?.product?.name}</h2>
        <p className="flex gap-1 items-center text-blue-500 text-base">
          <TbTruckDelivery /> <p className="text-[#717171]">free delivery</p>
        </p>
        <p className="flex gap-1 items-center text-blue-500 text-base">
          <LuBadgeCheck /> <p className="text-[#717171]">Guaranteed</p>
        </p>
        <div className="card-actions justify-between items-center">
          {shoppingItem?.product?.sellPrice ? (
            <p>${shoppingItem?.product?.sellPrice}</p>
          ) : (
            <p>${shoppingItem?.product?.regularPrice}</p>
          )}
          <div className="flex items-center gap-2">
            <button onClick={() => handleRemoveFromCart(userEmail, shoppingItem?.product?._id)}>
              <FaTrash className="text-rose-500" />
            </button>
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
