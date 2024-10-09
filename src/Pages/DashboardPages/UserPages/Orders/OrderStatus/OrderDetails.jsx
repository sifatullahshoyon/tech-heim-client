import React from "react";

const OrderDetails = ({ orderData }) => {
  //   console.log(orderData);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
      <div>
        <p className="font-semibold text-gray-600">Order Code</p>
        <p>{orderData?.orderId || "N/A"}</p>
      </div>
      <div>
        <p className="font-semibold text-gray-600">Placed on</p>
        <p>{orderData?.orderDate || "N/A"}</p>
      </div>
      <div>
        <p className="font-semibold text-gray-600">Sent to</p>
        <p>{orderData?.shippingAddress || "N/A"}</p>
      </div>
      <div>
        <p className="font-semibold text-gray-600">Payment Type</p>
        <p>{orderData?.paymentType || "N/A"}</p>
      </div>
      <div>
        <p className="font-semibold text-gray-600">Transaction ID</p>
        <p>{orderData?.transactionId || "N/A"}</p>
      </div>
      <div>
        <p className="font-semibold text-gray-600">Amount Paid</p>
        <p>{orderData?.amountPaid || "N/A"}</p>
      </div>
    </div>
  );
};

export default OrderDetails;
