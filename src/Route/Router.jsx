import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Shop from "../Pages/Shop/Shop";
import BlogsMain from "../Pages/blogs/BlogsMain";
import BlogProductDetailsMain from "../Pages/blogs/blogsDetails/BlogProductDetails/BlogProductDetailsMain";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import FAQs from "../Pages/FAQs/FAQs";
import ContactUS from "../Pages/ContactUs/ContactUS";
import AboutUS from "../Pages/AboutUS/AboutUS";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: "/productDetails",
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
    ],
  },
]);
export default router;
