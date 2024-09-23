import React from "react";

function OrderStatus() {
  const orderData = {
    // Replace with your actual order data
    orderCode: "#1050486",
    placedOn: "2023/04/15",
    sentTo: "31, Albuquerque, New York",
    paymentType: "Net Banking",
    transactionId: "2345678910",
    amountPaid: "5543.02",
    items: [
      {
        name: "MacBook Pro M1 13 inch",
        price: "5433.00",
        quantity: 1,
      },
      {
        name: "Laptop Case",
        price: "63.36",
        quantity: 1,
      },
      {
        name: "Laptop Privacy Screen",
        price: "29.20",
        quantity: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Order Status</h2>
      <div className="flex justify-center items-center mb-4">
        <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Order Placed</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 6V3"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Processing</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 5v7h16m0 0-8-8m8 8-11-11m11 11-8-8"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">On the Way</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0-4 4-4-4"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Delivered</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p className="text-gray-700 mb-2">Order Code: {orderData.orderCode}</p>
        <p className="text-gray-700 mb-2">Placed On: {orderData.placedOn}</p>
        <p className="text-gray-700 mb-2">Sent To: {orderData.sentTo}</p>
        <p className="text-gray-700 mb-2">
          Payment Type: {orderData.paymentType}
        </p>
        <p className="text-gray-700 mb-2">
          Transaction ID: {orderData.transactionId}
        </p>
        <p className="text-gray-700 mb-2">
          Amount Paid: {orderData.amountPaid}
        </p>
        <h3 className="text-lg font-bold mb-2">Items</h3>
        <ul className="list-disc">
          {orderData.items.map((item, index) => (
            <li key={index}>
              <p className="text-gray-700">{item.name}</p>
              <p className="text-gray-700">Price: {item.price}</p>
              <p className="text-gray-700">Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrderStatus;
