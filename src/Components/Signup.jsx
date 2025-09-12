import React from "react";

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-gray-200 p-8 rounded-xl shadow-md border">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Create Account 
        </h1>

        <form className="space-y-5">
          {/* Full Name */}
          <div className="form-group">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Create Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
              placeholder="********"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
