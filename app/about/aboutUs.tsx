import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

export default function AboutUs() {
  return (
    <div className="text-black1 py-12 px-4 sm:px-6 lg:px-12 mx-auto w-full max-w-[1560px] bg-white mt-[40px]">
      {/* Flex Container for Images and Content */}
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
        {/* Image Grid: Aligned to Left */}
        <div className="lg:w-1/2 grid gap-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 items-start">
            {/* First Image */}
            <Image
              src="/assets/about-us/about-us1.png"
              alt="Main Dish"
              width={336}
              height={536}
              className="rounded-lg h-auto mx-auto"
            />
            {/* Second Column with Two Images */}
            <div className="space-y-4 sm:space-y-6">
              <Image
                src="/assets/about-us/about-us2.png"
                alt="Dish 1"
                width={309}
                height={271}
                className="rounded-lg mx-auto mt-8 sm:mt-16"
              />
              <Image
                src="/assets/about-us/about-us3.png"
                alt="Dish 2"
                width={309}
                height={271}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Content Section: Aligned to Right */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-[16px] sm:text-[18px] text-primaryYellow font-miniverRegular">
            About us <span className="font-sans"> ____</span>
          </h2>
          <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[60px] text-black1 font-bold mt-4">
            Food is an important <br />
            part Of a balanced Diet
          </h1>
          <p className="mt-4 leading-relaxed text-black1 text-[14px] sm:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam <br /> pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit <br /> augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis <br /> vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </p>

          {/* Icons Section */}
          <div className="flex flex-wrap sm:flex-nowrap space-y-4 sm:space-y-0 sm:space-x-6 mt-6 justify-start items-center">
            <div className="bg-primaryYellow w-full sm:w-[195px] h-[58px] rounded-md text-[16px] sm:text-[18px] text-white font-bold flex items-center justify-center">
              Show more
            </div>
            <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start">
              <button className="bg-primaryYellow p-3 rounded-full">
                <IoPlayOutline className="text-white text-[20px] sm:text-[24px]" />
              </button>
              <h1 className="text-[14px] sm:text-[16px] font-bold px-3 sm:px-5">
                Watch video
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
