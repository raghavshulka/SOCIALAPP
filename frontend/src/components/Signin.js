
import React from 'react';


const SignIn = () => {
  return (
    <div className=" w-[428px] h-[750px] md:w-[1728px] md:h-[790px] flex items-center justify-center bg-gradient-to-r from-green-400 to-slate-300">
      <div className="bg-white p-8 rounded shadow-lg w-full sm:w-96">
        <h2 className=" pl-[24%] md:pl-[0%] font-serif text-4xl font-semibold md:font-sans mb-6 text-green-400">SocialBird</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};




export default SignIn

