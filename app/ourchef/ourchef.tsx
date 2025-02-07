"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

// Define the Chef type
interface Chef {
  _id: string;
  name: string;
  designation: string;
  imageUrl: string;
  image: {
    alt?: string; // Optional field for alt text
  };
}

// Sanity image URL builder
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const Ourchef: React.FC = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    // Fetch chefs data from Sanity
    client
      .fetch<Chef[]>(
        `*[_type == "chef"]{
          _id,
          name,
          designation,
          "imageUrl": image.asset->url,
          image{alt}
        }`
      )
      .then((data) => setChefs(data))
      .catch((error) => console.error("Error fetching chefs:", error));
  }, []);

  return (
    <div className="text-gray-600 mx-auto w-full max-w-[1560px] body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {chefs.map((chef) => (
            <div key={chef._id} className="text-center">
              {/* Chef Image */}
              <div className="relative group">
                <Image
                  alt={chef.image?.alt || chef.name}
                  src={
                    chef.imageUrl
                      ? urlFor(chef.imageUrl).width(312).height(391).url()
                      : "/fallback-image.png" // if some error
                  }
                  width={312}
                  height={391}
                />
              </div>
              {/* Chef Name and Designation */}
              <h3 className="text-[18px] text-black1 font-bold mt-4">
                {chef.name}
              </h3>
              <p className="text-[16px] text-black1">{chef.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourchef;
