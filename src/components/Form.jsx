import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { validateData } from "../utils/helper";

const Form = () => {
  const pass = useRef("");

  const [signIn, setSignIn] = useState(true);
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const myFunction = () => {
    if (pass.current.type === "text") {
      pass.current.type = "password";
    } else {
      pass.current.type = "text";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };

  const handleClick = () => {
    const errors = validateData(formValues, signIn);
    setFormErrors(errors);

    // if Errors are present in the form then return from here.
    if (Object.keys(errors).length !== 0) return;

    // User SignUp Authentication
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setFormErrors({
            ...formErrors,
            errorcode: errorCode,
            errormsg: errorMessage,
          });
          // ..
        });
    } else {
      // else sign in the user
      signInWithEmailAndPassword(auth, formValues.email, formValues.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormErrors({
            ...formErrors,
            errorcode: errorCode,
            errormsg: errorMessage,
          });
          console.log(errorCode);
        });
    }
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
            ref={pass}
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
          <div className="flex items-center pt-2 pl-2">
            <input className="mt-[2px]" type="checkbox" onClick={myFunction} />
            <span className="pl-2">Show Password</span>
          </div>
          <p className="text-sm text-red-500 pt-1 pl-1">
            {formErrors.password}
          </p>
        </div>
        {formErrors.errorcode === "auth/email-already-in-use" ? (
          <p className="text-red-500 text-md">
            Email already in Use. Try signing in!
          </p>
        ) : (
          <p className="hidden"></p>
        )}
        {formErrors.errorcode === "auth/invalid-credential" ? (
          <p className="text-red-500 text-md">Invalid Email Id or Password.</p>
        ) : (
          <p className="hidden"></p>
        )}
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
        This page is protected by Google reCAPTCHA to ensure you&apos;re not a
        bot. <span className="text-blue-400">Learn more.</span>
      </p>
    </form>
  );
};

export default Form;
