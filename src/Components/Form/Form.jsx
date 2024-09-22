import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const Form = () => {
  const [signUp, setSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg  bg-white  ">
      <div
        className={`flex select-none gap-2 border-b p-2.5 *:flex-1 *:rounded-md *:border *:p-2 *:text-center *:uppercase *:shadow-inner *:outline-none  ${
          signUp
            ? "last-of-type:*:bg-blue-500 last-of-type:*:text-white"
            : "first-of-type:*:bg-blue-500 first-of-type:*:text-white"
        }`}
      >
        <button onClick={() => setSignUp(false)}>signin</button>
        <button onClick={() => setSignUp(true)}>signup</button>
      </div>

      <div className="w-full flex-col items-center overflow-hidden p-4 sm:p-8">
        {/* sign up form  */}
        <form
          className={`${
            signUp ? "h-full duration-300" : "invisible h-0 opacity-0"
          } space-y-3 sm:space-y-5`}
        >
          <h1 className="mb-6 uppercase backdrop-blur-sm sm:text-2xl font-bold">
            Sign Up to Tech Heim
          </h1>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
            />
            <div className="relative flex flex-row items-center">
              <input
                type={`${!showPassword ? "password" : "text"}`}
                placeholder="Password"
                className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
              />
              <span
                onClick={handleShowPassword}
                className="absolute right-2 cursor-pointer"
              >
                {showPassword ? <BiSolidShow /> : <BiSolidHide />}
              </span>
            </div>
          </div>
          <div className="mb-6 flex items-center space-x-2 accent-sky-600">
            <input type="checkbox" id="keep_signed_in" />
            <label
              className="select-none text-sm font-medium"
              htmlFor="keep_signed_in"
            >
              I agree to all{" "}
              <Link to="">
                <span className="text-blue-500 underline">
                  Terms & Conditions
                </span>
              </Link>
            </label>
          </div>
          {/* button type will be submit for handling form submission*/}
          <button
            type="button"
            className="mx-auto w-full block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 bg-blue-500 hover:bg-blue-700 text-white"
          >
            Submit
          </button>
          <p className="text-center">
            Already have an account?
            <button
              type="button"
              onClick={() => setSignUp(!signUp)}
              className="font-semibold underline text-blue-500"
            >
              Signin
            </button>
          </p>
        </form>

        {/* signin form */}
        <form
          className={`${
            signUp ? "h-0 opacity-0" : "h-full duration-300"
          } space-y-3 sm:space-y-5`}
        >
          <h1 className="mb-3 uppercase sm:mb-5 sm:text-2xl font-bold">
            Sign In to Tech Heim
          </h1>
          <input
            type="email"
            placeholder="Email"
            className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
          />
          <div className="relative flex flex-row items-center">
            <input
              type={`${!showPassword ? "password" : "text"}`}
              placeholder="Password"
              className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
            />
            <span
              onClick={handleShowPassword}
              className="absolute right-2 cursor-pointer"
            >
              {showPassword ? <BiSolidShow /> : <BiSolidHide />}
            </span>
          </div>

          <div className="flex justify-between">
            <div className="mb-6 flex items-center space-x-2 accent-sky-600">
              <input type="checkbox" id="keep_signed_in" />
              <label
                className="select-none text-sm font-medium"
                htmlFor="keep_signed_in"
              >
                Keep me signed in
              </label>
            </div>
            <p className="text-left text-sm text-blue-500">
              <a href="#" className="hover:underline">
                forget password?
              </a>
            </p>
          </div>

          {/* button type will be submit for handling form submission*/}
          <button
            type="button"
            className="mx-auto w-full block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 bg-blue-500 hover:bg-blue-700 text-white"
          >
            Submit
          </button>
          <p className="text-center">
            Don&apos;t have an account?
            <button
              onClick={() => setSignUp(!signUp)}
              type="button"
              className="font-semibold underline text-blue-500"
            >
              Signup
            </button>
          </p>
        </form>

        <div className="mt-3 space-y-3 sm:space-y-5">
          <div className="divider">OR</div>
          <button className="flex justify-between items-center gap-5 mx-auto mb-4 mt-8  rounded-md border px-5 py-2 shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
            <FaGoogle className="text-xl" />
            Continue with Google
          </button>
          <button className="flex justify-between items-center gap-5 mx-auto mb-4 mt-8  rounded-md border px-5 py-2 shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
            <FaFacebook className="text-xl" />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
