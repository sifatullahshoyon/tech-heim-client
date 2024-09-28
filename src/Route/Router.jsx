import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Shop from "../Pages/Shop/Shop";
import BlogsMain from "../Pages/blogs/BlogsMain";
import BlogProductDetailsMain from "../Pages/blogs/blogsDetails/BlogProductDetails/BlogProductDetailsMain";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PaymentMethods from "../Pages/DashboardPages/UserPages/PaymentInstalment/PaymentsCard/PaymentMethod";
import PaymentTable from "../Pages/DashboardPages/UserPages/PaymentInstalment/PaymentsCard/PaymentTable";
import DiscountSection from "../Pages/DashboardPages/UserPages/Discount/DiscountSection/DiscountSection";
import FAQs from "../Pages/FAQs/FAQs";
import ContactUS from "../Pages/ContactUs/ContactUS";
import AboutUS from "../Pages/AboutUS/AboutUS";
import DashboardLayout from "../Layouts/DashboardLayout";
import PersonalData from "../Pages/DashboardPages/UserPages/PersonalData/PersonalData";
import PaymentInstalment from "../Pages/DashboardPages/UserPages/PaymentInstalment/PaymentInstalment";
import SecurityAccess from "../Pages/DashboardPages/UserPages/SecurityAccess/SecurityAccess";
import Notification from "../Pages/DashboardPages/UserPages/Notification/Notification";
import ContactUs from "../Pages/DashboardPages/UserPages/ContactUs/ContactUs";
import WishList from "../Pages/DashboardPages/UserPages/WishList/WishList";
import Orders from "../Pages/DashboardPages/UserPages/Orders/Orders";
import Discount from "../Pages/DashboardPages/UserPages/Discount/Discount";
import AdminHome from "../Pages/DashboardPages/AdminPages/AdminHome/AdminHome";
import AddProducts from "../Pages/DashboardPages/AdminPages/AddProducts/AddProducts";
import ManageProducts from "../Pages/DashboardPages/AdminPages/ManageProducts/ManageProducts";
import ManageBookings from "../Pages/DashboardPages/AdminPages/ManageBookings/ManageBookings";
import AllUsers from "../Pages/DashboardPages/AdminPages/AllUsers/AllUsers";
import Blogs from "../Pages/DashboardPages/AdminPages/Blogs/Blogs";
import OrderStatus from "../Pages/DashboardPages/UserPages/Orders/OrderStatus/OrderStatus";
import Login from "../Pages/Login/Login";
import Regastration from "../Pages/Regastration/Regastration";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <BlogsMain />,
      },

      {
        path: "/blog/blogDetails",
        element: <BlogProductDetailsMain />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/faqs",
        element: <FAQs />,
      },
      {
        path: "/contactUs",
        element: <ContactUS />,
      },
      {
        path: "/aboutUs",
        element: <AboutUS />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Regastration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      /////// Admin Route /////////
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "add-products",
        element: <AddProducts />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "manage-bookings",
        element: <ManageBookings />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      /////// user Route /////////
      {
        path: "personal-data",
        element: <PersonalData />,
      },
      {
        path: "payment-instalment",
        element: <PaymentInstalment />,
      },
      {
        path: "payment-istalment/table",
        element: <PaymentTable />,
      },
      {
        path: "discount",
        element: <DiscountSection />,
      },

      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "order-status",
        element: <OrderStatus />,
      },
      {
        path: "wish-list",
        element: <WishList />,
      },
      {
        path: "discount",
        element: <Discount />,
      },
      {
        path: "security-access",
        element: <SecurityAccess />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
export default router;
