import { useState } from "react";
import { Link } from "react-router";


const icons = [
  {
    id: 0,
    src: "/src/assets/images/landing page img/hut 1.png",
    outline: "/src/assets/images/landing page img/homepage.png",
    alt: "Home",
    size: "max-md:w-7 max-md:h-7",
    link: "/",
  },
  {
    id: 1,
    src: "/src/assets/images/landing page img/calendar.png",
    outline: "/src/assets/images/landing page img/calendar (1) 1.png",
    alt: "Calendar",
    size: "max-md:w-7 max-md:h-7",
    link: "/DailyWeather",
  },
  {
    id: 2,
    src: "/src/assets/images/landing page img/waterlevel.png",
    outline: "/src/assets/images/landing page img/floods4 1.png",
    alt: "Hut",
    size: "max-md:w-12 max-md:h-12 max-md:mb-3",
    link: "",
  },
  {
    id: 3,
    src: "/src/assets/images/landing page img/radar.png",
    outline: "/src/assets/images/landing page img/radar.png",
    alt: "Radar",
    size: "max-md:w-8 max-md:h-8",
    link: "",
  },
  {
    id: 4,
    src: "/src/assets/images/landing page img/emergency-call.png",
    outline: "/src/assets/images/landing page img/emergency-call (1) 1.png",
    alt: "Call",
    size: "max-md:w-6 max-md:h-6",
    link: "",
  },
];

