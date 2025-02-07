import React from "react";
import Image from "next/image";

const ChooseNpick = () => {
  const menuItems = [
    {
      img: "/assets/chooseNpick/choose-menu1.png",
      heading: "Lettuce Leaf",
      subHeading: "Lacus nisi, et ac dapibus velit in consequat.",
      detail: "12.5$",
    },
    {
      img: "/assets/chooseNpick/choose-menu5.png",
      heading: "Glow Cheese",
      subHeading: "Lacus nisi, et ac dapibus velit in consequat.",
      detail: "12.5$",
    },
    {
      img: "/assets/chooseNpick/choose-menu2.png",
      heading: "Fresh Breakfast",
      subHeading: "Lacus nisi, et ac dapibus velit in consequat.",
      detail: "14.5$",
    },
    {
      img: "/assets/chooseNpick/choose-menu6.png",
      heading: "Italian Pizza",
      subHeading: "Lacus nisi, et ac dapibus velit in consequat.",
      detail: "14.5$",
    },
    {
      img: "/assets/chooseNpick/choose-menu3.png",
      heading: "Mild Butter",
      subHeading: "Lacus nisi, et ac dapibus velit in consequat.",
      detail: "12.5$",
    },
    {
      img: "/assets/chooseNpick/choose-menu7.png",
      heading: "Slice Beef",
      subHeading: "Lacus nisi, et ac dapibus velit in consequat.",
      detail: "12.5$",
    },
    {
      img: "/assets/chooseNpick/choose-menu4.png",
      heading: "Fresh Bread",
      subHeading: "Lacus nisi, et ac dapibus velit in consequat.",
      detail: "12.5$",
    },
    {
      img: "/assets/chooseNpick/choose-menu8.png",
      heading: "Mushroom Pizza",
      subHeading: "Lacus nisi, et ac dapibus velit in consequat.",
      detail: "12.5$",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 mx-auto w-full max-w-[1560px]">
      {/* Section Heading */}
      <div className="flex flex-col text-center w-full mb-10 sm:mb-20">
        <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] font-medium mb-4 text-primaryYellow font-greatVibes">
          Choose & Pick
        </h1>
        <p className="text-[32px] sm:text-[48px] lg:text-[60px] font-bold">
          <span className="text-primaryYellow">Fr</span>
          <span className="text-myWhite">om Our Menu</span>
        </p>
      </div>

      {/* Nav Bar */}
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[14px] sm:text-[16px] font-semibold text-myWhite">
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

      {/* Main Content */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start mt-12 gap-8">
        {/* Left Side Images */}
        <div className="relative w-full md:w-1/3 flex-shrink-0">
          <Image
            src="/assets/chooseNpick/choose-menu-main.png"
            alt="Main Dish"
            width={515}
            height={406}
            className="rounded-lg object-cover w-full h-auto"
          />
          <Image
            src="/assets/chooseNpick/choose-menu-main2.png"
            alt="Overlay Dish"
            width={366}
            height={362}
            className="rounded-lg object-cover absolute top-4 sm:top-6 left-4 sm:left-6 w-4/5 sm:w-[75%] h-auto"
          />
        </div>

        {/* Right Side Menu */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 items-start p-4 bg-opacity-10 bg-black rounded-lg"
            >
              <Image
                src={item.img}
                alt={item.heading}
                width={80}
                height={80}
                className="rounded-sm object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-myWhite">
                  {item.heading}
                </h3>
                <h4 className="text-[12px] sm:text-[14px] text-myWhite">
                  {item.subHeading}
                </h4>
                <p className="text-[16px] sm:text-[18px] font-bold text-primaryYellow mt-1">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseNpick;
