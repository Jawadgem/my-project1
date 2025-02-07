import React from "react";
import Image from "next/image";

const OurFoodMenu = () => {
  const menuItems = [
    {
      heading: "Alder Grilled Chinook Salmon",
      price: "32$",
      detail: "Toasted French bread topped with romano, cheddar",
      cal: "560 CAL",
    },
    {
      heading: "Alder Grilled Chinook Salmon",
      price: "32$",
      detail: "Toasted French bread topped with romano, cheddar",
      cal: "560 CAL",
    },
    {
      heading: "Alder Grilled Chinook Salmon",
      price: "32$",
      detail: "Toasted French bread topped with romano, cheddar",
      cal: "560 CAL",
    },
    {
      heading: "Alder Grilled Chinook Salmon",
      price: "32$",
      detail: "Toasted French bread topped with romano, cheddar",
      cal: "560 CAL",
    },
    {
      heading: "Alder Grilled Chinook Salmon",
      price: "32$",
      detail: "Toasted French bread topped with romano, cheddar",
      cal: "560 CAL",
    },
    {
      heading: "Alder Grilled Chinook Salmon",
      price: "32$",
      detail: "Toasted French bread topped with romano, cheddar",
      cal: "560 CAL",
    },
    {
      heading: "Alder Grilled Chinook Salmon",
      price: "32$",
      detail: "Toasted French bread topped with romano, cheddar",
      cal: "560 CAL",
    },
    {
      heading: "Alder Grilled Chinook Salmon",
      price: "32$",
      detail: "Toasted French bread topped with romano, cheddar",
      cal: "560 CAL",
    },
    
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 mx-auto w-full max-w-[1560px]">
      {/* Section Heading */}
      <div className="flex flex-col text-center w-full mb-10 sm:mb-20">
        
        <p className="text-[32px] sm:text-[32px] lg:text-[48px] font-bold">
          <span className="text-black1">Our Food Menu</span>
         
        </p>
        <p className="text-gray2 text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Varius sed pharetra dictum neque massa congue</p>
      </div>

      {/* Nav Bar */}
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[14px] sm:text-[16px] text-gray2">
        {[
          "Breakfast",
          "Lunch",
          "Dinner",
          "Dessert",
          "Drink",
          "Snack",
          "Soups",
        ].map((category) => (
          <button
            key={category}
            className="hover:text-primaryYellow transition-colors duration-200"
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Menu */}
   

      <div className="w-full flex justify-center mt-10">
        <hr className="border-gray" />
  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-2">
    {menuItems.map((item, index) => (
      <div
        key={index}
        className="flex gap-4 items-start p-4 rounded-lg"
      >
        <div>
         <h3 className="text-[18px] sm:text-[20px] font-bold text-black1 hover:text-primaryYellow flex items-center justify-between">
  <span>{item.heading}</span>
  <span className="text-[18px] sm:text-[20px] text-primaryYellow ml-4">
    {item.price}
  </span>
</h3>
          <p className="text-[16px] sm:text-[16px] text-gray3 mt-1">
            {item.detail}
          </p>
          <p className="text-[16px] sm:text-[16px] text-gray3 mt-1">
            {item.cal}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
  );
};

export default OurFoodMenu;
