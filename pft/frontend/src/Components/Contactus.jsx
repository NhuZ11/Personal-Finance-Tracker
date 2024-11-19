import React from "react";

const Contactus = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl font-extrabold text-green-700 text-center mb-6">
        Contact Us
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Got a question or need assistance? We’re here to help! Reach out to us using the form below.
      </p>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Type your message here..."
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
      <p className="text-sm text-gray-600 text-center mt-6">
        Alternatively, reach us at:{" "}
        <span className="text-green-600 font-bold">nhuz@bajra.com</span>
      </p>
    </div>
  );
};

export default Contactus;
