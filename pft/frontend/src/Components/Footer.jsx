import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400 border-t border-gray-300 mt-16">
      <div className="ml-10">
        <h1 className="text-green-600 text-2xl pl-3 font-bold">
          Personal Finance Tracker
        </h1>
        <p className="py-1 ml-3 text-justify">
          You can contact us in following social media. Build your strong finance with personal finance tracker.
        </p>
        <div className="flex justify-around md:w-[75%] my-6">
          <FaFacebookSquare size="2rem" />
          <FaInstagram size="2rem" />
          <FaTwitterSquare size="2rem" />
          <FaGithubSquare size="2rem" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-around mt-4">
        <div>
          <h2 className="text-green-500 font-semibold text-xl">Expenses</h2>
          <ul>
            <li>Food</li>
            <li>Social Life</li>
            <li>Health</li>
          </ul>
        </div>

        <div>
          <h2 className="text-green-500 font-semibold text-xl">Incomes</h2>
          <ul>
            <li>Salary</li>
            <li>Allowance</li>
            <li>Bonus</li>
          </ul>
        </div>

        <div>
          <h2 className="text-green-500 font-semibold text-xl">Saving</h2>
          <ul>
            <li>Stock</li>
            <li>Gold</li>
            <li>Investment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
