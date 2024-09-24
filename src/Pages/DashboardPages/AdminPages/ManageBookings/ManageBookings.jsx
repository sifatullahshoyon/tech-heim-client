import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";

const ManageBookings = () => {
  const [loading, isLoading] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col justify-start min-h-screen w-full">
      {/* Navigation */}
      <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* content */}
      <div>
        <h1 className="text-2xl text-black text-center font-bold">
          Manage Bookings
        </h1>
        <div className="flex flex-row flex-wrap justify-between items-center p-4"></div>
        {/* Cart Info */}
        <div className="min-h-screen w-full p-5">
          <>
            <div className="flex flex-row flex-wrap justify-around items-center my-5">
              <h2 className="text-xl font-bold font-Poppins text-text-dark">
                {/* Items: {cart?.length ? cart?.length : 0} */}
                items: 0
              </h2>
              <h2 className="text-xl font-bold font-Poppins text-text-dark">
                {/* Total Price: ${totalItems ? totalItems : 0} */}
                total price:0
              </h2>
              {cart?.length ? (
                <Link to="/dashboard/payment">
                  <button className="btn btn-primary">Pay</button>
                </Link>
              ) : (
                <button className="btn btn-primary"></button>
              )}
            </div>
            {/* Product Info */}
            <div className="overflow-x-auto">
              <table className="min-w-[90%] border border-gray-100 my-6">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="py-4 px-6 text-lg text-left border-b">#</th>
                    <th className="py-4 px-6 text-lg text-left border-b">
                      Product Image
                    </th>
                    <th className="py-4 px-6 text-lg text-left border-b">
                      Product Name
                    </th>
                    <th className="py-4 px-6 text-lg text-left border-b">
                      Price
                    </th>
                    <th className="py-4 px-6 text-lg border-b text-end">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!isLoading ? (
                    //   <Loader />
                    <h1>loading......</h1>
                  ) : (
                    cart?.map((item, index) => (
                      <tr
                        key={item._id}
                        className="hover:bg-gray-50 border-b transition duration-300"
                      >
                        <td className="py-4 px-4 mx-auto">{index + 1}</td>
                        <td className="py-4 px-4 flex">
                          <img
                            src={
                              item?.img_link ? item?.img_link : "Img Not Found"
                            }
                            alt="item img"
                            className="h-16 w-16 object-cover "
                          />
                        </td>
                        <td className="py-4 px-6 border-b text-xl font-medium">
                          {item?.heading ? item?.heading : "Data Not Found"}
                        </td>
                        <td className="py-4 px-6 border-b text-lg font-medium">
                          ${item?.price ? item?.price : 0}
                        </td>
                        <td className="py-4 px-6 border-b text-end">
                          <div className="flex gap-5 flex-wrap justify-end">
                            <button
                              onClick={() => handleItemDelete(item?._id)}
                              className="bg-teal-500  scale-100 transition-all duration-100 text-white p-3 rounded-full"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleItemDelete(item?._id)}
                              className="bg-rose-500  scale-100 transition-all duration-100 text-white p-3 rounded-full"
                            >
                              <FaTrashAlt />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default ManageBookings;

const users = [
  {
    _id: 1,
    displayName: "jhon",
  },
  {
    _id: 2,
    displayName: "Jack",
  },
];

const cart = [
  {
    _id: 1,
    img_link: "img",
    heading: "name",
    price: 20,
  },
  {
    _id: 2,
    img_link: "img",
    heading: "name",
    price: 20,
  },
];
