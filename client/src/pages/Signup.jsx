import { AiFillGithub } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/authApi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [register, { isLoading, error, data }] = useRegisterMutation();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error]);

  const handleSingUp = (e) => {
    e.preventDefault();

    const signUpData = {
      name,
      email,
      password,
    };
    register(signUpData);
  };

  console.log(data);

  return (
    <div className="min-h-screen ">
      {/* menu banner */}
      <div className="lg:max-w-screen-md md:max-w-lg max-w-lg container mx-auto xl:px-24 px-4">
        <div className="mx-auto pt-32">
          <h2 className="text-center text-2xl font-bold text-[#151515] py-6">
            Sign Up
          </h2>
          <form onSubmit={handleSingUp} className="flex flex-col gap-4 pb-20">
            <label className="flex flex-col gap-4">
              <span className="text-[#444] text-base font-semibold">Name</span>
              <input
                type="text"
                placeholder="Type Here"
                className="border border-gray-200 p-6 text-sm rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="flex flex-col gap-4">
              <span className="text-[#444] text-base font-semibold">Email</span>
              <input
                type="email"
                placeholder="Type Here"
                className="border border-gray-200 p-6 text-sm rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="flex flex-col gap-4">
              <span className="text-[#444] text-base font-semibold">
                Password
              </span>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="border border-gray-200 p-6 text-sm rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="font-Poppins font-medium p-6 bg-[#39DB4A] text-white text-center mt-8 rounded-md"
              disabled={isLoading}
            >
              Sign Up
            </button>
            <div className="text-center flex items-center justify-center gap-2">
              <p>Have An Account?</p>
              <Link to="/login" className="font-semibold text-[#656565]">
                Sign In
              </Link>
            </div>
            <p className="text-center">Or sign in with</p>
            <div className="flex justify-center items-center gap-11">
              <button
                type="button"
                className="bg-gray-200 p-4 rounded-full border-green-500 border-2"
              >
                <BsGoogle className="text-base" />
              </button>
              <button
                type="button"
                className="bg-gray-200 p-3 rounded-full border-green-500 border-2"
              >
                <CgFacebook className="text-2xl" />
              </button>
              <button
                type="button"
                className="bg-gray-200 p-3 rounded-full border-green-500 border-2"
              >
                <AiFillGithub className="text-2xl" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
