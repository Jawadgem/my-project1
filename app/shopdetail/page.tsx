import React from "react";
import Image from "next/image";
import {
  FaStar,
  FaShoppingCart,
  FaFacebook,
  
} from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { PiGitDiff } from "react-icons/pi";
import { FaVk } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";



const ProductPage = () => {
  return (
    <div className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="flex flex-col items-center">
            <div className="border-2 border-primaryYellow rounded-lg overflow-hidden mb-4">
              <Image
                src="/assets/product-main.jpg" // Replace with your main image
                alt="Product Image"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="flex space-x-4">
              {/* Thumbnail Images */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-2 rounded-lg overflow-hidden">
                  <Image
                    src={`/assets/thumbnail-${i + 1}.jpg`} // Replace with your thumbnails
                    alt={`Thumbnail ${i + 1}`}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Yummy Chicken Chup</h1>
            <p className="text-myWhite bg-primaryYellow rounded-lg w-20 font-medium mb-4 text-center py-1 hover:bg-primaryDark transition-colors">
              In Stock
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
              mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
              in consequat.
            </p>
            <p className="text-2xl font-bold mb-4 text-black1">$54.00</p>
            {/* Rating */}
            <div className="flex items-center space-x-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-primaryYellow" />
              ))}
              <span className="text-gray3">| 5.0 Rating |</span>
              <span className="text-gray3">(22 Reviews)</span>
            </div>{" "}
            <p className="text-gray2">Dictum/cursus/Risus</p>
            {/* Add to Cart */}
            <div className="flex items-center space-x-4 pt-5 mb-6">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 border rounded-md text-center"
              />
              <button className="bg-primaryYellow text-white px-6 py-2 flex items-center space-x-2">
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>
            {/* Wishlist and Compare */}
            <div className="flex space-x-6 text-gray2 text-[16px]">
              <button className="flex items-center space-x-2">
                <GoHeart />
                <span>Add to Wishlist</span>
              </button>
              <button className="flex items-center space-x-2">
              <PiGitDiff />

                <span>Compare</span>
              </button>
            </div>
            {/* Category and Tags */}
            <div className="mt-2">
              <p  className="text-gray2">
                <span>Category:</span> Pizza
              </p>
              <p  className="text-gray2">
                <span>Tags:</span> Shop
              </p>
            </div>
            {/* Social Share */}
            <div className="mt-6 flex space-x-4 items-center">
              <p className="text-gray2 text-[18px]">Share : </p>
                      {[FaYoutube, FaFacebookF, FaTwitter, FaVk, PiInstagramLogoFill].map(
                        (Icon, index) => (
                          <div
                            key={index}
                            className="bg-gray2 w-9 h-9 flex items-center justify-center rounded-full"
                          >
                            <Icon className="text-myWhite hover:text-primaryYellow cursor-pointer text-lg" />
                          </div>
                        )
                      )}
                    </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-10">
          <div className="flex space-x-4 border-b">
            <button className="text-primaryYellow font-bold border-b-2 border-primaryYellow pb-2">
              Description
            </button>
            <button className="text-gray-600 pb-2">Reviews (24)</button>
          </div>
          <div className="mt-6">
            <p className="text-gray3 leading-7">
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla
              sed purus augue, eu euismod tellus. Nam mattis eros nec mi
              sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at
              justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada
              porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis
              justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat
              tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac,
              aliquam in nisl.
              <br />
              <br />
            </p>
            <p className="text-gray3 leading-7">
              Suspendisse cursus sodales placerat. Morbi eu lacinia ex.
              Curabitur blandit justo urna, id porttitor est dignissim nec.
              Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi
              rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus
              quis auctor. Curabitur rutrum massa at volutpat placerat. Duis
              sagittis vehicula fermentum. Integer eu vulputate justo. Aenean
              pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non
              aliquet sem.
            </p >
            <ul className="mt-4 space-y-2 text-gray3">
              <li>
                . Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>. Mauris eget diam magna, in blandit turpis.</li>
            </ul>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden hover:shadow-lg"
              >
                <Image
                  src={`/assets/similar-${i + 1}.jpg`} // Replace with your product images
                  alt={`Similar Product ${i + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    Product {i + 1}
                  </h3>
                  <p className="text-gray-600">$38.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
