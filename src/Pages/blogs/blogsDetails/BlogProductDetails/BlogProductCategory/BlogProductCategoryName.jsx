import React from "react";
import RecentPost from "../../../RecentPost";
import Tags from "./Tags";

const BlogProductCategoryName = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold ">Categories</h2>

      <ul>
        <li className="my-2">Technology Trends and News</li>
        <li className="my-2">Gaming Insights</li>
        <li className="my-2">Security and Privacy</li>
        <li className="my-2">Tech Lifestyle and Productivity</li>
        <li className="my-2">Product Spotlight</li>
        <li className="my-2">How-to Guides and Tutorials</li>
        <li className="my-2">Buying Guides and Tips</li>
      </ul>
      <RecentPost />
      <Tags />
      <h2 className="text-2xl font-semibold my-6">Share</h2>
    </div>
  );
};

export default BlogProductCategoryName;
