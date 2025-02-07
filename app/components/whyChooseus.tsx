import Image from "next/image";
import { PiHamburgerThin, PiWineLight, PiCookieLight } from "react-icons/pi";

export default function WhyChooseUs() {
  return (
    <div className="bg-black text-white py-12 px-6 mx-auto w-full max-w-[1560px]">
      <div className="flex flex-col lg:flex-row-reverse gap-8">
        {/* Content Section */}
        <div className="lg:w-1/2">
          <h2 className="text-[28px] sm:text-[40px] text-primaryYellow font-greatVibes">
            Why Choose Us
          </h2>
          <h1 className="text-[32px] sm:text-[48px] lg:text-[60px] text-primaryYellow font-bold mt-4 leading-tight">
            Ex
            <span className="text-myWhite">
              traordinary Taste And <br /> Experienced
            </span>
          </h1>
          <p className="text-myWhite mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>

          {/* Icons Section */}
          <div className="flex space-x-6 mt-6 justify-center sm:justify-start">
            {[
              { icon: PiHamburgerThin, label: "Fast Food" },
              { icon: PiCookieLight, label: "Snacks" },
              { icon: PiWineLight, label: "Beverages" },
            ].map(({ icon: Icon, label }, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-[102px] h-[102px] bg-primaryYellow rounded-md flex items-center justify-center">
                  <Icon className="text-myWhite text-[56px]" />
                </div>
                <p className="mt-2 text-center">{label}</p>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="mt-8 bg-myWhite p-4 rounded-lg flex items-center">
            <p className="text-[48px] font-bold text-primaryYellow">30+</p>
            <div className="ml-6">
              <p className="text-[24px] font-bold text-black1">Years of</p>
              <p className="text-[24px] text-black1">Experience</p>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="lg:w-1/2 grid gap-8">
          {/* First Row: Two Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Image
              src="/assets/whychooseus/whychoose1.png"
              alt="Main Dish"
              width={362}
              height={356}
              className="rounded-lg h-auto mx-auto"
            />
            <Image
              src="/assets/whychooseus/whychoose2.png"
              alt="Dish 1"
              width={281}
              height={231}
              className="rounded-lg mt-[120px] mx-auto"
            />
          </div>

          {/* Second Row: Three Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Image
              src="/assets/whychooseus/whychoose3.png"
              alt="Dish 2"
              width={244}
              height={306}
              className="rounded-lg mx-auto"
            />
            <Image
              src="/assets/whychooseus/whychoose4.png"
              alt="Dish 3"
              width={281}
              height={231}
              className="rounded-lg mx-auto"
            />
            <div className="flex flex-col space-y-4">
              <Image
                src="/assets/whychooseus/whychoose5.png"
                alt="Dish 4"
                width={161}
                height={168}
                className="rounded-lg mx-auto"
              />
              <Image
                src="/assets/whychooseus/whychoose6.png"
                alt="Dish 5"
                width={161}
                height={168}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>

    
        </div>
      </div>
    </div>
  );
}
