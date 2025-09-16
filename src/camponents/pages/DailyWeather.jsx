import { useState } from "react";
import { Link } from "react-router";


const icons = [
  {
    id: 0,
    src: "/src/assets/images/landing page img/hut 1.png",
    outline: "/src/assets/images/landing page img/homepage.png",
    alt: "Home",
    size: " w-7  h-7",
    link: "/",
  },
  {
    id: 1,
    src: "/src/assets/images/landing page img/calendar.png",
    outline: "/src/assets/images/landing page img/calendar (1) 1.png",
    alt: "Calendar",
    size: " w-7  h-7",
    link: "/DailyWeather",
  },
  {
    id: 2,
    src: "/src/assets/images/landing page img/waterlevel.png",
    outline: "/src/assets/images/landing page img/floods4 1.png",
    alt: "Hut",
    size: " w-12  h-12  mb-3",
    link: "",
  },
  {
    id: 3,
    src: "/src/assets/images/landing page img/radar.png",
    outline: "/src/assets/images/landing page img/radar.png",
    alt: "Radar",
    size: " w-8  h-8",
    link: "",
  },
  {
    id: 4,
    src: "/src/assets/images/landing page img/emergency-call.png",
    outline: "/src/assets/images/landing page img/emergency-call (1) 1.png",
    alt: "Call",
    size: " w-6  h-6",
    link: "/EmergencyCantact",
  },
];

