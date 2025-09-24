import { useState } from "react";
import Footer from "./RepetitivePage/Footer";
import Header from "./RepetitivePage/Header";

export default function DailyWeather() {
  const [activeTab, setActiveTab] = useState("day");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-[#0F284C]  w-full h-[844px]">
      <Header />

      <div className=" flex   justify-between  m-6  items-baseline">
        <p className=" text-[20px]  font-bold  text-[#CAF7FF]">March</p>

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
            onClick={() => setIsOpen(true)}
            className={`   w-[73px]  h-6 border  rounded-[50px]  border-[#00DFC5]     text-[#CAF7FF]  text-[11px]  font-normal 
              transition-colors  ${
                activeTab === "history"
                  ? " bg-[#00DFC5]  rounded-full"
                  : "  text-[#CAF7FF]   rounded-full "
              }`}
          >
            History
          </button>
        </div>
      </div>

      <div
        className={` flex   flex-col  items-center  gap-3    h-[600px]  overflow-y-auto   p-4   ${
          activeTab === "day" ? " flex" : "  hidden"
        }`}
      >
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
              <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">
                Cloudy
              </span>
              <span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">
                Cebu, City
              </span>
            </div>
          </div>

          <img
            src="/src/assets/images/Daily-weather/cloud.png"
            alt="cloud"
            className=" w-20  h-20"
          />

          <div className=" flex  flex-col">
            <span className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
              30
            </span>
            <span className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
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
              <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">
                Storm
              </span>
              <span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">
                Cebu, City
              </span>
            </div>
          </div>

          <img
            src="/src/assets/images/Daily-weather/stormy 5.png"
            alt="stormy"
            className=" w-20  h-20"
          />

          <div className=" flex  flex-col">
            <span className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
              31
            </span>
            <span className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
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
              <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">
                Cloudy
              </span>
              <span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">
                Cebu, City
              </span>
            </div>
          </div>

          <img
            src="/src/assets/images/Daily-weather/cloudy 2.png"
            alt="cloud"
            className=" w-20  h-20"
          />

          <div className=" flex  flex-col">
            <span className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
              01
            </span>
            <span className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
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
              <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">
                WED
              </span>
              <span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">
                Cebu, City
              </span>
            </div>
          </div>

          <img
            src="/src/assets/images/Daily-weather/cloudy 3.png"
            alt="cloud"
            className=" w-20  h-20"
          />

          <div className=" flex  flex-col">
            <span className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
              02
            </span>
            <span className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
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
              <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">
                Bright
              </span>
              <span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">
                Cebu, City
              </span>
            </div>
          </div>

          <img
            src="/src/assets/images/Daily-weather/cloudy 3.png"
            alt="cloud"
            className=" w-20  h-20"
          />

          <div className=" flex  flex-col  items-center">
            <span className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
              03
            </span>
            <span className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
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
              <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">
                Cloudy
              </span>
              <span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">
                Cebu, City
              </span>
            </div>
          </div>

          <img
            src="/src/assets/images/Daily-weather/cloud.png"
            alt="cloud"
            className=" w-20  h-20"
          />

          <div className=" flex  flex-col ">
            <span className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
              04
            </span>
            <span className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
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
              <span className=" text-[16px]  font-normal  -translate-y-6  text-[#CAF7FF]">
                Cloudy
              </span>
              <span className=" text-[16px]  font-normal  -translate-y-7  text-[#CAF7FF]">
                Cebu, City
              </span>
            </div>
          </div>

          <img
            src="/src/assets/images/Daily-weather/cloud.png"
            alt="cloud"
            className=" w-20  h-20"
          />

          <div className=" flex  flex-col">
            <span className=" text-[48px]  font-bold   text-[#CAF7FFB2] ">
              05
            </span>
            <span className=" text-[24px]  font-bold -translate-y-5  text-[#CAF7FFB2] ">
              SUN
            </span>
          </div>
        </div>
      </div>

      <div
        className={` flex flex-col      h-[600px]  overflow-y-auto   p-2      ${
          activeTab === "month" ? " flex" : "  hidden"
        }`}
      >
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
            <img
              src="/src/assets/images/Daily-weather/h 1.png"
              alt="h"
              className="w-5 h-5"
            />
            <span>30°</span>
            <span className="text-gray-400">25°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>28</span>
            <img
              src="/src/assets/images/Daily-weather/rain (1) 1.png"
              alt="rain"
              className="w-5 h-5"
            />
            <span>31°</span>
            <span className="text-gray-400">28°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>1</span>
            <img
              src="/src/assets/images/Daily-weather/rain 1.png"
              alt="rain"
              className="w-5 h-5"
            />
            <span>30°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>2</span>
            <img
              src="/src/assets/images/Daily-weather/cloudy-day 1.png"
              alt="cloudy"
              className="w-5 h-5"
            />
            <span>32°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>3</span>
            <img
              src="/src/assets/images/Daily-weather/cloudy (1) 1.png"
              alt="cloudy"
              className="w-5 h-5"
            />
            <span>34°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>4</span>
            <img
              src="/src/assets/images/Daily-weather/s1 1.png"
              alt="sunny"
              className="w-5 h-5"
            />
            <span>35°</span>
            <span className="text-gray-400">30°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>5</span>
            <img
              src="/src/assets/images/Daily-weather/cloudy-day 1.png"
              alt="cloudy"
              className="w-5 h-5"
            />
            <span>30°</span>
            <span className="text-gray-400">27°</span>
          </div>
        </div>

        <div className="flex justify-between mb-3 text-center text-xs">
          <div className="flex flex-col items-center w-8">
            <span>6</span>
            <img
              src="/src/assets/images/Daily-weather/cloudy-day 1.png"
              alt="cloudy"
              className="w-5 h-5"
            />
            <span>32°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>7</span>
            <img
              src="/src/assets/images/Daily-weather/rain (1) 1.png"
              alt="rain"
              className="w-5 h-5"
            />
            <span>30°</span>
            <span className="text-gray-400">26°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>8</span>
            <img
              src="/src/assets/images/Daily-weather/rain 1.png"
              alt="rain"
              className="w-5 h-5"
            />
            <span>30°</span>
            <span className="text-gray-400">26°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>9</span>
            <img
              src="/src/assets/images/Daily-weather/h 1.png"
              alt="h"
              className="w-5 h-5"
            />
            <span>30°</span>
            <span className="text-gray-400">24°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>10</span>
            <img
              src="/src/assets/images/Daily-weather/cloudy-day 1.png"
              alt="cloudy"
              className="w-5 h-5"
            />
            <span>32°</span>
            <span className="text-gray-400">27°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>11</span>
            <img
              src="/src/assets/images/Daily-weather/cloudy (1) 1.png"
              alt="cloudy"
              className="w-5 h-5"
            />
            <span>34°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>12</span>
            <img
              src="/src/assets/images/Daily-weather/s1 1.png"
              alt="sunny"
              className="w-5 h-5"
            />
            <span>35°</span>
            <span className="text-gray-400">29°</span>
          </div>
        </div>

        <div className="flex justify-between mb-3 text-center text-xs">
          <div className="flex flex-col items-center w-8">
            <span>13</span>
            <img
              src="/src/assets/images/Daily-weather/rain 1.png"
              alt="rain"
              className="w-5 h-5"
            />
            <span>31°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>14</span>
            <img
              src="/src/assets/images/Daily-weather/rain (1) 1.png"
              alt="rain"
              className="w-5 h-5"
            />
            <span>32°</span>
            <span className="text-gray-400">30°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>15</span>
            <img
              src="/src/assets/images/Daily-weather/h 1.png"
              alt="h"
              className="w-5 h-5"
            />
            <span>30°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>16</span>
            <img
              src="/src/assets/images/Daily-weather/cloudy-day 1.png"
              alt="cloudy"
              className="w-5 h-5"
            />
            <span>33°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>17</span>
            <img
              src="/src/assets/images/Daily-weather/cloudy-day 1.png"
              alt="cloudy"
              className="w-5 h-5"
            />
            <span>33°</span>
            <span className="text-gray-400">29°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>18</span>
            <img
              src="/src/assets/images/Daily-weather/cloudy (1) 1.png"
              alt="cloudy"
              className="w-5 h-5"
            />
            <span>34°</span>
            <span className="text-gray-400">30°</span>
          </div>
          <div className="flex flex-col items-center w-8">
            <span>19</span>
            <img
              src="/src/assets/images/Daily-weather/s1 1.png"
              alt="sunny"
              className="w-5 h-5"
            />
            <span>35°</span>
            <span className="text-gray-400">30°</span>
          </div>
        </div>
      </div>
      {/* modal */}
      {isOpen && (
        <div
          className="  inset-0  bg-opacity-50 flex justify-center items-start pt-20 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#0F2D57] rounded-lg border-t-2 border-[#CAF7FF] h-[500px] w-full  shadow-lg animate-slideDown"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "slideDown 0.3s ease forwards" }}
          >
            {/* Header */}
            <div className="flex gap-24  p-6 items-center">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white mr-4 text-2xl font-bold"
                aria-label="Close modal"
              >
                <img
                  src="/src/assets/images/landing page img/arrow 1.png"
                  alt="arrow"
                  className="w-9 h-9"
                />
              </button>
              <h1 className="font-bold text-[20px] leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF] ">
                History
              </h1>
            </div>
            <hr className=" text-[#CAF7FFCC] w-[400px] " />
            {/* Date */}
            <div className="text-center mb-8">
              <p className="text-xl font-normal my-9  leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF] ">
                Monday 31 March
              </p>
            </div>

            {/* Table */}
            <div className="space-y-6 p-6">
              <div className="w-full flex justify-end gap-4 pr-3">
                <span className="text-[16px] font-normal leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF] ">
                  HIGH
                </span>
                <span className="text-[16px] font-normal leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF] ">
                  LOW
                </span>
              </div>
              {/* Row */}
              <div className="flex justify-between px-3">
                <span className="text-[17px] font-normal leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF]">
                  Today’s Forecast
                </span>
                <div className="flex gap-8 ">
                  <span className="text-[28px] font-bold leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF]">
                    30°
                  </span>
                  <span className=" text-[28px] font-bold leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF]">
                    27°
                  </span>
                </div>
              </div>

              {/* Row */}
              <div className="flex justify-between px-3">
                <span className="text-[17px] font-normal leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF]">
                  Normal
                </span>
                <div className="flex gap-8 font-semibold text-lg md:text-xl">
                  <span className="text-[28px] font-bold leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF]">
                    32°
                  </span>
                  <span className=" text-[28px] font-bold leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF]">
                    25°
                  </span>
                </div>
              </div>

              {/* Row */}
              <div className="flex justify-between px-3">
                <span className="text-[17px] font-normal leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF]">
                  Last Year on this Date
                </span>
                <div className="flex gap-8 font-semibold text-lg md:text-xl">
                  <span className="text-[28px] font-bold leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF]">
                    32°
                  </span>
                  <span className="text-[28px] font-bold leading-[100%] tracking-[0.05em] text-center align-middle text-[#CAF7FF]">
                    26°
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* menu icons  */}
      <Footer />
    </div>
  );
}
