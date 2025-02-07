import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-white text-black1">
      {/* Hero Section */}
      <section className="bg-cover bg-center mt-10 flex items-center justify-center"></section>

      {/* Signin Form */}
      <div>
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign in</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-primaryYellow hover:primaryYellow text-myWhite py-2"
            >
              Sign in
            </button>
            <Link href="../signUp"><button
              type="submit"
              className="w-full bg-primaryYellow hover:primaryYellow text-myWhite mt-2 py-2"
            >
              Sign Up
            </button> </Link>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-primaryYellow">
                Forgot password?
              </Link>
            </p>
          </form>
          <div className="text-center mt-3">
            <hr />
            <button className="w-full border text-black py-2 mt-2 gap-10 flex items-center justify-center">
              <FcGoogle className="w-[20px] h-[20px] " />
              Sign in with Google
            </button>
            <button className="w-full border text-black py-2 mt-2 gap-10 flex items-center justify-center">
              <ImAppleinc className="w-[20px] h-[20px]" />
              Sign in with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
