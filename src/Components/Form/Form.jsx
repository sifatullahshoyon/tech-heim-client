import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import GoogleLogin from "../Shared/SocalLogin/GoogleLogin/GoogleLogin";
import FaceBookLogin from "../Shared/SocalLogin/FacebookLogin/FaceBookLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const Form = () => {
  const [signUp, setSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const [isCheckedSignUP, setIsCheckedSignUp] = useState(false); // State for checkbox

  const { signIn } = useContext(AuthContext)
  const { createUser } = useContext(AuthContext)


  // use form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  // Sign Up (register)
  const onSubmit = (data) => {
    console.log(data)
    createUser(data?.email, data?.password)
      .then(result => {
        console.log(result.user)
      })
  }




  // Sign In (Login)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })

  }
  const handleCheckboxChangeSignUp = (e) => {
    setIsCheckedSignUp(e.target.checked); // Update the checkbox state
  };
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // Update the checkbox state
  };

  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg  bg-white  ">
      <div
        className={`flex select-none gap-2 border-b p-2.5 *:flex-1 *:rounded-md *:border *:p-2 *:text-center *:uppercase *:shadow-inner *:outline-none  ${signUp
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
          onSubmit={handleSubmit(onSubmit)}
          className={`${signUp ? "h-full duration-300" : "invisible h-0 opacity-0"
            } space-y-3 sm:space-y-5`}
        >
          <h1 className="mb-6 uppercase backdrop-blur-sm sm:text-2xl font-bold">
            Sign Up to Tech Heim
          </h1>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
            />
            <div className="relative flex flex-row items-center">
              <input
                type={`${!showPassword ? "password" : "text"}`}
                placeholder="Password"
                {...register("password", {
                  required: true, minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })}
                className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
              />
              <span
                onClick={handleShowPassword}
                className="absolute right-2 cursor-pointer"
              >
                {showPassword ? <BiSolidShow /> : <BiSolidHide />}
              </span>
            </div>
            {/* error validation  */}
            {errors.password?.type === "required" && (
              <p className="text-red-600 mt-2">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600 mt-2">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600 mt-2">Password must be less then 20 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600 mt-2">Password must one upper case, one lower case, one number, one special characters</p>
            )}
          </div>
          <div className="mb-6 flex items-center space-x-2 accent-sky-600">
            <input
              type="checkbox"
              id="keep_signed_in"
              onChange={handleCheckboxChangeSignUp} // Attach onChange to input
            />
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
          {/* Submit button disabled until checkbox is checked */}
          <button
            type="submit"
            disabled={!isCheckedSignUP} // Button is disabled if checkbox is unchecked
            className={`mx-auto form-control w-full block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 bg-blue-500 hover:bg-blue-700 text-white ${!isCheckedSignUP ? "opacity-50 cursor-not-allowed" : ""
              }`}
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



        {/* sign In form */}
        <form
          onSubmit={handleLogin}
          className={`${signUp ? "h-0 opacity-0" : "h-full duration-300"
            } space-y-3 sm:space-y-5`}
        >
          <h1 className="mb-3 uppercase sm:mb-5 sm:text-2xl font-bold">
            Sign In to Tech Heim
          </h1>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
          />
          <div className="relative flex flex-row items-center">
            <input
              type={`${!showPassword ? "password" : "text"}`}
              placeholder="Password"
              required
              name="password"
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
              <input
                type="checkbox"
                id="keep_signed_in"
                onChange={handleCheckboxChange} // Set checkbox state on change
              />
              <label
                className="select-none text-sm font-medium"
                htmlFor="keep_signed_in"
              >
                Keep me signed in
              </label>
            </div>

            <p className="text-left text-sm text-blue-500">
              <a href="#" className="hover:underline">
                Forget password?
              </a>
            </p>
          </div>

          {/* Submit button disabled until checkbox is checked */}
          <button
            type="submit"
            disabled={!isChecked} // Button is disabled if checkbox is unchecked
            className={`mx-auto form-control w-full block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 bg-blue-500 hover:bg-blue-700 text-white ${!isChecked ? "opacity-50 cursor-not-allowed" : ""
              }`}
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
              Sign Up
            </button>
          </p>
        </form>
        <div className="mt-3 space-y-3 sm:space-y-5">
          <div className="divider">OR</div>
          {/* Socal Login */}
          <GoogleLogin />
          <FaceBookLogin />
        </div>
      </div>
    </div>
  );
};

export default Form;
