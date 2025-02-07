"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { IoStar } from "react-icons/io5";

const Shopleftside = () => {
  const categories = [
    { id: 1, name: "Sandwiches" },
    { id: 2, name: "Burger" },
    { id: 3, name: "Chicken Chup" },
    { id: 4, name: "Drink" },
    { id: 5, name: "Pizza" },
    { id: 6, name: "Thi" },
    { id: 7, name: "Non-Veg" },
    { id: 8, name: "Uncategorized" },
  ];

  const shopImgs = [
    {
      img: "/assets/shop/shopicon.png",
      imgAlt: "Shop Image",
      product: "Pizza",
      icon: [1, 1, 0, 0, 0], // 1 for yellow star, 0 for gray star
      price: "$35.00",
    },
    {
      img: "/assets/shop/shopicon.png",
      imgAlt: "Shop Image",
      product: "CupShake",
      icon: [1, 1, 0, 0, 0], // 1 for yellow star, 0 for gray star
      price: "$35.00",
    },
    {
      img: "/assets/shop/shopicon.png",
      imgAlt: "Cookies",
      product: "Pizza",
      icon: [1, 1, 0, 0, 0], // 1 for yellow star, 0 for gray star
      price: "$35.00",
    },
    {
      img: "/assets/shop/shopicon.png",
      imgAlt: "Shop Image",
      product: "Burger",
      icon: [1, 1, 0, 0, 0], // 1 for yellow star, 0 for gray star
      price: "$35.00",
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckboxChange = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id)
        ? prev.filter((categoryId) => categoryId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto w-[312px] h-auto border-[1px] border-opacity-30 border-gray4 mt-8">
      {/* Search Input */}
      <div className="relative w-full">
        <input
          type="text"
          className="p-2 w-full h-[46px] text-gray4 bg-primaryYellow/10 pl-3 pr-10"
          placeholder="Search Product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primaryYellow h-[46px] w-[46px] flex items-center justify-center -mr-3">
          <LuSearch className="text-white text-[24px]" />
        </div>
      </div>

      {/* Categories */}
      <div className="p-3">
        <h1 className="text-black1 text-[20px] font-bold">Category</h1>
        {filteredCategories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              id={`category-${category.id}`}
              className="w-[14px] h-[14px] bg-myWhite border-gray1 focus:ring-black1"
              checked={selectedCategories.includes(category.id)}
              onChange={() => handleCheckboxChange(category.id)}
            />
            <label
              htmlFor={`category-${category.id}`}
              className="text-[18px] text-black1"
            >
              {category.name}
            </label>
          </div>
        ))}
      </div>

      {/* Latest Products */}
      <div className="-ml-2">
  <h1 className="text-black1 text-[20px] font-bold pt-8 mb-8">Latest Products</h1>
  <div className="flex flex-col gap-4">
    {shopImgs.map((item, i) => (
      <div
        key={i}
        className="relative group w-full h-auto border-[1px] border-myWhite flex"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <Image
            alt={item.imgAlt}
            className=""
            src={item.img}
            width={72}
            height={65}
          />
        </div>

        {/* Product Info */}
        <div className="px-3 flex flex-col justify-center">
  <p className="text-gray2 text-[16px]">{item.product}</p>
  <div className="flex space-x-2 mt-1">
    {item.icon.map((star, index) => (
      <IoStar
        key={index}
        className={`text-[16px] ${
          star === 1 ? "text-primaryYellow" : "text-gray4"
        }`}
      />
    ))}
  </div>
  <p className="text-gray2 text-[16px] mt-1">{item.price}</p>
</div>

      </div>
    ))}
  </div>
  <h1 className="text-black1 text-[20px] font-bold pt-8 mb-8">Products Tags</h1>
  <div className="flex flex-wrap gap-4 text-[16px] text-gray2 text-star mx-auto">
  <p className="hover:text-primaryYellow hover:underline cursor-pointer">Services</p>
  <p className="hover:text-primaryYellow hover:underline cursor-pointer">Our Menu</p>
  <p className="hover:text-primaryYellow hover:underline cursor-pointer">Pizza</p>
  <p className="hover:text-primaryYellow hover:underline cursor-pointer">Cupcake</p>
  <p className="hover:text-primaryYellow hover:underline cursor-pointer">Burger</p>
  <p className="hover:text-primaryYellow hover:underline cursor-pointer">Cookies</p>
  <p className="hover:text-primaryYellow hover:underline cursor-pointer">Our Shop</p>
  <p className="hover:text-primaryYellow hover:underline cursor-pointer">Tandoori Chicken</p>
</div>

</div>

    </div>
  );
};

export default Shopleftside;
