import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
// import Contact from "./Contact";

const Footer = () => {
  return (
  
    <div className=" mx-auto">
      <div className="bg-gray-500 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
        
          <p className="text-center lg:text-start">20 Osgood Rd, Milford, NH 03055, IND +1283871239190213021</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Company</p>
          <p className="text-base">Careers</p>
          <p className="text-base">Employe</p>
          <p className="text-base">Support</p>
          <p className="text-base">Contact</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Product</p>
          <p className="text-base">Courses</p>
          <p className="text-base">Pricing</p>
          <p className="text-base">Blog</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Legal</p>
          <p className="text-base">Terms & Conditions</p>
          <p className="text-base">Privacy policy</p>
        </div>
        <div className="flex items-center gap-5">
                <BsFacebook className="text-3xl"/>
                <BsTwitter className="text-3xl "/>
                <BsInstagram className="text-3xl "/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
