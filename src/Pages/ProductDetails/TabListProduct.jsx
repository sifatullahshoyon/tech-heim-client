import React, { useState } from 'react';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TechnicalDetails from './TabListComponents/TechnicalDetails';
import SimilarProduct from './TabListComponents/SimilarProduct';
import Comments from './TabListComponents/Comments';

const TabListProduct = ({ product }) => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='mt-20'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList role="tablist" className='tabs  tabs-bordered lg:max-w-screen-xl	max-w-screen-sm mx-auto '>
                    <Tab role="tab" className="tab pr-4  text-2xl font-semibold">Technical Details</Tab>
                    <Tab role="tab" className="tab text-2xl font-semibold">Similar Product</Tab>
                    <Tab role="tab" className="tab text-2xl font-semibold">Comments</Tab>
                </TabList>

                {/* tab-1  */}
                <TabPanel>
                    <TechnicalDetails product={product} key={product._id}></TechnicalDetails>
                </TabPanel>
                {/* tab-2 */}
                <TabPanel>
                    <SimilarProduct></SimilarProduct>
                </TabPanel>
                {/* tab-3  */}
                <TabPanel>
                    <Comments></Comments>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabListProduct;