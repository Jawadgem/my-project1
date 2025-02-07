import Image from "next/image";
import React from "react";
import { SlCup } from "react-icons/sl";

const MainCourse = () => {
  const menuItems = [
    {
      subHeading: "Optic Big Breakfast Combo Menu",
      detail: "Toasted French bread topped with romano, cheddar",
      cal: "560 CAL",
      price: "32$",
    },
    {
      subHeading: "Cashew Chicken With Stir-Fry",
      detail: "Gorgonzola, ricotta, mozzarella, taleggio",
      cal: "700 CAL",
      price: "43$",
    },
    {
      subHeading: " Vegetables & Green Salad",
      detail: "Ground cumin, avocados, peeled and cubed",
      cal: "1000 CAL",
      price: "14$",
    },
    {
      subHeading: "Spicy Vegan Potato Curry",
      detail: "Spreadable cream cheese, crumbled blue cheese",
      cal: "560 CAL",
      price: "35$",
    },
  ];

  return (
    <div className="w-full bg-myWhite">
      {/* Background Section */}
 

      {/* Menu Section */}
      <div className="mx-auto w-full max-w-[1560px] body-font px-8 mt-10">
        <div className="flex flex-col lg:flex-row-reverse gap-8 items-start">
          {/* Static Image */}
          <div className="lg:w-1/2 flex justify-end">
            <Image
              src="/assets/menu/mainCourse.png"
              alt="Main Course"
              width={488}
              height={626}
              className="rounded-sm"
            />
          </div>

          {/* Static Content: Icon and Starter Menu */}
         

          {/* Dynamic Content: Menu Items */}
          <div className="lg:w-1/2 flex flex-col">
          <div className="lg:w-1/2 flex flex-col justify-start">
            <div className="mb-4">
              {/* Static Icon */}
              <SlCup className="text-primaryYellow text-[24px]" />
            </div>
            {/* Static Text: Starter Menu */}
            <h1 className="text-[40px] text-black1 font-bold">Main Course</h1>
          </div>
            {menuItems.map((item, index) => (
              <div key={index} className="flex flex-col mb-5">
                <div className="flex justify-between items-center mt-3">
                  <p className="text-black1 text-[24px] font-bold">
                    {item.subHeading}
                  </p>
                  <p className="text-primaryYellow text-[20px] font-bold">
                    {item.price}
                  </p>
                </div>
                <p className="text-gray2 text-[16px] mt-2">{item.detail}</p>
                <p className="text-gray2 text-[16px] mb-5 mt-2">{item.cal}</p>
                <hr className="text-gray1 border-dotted" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCourse;
