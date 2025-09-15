import React from "react";
import { Link } from "react-router";

export default function UserProfile() {
  return (
    <div className="  bg-[#0F284C]  w-full  h-[844px]">
      <div className=" relative">
        <div className="  flex  justify-around  absolute  top-0  left-0  w-full  h-32  gap-60  mt-5   z-20">
          <img
            src="/src/assets/images/landing page img/arrow 1.png"
            alt="arrow"
            className=" w-8  h-8  opacity-50"
          />
          <div className="  w-11  h-11  bg-[#0F2D57]  flex  justify-center  items-center  rounded-full">
            <img
              src="/src/assets/images/landing page img/share 1.png"
              alt="share"
              className=" w-8  h-8"
            />
          </div>
        </div>

        <img
          src="/src/assets/images/landing page img/BG.png"
          alt="BG"
          className="  top-0  left-0  w-full  h-[226px]    z-10"
        />

        <div className="  flex  flex-col items-center  relative bottom-8 ">
          <div className="  flex  justify-center  items-center  rounded-full  w-[90px]  h-[90px]  bg-[#0F2D57]  shadow-sm   shadow-black ">
            <img
              src="/src/assets/images/landing page img/user.png"
              alt="user"
              className=" w-16  h-16"
            />
          </div>
          <p className="  text-2xl  font-bold  text-[#00DFC5]  tracking-[0.05em]  mt-2  ">
            Patrick Bacalso
          </p>
        </div>
      </div>
      <div className="  h-[51px]  flex  items-center  gap-5  pl-8    drop-shadow-sm  shadow-black  w-full  bg-[#0F2D57]">
        <img
          src="/src/assets/images/landing page img/add-photo 1.png"
          alt="add-photo "
          className=" w-6   h-6"
        />
        <p className="  font-normal  text-xl  text-white">Set Profile Photo</p>
      </div>

      <div className="    drop-shadow-sm   shadow-black   mt-4  flex   flex-col     w-full ">
        <div className="  drop-shadow-xl   mb-[1px]  flex   flex-col   justify-center    w-full  h-[70px]  pl-8  bg-[#0F2D57]  shadow-[#0F284C]">
          <p className="  font-bold  text-xl  text-[#CAF7FF]">
            @patrick.bacalso{" "}
          </p>
          <span className=" font-normal  text-[16px]  text-gray-500">
            Username
          </span>
        </div>

        <div className="  drop-shadow-sm   flex   flex-col   justify-center    w-full  h-[70px]  pl-8  bg-[#0F2D57]  shadow-black ">
          <p className="  font-bold  text-xl  text-[#CAF7FF]">Bio</p>
          <span className=" font-normal  text-[16px]  text-gray-500">
            Add a few words about yourself
          </span>
        </div>
      </div>

      <div className=" flex  mt-4    flex-col  justify-center  gap-5  shadow-black  drop-shadow-sm   pl-8   bg-[#0F2D57]   h-[90px]">
        <div className="  flex  items-center w-full  gap-3.5  justify-between ">
          <Link to={"/AboutUs"}>
            <div className="  flex  items-center  gap-4  ">
              <img
                src="/src/assets/images/landing page img/info.png"
                alt="info"
                className="  h-6  w-6"
              />
              <p className="  text-xl  font-normal  text-white "> About Us</p>
            </div>
          </Link>
          <img
            src="/src/assets/images/landing page img/right-arrow 3.png"
            alt="right-arrow"
            className=" h-4  w-4  mr-6"
          />
        </div>

        <div className="  flex  items-center w-full  gap-3.5  justify-between ">
          <Link to={"/ContactUs"}>
            <div className="  flex  items-center  gap-4  ">
              <img
                src="/src/assets/images/landing page img/email.png"
                alt="info"
                className="  h-[30px]  w-[27px]"
              />
              <p className="  text-xl  font-normal  text-white ">Contact Us</p>
            </div>
          </Link>
          <img
            src="/src/assets/images/landing page img/right-arrow 3.png"
            alt="right-arrow"
            className=" h-4  w-4  mr-6"
          />
        </div>
      </div>

      <div className=" flex  mt-5    flex-col  justify-center  gap-5  shadow-black  drop-shadow-sm   pl-8   bg-[#0F2D57]   h-[150px]">
        <div className="  flex  items-center w-full  gap-3.5  justify-between ">
          <div className="  flex  items-center  gap-4  ">
            <img
              src="/src/assets/images/landing page img/share 1.png"
              alt="share"
              className="  h-[22px]  w-[22px]"
            />
            <p className="  text-xl  font-normal  text-[#CAF7FF] ">
              {" "}
              Share The App
            </p>
          </div>
          <img
            src="/src/assets/images/landing page img/right-arrow 3.png"
            alt="right-arrow"
            className=" h-4  w-4  mr-6"
          />
        </div>

        <div className="  flex  items-center w-full  gap-3.5  justify-between ">
          <div className="  flex  items-center  gap-4  ">
            <img
              src="/src/assets/images/landing page img/conversation 1.png"
              alt="info"
              className="  h-[29px]  w-[29px]"
            />
            <p className="  text-xl  font-normal  text-white ">
              Help And Support
            </p>
          </div>
          <img
            src="/src/assets/images/landing page img/right-arrow 3.png"
            alt="right-arrow"
            className=" h-4  w-4  mr-6"
          />
        </div>

        <div className="  flex  items-center w-full  gap-3.5  justify-between ">
          <div className="  flex  items-center  gap-4  ">
            <img
              src="/src/assets/images/landing page img/logout 1.png"
              alt="logout"
              className="  h-[21px]  w-[21px]"
            />
            <p className="  text-xl  font-normal  text-white ">Log Out</p>
          </div>
          <img
            src="/src/assets/images/landing page img/right-arrow 3.png"
            alt="right-arrow"
            className=" h-4  w-4  mr-6"
          />
        </div>
      </div>
    </div>
  );
}