export default function DailyWeather() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("day");
    const [active, setActive] = useState("");
    const [tempUnit, setTempUnit] = useState("C");


  return (
    <div className="max-md:bg-[#0F284C]  msx-sm:w-[90px] max-sm:h-[844px]">
      <nav className="max-md:bg-[#4766821A]  max-md:text-white max-md:relative">
      <div className="max-md:flex  max-md:flex-row-reverse max-md:justify-between max-md:items-center max-md:p-4">
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

      <div className="max-md:flex  max-md:justify-between max-md:m-6 max-md:items-baseline">
        <p className="max-md:text-[20px] max-md:font-bold max-md:text-[#CAF7FF]">
          March
        </p>

        <div className="max-md:flex max-md:flex-col max-md:items-end">
          <div className="max-md:flex max-md:mb-4 max-md:h-6 max-md:rounded-full max-md:overflow-hidden max-md:border max-md:border-[#00DFC5]">
            <button
              onClick={() => setActiveTab("day")}
              className={`max-md:w-[69px] max-md:h-6  border max-md:rounded-[50px] max-md:border-[#00DFC5] max-md:text-[10px] max-md:font-normal max-md:transition-colors  ${
                activeTab === "day" 
                  ? "max-md:bg-[#00DFC5] max-md:text-[#0F284C] max-md:rounded-full"
                  : " max-md:text-[#CAF7FF]  max-md:rounded-full"
              }`}
            >
              BY DAY
            </button>

            <button
              onClick={() => setActiveTab("month")}
              className={`max-md:w-[91px] max-md:h-6 max-md:text-[10px] max-md:font-normal max-md:transition-colors ${
                activeTab === "month"
                  ? "max-md:bg-[#00DFC5] max-md:text-[#0F284C]   max-md:rounded-full"
                  : " max-md:text-[#CAF7FF]  max-md:rounded-full  "
              }`}
            >
              BY MONTH
            </button>
          </div>

          <button  
               onClick={() => setActiveTab("history")}
          className={`  max-md:w-[73px] max-md:h-6 border max-md:rounded-[50px] max-md:border-[#00DFC5] max-md:bg-[#0F284C]   max-md:text-[#CAF7FF] max-md:text-[11px] max-md:font-normal   onClick={() => setActiveTab("day")}
             max-md:transition-colors  ${
                activeTab === "history" 
                  ?  "max-md:bg-[#00DFC5] max-md:text-[#0F284C] max-md:rounded-full"
                  : " max-md:text-[#CAF7FF]  max-md:rounded-full " 
              }`}>
            History
          </button>
        </div>
      </div>

         <div className="max-md:flex  max-md:flex-col max-md:items-center max-md:gap-3   max-md:h-[600px] max-md:overflow-y-auto  max-md:p-4 ">

  <div className="max-md:w-[355px] max-md:h-[122px] max-md:rounded-[10px] max-md:bg-[#0F2D57] max-md:flex max-md:justify-around max-md:items-center">
  
  

<div className="max-md:mt-4">
      <div className="max-md:flex">
    <span className="max-md:max-md:text-[64px] max-md:max-md:font-bold max-md:max-md:text-[#CAF7FF]">
                27
              </span>
              <span className="max-md:text-[32px] max-md:font-normal max-md:text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className="max-md:flex max-md:flex-col">
          <span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-6 max-md:text-[#CAF7FF]">Cloudy</span>
<span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-7 max-md:text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/cloud.png" alt="cloud" className="max-md:w-20 max-md:h-20"/>


<div className="max-md:flex max-md:flex-col">
  <span  className="max-md:text-[48px] max-md:font-bold max-md:max-md:text-[#CAF7FFB2] ">
30
  </span>
  <span  className="max-md:text-[24px] max-md:font-bold -translate-y-5 max-md:text-[#CAF7FFB2] ">
MON
  </span>
</div>
  </div>


  <div className="max-md:w-[355px] max-md:h-[122px] max-md:rounded-[10px] max-md:bg-[#0F2D57] max-md:flex max-md:justify-around max-md:items-center">
  
  

<div className="max-md:mt-4">
      <div className="max-md:flex">
    <span className="max-md:max-md:text-[64px] max-md:max-md:font-bold max-md:max-md:text-[#CAF7FF]">
                24
              </span>
              <span className="max-md:text-[32px] max-md:font-normal max-md:text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className="max-md:flex max-md:flex-col">
          <span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-6 max-md:text-[#CAF7FF]">Storm</span>
<span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-7 max-md:text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/stormy 5.png" alt="stormy" className="max-md:w-20 max-md:h-20"/>


<div className="max-md:flex max-md:flex-col">
  <span  className="max-md:text-[48px] max-md:font-bold max-md:max-md:text-[#CAF7FFB2] ">
31
  </span>
  <span  className="max-md:text-[24px] max-md:font-bold -translate-y-5 max-md:text-[#CAF7FFB2] ">
TUE
  </span>
</div>
  </div>
  
  <div className="max-md:w-[355px] max-md:h-[122px] max-md:rounded-[10px] max-md:bg-[#0F2D57] max-md:flex max-md:justify-around max-md:items-center">
  
  

<div className="max-md:mt-4">
      <div className="max-md:flex">
    <span className="max-md:max-md:text-[64px] max-md:max-md:font-bold max-md:max-md:text-[#CAF7FF]">
                28
              </span>
              <span className="max-md:text-[32px] max-md:font-normal max-md:text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className="max-md:flex max-md:flex-col">
          <span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-6 max-md:text-[#CAF7FF]">Cloudy</span>
<span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-7 max-md:text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/cloudy 2.png" alt="cloud" className="max-md:w-20 max-md:h-20"/>


<div className="max-md:flex max-md:flex-col">
  <span  className="max-md:text-[48px] max-md:font-bold max-md:max-md:text-[#CAF7FFB2] ">
01
  </span>
  <span  className="max-md:text-[24px] max-md:font-bold -translate-y-5 max-md:text-[#CAF7FFB2] ">
WED
  </span>
</div>
  </div>


    <div className="max-md:w-[355px] max-md:h-[122px] max-md:rounded-[10px] max-md:bg-[#0F2D57] max-md:flex max-md:justify-around max-md:items-center">
  
  

<div className="max-md:mt-4">
      <div className="max-md:flex">
    <span className="max-md:max-md:text-[64px] max-md:max-md:font-bold max-md:max-md:text-[#CAF7FF]">
                34
              </span>
              <span className="max-md:text-[32px] max-md:font-normal max-md:text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className="max-md:flex max-md:flex-col">
          <span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-6 max-md:text-[#CAF7FF]">WED</span>
<span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-7 max-md:text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/cloudy 3.png" alt="cloud" className="max-md:w-20 max-md:h-20"/>


<div className="max-md:flex max-md:flex-col">
  <span  className="max-md:text-[48px] max-md:font-bold max-md:max-md:text-[#CAF7FFB2] ">
02
  </span>
  <span  className="max-md:text-[24px] max-md:font-bold -translate-y-5 max-md:text-[#CAF7FFB2] ">
THU
  </span>
</div>
  </div>



    <div className="max-md:w-[355px] max-md:h-[122px] max-md:rounded-[10px] max-md:bg-[#0F2D57] max-md:flex max-md:justify-around max-md:items-center">
  
  

<div className="max-md:mt-4">
      <div className="max-md:flex">
    <span className="max-md:max-md:text-[64px] max-md:max-md:font-bold max-md:max-md:text-[#CAF7FF]">
               33
              </span>
              <span className="max-md:text-[32px] max-md:font-normal max-md:text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className="max-md:flex max-md:flex-col">
          <span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-6 max-md:text-[#CAF7FF]">Bright</span>
<span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-7 max-md:text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/cloudy 3.png" alt="cloud" className="max-md:w-20 max-md:h-20"/>


<div className="max-md:flex max-md:flex-col max-md:items-center">
  <span  className="max-md:text-[48px] max-md:font-bold max-md:max-md:text-[#CAF7FFB2] ">
03
  </span>
  <span  className="max-md:text-[24px] max-md:font-bold -translate-y-5 max-md:text-[#CAF7FFB2] ">
FRI
  </span>
</div>
  </div>



    <div className="max-md:w-[355px] max-md:h-[122px] max-md:rounded-[10px] max-md:bg-[#0F2D57] max-md:flex max-md:justify-around max-md:items-center">
  
  

<div className="max-md:mt-4">
      <div className="max-md:flex">
    <span className="max-md:max-md:text-[64px] max-md:max-md:font-bold max-md:max-md:text-[#CAF7FF]">
              33
              </span>
              <span className="max-md:text-[32px] max-md:font-normal max-md:text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className="max-md:flex max-md:flex-col">
          <span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-6 max-md:text-[#CAF7FF]">Cloudy</span>
<span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-7 max-md:text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/cloud.png" alt="cloud" className="max-md:w-20 max-md:h-20"/>


<div className="max-md:flex max-md:flex-col ">
  <span  className="max-md:text-[48px] max-md:font-bold max-md:max-md:text-[#CAF7FFB2] ">
04
  </span>
  <span  className="max-md:text-[24px] max-md:font-bold -translate-y-5 max-md:text-[#CAF7FFB2] ">
SAT
  </span>
</div>
  </div>





    <div className="max-md:w-[355px] max-md:h-[122px] max-md:rounded-[10px] max-md:bg-[#0F2D57] max-md:flex max-md:justify-around max-md:items-center">
  
  

<div className="max-md:mt-4">
      <div className="max-md:flex">
    <span className="max-md:max-md:text-[64px] max-md:max-md:font-bold max-md:max-md:text-[#CAF7FF]">
                27
              </span>
              <span className="max-md:text-[32px] max-md:font-normal max-md:text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className="max-md:flex max-md:flex-col">
          <span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-6 max-md:text-[#CAF7FF]">Cloudy</span>
<span className="max-md:text-[16px] max-md:font-normal max-md:-translate-y-7 max-md:text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/cloud.png" alt="cloud" className="max-md:w-20 max-md:h-20"/>


<div className="max-md:flex max-md:flex-col">
  <span  className="max-md:text-[48px] max-md:font-bold max-md:max-md:text-[#CAF7FFB2] ">
05
  </span>
  <span  className="max-md:text-[24px] max-md:font-bold -translate-y-5 max-md:text-[#CAF7FFB2] ">
SUN
  </span>
</div>
  </div>


</div> 

      <div className=" flex flex-col max-md:hidden   max-md:h-[600px] max-md:overflow-y-auto  max-md:p-2 ">
        <div className="flex justify-between text-gray-400 text-xs mb-2">
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>

        <div className="flex justify-between mb-3 text-center text-xs">
          <div className="flex flex-col items-center w-8">
            <span>27</span>
            <img src="/src/assets/images/Daily-weather/h 1.png" alt="h" className="w-5 h-5" />
            <span>30°</span>
            <span className="text-gray-400">25°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>28</span>
            <img src="/src/assets/images/Daily-weather/rain (1) 1.png" alt="rain" className="w-5 h-5" />
            <span>31°</span>
            <span className="text-gray-400">28°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>1</span>
            <img src="/src/assets/images/Daily-weather/rain 1.png" alt="rain" className="w-5 h-5" />
            <span>30°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>2</span>
            <img src="/src/assets/images/Daily-weather/cloudy-day 1.png" alt="cloudy" className="w-5 h-5" />
            <span>32°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>3</span>
            <img src="/src/assets/images/Daily-weather/cloudy (1) 1.png" alt="cloudy" className="w-5 h-5" />
            <span>34°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>4</span>
            <img src="/src/assets/images/Daily-weather/s1 1.png" alt="sunny" className="w-5 h-5" />
            <span>35°</span>
            <span className="text-gray-400">30°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>5</span>
            <img src="/src/assets/images/Daily-weather/cloudy-day 1.png" alt="cloudy" className="w-5 h-5" />
            <span>30°</span>
            <span className="text-gray-400">27°</span>
          </div>
        </div>
   

        <div className="flex justify-between mb-3 text-center text-xs">
          <div className="flex flex-col items-center w-8">
            <span>6</span>
            <img src="/src/assets/images/Daily-weather/cloudy-day 1.png" alt="cloudy" className="w-5 h-5" />
            <span>32°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>7</span>
            <img src="/src/assets/images/Daily-weather/rain (1) 1.png" alt="rain" className="w-5 h-5" />
            <span>30°</span>
            <span className="text-gray-400">26°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>8</span>
            <img src="/src/assets/images/Daily-weather/rain 1.png" alt="rain" className="w-5 h-5" />
            <span>30°</span>
            <span className="text-gray-400">26°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>9</span>
            <img src="/src/assets/images/Daily-weather/h 1.png" alt="h" className="w-5 h-5" />
            <span>30°</span>
            <span className="text-gray-400">24°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>10</span>
            <img src="/src/assets/images/Daily-weather/cloudy-day 1.png" alt="cloudy" className="w-5 h-5" />
            <span>32°</span>
            <span className="text-gray-400">27°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>11</span>
            <img src="/src/assets/images/Daily-weather/cloudy (1) 1.png" alt="cloudy" className="w-5 h-5" />
            <span>34°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>12</span>
            <img src="/src/assets/images/Daily-weather/s1 1.png" alt="sunny" className="w-5 h-5" />
            <span>35°</span>
            <span className="text-gray-400">29°</span>
          </div>
        </div>

       

        <div className="flex justify-between mb-3 text-center text-xs">
          <div className="flex flex-col items-center w-8">
            <span>13</span>
            <img src="/src/assets/images/Daily-weather/rain 1.png" alt="rain" className="w-5 h-5" />
            <span>31°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>14</span>
            <img src="/src/assets/images/Daily-weather/rain (1) 1.png" alt="rain" className="w-5 h-5" />
            <span>32°</span>
            <span className="text-gray-400">30°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>15</span>
            <img src="/src/assets/images/Daily-weather/h 1.png" alt="h" className="w-5 h-5" />
            <span>30°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>16</span>
            <img src="/src/assets/images/Daily-weather/cloudy-day 1.png" alt="cloudy" className="w-5 h-5" />
            <span>33°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>17</span>
          <img src="/src/assets/images/Daily-weather/cloudy-day 1.png" alt="cloudy" className="w-5 h-5" />
            <span>33°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>18</span>
            <img src="/src/assets/images/Daily-weather/cloudy (1) 1.png" alt="cloudy" className="w-5 h-5" />
            <span>34°</span>
            <span className="text-gray-400">30°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>19</span>
            <img src="/src/assets/images/Daily-weather/s1 1.png" alt="sunny" className="w-5 h-5" />
            <span>35°</span>
            <span className="text-gray-400">30°</span>
          </div>
        </div>
      </div>

      <div className="max-md:fixed max-md:bottom-0 max-md:w-full max-md:bg-[#0B1C3D]  max-md:z-50">
        <div className="max-md:flex max-md:justify-between max-md:items-center max-md:px-6 max-md:py-3">
          {icons.map((icon) => {
            const isActive = location.pathname === icon.link;
            return (
              <Link
                key={icon.id}
                to={icon.link}
                className={`w-12 h-12 flex items-center justify-center ${isActive}`}
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
