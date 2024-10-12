import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';
const FacebookMsg = () => {
    return (
        <div>
            <FacebookProvider appId="554825507079623" chatSupport>
                <CustomChat pageId="2603869209623788" minimized={true} />
            </FacebookProvider>
        </div>
    );
};

export default FacebookMsg;