import React from "react";
import Banner from "./Banner";
import ProductOnSell from "./ProductOnSell/ProductOnSell";
import NewProducts from "./NewProducts/NewProducts";
import Prebook from "./Prebook/Prebook";
import BestSellers from "./BestSellers/BestSellers";
import ProductsInfo from "./ProductsInfo/ProductsInfo";
import AnotherHomePage from "../AnotherHomePage/AnotherHomePage";

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsInfo />
      <ProductOnSell />
      <NewProducts />
      <div className="flex justify-center"><Prebook /></div>
      <BestSellers />
      <AnotherHomePage />
    </>
  );
};

export default Home;
