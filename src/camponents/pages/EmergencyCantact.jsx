import { useState } from "react";
import Footer from "./RepetitivePage/Footer";
import Header from "./RepetitivePage/Header";



export default function EmergencyCantact() {

  const [activeTab, setActiveTab] = useState("CONTACTS");


  return (
    /*header  */
    <div className=" bg-[#0F284C]  w-full h-[844px]">
  <Header/>
      {/* body */}
      {/* tip and contact btn */}
      <div className=" flex   justify-end  m-6  items-baseline">
        <div className=" flex  flex-col  items-end">
          <div className=" flex   h-6  rounded-full  overflow-hidden  border  border-[#00DFC5]">
            <button
              onClick={() => setActiveTab("CONTACTS")}
              className={` w-[59px]     rounded-[50px]  text-[10px]  font-normal  transition-colors  ${
                activeTab === "CONTACTS"
                  ? " bg-[#00DFC5]  text-[#0F284C]  rounded-full"
                  : "  text-[#CAF7FF]   rounded-full"
              }`}
            >
              CONTACTS
            </button>

            <button
              onClick={() => setActiveTab("TIPS")}
              className={` w-[59px]   text-[10px]  font-normal  transition-colors ${
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
