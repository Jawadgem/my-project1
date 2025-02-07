import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-white text-black1">
     

      {/* Hero Section */}
      <section
    
  
      >
    
      </section>

      {/* Signin Form */}
      <div>
        <div className="container mx-auto max-w-md bg-white shadow-lg mt-10 rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign up</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium"> First Name</label>
              <input
                type="text"
                className="w-full border  px-3 py-2 focus:ring"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Last Name</label>
              <input
                type="text"
                className="w-full border px-3 py-2 focus:ring"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border px-3 py-2 focus:ring"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Re-type Password</label>
              <input
                type="password"
                className="w-full border px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Re-Enter your password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primaryYellow hover:scale-95 text-myWhite py-2"
            >
              Sign Up
            </button>
           
          </form>
          <div className="text-center mt-8">
            <hr />
            <button className="w-full border text-black py-2 gap-10 mt-2 flex items-center justify-center">
            <FcGoogle className="w-[20px] h-[20px] " />
              Sign up with Google
            </button>
            <button className="w-full border text-black py-2 gap-10 mt-2 flex items-center justify-center">
              <ImAppleinc className="w-[20px] h-[20px]" />
              Sign up with Apple
            </button>
          </div>
        </div>
      </div>

     
    </div>
  );
}
