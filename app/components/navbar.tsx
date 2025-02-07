"use client";

import React, { useState } from "react";
import Link from "next/link"; 
import { PiHandbagLight } from "react-icons/pi";
import { LuSearch } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { PiUserLight } from "react-icons/pi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Menu items with links
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Blog", path: "/blogPost" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contactUs" },
  ];

  return (
    <header className="shadow-md w-full max-w-[1320px] h-[87px] mx-auto mt-10">
      {/* Top Logo Section */}
      <div className="text-center">
        <h1 className="text-[24px] font-bold text-primaryYellow">
          Food<span className="text-[24px] font-bold text-myWhite">tuck</span>
        </h1>
      </div>

      {/* Navigation Section */}
      <nav className="flex justify-between items-center px-6 py-3">
        {/* Hamburger Icon (only for small screens) */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-myWhite text-[24px]" />
            
          ) : (
            <FaBars className="text-myWhite text-[24px]" />
            
          )}
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base">
          {menuLinks.map((menu, index) => (
            <li
              key={index}
              className="relative text-myWhite text-[16px] cursor-pointer hover:text-primaryYellow"
            >
              <Link href={menu.path}>{menu.name}</Link>
              <span className="absolute bottom-[-4px] left-0 w-0 h-1 bg-primaryYellow transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Search and Cart (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center w-[310px] bg-black outline outline-2 outline-offset-2 outline-primaryYellow rounded-full px-3 py-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-black text-[16px] text-myWhite w-full ml-2"
            />
            <LuSearch className="text-white text-[24px]" />
          </div>
          {/* Cart Icon */}
          <Link href="/signIn"><PiUserLight className="text-[20px] text-myWhite hover:text-gray-200 cursor-pointer" /></Link>

          <PiHandbagLight className="text-[20px] text-myWhite hover:text-gray-200 cursor-pointer" />
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-black text-myWhite absolute w-full left-0 top-[87px] py-4 px-6 z-10`}
      >
        {/* Search Bar in Mobile */}
        <div className="flex items-center w-full bg-black outline outline-2 outline-offset-2 outline-primaryYellow rounded-full px-3 py-2 mb-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-black text-[16px] text-myWhite w-full ml-2"
          />
          <LuSearch className="text-white text-[24px]" />
        </div>

        {/* Close Icon and Cart */}
        <div className="flex justify-between items-center mb-4">
          <RxCross2
            className="text-white text-[24px] cursor-pointer"
            onClick={toggleMobileMenu}
          />
          <PiHandbagLight className="text-[24px] text-myWhite hover:text-gray-200 cursor-pointer" />
        </div>

        {/* Navigation Links */}
        <ul className="space-y-4">
          {menuLinks.map((menu, index) => (
            <li
              key={index}
              className="text-lg cursor-pointer hover:text-primaryYellow"
              onClick={() => setIsMobileMenuOpen(false)} 
            >
              <Link href={menu.path}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
