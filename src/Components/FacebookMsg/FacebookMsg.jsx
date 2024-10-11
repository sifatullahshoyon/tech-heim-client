import React from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

const FacebookMsg = () => {
    return (
        <FacebookProvider appId="2049769512102763" chatSupport>
            <CustomChat pageId="462381646954237" minimized={true} />
        </FacebookProvider>
    );
};

export default FacebookMsg;