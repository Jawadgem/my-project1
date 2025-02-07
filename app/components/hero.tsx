"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full max-w-[1560px] mx-auto h-auto mt-4">
      {/* Background Image */}
      <Image
        src="/assets/hero/hero-back.png"
        alt="Food Img"
        width={878}
        height={670}
        className="w-full h-[500px] sm:h-[700px] md:h-[950px] object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 sm:px-12">
        {/* Left Side (Social Media + Text Content) */}
        <div className="flex flex-col items-start md:items-center md:flex-row border-l-2 border-white pl-6 md:pl-8 space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 text-white">
              <FaFacebookF className="text-xl cursor-pointer text-myWhite hover:text-primaryYellow" />
              <FaTwitter className="text-xl cursor-pointer text-myWhite hover:text-primaryYellow" />
              <FaPinterestP className="text-xl cursor-pointer text-myWhite hover:text-primaryYellow" />
            </div>

            {/* Text Content */}
            <div className="text-white text-start">
              <h1 className="text-[24px] sm:text-[32px] lg:text-[40px] text-primaryYellow font-greatVibes mt-5">
                Its Quick & Amusing!
              </h1>
              <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[60px] text-primaryYellow font-bold mt-4 leading-tight">
                Th
                <span className="text-myWhite">
                  e Art of speed <br />
                  food Quality
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Varius sed pharetra dictum neque massa congue
              </p>
            <Link href="/menu">  <button className="w-[160px] sm:w-[190px] h-[50px] sm:h-[60px] mt-6 px-6 py-2 bg-primaryYellow text-myWhite rounded-full hover:scale-105 hover:text-black1">
                See Menu
              </button></Link>
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full md:w-[50%] mt-6 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="/assets/hero/hero-main.png"
            alt="Egg Img"
            width={878}
            height={670}
            className="max-w-full h-auto object-contain md:w-[80%] lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
