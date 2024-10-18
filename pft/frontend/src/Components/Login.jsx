import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/backgroundhero.jpg";

const Login = (props) => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors
    const { email, password } = credential;
    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();
      console.log("this is response ", json);

      if (json.authToken) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authToken);
        if (email === "admin@gmail.com") {
          navigate("/admindashboard");
        } else {
          navigate("/dashboard");
        }
        props.showAlert("Account created", "success");
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error: ", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
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
          <span className="text-xl font-semibold">Personal Finance Tracker</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Sign in to your account</h1>
        {/* Display error message if there is one */}
        {errorMessage && (
          <div className="mb-4 text-sm text-red-500 bg-red-100 p-2 rounded">
            {errorMessage}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
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
              className="w-full p-2.5 border rounded-lg bg-gray-50 border-gray-300 text-gray-900"
              placeholder="name@company.com"
              onChange={handleChange}
              value={credential.email}
              name="email"
              aria-describedby="emailHelp"
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
              className="w-full p-2.5 border rounded-lg bg-gray-50 border-gray-300 text-gray-900"
              placeholder="••••••••"
              name="password"
              value={credential.password}
              onChange={handleChange}
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
              <label htmlFor="remember" className="ml-2 text-sm text-gray-500">
                Remember me
              </label>
            </div>
            <Link className="text-sm text-green-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Login
          </button>
          <p className="text-sm text-gray-500">
            Don’t have an account yet?
            <Link className="text-green-600 hover:underline" to="/register">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
