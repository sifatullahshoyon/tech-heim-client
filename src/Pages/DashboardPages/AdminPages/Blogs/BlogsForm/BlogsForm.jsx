import React, { useState } from "react";
import useAxiosSecure from "../../../../../Components/Hooks/useAxiosSecure/useAxiosSecure";
import { toast } from "react-toastify";

const BlogsForm = () => {
  const axiosSecure = useAxiosSecure();
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    date: "August 28, 2023",
    timeRead: "3 min read",
    imgSrc: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormValues((prevValues) => ({
        ...prevValues,
        imgSrc: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formValues);
    // You can handle form submission here (e.g., send data to the server)
    axiosSecure.post('/blogs/add', formValues)
      .then((res) => {
        console.log(res)
        toast.success('Successfully added a blog')
      })
  };

  return (
    <div className="w-full   my-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            placeholder="Enter Blog title"
            value={formValues.title}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Description Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Enter Blog description"
            rows={4}
            value={formValues.description}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Date Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="text"
            name="date"
            className="input input-bordered w-full"
            value={formValues.date}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Time to Read Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Time to Read</span>
          </label>
          <input
            type="text"
            name="timeRead"
            className="input input-bordered w-full"
            placeholder="Enter estimated reading time"
            value={formValues.timeRead}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Image Upload */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            onChange={handleImageUpload}
          />
          {formValues.imgSrc && (
            <div className="mt-2">
              <img
                src={formValues.imgSrc}
                alt="Uploaded"
                className="h-12 w-auto rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogsForm;
