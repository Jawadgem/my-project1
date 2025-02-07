"use client";
import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/ti";

const AboutUs = () => {
  return (
    <div className="relative mx-auto w-full max-w-[1560px] py-12 px-4 sm:px-6 lg:px-8">
      {/* Content Container */}
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
        {/* Left Side (Text Content) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[28px] mt-10 sm:text-[40px] text-primaryYellow font-greatVibes">
            About us
          </h1>
          <h2 className="text-[32px] sm:text-[48px] lg:text-[60px] text-primaryYellow font-bold mt-4 leading-tight">
            We{" "}
            <span className="text-myWhite">
              Create the best <br />
              foody product
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-myWhite">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <ul className="mt-6 space-y-4 text-myWhite text-sm sm:text-base">
            <li className="flex items-center">
              <TiTick className="text-myWhite mr-2" />
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
              <TiTick className="text-myWhite mr-2" />
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-center">
              <TiTick className="text-myWhite mr-2" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-primaryYellow text-myWhite rounded-full">
            Read More
          </button>
        </div>

        {/* Right Side (Images) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-6">
          {/* Main Image */}
          <Image
            src="/assets/aboutus/about3.png"
            alt="Main Dish"
            width={660}
            height={330}
            className="w-full max-w-[660px] h-auto object-cover rounded-md shadow-lg"
          />
          {/* Small Images */}
          <div className="flex flex-row gap-4 w-full">
            <Image
              src="/assets/aboutus/about1.png"
              alt="Small Dish 1"
              width={320}
              height={194}
              className="w-1/2 h-auto object-cover rounded-md shadow-lg"
            />
            <Image
              src="/assets/aboutus/about2.png"
              alt="Small Dish 2"
              width={320}
              height={194}
              className="w-1/2 h-auto object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
