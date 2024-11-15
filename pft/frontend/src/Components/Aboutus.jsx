import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h1 className="text-4xl font-extrabold text-green-700 text-center mb-6">
        About Us
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Welcome to{" "}
        <span className="font-bold text-green-600">
          My 6th sem college project
        </span>
        , where I enhanced my tailwind knowledge and boosted my knowledge in
        field of MERN Stack.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        This project was really fun to do.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
       Developed by: NhuZ Bajra
      </p>
      <div className="flex justify-center mt-6">
        <button className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
