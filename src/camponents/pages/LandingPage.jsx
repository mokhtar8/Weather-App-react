import Footer from "./RepetitivePage/Footer";
import { useState } from "react";
import { Link } from "react-router";

export default function LandingPage() {
  const [tempUnit, setTempUnit] = useState("C");
  const [active, setActive] = useState("");
  const [activateInput, setActivateInput] = useState("input");
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-[#0F284C] w-full  h-[844px]">

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
      <div className=" flex  flex-col  justify-center  items-center ">
        <img src="/src/assets/images/landing page img/cloud.png" alt="cloud" />
        <div className=" w-full  h-full  flex   justify-center  items-center">
          <span className=" text-[64px]  font-bold  text-[#CAF7FF]">27 </span>
          <span className=" text-[36px]  font-normal  text-[#CAF7FF]  -translate-y-2.5">
            °
          </span>
          <span className=" text-[36px]  font-normal  text-[#CAF7FF]">C</span>
        </div>
      </div>

      <div className=" flex  mt-5   flex-col  justify-center  items-center">
        <span className=" text-[20px]  font-normal  text-[#CAF7FF]">
          Cebu, Philippines
        </span>
        <span className=" text-[20px]  font-normal  text-[#CAF7FF]">
          Cloudy
        </span>
      </div>

      <div className=" gap-2.5  mt-10  flex    justify-center  items-center">
        <div className=" bg-[#0F2D57]  w-[115px]   rounded-l-2xl  h-[109px]  flex   flex-col  justify-center  items-center">
          <p className=" text-[20px]  font-bold  text-[#CAF7FF]  mt-2.5">
            15km/h
          </p>
          <p className=" text-[16px]  font-normal  text-[#CAF7FF]  mt-2.5">
            Wind
          </p>
        </div>

        <div className=" bg-[#0F2D57]   w-[115px]  h-[109px]  flex   flex-col  justify-center  items-center">
          <p className=" text-[20px]  font-bold  text-[#CAF7FF]  mt-2.5">89%</p>
          <p className=" text-[16px]  font-normal  text-[#CAF7FF]  mt-2.5">
            Humidity
          </p>
        </div>
        <div className=" bg-[#0F2D57]  rounded-r-2xl   w-[115px]  h-[109px]  flex   flex-col  justify-center  items-center">
          <p className=" text-[20px]  font-bold  text-[#CAF7FF]  mt-2.5">52</p>
          <p className=" text-[16px]  font-normal  text-[#CAF7FF]  mt-2.5">
            Preception
          </p>
        </div>
      </div>

      <div className=" mt-5  ml-6 ">
        <div>
          <span className=" text-[20px]  font-bold  text-[#CAF7FF]">Today</span>
        </div>

        <div className=" mt-2.5   flex  items-baseline  gap-11">
          <div className="  w-[145px]  h-[89px]  rounded-2xl  bg-[#00DFC5]  flex  flex-col  items-center ">
            <div className=" flex items-center">
              <img
                src="/src/assets/images/landing page img/cloud2.png"
                alt="cloud2"
                className="  w-[61px]  h-[61px]"
              />
              <span className=" text-[20px]  font-bold  text-[#223D5E]  -translate-y-2">
                14.00
              </span>
            </div>

            <div className=" flex  translate-x-9  -translate-y-7">
              <p className=" text-[32px]  font-bold  text-[#223D5E]">27 </p>
              <p className=" text-[16px]  font-normal  text-[#223D5E] ">°</p>
              <p className=" text-[16px]  font-normal  text-[#223D5E]">C</p>
            </div>
          </div>

          <div className="  w-[145px]  h-[89px]  rounded-2xl  bg-[#0F2D57]  flex  flex-col  items-center ">
            <div className=" flex items-center">
              <img
                src="/src/assets/images/landing page img/stormy 3.png"
                alt="cloud2"
                className="  w-[61px]  h-[61px]  translate-y-3.5"
              />
              <span className=" text-[20px]  font-bold  text-[#CAF7FF]  -translate-y-2">
                15.00
              </span>
            </div>

            <div className=" flex  translate-x-9  -translate-y-7">
              <p className=" text-[32px]  font-bold  text-[#CAF7FF]">25</p>
              <p className=" text-[16px]  font-normal  text-[#CAF7FF] ">°</p>
              <p className=" text-[16px]  font-normal  text-[#CAF7FF]">C</p>
            </div>
          </div>
        </div>
      </div>

        <Footer/>

    </div>
  );
}
