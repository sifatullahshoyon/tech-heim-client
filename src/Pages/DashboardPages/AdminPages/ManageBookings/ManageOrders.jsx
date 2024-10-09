import { useEffect, useState } from "react";

import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";

import useAxiosSecure from "../../../../Components/Hooks/useAxiosSecure/useAxiosSecure";

const ManageOrders = () => {
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState({});
  console.log(orders);
  const [deliveryStatus, setDeliveryStatus] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch orders from the backend API
    const fetchOrders = async () => {
      try {
        const response = await axiosSecure.get("/api/payments/alluser"); // Adjust the API endpoint as necessary
        setOrders(response?.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // Handle delivery status change
  const handleStatusChange = async (paymentId, newStatus) => {
    setDeliveryStatus((prev) => ({ ...prev, [paymentId]: newStatus }));

    try {
      await axios.put(`/api/orders/${paymentId}`, { deliveryStatus: newStatus });
      // Optionally, refresh the order data after updating
      const response = await axios.get("/api/payments/alluser");
      const groupedOrders = groupOrdersByDate(response.data);
      setOrders(groupedOrders);
    } catch (error) {
      console.error("Error updating delivery status:", error);
    }
  };

  return (
    <div className="container mx-auto">
      {/* Navigation */}
      <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* content */}

   
      <div className="container mx-auto p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-white">Manage Orders</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <tr>
                <th className="text-left py-4 px-6 uppercase font-semibold text-sm">Customer</th>
                <th className="text-left py-4 px-6 uppercase font-semibold text-sm">
                  Payment Type
                </th>
                <th className="text-left py-4 px-6 uppercase font-semibold text-sm">
                  Payment Issuer
                </th>

                <th className="text-left py-4 px-6 uppercase font-semibold text-sm">Payment ID</th>
                <th className="text-left py-4 px-6 uppercase font-semibold text-sm">Amount</th>
                <th className="text-left py-4 px-6 uppercase font-semibold text-sm">
                  Payment Status
                </th>
                <th className="text-left py-4 px-6 uppercase font-semibold text-sm">Cart</th>
                <th className="text-left py-4 px-6 uppercase font-semibold text-sm">Timestamp</th>
                <th className="text-left py-4 px-6 uppercase font-semibold text-sm">
                  Delivery Status
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(orders) &&
                orders.map((order, orderIndex) =>
                  order.userPayment.map((payment, paymentIndex) => (
                    <tr key={`${orderIndex}-${paymentIndex}`} className="bg-white border-b">
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {payment.customerName || "N/A"} <br />
                        {payment.customerEmail}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">
                        {payment.paymentType || "N/A"}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {payment.paymentIssuer || "N/A"}
                      </td>

                      <td className="py-4 px-6 text-sm text-gray-500">
                        {payment.paymentId || "N/A"}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {payment.amount || payment.amount || "N/A"}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">{payment.status || "N/A"}</td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {payment.cart && payment.cart.length > 0 ? (
                          <ul className="list-disc ml-4">
                            {payment.cart.map((item, itemIndex) => (
                              <li key={itemIndex} className="font-semibold">
                                {item.product.name} -{" "}
                                <span className="font-extrabold">{item.quantity || "N/A"}</span> pcs
                              </li>
                            ))}
                          </ul>
                        ) : (
                          "No items in cart"
                        )}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                      {payment.timestamp ? new Date(payment.timestamp).toISOString().split('T')[0] : "N/A"}
                      </td>
                      <td className="py-4 px-6">
                        <select
                          value={deliveryStatus[order.userPayment[0]?.paymentId] || "processing"}
                          onChange={(e) =>
                            handleStatusChange(order.userPayment[0]?.paymentId, e.target.value)
                          }
                          className="bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 text-gray-700 p-2 rounded-md focus:ring-2 focus:ring-purple-400"
                        >
                          <option value="processing">Processing</option>
                          <option value="on_the_way">On the way</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;

// const orders = [
//   {
//     customerName: "SIFAT HOSSAIN",
//     paymentType: "MOBILEBANKING",
//     amount: 2626.86,
//     status: "Success",
//     timestamp: 1727896695535,

//     customerEmail: "farukeomar@gmail.com",
//     paymentId: "2e9f15bd-0c20-406f-94bf-f1791bf4ee16",
//     paymentIssuer: "BKash Mobile Banking",
//     cart: [
//       {
//         product: { name: "Apple MacBook Air", _id: "1" },
//         quantity: 2,
//       },
//     ],
//   },
//   {
//     customerName: "shahid hasan",
//     paymentType: "N/A",
//     amount: 1657,
//     status: "Pending",
//     timestamp: 1728194290145,
//     customerEmail: "farukeomar@gmail.com",
//     paymentId: "a16a6aa5-7238-4171-b555-e8828ee4ea81",
//     cart: [
//       {
//         product: { name: "MacBook Pro 14", _id: "2" },
//         quantity: 1,
//       },
//     ],
//   },
// ];
