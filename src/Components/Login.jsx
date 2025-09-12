import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-gray-200 shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login to your account
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
