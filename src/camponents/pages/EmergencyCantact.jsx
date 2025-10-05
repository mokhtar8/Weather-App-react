import { useState } from "react";
import Footer from "./RepetitivePage/Footer";
import { Link } from "react-router";



export default function EmergencyCantact() {
  const [tempUnit, setTempUnit] = useState("C");
  const [active, setActive] = useState("");
  const [activateInput, setActivateInput] = useState("input");
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("CONTACTS");


  return (
    /*header  */
    <div className=" bg-[#0F284C]  w-full h-[844px]">
   <nav className=" bg-[#4766821A]  text-[#CAF7FF]  relative h-[80px] ">
      <div
        className={` flex  flex-row-reverse  justify-between  items-center  p-4 ${
          activateInput === "img" ? " hidden" : " flex "
        }`}
      >
        <img
          src="/src/assets/images/search.png"
          alt="search"
          onClick={() => setActivateInput("img")}
          className={` cursor-pointer w-6  h-6 `}
        />

        <h1 className=" text-[28px]  text-[#CAF7FF]  font-bold">Emergency Contacts</h1>

        <button onClick={() => setOpen(!open)} className=" block  ">
          <svg
            className=" w-8 cursor-pointer h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <div
        className={` fixed  z-60  top-0  left-0  h-full  w-[335px]  bg-[#0F284C]  text-white  transform  transition-transform  duration-300  ease-in-out
    overflow-y-auto  
    ${open ? " translate-x-0" : " -translate-x-full"}
  `}
      >
        <div>
          <img
            src="/src/assets/images/landing page img/BG.png"
            alt="bg"
            className="  w-[335px]      h-[209px]"
          />

          <div className="   fixed   top-20    ml-5 ">
            <img
              src="/src/assets/images/landing page img/user.png"
              alt="user"
              className=" w-16  h-16"
            />
            <p className=" text-[20px]  font-bold  text-[#CAF7FF]  mt-1">
              Patrick Bacalso
            </p>
            <p className=" text-[15px]  font-normal  -translate-y-1.5  text-[#CAF7FF]">
              CSIT238
            </p>
          </div>

          <div>
            <p className=" pt-5  pl-5  text-[20px]  font-normal   text-[#ffffff]">
              Weather
            </p>
            <div className=" flex  w-full  h-[94px]   justify-center  items-center">
              <button
                onClick={() => setTempUnit("C")}
                className={` px-4  py-2  w-20  h-16  font-bold  text-2xl ${
                  tempUnit === "C"
                    ? " bg-[#00DFC580]  text-[#CAF7FF]"
                    : "  text-[#CAF7FF]"
                }`}
              >
                C°
              </button>
              <button
                onClick={() => setTempUnit("F")}
                className={` px-4  py-2  w-20   h-16  font-bold ${
                  tempUnit === "F"
                    ? " bg-[#00DFC580]  text-[#CAF7FF]"
                    : " text-[#CAF7FF]"
                }`}
              >
                F°
              </button>
            </div>

            <ul>
              <li
                onClick={() => setActive(active === "add" ? null : "add")}
                className={` flex  items-center  text-xl    font-bold  gap-1.5  pl-5  w-[335px]  h-[75px]  ${
                  active === "add"
                    ? " bg-[#00DFC580]  text-[#CAF7FF]"
                    : " text-[#CAF7FF]"
                }`}
              >
                <img
                  src="/src/assets/images/landing page img/cloudy 1.png"
                  alt="cloudy"
                  className=" w-8  h-8"
                />
                <span>Add to home screen</span>
              </li>
              <Link to={"/UserProfile"}>
                <li
                  onClick={() => setActive(active === "edit" ? null : "edit")}
                  className={` items-center  text-xl   font-bold  flex  gap-1.5  pl-5  w-[335px]  h-[75px]  ${
                    active === "edit"
                      ? " bg-[#00DFC580]  text-[#CAF7FF]"
                      : " text-[#CAF7FF]"
                  }`}
                >
                  <img
                    src="/src/assets/images/landing page img/editing 1.png"
                    alt="editing"
                    className=" w-7  h-7"
                  />{" "}
                  <span className=" ml-2 ">Edit profile</span>
                </li>
              </Link>
              <li
                onClick={() => setActive(active === "cust" ? null : "cust")}
                className={` items-center  text-xl   font-bold  flex  gap-1.5  pl-5  w-[335px]  h-[75px]  ${
                  active === "cust"
                    ? " bg-[#00DFC580]  text-[#CAF7FF]"
                    : " text-[#CAF7FF]"
                }`}
              >
                <img
                  src="/src/assets/images/landing page img/widget 1.png"
                  alt="editing"
                  className=" w-[30px]  h-[30px]"
                />{" "}
                <span className=" ml-2">Customize widget</span>
              </li>
              <hr className=" w-[270px]  border   border-[#CAF7FF]   mt-3.5  ml-[30px] " />

              <li
                onClick={() => setActive(active === "sett" ? null : "sett")}
                className={` items-center  text-xl  mt-3   font-bold  flex  gap-1.5  pl-5  w-[335px]  h-[75px]  ${
                  active === "sett"
                    ? " bg-[#00DFC580]  text-[#CAF7FF]"
                    : " text-[#CAF7FF]"
                }`}
              >
                <img
                  src="/src/assets/images/landing page img/setting (1) 1.png"
                  alt="setting"
                  className=" w-[30px]  h-[30px]"
                />{" "}
                <span className=" ml-2">Settings</span>
              </li>

              <li
                onClick={() => setActive(active === "send" ? null : "send")}
                className={` items-center  text-xl  mt-3   font-bold  flex  gap-1.5  pl-5  w-[335px]  h-[75px]  ${
                  active === "send"
                    ? " bg-[#00DFC580]  text-[#CAF7FF]"
                    : " text-[#CAF7FF]"
                }`}
              >
                <img
                  src="/src/assets/images/landing page img/feedback.png"
                  alt="feedback"
                  className=" w-[30px]  h-[30px]"
                />
                <span className=" ml-2">Send feedback</span>
              </li>

              <li
                onClick={() => setActive(active === "help" ? null : "help")}
                className={` items-center  text-xl  mt-3   font-bold  flex  gap-1.5  pl-5  w-[335px]  h-[77px]  ${
                  active === "help"
                    ? " bg-[#00DFC580]  text-[#CAF7FF]"
                    : " text-[#CAF7FF]"
                }`}
              >
                <img
                  src="/src/assets/images/landing page img/question (1).png"
                  alt="question"
                  className=" w-[30px]  h-[29px]"
                />{" "}
                <span className=" ml-2">Help</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {open && (
        <div
          className=" fixed inset-0  bg-black  opacity-55  z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
<div 
 className={`w-full  flex flex-row-reverse justify-center items-center h-full p-2.5  ${
          activateInput === "input" ? "hidden " : "flex  "
        }`}

>
 <img
          onClick={() => setActivateInput("input")}
            src="/src/assets/images/right-arrow-icon-7576.png"
            alt="right-arrow"
            className=" w-15 cursor-pointer h-15"
          />
          <input
            type="text"
            placeholder="search"
            className=" bg-transparent  text-xl border-b-2  p-2 border-[#CAF7FF]  font-normal  text-[#CAF7FF]  placeholder-[#CAF7FF]  flex-1  w-72  outline-none"
            autoComplete="on"
            name="search"
          />
</div>
    
    </nav>
      {/* body */}
      {/* tip and contact btn */}
      <div className=" flex   justify-end  m-6  items-baseline">
        <div className=" flex  flex-col  items-end">
          <div className=" flex   h-6  rounded-full  overflow-hidden  border  border-[#00DFC5]">
            <button
              onClick={() => setActiveTab("CONTACTS")}
              className={` w-[59px]  cursor-pointer   rounded-[50px]  text-[10px]  font-normal  transition-colors  ${
                activeTab === "CONTACTS"
                  ? " bg-[#00DFC5]  text-[#0F284C]  rounded-full"
                  : "  text-[#CAF7FF]   rounded-full"
              }`}
            >
              CONTACTS
            </button>

            <button
              onClick={() => setActiveTab("TIPS")}
              className={` w-[59px]   text-[10px] cursor-pointer font-normal  transition-colors ${
                activeTab === "TIPS"
                  ? " bg-[#00DFC5]  text-[#0F284C]    rounded-full"
                  : "  text-[#CAF7FF]   rounded-full  "
              }`}
            >
              TIPS
            </button>
          </div>
        </div>
      </div>
      {/* numbers */}
      {/* CONTACTS */}
      <div
        className={`  flex gap-3.5   flex-col  items-center    h-[630px]  overflow-y-auto   p-4  ${
          activeTab === "TIPS" ? " hidden" : "  flex"
        } `}
      >
        {/* HOSPITAL */}
        <div className=" w-[370px]  h-[115px]  rounded-[20px] shadow-md shadow-[#00000040] bg-[#0F2D57]  flex  justify-between px-5  items-center">
          <div className=" flex flex-col">
            <p className="  text-[20px]    font-bold   text-[#CAF7FF]">
              HOSPITAL
            </p>
            <p className=" text-[16px] -mt-1.5 font-normal  text-gray-300 ">
              +032 1234 5678
            </p>
          </div>
          <div className=" flex justify-between w-24  ">
            <img
              src="/src/assets/images/Daily-weather/letter 1.png"
              alt="letter"
              className=" w-9  h-8"
            />{" "}
            <img
              src="/src/assets/images/Daily-weather/telephone 1.png"
              alt="telephone"
              className=" w-9  h-8"
            />
          </div>
        </div>
        {/* NDRRMC */}
        <div className=" w-[370px]  h-[115px] shadow-[#00000040]  shadow-md  rounded-[20px]  bg-[#0F2D57]  flex  justify-between px-5  items-center">
          <div className=" flex flex-col">
            <p className="  text-[20px]    font-bold   text-[#CAF7FF]">
              NDRRMC
            </p>
            <p className=" text-[16px] -mt-1.5 font-normal  text-gray-300 ">
              +032 1234 5678
            </p>
          </div>
          <div className=" flex justify-between w-24  ">
            <img
              src="/src/assets/images/Daily-weather/letter 1.png"
              alt="letter"
              className=" w-9  h-8"
            />{" "}
            <img
              src="/src/assets/images/Daily-weather/telephone 1.png"
              alt="telephone"
              className=" w-9  h-8"
            />
          </div>
        </div>

        {/* BFP */}
        <div className=" w-[370px]  h-[115px] shadow-[#00000040]  shadow-md  rounded-[20px]  bg-[#0F2D57]  flex  justify-between px-5  items-center">
          <div className=" flex flex-col">
            <p className="  text-[20px]    font-bold   text-[#CAF7FF]">BFP</p>
            <p className=" text-[16px] -mt-1.5 font-normal  text-gray-300 ">
              +032 1234 5678
            </p>
          </div>
          <div className=" flex justify-between w-24  ">
            <img
              src="/src/assets/images/Daily-weather/letter 1.png"
              alt="letter"
              className=" w-9  h-8"
            />
            <img
              src="/src/assets/images/Daily-weather/telephone 1.png"
              alt="telephone"
              className=" w-9  h-8"
            />
          </div>
        </div>
        {/* BARANGAY */}
        <div className=" w-[370px]  h-[115px] shadow-[#00000040]  shadow-md  rounded-[20px]  bg-[#0F2D57]  flex  justify-between px-5  items-center">
          <div className=" flex flex-col">
            <p className="  text-[20px]    font-bold   text-[#CAF7FF]">
              BARANGAY
            </p>
            <p className=" text-[16px] -mt-1.5 font-normal  text-gray-300 ">
              +032 1234 5678
            </p>
          </div>
          <div className=" flex justify-between w-24  ">
            <img
              src="/src/assets/images/Daily-weather/letter 1.png"
              alt="letter"
              className=" w-9  h-8"
            />
            <img
              src="/src/assets/images/Daily-weather/telephone 1.png"
              alt="telephone"
              className=" w-9  h-8"
            />
          </div>
        </div>
        {/* BARANGAY */}
        <div className=" w-[370px]  h-[115px] shadow-[#00000040]  shadow-md  rounded-[20px]  bg-[#0F2D57]  flex  justify-between px-5  items-center">
          <div className=" flex flex-col">
            <p className="  text-[20px]    font-bold   text-[#CAF7FF]">
              POLICE
            </p>
            <p className=" text-[16px] -mt-1.5 font-normal  text-gray-300 ">
              +032 1234 5678
            </p>
          </div>
          <div className=" flex justify-between w-24  ">
            <img
              src="/src/assets/images/Daily-weather/letter 1.png"
              alt="letter"
              className=" w-9  h-8"
            />
            <img
              src="/src/assets/images/Daily-weather/telephone 1.png"
              alt="telephone"
              className=" w-9  h-8"
            />
          </div>
        </div>
      </div>
      {/* TIPS */}

      <div
        className={`   flex-col flex items-center     h-[630px]  overflow-y-auto   p-4  ${
          activeTab === "CONTACTS" ? " hidden" : "  flex flex-col  items-center  "
        } `}
      >
        {/* Advisory */}
        
        <div className="flex flex-col gap-3.5">
            <p className="font-bold text-[20px] leading-[1] tracking-wide  text-[#00DFC5] ml-2  ">
            Advisory
          </p>
          {/* Advisory 1 */}
          <div className=" w-[370px]  h-[112px]  rounded-[20px] shadow-md shadow-[#00000040] bg-[#0F2D57]   ">
            <div className=" flex flex-col justify-center p-4">
              <p className=" font-bold text-15px leading-[1] tracking-5p align-middle   text-white">
                Advisory 1:
              </p>
              <p className="  font-normal text-sm leading-[1] tracking-wide text-justify pt-3.5 align-middle  text-white ">
                The center of Super typhoon "ODETTE" was estimated based on all
                available data at 700 km West of Southern Cebu.
              </p>
            </div>
          </div>

          {/* Advisory 2 */}
          <div className=" w-[370px]  h-[112px]  rounded-[20px] shadow-md shadow-[#00000040] bg-[#0F2D57]   ">
            <div className=" flex flex-col justify-center p-4">
              <p className=" font-bold text-15px leading-[1] tracking-5p align-middle   text-white">
                Advisory 2:
              </p>
              <p className=" w-[300px] font-normal text-sm leading-[1] tracking-wide text-justify pt-3.5 align-middle  text-white ">
                At 4:00 PM, maximum sustained winds of up to 105kph near the
                center and gustiness of up to 130 kph.
              </p>
            </div>
          </div>
          {/* Advisory 2 */}
          <div className=" w-[370px]  h-[112px]  rounded-[20px] shadow-md shadow-[#00000040] bg-[#0F2D57]   ">
            <div className=" flex flex-col justify-center p-4">
              <p className=" font-bold text-15px leading-[1] tracking-5p align-middle   text-white">
                Advisory 3:
              </p>
              <p className="  w-[300px] font-normal text-sm leading-[1]  tracking-wide text-justify pt-3.5 align-middle  text-white ">
                At 10:00 PM, maximum sustained winds of up to 110kph near the
                center and gustiness of up to 140 kph.
              </p>
            </div>
          </div>
          <p className="font-normal text-sm text-[#00DFC5] ml-3 leading-[1] tracking-5p align-middle">
            Load more...
          </p>
        </div>

        {/* Tips */}

        <div className="flex flex-col  gap-3.5">
          <p className="font-bold text-[20px] leading-[1] tracking-wide  text-[#00DFC5] ml-2  mt-5 ">
            Tips
          </p>
          {/* Tip 1: */}
          <div className=" w-[370px]  h-[112px]  rounded-[20px] shadow-md shadow-[#00000040] bg-[#0F2D57]   ">
            <div className=" flex flex-col justify-center p-4">
              <p className=" font-bold text-15px leading-[1] tracking-5p align-middle   text-white">
                Tip 1:
              </p>
              <p className="  w-[300px] font-normal text-sm leading-[1]  tracking-wide text-justify pt-3.5 align-middle  text-white ">
                Stay inside as much as possible. Your home is the safest place
                to be; don’t go out unless extremely necessary.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer/>

    </div>
  );
}
