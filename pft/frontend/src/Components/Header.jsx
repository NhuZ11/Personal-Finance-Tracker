import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Used for navigation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // Navigate to login page after logout
  };

  return (
    <div>
      <nav className="bg-green-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-xl font-bold">
            <a href="/">PFT</a>
          </div>
          <div className="hidden md:flex space-x-8 py-1 items-center text-lg">
            <Link to="/home" className="text-black hover:text-green-500 font-semibold">
              Home
            </Link>
            <Link to="/about-us" className="text-black hover:text-green-500 font-semibold">
              About
            </Link>
            <Link to="/services" className="text-black hover:text-green-500 font-semibold">
              Services
            </Link>
            <Link to="/contact" className="text-black hover:text-green-500 font-semibold">
              Contact
            </Link>

            {localStorage.getItem("token") ? (
              <button
                className="bg-green-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700 transition duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <div className="flex space-x-4">
                <Link
                  className="bg-green-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700 transition duration-300"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="bg-green-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700 transition duration-300"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-green-100 mt-2 space-y-2">
            <Link to="/home" className="block px-2 py-1 text-black hover:bg-gray-700 hover:text-white">
              Home
            </Link>
            <Link to="/about-us" className="block px-2 py-1 text-black hover:bg-gray-700 hover:text-white">
              About
            </Link>
            <Link to="/services" className="block px-2 py-1 text-black hover:bg-gray-700 hover:text-white">
              Services
            </Link>
            <Link to="/contact" className="block px-2 py-1 text-black hover:bg-gray-700 hover:text-white">
              Contact
            </Link>
            {localStorage.getItem("token") ? (
              <button
                className="block bg-green-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700 transition duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link
                  className="block bg-green-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700 transition duration-300"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="block bg-green-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700 transition duration-300"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
