import React, { useState } from "react";
import logo from "../../../assets/images/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import bagIcon from "../../../assets/images/icon/bag.png";
import searchIcon from "../../../assets/images/icon/search-normal.png";
import userIcon from "../../../assets/images/icon/user.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);

  // Function to toggle the visibility
  const handleSearchClick = () => {
    setShowInput(true); // Show the input field when the search icon is clicked
  };
  return (
    <div className="max-w-[1440px] px-6 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* Mobile Device */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.subItems ? (
                    <>
                      <a>{item.name}</a>
                      <ul className="p-2">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <NavLink
                              className={({ isActive }) =>
                                isActive ? "active" : "default"
                              }
                              to={subItem.path}
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "default" : "active"
                      }
                      to={item.path}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.subItems ? (
                  <>
                    <NavLink
                      to={item.path}
                      className="group-hover:text-primary"
                    >
                      {item.name}
                    </NavLink>
                    <ul className="absolute left-0 top-full hidden group-hover:block bg-base-100 shadow-lg p-2">
                      {item.subItems.map((subItem) => (
                        <>
                          <li key={subItem.name}>
                            <NavLink
                              to={subItem.path}
                              className={({ isActive }) =>
                                isActive ? "default" : "active "
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        </>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink to={item.path}>{item.name}</NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <img src={searchIcon} alt="bag Icon" />
            <img src={bagIcon} alt="bag Icon" />
            {/* <img src={userIcon} alt="user Icon" /> */}
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                <img src={userIcon} alt="user Icon" />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 pt-3 p-3 shadow"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-6">
                    <img src={userIcon} alt="user Icon" className="w-full" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-[#0C68F4] text-sm md:text-lg font-normal">
                      user name
                    </p>
                    <p className="font-normal text-black text-sm text-balance">
                      use email
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-black text-sm md:text-lg font-normal">
                    <HiOutlineShoppingBag />
                  </p>
                  <p className="font-normal text-black text-sm text-balance">
                    Orders
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-black text-sm md:text-lg font-normal">
                    <FaRegHeart />
                  </p>
                  <p className="font-normal text-black text-sm text-balance">
                    Wish List
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-black text-sm md:text-lg font-normal">
                    <AiOutlineDollar />
                  </p>
                  <p className="font-normal text-black text-sm text-balance">
                    Payments
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-black text-sm md:text-lg font-normal">
                    <CiLogout />
                  </p>
                  <p className="font-normal text-black text-sm text-balance">
                    Log out
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="flex">
              <div className="flex ">
                Show the search icon initially
                {!showInput && (
                  <div onClick={handleSearchClick} className="cursor-pointer">
                    <img src={searchIcon} alt="Search Icon" />
                  </div>
                )}

                Show the input field when the search icon is clicked
                {showInput && (
                  <label className="input input-bordered flex items-center gap-2 space-x-4">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                )}
                
                <div className="flex">
                    <img src={bagIcon} alt="bag Icon" />
                    <img src={userIcon} alt="user Icon" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
    subItems: [
      { name: "Submenu 1", path: "/products/submenu-1" },
      { name: "Submenu 2", path: "/products/submenu-2" },
    ],
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];
