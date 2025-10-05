import Footer from "./RepetitivePage/Footer";
import { useState } from "react";
import { Link } from "react-router";
export default function WeatherApp() {
  const [tempUnit, setTempUnit] = useState("C");
  const [active, setActive] = useState("");
  const [activateInput, setActivateInput] = useState("input");
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <div className=" bg-[#0F284C] w-full  h-[844px]">
      {/* header */}
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

          <h1 className=" text-[28px]  text-[#CAF7FF]  font-bold">Weather</h1>

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

      <div>
        {/* cloud & temp */}
        <div className="h-[110px]">
          <div className=" flex justify-center gap-6">
            <img
              src="/src/assets/images/landing page img/cloud.png"
              alt="cloud"
              className=" h-[90px] w-[90px] "
            />
            <div className="flex  flex-col">
              <div className="flex ">
                <span className=" text-[64px]  font-bold  text-[#CAF7FF]">
                  27
                </span>
                <span className=" text-[36px]  font-normal  text-[#CAF7FF]  translate-y-1.5">
                  °
                </span>
              </div>

              <div className="-translate-y-5">
                <span className=" text-[16px]  font-normal  text-[#CAF7FFB2]">
                  Feels 25°
                </span>
              </div>
            </div>
          </div>
          {/* the temp info  */}
          <div className="flex justify-center  flex-col items-center ">
            <span className=" text-[20px] w-40 text-center font-normal  text-[#CAF7FF]">
              Labangon, Cebu Philippines
            </span>

            <span className=" text-[13px] mt-2 text-center font-normal  text-[#CAF7FF]">
              5ft above sea level
            </span>
            <span className=" text-[13px] text-center font-normal flex items-baseline gap-1.5 text-[#CAF7FF]">
              <p className="w-2 h-2 text-[#D9FD00] bg-[#D9FD00] "> </p>Moderate
            </span>
          </div>
        </div>
        {/* img of water & ground */}

        <div>
          <img
            src="/src/assets/images/ground-img/2d.png"
            alt="2d "
            className=" "
          />
        </div>
        {/* hourly news  */}
        <div className="  flex justify-evenly ">
          {/* hourly news 1 */}
          <div className="h-[253px] flex flex-col items-center gap-1 ">
            <span className="text-sm  text-center font-normal  text-[#CAF7FFE5]">
              {" "}
              7 AM
            </span>
            <img
              src="/src/assets/images/ground-img/Line 46.png"
              alt="Line"
              className=" h-9"
            />
            <img
              src="/src/assets/images/ground-img/cloudy (1) 6.png"
              alt="cloudy"
              className=" w-[30px] h-[30px] "
            />
            <span className="text-sm text-center font-normal  text-[#CAF7FFE5]">
              {" "}
              35°
            </span>
            <img
              src="/src/assets/images/ground-img/Line 46.png"
              alt="Line"
              className=" h-14"
            />
            <img
              src="/src/assets/images/ground-img/Rectangle 49.png"
              alt="Line"
              className=" w-11 h-5"
            />
          </div>
          {/* hourly news 2 */}
          <div className="h-[253px] flex flex-col items-center gap-1 ">
            <span className="text-sm  text-center font-normal  text-[#CAF7FFE5]">
              {" "}
              8 AM
            </span>
            <img
              src="/src/assets/images/ground-img/Line 46.png"
              alt="Line"
              className=" h-9"
            />
            <img
              src="/src/assets/images/ground-img/rain (1) 7.png"
              alt="rain"
              className=" w-[30px] h-[30px] "
            />
            <span className="text-sm text-center font-normal  text-[#CAF7FFE5]">
              {" "}
              30°
            </span>
            <img
              src="/src/assets/images/ground-img/Line 46.png"
              alt="Line"
              className=" h-14"
            />
            <img
              src="/src/assets/images/ground-img/Rectangle 49.png"
              alt="Line"
              className=" w-11 h-5"
            />
          </div>
          {/*  hourly news 3*/}
          <div className="h-[253px] flex flex-col items-center gap-1 ">
            <span className="text-sm  text-center font-normal  text-[#CAF7FFE5]">
              {" "}
              11 AM
            </span>
            <img
              src="/src/assets/images/ground-img/Line 46.png"
              alt="Line"
              className=" h-9"
            />
            <img
              src="/src/assets/images/ground-img/rain (1) 6.png"
              alt="cloudy"
              className=" w-[30px] h-[30px] "
            />
            <span className="text-sm text-center font-normal  text-[#CAF7FFE5]">
              {" "}
              27°
            </span>
            <img
              src="/src/assets/images/ground-img/Line 46.png"
              alt="Line"
              className=" h-14"
            />
            <img
              src="/src/assets/images/ground-img/Rectangle 49.png"
              alt="Line"
              className=" w-11 h-5"
            />
          </div>
          {/*  hourly news 4 */}
          <div className="h-[253px] flex flex-col items-center gap-1 ">
            <span className="text-sm  text-center font-normal  text-[#CAF7FFE5]">
              {" "}
              12 PM
            </span>
            <img
              src="/src/assets/images/ground-img/Line 46.png"
              alt="Line"
              className=" h-9"
            />
            <img
              src="/src/assets/images/ground-img/h 4.png"
              alt="rain"
              className=" w-[30px] h-[30px] "
            />
            <span className="text-sm text-center font-normal  text-[#CAF7FFE5]">
              {" "}
              24°
            </span>
            <img
              src="/src/assets/images/ground-img/Line 46.png"
              alt="Line"
              className=" h-14"
            />
            <img
              src="/src/assets/images/ground-img/Rectangle 49.png"
              alt="Line"
              className=" w-11 h-5"
            />
          </div>
          {/* hourly news 5 */}
          <div className="h-[253px] flex flex-col items-center gap-1 ">
            <span className="text-sm  text-center font-normal  text-[#CAF7FFE5]">
              {" "}
              1 PM
            </span>
            <img
              src="/src/assets/images/ground-img/Line 46.png"
              alt="Line"
              className=" h-9"
            />
            <img
              src="/src/assets/images/ground-img/rain (1) 7.png"
              alt="rain"
              className=" w-[30px] h-[30px] "
            />
            <span className="text-sm text-center font-normal  text-[#CAF7FFE5]">
              {" "}
              29°
            </span>
            <img
              src="/src/assets/images/ground-img/Line 46.png"
              alt="Line"
              className=" h-14"
            />
            <img
              src="/src/assets/images/ground-img/Rectangle 49.png"
              alt="Line"
              className=" w-11 h-5"
            />
          </div>
          {/* hourly news6 */}
          <div className="h-[253px] flex flex-col items-center gap-1 ">
            <span className="text-sm  text-center font-normal  text-[#CAF7FFE5]">
              {" "}
              2 PM
            </span>
            <img
              src="/src/assets/images/ground-img/Line 46.png"
              alt="Line"
              className=" h-9"
            />
            <img
              src="/src/assets/images/ground-img/cloudy (1) 6.png"
              alt="cloudy"
              className=" w-[30px] h-[30px] "
            />
            <span className="text-sm text-center font-normal  text-[#CAF7FFE5]">
              {" "}
              35°
            </span>
            <img
              src="/src/assets/images/ground-img/Line 46.png"
              alt="Line"
              className=" h-14"
            />
            <img
              src="/src/assets/images/ground-img/Rectangle 49.png"
              alt="Line"
              className=" w-11 h-5"
            />
          </div>
        </div>
        {/* buttons */}
        <div className="flex justify-evenly items-center -mt-3">
          <div className="bg-[#0B57D4] w-[139px] h-10 rounded-[10px] flex justify-evenly items-center">
            <img
              src="/src/assets/images/ground-img/droplet 1.png"
              alt="droplet"
              className="w-[22px] h-[22px] "
            />
            <span className=" font-normal text-[11px] text-[#CAF7FF] w-17 ">
              0.08” of rain in next 12 hrs
            </span>
          </div>
          <button
            className="w-[190px] border border-[#00DFC5] rounded-[110px] h-8 text-[15px] font-normal text-[#CAF7FF] "
            onClick={() => setOpenAlert(!openAlert)}
          >
            Change alert level
          </button>
        </div>
      </div>
      {/* Alert level */}
      <div>
        <div
          className={` fixed  z-60  top-0  left-0  h-full  w-[335px]  bg-[#0F284C]  text-white  transform  transition-transform  duration-300  ease-in-out
    overflow-y-auto  
    ${openAlert ? " translate-x-0" : " -translate-x-full"}
  `}
        >
          {/* Alert level header */}
          <div className="w-[351px] h-[90px] bg-[#152E52] flex justify-around items-center  ">
            <img
              src="/src/assets/images/landing page img/arrow 1.png"
              alt="arrow"
              className="h-8 w-8 "
              onClick={() => setOpenAlert(false)}
            />
            <span className="font-normal text-[25px] text-[#CAF7FF] mr-24 ">
              Alert level
            </span>
          </div>
          {/* Alert level buttons */}
          <div className="flex justify-center items-center mt-7 gap-6">
            <button className=" w-[73px] h-6 rounded-[15px] bg-[#00DFC5] font-normal text-[15px] text-[#1E516B] ">
              feet
            </button>
            <button className=" w-[73px] h-6 rounded-[15px] border border-[#00DFC5] font-normal text-[15px] text-[#CAF7FF] ">
              meters
            </button>
          </div>
          {/* Alert level description one  */}
          {/* action section */}
          <div className="flex pl-8 gap-[30px] items-center mt-4.5">
            <span className="w-[124px] h-30px bg-[#2BB673] font-bold text-white text-[15px] text-center ">
              NO ALERT
            </span>
            <span className=" font-bold text-[#CAF7FF] text-[15px]">
              No action <br /> required
            </span>
          </div>
          {/* Stay vigilant section */}
          <div className="flex pl-8 gap-[14px]  items-center mt-2.5">
            {/* number box section */}
            <div className="flex  items-center gap-2.5 ">
              <span className="border border-[#CAF7FF] w-[34px] h-[34px] font-normal text-[15px] text-[#CAF7FF] text-center ">
                0
              </span>
              <hr className="w-8 border-2 border-[#CAF7FF] " />
              <span className="border border-[#CAF7FF] w-[34px] h-[34px] font-normal text-[15px] text-[#CAF7FF] text-center ">
                5
              </span>
              <span className=" font-normal text-[15px] text-[#CAF7FF] ">
                ft
              </span>
            </div>
            {/* Stay vigilant section */}
            <span className="font-normal text-[10px] text-[#CAF7FF] ">
              Stay vigilant.
            </span>
          </div>
          <hr className="mt-8 border border-[#CAF7FF80] " />

          {/* Storm POSSIBLE section */}
          <div className="flex pl-8 gap-[30px] items-center mt-4.5">
            <span className="w-[124px] h-30px bg-[#F4D400] font-bold text-white text-[15px] text-center ">
              {" "}
              ALERT
            </span>
            <span className=" font-bold text-[#CAF7FF] text-[15px]">
              Storm surge is <br /> POSSIBLE
            </span>
          </div>
          {/*Preparation section */}
          <div className="flex pl-8 gap-[14px]  items-center mt-2.5">
            {/* number box section */}
            <div className="flex  items-center gap-2.5 ">
              <span className="border border-[#CAF7FF] w-[34px] h-[34px] font-normal text-[15px] text-[#CAF7FF] text-center ">
                5
              </span>
              <hr className="w-8 border-2 border-[#CAF7FF] " />
              <span className="border border-[#CAF7FF] w-[34px] h-[34px] font-normal text-[15px] text-[#CAF7FF] text-center ">
                10
              </span>
              <span className=" font-normal text-[15px] text-[#CAF7FF] ">
                ft
              </span>
            </div>
            {/* Preparation section */}
            <span className="font-normal text-[10px] text-[#CAF7FF] ">
              Preparation measures <br /> must be carried out. Stay <br /> away
              from the coast.
            </span>
          </div>
          <hr className="mt-8 border border-[#CAF7FF80] " />

          {/* Storm EXPECTED */}
          <div className="flex pl-8 gap-[30px] items-center mt-4.5">
            <span className="w-[124px] h-30px bg-[#F7941E] font-bold text-white text-[15px] text-center ">
              {" "}
              ALARM
            </span>
            <span className=" font-bold text-[#CAF7FF] text-[15px]">
              Storm surge is <br /> EXPECTED
            </span>
          </div>
          {/*Conditions section */}
          <div className="flex pl-8 gap-[14px]  items-center mt-2.5">
            {/* number box section */}
            <div className="flex  items-center gap-2.5 ">
              <span className="border border-[#CAF7FF] w-[34px] h-[34px] font-normal text-[15px] text-[#CAF7FF] text-center ">
                10
              </span>
              <hr className="w-8 border-2 border-[#CAF7FF] " />
              <span className="border border-[#CAF7FF] w-[34px] h-[34px] font-normal text-[15px] text-[#CAF7FF] text-center ">
                15
              </span>
              <span className=" font-normal text-[15px] text-[#CAF7FF] ">
                ft
              </span>
            </div>
            {/* Conditions section */}
            <span className="font-normal text-[10px] text-[#CAF7FF] ">
              Conditions could become <br />
              life threatening. Follow <br /> evacuation guidlines.
            </span>
          </div>
          <hr className="mt-8 border border-[#CAF7FF80] " />

          {/* Storm CATASTROPHIC */}
          <div className="flex pl-8 gap-[30px] items-center mt-4.5">
            <span className="w-[124px] h-30px bg-[#EE2F2E] font-bold text-white text-[15px] text-center ">
              {" "}
              TAKE ACTION
            </span>
            <span className=" font-bold text-[#CAF7FF] text-[15px]">
              Storm surge is <br /> CATASTROPHIC
            </span>
          </div>
          {/*Evacuation section */}
          <div className="flex pl-8 gap-[14px]  items-center mt-2.5">
            {/* number box section */}
            <div className="flex  items-center gap-2.5 ">
              <span className="border border-[#CAF7FF] w-[34px] h-[34px] font-normal text-[15px] text-[#CAF7FF] text-center ">
                15
              </span>
              <hr className="w-8 border-2 border-[#CAF7FF] " />
              <span className="border border-[#CAF7FF] w-[34px] h-[34px] font-normal text-[15px] text-[#CAF7FF] text-center ">
                20
              </span>
              <span className=" font-normal text-[15px] text-[#CAF7FF] ">
                ft
              </span>
            </div>
            {/* Evacuation section */}
            <span className="font-normal text-[10px] text-[#CAF7FF] ">
              There is a significant <br />
              threat to life. <br /> Evacuation is a must.
            </span>
          </div>
{/* Confirm & Cancel buttons */}
          <div className=" flex items-center justify-evenly translate-y-12 ">
            <button className="w-28 h-8 border rounded-[10px] border-[#00DFC5] font-normal text-[15px] text-[#CAF7FF] leading-[15px] tracking-[0.05em] align-middle ">
         
              Confirm
            </button>
            <button className="w-28 h-8 border rounded-[10px] border-[#00DFC5] font-normal text-[15px] text-[#CAF7FF] leading-[15px] tracking-[0.05em] align-middle ">
          Cancel
            </button>
          </div>
        </div>
        {openAlert && (
          <div
            className=" fixed inset-0  bg-black  opacity-55  z-40"
            onClick={() => setOpenAlert(false)}
          ></div>
        )}
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
