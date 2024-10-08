import React, { useEffect } from "react";
import img1 from "../../../assets/images/products/laptop.png";
import ProductCard from "../../../Components/Shared/Cards/ProductCard";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ProductCards = () => {
  const axiosPublic = useAxiosPublic()

  // Get all users
  const { data: products = [], refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const result = await axiosPublic.get('/products/all')
      return result.data
    }
  })
  console.log(products)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-6">
      {products?.slice(0, 4)?.reverse().map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductCards;
