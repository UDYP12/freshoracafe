import React, { useEffect, useState } from "react";
import navbrandlogo from "../assets/freshora_white_bg_logo-removebg.png";
import { NavLink } from "react-router-dom";
import serch_icon from "../assets/search_icon.svg";
import { useAppContext } from "../Context/AppContext.jsx";
import profileicon from "../assets/profile_icon.png";
import { assets } from "../assets/assets.js";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    setUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCardCount,
  } = useAppContext();

  const logout = async () => {
    setUser(null);
    navigate("/");
    setOpen(false);
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/product");
    }
  }, [searchQuery]);

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-3 border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Brand Logo */}
      <NavLink to="/" onClick={() => setOpen(false)} className="h-12 flex-shrink-0">
        <img className="h-full" src={navbrandlogo} alt="Freshora Logo" />
      </NavLink>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => `hover:text-indigo-600 transition ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-700'}`}
        >
          Home
        </NavLink>
        <NavLink 
          to="/product" 
          className={({ isActive }) => `hover:text-indigo-600 transition ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-700'}`}
        >
          All Products
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => `hover:text-indigo-600 transition ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-700'}`}
        >
          Contact
        </NavLink>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full w-64">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            // value={searchQuery}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-gray-700"
            type="text"
            placeholder="Search products"
          />
          <img src={serch_icon} alt="search" className="h-4 w-4" />
        </div>

        {/* Cart Icon - Desktop */}
        <div 
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer hover:opacity-80 transition"
        >
          <img src={assets.nav_cart_icon} alt="Cart" className="w-6 opacity-75" />
          {getCardCount() > 0 && (
            <span className="absolute -top-2 -right-2 text-xs text-white bg-indigo-500 w-5 h-5 rounded-full flex items-center justify-center">
              {getCardCount()}
            </span>
          )}
        </div>

        {/* User Auth - Desktop */}
        {!user ? (
          <button
            onClick={() => {
              setUserLogin(true);
            }}
            className="cursor-pointer px-6 py-1.5 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img 
              src={profileicon} 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover cursor-pointer border border-gray-200" 
            />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow-md border border-gray-200 py-2 w-32 rounded-md text-sm z-40">
              <li 
                onClick={() => {
                  navigate("my-orders");
                  setOpen(false);
                }}
                className="px-4 py-1.5 hover:bg-gray-100 cursor-pointer"
              >
                My Orders
              </li>
              <li 
                onClick={logout}
                className="px-4 py-1.5 hover:bg-gray-100 cursor-pointer text-red-500"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Icons (Cart & Hamburger) */}
      <div className="flex items-center gap-5 md:hidden">
        <div 
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img src={assets.nav_cart_icon} alt="Cart" className="w-6 opacity-75" />
          {getCardCount() > 0 && (
            <span className="absolute -top-2 -right-2 text-xs text-white bg-indigo-500 w-5 h-5 rounded-full flex items-center justify-center">
              {getCardCount()}
            </span>
          )}
        </div>
        
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="focus:outline-none"
        >
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#426287"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#426287"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="2" rx="1" fill="#426287" />
              <rect y="7" width="24" height="2" rx="1" fill="#426287" />
              <rect y="14" width="24" height="2" rx="1" fill="#426287" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 mt-16" onClick={() => setOpen(false)}>
          <div 
            className="bg-white shadow-lg py-4 px-5 animate-slide-down"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center border-b border-gray-200 pb-3">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                className="py-2 w-full bg-gray-100 outline-none placeholder-gray-500 text-gray-700 rounded-lg px-4"
                type="text"
                placeholder="Search products"
              />
              <img src={serch_icon} alt="search" className="h-4 w-4 ml-2" />
            </div>
            
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `block py-2.5 px-3 rounded ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/product"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `block py-2.5 px-3 rounded ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              All Products
            </NavLink>
            {user && (
              <NavLink
                to="/my-orders"
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block py-2.5 px-3 rounded ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                My Orders
              </NavLink>
            )}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `block py-2.5 px-3 rounded ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Contact
            </NavLink>

            <div className="mt-4 pt-3 border-t border-gray-200">
              {!user ? (
                <button
                  onClick={() => {
                    setOpen(false);
                    setUserLogin(true);
                  }}
                  className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-lg"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={logout}
                  className="w-full py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-lg"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;