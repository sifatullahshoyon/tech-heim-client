import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';
const FacebookMsg = () => {
    return (
        <div>
            <FacebookProvider appId="554825507079623" chatSupport>
                <CustomChat pageId="462381646954237" minimized={true} />
            </FacebookProvider>
        </div>
    );
};

export default FacebookMsg;