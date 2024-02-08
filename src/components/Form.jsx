import { useState } from "react";
import { validateData } from "../utils/helper";

const Form = () => {
  const [signIn, setSignIn] = useState(true);
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };

  const handleClick = () => {
    setFormErrors(validateData(formValues));
  };

  return (
    <form
      className="bg-black w-450px mx-auto text-white py-12 px-[68px] bg-opacity-70 rounded-lg max-[600px]:w-screen"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1 className="font-bold text-3xl mb-8">
        {signIn ? "Sign In" : "Sign Up"}
      </h1>
      <div className=" flex flex-col gap-4 items-center ">
        {!signIn && (
          <div className="w-full">
            <input
              className={`p-4 w-full rounded bg-gray-800 bg-opacity-20 border border-gray-400 " +
            ${
              formErrors.fullname
                ? "border-red-500 border-2 focus:outline-none"
                : ""
            } `}
              type="text"
              name="fullname"
              placeholder="Full Name"
              onChange={handleChange}
              value={formValues.fullname}
            />
            <p className="text-sm text-red-500 pt-1 pl-1">
              {formErrors.fullname}
            </p>
          </div>
        )}

        <div className="w-full">
          <input
            type="email"
            name="email"
            placeholder="Email or Phone Number"
            className={`p-4 w-full rounded bg-gray-800 bg-opacity-20 border border-gray-400 " +
               ${
                 formErrors.email
                   ? "border-red-500 border-2 focus:outline-none"
                   : ""
               } `}
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="text-sm text-red-500 pt-1 pl-1">{formErrors.email}</p>
        </div>

        <div className="w-full">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`p-4 w-full rounded bg-gray-800 bg-opacity-20 border border-gray-400 " +
               ${
                 formErrors.password
                   ? "border-red-500 border-2 focus:outline-none"
                   : ""
               } `}
            value={formValues.password}
            onChange={handleChange}
          />
          <p className="text-sm text-red-500 pt-1 pl-1">
            {formErrors.password}
          </p>
        </div>

        <button
          className="mb-6 w-full font-bold p-3 rounded-md bg-red-600"
          onClick={handleClick}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
      </div>

      <a href="" className="pl-24 text-md">
        Forgot Password ?
      </a>

      {signIn ? (
        <p className="mt-24 text-gray-400">
          New to Netflix?{" "}
          <span
            className="text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            Sign Up Now{" "}
          </span>
        </p>
      ) : (
        <p className="mt-16 text-gray-400">
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
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <span className="text-blue-400">Learn more.</span>
      </p>
    </form>
  );
};

export default Form;
