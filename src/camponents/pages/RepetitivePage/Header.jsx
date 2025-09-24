import { useState } from "react";
import { Link } from "react-router";
export default function Header (){

  const [tempUnit, setTempUnit] = useState("C");
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

    return (

           <nav className=" bg-[#4766821A]  text-[#CAF7FF]  relative">
        <div className=" flex  flex-row-reverse  justify-between  items-center  p-4">
          <img
            src="/src/assets/images/search.png"
            alt="search"
            className=" w-6  h-6"
          />

          <h1 className=" text-[28px]  text-[#CAF7FF]  font-bold">Weather</h1>

          <button onClick={() => setOpen(!open)} className=" block  ">
            <svg
              className=" w-8  h-8"
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
      </nav>
    )
}