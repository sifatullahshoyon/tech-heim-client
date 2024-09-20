import React from 'react';
import Banner from './Banner';
import ProductOnSell from './ProductOnSell/ProductOnSell';
import NewProducts from './NewProducts/NewProducts';
import Prebook from './Prebook/Prebook';

// import ProductsInfo from './ProductsInfo';

const Home = () => {
    return (
        <div>
           <Banner />
           {/* TODO */}
           {/* <ProductsInfo /> */}
            <ProductOnSell />
            <NewProducts />
            <Prebook />
        </div>
    );
};

export default Home;