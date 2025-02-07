import React from "react";
import Image from "next/image";

const Clients = () => {
  const services = [
    {
      icon: (
        <Image
          src="/assets/client/client-1.png"
          alt="Chef"
          width={120}
          height={120}
        />
      ),
      title: "Professional Chefs",
      description: "420",
    },
    {
      icon: (
        <Image
          src="/assets/client/client-2.png"
          alt="Chef"
          width={120}
          height={120}
        />
      ),
      title: "Items Of Food",
      description: "320",
    },
    {
      icon: (
        <Image
          src="/assets/client/client-3.png"
          alt="Chef"
          width={120}
          height={120}
        />
      ),
      title: "Years Of Experience",
      description: "30+",
    },
    {
      icon: (
        <Image
          src="/assets/client/client-4.png"
          alt="Chef"
          width={120}
          height={120}
        />
      ),
      title: "Happy Customers",
      description: "220",
    },
  ];

  return (
    <section className="relative body-font w-full mt-[60px] px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-85 z-10"></div>

  {/* Background Image */}
  <Image
    src="/assets/client/cleint-main.png"
    alt="Main Background"
    layout="fill"
    objectFit="cover"
    className="z-0"
  />
</div>


      {/* Content */}
      <div className="relative z-10 max-w-[1170px] mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center rounded-full mt-12 mb-4">
                {service.icon}
              </div>

              {/* Title and Description */}
              <div>
                <h3 className="text-[20px] sm:text-[24px] font-semibold tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-[28px] sm:text-[40px] font-bold">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
