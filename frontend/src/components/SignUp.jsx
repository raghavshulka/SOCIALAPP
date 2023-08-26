import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { Link } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleValidation();
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;

    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be the same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be at least 3 characters long.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be at least 8 characters long.",
        toastOptions
      );
      return false;
    } else if (email.trim() === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  return (
    <div className="w-[428px] h-[750px] md:w-[1728px] md:h-[790px] flex items-center justify-center bg-gradient-to-r from-green-400 to-slate-300">
      <div className="bg-white p-8 rounded shadow-lg w-full sm:w-96">
        <h2 className="pl-[24%] md:pl-[0%] font-serif text-4xl font-semibold md:font-sans mb-6 text-green-400">
          SocialBird
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-400"
              placeholder="Choose a username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-400"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm_password"
              className="block text-gray-700 font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-400"
              placeholder="Enter your confirm password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          < p className=" pt-5 ">Already Register <b className=" text-green-500">< Link to="/signin">Sign In</Link></b> </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
