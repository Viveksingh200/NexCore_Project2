import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white ">
      <div className="container mx-auto flex items-center justify-between p-4 px-20 fixed bg-white border-b border-gray-200 h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="media/images/logo.svg" className="w-1/4" alt="Logo" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar links */}
        <div className="hidden lg:flex space-x-12">
          <Link
            to="/signup"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            to="/products"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Product
          </Link>
          <Link
            to="/pricing"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Pricing
          </Link>
          <Link
            to="/support"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Support
          </Link>
        </div>
      </div>
      <hr className="opacity-10"/>
    </nav>
  );
}

export default Navbar;
