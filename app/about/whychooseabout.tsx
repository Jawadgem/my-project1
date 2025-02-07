import Image from "next/image";
import { PiStudentThin } from "react-icons/pi";
import { PiCoffeeThin } from "react-icons/pi";
import { PiPersonThin } from "react-icons/pi";

export default function WhyChooseAbout() {
  const items = [
    {
      icon: PiStudentThin,
      label: "Best Chef",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
    },
    {
      icon: PiCoffeeThin,
      label: "120 Item food",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
    },
    {
      icon: PiPersonThin,
      label: "Clean Environment",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
    },
  ];

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12">
      <div className="text-black1 max-w-[1560px] flex flex-col items-center gap-8 w-full">
        {/* Content Section */}
        <div className="text-center">
          <h2 className="text-[24px] sm:text-[36px] lg:text-[48px] text-black1 font-bold">
            Why Choose Us
          </h2>
          <p className="text-black1 mt-4 leading-relaxed max-w-[90%] sm:max-w-[600px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
        </div>

        {/* Image Grid */}
        <Image
          src="/assets/about-us/whychooseabout.png"
          alt="Why Choose About"
          width={1320}
          height={386}
          className="mt-4 w-full max-w-[1320px] object-cover"
        />

        {/* Icons Section */}
        <div className="flex flex-wrap justify-center gap-10 mt-6">
          {items.map(({ icon: Icon, label, para }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center justify-center w-full sm:w-[300px] px-4 py-6"
            >
              <div className="flex items-center justify-center">
                <Icon className="text-black1 text-[40px] sm:text-[56px]" />
              </div>
              <p className="mt-2 font-semibold text-[16px] sm:text-[18px]">
                {label}
              </p>
              <p className="mt-2 text-sm sm:text-base text-black1 leading-relaxed w-[359px]">
                {para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
