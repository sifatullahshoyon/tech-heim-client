import React from 'react';
import Banner from './Banner';
import ProductOnSell from './ProductOnSell/ProductOnSell';

// import ProductsInfo from './ProductsInfo';

const Home = () => {
    return (
        <div>
           <Banner />
           {/* TODO */}
           {/* <ProductsInfo /> */}
            <ProductOnSell />
        </div>
    );
};

export default Home;