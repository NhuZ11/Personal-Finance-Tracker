import React from 'react'

const Hero = () => {
  return (
    <div className="bg-blue-50">
    <div className="container mx-auto flex flex-col items-center px-6 py-12 md:flex-row">
      <div className="flex flex-col items-start w-full md:w-1/2">
        <h1 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
          Take Control of Your <span className="text-blue-600">Personal Finances</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Track your expenses, set budgets, and achieve your financial goals with our intuitive finance tracker.
        </p>
        <button className="px-6 py-2 mt-6 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
      <div className="w-full mt-8 md:mt-0 md:w-1/2">
        <img
          src="https://via.placeholder.com/500"
          alt="Personal Finance Tracker"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
  )
}

export default Hero