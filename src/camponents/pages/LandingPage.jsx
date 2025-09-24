import Header from "./RepetitivePage/Header";
import Footer from "./RepetitivePage/Footer";



export default function LandingPage() {


  return (
    <div className=" bg-[#0F284C] w-full  h-[844px]">

<Header/>
      <div className=" flex  flex-col  justify-center  items-center ">
        <img src="/src/assets/images/landing page img/cloud.png" alt="" />
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
