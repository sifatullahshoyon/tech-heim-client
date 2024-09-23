import React, { useState } from "react";
import OrderItem from "../OrderItem/OrderItem";
import Tabs from "../../../../../Components/Tabs/Tabs";
import image1 from "../../../../../assets/headphones.png";
import image2 from "../../../../../assets/mobile.png";
import image3 from "../../../../../assets/Photos/Product-Details/apple.png";
import errorImg from "../../../../../assets/errorImage.png";

const OrderHistory = () => {
  const [selectedTab, setSelectedTab] = useState("current");

  const orders = {
    current: [
      {
        orderCode: "#8967856",
        placedOn: "2023/08/20",
        total: "10,998.00",
        delivered: "2023/08/22",
        sentTo: "Jimmy Smith",
        address: "31, Albuquerque, New York",
        products: [
          { name: "iMac", image: image1 },
          { name: "iPad", image: image2 },
          { name: "AirPods", image: image1 },
          { name: "iPhone", image: image2 },
        ],
      },
      {
        orderCode: "#8967856",
        placedOn: "2023/08/20",
        total: "10,998.00",
        delivered: "2023/08/22",
        sentTo: "Joy Dev",
        address: "31, Albuquerque, New York",
        products: [
          { name: "iMac", image: image1 },
          { name: "iPad", image: image2 },
          { name: "AirPods", image: image1 },
          { name: "iPhone", image: image2 },
        ],
      },
    ],
    delivered: [
      {
        orderCode: "#3615950",
        placedOn: "2023/06/30",
        total: "5,643.32",
        delivered: "2023/07/05",
        sentTo: "Sky Smith",
        address: "31, Albuquerque, New York",
        products: [
          { name: "iPhone Case", image: image1 },
          { name: "Apple Watch", image: image3 },
          { name: "Keyboard", image: image1 },
          { name: "Playstation", image: image2 },
          { name: "Headphones", image: image1 },
        ],
      },
    ],
    canceled: [],
    returned: [],
  };

  // Tabs for navigation
  const tabs = [
    { id: "current", label: "Current", count: orders.current.length },
    { id: "delivered", label: "Delivered", count: orders.delivered.length },
    { id: "canceled", label: "Canceled", count: orders.canceled.length },
    { id: "returned", label: "Returned", count: orders.returned.length },
  ];

  // Pagination Logic (optional if the order list is long)
  const ordersPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  // Use a fallback in case orders[selectedTab] is undefined
  const selectedOrders = orders[selectedTab] || [];

  const totalOrders = selectedOrders.length;
  const totalPages = Math.ceil(totalOrders / ordersPerPage);

  const paginatedOrders = selectedOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  return (
    <div className="p-6 bg-white w-full">
      {/* Title and Subtitle */}
      <div className="mb-4">
        <h1 className="text-xl font-bold">Order History</h1>
        <p className="text-sm text-gray-500">
          Track, return, or purchase items
        </p>
      </div>

      {/* Tabs */}
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      {/* Orders */}
      <div>
        {paginatedOrders.length > 0 ? (
          paginatedOrders.map((order, index) => (
            <OrderItem key={index} order={order} />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center text-center py-16">
            <img src={errorImg} alt="Empty Orders" className="w-24 h-24" />
            <p className="text-gray-500 mt-4">
              You have not placed any orders yet
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <button
            className="px-4 py-2 border rounded-md"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span className="mx-4">{`${currentPage} of ${totalPages}`}</span>
          <button
            className="px-4 py-2 border rounded-md"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
