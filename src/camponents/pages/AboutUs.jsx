import React from "react";
import { Link } from "react-router";

export default function AboutUs() {
  return (
    /* header */
    <div className="  bg-[#0F284C]  w-full  h-[844px] relative ">
      <div className="fixed top-0 left-0 w-full z-50 flex items-center  pl-7 h-[95px] bg-[#0F2D57]">
        <Link to= {"/UserProfile "}>
        
          <img
            src="/src/assets/images/landing page img/arrow 1.png"
            alt="arrow"
            className=" w-8 h-8 mr-23"
          />
        </Link>
        <p className="font-bold text-2xl text-[#CAF7FF] ">About Us</p>
      </div>
      {/* body */}
      <div className="overflow-y-scroll scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-300 pt-[116px] h-[844px]">
        {/* Who are we */}

        <div className="  flex flex-col w-full h-[190px] bg-[#0F2D57] mt-1 drop-shadow-2xl drop-shadow-[#00000040] p-4 ">
          <span className=" font-bold text-xl text-[#00DFC5] ">
            Who are we?
          </span>
          <span className="  max-sm:w-[355px] h-[119px]  text-[15px] leading-[1.14]  max-sm:tracking-[-0.02em]  max-sm:text-justify  max-sm:align-middle text-[#CAF7FF] mt-4">
            CyberCloud app forecasts weather daily, hourly and monthly. It is a
            weather channel which has accurate weather information. CyberCloud
            detects weather in your current location automatically. CyberCloud
            is very helpful with everybody. If you know weather information, You
            can prepare your plan carefully, you will be sucessful at work and
            have better life.
          </span>
        </div>
        {/* Mission*/}
        <div className=" flex flex-col w-full h-[280px] bg-[#0F2D57] mt-2.5 drop-shadow-2xl drop-shadow-[#00000040] p-4 ">
          <span className=" font-bold text-xl text-[#00DFC5] "> Mission</span>
          <span className="  max-sm:w-[355px] h-[119px]  text-[15px]  max-sm:leading-[1.14]  max-sm:tracking-[-0.02em]  max-sm:text-justify  max-sm:align-middle text-[#CAF7FF] mt-4">
            To instantly access forecasts, warnings and other useful weather
            information on our mobile phones. To provide the public with
            unprecedented flexibility: users choose the information they want,
            how they get it and how it looks. Present weather and climate
            information services to the right people, in the right places and at
            the right times, so they can make informed lifesaving, business and
            leisure decisions. Display the weather minute basis accurately,
            hourly, daily, weekly and even monthly. provide information people
            and organizations can use to reduce weather-related losses and
            enhance societal benefits.
          </span>
        </div>

        {/* Mission*/}

        <div className=" flex flex-col w-full h-[275px] bg-[#0F2D57] mt-2.5 drop-shadow-2xl drop-shadow-[#00000040] p-4 ">
          <span className=" font-bold text-xl text-[#00DFC5] ">Vision</span>
          <span className="  max-sm:w-[355px] h-[119px]   max-sm:text-[15px] leading-[1.14]  max-sm:tracking-[-0.02em]  max-sm:text-justify  max-sm:align-middle text-[#CAF7FF] mt-4">
            We see a world where everybody lacks information about the weather —
            united in the joy of movement. Driven by our passion for informing
            and our instinct for innovation, we aim to bring weather information
            to every people in the world. To be the world's most successful and
            important information application company. Successful in helping out
            customers apply technology to solve their problems. To create value
            in the community.
          </span>
        </div>
      </div>
    </div>
  );
}
