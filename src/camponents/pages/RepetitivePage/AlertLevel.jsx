import { useState } from "react";


export default function AlertLevel (){
  const [openAlert, setOpenAlert] = useState(false);


    return (
      <div>
            <div
          className={` fixed  z-60  top-0  left-0  h-full  w-[335px]  bg-[#0F284C]  text-white  transform  transition-transform  duration-300  ease-in-out
    overflow-y-auto  
    ${openAlert ? " translate-x-0" : " -translate-x-full"}
  `}
        >
       
        </div>
        {openAlert && (
          <div
            className=" fixed inset-0  bg-black  opacity-55  z-40"
            onClick={() => setOpenAlert(false)}
          ></div>
        )}
      </div>
    )
 
}