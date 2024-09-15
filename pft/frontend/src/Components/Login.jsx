import React from 'react';
import backgroundImage from '../assets/backgroundhero.jpg'; 

const Login = () => {
    const imageUrl = 'D:\Personal Finance Tracker\pft\frontend\src\assets\backgroundhero.jpg';
  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-50 " style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 mt-10">
        <div className="flex items-center mb-6 text-gray-900">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          <span className="text-xl font-semibold">Personal Finance Tracker</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Sign in to your account</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900">Your email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2.5 border rounded-lg bg-gray-50 border-gray-300 text-gray-900"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2.5 border rounded-lg bg-gray-50 border-gray-300 text-gray-900"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                required
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-500">Remember me</label>
            </div>
            <a href="#" className="text-sm text-green-600 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Sign in
          </button>
          <p className="text-sm text-gray-500">
            Don’t have an account yet?{" "}
            <a href="#" className="text-green-600 hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
