import Image from "next/image";
import React from "react";
import Link from "next/link";


const MeetOurChefs = () => {
  return (
    <div>
      <div className="text-gray-600 mx-auto w-full max-w-[1560px] body-font -mt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primaryYellow font-greatVibes">
              Chefs
            </h1>
            <p className="text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[60px] text-primaryYellow font-bold mt-4 leading-tight">
              Me
              <span className="text-myWhite">
                et Our Chef
              </span>
            </p>
          </div>

          {/* Image Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative group">
              <Image
                alt="gallery"
                className="rounded-md"
                src="/assets/chef/chef-1.png"
                width={312}
                height={391}
              />
            </div>
            <div className="relative group">
              <Image
                alt="gallery"
                className="rounded-md"
                src="/assets/chef/chef-2.png"
                width={312}
                height={391}
              />
            </div>
            <div className="relative group">
              <Image
                alt="gallery"
                className="rounded-md"
                src="/assets/chef/chef-3.png"
                width={312}
                height={391}
              />
            </div>
            <div className="relative group">
              <Image
                alt="gallery"
                className="rounded-md"
                src="/assets/chef/chef-4.png"
                width={312}
                height={391}
              />
            </div>
          </div>

          {/* Centered Button */}
          <div className="flex justify-center mt-8">
          <Link href="/ourchef"><button className="bg-black1 w-[155px] outline outline-2 outline-primaryYellow rounded-full hover:scale-105 hover:text-myWhite hover:bg-primaryYellow h-[55px] text-[16px] text-myWhite">
              See more
            </button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurChefs;


