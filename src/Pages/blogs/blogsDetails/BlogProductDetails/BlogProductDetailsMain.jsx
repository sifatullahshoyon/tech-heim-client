import React from "react";
import BlogProductDetails from "./blogProductDetails/BlogProductDetails";

const BlogProductDetailsMain = () => {
  return (
    <div className="container mx-auto px-4 my-2">
      <div className="my-10 flex items-center space-x-2">
        <span>Home</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-5 h-5 fill-gray-500"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </span>
        <span className="">Blog</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-5 h-5 fill-gray-500"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </span>
        <span className="text-blue-500 underline underline-offset-4">
          Headphone
        </span>
      </div>

      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-4 max-w-[1200px] my-6">
        <div className="col-span-1 lg:col-span-2 w-full">
          <BlogProductDetails />
        </div>
        {/* Right Section */}
        <div className="col-span-1">asdfa</div>
      </div>
    </div>
  );
};

export default BlogProductDetailsMain;
