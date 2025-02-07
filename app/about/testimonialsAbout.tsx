import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const TestimonialsAbout = () => {
 return (
     <div>
       <div className="mx-auto -mt-[120px]">
         <div className="container px-5 py-24 mx-auto">
           <div className="flex flex-col text-start w-full">
             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primaryYellow font-greatVibes">
               Testimonials
             </h1>
             <p className="text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[60px] text-black1 font-bold mt-4 leading-tight">
               What our client are saying
             </p>
           </div>
 
           {/* Image */}
           <div className="flex items-center justify-center mx-auto mt-16 px-4">
             <div className="relative group flex flex-col items-center justify-center">
               {/* Profile Image */}
               <Image
                 alt="Customer Image"
                 className="rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
                 src="/assets/testimonials/testimonials.png"
                 width={100}
                 height={100}
               />
 
               {/* White Box with Text */}
               <div className="relative w-full max-w-[868px] h-auto bg-myWhite shadow-lg flex flex-col items-center justify-center p-8 -z-10 -mt-10 md:w-[90%]">
   {/* Quote Icon */}
   <Image
     alt="Quote Icon"
     className="w-[48px] h-[48px] mt-10 mb-4"
     src="/assets/testimonials/quotes.png"
     width={48}
     height={48}
   />
 
   {/* Flower Image */}
   <Image
     alt="Flower"
     className="absolute w-[396px] h-[500px] flex flex-col md:w-[396px] md:h-[500px] md:right-[-180px] md:bottom-[-30px] sm:w-[200px] sm:h-[250px] sm:right-[-50px] sm:bottom-[-50px]"
     src="/assets/testimonials/flower.png"
     width={396}
     height={500}
   />
 
   {/* Text */}
   <p className="w-full max-w-[697px] text-black1 text-[18px] text-center mt-5 md:text-[16px]">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
   </p>
 
   {/* Star Icon */}
   <div className="w-[152px] h-[24px] mt-10 flex space-x-2">
     <IoStar className="text-primaryYellow text-[24px]" />
     <IoStar className="text-primaryYellow text-[24px]" />
     <IoStar className="text-primaryYellow text-[24px]" />
     <IoStar className="text-primaryYellow text-[24px]" />
     <IoStar className="text-gray4 text-[24px]" />
   </div>
 
   <h1 className="text-black1 text-[24px] font-bold pt-5 md:text-[20px]">
     Alamin Hasan
   </h1>
   <h2 className="text-gray3 text-[16px] pt-5 md:text-[14px]">
     Food Specialist
   </h2>
 </div>
 
             </div>
           </div>
 
           {/* Centered Button */}
           <div className="flex justify-center items-center mt-8">
  {/* Star Icon */}
  <div className="w-[152px] h-[24px] mt-10 flex justify-center space-x-2">
    <FaCircle className="text-primaryYellow text-[20px]" />
    <FaCircle className="text-primaryYellow/30 text-[20px]" />
    <FaCircle className="text-primaryYellow/30 text-[20px]" />
    <FaCircle className="text-primaryYellow/30 text-[20px]" />
  </div>
</div>

         </div>
       </div>
     </div>
   );
 };
export default TestimonialsAbout;
