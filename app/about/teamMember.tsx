import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from "react-icons/fa";

const TeamMember = () => {
  const team = [
    { name: "Mark Henry", role: "Owner", image: "/assets/teammember/team-member.png" },
    { name: "Lucky Helen", role: "Chef", image: "/assets/teammember/team-member.png" },
    { name: "Moon Henry", role: "Founder", image: "/assets/teammember/team-member.png" },
    { name: "Tom Monrow", role: "Specialist", image: "/assets/teammember/team-member.png" },
  ];

  return (
    <section className="relative py-12 w-full mb-10">
      {/* Background Image */}
      <Image
        src="/assets/about-us/team-member2.png"
        alt="Member Img"
        width={1920}
        height={460}
        className="absolute inset-0 object-cover w-full h-[460px]"
      />
      {/* Background Color Overlay */}
      <div className="absolute inset-0 bg-primaryYellow w-full h-[460px] opacity-80 z-0"></div>

      {/* Section Content */}
      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-[32px] sm:text-[48px] font-bold text-white mt-20">Team Member</h2>
          <p className="text-white mt-4 mx-auto max-w-[418px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
          </p>
        </div>

        {/* Team Grid */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6">
          {team.map((member, idx) => (
            <div key={idx} className="relative group w-full max-w-[312px] mx-auto h-[398px]">
              {/* Image */}
              <Image
                src={member.image}
                alt={member.name}
                width={312}
                height={398}
                className="w-full h-full object-cover"
              />

              {/* Name and Role */}
              <div className="absolute bottom-0 left-0 right-0 bg-myWhite p-2">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center">{member.name}</h3>
                <p className="text-gray1 text-center">{member.role}</p>
              </div>

              {/* Social Icons (Visible on Hover) */}
              <div className="absolute top-0 right-0 bottom-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-4 pr-4">
                <div className="bg-myWhite p-2 rounded-sm shadow-lg hover:bg-primaryYellow transition">
                  <FaFacebookF className="text-black1 text-[16px] cursor-pointer" />
                </div>
                <div className="bg-myWhite p-2 rounded-sm shadow-lg hover:bg-primaryYellow transition">
                  <FaTwitter className="text-black1 text-[16px] cursor-pointer" />
                </div>
                <div className="bg-myWhite p-2 rounded-sm shadow-lg hover:bg-primaryYellow transition">
                  <FaYoutube className="text-black1 text-[16px] cursor-pointer" />
                </div>
                <div className="bg-myWhite p-2 rounded-sm shadow-lg hover:bg-primaryYellow transition">
                  <FaPinterestP className="text-black1 text-[16px] cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
