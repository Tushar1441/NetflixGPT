import { BODY_IMG } from "../utils/links";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };

  return (
    <div className="relative">
      <div className="">
        <img
          src={BODY_IMG}
          alt="Background Image"
          className="h-screen w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="absolute inset-0 ">
        <Header />
        <form className="bg-black w-450px my-6 mx-auto text-white py-12 px-16 bg-opacity-70">
          <h1 className="font-bold text-3xl mb-8">
            {signIn ? "Sign In" : "Sign Up"}
          </h1>
          <div className=" flex flex-col gap-8 items-center ">
            {!signIn && (
              <div className="w-full">
                <input
                  type="name"
                  placeholder="Enter your Name"
                  className="p-4 w-full rounded bg-gray-800 bg-opacity-20 border border-gray-400"
                />
              </div>
            )}

            <div className="w-full">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full p-4 rounded bg-gray-800 bg-opacity-20 border border-gray-400 "
              />
            </div>

            <div className="w-full">
              <input
                type="password"
                placeholder="Password"
                className="p-4 w-full rounded bg-gray-800 bg-opacity-20 border border-gray-400"
              />
            </div>

            <button className="mb-4 w-full font-bold p-3 rounded-md bg-red-600">
              {signIn ? "Sign In" : "Sign Up"}
            </button>
          </div>

          <a href="" className="pl-24 text-md">
            Forgot Password ?
          </a>
          {signIn ? (
            <p className="mt-8 text-gray-400">
              New to Netflix?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign Up Now{" "}
              </span>
            </p>
          ) : (
            <p className="mt-8 text-gray-400">
              Already Registered?{" "}
              <span
                className="text-white cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign In{" "}
              </span>
            </p>
          )}
          <p className="text-sm text-gray-400 mt-3">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-blue-400">Learn more.</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
