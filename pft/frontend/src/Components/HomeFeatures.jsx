import React from "react";
import Image from "../assets/logo.png";
import Car from '../assets/Automotive.png'

const HomeFeatures = () => {
  return (
    <div className="bg-[#EEFFFD] p-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold pb-4">Our Features</h1>
      </div>
      <section className="w-full mt-10">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-10">
          <img src={Image} alt="Feature Image" className="w-[300px] h-[300px]" />
          <article className="md:w-1/2 p-4 text-justify">
            <h2 className="text-green-500 text-4xl font-bold py-4">
              Track Your <br />
              Daily Transactions
            </h2>
            <p className="text-lg font-semibold">
              Track your daily expenses and income with us. Put them in clear
              categories and make proper financial records.
            </p>
            <button className="bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2" aria-label="Learn more about tracking daily transactions">
              Learn More
            </button>
          </article>
        </div>
      </section>
      {/* Another feature */}
      <section className="w-full mt-20">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          <img src={Image} alt="Feature Image" className="w-[300px] h-[300px]" />
          <article className="md:w-1/2 p-4 text-justify md:text-right">
            <h2 className="text-green-500 text-4xl font-bold py-4">
              Budgeting <br />
              Algorithm
            </h2>
            <p className="text-lg font-semibold">
              Get Financial Insight from budgeting alogrithm. Categorize your expenses on the basis of wants, needs and saving.
            </p>
            <button className="bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2" aria-label="Learn more about budgeting algorithm">
              Learn More
            </button>
          </article>
        </div>
      </section>
      {/* //another feature */}
      <section className="w-full mt-10">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-10">
          <img src={Image} alt="Feature Image" className="w-[300px] h-[300px]" />
          <article className="md:w-1/2 p-4 text-justify">
            <h2 className="text-green-500 text-4xl font-bold py-4">
              50/30/20 <br />
              Rule
            </h2>
            <p className="text-lg font-semibold">
              Divide your income on basis of popular financial 50/30/20 rule. 
            </p>
            <button className="bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2" aria-label="Learn more about tracking daily transactions">
              Learn More
            </button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomeFeatures;
