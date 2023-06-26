import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className=" mx-auto  ">
      <div className="bg-[#d8c0f6] px-6 lg:px-16 py-10 ">
        <Navbar />
        <div className="pl-20  text-white flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-xl sm:text-xl md:text-xl lg:text-3xl">
            Business involves <br className="lg:flex hidden"/>continuous selecting and hiring of the <br className="lg:flex hidden" />  right people who can contribute to the growth of the organization
              online
            </p>
            <p className=" text-sm sm:text-base lg:text-lg text-gray-500">
              Learn at your own pace, with lifetime <br  className="lg:flex hidden"/> access on mobile and desktop
            </p>
            <button className=" btn btn-sm lg:btn-lg bg-[#a76cef] text-white rounded-full border-none w-36 lg:w-44 capitalize">Get Started</button>
          </div>
          <img src="/assets/img.webp" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
