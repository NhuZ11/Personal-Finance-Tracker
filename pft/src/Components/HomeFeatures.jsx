import React from "react";
import Image from "../assets/logo.png";

const HomeFeatures = () => {
  return (
    <div className="bg-[#EEFFFD] p-10">
      <div className="">
        <h1 className="text-5xl font-bold pb-4 text-center">Our Features</h1>
      </div>
      <div className="w-full mt-10 ">
        <div className="max-w-[1000px] mx-auto flex items-center justify-end gap-10 ">
          <img src={Image} alt="" className="w-[300px] h-[300px]" />
          <div className="w-1/2 p-4 text-justify ">
            <p className="text-green-500 text-4xl font-bold py-4">
              Track Your <br />
              Daily Transactions
            </p>
            <p className="text-lg font-semibold text-justify">
              Track your daily expenses and income with us. Put them in clear
              categories and make a proper financial records.
            </p>
            <button className="bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2 ">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* //another feature */}
      <div className="w-full mt-20 ">
        <div className="max-w-[1000px] mx-auto flex items-center justify-start gap-10 ">
          <div className="w-1/2 p-4 text-justify">
            <p className="text-green-500 text-4xl font-bold py-4 text-right">
              Budgeting <br />
              Algorithm
            </p>
            <p className="text-lg font-semibold text-right">
              Track your daily expenses and income with us. Put them in clear
              categories and make a proper financial records.
            </p>
            <button className="bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2">
              Learn More
            </button>
          </div>
          <img src={Image} alt="" className="w-[300px] h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
