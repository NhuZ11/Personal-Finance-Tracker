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
          Aliquid eligendi recusandae nemo assumenda aperiam, dolores tenetur,
          cumque, dolorum ea fugit non aliquam? Dolores, necessitatibus numquam!
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
          <h2 className="text-green-500 font-semibold text-xl">Front End</h2>
          <ul>
            <li>Angular</li>
            <li>React</li>
            <li>NextJs</li>
          </ul>
        </div>

        <div>
          <h2 className="text-green-500 font-semibold text-xl">Back End</h2>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>NPM</li>
          </ul>
        </div>

        <div>
          <h2 className="text-green-500 font-semibold text-xl">Database</h2>
          <ul>
            <li>MongoDB</li>
            <li>MySql</li>
            <li>NoSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
