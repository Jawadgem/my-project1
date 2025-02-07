import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiClockClockwiseLight } from "react-icons/pi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-[1560px] body-font">
      {/* Support Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:px-[136px] lg:py-6 md:py-12">
        <div className="text-myWhite md:w-[50%] w-full text-center md:text-left">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-primaryYellow">St</span>ill Need Our Support
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-4">
            Don’t wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row sm:w-auto md:w-auto mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-primaryYellow text-myWhite placeholder-myWhite py-2 px-4 rounded-s-md w-full md:w-auto"
            aria-label="Enter Your Email Address"
          />
          <button
            className="text-primaryYellow bg-myWhite py-2 px-4 rounded-e-md w-full md:w-auto"
            aria-label="Subscribe"
          >
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="my-4 border-primaryYellow mx-6 md:mx-20 lg:mx-[135px]" />

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-20 lg:px-[100px] py-8">
        {/* About Us */}
        <div>
          <h2 className="text-[24px] font-semibold uppercase text-myWhitee">
            About Us
          </h2>
          <p className="text-myWhite text-[16px] mt-4">
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable, safe, and professional chauffeured car
            service in major cities across the world.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="bg-primaryYellow w-[78px] h-[72px] flex justify-center items-center rounded-md">
              <PiClockClockwiseLight className="text-white text-[40px] font-thin" />
            </div>
            <div>
              <h3 className="text-white text-[18px]">Opening Hours</h3>
              <p className="text-myWhite text-[14px]">Mon - Sat (8.00 - 6.00) </p>
              <p className="text-myWhite text-[14px]">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-[24px] font-semibold uppercase text-white">
            Useful Links
          </h2>
          <ul className="text-myWhite mt-4 space-y-6">
            {[
              { name: "About", href: "/about" },
              { name: "News", href: "/news" },
              { name: "Partner", href: "/partner" },
              { name: "Team", href: "/team" },
              { name: "Menu", href: "/menu" },
              { name: "Contacts", href: "/contacts" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="text-[24px] font-semibold uppercase text-white">
            Help?
          </h2>
          <ul className="text-myWhite mt-4 space-y-6">
            {[
              "FAQ",
              "Terms & Conditions",
              "Reporting",
              "Documentation",
              "Support Policy",
              "Privacy",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-[24px] font-semibold uppercase text-white">
            Recent Posts
          </h2>
          <ul className="space-y-4 mt-4">
            {["footer1.png", "footer2.png", "footer3.png"].map(
              (image, index) => (
                <li key={index} className="flex gap-4">
                  <Image
                    src={`/assets/footer/${image}`}
                    alt={`Post ${index + 1}`}
                    width={50}
                    height={50}
                  />
                  <div>
                    <p className="text-gray4 text-sm">20 Feb 2022</p>
                    <p className="text-myWhite text-base">Keep Your Business</p>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray2 w-full px-6 py-6 md:px-20 md:py-6 md:flex md:items-center md:justify-between">
        <p className="text-myWhite text-sm md:text-base">
          Copyright © 2022 by Ayeman. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map(
            (Icon, index) => (
              <div
                key={index}
                className="bg-white w-9 h-9 flex items-center justify-center rounded-sm"
              >
                <Icon className="text-gray2 hover:text-primaryYellow cursor-pointer text-lg" />
              </div>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
