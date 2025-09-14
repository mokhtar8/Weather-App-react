import { useState } from "react";
import { Link } from "react-router";

const icons = [
  {
    id: 0,
    src: "/src/assets/images/landing page img/hut 1.png",
    outline: "/src/assets/images/landing page img/homepage.png",
    alt: "Home",
    size: "max-md:w-7 max-md:h-7",
    link: '/',
  },
  {
    id: 1,
    src: "/src/assets/images/landing page img/calendar.png",
    outline: "/src/assets/images/landing page img/calendar (1) 1.png",
    alt: "Calendar",
    size: "max-md:w-7 max-md:h-7",
    link:'/DailyWeather',
  },
  {
    id: 2,
    src: "/src/assets/images/landing page img/waterlevel.png",
    outline: "/src/assets/images/landing page img/floods4 1.png",
    alt: "Hut",
    size: "max-md:w-12 max-md:h-12 max-md:mb-3",
    link:'',

  },
  {
    id: 3,
    src: "/src/assets/images/landing page img/radar.png",
    outline: "/src/assets/images/landing page img/radar.png",
    alt: "Radar",
    size: "max-md:w-8 max-md:h-8",
    link:'',

  },
  {
    id: 4,
    src: "/src/assets/images/landing page img/emergency-call.png",
    outline: "/src/assets/images/landing page img/emergency-call (1) 1.png",
    alt: "Call",
    size: "max-md:w-6 max-md:h-6",
    link:'',

  },
];