export default function DailyWeather() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("day");
    const [active, setActive] = useState("");
    const [tempUnit, setTempUnit] = useState("C");


  return (
    <div className=" bg-[#0F284C]  w-full h-[844px]">
      <nav className=" bg-[#4766821A]   text-[#CAF7FF]  relative">
      <div className=" flex   flex-row-reverse  justify-between  items-center  p-4">
        <img src="/src/assets/images/search.png" alt="search" className=" w-6  h-6" />

        <h1 className=" text-[28px]  text-[#CAF7FF]  font-bold">Weather</h1>

        <button onClick={() => setOpen(!open)} className=" block ">
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

        <div  >
      
            <img src="/src/assets/images/landing page img/BG.png" alt="bg" className="  w-[335px]      h-[209px]" />

            <div className="   fixed   top-20    ml-5 ">
               <img src="/src/assets/images/landing page img/user.png" alt="user" className=" w-16  h-16" />
              <p className=" text-[20px]  font-bold  text-[#CAF7FF]  mt-1">Patrick Bacalso</p>
              <p className=" text-[15px]  font-normal  -translate-y-1.5  text-[#CAF7FF]">CSIT238</p>
            </div>
          

          <div  >
            <p className=" pt-5  pl-5  text-[20px]  font-normal   text-[#ffffff]">Weather</p>
            <div className=" flex  w-full  h-[94px]   justify-center  items-center">
              <button
                onClick={() => setTempUnit("C")}
                className={` px-4  py-2  w-20  h-16  font-bold  text-2xl ${
                  tempUnit === "C" ? " bg-[#00DFC580]  text-[#CAF7FF]" : "  text-[#CAF7FF]"
                }`}
              >
                C°
              </button>
              <button
                onClick={() => setTempUnit("F")}
                className={` px-4  py-2  w-20   h-16  font-bold ${
                  tempUnit === "F" ? " bg-[#00DFC580]  text-[#CAF7FF]" : " text-[#CAF7FF]" 
                }`}
              >
                F°
              </button>
            </div>

       
            <ul >
              <li 
              
           onClick={() => setActive(active === "add" ? null : "add")}
                className={` flex  items-center  text-xl    font-bold  gap-1.5  pl-5  w-[335px]  h-[75px]  ${
                  active === "add"  ? " bg-[#00DFC580]  text-[#CAF7FF]" : " text-[#CAF7FF]" 
                }`}>
              
               <img src="/src/assets/images/landing page img/cloudy 1.png" alt="cloudy" className=" w-8  h-8" />
                  <span >Add to home screen</span>
            
              </li>
<Link to={'/UserProfile'} >
             <li 
          onClick={() => setActive(active === "edit" ? null : "edit")}
                className={` items-center  text-xl   font-bold  flex  gap-1.5  pl-5  w-[335px]  h-[75px]  ${
                  active === "edit"  ? " bg-[#00DFC580]  text-[#CAF7FF]" : " text-[#CAF7FF]" 
                }`}>
              
               <img src="/src/assets/images/landing page img/editing 1.png" alt="editing" className=" w-7  h-7" /> <span className=" ml-2 ">Edit profile</span>
            
              </li>
</Link>
              <li
                 onClick={() => setActive(active === "cust" ? null : "cust")}
                className={` items-center  text-xl   font-bold  flex  gap-1.5  pl-5  w-[335px]  h-[75px]  ${
                  active === "cust"  ? " bg-[#00DFC580]  text-[#CAF7FF]" : " text-[#CAF7FF]" 
                }`}>
              
               <img src="/src/assets/images/landing page img/widget 1.png" alt="editing" className=" w-[30px]  h-[30px]" /> <span className=" ml-2">Customize widget</span>
             
              </li>
<hr className=" w-[270px]  border   border-[#CAF7FF]   mt-3.5  ml-[30px] " />

               <li
                 onClick={() => setActive(active === "sett" ? null : "sett")}
                className={` items-center  text-xl  mt-3   font-bold  flex  gap-1.5  pl-5  w-[335px]  h-[75px]  ${
                  active === "sett"  ? " bg-[#00DFC580]  text-[#CAF7FF]" : " text-[#CAF7FF]" 
                }`}>
              
               <img src="/src/assets/images/landing page img/setting (1) 1.png" alt="setting" className=" w-[30px]  h-[30px]" /> <span className=" ml-2">Settings</span>
              
              </li>

                <li
                 onClick={() => setActive(active === "send" ? null : "send")}
                className={` items-center  text-xl  mt-3   font-bold  flex  gap-1.5  pl-5  w-[335px]  h-[75px]  ${
                  active === "send"  ? " bg-[#00DFC580]  text-[#CAF7FF]" : " text-[#CAF7FF]" 
                }`}>
              
               <img src="/src/assets/images/landing page img/feedback.png" alt="feedback" className=" w-[30px]  h-[30px]" /><span className=" ml-2">Send feedback</span>
           
              </li>

                 <li
                 onClick={() => setActive(active === "help" ? null : "help")}
                className={` items-center  text-xl  mt-3   font-bold  flex  gap-1.5  pl-5  w-[335px]  h-[77px]  ${
                  active === "help"  ? " bg-[#00DFC580]  text-[#CAF7FF]" : " text-[#CAF7FF]" 
                }`}>
              
               <img src="/src/assets/images/landing page img/question (1).png" alt="question" className=" w-[30px]  h-[29px]" /> <span className=" ml-2">Help</span>
             
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

      <div className=" flex   justify-between  m-6  items-baseline">
        <p className=" text-[20px]  font-bold  text-[#CAF7FF]">
          March
        </p>

        <div className=" flex  flex-col  items-end">
          <div className=" flex  mb-4  h-6  rounded-full  overflow-hidden  border  border-[#00DFC5]">
            <button
              onClick={() => setActiveTab("day")}
              className={` w-[69px]  rounded-[50px]   border   border-[#00DFC5]  text-[10px]  font-normal  transition-colors  ${
                activeTab === "day" 
                  ? " bg-[#00DFC5]  text-[#0F284C]  rounded-full"
                  : "  text-[#CAF7FF]   rounded-full"
              }`}
            >
              BY DAY
            </button>

            <button
              onClick={() => setActiveTab("month")}
              className={` w-[91px]    text-[10px]  font-normal  transition-colors ${
                activeTab === "month"
                  ? " bg-[#00DFC5]  text-[#0F284C]    rounded-full"
                  : "   text-[#CAF7FF]   rounded-full  "
              }`}
            >
              BY MONTH
            </button>
          </div>

          <button  
               onClick={() => setActiveTab("history")}
          className={`   w-[73px]  h-6 border  rounded-[50px]  border-[#00DFC5]  bg-[#0F284C]    text-[#CAF7FF]  text-[11px]  font-normal   onClick={() => setActiveTab("day")}
              transition-colors  ${
                activeTab === "history" 
                  ?  " bg-[#00DFC5]  text-[#0F284C]  rounded-full"
                  : "  text-[#CAF7FF]   rounded-full " 
              }`}>
            History
          </button>
        </div>
      </div>

         <div className=" flex   flex-col  items-center  gap-3    h-[600px]  overflow-y-auto   p-4 ">

  <div className=" w-[355px]  h-[122px]  rounded-[10px]  bg-[#0F2D57]  flex  justify-around  items-center">
  
  

<div className=" mt-4">
      <div className=" flex">
    <span className="  text-[64px]   font-bold   text-[#CAF7FF]">
                27
              </span>
              <span className=" text-[32px]  font-normal  text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className=" flex  flex-col">
          <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">Cloudy</span>
<span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/cloud.png" alt="cloud" className=" w-20  h-20"/>


<div className=" flex  flex-col">
  <span  className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
30
  </span>
  <span  className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
MON
  </span>
</div>
  </div>


  <div className=" w-[355px]  h-[122px]  rounded-[10px]  bg-[#0F2D57]  flex  justify-around  items-center">
  
  

<div className=" mt-4">
      <div className=" flex">
    <span className="  text-[64px]   font-bold   text-[#CAF7FF]">
                24
              </span>
              <span className=" text-[32px]  font-normal  text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className=" flex  flex-col">
          <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">Storm</span>
<span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/stormy 5.png" alt="stormy" className=" w-20  h-20"/>


<div className=" flex  flex-col">
  <span  className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
31
  </span>
  <span  className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
TUE
  </span>
</div>
  </div>
  
  <div className=" w-[355px]  h-[122px]  rounded-[10px]  bg-[#0F2D57]  flex  justify-around  items-center">
  
  

<div className=" mt-4">
      <div className=" flex">
    <span className="  text-[64px]   font-bold   text-[#CAF7FF]">
                28
              </span>
              <span className=" text-[32px]  font-normal  text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className=" flex  flex-col">
          <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">Cloudy</span>
<span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/cloudy 2.png" alt="cloud" className=" w-20  h-20"/>


<div className=" flex  flex-col">
  <span  className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
01
  </span>
  <span  className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
WED
  </span>
</div>
  </div>


    <div className=" w-[355px]  h-[122px]  rounded-[10px]  bg-[#0F2D57]  flex  justify-around  items-center">
  
  

<div className=" mt-4">
      <div className=" flex">
    <span className="  text-[64px]   font-bold   text-[#CAF7FF]">
                34
              </span>
              <span className=" text-[32px]  font-normal  text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className=" flex  flex-col">
          <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">WED</span>
<span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/cloudy 3.png" alt="cloud" className=" w-20  h-20"/>


<div className=" flex  flex-col">
  <span  className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
02
  </span>
  <span  className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
THU
  </span>
</div>
  </div>



    <div className=" w-[355px]  h-[122px]  rounded-[10px]  bg-[#0F2D57]  flex  justify-around  items-center">
  
  

<div className=" mt-4">
      <div className=" flex">
    <span className="  text-[64px]   font-bold   text-[#CAF7FF]">
               33
              </span>
              <span className=" text-[32px]  font-normal  text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className=" flex  flex-col">
          <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">Bright</span>
<span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/cloudy 3.png" alt="cloud" className=" w-20  h-20"/>


<div className=" flex  flex-col  items-center">
  <span  className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
03
  </span>
  <span  className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
FRI
  </span>
</div>
  </div>



    <div className=" w-[355px]  h-[122px]  rounded-[10px]  bg-[#0F2D57]  flex  justify-around  items-center">
  
  

<div className=" mt-4">
      <div className=" flex">
    <span className="  text-[64px]   font-bold   text-[#CAF7FF]">
              33
              </span>
              <span className=" text-[32px]  font-normal  text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className=" flex  flex-col">
          <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">Cloudy</span>
<span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/cloud.png" alt="cloud" className=" w-20  h-20"/>


<div className=" flex  flex-col ">
  <span  className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
04
  </span>
  <span  className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
SAT
  </span>
</div>
  </div>





    <div className=" w-[355px]  h-[122px]  rounded-[10px]  bg-[#0F2D57]  flex  justify-around  items-center">
  
  

<div className=" mt-4">
      <div className=" flex">
    <span className="  text-[64px]   font-bold   text-[#CAF7FF]">
                27
              </span>
              <span className=" text-[32px]  font-normal  text-[#CAF7FF] ">
                °
              </span>
      </div>
<div className=" flex  flex-col">
          <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">Cloudy</span>
<span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">Cebu, City</span>
</div>
</div>

  <img src="/src/assets/images/Daily-weather/cloud.png" alt="cloud" className=" w-20  h-20"/>


<div className=" flex  flex-col">
  <span  className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
05
  </span>
  <span  className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
SUN
  </span>
</div>
  </div>


</div> 

      <div className=" flex flex-col  hidden    h-[600px]  overflow-y-auto   p-2 ">
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

      <div className=" fixed  bottom-0  w-full  bg-[#0B1C3D]   z-50">
        <div className=" flex  justify-between  items-baseline  px-6  py-3">
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
