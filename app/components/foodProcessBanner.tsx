import Image from "next/image";
import React from "react";
import { IoPlayOutline } from "react-icons/io5";
const FoodProcessBanner = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <Image
        src="/assets/foodprocess/foodprocess.png"
        alt="Food Banner"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />

      {/* Overlay */}
   

      {/* Content */}
      <div className="absolute inset-0 flex flex-col mb-5 mr-10 justify-end items-center lg:items-end px-4 lg:px-24 text-center lg:text-left">
        <p className="text-primaryYellow text-[20px] lg:text-[32px] font-greatVibes mb-4">
          Restaurant Active Process
        </p>
        <h1 className="text-white text-end text-[24px] md:text-[32px] lg:text-[48px] font-bold leading-snug">
          <span className="text-primaryYellow">We</span> Document Every Food
          <br />
          Bean Process until it is saved
        </h1>
        <p className="text-white text-end text-[14px] md:text-[16px] lg:text-[18px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque <br /> bibendum non dui volutpat fringilla bibendum.
          Urna, elit augue urna.
        </p>
        <div className="flex items-center space-x-4 mt-6">
          <button className="px-6 py-2 text-myWhite border-2 border-primaryYellow rounded-full text-[16px] font-bold">
            Read More
          </button>
          <button className="flex items-center px-4 py-2 text-white font-bold">
          <span className="flex items-center justify-center bg-primaryYellow rounded-full w-10 h-10 mx-auto mr-2">
  <IoPlayOutline className="text-white text-[20px] " />
</span> Play Video
          </button> 
        </div>
      </div>
    </div>
  );
};

export default FoodProcessBanner;
