import React from "react";
import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { useForm } from "react-hook-form";

const AllUsers = () => {
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
        <h1 className="text-2xl text-black text-center font-bold">All Users</h1>
        <div className="flex flex-row flex-wrap justify-between items-center p-4"></div>
        {/* User Info */}
        <div className="min-h-screen w-full p-5">
          <div>
            <h4 className="text-lg md:text-xl lg:text-2xl text-text-dark font-Poppins font-bold mt-10 mb-5">
              Total Users : {users?.length ? users?.length : 0}
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-[90%] border border-gray-100 my-6">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="py-4 px-6 text-lg text-left border-b">#</th>
                    <th className="py-4 px-6 text-lg text-left border-b">
                      Name
                    </th>
                    <th className="py-4 px-6 text-lg text-left border-b">
                      Email
                    </th>
                    <th className="py-4 px-6 text-lg text-left border-b">
                      Role
                    </th>
                    <th className="py-4 px-6 text-lg border-b text-end">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => (
                    <tr
                      key={user._id}
                      className="hover:bg-gray-50 border-b transition duration-300"
                    >
                      <td className="py-4 px-4 mx-auto">{index + 1}</td>
                      <td className="py-4 px-4 flex">
                        {user?.name ? user?.name : "Data Not Found"}
                      </td>
                      <td className="py-4 px-6 border-b text-xl font-medium">
                        {user?.email ? user?.email : "Data Not Found"}
                      </td>
                      <td className="py-4 px-6 border-b text-lg font-medium">
                        {user.role === "admin" ? (
                          "Admin"
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="bg-primary-color scale-100 transition-all duration-100 text-black text-xl p-3 rounded-full"
                          >
                            <FaUserShield />
                          </button>
                        )}
                      </td>
                      <td className="py-4 px-6 border-b text-end">
                        <button
                          onClick={() => handleDeleteUser(user?._id)}
                          className="bg-rose-500  scale-100 transition-all duration-100 text-white p-3 rounded-full"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

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
