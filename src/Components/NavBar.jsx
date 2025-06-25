"use client";

import { useContext, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { CartCtx } from "../store/CartContext";
import { AuthContext } from "../AuthContext";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { Cart } = useContext(CartCtx);
  const { isLoggedIn, userEmail, logout } = useContext(AuthContext);
  const cartRef = useRef();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const search = useRef();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 250) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/Shop/${search.current.value}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/Login");
  };

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}
      className="sticky top-0 bg-white shadow-sm border-b border-gray-200 z-50">
      <motion.nav className="bg-white w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0">
            <Link className="text-2xl font-bold text-black bolded" to="/">
              SHOP.CO
            </Link>
          </motion.div>

          {/* Search Bar - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex flex-1 max-w-lg mx-8">
            <form className="relative w-full" onSubmit={handleFormSubmit}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <input
                ref={search}
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:bg-white focus:border-gray-400 focus:outline-none transition-colors duration-200"
              />
            </form>
          </motion.div>

          {/* Right side - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4">
            {/* Auth Buttons - Desktop */}
            {!isLoggedIn ? (
              <div className="hidden md:flex items-center space-x-3">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}>
                  <Link
                    to="/Login"
                    className="px-6 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition duration-200">
                    Login
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}>
                  <Link
                    to="/Signup"
                    className="px-6 py-2 text-sm font-medium text-black bg-white rounded-md border border-gray-300 hover:bg-gray-50 transition duration-200">
                    Sign Up
                  </Link>
                </motion.div>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <span className="text-sm font-medium text-black">
                  Welcome, {userEmail}!
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-200">
                  Logout
                </button>
              </div>
            )}

            {/* Shopping Cart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative">
              {Cart > 0 && (
                <motion.div
                  initial={{ scale: 1.2, y: -18, x: 18 }}
                  animate={{ scale: 1, y: -18, x: 18 }}
                  transition={{ duration: 0.3 }}
                  key={Cart}
                  className="absolute translate-x-4 -translate-y-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-medium">
                  {Cart}
                </motion.div>
              )}
              <Link
                to="/Cart"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-black">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-black">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-black">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4">
            {/* Mobile search */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4">
              <form onSubmit={handleFormSubmit}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-400">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </div>
                  <input
                    ref={search}
                    type="text"
                    placeholder="Search for products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:bg-white focus:border-gray-400 focus:outline-none"
                  />
                </div>
              </form>
            </motion.div>

            {/* Mobile auth buttons */}
            {!isLoggedIn ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col space-y-3">
                <Link
                  to="/Login"
                  className="w-full px-4 py-2 text-center text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </Link>
                <Link
                  to="/Signup"
                  className="w-full px-4 py-2 text-center text-sm font-medium text-black bg-white rounded-md border border-gray-300 hover:bg-gray-50 transition duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col space-y-3">
                <div className="text-center text-sm font-medium text-black">
                  Welcome, {userEmail}!
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-200">
                  Logout
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.nav>
    </motion.div>
  );
}
