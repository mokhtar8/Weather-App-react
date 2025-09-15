import React from "react";
import { Link } from "react-router";

export default function ContactUs() {
  return (
    /* header */
    <div className="  bg-[#0F284C]  w-full  h-[844px] relative ">
      <div className="flex items-center   pl-7 h-[95px] bg-[#0F2D57]">
        <Link to={"/UserProfile "}>
          <img
            src="/src/assets/images/landing page img/arrow 1.png"
            alt="arrow"
            className=" w-8 h-8 mr-23 "
          />
        </Link>
        <p className="font-bold text-2xl text-[#CAF7FF] ">Contact Us</p>
      </div>
      {/* body */}
      <div className=" w-full   mt-5  ">
        {/* contact adress*/}
        <div className="    drop-shadow-sm   shadow-black   flex   flex-col     w-full ">
          {/* Name */}
          <div className="  drop-shadow-xl   mb-[1px]  flex   flex-col   justify-center    w-full  h-[78px]  pl-8  bg-[#0F2D57]  shadow-[#0F284C] ">
            <span className=" font-normal text-xl leading-[1] tracking-[0.05em] align-middle text-gray-500">
              Name
            </span>
            <p className=" mt-1.5  font-bold   text-xl leading-[1] tracking-[0.05em] align-middle  text-[#CAF7FF]">
              CyberCloud Inc.
            </p>
          </div>
          {/* Location */}
          <div className="  drop-shadow-xl   mb-[1px]  flex   flex-col   justify-center    w-full  h-[78px]  pl-8  bg-[#0F2D57]  shadow-[#0F284C] ">
            <span className=" font-normal text-xl leading-[1] tracking-[0.05em] align-middle text-gray-500">
              Location
            </span>
            <p className=" mt-1.5  font-bold   text-xl leading-[1] tracking-[0.05em] align-middle  text-[#CAF7FF]">
              N.Baclaso Ave. Cebu City
            </p>
          </div>
          {/* Email */}
          <div className="  drop-shadow-xl   mb-[1px]  flex   flex-col   justify-center    w-full  h-[78px]  pl-8  bg-[#0F2D57]  shadow-[#0F284C] ">
            <span className=" font-normal text-xl leading-[1] tracking-[0.05em] align-middle text-gray-500">
              Email
            </span>
            <p className=" mt-1.5  font-bold   text-xl leading-[1] tracking-[0.05em] align-middle  text-[#CAF7FF]">
              cybercloud@email.com
            </p>
          </div>
          {/* Phone */}
          <div className="   mb-[1px]  flex   flex-col   justify-center    w-full  h-[78px]  pl-8  bg-[#0F2D57]   ">
            <span className=" font-normal text-xl leading-[1] tracking-[0.05em] align-middle text-gray-500">
              Phone
            </span>
            <p className=" mt-1.5  font-bold   text-xl leading-[1] tracking-[0.05em] align-middle  text-[#CAF7FF]">
              +032 5643 3245
            </p>
          </div>
        </div>

        {/* contact massage */}
        <br />
        <form className="flex justify-center px-4.5 ">
          <div className=" w-full h-[389px] px-4.5 rounded-tl-[20px] rounded-tr-[20px] bg-[#CAF7FFB2] flex flex-col  items-center ">
            <p className=" font-bold text-[23px] leading-[1] tracking-[0.05em] text-center align-middle my-5.5">
              Send a message
            </p>

            {/* input name */}
            <input
              type="text"
              name="nmae"
              placeholder="your name"
              className="bg-[#CAF7FFB2] font-normal text-lg text-[#00000080] p-3 outline-0 w-full h-10 rounded-[10px]  "
            />
            {/*   input email*/}
            <input
              type="email"
              name="email"
              placeholder="your email"
              className="bg-[#CAF7FFB2] my-4 font-normal text-lg text-[#00000080]  p-3 outline-0 w-full h-10 rounded-[10px]  "
            />
               {/*   input massage*/}
            <textarea
              name="massage"
              placeholder="Write your message here"
              className="bg-[#CAF7FFB2] font-normal  text-lg text-[#00000080]  p-3 outline-0 w-full h-[199px] rounded-[10px]   "
            />
          </div>
        </form>
      </div>
    </div>
  );
}
