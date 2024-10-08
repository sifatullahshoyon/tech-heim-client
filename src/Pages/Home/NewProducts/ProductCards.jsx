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
      const result = await axiosPublic.get('/products/all/homePage')
      return result.data
    }
  })
  console.log(products)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-6">
      {products?.slice(0, 4)?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductCards;

const newProducts = [
  {
    _id: 1,
    title: "Logitech G502 Gaming Mouse",
    img: img1,
    discount: 50,
    lastPrice: 38.0,
    currentPrice: 19.0,
    ratings: 4.5,
  },
  {
    _id: 2,
    title:
      "NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design",
    img: img1,
    discount: 30,
    lastPrice: 49.0,
    currentPrice: 34.0,
    ratings: 3.5,
  },
  {
    _id: 3,
    title: "Apple Watch Series 7 (GPS, 41MM)",
    img: img1,
    discount: 20,
    lastPrice: 289.0,
    currentPrice: 231.0,
    ratings: 4.4,
  },
  {
    _id: 4,
    title: "Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)",
    img: img1,
    discount: 25,
    lastPrice: 950.0,
    currentPrice: 712.0,
    ratings: 7.5,
  },
  {
    _id: 5,
    title: "Samsung Titan Smart Watch",
    img: img1,
    discount: 17,
    lastPrice: 120.0,
    currentPrice: 99.0,
    ratings: 4.5,
  },
  {
    _id: 6,
    title: "Logitech G502 Gaming Mouse",
    img: img1,
    discount: 50,
    lastPrice: 38.0,
    currentPrice: 19.0,
    ratings: 6.5,
  },
  {
    _id: 7,
    title:
      "NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design",
    img: img1,
    discount: 30,
    lastPrice: 49.0,
    currentPrice: 34.0,
    ratings: 5.5,
  },
  {
    _id: 8,
    title: "Apple Watch Series 7 (GPS, 41MM)",
    img: img1,
    discount: 20,
    lastPrice: 289.0,
    currentPrice: 231.0,
    ratings: 6.9,
  },
  {
    _id: 9,
    title: "Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)",
    img: img1,
    discount: 25,
    lastPrice: 950.0,
    currentPrice: 712.0,
    ratings: 8.5,
  },
  {
    _id: 10,
    title: "Samsung Titan Smart Watch",
    img: img1,
    discount: 17,
    lastPrice: 120.0,
    currentPrice: 99.0,
    ratings: 5,
  },
];