export default function LandingPage() {
    const [tempUnit, setTempUnit] = useState("C");
    const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="max-md:bg-[#0F284C]  msx-sm:w-[90px] max-sm:h-[844px]">
    <nav className="max-md:bg-[#4766821A] max-md:text-white max-md:relative">
      <div className="max-md:flex max-md:flex-row-reverse max-md:justify-between max-md:items-center max-md:p-4">
        <img src="/src/assets/images/search.png" alt="search" className="max-md:w-6 max-md:h-6" />

        <h1 className="max-md:text-[28px] max-md:text-[#CAF7FF] max-md:font-bold">Weather</h1>

        <button onClick={() => setOpen(!open)} className="max-md:block md:hidden">
          <svg
            className="max-md:w-8 max-md:h-8"
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
        className={`max-md:fixed max-md:z-60 max-md:top-0 max-md:left-0 max-md:h-full max-md:w-[335px] max-md:bg-[#0F284C] max-md:text-white max-md:transform max-md:transition-transform max-md:duration-300 max-md:ease-in-out
          max-md:md:translate-x-0   max-md:overflow-y-auto  
          ${
            open ? "max-md:translate-x-0" : "max-md:-translate-x-full"
          }
        `}
      >
        <div  >
      
            <img src="/src/assets/images/landing page img/BG.png" alt="bg" className=" max-md:w-[335px]  max-md:  max-md:h-[209px]" />

            <div className="  max-md:fixed  max-md:top-20   max-md:ml-5 ">
               <img src="/src/assets/images/landing page img/user.png" alt="user" className="max-md:w-16 max-md:h-16" />
              <p className="max-md:text-[20px] max-md:font-bold max-md:text-[#CAF7FF] max-md:mt-1">Patrick Bacalso</p>
              <p className="max-md:text-[15px] max-md:font-normal max-md:-translate-y-1.5 max-md:text-[#CAF7FF]">CSIT238</p>
            </div>
          

          <div  >
            <p className="max-md:pt-5 max-md:pl-5 max-md:text-[20px] max-md:font-normal  max-md:text-[#ffffff]">Weather</p>
            <div className="max-md:flex max-md:w-full max-md:h-[94px]  max-md:justify-center max-md:items-center">
              <button
                onClick={() => setTempUnit("C")}
                className={`max-md:px-4 max-md:py-2 max-md:w-20 max-md:h-16 max-md:font-bold max-md:text-2xl ${
                  tempUnit === "C" ? "max-md:bg-[#00DFC580] max-md:text-[#CAF7FF]" : " max-md:text-[#CAF7FF]"
                }`}
              >
                C°
              </button>
              <button
                onClick={() => setTempUnit("F")}
                className={`max-md:px-4 max-md:py-2 max-md:w-20 max-md: h-16 max-md:font-bold ${
                  tempUnit === "F" ? "max-md:bg-[#00DFC580] max-md:text-[#CAF7FF]" : "max-md:text-[#CAF7FF]" 
                }`}
              >
                F°
              </button>
            </div>

       
            <ul >
              <li 
              
           onClick={() => setActive(active === "add" ? null : "add")}
                className={`max-md:flex max-md:items-center max-md:text-xl   max-md:font-bold max-md:gap-1.5 max-md:pl-5 max-md:w-[335px] max-md:h-[75px]  ${
                  active === "add"  ? "max-md:bg-[#00DFC580] max-md:text-[#CAF7FF]" : "max-md:text-[#CAF7FF]" 
                }`}>
              
               <img src="/src/assets/images/landing page img/cloudy 1.png" alt="cloudy" className="max-md:w-8 max-md:h-8" />
                  <span >Add to home screen</span>
            
              </li>
<Link to={'/UserProfile'} >
             <li 
          onClick={() => setActive(active === "edit" ? null : "edit")}
                className={`max-md:items-center max-md:text-xl  max-md:font-bold max-md:flex max-md:gap-1.5 max-md:pl-5 max-md:w-[335px] max-md:h-[75px]  ${
                  active === "edit"  ? "max-md:bg-[#00DFC580] max-md:text-[#CAF7FF]" : "max-md:text-[#CAF7FF]" 
                }`}>
              
               <img src="/src/assets/images/landing page img/editing 1.png" alt="editing" className="max-md:w-7 max-md:h-7" /> <span className="max-md:ml-2 ">Edit profile</span>
            
              </li>
</Link>
              <li
                 onClick={() => setActive(active === "cust" ? null : "cust")}
                className={`max-md:items-center max-md:text-xl  max-md:font-bold max-md:flex max-md:gap-1.5 max-md:pl-5 max-md:w-[335px] max-md:h-[75px]  ${
                  active === "cust"  ? "max-md:bg-[#00DFC580] max-md:text-[#CAF7FF]" : "max-md:text-[#CAF7FF]" 
                }`}>
              
               <img src="/src/assets/images/landing page img/widget 1.png" alt="editing" className="max-md:w-[30px] max-md:h-[30px]" /> <span className="max-md:ml-2">Customize widget</span>
             
              </li>
<hr className="max-md:w-[270px] max-md:border  max-md:border-[#CAF7FF]  max-md:mt-3.5 max-md:ml-[30px] " />

               <li
                 onClick={() => setActive(active === "sett" ? null : "sett")}
                className={`max-md:items-center max-md:text-xl max-md:mt-3  max-md:font-bold max-md:flex max-md:gap-1.5 max-md:pl-5 max-md:w-[335px] max-md:h-[75px]  ${
                  active === "sett"  ? "max-md:bg-[#00DFC580] max-md:text-[#CAF7FF]" : "max-md:text-[#CAF7FF]" 
                }`}>
              
               <img src="/src/assets/images/landing page img/setting (1) 1.png" alt="setting" className="max-md:w-[30px] max-md:h-[30px]" /> <span className="max-md:ml-2">Settings</span>
              
              </li>

                <li
                 onClick={() => setActive(active === "send" ? null : "send")}
                className={`max-md:items-center max-md:text-xl max-md:mt-3  max-md:font-bold max-md:flex max-md:gap-1.5 max-md:pl-5 max-md:w-[335px] max-md:h-[75px]  ${
                  active === "send"  ? "max-md:bg-[#00DFC580] max-md:text-[#CAF7FF]" : "max-md:text-[#CAF7FF]" 
                }`}>
              
               <img src="/src/assets/images/landing page img/feedback.png" alt="feedback" className="max-md:w-[30px] max-md:h-[30px]" /><span className="max-md:ml-2">Send feedback</span>
           
              </li>

                 <li
                 onClick={() => setActive(active === "help" ? null : "help")}
                className={`max-md:items-center max-md:text-xl max-md:mt-3  max-md:font-bold max-md:flex max-md:gap-1.5 max-md:pl-5 max-md:w-[335px] max-md:h-[77px]  ${
                  active === "help"  ? "max-md:bg-[#00DFC580] max-md:text-[#CAF7FF]" : "max-md:text-[#CAF7FF]" 
                }`}>
              
               <img src="/src/assets/images/landing page img/question (1).png" alt="question" className="max-md:w-[30px] max-md:h-[29px]" /> <span className="max-md:ml-2">Help</span>
             
              </li>
            </ul>
          </div>
        </div>
      </div>
      {open && (
        <div
          className="max-md:fixed inset-0 max-md:bg-black max-md:opacity-55 max-md:z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
   
  
    </nav>

      <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center ">
        <img src="/src/assets/images/landing page img/cloud.png" alt="" />
        <div className="max-md:w-full max-md:h-full max-md:flex  max-md:justify-center max-md:items-center">
          <span className="max-md:text-[64px] max-md:font-bold max-md:text-[#CAF7FF]">
            27{" "}
          </span>
          <span className="max-md:text-[36px] max-md:font-normal max-md:text-[#CAF7FF] max-md:-translate-y-2.5">
            °
          </span>
          <span className="max-md:text-[36px] max-md:font-normal max-md:text-[#CAF7FF]">
            C
          </span>
        </div>
      </div>

      <div className="max-md:flex max-md:mt-5  max-md:flex-col max-md:justify-center max-md:items-center">
        <span className="max-md:text-[20px] max-md:font-normal max-md:text-[#CAF7FF]">
          Cebu, Philippines
        </span>
        <span className="max-md:text-[20px] max-md:font-normal max-md:text-[#CAF7FF]">
          Cloudy
        </span>
      </div>

      <div className="max-md:gap-2.5 max-md:mt-10 max-md:flex   max-md:justify-center max-md:items-center">
        <div className="max-md:bg-[#0F2D57] max-md:w-[115px]  max-md:rounded-l-2xl max-md:h-[109px] max-md:flex  max-md:flex-col max-md:justify-center max-md:items-center">
          <p className="max-md:text-[20px] max-md:font-bold max-md:text-[#CAF7FF] max-md:mt-2.5">
            15km/h
          </p>
          <p className="max-md:text-[16px] max-md:font-normal max-md:text-[#CAF7FF] max-md:mt-2.5">
            Wind
          </p>
        </div>

        <div className="max-md:bg-[#0F2D57]  max-md:w-[115px] max-md:h-[109px] max-md:flex  max-md:flex-col max-md:justify-center max-md:items-center">
          <p className="max-md:text-[20px] max-md:font-bold max-md:text-[#CAF7FF] max-md:mt-2.5">
            89%
          </p>
          <p className="max-md:text-[16px] max-md:font-normal max-md:text-[#CAF7FF] max-md:mt-2.5">
            Humidity
          </p>
        </div>
        <div className="max-md:bg-[#0F2D57] max-md:rounded-r-2xl  max-md:w-[115px] max-md:h-[109px] max-md:flex  max-md:flex-col max-md:justify-center max-md:items-center">
          <p className="max-md:text-[20px] max-md:font-bold max-md:text-[#CAF7FF] max-md:mt-2.5">
            52
          </p>
          <p className="max-md:text-[16px] max-md:font-normal max-md:text-[#CAF7FF] max-md:mt-2.5">
            Preception
          </p>
        </div>
      </div>

      <div className="max-md:mt-5 max-md:ml-6 ">
        <div>
          <span className="max-md:text-[20px] max-md:font-bold max-md:text-[#CAF7FF]">
            Today
          </span>
        </div>


        <div className="max-md:mt-2.5  max-md:flex max-md:items-baseline max-md:gap-11">

          <div className=" max-md:w-[145px] max-md:h-[89px] max-md:rounded-2xl max-md:bg-[#00DFC5] max-md:flex max-md:flex-col max-md:items-center ">
            <div className="max-md:flex items-center">
              <img
                src="/src/assets/images/landing page img/cloud2.png"
                alt="cloud2"
                className=" max-md:w-[61px] max-md:h-[61px]"
              />
              <span className="max-md:text-[20px] max-md:font-bold max-md:text-[#223D5E] max-md:-translate-y-2">
                14.00
              </span>
            </div>

            <div className="max-md:flex max-md:translate-x-9 max-md:-translate-y-7">
              <p className="max-md:text-[32px] max-md:font-bold max-md:text-[#223D5E]">
                27{" "}
              </p>
              <p className="max-md:text-[16px] max-md:font-normal max-md:text-[#223D5E] ">
                °
              </p>
              <p className="max-md:text-[16px] max-md:font-normal max-md:text-[#223D5E]">
                C
              </p>
            </div>
          </div>

            <div className=" max-md:w-[145px] max-md:h-[89px] max-md:rounded-2xl max-md:bg-[#0F2D57] max-md:flex max-md:flex-col max-md:items-center ">
            <div className="max-md:flex items-center">
              <img
                src="/src/assets/images/landing page img/stormy 3.png"
                alt="cloud2"
                className=" max-md:w-[61px] max-md:h-[61px] max-md:translate-y-3.5"
              />
              <span className="max-md:text-[20px] max-md:font-bold max-md:text-[#CAF7FF] max-md:-translate-y-2">
                15.00
              </span>
            </div>

            <div className="max-md:flex max-md:translate-x-9 max-md:-translate-y-7">
              <p className="max-md:text-[32px] max-md:font-bold max-md:text-[#CAF7FF]">
                25
              </p>
              <p className="max-md:text-[16px] max-md:font-normal max-md:text-[#CAF7FF] ">
                °
              </p>
              <p className="max-md:text-[16px] max-md:font-normal max-md:text-[#CAF7FF]">
                C
              </p>
            </div>
          </div>

          
        </div>
      </div>

          <div className=" max-md:fixed max-md:bottom-0 max-md:w-full max-md:bg-[#0B1C3D]  max-md:z-50">
      <div className="max-md:flex max-md:justify-between max-md:items-center max-md:px-6 max-md:py-3">
        {icons.map((icon) => {
          const isActive = location.pathname === icon.link; 
          return (
            <Link
              key={icon.id}
              to={icon.link}
              className={`max-md:w-12 max-md:h-12 max-md:flex max-md:items-center max-md:justify-center ${
                isActive 
              }`}
            >
              <img
                src={isActive ? icon.outline : icon.src}
                alt={icon.alt}
                className={`${icon.size} object-contain`}
              />
            </Link>
          );
        })}
      </div>
    </div>
    </div>
  );
}
