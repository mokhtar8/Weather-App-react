import React from "react";
import { Link } from "react-router";

export default function ContactUs() {
  return (
    /* header */
    <div className="  bg-[#0F284C]  w-full  h-[844px] relative ">
      <div className="fixed top-0 left-0 w-full z-50 flex items-center max-sm:gap-25 pl-7 h-[95px] bg-[#0F2D57]">
        <Link to= {"/UserProfile "}>
        
          <img
            src="/src/assets/images/landing page img/arrow 1.png"
            alt="arrow"
            className=" w-8 h-8"
          />
        </Link>
        <p className="font-bold text-2xl text-[#CAF7FF] ">About Us</p>
      </div>
      {/* body */}
      <div className="overflow-y-scroll scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-300 pt-[116px] h-[844px]">
  
      </div>
    </div>
  );
}
