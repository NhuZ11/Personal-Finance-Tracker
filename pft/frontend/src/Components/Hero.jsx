import React from 'react';
import Image from '../assets/heroimg.png';
import BackgroundImage from '../assets/backgroundhero.jpg'; // Replace with your actual background image path

const Hero = () => {
  return (
    <div className="relative bg-white h-screen">
      <div className="absolute inset-0">
        <img
          src={BackgroundImage}
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative container mx-auto flex flex-col items-center px-6 py-12 md:flex-row">
        <div className="flex flex-col items-start w-full md:w-1/2">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Take Control of Your <span className="text-[#2eb82e]">Personal Finances</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Track your expenses, set budgets, and achieve your financial goals with our personal finance tracker.
          </p>
          <button className="px-6 py-2 mt-6 text-lg font-semibold text-white border-2 rounded-full border-[#2eb82e] bg-[#2eb82e] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#2eb82e]">
            Get Started
          </button>
        </div>
        <div className="w-full mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <img
            src={Image}
            alt="Personal Finance Tracker"
            className="w-11/12 max-w-sm md:max-w-md lg:max-w-lg rounded-lg mt-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
