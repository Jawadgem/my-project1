import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const MenuTop = () => {
  return (
    <div className="w-full bg-no-repeat bg-center flex justify-center relative bg-myWhite mt-10">
      {/* Background Image */}
      <Image
        src="/assets/menu/menu-bg.png"
        alt="Background Img"
        height={410}
        width={1920}
        className="w-full h-[410px] object-cover"
      />
      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <h1 className="text-white text-[32px] sm:text-[40px] md:text-[48px] font-bold">
          Our Menu
        </h1>
        <div className="flex items-center justify-center gap-2 text-[14px] sm:text-[16px]">
           <Link href="/"> <h2 className="text-myWhite hover:text-primaryYellow cursor-pointer"> Home </h2> </Link>
          <IoIosArrowForward />
          <Link href="/menu"> <h2 className="text-myWhite hover:text-primaryYellow cursor-pointer"> Menu </h2> </Link>        </div>
      </div>
    </div>
  );
};

export default MenuTop;
