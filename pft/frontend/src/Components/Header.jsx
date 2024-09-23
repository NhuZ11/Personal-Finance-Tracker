import React, { useState } from "react";
import Logo from "../assets/logo4.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-green-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-xl font-bold">
            <a href="/">PFT</a>
          </div>
          <div className="hidden md:flex space-x-8 py-1 items-center text-lg mr-[-90px]">
            <Link
              to="/home"
              className="text-black hover:text-green-500 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-black hover:text-green-500 font-semibold"
            >
              About
            </Link>
            <a
              href="/services"
              className="text-black hover:text-green-500 font-semibold"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-black hover:text-green-500 font-semibold"
            >
              Contact
            </a>

            <Link className="bg-green-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700 transition duration-300" to="/login">
              Login
            </Link>
            <Link className="bg-green-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700 transition duration-300" to="/register">
              Register
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
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
          <div className="md:hidden">
            <a
              href="/"
              className="block px-2 py-1 text-white hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-2 py-1 text-white hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="/services"
              className="block px-2 py-1 text-white hover:bg-gray-700"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block px-2 py-1 text-white hover:bg-gray-700"
            >
              Contact
            </a>
            <Link className="bg-green-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700 transition duration-300" to="/login">
              Login
            </Link>
            <Link className="bg-green-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700 transition duration-300" to="/register">
              Register
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
