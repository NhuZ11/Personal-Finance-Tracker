import React, { useState } from "react";
import backgroundImage from "../assets/backgroundhero.jpg";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, cpassword } = credentials;

    // Check if passwords match (validation)
    if (password !== cpassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const json = await response.json();
      console.log("Response: ", json);

      if (response.ok) {
        // Save the auth token and redirect to login
        // localStorage.setItem("token", json.authToken);  doesnot seem right might change later
        navigate("/login");
        console.log("Success: Account created");
      } else {
        console.log("Failure: ", json.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // get user details from frontend as the value from the fields change the spread operator in credentials updates the value
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="flex items-start justify-center min-h-screen bg-gray-50"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 mt-10">
        <div className="flex items-center mb-6 text-gray-900">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          <span className="text-xl font-semibold">
            Personal Finance Tracker
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Create an account</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2.5 border rounded-lg bg-gray-50 border-gray-300 text-gray-900"
              placeholder="Username"
              value={credentials.username}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2.5 border rounded-lg bg-gray-50 border-gray-300 text-gray-900"
              placeholder="name@company.com"
              value={credentials.email}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2.5 border rounded-lg bg-gray-50 border-gray-300 text-gray-900"
              placeholder="••••••••"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-1 text-sm font-medium text-gray-900"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="cpassword"
              className="w-full p-2.5 border rounded-lg bg-gray-50 border-gray-300 text-gray-900"
              placeholder="••••••••"
              value={credentials.cpassword}
              onChange={onChange}
              required
            />
          </div>
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-500">
              I accept the{" "}
              <Link to="/terms" className="text-green-600 hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Create an account
          </button>
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;




// get user details from frontend
// validation 
// check if user already exists
// check for files
// create user object - create entry in db
// check for user creation
// return response
