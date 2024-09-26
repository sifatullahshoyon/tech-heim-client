import { useState } from "react";
import axios from "axios";
import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../Components/Hooks/useAxiosSecure/useAxiosSecure";

const AddProducts = () => {
  const [loader, setLoader] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [product, setProduct] = useState({
    name: "",
    rate: "",
    regularPrice: "",
    sellPrice: "",
    brand: "",
    modelName: "",
    screenSize: "",
    driveSize: "",
    ram: "",
    processor: "",
    color: "",
    gpuBrand: "",
    category: "Laptop",
    stock: true,
  });

  const [featureImage, setFeatureImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const categories = [
    "Laptop",
    "Camera",
    "Watch",
    "Tab",
    "Data",
    "Device",
    "Game",
    "Mobile",
    "Headphone",
  ];

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFeatureImageChange = (e) => {
    setFeatureImage(e.target.files[0]);
  };

  const handleGalleryImageChange = (e) => {
    setGalleryImages([...e.target.files]);
  };

  const uploadImageToImageBB = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=97099935520e7352c4d76225795a2662`,
        formData
      );
      return response.data.data.url;
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();

    // Upload feature image
    const featureImageUrl = await uploadImageToImageBB(featureImage);

    // Upload gallery images
    const galleryImageUrls = await Promise.all(
      galleryImages.map((image) => uploadImageToImageBB(image))
    );

    const productData = {
      ...product,
      featureImage: featureImageUrl,
      galleryImages: galleryImageUrls,
    };

    // Make API call to add product
    try {
      await axiosSecure.post("/products/add", productData).then((res) => {
        if (res?.status == 200) {
          toast.success("Successfully Make admin");
          setLoader(false);
        }
      });
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product.");
      setLoader(false);
    }

    setProduct({
      name: "",
      rate: "",
      regularPrice: "",
      sellPrice: "",
      brand: "",
      modelName: "",
      screenSize: "",
      driveSize: "",
      ram: "",
      processor: "",
      color: "",
      gpuBrand: "",
      category: "Laptop",
      stock: true,
    });
  };
  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Breadcrumb start  */}
      <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* Breadcrumb end  */}
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Product Rate */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Product Rate</label>
          <input
            type="number"
            name="rate"
            value={product.rate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Prices */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Regular Price</label>
            <input
              type="number"
              name="regularPrice"
              value={product.regularPrice}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Sell Price</label>
            <input
              type="number"
              name="sellPrice"
              value={product.sellPrice}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Brand and Model */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Brand</label>
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Model Name</label>
            <input
              type="text"
              name="modelName"
              value={product.modelName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Screen Size</label>
            <input
              type="text"
              name="screenSize"
              value={product.screenSize}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Drive Size</label>
            <input
              type="text"
              name="driveSize"
              value={product.driveSize}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">RAM</label>
            <input
              type="text"
              name="ram"
              value={product.ram}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Processor</label>
            <input
              type="text"
              name="processor"
              value={product.processor}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Color</label>
            <input
              type="text"
              name="color"
              value={product.color}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">GPU Brand</label>
            <input
              type="text"
              name="gpuBrand"
              value={product.gpuBrand}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Product Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Stock */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Stock Status</label>
          <select
            name="stock"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value === "true" })}
            className="w-full p-2 border rounded"
            required
          >
            <option value="true">In Stock</option>
            <option value="false">Out of Stock</option>
          </select>
        </div>

        {/* Feature Image */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Feature Image</label>
          <input
            type="file"
            onChange={handleFeatureImageChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Gallery Images */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Gallery Images</label>
          <input
            type="file"
            multiple
            onChange={handleGalleryImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Submit Button */}
        {loader ? (
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            <span className="loading loading-dots loading-lg"></span>
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        )}
      </form>
    </div>
  );
};

export default AddProducts;
