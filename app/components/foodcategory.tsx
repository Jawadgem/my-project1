import Image from "next/image";
import React from "react";

const Foodcategory = () => {
  return (
    <div>
      <div className="mx-auto w-full max-w-[1560px] body-font -mt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primaryYellow font-greatVibes">
              Food Category
            </h1>
            <p className="text-[32px] sm:text-[48px] lg:text-[60px] text-primaryYellow font-bold mt-4 leading-tight">
              Ch
              <span className="text-myWhite">oose Food Iteam</span>
            </p>
          </div>

          {/* Image Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Image 1 */}
            <div className="relative group">
              <Image
                alt="gallery"
                className="rounded-md transition-all duration-300 transform group-hover:scale-105"
                src="/assets/foodcategory/food1.png"
                width={305}
                height={328}
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 px-8 py-10 flex flex-col justify-evenly items-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <h2 className="flex justify-center items-center text-[16px] leading-tight bg-myWhite text-center w-[125px] h-[40px] rounded-md text-primaryYellow font-bold mb-2">
                  Save 30%
                </h2>

                {/* Fast Food Dish */}
                <p className="flex justify-center items-center text-[20px] leading-tight bg-primaryYellow w-[206px] h-[46px] rounded-md text-myWhite font-bold">
                  Fast Food Dish
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative group">
              <Image
                alt="gallery"
                className="rounded-md transition-all duration-300 transform group-hover:scale-105"
                src="/assets/foodcategory/food2.png"
                width={305}
                height={328}
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 px-8 py-10 flex flex-col justify-evenly items-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <h2 className="flex justify-center items-center text-[16px] leading-tight bg-myWhite text-center w-[125px] h-[40px] rounded-md text-primaryYellow font-bold mb-2">
                  Save 30%
                </h2>

                {/* Fast Food Dish */}
                <p className="flex justify-center items-center text-[20px] leading-tight bg-primaryYellow w-[206px] h-[46px] rounded-md text-myWhite font-bold">
                  Fast Food Dish
                </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative group">
              <Image
                alt="gallery"
                className="rounded-md transition-all duration-300 transform group-hover:scale-105"
                src="/assets/foodcategory/food3.png"
                width={305}
                height={328}
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 px-8 py-10 flex flex-col justify-evenly items-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <h2 className="flex justify-center items-center text-[16px] leading-tight bg-myWhite text-center w-[125px] h-[40px] rounded-md text-primaryYellow font-bold mb-2">
                  Save 30%
                </h2>

                {/* Fast Food Dish */}
                <p className="flex justify-center items-center text-[20px] leading-tight bg-primaryYellow w-[206px] h-[46px] rounded-md text-myWhite font-bold">
                  Fast Food Dish
                </p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative group">
              <Image
                alt="gallery"
                className="rounded-md transition-all duration-300 transform group-hover:scale-105"
                src="/assets/foodcategory/food4.png"
                width={305}
                height={328}
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 px-8 py-10 flex flex-col justify-evenly items-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {/* Save 30% */}
                <h2 className="flex justify-center items-center text-[16px] leading-tight bg-myWhite text-center w-[125px] h-[40px] rounded-md text-primaryYellow font-bold mb-2">
                  Save 30%
                </h2>

                {/* Fast Food Dish */}
                <p className="flex justify-center items-center text-[20px] leading-tight bg-primaryYellow w-[206px] h-[46px] rounded-md text-myWhite font-bold">
                  Fast Food Dish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foodcategory;
