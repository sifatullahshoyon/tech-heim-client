import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure/useAxiosSecure";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Components/Shared/LoadingSpiner/LoadingSpinner";
import { Link } from "react-router-dom";

const RecentPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axiosSecure.get("/blogs/list");
        setBlogs(res.data);
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [axiosSecure]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  return (
    <div className="mt-8 w-full mx-auto">
      <h2 className="text-2xl font-semibold">Recent Posts</h2>

      <div className="max-w-[700px] w-full space-y-4 my-4">
        {blogs.map((blog) => (
          <Link to={`/blog/blogDetails/${blog._id}`} key={blog.id}>
            <div
              key={blog._id}
              className="grid grid-cols-12 gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 mx-auto"
            >
              {/* Image */}
              <div className="col-span-4">
                <img
                  src={blog.imgSrc}
                  alt={blog.title}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>

              {/* Blog Content */}
              <div className="col-span-8">
                <h2
                  className={`text-lg font-semibold ${
                    blog.highlighted ? "text-orange-500" : "text-gray-800"
                  }`}
                >
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {truncateDescription(blog.description, 10)}
                  {blog.description.split(" ").length > 10 && (
                    <button className="text-blue-500 hover:underline ml-1">
                      See more
                    </button>
                  )}
                </p>
                <div className="flex items-center mt-3 text-sm text-gray-500 space-x-2">
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
