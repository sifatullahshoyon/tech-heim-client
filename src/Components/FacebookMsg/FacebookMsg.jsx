import React, { useEffect } from 'react';

const FacebookMsg = () => {
    useEffect(() => {
        // Initialize the Facebook SDK when the component mounts
        if (window.FB) {
            window.FB.init({
                appId: '554825507079623',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v16.0',
            });
            window.FB.XFBML.parse(); // Re-render any Facebook SDK widgets
        }
    }, []);

    return (
        <div>
            <div className="fb-customerchat"
                attribution="setup_tool"
                page_id="2603869209623788"
                theme_color="#0084ff"
                logged_in_greeting="Hi! How can we help you?"
                logged_out_greeting="Please log in to chat with us.">
            </div>
        </div>
    );
};

export default FacebookMsg;
